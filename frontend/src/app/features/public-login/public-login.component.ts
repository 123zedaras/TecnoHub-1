import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

/**
 * Marcador de ruta hasta que exista el formulario real de login.
 *
 * Cuando tengas la respuesta del backend con el token Sanctum, el flujo típico es:
 * 1) auth.completeLoginWithGuestCartMerge(token)
 * 2) En `next`: navegar al área autenticada y opcionalmente mostrar cuántas líneas se sincronizaron (`mergedCount`).
 * 3) En `error`: mostrar mensaje; la cesta invitado en localStorage NO se borra si falló a mitad del merge.
 */
@Component({
  selector: 'app-public-login',
  templateUrl: './public-login.component.html',
  styleUrls: ['./public-login.component.scss'],
})
export class PublicLoginComponent {
  activeTab: 'login' | 'register' = 'login';

  loginForm = {
    username: '',
    password: '',
  };

  registerForm = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  };

  loginSubmitted = false;
  registerSubmitted = false;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  setTab(tab: 'login' | 'register'): void {
    this.activeTab = tab;
  }

  onLoginSubmit(): void {
    this.loginSubmitted = true;

    if (!this.isLoginFormValid) {
      return;
    }

    // Pendiente: conectar con endpoint real de login en backend.
    // this.auth.login(...)
    console.log('Login listo para backend:', this.loginForm);
  }

  /**
   * Acceso rápido para pruebas en entorno local:
   * simula sesión iniciada para forzar el layout autenticado.
   */
  loginDePruebas(): void {
    this.auth.setToken('token-pruebas');
    void this.router.navigate(['/dashboard']);
  }

  onRegisterSubmit(): void {
    this.registerSubmitted = true;

    if (!this.isRegisterFormValid) {
      return;
    }

    // Pendiente: conectar con endpoint real de registro en backend.
    // this.auth.register(...)
    console.log('Registro listo para backend:', this.registerForm);
  }

  get isLoginFormValid(): boolean {
    return this.loginForm.username.trim().length > 0 && this.loginForm.password.length > 0;
  }

  get isRegisterFormValid(): boolean {
    return (
      this.registerForm.email.trim().length > 0 &&
      this.registerForm.name.trim().length > 0 &&
      this.registerForm.password.length >= 6 &&
      this.registerForm.confirmPassword.length >= 6 &&
      this.registerForm.password === this.registerForm.confirmPassword
    );
  }

  get passwordsDoNotMatch(): boolean {
    return (
      this.registerSubmitted &&
      this.registerForm.confirmPassword.length > 0 &&
      this.registerForm.password !== this.registerForm.confirmPassword
    );
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    // Pendiente: implementar flujo real cuando exista endpoint.
    console.log('Recuperar contraseña pendiente de backend');
  }

  /**
   * EJEMPLO: llamar esto desde el handler del formulario cuando `POST /login` (o similar) devuelva el token.
   * Sustituye `tokenEjemplo` por el string real de la respuesta JSON.
   */
  ejemploTrasLoginExitoso(tokenDeLaApi: string): void {
    this.auth.completeLoginWithGuestCartMerge(tokenDeLaApi).subscribe({
      next: ({ mergedCount }) => {
        // mergedCount = líneas enviadas con POST /cart/items (no es el total de unidades).
        if (mergedCount > 0) {
          // Ej.: this.toast.show(`Se sincronizaron ${mergedCount} líneas de tu cesta.`);
        }
        void this.router.navigate(['/']); // o la ruta autenticada que uses
      },
      error: () => {
        // El token ya está guardado; el usuario puede estar logueado pero la cesta invitado puede seguir en localStorage.
      },
    });
  }
}
