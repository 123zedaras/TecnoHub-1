<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('scada_events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('machine_id');
            $table->string('evento_type', 50);          // "nivel_cambio", "bomba_on", "alarma"
            $table->longText('valor_anterior')->nullable();
            $table->longText('valor_nuevo')->nullable();
            $table->timestamps();

            $table->foreign('machine_id')->references('id')->on('machines')->onDelete('cascade');
            $table->index(['machine_id', 'created_at']);
        });
    }

    public function down(): void {
        Schema::dropIfExists('scada_events');
    }
};
