import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {
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
    return this.cartService.itemCount();
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnDestroy(): void {
    // Cancela cualquier búsqueda pendiente al salir del componente
    this.cancelSearchDebounce();
  }

  onSearchInput(rawValue: string): void {
    // Actualiza el valor del input y reinicia el debounce para evitar búsquedas excesivas mientras el usuario escribe
    this.searchInput = rawValue;
    this.cancelSearchDebounce();
    this.searchDebounceHandle = setTimeout(() => {
      this.searchDebounceHandle = null;
      const term = rawValue.trim();
      this.loadProducts(term.length > 0 ? term : undefined);
    }, this.searchDebounceMs);
  }

  // Permite forzar la búsqueda inmediata, por ejemplo al pulsar Enter, sin esperar al debounce
  flushSearch(): void {
    this.cancelSearchDebounce();
    const term = this.searchInput.trim();
    this.loadProducts(term.length > 0 ? term : undefined);
  }

  // Limpia el campo de búsqueda y recarga el catálogo completo
  clearSearch(): void {
    this.cancelSearchDebounce();
    this.searchInput = '';
    this.loadProducts();
  }

  // Cancela cualquier búsqueda pendiente para evitar que se ejecute después de que el componente haya sido destruido
  private cancelSearchDebounce(): void {
    if (this.searchDebounceHandle !== null) {
      clearTimeout(this.searchDebounceHandle);
      this.searchDebounceHandle = null;
    }
  }

  /**
   * Carga los productos desde la API, aplicando un filtro de búsqueda si se proporciona. 
   * Utiliza un contador de secuencia para evitar que respuestas antiguas sobrescriban datos más recientes.
   */
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
            ? 'No hay conexión con el servidor. Comprueba que la API esté en marcha.'
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

  goToCart(): void {
    void this.router.navigate(['/recambios/carrito']);
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
