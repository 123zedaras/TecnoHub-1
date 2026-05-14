import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';

/**
 * mostrar el catálogo de productos, manejar búsquedas en tiempo real y añadir productos al carrito
 */

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})

export class CatalogComponent implements OnInit, OnDestroy {
  //guarda los productos
  products: Product[] = [];
  //indica si se está cargando el catálogo
  loading = true;
  error: string | null = null;
  //guarda el id del producto que se está añadiendo al carrito
  addingProductId: number | null = null;
  //guarda el mensaje de éxito
  successMessage: string | null = null;

  //guarda el input de búsqueda
  searchInput = '';
  //guarda la última consulta de búsqueda
  lastSearchQuery = '';

  //guarda el número de secuencia de carga
  private loadSeq = 0;
  //guarda el handle de búsqueda
  private searchDebounceHandle: ReturnType<typeof setTimeout> | null = null;
  //guarda el tiempo de debounce
  private readonly searchDebounceMs = 400;

  //devuelve el número de productos en el carrito
  get cartCount(): number {
    //obtiene el número de productos en el carrito
    return this.cartService.itemCount();
  }
  //servicio para manejar los productos
  constructor(
    private productService: ProductService,
    //servicio para manejar los productos
    private cartService: CartService,
    //servicio para navegar
    private router: Router,
  ) {}

  ngOnInit(): void {
    //carga los productos
    this.loadProducts();
  }

  ngOnDestroy(): void {
    //cancela la búsqueda
    this.cancelSearchDebounce();
  }

  onSearchInput(rawValue: string): void {
    //guarda el input de búsqueda
    this.searchInput = rawValue;
    //cancela la búsqueda
    this.cancelSearchDebounce();
    //establece el handle de búsqueda
    this.searchDebounceHandle = setTimeout(() => {
      //guarda el handle de búsqueda
      this.searchDebounceHandle = null;
      //obtiene el término de búsqueda
      const term = rawValue.trim();
      //carga los productos
      this.loadProducts(term.length > 0 ? term : undefined);
    }, this.searchDebounceMs);
  }

  flushSearch(): void {
    //cancela la búsqueda
    this.cancelSearchDebounce();
    //obtiene el término de búsqueda
    const term = this.searchInput.trim();
    //carga los productos
    this.loadProducts(term.length > 0 ? term : undefined);
  }

  clearSearch(): void {
    //cancela la búsqueda
    this.cancelSearchDebounce();
    //limpia el input de búsqueda
    this.searchInput = '';
    this.loadProducts();
  }

  private cancelSearchDebounce(): void {
    if (this.searchDebounceHandle !== null) {
      clearTimeout(this.searchDebounceHandle);
      this.searchDebounceHandle = null;
    }
  }

  //carga los productos
  loadProducts(search?: string): void {
    const seq = ++this.loadSeq;
    this.loading = true;
    this.error = null;
    const query = search?.trim();
    const param = query && query.length > 0 ? query : undefined;

    //obtiene los productos
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
            ? 'No hay conexión con el servidor.'
            : 'No se pudo cargar el catálogo.';
        this.loading = false;
      },
    });
  }

  //añade un producto al carrito
  addToCart(product: Product): void {
    //si el producto no tiene stock, no se añade al carrito
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

  //navega a la página de carrito
  goToCart(): void {
    void this.router.navigate(['/recambios/carrito']);
  }

  //formatea el precio
  formatPrice(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  }

  //devuelve el label de stock
  stockLabel(stock: number): string {
    if (stock === 0) {
      return 'Sin stock';
    }
    if (stock < 5) {
      return 'Pocas unidades';
    }
    return 'Disponible';
  }

  //devuelve la clase de stock
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
