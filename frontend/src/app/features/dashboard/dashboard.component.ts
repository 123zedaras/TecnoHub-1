import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../core/services/tickets.service';
import { CartService } from '../../core/services/cart.service';
import { ScadaService } from '../../core/services/scada.service';

interface KpiCard {
  label: string;
  value: string | number;
  sub: string;
  icon: string;
  color: string;
  route: string;
}

interface QuickAction {
  label: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  today = new Date();
  currentHour = this.today.getHours();

  get todayLabel(): string {
    return this.today.toLocaleDateString('es-ES', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
  }

  get greeting(): string {
    if (this.currentHour < 12) return 'Buenos días';
    if (this.currentHour < 21) return 'Buenas tardes';
    return 'Buenas noches';
  }

  kpis: KpiCard[] = [
    {
      label: 'Tickets Abiertos',
      value: '—',
      sub: 'Incidencias activas',
      icon: 'ticket',
      color: '#F59E0B',
      route: '/incidencias',
    },
    {
      label: 'Pedidos Pendientes',
      value: '—',
      sub: 'Recambios en proceso',
      icon: 'cart',
      color: '#4F46E5',
      route: '/recambios',
    },
    {
      label: 'Dispositivos Activos',
      value: '—',
      sub: 'En producción',
      icon: 'machine',
      color: '#10B981',
      route: '/scada',
    },
    {
      label: 'Estado SCADA',
      value: '—',
      sub: 'Comprobando conexión…',
      icon: 'scada',
      color: '#6366F1',
      route: '/scada',
    },
  ];

  quickActions: QuickAction[] = [
    {
      label: 'Nueva Incidencia',
      description: 'Reportar un problema o avería en planta',
      route: '/incidencias/nueva',
      icon: 'plus-ticket',
    },
    {
      label: 'Ver Carrito',
      description: 'Gestionar pedido de recambios',
      route: '/recambios',
      icon: 'cart',
    },
    {
      label: 'Control SCADA',
      description: 'Acceder al panel HMI de automatización',
      route: '/scada/dashboard',
      icon: 'scada',
    },
    {
      label: 'Histórico SCADA',
      description: 'Consultar registros y auditoría de comandos',
      route: '/scada/historicos',
      icon: 'log',
    },
  ];

  constructor(
    private router: Router,
    private ticketsService: TicketsService,
    private cartService: CartService,
    private scadaService: ScadaService,
  ) {}

  ngOnInit(): void {
    this.loadTicketsAbiertos();
    this.loadPedidosPendientes();
    this.loadScadaEstado();
  }

  private loadTicketsAbiertos(): void {
    this.ticketsService.getTickets().subscribe({
      next: (res) => {
        const counts = res.status_counts ?? {};
        const activas = (counts['open'] ?? 0) + (counts['in_process'] ?? 0);
        this.kpis[0].value = activas;
        this.kpis[0].sub = activas === 1 ? '1 incidencia activa' : `${activas} incidencias activas`;
      },
      error: () => {
        this.kpis[0].value = '—';
      },
    });
  }

  private loadPedidosPendientes(): void {
    this.cartService.getOrders().subscribe({
      next: (res) => {
        const pendientes = res.data.filter(
          (o: any) => o.status === 'confirmed' || o.status === 'processing'
        );
        if (pendientes.length === 0) {
          this.kpis[1].value = '0';
          this.kpis[1].sub = 'No hay pedidos pendientes';
        } else {
          this.kpis[1].value = pendientes.length;
          this.kpis[1].sub = pendientes.length === 1 ? '1 pedido en proceso' : `${pendientes.length} pedidos en proceso`;
        }
      },
      error: () => {
        this.kpis[1].value = '—';
        this.kpis[1].sub = 'Error de carga';
      },
    });
  }

  private loadScadaEstado(): void {
    this.scadaService.getDashboard().subscribe({
      next: (state) => {
        // Cuenta cuántos dispositivos están activos (bombas, válvula, lámpara)
        const isActive = (v: any) => v === true || v === 1 || v === 'true' || v === '1';
        const activos = [state.O_B1, state.O_B2, state.O_VAL, state.O_LAMP]
          .filter(isActive).length;

        this.kpis[2].value = activos;
        this.kpis[2].sub = activos === 1 ? '1 dispositivo activo' : `${activos} dispositivos activos`;

        this.kpis[3].value = 'Online';
        this.kpis[3].sub = 'Node-RED conectado';
      },
      error: () => {
        this.kpis[2].value = '—';
        this.kpis[2].sub = 'Sin conexión SCADA';
        this.kpis[3].value = 'Offline';
        this.kpis[3].sub = 'Node-RED no disponible';
      },
    });
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
