<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\TicketMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TicketMessageController extends Controller
{
    // POST /api/tickets/{ticket}/messages — Añadir mensaje al hilo del ticket
    public function store(Request $request, Ticket $ticket): JsonResponse
    {
        $user = $request->user();

        // Solo puede escribir quien creó el ticket o el técnico asignado (o admin)
        $canWrite = $ticket->user_id === $user->id
            || $ticket->assigned_to === $user->id
            || in_array($user->role, ['technician', 'admin']);

        abort_unless($canWrite, 403, 'No tienes permiso para escribir en este ticket.');

        abort_if(
            in_array($ticket->status, ['resolved', 'closed']),
            422,
            'No se pueden añadir mensajes a un ticket cerrado o resuelto.'
        );

        $request->validate([
            'content' => 'required|string|min:1|max:2000',
        ]);

        $message = TicketMessage::create([
            'ticket_id' => $ticket->id,
            'user_id'   => $user->id,
            'content'   => $request->content,
        ]);

        $message->load('user:id,name');

        return response()->json([
            'message' => 'Mensaje enviado.',
            'data'    => $message,
        ], 201);
    }
}
