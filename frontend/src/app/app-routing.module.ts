import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authLayoutMatch, guestLayoutMatch } from './core/guards/layout-match.guards';
import { AuthenticatedLayoutComponent } from './layout/authenticated-layout/authenticated-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PublicHomeComponent } from './features/public-home/public-home.component';
import { PublicLoginComponent } from './features/public-login/public-login.component';
import { PublicCatalogComponent } from './features/public-catalog/public-catalog.component';
import { PublicCartPageComponent } from './features/public-cart-page/public-cart-page.component';

/**
 * Rutas con dos layouts en paralelo (mismo path ''):
 * - canMatch elige cuál aplica según si hay token (ver layout-match.guards.ts).
 * - Invitados: PublicLayout + hijos (p. ej. home pública).
 * - Sesión iniciada: AuthenticatedLayout + sidebar + módulos lazy (dashboard, etc.).
 */
const routes: Routes = [
  /* Layout público: solo entra si guestLayoutMatch (sin auth_token). */
  {
    path: '',
    canMatch: [guestLayoutMatch],
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PublicHomeComponent,
      },
      {
        path: 'login',
        component: PublicLoginComponent,
      },
      {
        path: 'productos',
        component: PublicCatalogComponent,
      },
      {
        path: 'cesta',
        component: PublicCartPageComponent,
      },
    ],
  },
  /* Layout autenticado: sidebar + outlet; solo si authLayoutMatch (hay auth_token). */
  {
    path: '',
    canMatch: [authLayoutMatch],
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'recambios',
        loadChildren: () =>
          import('./features/cart/cart.module').then(m => m.CartModule),
      },
      {
        path: 'incidencias',
        loadChildren: () =>
          import('./features/tickets/tickets.module').then(m => m.TicketsModule),
      },
      {
        path: 'scada',
        loadChildren: () =>
          import('./features/scada/scada.module').then(m => m.ScadaModule),
      },
    ],
  },
  /* Rutas desconocidas: vuelven a '' y el router resuelve público vs app según sesión. */
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
