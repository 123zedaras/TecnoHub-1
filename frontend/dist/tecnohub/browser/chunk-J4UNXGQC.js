import {
  environment
} from "./chunk-NW4XVQFF.js";
import {
  HttpClient,
  __spreadProps,
  __spreadValues,
  catchError,
  concatMap,
  from,
  last,
  map,
  of,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Y4GLGG7Z.js";

// src/app/core/services/guest-cart-storage.service.ts
var GuestCartStorageService = class _GuestCartStorageService {
  constructor() {
    this.storageKey = "tecnohub_guest_cart";
    this.guestUnitCount = signal(0);
    this.guestLines = signal([]);
    const lines = this.parseStored(localStorage.getItem(this.storageKey));
    this.guestLines.set(lines);
    this.syncUnitCount(lines);
  }
  /**
   * Devuelve líneas listas para POST /api/cart/items (solo product_id y quantity).
   */
  getLines() {
    return this.guestLines().map(({ product_id, quantity }) => ({ product_id, quantity }));
  }
  /**
   * Añade o suma cantidad si ya existía el mismo id.
   * Opcionalmente guarda nombre y precio unitario para mostrar la cesta sin llamar al backen.
   */
  addOrMergeLine(line) {
    const lines = [...this.guestLines()];
    const idx = lines.findIndex((l) => l.product_id === line.product_id);
    if (idx >= 0) {
      const existing = lines[idx];
      lines[idx] = __spreadProps(__spreadValues({}, existing), {
        quantity: Math.min(99, existing.quantity + line.quantity),
        product_name: line.product_name ?? existing.product_name,
        unit_price: line.unit_price ?? existing.unit_price
      });
    } else {
      lines.push(__spreadValues({}, line));
    }
    this.persist(lines);
  }
  /** Usado en la página /cesta: ajusta unidades respetando 1–99; cantidad 0 elimina la línea. */
  setLineQuantity(productId, quantity) {
    if (quantity < 1) {
      this.removeLine(productId);
      return;
    }
    const q = Math.min(99, quantity);
    const lines = this.guestLines().map((l) => l.product_id === productId ? __spreadProps(__spreadValues({}, l), { quantity: q }) : l);
    if (!lines.some((l) => l.product_id === productId)) {
      return;
    }
    this.persist(lines);
  }
  /** Quita un producto de la cesta invitado (botón eliminar en /cesta). */
  removeLine(productId) {
    const lines = this.guestLines().filter((l) => l.product_id !== productId);
    this.persist(lines);
  }
  /** Elimina la cesta invitado y pone el contador a 0. */
  clear() {
    localStorage.removeItem(this.storageKey);
    this.guestLines.set([]);
    this.guestUnitCount.set(0);
  }
  /** Suma de cantidad de todas las líneas */
  getTotalQuantity() {
    return this.guestLines().reduce((sum, l) => sum + l.quantity, 0);
  }
  /** Serializa a localStorage y refresca signals para que Angular repinte el header y las páginas. */
  persist(lines) {
    localStorage.setItem(this.storageKey, JSON.stringify(lines));
    this.guestLines.set(lines);
    this.syncUnitCount(lines);
  }
  syncUnitCount(lines) {
    this.guestUnitCount.set(lines.reduce((sum, l) => sum + l.quantity, 0));
  }
  /**
   * Lee el JSON guardado de forma tolerante a datos viejos (solo id+cantidad) o corruptos.
   * Se usa notación r['campo'] porque TypeScript exige acceso por índice en Record<string, unknown>.
   */
  parseStored(raw) {
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed.map((row) => {
        const r = row;
        return {
          product_id: Number(r["product_id"]),
          quantity: Number(r["quantity"]),
          product_name: typeof r["product_name"] === "string" ? r["product_name"] : void 0,
          unit_price: typeof r["unit_price"] === "number" && !Number.isNaN(r["unit_price"]) ? r["unit_price"] : void 0
        };
      }).filter((row) => row.product_id > 0 && row.quantity > 0);
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function GuestCartStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GuestCartStorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GuestCartStorageService, factory: _GuestCartStorageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor(http, guestCartStorage) {
    this.http = http;
    this.guestCartStorage = guestCartStorage;
    this.apiUrl = `${environment.apiUrl}/cart`;
    this.itemCount = signal(0);
    this.cartTotal = signal(0);
  }
  // GET /api/cart
  getCart() {
    return this.http.get(this.apiUrl).pipe(tap((res) => {
      this.itemCount.set(res.data.item_count);
      this.cartTotal.set(res.data.total);
    }));
  }
  // POST /api/cart/items
  addItem(request) {
    return this.http.post(`${this.apiUrl}/items`, request).pipe(tap((res) => {
      this.itemCount.set(res.cart?.item_count ?? this.itemCount());
      this.cartTotal.set(res.cart?.total ?? this.cartTotal());
    }));
  }
  /**
   * Tras guardar el token de Sanctum: recorre la cesta invitado y llama a POST /cart/items
   * una vez por línea (en serie). El backend ya fusiona por product_id si existía en el carrito del usuario.
   * Solo borra localStorage si todas las peticiones terminan bien.
   */
  mergeGuestCartFromStorage() {
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
        this.guestCartStorage.clear();
      }),
      map(() => ({ mergedCount })),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
  // PUT /api/cart/items/{id}
  updateItem(itemId, request) {
    return this.http.put(`${this.apiUrl}/items/${itemId}`, request).pipe(tap((res) => {
      if (res.cart) {
        this.itemCount.set(res.cart.item_count);
        this.cartTotal.set(res.cart.total);
      }
    }));
  }
  // DELETE /api/cart/items/{id}
  removeItem(itemId) {
    return this.http.delete(`${this.apiUrl}/items/${itemId}`).pipe(tap((res) => {
      if (res.cart) {
        this.itemCount.set(res.cart.item_count);
        this.cartTotal.set(res.cart.total);
      }
    }));
  }
  // DELETE /api/cart
  clearCart() {
    return this.http.delete(this.apiUrl).pipe(tap(() => {
      this.itemCount.set(0);
      this.cartTotal.set(0);
    }));
  }
  // POST /api/payments/create-intent
  createPaymentIntent() {
    return this.http.post(`${environment.apiUrl}/payments/create-intent`, {});
  }
  // POST /api/orders
  createOrder(paymentIntentId, shippingAddress) {
    return this.http.post(`${environment.apiUrl}/orders`, {
      payment_intent_id: paymentIntentId,
      shipping_address: shippingAddress
    }).pipe(tap(() => {
      this.itemCount.set(0);
      this.cartTotal.set(0);
    }));
  }
  // GET /api/orders
  getOrders() {
    return this.http.get(`${environment.apiUrl}/orders`);
  }
  // GET /api/orders/{id}
  getOrder(id) {
    return this.http.get(`${environment.apiUrl}/orders/${id}`);
  }
  static {
    this.\u0275fac = function CartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(GuestCartStorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  GuestCartStorageService,
  CartService
};
//# sourceMappingURL=chunk-J4UNXGQC.js.map
