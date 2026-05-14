import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

/**
 * Pantalla pública de acceso: pestañas login y registro.
 * Tras credenciales correctas encadena la fusión de la cesta de invitado 
 * con el carrito del usuario
 */
@Component({
  selector: 'app-public-login',
  templateUrl: './public-login.component.html',
  styleUrls: ['./public-login.component.scss'],
})
export class PublicLoginComponent {
  /** Pestaña visible: inicio de sesión o crear una cuenta. */
  activeTab: 'login' | 'register' = 'login';

  loginForm    = { email: '', password: '' };
  registerForm = { email: '', name: '', password: '', confirmPassword: '' };

  // marca si el usuario ya intentó enviar el form
  loginSubmitted    = false;
  registerSubmitted = false;
  /** Evita doble envío mientras hay una petición en curso. */
  loading           = false;

  loginError: string | null    = null;
  registerError: string | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  /** Cambia entre login y registro y limpia mensajes de error. */
  setTab(tab: 'login' | 'register'): void {
    this.activeTab = tab;
    this.loginError = null;
    this.registerError = null;
  }

  /**
   * Envía email y contraseña al backend.
   * Si login va bn, en cadena fusiona la cesta invitado con la del usuario y va al dashboard.
   */
  onLoginSubmit(): void {
    this.loginSubmitted = true;
    this.loginError = null;

    if (!this.isLoginFormValid) return;

    this.loading = true;
    this.auth
      .login(this.loginForm.email, this.loginForm.password)
      // switchMap: espera a que termine el login; solo entonces ejecuta el merge (requiere token ya guardado).
      .pipe(switchMap((res) => this.auth.completeLoginWithGuestCartMerge(res.token)))
      .subscribe({
        next: () => {
          this.loading = false;
          void this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.loginError = err?.error?.message ?? 'No se pudo iniciar sesión. Comprueba tus datos.';
          this.loading = false;
        },
      });
  }

  /**
   * Crea cuenta en el backend y guarda sesión (token + usuario).
   * Igual que en login, después fusiona cesta de invitado y redirige al dashboard.
   */
  onRegisterSubmit(): void {
    this.registerSubmitted = true;
    this.registerError = null;

    if (!this.isRegisterFormValid) return;

    this.loading = true;
    this.auth
      .register(this.registerForm.name, this.registerForm.email, this.registerForm.password)
      .pipe(switchMap((res) => this.auth.completeLoginWithGuestCartMerge(res.token)))
      .subscribe({
        next: () => {
          this.loading = false;
          void this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.registerError = err?.error?.message
            ?? err?.error?.errors?.email?.[0]
            ?? 'No se pudo crear la cuenta. Inténtalo de nuevo.';
          this.loading = false;
        },
      });
  }

  /** Comprueba campos mínimos del formulario de login antes de llamar al API. */
  get isLoginFormValid(): boolean {
    return this.loginForm.email.trim().length > 0 && this.loginForm.password.length > 0;
  }

  /** Comprueba email, nombre, contraseña ≥8 y que coincidan las dos contraseñas. */
  get isRegisterFormValid(): boolean {
    return (
      this.registerForm.email.trim().length > 0 &&
      this.registerForm.name.trim().length > 0 &&
      this.registerForm.password.length >= 8 &&
      this.registerForm.password === this.registerForm.confirmPassword
    );
  }

  /** Ayuda a mostrar aviso de contraseñas distintas solo tras intento de envío. */
  get passwordsDoNotMatch(): boolean {
    return (
      this.registerSubmitted &&
      this.registerForm.confirmPassword.length > 0 &&
      this.registerForm.password !== this.registerForm.confirmPassword
    );
  }

  
}
