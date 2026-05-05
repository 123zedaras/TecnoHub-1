import { Component } from '@angular/core';

/** Raíz de la app: solo delega en el router; los layouts (público / autenticado) envuelven las vistas. */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
