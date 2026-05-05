<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Controlador para gestionar el carrito de compras.
 * 
 * Rutas:
 * - GET /api/cart — Mostrar el carrito del usuario
 * - POST /api/cart/items — Añadir producto al carrito
 * - PUT /api/cart/items/{item} — Actualizar cantidad de un item
 * - DELETE /api/cart/items/{item} — Eliminar un item del carrito
 * - DELETE /api/cart — Vaciar el carrito completo
 */
class CartController extends Controller
{
    /**
     * GET /api/cart — Devuelve el carrito del usuario con todos los items. 
     * Si el carrito no existe, se crea uno nuevo para el usuario. 
     * Cada item incluye detalles del producto y los totales del carrito se calculan en tiempo real.
     */
    public function show(Request $request): JsonResponse
    {
        $cart = Cart::getOrCreateForUser($request->user()->id);
        $cart->load('items.product');

        return response()->json([
            'data' => [
                'id'         => $cart->id,
                'items'      => $cart->items->map(fn($item) => $this->formatItem($item)),
                'subtotal'   => $cart->subtotal,
                'tax'        => $cart->tax,
                'total'      => $cart->total,
                'item_count' => $cart->item_count,
            ],
        ]);
    }

    /**
     * POST /api/cart/items — Añade un producto al carrito. 
     * Valida que el producto exista y que la cantidad solicitada no exceda el stock disponible. 
     * Si el producto ya está en el carrito, se actualiza la cantidad en lugar de crear un nuevo item. 
     * Devuelve el item añadido o actualizado junto con el estado actualizado del carrito. 
     * Si hay un error de validación o stock, devueve un mensaje de error
     */
    public function addItem(Request $request): JsonResponse
    {
        // Validar entrada
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity'   => 'required|integer|min:1|max:99',
        ]);

        // Verificar stock
        $product = Product::findOrFail($request->product_id);

        // Si el producto no tiene suficiente stock, devolver error
        if ($product->stock < $request->quantity) {
            return response()->json([
                'message' => "Stock insuficiente. Disponible: {$product->stock} unidades.",
            ], 422);
        }

        // Obtener o crear el carrito del usuario
        $cart = Cart::getOrCreateForUser($request->user()->id);

        // Si ya existe el producto en el carrito, aumentar cantidad
        $existingItem = $cart->items()->where('product_id', $product->id)->first();

        // Verificar que la nueva cantidad no exceda el stock disponible
        if ($existingItem) {
            $newQty = $existingItem->quantity + $request->quantity;
            if ($newQty > $product->stock) {
                return response()->json([
                    'message' => "No puedes añadir más unidades. Stock disponible: {$product->stock}.",
                ], 422);
            }
            $existingItem->update(['quantity' => $newQty]);
            $item = $existingItem->fresh();
        } else { // Si no existe, crear nuevo item en el carrito
            $item = $cart->items()->create([
                'product_id' => $product->id,
                'quantity'   => $request->quantity,
                'unit_price' => $product->price,
            ]);
        }

        // Cargar relación de producto para el item recién creado o actualizado
        $item->load('product');
        $cart->refresh()->load('items');

        // Devolver respuesta con el item añadido y el estado actualizado del carrito
        return response()->json([
            'message' => 'Producto añadido al carrito.',
            'data'    => $this->formatItem($item),
            'cart'    => [
                'item_count' => $cart->item_count,
                'total'      => $cart->total,
            ],
        ], 201);
    }

    /**
     * PUT /api/cart/items/{item} — Actualiza la cantidad de un item en el carrito. 
     * Valida que la cantidad solicitada sea un número entero positivo y que no exceda el stock disponible del producto. 
     * Devuelve el item actualizado junto con el estado actualizado del carrito. 
     * Si el item no pertenece al usuario o si hay un error de validación o stock, devuelve un mensaje de error.
     */
    public function updateItem(Request $request, CartItem $item): JsonResponse
    {
        $this->authorizeItem($item, $request->user()->id);

        $request->validate([
            'quantity' => 'required|integer|min:1|max:99',
        ]);

        // Verificar stock
        if ($item->product->stock < $request->quantity) {
            return response()->json([
                'message' => "Stock insuficiente. Disponible: {$item->product->stock} unidades.",
            ], 422);
        }

        // Actualizar cantidad del item
        $item->update(['quantity' => $request->quantity]);
        $item->load('product');

        // Refrescar el carrito para obtener los totales actualizados
        $cart = $item->cart->fresh();
        $cart->load('items');

        // Devolver respuesta con el item actualizado y el estado actualizado del carrito
        return response()->json([
            'message' => 'Cantidad actualizada.',
            'data'    => $this->formatItem($item),
            'cart'    => [
                'subtotal'   => $cart->subtotal,
                'tax'        => $cart->tax,
                'total'      => $cart->total,
                'item_count' => $cart->item_count,
            ],
        ]);
    }

    /**
     * DELETE /api/cart/items/{item} — Elimina un item del carrito. 
     * Valida que el item exista y que pertenezca al carrito del usuario. 
     * Devuelve un mensaje de éxito junto con el estado actualizado del carrito. 
     * Si el item no pertenece al usuario, devuelve un mensaje de error de autorización.
     */
    public function removeItem(Request $request, CartItem $item): JsonResponse
    {
        $this->authorizeItem($item, $request->user()->id);
        $item->delete();

        $cart = Cart::getOrCreateForUser($request->user()->id);
        $cart->load('items');

        return response()->json([
            'message' => 'Producto eliminado del carrito.',
            'cart'    => [
                'subtotal'   => $cart->subtotal,
                'tax'        => $cart->tax,
                'total'      => $cart->total,
                'item_count' => $cart->item_count,
            ],
        ]);
    }

    /**
     * DELETE /api/cart — Vaciar el carrito completo
     * Valida que el carrito exista para el usuario. 
     * Elimina todos los items del carrito. 
     * Devuelve un mensaje de éxito junto con el estado actualizado del carrito (que debería estar vacío). 
     * Si el carrito no existe, devuelve un mensaje de error.
     */
    public function clear(Request $request): JsonResponse
    {
        $cart = Cart::getOrCreateForUser($request->user()->id);
        $cart->items()->delete();

        return response()->json(['message' => 'Carrito vaciado.']);
    }

    // ── Helpers ────────────────────────────────────────────────────────────────

    /**
     * Autoriza que el item pertenezca al usuario.
     */
    private function authorizeItem(CartItem $item, int $userId): void
    {
        $cart = Cart::where('user_id', $userId)->firstOrFail();
        abort_if($item->cart_id !== $cart->id, 403, 'No autorizado.');
    }

    /**
     * Formatea un item del carrito para la respuesta JSON.
     */
    private function formatItem(CartItem $item): array
    {
        return [
            'id'           => $item->id,
            'product_id'   => $item->product_id,
            'product_name' => $item->product->name ?? 'Producto no disponible',
            'product_sku'  => $item->product->sku ?? null,
            'product_image'=> $item->product->image ?? null,
            'unit_price'   => $item->unit_price,
            'quantity'     => $item->quantity,
            'subtotal'     => $item->subtotal,
        ];
    }
}
