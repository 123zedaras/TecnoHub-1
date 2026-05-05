import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of, tap, throwError } from 'rxjs';
import { catchError, concatMap, last, map } from 'rxjs/operators';
import { Cart, AddToCartRequest, UpdateCartItemRequest } from '../../shared/models/cart.model';
import { environment } from '../../../environments/environment';
import { GuestCartStorageService } from './guest-cart-storage.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly apiUrl = `${environment.apiUrl}/cart`;

  // Signal reactivo para el contador del carrito (ícono del header)
  readonly itemCount = signal<number>(0);
  readonly cartTotal = signal<number>(0);

  constructor(
    private http: HttpClient,
    private guestCartStorage: GuestCartStorageService,
  ) {}

  // GET /api/cart
  getCart(): Observable<{ data: Cart }> {
    return this.http.get<{ data: Cart }>(this.apiUrl).pipe(
      tap(res => {
        this.itemCount.set(res.data.item_count);
        this.cartTotal.set(res.data.total);
      })
    );
  }

  // POST /api/cart/items
  addItem(request: AddToCartRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/items`, request).pipe(
      tap((res: any) => {
        this.itemCount.set(res.cart?.item_count ?? this.itemCount());
        this.cartTotal.set(res.cart?.total ?? this.cartTotal());
      })
    );
  }

  /**
   * Tras guardar el token de Sanctum: recorre la cesta invitado y llama a POST /cart/items
   * una vez por línea (en serie). El backend ya fusiona por product_id si existía en el carrito del usuario.
   * Solo borra localStorage si todas las peticiones terminan bien.
   */
  mergeGuestCartFromStorage(): Observable<{ mergedCount: number }> {
    const lines = this.guestCartStorage.getLines();
    if (lines.length === 0) {
      return of({ mergedCount: 0 });
    }
    const mergedCount = lines.length;
    return from(lines).pipe(
      // concatMap = una petición tras otra; si una falla, se corta el flujo y NO se ejecuta el tap siguiente.
      concatMap((line) => this.addItem(line)),
      // Emite solo la última respuesta HTTP cuando ya se añadió todo (sirve para disparar un solo tap).
      last(),
      tap(() => {
        // Aquí ya sabemos que todas las líneas se enviaron correctamente.
        this.guestCartStorage.clear();
      }),
      map(() => ({ mergedCount })),
      catchError((err) => {
        // Dejamos los datos en localStorage para que el usuario pueda reintentar tras corregir stock/login.
        return throwError(() => err);
      })
    );
  }

  // PUT /api/cart/items/{id}
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

  // DELETE /api/cart/items/{id}
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

  // DELETE /api/cart
  clearCart(): Observable<any> {
    return this.http.delete(this.apiUrl).pipe(
      tap(() => {
        this.itemCount.set(0);
        this.cartTotal.set(0);
      })
    );
  }

  // POST /api/payments/create-intent
  createPaymentIntent(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/payments/create-intent`, {});
  }

  // POST /api/orders
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

  // GET /api/orders
  getOrders(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}/orders`);
  }

  // GET /api/orders/{id}
  getOrder(id: number): Observable<{ data: any }> {
    return this.http.get<{ data: any }>(`${environment.apiUrl}/orders/${id}`);
  }
}
