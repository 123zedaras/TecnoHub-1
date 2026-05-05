<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ScadaEvent extends Model
{
    protected $fillable = [
        'machine_id',
        'evento_type',
        'valor_anterior',
        'valor_nuevo',
    ];

    protected $casts = [
        'valor_anterior' => 'json',
        'valor_nuevo' => 'json',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function machine(): BelongsTo
    {
        return $this->belongsTo(Machine::class);
    }
}
