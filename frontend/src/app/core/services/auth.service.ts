import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { CartService } from './cart.service';
import { environment } from '../../../environments/environment';

/** Datos del usuario devueltos por el API y guardados en localStorage. */
export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

/** Respuesta de login/register: token Bearer + objeto usuario. */
interface AuthResponse {
  token: string;
  user: AuthUser;
}

/**
 * Sesión del cliente: login, registro, logout y perfil.
 * Persiste auth_token y uth_user en localStorage para el interceptor HTTP y el resto de la app.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'auth_token';
  private readonly userKey  = 'auth_user';
  private readonly apiUrl   = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private cartService: CartService,
  ) {}

  /** Indica si hay token guardado */
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token && token.length > 0;
  }

  /** Lee el usuario en caché local; null si no hay sesión o JSON inválido. */
  getUser(): AuthUser | null {
    const raw = localStorage.getItem(this.userKey);
    return raw ? JSON.parse(raw) : null;
  }

  /** Guarda solo el token (p. ej. antes de fusionar cesta si el flujo no pasó por login). */
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * POST /auth/login — Valida credenciales y, si OK, guarda token y usuario en localStorage (operador tap).
   * No fusiona el carrito aquí: la pantalla de login encadena `completeLoginWithGuestCartMerge` después.
   */
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap((res) => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.userKey, JSON.stringify(res.user));
      }),
    );
  }

  /**
   * POST /auth/register — Crea usuario, devuelve token y datos; los guarda igual que login.
   */
  register(name: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, { name, email, password }).pipe(
      tap((res) => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.userKey, JSON.stringify(res.user));
      }),
    );
  }

  /**
   * POST /auth/logout — Invalida sesión en servidor y borra token y usuario local.
   */
  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/logout`, {}).pipe(
      tap(() => this.clearSession()),
    );
  }

  /**
   * Paso posterior a tener sesión: asegura el token, envía líneas de `GuestCartStorageService`
   * al carrito remoto (`mergeGuestCartFromStorage`) y hace GET /cart para actualizar contadores en `CartService`.
   *
   * @param token Mismo token que ya guardó `login`/`register`; se vuelve a persistir por compatibilidad con otros flujos.
   * @returns Número de líneas de invitado que se intentaron enviar (no implica que el backend las haya aceptado todas si hubo error intermedio).
   */
  completeLoginWithGuestCartMerge(token: string): Observable<{ mergedCount: number }> {
    this.setToken(token);
    return this.cartService.mergeGuestCartFromStorage().pipe(
      concatMap((info) =>
        this.cartService.getCart().pipe(map(() => info)),
      ),
    );
  }

  /**
   * PUT /auth/profile — Actualiza nombre o contraseña; refresca `auth_user` en localStorage con la respuesta.
   */
  updateProfile(payload: { name?: string; current_password?: string; new_password?: string; new_password_confirmation?: string }): Observable<{ message: string; user: AuthUser }> {
    return this.http.put<{ message: string; user: AuthUser }>(`${this.apiUrl}/auth/profile`, payload).pipe(
      tap(res => localStorage.setItem(this.userKey, JSON.stringify(res.user))),
    );
  }

  /** Borra token y usuario del navegador (sin llamar al servidor). */
  clearSession(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}
