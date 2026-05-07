import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Ticket, TicketStatus, TicketPriority,
  STATUS_LABELS, STATUS_COLORS, PRIORITY_LABELS, PRIORITY_COLORS,
} from '../../../shared/models/ticket.model';
import { TicketsService } from '../../../core/services/tickets.service';

interface FilterTab {
  label: string;
  value: TicketStatus | null;
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  loading = true;
  error: string | null = null;
  activeFilter: TicketStatus | null = null;
  currentPage = 1;
  lastPage = 1;
  total = 0;

  // Contadores por estado (se rellenan con la respuesta del backend)
  statusCounts: Partial<Record<TicketStatus, number>> = {};

  tabs: FilterTab[] = [
    { label: 'Todos',      value: null },
    { label: 'Abiertos',   value: 'open' },
    { label: 'En Proceso', value: 'in_process' },
    { label: 'Cerrados',   value: 'closed' },
  ];

  readonly STATUS_LABELS   = STATUS_LABELS;
  readonly STATUS_COLORS   = STATUS_COLORS;
  readonly PRIORITY_LABELS = PRIORITY_LABELS;
  readonly PRIORITY_COLORS = PRIORITY_COLORS;

  // Colores de fondo para badges de prioridad (matching el diseño)
  readonly PRIORITY_BG: Record<TicketPriority, string> = {
    critical: '#FEF2F2',
    high:     '#FFF7ED',
    normal:   '#EFF6FF',
    low:      '#F0FDF4',
  };

  // Iconos de estado (texto, como en el diseño)
  readonly STATUS_ICONS: Record<TicketStatus, string> = {
    open:       'Abierto',
    in_process: '◉',
    resolved:   '✓',
    closed:     '✓',
  };

  // Colores de fondo para estado (no se usa en la tabla, es texto directo)
  readonly STATUS_BG: Record<TicketStatus, string> = {
    open:       '#FEF3C7',
    in_process: '#EEF2FF',
    resolved:   '#F0FDF4',
    closed:     '#F1F5F9',
  };

  constructor(
    private ticketsService: TicketsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    const filters: any = { page: this.currentPage };
    if (this.activeFilter) filters.status = this.activeFilter;

    this.ticketsService.getTickets(filters).subscribe({
      next: (res) => {
        this.tickets      = res.data;
        this.lastPage     = res.last_page ?? 1;
        this.total        = res.total ?? res.data.length;
        this.statusCounts = res.status_counts ?? {};
        this.loading      = false;
      },
      error: () => {
        this.error   = 'No se pudieron cargar los tickets.';
        this.loading = false;
      },
    });
  }

  setFilter(status: TicketStatus | null): void {
    this.activeFilter = status;
    this.currentPage  = 1;
    this.loadTickets();
  }

  getCountForStatus(status: TicketStatus): number {
    return this.statusCounts[status] ?? 0;
  }

  openTicket(ticket: Ticket): void {
    this.router.navigate(['/incidencias', ticket.id]);
  }

  newTicket(): void {
    this.router.navigate(['/incidencias/nueva']);
  }

  trackById(_: number, t: Ticket): number { return t.id; }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
  }
}
