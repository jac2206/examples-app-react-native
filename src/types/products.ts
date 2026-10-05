export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface ProductsResponse { products: Product[]; }

export interface ProductInput {
  title: string;
  description: string;
  price: number;
}
