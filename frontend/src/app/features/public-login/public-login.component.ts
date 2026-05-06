import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-public-login',
  templateUrl: './public-login.component.html',
  styleUrls: ['./public-login.component.scss'],
})
export class PublicLoginComponent {
  activeTab: 'login' | 'register' = 'login';

  loginForm    = { email: '', password: '' };
  registerForm = { email: '', name: '', password: '', confirmPassword: '' };

  loginSubmitted    = false;
  registerSubmitted = false;
  loading           = false;

  loginError: string | null    = null;
  registerError: string | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  setTab(tab: 'login' | 'register'): void {
    this.activeTab = tab;
    this.loginError = null;
    this.registerError = null;
  }

  onLoginSubmit(): void {
    this.loginSubmitted = true;
    this.loginError = null;

    if (!this.isLoginFormValid) return;

    this.loading = true;
    this.auth.login(this.loginForm.email, this.loginForm.password).subscribe({
      next: () => void this.router.navigate(['/dashboard']),
      error: (err) => {
        this.loginError = err?.error?.message ?? 'No se pudo iniciar sesión. Comprueba tus datos.';
        this.loading = false;
      },
    });
  }

  onRegisterSubmit(): void {
    this.registerSubmitted = true;
    this.registerError = null;

    if (!this.isRegisterFormValid) return;

    this.loading = true;
    this.auth.register(this.registerForm.name, this.registerForm.email, this.registerForm.password).subscribe({
      next: () => void this.router.navigate(['/dashboard']),
      error: (err) => {
        this.registerError = err?.error?.message
          ?? err?.error?.errors?.email?.[0]
          ?? 'No se pudo crear la cuenta. Inténtalo de nuevo.';
        this.loading = false;
      },
    });
  }

  get isLoginFormValid(): boolean {
    return this.loginForm.email.trim().length > 0 && this.loginForm.password.length > 0;
  }

  get isRegisterFormValid(): boolean {
    return (
      this.registerForm.email.trim().length > 0 &&
      this.registerForm.name.trim().length > 0 &&
      this.registerForm.password.length >= 8 &&
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
  }
}
