import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SoftwareItem {
  id: number;
  nombre: string;
  descripcion: string | null;
  precio: number;
  instalador: string | null;
  estado: string;
  version: string;
  product_id: number | null;
}

@Injectable({ providedIn: 'root' })
export class SoftwareService {
  private readonly apiUrl = `${environment.apiUrl}/software`;

  constructor(private http: HttpClient) {}

  getAll(search?: string): Observable<{ data: SoftwareItem[] }> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get<{ data: SoftwareItem[] }>(this.apiUrl, { params });
  }

  getById(id: number): Observable<{ data: SoftwareItem }> {
    return this.http.get<{ data: SoftwareItem }>(`${this.apiUrl}/${id}`);
  }
}
