export interface CartItem {
  id: number;
  product_id: number;
  product_name: string;
  product_sku: string | null;
  product_image: string | null;
  unit_price: number;
  quantity: number;
  subtotal: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  item_count: number;
}

export interface AddToCartRequest {
  product_id: number;
  quantity: number;
}

/**
 * Línea de la cesta de invitado (solo navegador, ver GuestCartStorageService).
 * Incluye product_id + quantity (lo que el backend espera al fusionar tras el login)
 * y de forma opcional nombre y precio para pintar el desplegable del header y /cesta
 * sin llamar al API de carrito (el invitado no tiene sesión).
 */
export interface GuestCartLine {
  product_id: number;
  quantity: number;
  product_name?: string;
  unit_price?: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}
