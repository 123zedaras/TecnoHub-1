import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CartItem } from '../../../shared/models/cart.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  //guarda el carrito actual
  cart: Cart | null = null;
  //indica si se está cargando el carrito
  loading = true;
  //guarda el error si ocurre
  error: string | null = null;
  //guarda el id del item que se está actualizando
  updatingItemId: number | null = null;

  constructor(
    //servicio para manejar el carrito
    private cartService: CartService,
    //servicio para navegar
    private router: Router
  ) {}

  // Carga el carrito al iniciar el componente
  ngOnInit(): void {
    this.loadCart();
  }

  // Métodos para manejar el carrito: cargar, actualizar cantidad, eliminar, vaciar y proceder al checkout
  loadCart(): void {
    //indica que se está cargando el carrito
    this.loading = true;
    //obtiene el carrito
    this.cartService.getCart().subscribe({
      //si se obtiene el carrito
      next: res => {
        //guarda el carrito
        this.cart = res.data;
        this.loading = false;
      },
      //si ocurre un error
      error: () => {
        //guarda el error
        this.error = 'No se ha podido cargar el carrito. Inténtalo de nuevo.';
        this.loading = false;
      },
    });
  }

  // Actualiza la cantidad de un producto en el carrito, con validación de rango
  updateQuantity(item: CartItem, newQty: number): void {
    //si la cantidad es menor que 1 o mayor que 99, no se actualiza
    if (newQty < 1 || newQty > 99) return;
    //guarda el id del item que se está actualizando
    this.updatingItemId = item.id;
    //actualiza la cantidad del item
    this.cartService.updateItem(item.id, { quantity: newQty }).subscribe({
      //si se actualiza la cantidad
      next: () => this.loadCart(),
      //si ocurre un error
      error: (err) => {
        //guarda el error
        this.error = err.error?.message ?? 'Error al actualizar la cantidad.';
        this.updatingItemId = null;
      },
    });
  }

  // Elimina un producto del carrito
  removeItem(item: CartItem): void {
    //guarda el id del item que se está eliminando  
    this.updatingItemId = item.id;
    //elimina el item
    this.cartService.removeItem(item.id).subscribe({
      //si se elimina el item
      next: () => this.loadCart(),
      error: () => {
        //guarda el error
        this.error = 'Error al eliminar el producto.';
        this.updatingItemId = null;
      },
    });
  }

  // Vacía todo el carrito con confirmación del usuario
  clearCart(): void {
    //si no se confirma la eliminación, no se vacía el carrito
    if (!confirm('¿Quieres vaciar todo el carrito?')) return;
    //vacía el carrito
    this.cartService.clearCart().subscribe({
      next: () => this.loadCart(),
    });
  }

  // Navega a la página de checkout
  proceedToCheckout(): void {
    this.router.navigate(['/recambios/checkout']);
  }

  // Formatea un número como precio en euros
  formatPrice(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  }

  // Función de trackBy para optimizar la renderización de la lista de productos en el carrito
  //devuelve el id del item para optimizar la renderización
  trackByItemId(_: number, item: CartItem): number {
    
    return item.id;
  }
}
