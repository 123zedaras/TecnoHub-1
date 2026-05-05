<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\ConnectionException;

class NodeRedClient
{
    private string $baseUrl = 'http://10.166.196.22:1880';
    private int $timeout = 5;

    public function __construct()
    {
        if (config('services.nodered.url')) {
            $this->baseUrl = config('services.nodered.url');
        }
    }

    /**
     * Obtiene el estado actual del sistema SCADA desde Node-RED
     * v1.1: endpoint cambiado de /scada-status a /plc/estados
     */
    public function obtenerEstados(): ?array
    {
        try {
            $response = Http::timeout($this->timeout)
                ->get("{$this->baseUrl}/plc/estados");

            return $response->successful() ? $response->json() : null;
        } catch (ConnectionException) {
            return null;
        }
    }

    /**
     * Envía un comando a Node-RED
     * v1.1: URL dinámica /set/{tag} con payload {"valor": ...} (tag ya no va en el body)
     */
    public function enviarComando(string $tag, mixed $valor): array
    {
        try {
            $response = Http::timeout($this->timeout)
                ->post("{$this->baseUrl}/set/{$tag}", [
                    'valor' => $valor,
                ]);

            if ($response->successful()) {
                return [
                    'success' => true,
                    'data' => $response->json(),
                ];
            }

            return [
                'success' => false,
                'status' => $response->status(),
                'error' => $response->body(),
            ];
        } catch (ConnectionException $e) {
            return [
                'success' => false,
                'error' => 'Connection timeout or error: ' . $e->getMessage(),
            ];
        }
    }

    /**
     * Obtiene los parámetros/configuración actual de Node-RED
     */
    public function obtenerConfiguracion(): ?array
    {
        try {
            $response = Http::timeout($this->timeout)
                ->get("{$this->baseUrl}/scada-config");

            return $response->successful() ? $response->json() : null;
        } catch (ConnectionException) {
            return null;
        }
    }
}
