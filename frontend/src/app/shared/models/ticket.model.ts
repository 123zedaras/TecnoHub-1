export type TicketPriority = 'critical' | 'high' | 'normal' | 'low';
export type TicketStatus   = 'open' | 'in_process' | 'resolved' | 'closed';

export interface TicketUser {
  id: number;
  name: string;
  email?: string;
}

export interface TicketMachine {
  id: number;
  name: string;
  model?: string;
}

export interface TicketMessage {
  id: number;
  ticket_id: number;
  user_id: number;
  content: string;
  created_at: string;
  user: TicketUser;
}

export interface Ticket {
  id: number;
  ticket_number: string;
  user_id: number;
  machine_name: string | null;
  assigned_to: number | null;
  title: string;
  description: string;
  priority: TicketPriority;
  priority_label: string;
  priority_color: string;
  status: TicketStatus;
  status_label: string;
  closed_at: string | null;
  created_at: string;
  updated_at: string;
  // Relaciones cargadas
  user?: TicketUser;
  assigned_technician?: TicketUser | null;
  messages?: TicketMessage[];
}

export interface CreateTicketRequest {
  title: string;
  description: string;
  priority: TicketPriority;
  machine_name?: string | null;
  assigned_to?: number | null;
}

export interface UpdateTicketRequest {
  status?: TicketStatus;
  assigned_to?: number | null;
  priority?: TicketPriority;
}

// Helpers de UI
export const PRIORITY_LABELS: Record<TicketPriority, string> = {
  critical: 'Crítica',
  high:     'Alta',
  normal:   'Normal',
  low:      'Baja',
};

export const STATUS_LABELS: Record<TicketStatus, string> = {
  open:       'Abierto',
  in_process: 'En Proceso',
  resolved:   'Resuelto',
  closed:     'Cerrado',
};

export const PRIORITY_COLORS: Record<TicketPriority, string> = {
  critical: '#DC2626',
  high:     '#EA580C',
  normal:   '#CA8A04',
  low:      '#16A34A',
};

export const STATUS_COLORS: Record<TicketStatus, string> = {
  open:       '#EF4444',
  in_process: '#F59E0B',
  resolved:   '#10B981',
  closed:     '#6B7280',
};
