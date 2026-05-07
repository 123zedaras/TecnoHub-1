import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = `${environment.apiUrl}/products`;
  private readonly publicApiUrl = `${environment.apiUrl}/public/products`;

  constructor(private http: HttpClient) {}

  /**
   * GET /api/products
   * El backend acepta opcionalmente ?search= para filtrar por nombre o SKU.
   */
  getProducts(search?: string): Observable<{ data: Product[] }> {
    return this.fetchProducts(this.apiUrl, search);
  }

  /**
   * GET /api/public/products
   * Endpoint público para invitados (sin auth).
   */
  getPublicProducts(search?: string): Observable<{ data: Product[] }> {
    return this.fetchProducts(this.publicApiUrl, search);
  }

  private fetchProducts(url: string, search?: string): Observable<{ data: Product[] }> {
    const q = search?.trim() ?? '';
    let params = new HttpParams();
    if (q.length > 0) {
      params = params.set('search', q);
    }
    return this.http.get<{ data: Product[] }>(url, { params });
  }

  getProduct(id: number): Observable<{ data: Product }> {
    return this.http.get<{ data: Product }>(`${this.apiUrl}/${id}`);
  }
}
