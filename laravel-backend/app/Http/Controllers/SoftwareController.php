<?php
namespace App\Http\Controllers;

use App\Models\Software;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SoftwareController extends Controller
{
    /**
     * GET /api/software — Lista todos los software.
     * Acepta parámetro opcional ?search= para filtrar por nombre o versión.
     */
    public function index(Request $request): JsonResponse
    {
        $software = Software::query()
            ->when($request->search, function ($q, $search) {
                $q->where('nombre', 'like', "%{$search}%")
                  ->orWhere('version', 'like', "%{$search}%");
            })
            ->orderBy('nombre')
            ->get();

        return response()->json(['data' => $software]);
    }

    /**
     * GET /api/software/{software} --- Devuelve un software concreto.
     */
    public function show(Software $software): JsonResponse
    {
        return response()->json(['data' => $software]);
    }
}
