import { Component } from '@angular/core';
import { GuestCartLine } from '../../shared/models/cart.model';
import { GuestCartStorageService } from '../../core/services/guest-cart-storage.service';

/**
 * Ruta pública de la cesta: revisión del pedido antes de login.
 * lee y edita solo la cesta invitado en el navegador.
 */
@Component({
  selector: 'app-public-cart-page',
  templateUrl: './public-cart-page.component.html',
  styleUrls: ['./public-cart-page.component.scss'],
})
export class PublicCartPageComponent {
  constructor(readonly guestCart: GuestCartStorageService) {}

  lines(): GuestCartLine[] {
    return this.guestCart.guestLines();
  }

  /** Subtotal por línea; si falta precio en datos antiguos, devolvemos 0 */
  lineSubtotal(line: GuestCartLine): number {
    if (line.unit_price == null) {
      return 0;
    }
    return line.unit_price * line.quantity;
  }

  //devuelve el subtotal
  subtotal(): number {
    return this.lines().reduce((sum, l) => sum + this.lineSubtotal(l), 0);
  }

  /** Misma lógica de IVA que la cesta autenticada */
  tax(): number {
    return Math.round(this.subtotal() * 0.21 * 100) / 100;
  }

  total(): number {
    return Math.round((this.subtotal() + this.tax()) * 100) / 100;
  }

  totalUnits(): number {
    return this.guestCart.guestUnitCount();
  }

  /** True si quedaron líneas guardadas antes de que guardáramos precio en localStorage (cesta legada). */
  hasUnknownPrices(): boolean {
    return this.lines().some((l) => l.unit_price == null);
  }

  //actualiza la cantidad de una línea
  updateQuantity(line: GuestCartLine, newQty: number): void {
    if (newQty < 1 || newQty > 99) {
      return;
    }
    this.guestCart.setLineQuantity(line.product_id, newQty);
  }

  //elimina una línea
  removeLine(line: GuestCartLine): void {
    this.guestCart.removeLine(line.product_id);
  }

  //formatea el precio
  formatPrice(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  }

  /** Fallback si el JSON antiguo no tenía el nombre del producto. */
  displayName(line: GuestCartLine): string {
    return line.product_name?.trim() || `Producto #${line.product_id}`;
  }

  trackByProductId(_: number, line: GuestCartLine): number {
    return line.product_id;
  }
}
