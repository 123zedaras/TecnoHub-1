<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTicketRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // El middleware auth:sanctum ya verifica la autenticación
    }

    public function rules(): array
    {
        return [
            'title'       => 'required|string|min:5|max:255',
            'description' => 'required|string|min:10|max:5000',
            'priority'    => 'required|in:critical,high,normal,low',
            'machine_id'  => 'nullable|exists:machines,id',
            'assigned_to' => 'nullable|exists:users,id',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required'       => 'El título es obligatorio.',
            'title.min'            => 'El título debe tener al menos 5 caracteres.',
            'description.required' => 'La descripción es obligatoria.',
            'description.min'      => 'La descripción debe tener al menos 10 caracteres.',
            'priority.required'    => 'La prioridad es obligatoria.',
            'priority.in'          => 'La prioridad debe ser: crítica, alta, normal o baja.',
            'machine_id.exists'    => 'La máquina seleccionada no existe.',
            'assigned_to.exists'   => 'El técnico seleccionado no existe.',
        ];
    }
}
