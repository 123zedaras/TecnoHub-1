<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'status',
        'subtotal',
        'tax',
        'total',
        'stripe_payment_intent_id',
        'stripe_status',
        'shipping_address',
        'notes',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'tax'      => 'decimal:2',
        'total'    => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    // Etiqueta de estado en español para los emails
    public function getStatusLabelAttribute(): string
    {
        return match($this->status) {
            'pending'   => 'Pendiente',
            'confirmed' => 'Confirmado',
            'shipped'   => 'Enviado',
            'delivered' => 'Entregado',
            'cancelled' => 'Cancelado',
            default     => ucfirst($this->status),
        };
    }
}
