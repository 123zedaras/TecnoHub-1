import { Injectable, signal } from '@angular/core';
import { AddToCartRequest, GuestCartLine } from '../../shared/models/cart.model';

/**
 * Cesta del usuario no autenticada: solo existe en el navegado
 * Tras el login mergeGuestCartFromStorage envía estas líneas al API y, si todo va bien,
 * llama a clear para vaciar aquí
 *
 * Los signal permiten que el layout público (header, mini-cesta) se actualicen al añadir o editar líneas
 * sin recargar la página.
 */
@Injectable({ providedIn: 'root' })
export class GuestCartStorageService {
  /** Clave JSON en localStorage; distinta de `auth_token` para no pisar la sesión. */
  private readonly storageKey = 'tecnohub_guest_cart';

  /**
   * Suma de cantidades de todas las líneas (badge del carrito en zona pública sin llamar al API).
   */
  readonly guestUnitCount = signal(0);

  /**
   * Líneas actuales en memoria; la plantilla usa guestLines para listar productos y cantidades.
   */
  readonly guestLines = signal<GuestCartLine[]>([]);

  /**
   * Al crear el servicio: hidrata signals desde lo guardado en disco para persistir la cesta entre visitas.
   */
  constructor() {
    const lines = this.parseStored(localStorage.getItem(this.storageKey));
    this.guestLines.set(lines);
    this.syncUnitCount(lines);
  }

  /**
   * Devuelve copias mínimas,product_id, quantity, listas para el body de POST /api/cart/items.
   */
  getLines(): AddToCartRequest[] {
    return this.guestLines().map(({ product_id, quantity }) => ({ product_id, quantity }));
  }

  /**
   * Inserta línea o suma cantidad si el product_id ya existía
   * Opcionalmente guarda nombre y precio para mostrar subtotales en UI sin consultar el backend.
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

  /**
   * Ajusta cantidad de una línea. Si quantity es 0 o negativo, delega en removeLine
   */
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

  /**
   * Elimina la línea con ese product_id del array
   */
  removeLine(productId: number): void {
    const lines = this.guestLines().filter((l) => l.product_id !== productId);
    this.persist(lines);
  }

  /**
   * Borra la clave en localStorage y reinicia signals (tras merge exitoso o si quieres reset manual).
   */
  clear(): void {
    localStorage.removeItem(this.storageKey);
    this.guestLines.set([]);
    this.guestUnitCount.set(0);
  }

  /**
   * Suma de quantity de todas las líneas 
   */
  getTotalQuantity(): number {
    return this.guestLines().reduce((sum, l) => sum + l.quantity, 0);
  }

  /**
   * Escribe JSON en localStorage y actualiza signals para disparar detección de cambios de Angular.
   */
  private persist(lines: GuestCartLine[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(lines));
    this.guestLines.set(lines);
    this.syncUnitCount(lines);
  }

  /** Recalcula guestUnitCount a partir del array dado. */
  private syncUnitCount(lines: GuestCartLine[]): void {
    this.guestUnitCount.set(lines.reduce((sum, l) => sum + l.quantity, 0));
  }

  /**
   * Parsea el string de localStorage: tolera JSON corrupto, no-array o filas sin id/cantidad válidos.
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
