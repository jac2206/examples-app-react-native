import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import type { Product } from "../types/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError("");
      try {
        setProducts(await getProducts());
      } catch {
        setError("No pudimos cargar los productos. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [refresh]);
  const reload = () => setRefresh((current) => current + 1);
  return { products, loading, error, reload };
}
