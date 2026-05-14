import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of, tap, throwError } from 'rxjs';
import { catchError, concatMap, last, map } from 'rxjs/operators';
import { Cart, AddToCartRequest, UpdateCartItemRequest } from '../../shared/models/cart.model';
import { environment } from '../../../environments/environment';
import { GuestCartStorageService } from './guest-cart-storage.service';

/**
 * Carrito del usuario autenticado con el API Laravel
 * Mantiene itemCount y `artTotal en signals para el header y vistas de cesta autenticada.
 */
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly apiUrl = `${environment.apiUrl}/cart`;

  /** Unidades distintas o total de líneas según devuelva el backend en item_count (para badge). */
  readonly itemCount = signal<number>(0);
  /** Total monetario del carrito según última respuesta del servidor. */
  readonly cartTotal = signal<number>(0);

  constructor(
    private http: HttpClient,
    private guestCartStorage: GuestCartStorageService,
  ) {}

  /**
   * GET /api/cart — Obtiene el carrito del usuario y sincroniza signals de contador y total.
   */
  getCart(): Observable<{ data: Cart }> {
    return this.http.get<{ data: Cart }>(this.apiUrl).pipe(
      tap(res => {
        this.itemCount.set(res.data.item_count);
        this.cartTotal.set(res.data.total);
      })
    );
  }

  /**
   * POST /api/cart/items — Añade cantidad de un producto. El servidor suma si ya existía la misma referencia.
   */
  addItem(request: AddToCartRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/items`, request).pipe(
      tap((res: any) => {
        this.itemCount.set(res.cart?.item_count ?? this.itemCount());
        this.cartTotal.set(res.cart?.total ?? this.cartTotal());
      })
    );
  }

  /**
   * Tras el login: lee líneas guardadas como invitado (`GuestCartStorageService`) y por cada una
   * llama a `addItem` en serie (`concatMap`). Si una petición falla, no se vacía el localStorage
   * (el usuario puede reintentar). Si todas OK, `guestCartStorage.clear()` elimina la cesta local.
   */
  mergeGuestCartFromStorage(): Observable<{ mergedCount: number }> {
    const lines = this.guestCartStorage.getLines();
    if (lines.length === 0) {
      return of({ mergedCount: 0 });
    }
    const mergedCount = lines.length;
    return from(lines).pipe(
      // Una petición tras otra; si una falla, se corta el flujo y NO se ejecuta el tap de clear.
      concatMap((line) => this.addItem(line)),
      last(),
      tap(() => {
        this.guestCartStorage.clear();
      }),
      map(() => ({ mergedCount })),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  /**
   * PUT /api/cart/items/{id} — Cambia la cantidad de una línea ya existente en el carrito remoto.
   */
  updateItem(itemId: number, request: UpdateCartItemRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/items/${itemId}`, request).pipe(
      tap((res: any) => {
        if (res.cart) {
          this.itemCount.set(res.cart.item_count);
          this.cartTotal.set(res.cart.total);
        }
      })
    );
  }

  /**
   * DELETE /api/cart/items/{id} — Elimina una línea del carrito en servidor.
   */
  removeItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/items/${itemId}`).pipe(
      tap((res: any) => {
        if (res.cart) {
          this.itemCount.set(res.cart.item_count);
          this.cartTotal.set(res.cart.total);
        }
      })
    );
  }

  /**
   * DELETE /api/cart — Vacía todo el carrito del usuario y pone contadores a cero en cliente.
   */
  clearCart(): Observable<any> {
    return this.http.delete(this.apiUrl).pipe(
      tap(() => {
        this.itemCount.set(0);
        this.cartTotal.set(0);
      })
    );
  }

  /**
   * POST /api/payments/create-intent — Crea intención de pago Stripe antes de confirmar el pedido.
   */
  createPaymentIntent(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/payments/create-intent`, {});
  }

  /**
   * POST /api/orders — Confirma pedido tras pago; el backend suele vaciar el carrito (aquí se resetean signals).
   */
  createOrder(paymentIntentId: string, shippingAddress?: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/orders`, {
      payment_intent_id: paymentIntentId,
      shipping_address: shippingAddress,
    }).pipe(
      tap(() => {
        this.itemCount.set(0);
        this.cartTotal.set(0);
      })
    );
  }

  /**
   * GET /api/orders — Lista pedidos del usuario (p. ej. histórico o «mis compras»).
   */
  getOrders(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}/orders`);
  }

  /**
   * GET /api/orders/{id} — Detalle de un pedido concreto.
   */
  getOrder(id: number): Observable<{ data: any }> {
    return this.http.get<{ data: any }>(`${environment.apiUrl}/orders/${id}`);
  }
}
