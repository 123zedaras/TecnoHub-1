import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Permite dos rutas raíz con path '' en app-routing:
 * Angular prueba canMatch en orden; la primera que devuelva true "gana".
 * Invitado → coincide el bloque con PublicLayout; con token → ese bloque falla y entra AuthenticatedLayout.
 */

/** Solo coincide con rutas del layout público si no hay sesión. */
export const guestLayoutMatch: CanMatchFn = () => {
  return !inject(AuthService).isAuthenticated();
};

/** Solo coincide con rutas del layout autenticado si hay sesión. */
export const authLayoutMatch: CanMatchFn = () => {
  return inject(AuthService).isAuthenticated();
};
