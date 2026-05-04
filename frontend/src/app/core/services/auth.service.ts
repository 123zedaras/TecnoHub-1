import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { CartService } from './cart.service';

/**
 * “Autenticado” = existe un token en localStorage (misma clave que AuthInterceptor).
 * No hay pantalla de login aún: si quedó un token de pruebas, el router usará siempre el layout autenticado.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'auth_token';

  constructor(private cartService: CartService) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token && token.length > 0;
  }

  /** Tras login real: guardar el JWT que devuelva el backend. */
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Flujo recomendado cuando el backend devuelve el token:
   * 1) Guardar token (el interceptor añadirá Authorization en las siguientes peticiones).
   * 2) Volcar la cesta invitado (localStorage) al servidor con POST /cart/items por línea.
   * Si el merge falla, la cesta invitado se mantiene para reintentar.
   */
  completeLoginWithGuestCartMerge(token: string): Observable<{ mergedCount: number }> {
    this.setToken(token);
    return this.cartService.mergeGuestCartFromStorage().pipe(
      // Tras volcar líneas, un GET /cart deja itemCount/total alineados con el servidor (y con el interceptor ya autenticado).
      concatMap((info) =>
        this.cartService.getCart().pipe(map(() => info)),
      ),
    );
  }

  /** Cierra sesión en cliente y vuelve al layout público al navegar a '/'. */
  clearSession(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
