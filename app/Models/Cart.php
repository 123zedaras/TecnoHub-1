<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cart extends Model
{
    protected $fillable = ['user_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    // Subtotal sin IVA
    public function getSubtotalAttribute(): float
    {
        return $this->items->sum(fn($item) => $item->unit_price * $item->quantity);
    }

    // IVA al 21%
    public function getTaxAttribute(): float
    {
        return round($this->subtotal * 0.21, 2);
    }

    // Total con IVA
    public function getTotalAttribute(): float
    {
        return round($this->subtotal + $this->tax, 2);
    }

    // Número total de artículos en el carrito
    public function getItemCountAttribute(): int
    {
        return $this->items->sum('quantity');
    }

    // Obtener o crear el carrito del usuario autenticado
    public static function getOrCreateForUser(int $userId): self
    {
        return self::firstOrCreate(['user_id' => $userId]);
    }
}
