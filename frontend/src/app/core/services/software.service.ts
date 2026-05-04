import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  private apiUrl = 'http://localhost:8000/api/software';

  constructor(private http: HttpClient) {}

  // GET /api/software
  getAll(search?: string): Observable<any> {
    const url = search ? `${this.apiUrl}?search=${search}` : this.apiUrl;
    return this.http.get(url);
  }

  // GET /api/software/{id}
  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
