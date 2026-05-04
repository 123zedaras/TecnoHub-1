<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * GET /api/products — Lista todos los productos activos.
     * Acepta parámetro opcional ?search= para filtrar por nombre o SKU.
     */
    public function index(Request $request): JsonResponse
    {
        $products = Product::where('active', true)
            ->when($request->search, function ($q, $search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('sku', 'like', "%{$search}%");
            })
            ->orderBy('name')
            ->get();

        return response()->json(['data' => $products]);
    }

    /**
     * GET /api/products/{product} — Devuelve un producto concreto.
     */
    public function show(Product $product): JsonResponse
    {
        return response()->json(['data' => $product]);
    }
}
