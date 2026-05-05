import { Component, HostListener } from '@angular/core';
import { GuestCartStorageService } from '../../core/services/guest-cart-storage.service';
import { GuestCartLine } from '../../shared/models/cart.model';

/**
 * para vistas sin sesión
 * Incluye el mini-carrito del header: al ser rutas públicas solo existe cesta invitado
 */
@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
})
export class PublicLayoutComponent {
  mobileNavOpen = false;
  /** Panel desplegable bajo el icono de carrito (no usar un segundo overlay a pantalla completa). */
  cartDropdownOpen = false;

  /** Expuesto como `readonly` para usar guestCart.guestLines() y guestUnitCount() en la plantilla. */
  constructor(readonly guestCart: GuestCartStorageService) {}

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
    // Un solo menú abierto a la vez: evita solapar hamburguesa y cesta en móvil.
    if (this.mobileNavOpen) {
      this.cartDropdownOpen = false;
    }
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
  }

  toggleCartDropdown(event?: MouseEvent): void {
    // Evita que el click en el botón burbujee al document:click y cierre el panel al instante.
    event?.stopPropagation();
    this.cartDropdownOpen = !this.cartDropdownOpen;
    if (this.cartDropdownOpen) {
      this.mobileNavOpen = false;
    }
  }

  /** Tras navegar a «Ver cesta» cerramos el desplegable para no dejar UI flotante encima de la nueva ruta. */
  closeCartDropdown(): void {
    this.cartDropdownOpen = false;
  }

  lineSubtotal(line: GuestCartLine): number {
    if (line.unit_price == null) {
      return 0;
    }
    return line.unit_price * line.quantity;
  }

  formatPrice(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  }

  displayLineName(line: GuestCartLine): string {
    return line.product_name?.trim() || `Producto #${line.product_id}`;
  }

  trackByProductId(_: number, line: GuestCartLine): number {
    return line.product_id;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const el = event.target as HTMLElement;
    if (this.mobileNavOpen && !el.closest('.public-topnav')) {
      this.mobileNavOpen = false;
    }
    // Clic fuera del bloque carrito+botón: comportamiento tipo «dropdown» nativo.
    if (this.cartDropdownOpen && !el.closest('.public-cart-wrap')) {
      this.cartDropdownOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.mobileNavOpen = false;
    this.cartDropdownOpen = false;
  }
}
