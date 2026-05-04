<?php

namespace App\Http\Controllers;

use App\Mail\OrderConfirmationMail;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Stripe\StripeClient;

class OrderController extends Controller
{
    // GET /api/orders — Lista los pedidos del usuario autenticado
    public function index(Request $request): JsonResponse
    {
        $orders = Order::where('user_id', $request->user()->id)
            ->with('items')
            ->orderByDesc('created_at')
            ->get();

        return response()->json(['data' => $orders]);
    }

    // GET /api/orders/{order} — Detalle de un pedido
    public function show(Request $request, Order $order): JsonResponse
    {
        abort_if($order->user_id !== $request->user()->id, 403);

        $order->load('items');

        return response()->json(['data' => $order]);
    }

    // POST /api/orders — Crear pedido tras confirmar el pago Stripe
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'payment_intent_id' => 'required|string',
            'shipping_address'  => 'nullable|string|max:500',
            'notes'             => 'nullable|string|max:1000',
        ]);

        // 1. Verificar el PaymentIntent con Stripe
        $stripe = new StripeClient(config('services.stripe.secret'));

        try {
            $intent = $stripe->paymentIntents->retrieve($request->payment_intent_id);
        } catch (\Exception $e) {
            return response()->json(['message' => 'PaymentIntent no válido.'], 422);
        }

        if ($intent->status !== 'succeeded') {
            return response()->json([
                'message' => 'El pago no se ha completado. Estado: ' . $intent->status,
            ], 422);
        }

        // Evitar crear pedido duplicado para el mismo PaymentIntent
        if (Order::where('stripe_payment_intent_id', $intent->id)->exists()) {
            $existing = Order::where('stripe_payment_intent_id', $intent->id)->first();
            return response()->json(['data' => $existing->load('items')], 200);
        }

        // 2. Obtener el carrito del usuario
        $cart = Cart::where('user_id', $request->user()->id)
            ->with('items.product')
            ->firstOrFail();

        if ($cart->items->isEmpty()) {
            return response()->json(['message' => 'El carrito está vacío.'], 422);
        }

        // 3. Crear el pedido dentro de una transacción
        $order = DB::transaction(function () use ($request, $cart, $intent) {
            $subtotal = $cart->subtotal;
            $tax      = $cart->tax;
            $total    = $cart->total;

            $order = Order::create([
                'user_id'                   => $request->user()->id,
                'status'                    => 'confirmed',
                'subtotal'                  => $subtotal,
                'tax'                       => $tax,
                'total'                     => $total,
                'stripe_payment_intent_id'  => $intent->id,
                'stripe_status'             => $intent->status,
                'shipping_address'          => $request->shipping_address,
                'notes'                     => $request->notes,
            ]);

            // Crear order_items y descontar stock
            foreach ($cart->items as $cartItem) {
                $order->items()->create([
                    'product_id'   => $cartItem->product_id,
                    'product_name' => $cartItem->product->name,
                    'product_sku'  => $cartItem->product->sku ?? null,
                    'unit_price'   => $cartItem->unit_price,
                    'quantity'     => $cartItem->quantity,
                    'subtotal'     => $cartItem->subtotal,
                ]);

                // Descontar stock del producto
                $cartItem->product->decrement('stock', $cartItem->quantity);
            }

            // Vaciar el carrito
            $cart->items()->delete();

            return $order;
        });

        // 4. Enviar email de confirmación
        Mail::to($request->user()->email)->send(new OrderConfirmationMail($order->load('items')));

        return response()->json([
            'message' => '¡Pedido confirmado! Recibirás un email de confirmación.',
            'data'    => $order->load('items'),
        ], 201);
    }
}
