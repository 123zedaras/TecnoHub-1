<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'payment_intent_id' => 'required|string|starts_with:pi_',
            'shipping_address'  => 'nullable|string|max:500',
            'notes'             => 'nullable|string|max:1000',
        ];
    }

    public function messages(): array
    {
        return [
            'payment_intent_id.required'    => 'El identificador de pago es obligatorio.',
            'payment_intent_id.starts_with' => 'El identificador de pago no es válido.',
        ];
    }
}
