export interface Product {
  id: number;
  name: string;
  sku: string;
  description: string | null;
  documentation?: string | null;
  price: number;
  stock: number;
  image: string | null;
  active: boolean;
}
