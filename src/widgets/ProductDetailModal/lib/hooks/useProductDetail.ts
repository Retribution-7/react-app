import { useCallback, useEffect, useState } from 'react';
import type { Product } from '@/entities/Product';
import { fetchProductById, fetchProducts } from '@/entities/Product/api/productApi';
import { RELATED_PRODUCTS_LIMIT } from '@/shared/constants/products';

export interface SelectedOptions {
  color: string;
  thickness: string;
  surface: string;
}

export const useProductDetail = (isOpen: boolean, productId: number | null) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [options, setOptions] = useState<SelectedOptions>({
    color: '',
    thickness: '',
    surface: '',
  });

  const loadData = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchProductById(id);
      if (!data) {
        setProduct(null);
        return;
      }

      setProduct(data);
      setOptions({
        color: data.color,
        thickness: data.thickness,
        surface: data.surface,
      });

      const all = await fetchProducts({ category: data.category });
      setRelated(all.filter((p) => p.id !== id).slice(0, RELATED_PRODUCTS_LIMIT));
    } catch (_err) {
      setError('product-error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen && productId !== null) {
      loadData(productId);
    } else {
      setProduct(null);
      setRelated([]);
      setError(null);
    }
  }, [isOpen, productId, loadData]);

  const updateOption = (field: keyof SelectedOptions, value: string) => {
    setOptions((prev) => ({ ...prev, [field]: value }));
  };

  return { product, related, isLoading, error, options, updateOption };
};
