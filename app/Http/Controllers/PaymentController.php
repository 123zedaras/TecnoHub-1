<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Stripe\StripeClient;

class PaymentController extends Controller
{
    // POST /api/payments/create-intent
    // Crea un PaymentIntent de Stripe con el importe total del carrito.
    // Angular recibe el client_secret para confirmar el pago en el frontend.
    public function createIntent(Request $request): JsonResponse
    {
        $cart = Cart::where('user_id', $request->user()->id)
            ->with('items.product')
            ->firstOrFail();

        if ($cart->items->isEmpty()) {
            return response()->json(['message' => 'El carrito está vacío.'], 422);
        }

        $stripe = new StripeClient(config('services.stripe.secret'));

        // Stripe trabaja en céntimos (euros × 100)
        $amountCents = (int) round($cart->total * 100);

        $intent = $stripe->paymentIntents->create([
            'amount'   => $amountCents,
            'currency' => 'eur',
            'metadata' => [
                'user_id' => $request->user()->id,
                'cart_id' => $cart->id,
            ],
            'automatic_payment_methods' => ['enabled' => true],
        ]);

        return response()->json([
            'client_secret'      => $intent->client_secret,
            'payment_intent_id'  => $intent->id,
            'amount'             => $cart->total,
            'amount_cents'       => $amountCents,
        ]);
    }

    // POST /api/webhooks/stripe
    // Endpoint SIN autenticación para recibir eventos de Stripe.
    // NOTA: Este endpoint es opcional si se usa el flujo de confirmación directa
    // desde Angular (confirmCardPayment → POST /api/orders). Se incluye para
    // manejar casos edge (pagos asíncronos, reintento de webhook, etc.)
    public function handleWebhook(Request $request): JsonResponse
    {
        $payload   = $request->getContent();
        $sigHeader = $request->header('Stripe-Signature');
        $secret    = config('services.stripe.webhook_secret');

        try {
            $event = \Stripe\Webhook::constructEvent($payload, $sigHeader, $secret);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            return response()->json(['message' => 'Firma de webhook inválida.'], 400);
        }

        // Manejar el evento payment_intent.succeeded si aún no se creó el pedido
        if ($event->type === 'payment_intent.succeeded') {
            $intent = $event->data->object;
            // Si el pedido ya fue creado por POST /api/orders, no hacer nada
            // Si no, el operario puede recuperarlo manualmente
        }

        return response()->json(['received' => true]);
    }
}
