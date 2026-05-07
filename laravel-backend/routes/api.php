<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ScadaController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\TicketMessageController;
use App\Http\Controllers\SoftwareController;
use Illuminate\Support\Facades\Route;

// Autenticación (pública) 
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login',    [AuthController::class, 'login']);

// Webhook Stripe (sin autenticación)
Route::post('/webhooks/stripe', [PaymentController::class, 'handleWebhook']);

// Rutas protegidas con Sanctum
Route::middleware('auth:sanctum')->group(function () {

    // Cerrar sesión
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    // Actualizar perfil (nombre y/o contraseña)
    Route::put('/auth/profile', [AuthController::class, 'updateProfile']);

    // Catálogo de productos
    Route::get('/products',           [ProductController::class, 'index']);
    Route::get('/products/{product}', [ProductController::class, 'show']);

    // Carrito
    Route::prefix('cart')->group(function () {
        Route::get('/',              [CartController::class, 'show']);
        Route::post('/items',        [CartController::class, 'addItem']);
        Route::put('/items/{item}',  [CartController::class, 'updateItem']);
        Route::delete('/items/{item}', [CartController::class, 'removeItem']);
        Route::delete('/',           [CartController::class, 'clear']);
    });

    // Pedidos
    Route::prefix('orders')->group(function () {
        Route::get('/',          [OrderController::class, 'index']);
        Route::get('/{order}',   [OrderController::class, 'show']);
        Route::post('/',         [OrderController::class, 'store']);
    });

    // Pagos Stripe
    Route::post('/payments/create-intent', [PaymentController::class, 'createIntent']);

    // Tickets / SAT
    Route::prefix('tickets')->group(function () {
        Route::get('/',                    [TicketController::class, 'index']);
        Route::post('/',                   [TicketController::class, 'store']);
        Route::get('/{ticket}',            [TicketController::class, 'show']);
        Route::put('/{ticket}',            [TicketController::class, 'update']);
        Route::post('/{ticket}/messages',  [TicketMessageController::class, 'store']);
    });

    // Catálogo de software
    Route::get('/software',           [SoftwareController::class, 'index']);
    Route::get('/software/{software}', [SoftwareController::class, 'show']);

    // SCADA (solo técnicos/admins, validado vía ScadaPolicy)
    Route::prefix('scada')->group(function () {
        Route::get('/dashboard',                    [ScadaController::class, 'getDashboard'])
            ->middleware('can:view,scada');
        Route::post('/enviar-comando',              [ScadaController::class, 'enviarComando'])
            ->middleware('can:enviarComando,scada');
        Route::get('/historicos',                   [ScadaController::class, 'getHistoricos'])
            ->middleware('can:viewHistoricos,scada');
        Route::get('/eventos-maquina/{machineId}',  [ScadaController::class, 'getEventosMaquina'])
            ->middleware('can:view,scada');
        Route::post('/evento-manual',               [ScadaController::class, 'registrarEventoManual'])
            ->middleware('can:registrarEventoManual,scada');
    });
});
