import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { CartService } from './cart.service';
import { environment } from '../../../environments/environment';

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthResponse {
  token: string;
  user: AuthUser;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'auth_token';
  private readonly userKey  = 'auth_user';
  private readonly apiUrl   = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private cartService: CartService,
  ) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token && token.length > 0;
  }

  getUser(): AuthUser | null {
    const raw = localStorage.getItem(this.userKey);
    return raw ? JSON.parse(raw) : null;
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.userKey, JSON.stringify(res.user));
      }),
    );
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, { name, email, password }).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.userKey, JSON.stringify(res.user));
      }),
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/logout`, {}).pipe(
      tap(() => this.clearSession()),
    );
  }

  completeLoginWithGuestCartMerge(token: string): Observable<{ mergedCount: number }> {
    this.setToken(token);
    return this.cartService.mergeGuestCartFromStorage().pipe(
      concatMap((info) =>
        this.cartService.getCart().pipe(map(() => info)),
      ),
    );
  }

  updateProfile(payload: { name?: string; current_password?: string; new_password?: string; new_password_confirmation?: string }): Observable<{ message: string; user: AuthUser }> {
    return this.http.put<{ message: string; user: AuthUser }>(`${this.apiUrl}/auth/profile`, payload).pipe(
      tap(res => localStorage.setItem(this.userKey, JSON.stringify(res.user))),
    );
  }

  clearSession(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}
