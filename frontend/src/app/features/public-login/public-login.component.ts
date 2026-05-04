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
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

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
