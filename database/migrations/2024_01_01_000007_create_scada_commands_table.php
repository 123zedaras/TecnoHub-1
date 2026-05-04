<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('scada_commands', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('tag', 50);              // ej: "Abrir_Val", "Marcha_B"
            $table->longText('valor');              // JSON con valor enviado
            $table->longText('estado_nodored')->nullable();  // JSON respuesta de Node-RED
            $table->enum('resultado', ['success', 'error', 'timeout'])->nullable();
            $table->text('error_mensaje')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->index(['user_id', 'created_at']);
        });
    }

    public function down(): void {
        Schema::dropIfExists('scada_commands');
    }
};
