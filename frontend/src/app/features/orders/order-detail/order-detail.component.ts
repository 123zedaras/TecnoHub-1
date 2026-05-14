import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  order: Order | null = null;
  loading = true;
  error: string | null = null;
  isNewOrder = false;

  readonly STATUS_LABELS = STATUS_LABELS;
  readonly STATUS_COLORS = STATUS_COLORS;
  readonly STATUS_BG    = STATUS_BG;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.isNewOrder = this.route.snapshot.queryParamMap.get('success') === 'true';
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.cartService.getOrder(id).subscribe({
      next: (res) => {
        this.order   = res.data;
        this.loading = false;
      },
      error: () => {
        this.error   = 'No se pudo cargar el pedido.';
        this.loading = false;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/pedidos']);
  }

  formatPrice(amount: number): string {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }
}
