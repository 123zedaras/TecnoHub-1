export interface Product {
  id: number;
  name: string;
  sku: string;
  description: string | null;
  documentacion?: string | null;
  price: number;
  stock: number;
  image: string | null;
  active: boolean;
}
