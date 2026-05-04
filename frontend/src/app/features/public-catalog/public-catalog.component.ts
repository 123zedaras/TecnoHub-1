import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { GuestCartStorageService } from '../../core/services/guest-cart-storage.service';

/**
 * Catálogo visible sin iniciar sesión: misma API que /recambios.
 * Invitados guardan líneas en localStorage; con sesión se usa el carrito del API.
 */
@Component({
  selector: 'app-public-catalog',
  templateUrl: './public-catalog.component.html',
  styleUrls: ['./public-catalog.component.scss'],
})
export class PublicCatalogComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  loading = true;
  error: string | null = null;
  addingProductId: number | null = null;
  successMessage: string | null = null;

  searchInput = '';
  lastSearchQuery = '';

  private loadSeq = 0;
  private searchDebounceHandle: ReturnType<typeof setTimeout> | null = null;
  private readonly searchDebounceMs = 400;

  get cartCount(): number {
    return this.auth.isAuthenticated()
      ? this.cartService.itemCount()
      : this.guestCart.guestUnitCount();
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private auth: AuthService,
    private guestCart: GuestCartStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.cancelSearchDebounce();
  }

  onSearchInput(rawValue: string): void {
    this.searchInput = rawValue;
    this.cancelSearchDebounce();
    this.searchDebounceHandle = setTimeout(() => {
      this.searchDebounceHandle = null;
      const term = rawValue.trim();
      this.loadProducts(term.length > 0 ? term : undefined);
    }, this.searchDebounceMs);
  }

  flushSearch(): void {
    this.cancelSearchDebounce();
    const term = this.searchInput.trim();
    this.loadProducts(term.length > 0 ? term : undefined);
  }

  clearSearch(): void {
    this.cancelSearchDebounce();
    this.searchInput = '';
    this.loadProducts();
  }

  private cancelSearchDebounce(): void {
    if (this.searchDebounceHandle !== null) {
      clearTimeout(this.searchDebounceHandle);
      this.searchDebounceHandle = null;
    }
  }

  loadProducts(search?: string): void {
    const seq = ++this.loadSeq;
    this.loading = true;
    this.error = null;
    const query = search?.trim();
    const param = query && query.length > 0 ? query : undefined;

    this.productService.getProducts(param).subscribe({
      next: (res) => {
        if (seq !== this.loadSeq) {
          return;
        }
        this.products = Array.isArray(res?.data) ? res.data : [];
        this.lastSearchQuery = param ?? '';
        this.loading = false;
      },
      error: (err) => {
        if (seq !== this.loadSeq) {
          return;
        }
        this.products = [];
        this.error =
          err.status === 0
            ? 'No hay conexión con el servidor!!'
            : 'No se pudo cargar el catálogo. Inténtalo de nuevo.';
        this.loading = false;
      },
    });
  }

  addToCart(product: Product): void {
    if (product.stock === 0) {
      return;
    }
    this.addingProductId = product.id;

    if (!this.auth.isAuthenticated()) {
      // Sin token no existe carrito en API: guardamos en localStorage. Nombre y precio permiten
      // mostrar el resumen en el header y en /cesta sin volver a pedir el catálogo al servidor.
      this.guestCart.addOrMergeLine({
        product_id: product.id,
        quantity: 1,
        product_name: product.name,
        unit_price: product.price,
      });
      this.addingProductId = null;
      this.successMessage = `"${product.name}" guardado en tu cesta (inicia sesión para sincronizar).`;
      setTimeout(() => (this.successMessage = null), 3000);
      return;
    }

    this.cartService.addItem({ product_id: product.id, quantity: 1 }).subscribe({
      next: () => {
        this.addingProductId = null;
        this.successMessage = `"${product.name}" añadido al carrito.`;
        setTimeout(() => (this.successMessage = null), 3000);
      },
      error: (err) => {
        this.addingProductId = null;
        this.error = err.error?.message ?? 'Error al añadir al carrito.';
        setTimeout(() => (this.error = null), 4000);
      },
    });
  }

  /** El botón cesta lleva a la vista de cesta pública (misma que el icono del header). */
  goToCart(): void {
    void this.router.navigate(['/cesta']);
  }

  formatPrice(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  }

  stockLabel(stock: number): string {
    if (stock === 0) {
      return 'Sin stock';
    }
    if (stock < 5) {
      return 'Pocas unidades';
    }
    return 'Disponible';
  }

  stockClass(stock: number): string {
    if (stock === 0) {
      return 'out';
    }
    if (stock < 5) {
      return 'low';
    }
    return '';
  }
}
