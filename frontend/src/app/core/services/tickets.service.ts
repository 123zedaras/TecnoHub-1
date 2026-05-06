import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Ticket,
  TicketMessage,
  CreateTicketRequest,
  UpdateTicketRequest,
  TicketStatus,
  TicketPriority,
} from '../../shared/models/ticket.model';
import { environment } from '../../../environments/environment';

export interface TicketFilters {
  status?: TicketStatus;
  priority?: TicketPriority;
  machine_name?: string;
  page?: number;
}

export interface TicketsPage {
  data: Ticket[];
  total: number;
  last_page: number;
  current_page: number;
  status_counts: Partial<Record<TicketStatus, number>>;
}

@Injectable({ providedIn: 'root' })
export class TicketsService {
  private readonly apiUrl = `${environment.apiUrl}/tickets`;

  constructor(private http: HttpClient) {}

  // GET /api/tickets
  getTickets(filters: TicketFilters = {}): Observable<TicketsPage> {
    let params = new HttpParams();
    if (filters.status)       params = params.set('status', filters.status);
    if (filters.priority)     params = params.set('priority', filters.priority);
    if (filters.machine_name) params = params.set('machine_name', filters.machine_name);
    if (filters.page)         params = params.set('page', filters.page.toString());

    return this.http.get<TicketsPage>(this.apiUrl, { params });
  }

  // POST /api/tickets
  createTicket(request: CreateTicketRequest): Observable<Ticket> {
    return this.http.post<{ message: string; data: Ticket }>(this.apiUrl, request).pipe(
      map(res => res.data)
    );
  }

  // GET /api/tickets/{id}
  getTicket(id: number): Observable<Ticket> {
    return this.http.get<{ data: Ticket }>(`${this.apiUrl}/${id}`).pipe(
      map(res => res.data)
    );
  }

  // PUT /api/tickets/{id}
  updateTicket(id: number, request: UpdateTicketRequest): Observable<Ticket> {
    return this.http.put<{ message: string; data: Ticket }>(`${this.apiUrl}/${id}`, request).pipe(
      map(res => res.data)
    );
  }

  // POST /api/tickets/{id}/messages
  sendMessage(ticketId: number, content: string): Observable<TicketMessage> {
    return this.http.post<{ data: TicketMessage }>(`${this.apiUrl}/${ticketId}/messages`, { content }).pipe(
      map(res => res.data)
    );
  }

  // GET /api/machines  (used by ticket-create to populate machine selector)
  getMachines(): Observable<{ id: number; name: string }[]> {
    const machinesUrl = `${environment.apiUrl}/machines`;
    return this.http.get<{ data: { id: number; name: string }[] }>(machinesUrl).pipe(
      map(res => res.data ?? res as any)
    );
  }
}
