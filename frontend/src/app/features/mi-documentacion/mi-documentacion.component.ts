import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../shared/models/product.model';

interface DocumentationRow {
  productId: number;
  productName: string;
  documentationUrl: string;
  image: string | null;
}

@Component({
  selector: 'app-mi-documentacion',
  templateUrl: './mi-documentacion.component.html',
  styleUrls: ['./mi-documentacion.component.scss'],
})
export class MiDocumentacionComponent implements OnInit {
  rows: DocumentationRow[] = [];
  loading = true;
  error: string | null = null;
  searchInput = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.loadDocumentationRows();
  }

  openDocumentation(url: string): void {
    window.open(this.normalizeUrl(url), '_blank', 'noopener,noreferrer');
  }

  clearSearch(): void {
    this.searchInput = '';
  }

  get filteredRows(): DocumentationRow[] {
    const term = this.searchInput.trim().toLocaleLowerCase('es');
    if (!term) {
      return this.rows;
    }
    return this.rows.filter((row) =>
      row.productName.toLocaleLowerCase('es').includes(term),
    );
  }

  private loadDocumentationRows(): void {
    this.loading = true;
    this.error = null;

    forkJoin({
      orders: this.cartService.getOrders(),
      products: this.productService.getProducts(),
    }).subscribe({
      next: ({ orders, products }) => {
        const purchasedIds = new Set<number>();
        for (const order of orders.data) {
          for (const item of order.items ?? []) {
            purchasedIds.add(item.product_id);
          }
        }

        this.rows = (products.data ?? [])
          .filter((p) => purchasedIds.has(p.id) && this.hasDocumentationUrl(p))
          .map((p) => ({
            productId: p.id,
            productName: p.name,
            documentationUrl: p.documentation!.trim(),
            image: p.image ?? null,
          }))
          .sort((a, b) => a.productName.localeCompare(b.productName, 'es'));

        this.loading = false;
      },
      error: () => {
        this.rows = [];
        this.loading = false;
        this.error = 'No se pudo cargar tu documentación. Inténtalo de nuevo.';
      },
    });
  }

  private hasDocumentationUrl(product: Product): boolean {
    return typeof product.documentation === 'string' && product.documentation.trim().length > 0;
  }

  private normalizeUrl(rawUrl: string): string {
    const url = rawUrl.trim();
    if (/^https?:\/\//i.test(url)) {
      return url;
    }
    return `https://${url}`;
  }
}
