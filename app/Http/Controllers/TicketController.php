<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketRequest;
use App\Mail\TicketCreatedMail;
use App\Mail\TicketStatusChangedMail;
use App\Models\Ticket;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TicketController extends Controller
{
    // GET /api/tickets — Lista de tickets con filtros
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = Ticket::with(['user:id,name', 'machine:id,name', 'assignedTechnician:id,name'])
            ->orderByDesc('created_at');

        // Técnicos y admins ven todos los tickets; operarios solo los suyos
        if ($user->role === 'operator') {
            $query->where('user_id', $user->id);
        }

        // Filtros opcionales
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        if ($request->filled('priority')) {
            $query->where('priority', $request->priority);
        }
        if ($request->filled('machine_id')) {
            $query->where('machine_id', $request->machine_id);
        }

        $tickets = $query->paginate(20);

        return response()->json($tickets);
    }

    // POST /api/tickets — Crear nuevo ticket
    public function store(StoreTicketRequest $request): JsonResponse
    {
        $ticket = Ticket::create([
            'ticket_number' => Ticket::generateTicketNumber(),
            'user_id'       => $request->user()->id,
            'machine_id'    => $request->machine_id,
            'assigned_to'   => $request->assigned_to,
            'title'         => $request->title,
            'description'   => $request->description,
            'priority'      => $request->priority,
            'status'        => 'open',
        ]);

        $ticket->load(['user', 'machine', 'assignedTechnician']);

        // Email al operario que abre el ticket
        Mail::to($ticket->user->email)->send(new TicketCreatedMail($ticket));

        // Email al técnico asignado (si existe)
        if ($ticket->assignedTechnician) {
            Mail::to($ticket->assignedTechnician->email)->send(new TicketCreatedMail($ticket));
        }

        return response()->json([
            'message' => 'Ticket creado correctamente.',
            'data'    => $ticket,
        ], 201);
    }

    // GET /api/tickets/{ticket} — Detalle de ticket con mensajes
    public function show(Request $request, Ticket $ticket): JsonResponse
    {
        $user = $request->user();

        // Operarios solo pueden ver sus propios tickets
        if ($user->role === 'operator' && $ticket->user_id !== $user->id) {
            abort(403);
        }

        $ticket->load([
            'user:id,name,email',
            'machine:id,name,model',
            'assignedTechnician:id,name,email',
            'messages.user:id,name',
        ]);

        return response()->json(['data' => $ticket]);
    }

    // PUT /api/tickets/{ticket} — Actualizar estado, asignación, etc.
    public function update(Request $request, Ticket $ticket): JsonResponse
    {
        $request->validate([
            'status'      => 'sometimes|in:open,in_process,resolved,closed',
            'assigned_to' => 'sometimes|nullable|exists:users,id',
            'priority'    => 'sometimes|in:critical,high,normal,low',
        ]);

        $oldStatus = $ticket->status;

        $ticket->update($request->only(['status', 'assigned_to', 'priority']));

        // Si el ticket se cierra, guardar la fecha
        if ($request->status === 'closed' && $oldStatus !== 'closed') {
            $ticket->update(['closed_at' => now()]);
        }

        // Enviar email de cambio de estado al operario que abrió el ticket
        if ($request->filled('status') && $request->status !== $oldStatus) {
            $ticket->load('user');
            Mail::to($ticket->user->email)->send(new TicketStatusChangedMail($ticket, $oldStatus));
        }

        $ticket->load(['user:id,name', 'machine:id,name', 'assignedTechnician:id,name']);

        return response()->json([
            'message' => 'Ticket actualizado.',
            'data'    => $ticket,
        ]);
    }
}
