import { Injectable, signal } from '@angular/core';
import { AddToCartRequest, GuestCartLine } from '../../shared/models/cart.model';

/**
 * Cesta del usuario no autenticada: solo existe en el navegador (localStorage).
 * Tras el login, CartService.mergeGuestCartFromStorage() enviará estas líneas al API
 * y aquí se vaciará el almacenamiento si todo va bien.
 *
 * guestLines, como signal para que el menú público y cesta se actualicen al añadir o
 * editar líneas sin recargar la página.
 */
@Injectable({ providedIn: 'root' })
export class GuestCartStorageService {
  /** Clave única para no chocar con auth_token. */
  private readonly storageKey = 'tecnohub_guest_cart';

  /**
   * Signal con el total de unidades en la cesta invitado (suma de cantidades).
   * Sirve para mostrar el badge del carrito en el catálogo sin llamar al backend.
   */
  readonly guestUnitCount = signal(0);

  /** Copia en memoria de lo guardado en localStorage; la plantilla lee guestLines() para listar la cesta. */
  readonly guestLines = signal<GuestCartLine[]>([]);

  constructor() {
    // Al arrancar la app, se setea el signal con lo que hubiera en disco (cesta persistente entre visitas).
    const lines = this.parseStored(localStorage.getItem(this.storageKey));
    this.guestLines.set(lines);
    this.syncUnitCount(lines);
  }

  /**
   * Devuelve líneas listas para POST /api/cart/items (solo product_id y quantity).
   */
  getLines(): AddToCartRequest[] {
    return this.guestLines().map(({ product_id, quantity }) => ({ product_id, quantity }));
  }

  /**
   * Añade o suma cantidad si ya existía el mismo id.
   * Opcionalmente guarda nombre y precio unitario para mostrar la cesta sin llamar al backen.
   */
  addOrMergeLine(line: GuestCartLine): void {
    const lines = [...this.guestLines()];
    const idx = lines.findIndex((l) => l.product_id === line.product_id);
    if (idx >= 0) {
      const existing = lines[idx];
      lines[idx] = {
        ...existing,
        quantity: Math.min(99, existing.quantity + line.quantity),
        product_name: line.product_name ?? existing.product_name,
        unit_price: line.unit_price ?? existing.unit_price,
      };
    } else {
      lines.push({ ...line });
    }
    this.persist(lines);
  }

  /** Usado en la página /cesta: ajusta unidades respetando 1–99; cantidad 0 elimina la línea. */
  setLineQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.removeLine(productId);
      return;
    }
    const q = Math.min(99, quantity);
    const lines = this.guestLines().map((l) =>
      l.product_id === productId ? { ...l, quantity: q } : l,
    );
    if (!lines.some((l) => l.product_id === productId)) {
      return;
    }
    this.persist(lines);
  }

  /** Quita un producto de la cesta invitado (botón eliminar en /cesta). */
  removeLine(productId: number): void {
    const lines = this.guestLines().filter((l) => l.product_id !== productId);
    this.persist(lines);
  }

  /** Elimina la cesta invitado y pone el contador a 0. */
  clear(): void {
    localStorage.removeItem(this.storageKey);
    this.guestLines.set([]);
    this.guestUnitCount.set(0);
  }

  /** Suma de cantidad de todas las líneas */
  getTotalQuantity(): number {
    return this.guestLines().reduce((sum, l) => sum + l.quantity, 0);
  }

  /** Serializa a localStorage y refresca signals para que Angular repinte el header y las páginas. */
  private persist(lines: GuestCartLine[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(lines));
    this.guestLines.set(lines);
    this.syncUnitCount(lines);
  }

  private syncUnitCount(lines: GuestCartLine[]): void {
    this.guestUnitCount.set(lines.reduce((sum, l) => sum + l.quantity, 0));
  }

  /**
   * Lee el JSON guardado de forma tolerante a datos viejos (solo id+cantidad) o corruptos.
   * Se usa notación r['campo'] porque TypeScript exige acceso por índice en Record<string, unknown>.
   */
  private parseStored(raw: string | null): GuestCartLine[] {
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed
        .map((row) => {
          const r = row as Record<string, unknown>;
          return {
            product_id: Number(r['product_id']),
            quantity: Number(r['quantity']),
            product_name: typeof r['product_name'] === 'string' ? (r['product_name'] as string) : undefined,
            unit_price:
              typeof r['unit_price'] === 'number' && !Number.isNaN(r['unit_price'] as number)
                ? (r['unit_price'] as number)
                : undefined,
          };
        })
        .filter((row) => row.product_id > 0 && row.quantity > 0);
    } catch {
      return [];
    }
  }
}
