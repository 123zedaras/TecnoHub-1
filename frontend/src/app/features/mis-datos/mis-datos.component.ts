import { Component } from '@angular/core';
import { AuthService, AuthUser } from '../../core/services/auth.service';

type Section = 'nombre' | 'password';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent {
  user: AuthUser | null;

  activeSection: Section | null = null;

  nameForm = { name: '' };
  passwordForm = { current_password: '', new_password: '', new_password_confirmation: '' };

  nameSubmitted = false;
  passwordSubmitted = false;
  loading = false;

  nameSuccess: string | null = null;
  nameError: string | null = null;
  passwordSuccess: string | null = null;
  passwordError: string | null = null;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
  }

  openSection(section: Section): void {
    this.activeSection = section;
    this.nameSuccess = null;
    this.nameError = null;
    this.passwordSuccess = null;
    this.passwordError = null;
    this.nameSubmitted = false;
    this.passwordSubmitted = false;
    if (section === 'nombre') {
      this.nameForm.name = this.user?.name ?? '';
    } else {
      this.passwordForm = { current_password: '', new_password: '', new_password_confirmation: '' };
    }
  }

  cancelSection(): void {
    this.activeSection = null;
  }

  get isNameFormValid(): boolean {
    const n = this.nameForm.name.trim();
    return n.length >= 2 && n !== (this.user?.name ?? '');
  }

  get isPasswordFormValid(): boolean {
    return (
      this.passwordForm.current_password.length > 0 &&
      this.passwordForm.new_password.length >= 8 &&
      this.passwordForm.new_password === this.passwordForm.new_password_confirmation
    );
  }

  get passwordsDoNotMatch(): boolean {
    return (
      this.passwordSubmitted &&
      this.passwordForm.new_password_confirmation.length > 0 &&
      this.passwordForm.new_password !== this.passwordForm.new_password_confirmation
    );
  }

  onSaveName(): void {
    this.nameSubmitted = true;
    this.nameError = null;
    if (!this.isNameFormValid) return;

    this.loading = true;
    this.auth.updateProfile({ name: this.nameForm.name.trim() }).subscribe({
      next: (res) => {
        this.user = res.user;
        this.nameSuccess = 'Nombre actualizado correctamente.';
        this.loading = false;
        this.activeSection = null;
      },
      error: (err) => {
        this.nameError = err?.error?.message ?? 'No se pudo actualizar el nombre.';
        this.loading = false;
      },
    });
  }

  onSavePassword(): void {
    this.passwordSubmitted = true;
    this.passwordError = null;
    if (!this.isPasswordFormValid) return;

    this.loading = true;
    this.auth.updateProfile({
      current_password: this.passwordForm.current_password,
      new_password: this.passwordForm.new_password,
      new_password_confirmation: this.passwordForm.new_password_confirmation,
    }).subscribe({
      next: () => {
        this.passwordSuccess = 'Contraseña cambiada correctamente.';
        this.passwordForm = { current_password: '', new_password: '', new_password_confirmation: '' };
        this.loading = false;
        this.activeSection = null;
      },
      error: (err) => {
        this.passwordError = err?.error?.message ?? 'No se pudo cambiar la contraseña.';
        this.loading = false;
      },
    });
  }

  roleLabel(role: string): string {
    const map: Record<string, string> = {
      admin: 'Administrador',
      technician: 'Técnico',
      operator: 'Operario',
    };
    return map[role] ?? role;
  }
}
