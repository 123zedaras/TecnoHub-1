<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ScadaCommand extends Model
{
    protected $fillable = [
        'user_id',
        'tag',
        'valor',
        'estado_nodored',
        'resultado',
        'error_mensaje',
    ];

    protected $casts = [
        'valor' => 'json',
        'estado_nodored' => 'json',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
