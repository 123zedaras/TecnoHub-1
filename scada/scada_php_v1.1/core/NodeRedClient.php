<?php
class NodeRedClient {
    private $baseUrl = "http://10.166.196.22:1880/";

    public function enviarComando($tag, $valor) {
    // Esto hará que si el tag es "Auto", la URL sea http://127.0.0.1:1880/set/Auto
    $url = $this->baseUrl . "/set/" . $tag; 
    
    $data = json_encode(["valor" => $valor]); // Enviamos solo el valor

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_TIMEOUT, 2);
    
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}

    public function obtenerEstados() {
        $url = $this->baseUrl . "/plc/estados";
        // Usamos cURL también para leer, es más robusto que file_get_contents
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 2);
        $json = curl_exec($ch);
        curl_close($ch);
        
        return json_decode($json, true) ?? [];
    }

/*public function obtenerTiempo() {
    $url = $this->baseUrl . "/plc/tiempo";
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 1);
    $json = curl_exec($ch);
    
    // --- NUEVO: Registro de logs para depuración ---
    if (curl_errno($ch)) {
        error_log("Error cURL en obtenerTiempo: " . curl_error($ch));
    } else {
        error_log("Respuesta cruda de Node-RED (tiempo): " . $json);
    }
    // -----------------------------------------------
    
    curl_close($ch);
    
    $data = json_decode($json, true);
    $valor = $data['TIEMPO'] ?? 0;
    
    // Log adicional para ver qué valor final estás procesando
    error_log("Valor procesado de TIEMPO: " . $valor);
    
    return $valor;
}*/
}