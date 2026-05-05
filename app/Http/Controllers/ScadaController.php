<?php

namespace App\Http\Controllers;

use App\Models\ScadaCommand;
use App\Models\ScadaEvent;
use App\Services\NodeRedClient;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ScadaController extends Controller
{
    private NodeRedClient $nodeRedClient;

    public function __construct(NodeRedClient $nodeRedClient)
    {
        $this->nodeRedClient = $nodeRedClient;
    }

    /**
     * GET /api/scada/dashboard
     * Obtiene el estado actual del sistema SCADA desde Node-RED
     */
    public function getDashboard(): JsonResponse
    {
        $estados = $this->nodeRedClient->obtenerEstados();

        if (!$estados) {
            return response()->json([
                'message' => 'No se pudo conectar a Node-RED',
            ], 503);
        }

        return response()->json(['data' => $estados]);
    }

    /**
     * POST /api/scada/enviar-comando
     * Envía un comando a Node-RED y registra la auditoría.
     * v1.1: Usa filter_var(FILTER_VALIDATE_BOOLEAN) para normalizar el valor
     * (maneja "true", "1", 1, true, "false", "0", 0, false).
     */
    public function enviarComando(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'tag' => 'required|string|max:50',
            'valor' => 'required',
        ]);

        // Normalización robusta del booleano (igual que v1.1 del PHP)
        $valor = filter_var($validated['valor'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
        // Si no es booleano puro, enviamos el valor original (puede ser numérico o string)
        $valorNormalizado = $valor !== null ? $valor : $validated['valor'];

        $resultado = $this->nodeRedClient->enviarComando($validated['tag'], $valorNormalizado);

        // Registra el comando en la BD para auditoría
        $command = ScadaCommand::create([
            'user_id' => auth()->id(),
            'tag' => $validated['tag'],
            'valor' => $valorNormalizado,
            'estado_nodored' => $resultado['data'] ?? null,
            'resultado' => $resultado['success'] ? 'success' : 'error',
            'error_mensaje' => !$resultado['success'] ? ($resultado['error'] ?? 'Error desconocido') : null,
        ]);

        if (!$resultado['success']) {
            return response()->json([
                'message' => 'Error al enviar comando a Node-RED',
                'error' => $resultado['error'] ?? 'Error desconocido',
            ], 400);
        }

        return response()->json([
            'data' => $command,
            'message' => 'Comando enviado correctamente',
        ]);
    }

    /**
     * GET /api/scada/historicos
     * Retorna el histórico de comandos y eventos
     */
    public function getHistoricos(Request $request): JsonResponse
    {
        $machineId = $request->query('machine_id');
        $days = $request->query('days', 30);
        $perPage = $request->query('per_page', 50);

        $query = ScadaCommand::query();

        if ($machineId) {
            // Si hay machine_id, también incluir eventos de esa máquina
            $eventosQuery = ScadaEvent::where('machine_id', $machineId)
                ->where('created_at', '>=', now()->subDays($days));
        }

        $commandos = $query
            ->where('created_at', '>=', now()->subDays($days))
            ->with('user')
            ->latest()
            ->paginate($perPage);

        return response()->json([
            'data' => $commandos->items(),
            'pagination' => [
                'total' => $commandos->total(),
                'per_page' => $commandos->perPage(),
                'current_page' => $commandos->currentPage(),
                'last_page' => $commandos->lastPage(),
            ],
        ]);
    }

    /**
     * GET /api/scada/eventos-maquina/{machineId}
     * Retorna eventos de una máquina específica (para integración con Tickets)
     */
    public function getEventosMaquina(int $machineId, Request $request): JsonResponse
    {
        $days = $request->query('days', 7);
        $perPage = $request->query('per_page', 30);

        $eventos = ScadaEvent::where('machine_id', $machineId)
            ->where('created_at', '>=', now()->subDays($days))
            ->latest()
            ->paginate($perPage);

        return response()->json([
            'data' => $eventos->items(),
            'pagination' => [
                'total' => $eventos->total(),
                'per_page' => $eventos->perPage(),
                'current_page' => $eventos->currentPage(),
                'last_page' => $eventos->lastPage(),
            ],
        ]);
    }

    /**
     * POST /api/scada/evento-manual
     * Registra un evento manual de SCADA (para casos especiales)
     */
    public function registrarEventoManual(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'machine_id' => 'required|exists:machines,id',
            'evento_type' => 'required|string|max:50',
            'valor_anterior' => 'nullable',
            'valor_nuevo' => 'nullable',
        ]);

        $evento = ScadaEvent::create($validated);

        return response()->json([
            'data' => $evento,
            'message' => 'Evento registrado correctamente',
        ], 201);
    }
}
