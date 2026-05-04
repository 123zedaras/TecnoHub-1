import { Component } from '@angular/core';
import { GuestCartLine } from '../../shared/models/cart.model';
import { GuestCartStorageService } from '../../core/services/guest-cart-storage.service';

/**
 * Ruta pública `/cesta`: revisión del pedido antes de login.
 * No usa CartService (requiere sesión); lee y edita solo la cesta invitado en el navegador.
 * Sustituye el flujo de checkout por un CTA a login, alineado con el requisito de negocio.
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

  /** Subtotal por línea; si falta precio en datos antiguos, devolvemos 0 para no inventar importes. */
  lineSubtotal(line: GuestCartLine): number {
    if (line.unit_price == null) {
      return 0;
    }
    return line.unit_price * line.quantity;
  }

  subtotal(): number {
    return this.lines().reduce((sum, l) => sum + this.lineSubtotal(l), 0);
  }

  /** Misma lógica de IVA que la cesta autenticada (21 %) para coherencia visual con /recambios. */
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

  updateQuantity(line: GuestCartLine, newQty: number): void {
    if (newQty < 1 || newQty > 99) {
      return;
    }
    this.guestCart.setLineQuantity(line.product_id, newQty);
  }

  removeLine(line: GuestCartLine): void {
    this.guestCart.removeLine(line.product_id);
  }

  formatPrice(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  }

  /** Fallback amigable si el JSON antiguo no tenía nombre de producto. */
  displayName(line: GuestCartLine): string {
    return line.product_name?.trim() || `Producto #${line.product_id}`;
  }

  trackByProductId(_: number, line: GuestCartLine): number {
    return line.product_id;
  }
}
