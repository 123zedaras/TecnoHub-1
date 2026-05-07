import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketsService } from '../../../core/services/tickets.service';
import { TicketPriority } from '../../../shared/models/ticket.model';

interface PriorityOption {
  value: TicketPriority;
  label: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
}

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss'],
})
export class TicketCreateComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  error: string | null = null;

  // Solo 3 prioridades (como en el diseño: Crítica, Alta, Normal)
  priorities: PriorityOption[] = [
    { value: 'critical', label: 'Crítica', emoji: '🔴', color: '#DC2626', bg: '#FEF2F2', border: '#FCA5A5' },
    { value: 'high',     label: 'Alta',    emoji: '🟠', color: '#EA580C', bg: '#FFF7ED', border: '#FDBA74' },
    { value: 'normal',   label: 'Normal',  emoji: '🟡', color: '#CA8A04', bg: '#FEFCE8', border: '#FDE68A' },
  ];

  constructor(
    private fb: FormBuilder,
    private ticketsService: TicketsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title:        ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      description:  ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
      priority:     ['critical', Validators.required],
      machine_name: ['', Validators.required],
    });
  }

  setPriority(value: TicketPriority): void {
    this.form.patchValue({ priority: value });
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.loading = true;
    this.error = null;

    this.ticketsService.createTicket(this.form.value).subscribe({
      next: (ticket) => this.router.navigate(['/incidencias', ticket.id]),
      error: (err) => {
        this.error = err?.error?.message ?? 'No se pudo crear la incidencia.';
        this.loading = false;
      },
    });
  }

  cancel(): void { this.router.navigate(['/incidencias']); }

  fieldError(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
