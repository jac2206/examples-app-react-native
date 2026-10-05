import { useEffect, useState } from "react";
import {
  createProduct,
  getProductById,
  updateProduct,
} from "../services/productsService";
import type { ProductInput } from "../types/products";

export function useProductEditor(productId?: number) {
  const isEditing = productId !== undefined;
  const [form, setForm] = useState<ProductInput>({
    title: "",
    description: "",
    price: 0,
  });
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (!isEditing) return;
    getProductById(productId)
      .then((product) =>
        setForm({
          title: product.title,
          description: product.description,
          price: product.price,
        }),
      )
      .finally(() => setLoading(false));
  }, [isEditing, productId]);
  const updateField = (field: keyof ProductInput, value: string) =>
    setForm((current) => ({
      ...current,
      [field]: field === "price" ? Number(value.replace(",", ".")) || 0 : value,
    }));
  const save = async () => {
    setSaving(true);
    try {
      return isEditing
        ? await updateProduct(productId, form)
        : await createProduct(form);
    } finally {
      setSaving(false);
    }
  };
  return { form, loading, saving, isEditing, updateField, save };
}
