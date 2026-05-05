<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class Ticket extends Model
{
    protected $fillable = [
        'ticket_number',
        'user_id',
        'machine_id',
        'assigned_to',
        'title',
        'description',
        'priority',
        'status',
        'closed_at',
    ];

    protected $casts = [
        'closed_at' => 'datetime',
    ];

    // ── Relaciones ─────────────────────────────────────────────────────────────

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function machine(): BelongsTo
    {
        return $this->belongsTo(Machine::class);
    }

    public function assignedTechnician(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function messages(): HasMany
    {
        return $this->hasMany(TicketMessage::class)->orderBy('created_at');
    }

    // ── Helpers ────────────────────────────────────────────────────────────────

    // Genera un número de ticket legible: TK-2024-0001
    public static function generateTicketNumber(): string
    {
        $year = date('Y');
        $last = self::whereYear('created_at', $year)->lockForUpdate()->count();
        return sprintf('TK-%s-%04d', $year, $last + 1);
    }

    // Etiquetas en español para emails y UI
    public function getPriorityLabelAttribute(): string
    {
        return match($this->priority) {
            'critical' => 'Crítica',
            'high'     => 'Alta',
            'normal'   => 'Normal',
            'low'      => 'Baja',
            default    => ucfirst($this->priority),
        };
    }

    public function getStatusLabelAttribute(): string
    {
        return match($this->status) {
            'open'       => 'Abierto',
            'in_process' => 'En Proceso',
            'resolved'   => 'Resuelto',
            'closed'     => 'Cerrado',
            default      => ucfirst($this->status),
        };
    }

    // Colores para los badges del email
    public function getPriorityColorAttribute(): string
    {
        return match($this->priority) {
            'critical' => '#DC2626',
            'high'     => '#EA580C',
            'normal'   => '#CA8A04',
            'low'      => '#16A34A',
            default    => '#64748B',
        };
    }
}
