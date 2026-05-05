<?php

namespace App\Policies;

use App\Models\User;

class ScadaPolicy
{
    /**
     * Solo técnicos y admins pueden ver el dashboard SCADA
     */
    public function view(User $user): bool
    {
        return $user->role === 'technician' || $user->role === 'admin';
    }

    /**
     * Solo técnicos y admins pueden enviar comandos
     */
    public function enviarComando(User $user): bool
    {
        return $user->role === 'technician' || $user->role === 'admin';
    }

    /**
     * Solo técnicos y admins pueden ver históricos
     */
    public function viewHistoricos(User $user): bool
    {
        return $user->role === 'technician' || $user->role === 'admin';
    }

    /**
     * Solo admins pueden registrar eventos manuales
     */
    public function registrarEventoManual(User $user): bool
    {
        return $user->role === 'admin';
    }
}
