<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void {}

    public function boot(): void
    {
        // SCADA gates (policy checks without a model instance)
        Gate::define('view', fn (User $user) =>
            in_array($user->role ?? '', ['technician', 'admin'])
        );
        Gate::define('enviarComando', fn (User $user) =>
            in_array($user->role ?? '', ['technician', 'admin'])
        );
        Gate::define('viewHistoricos', fn (User $user) =>
            in_array($user->role ?? '', ['technician', 'admin'])
        );
        Gate::define('registrarEventoManual', fn (User $user) =>
            ($user->role ?? '') === 'admin'
        );
    }
}
