import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { Order, OrderStatus } from '../../../shared/models/order.model';

const STATUS_LABELS: Record<OrderStatus, string> = {
  pending:   'Pendiente',
  confirmed: 'Confirmado',
  shipped:   'Enviado',
  delivered: 'Entregado',
  cancelled: 'Cancelado',
};

const STATUS_COLORS: Record<OrderStatus, string> = {
  pending:   '#D97706',
  confirmed: '#2563EB',
  shipped:   '#7C3AED',
  delivered: '#16A34A',
  cancelled: '#DC2626',
};

const STATUS_BG: Record<OrderStatus, string> = {
  pending:   '#FEF3C7',
  confirmed: '#EFF6FF',
  shipped:   '#EDE9FE',
  delivered: '#DCFCE7',
  cancelled: '#FEE2E2',
};

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  error: string | null = null;

  readonly STATUS_LABELS = STATUS_LABELS;
  readonly STATUS_COLORS = STATUS_COLORS;
  readonly STATUS_BG    = STATUS_BG;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getOrders().subscribe({
      next: (res) => {
        this.orders  = res.data;
        this.loading = false;
      },
      error: () => {
        this.error   = 'No se pudieron cargar los pedidos.';
        this.loading = false;
      },
    });
  }

  openOrder(order: Order): void {
    this.router.navigate(['/pedidos', order.id]);
  }

  formatPrice(amount: number): string {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
  }

  trackById(_: number, o: Order): number { return o.id; }
}
