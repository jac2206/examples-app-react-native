import axios from "axios";
import type { Product, ProductInput, ProductsResponse } from "../types/products";

export async function getProducts() {
  const response = await axios.get<ProductsResponse>(
    "https://dummyjson.com/products?limit=20",
  );
  return response.data.products;
}

export async function getProductById(id: number) {
  const response = await axios.get<Product>(`https://dummyjson.com/products/${id}`);
  return response.data;
}

export async function createProduct(data: ProductInput) {
  const response = await axios.post<Product>(
    "https://dummyjson.com/products/add",
    data,
  );
  return response.data;
}

export async function updateProduct(id: number, data: ProductInput) {
  const response = await axios.put<Product>(
    `https://dummyjson.com/products/${id}`,
    data,
  );
  return response.data;
}
