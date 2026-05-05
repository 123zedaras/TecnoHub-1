<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            // Formato legible: TK-2024-001
            $table->string('ticket_number')->unique();
            $table->foreignId('user_id')->constrained()->onDelete('restrict');       // Operario que abre el ticket
            $table->foreignId('machine_id')->nullable()->constrained()->onDelete('set null'); // Máquina afectada
            $table->foreignId('assigned_to')->nullable()->constrained('users')->onDelete('set null'); // Técnico asignado
            $table->string('title');
            $table->text('description');
            $table->enum('priority', ['critical', 'high', 'normal', 'low'])->default('normal');
            $table->enum('status', ['open', 'in_process', 'resolved', 'closed'])->default('open');
            $table->timestamp('closed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
