import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-software-card',
  templateUrl: './software-card.component.html',
  styleUrls: ['./software-card.component.css']
})
export class SoftwareCardComponent {

  @Input() software: any;
  selectedVersion: string = '';

  constructor(private router: Router) {}

  isLogged(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  comprar() {
    if (!this.isLogged()) {
      alert('Debes iniciar sesión para comprar');
      this.router.navigate(['/login']);
      return;
    }

    if (!this.selectedVersion) {
      alert('Selecciona una versión');
      return;
    }

    console.log('Comprando:', this.software.nombre, 'Versión:', this.selectedVersion);
    // Aquí integras Stripe, PayPal o tu backend de compra
  }

  descargar() {
    if (!this.isLogged()) {
      alert('Debes iniciar sesión para descargar');
      this.router.navigate(['/login']);
      return;
    }

    if (!this.selectedVersion) {
      alert('Selecciona una versión');
      return;
    }

    window.open(this.software.instalador, '_blank');
  }
}
