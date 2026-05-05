<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('restrict');
            $table->enum('status', ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'])
                  ->default('pending');
            $table->decimal('subtotal', 10, 2);
            $table->decimal('tax', 10, 2);       // IVA (21%)
            $table->decimal('total', 10, 2);
            $table->string('stripe_payment_intent_id')->nullable()->unique();
            $table->string('stripe_status')->nullable(); // succeeded, requires_payment_method, etc.
            $table->string('shipping_address')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
