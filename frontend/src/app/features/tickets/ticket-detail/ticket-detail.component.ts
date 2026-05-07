import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Ticket, TicketStatus, TicketMessage, TicketPriority,
  STATUS_LABELS, STATUS_COLORS, PRIORITY_LABELS, PRIORITY_COLORS,
  UpdateTicketRequest,
} from '../../../shared/models/ticket.model';
import { TicketsService } from '../../../core/services/tickets.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesEnd') messagesEndRef!: ElementRef;

  ticket: Ticket | null = null;
  loading = true;
  error: string | null = null;

  newMessage = '';
  sendingMessage = false;
  messageError: string | null = null;

  updatingStatus = false;
  showStatusMenu = false;
  statusError: string | null = null;

  readonly STATUS_LABELS   = STATUS_LABELS;
  readonly STATUS_COLORS   = STATUS_COLORS;
  readonly PRIORITY_LABELS = PRIORITY_LABELS;
  readonly PRIORITY_COLORS = PRIORITY_COLORS;

  // Fondos de estado (diseño: FEF3C7 para in_process, EEF2FF para open, etc.)
  readonly STATUS_BG: Record<TicketStatus, string> = {
    open:       '#FEF3C7',
    in_process: '#FEF3C7',
    resolved:   '#F0FDF4',
    closed:     '#F1F5F9',
  };

  // Fondos de prioridad para panel
  readonly PRIORITY_BG: Record<TicketPriority, string> = {
    critical: '#FEE2E2',
    high:     '#FFEDD5',
    normal:   '#EFF6FF',
    low:      '#F0FDF4',
  };

  readonly availableStatuses: { value: TicketStatus; label: string }[] = [
    { value: 'open',       label: 'Abierto' },
    { value: 'in_process', label: 'En Proceso' },
    { value: 'resolved',   label: 'Resuelto' },
    { value: 'closed',     label: 'Cerrado' },
  ];

  private shouldScrollToBottom = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketsService: TicketsService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTicket(id);
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  loadTicket(id: number): void {
    this.loading = true;
    this.ticketsService.getTicket(id).subscribe({
      next: (ticket) => {
        this.ticket = ticket;
        this.loading = false;
        this.shouldScrollToBottom = true;
      },
      error: () => {
        this.error = 'No se pudo cargar el ticket.';
        this.loading = false;
      },
    });
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.ticket) return;

    this.sendingMessage = true;
    this.messageError = null;

    this.ticketsService.sendMessage(this.ticket.id, this.newMessage.trim()).subscribe({
      next: (message) => {
        if (!this.ticket!.messages) this.ticket!.messages = [];
        this.ticket!.messages.push(message);
        this.newMessage = '';
        this.sendingMessage = false;
        this.shouldScrollToBottom = true;
      },
      error: (err) => {
        this.messageError = err?.error?.message ?? 'No se pudo enviar el mensaje.';
        this.sendingMessage = false;
      },
    });
  }

  changeStatus(status: TicketStatus): void {
    if (!this.ticket || this.ticket.status === status) {
      this.showStatusMenu = false; return;
    }
    this.updatingStatus = true;
    this.statusError = null;
    this.showStatusMenu = false;

    this.ticketsService.updateTicket(this.ticket.id, { status } as UpdateTicketRequest).subscribe({
      next: (updated) => { this.ticket = updated; this.updatingStatus = false; },
      error: (err) => {
        this.statusError = err?.error?.message ?? 'No se pudo cambiar el estado.';
        this.updatingStatus = false;
      },
    });
  }

  closeTicket(): void { this.changeStatus('closed'); }

  goBack(): void { this.router.navigate(['/incidencias']); }

  toggleStatusMenu(): void { this.showStatusMenu = !this.showStatusMenu; }

  isOwnMessage(message: TicketMessage): boolean {
    const userId = Number(sessionStorage.getItem('user_id') || localStorage.getItem('user_id'));
    return userId > 0 && message.user_id === userId;
  }

  userInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  formatTime(date: string): string {
    return new Date(date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
  }

  get isClosed(): boolean {
    return this.ticket?.status === 'closed' || this.ticket?.status === 'resolved';
  }

  private scrollToBottom(): void {
    try { this.messagesEndRef?.nativeElement?.scrollIntoView({ behavior: 'smooth' }); } catch (_) {}
  }
}
