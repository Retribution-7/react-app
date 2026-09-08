import db from '@/../DB/db.json';
import type { Product, ProductFilters } from '../model/types';

const productsList: Product[] = Array.isArray(db)
  ? (db as Product[])
  : ((db as { products: Product[] }).products ?? []);

export const fetchProducts = async (
  filters: ProductFilters = {},
  signal?: AbortSignal,
): Promise<Product[]> => {
  if (signal?.aborted) {
    throw new DOMException('Aborted', 'AbortError');
  }

  let result = [...productsList];

  if (filters.category) {
    result = result.filter((product) => product.category === filters.category);
  }

  if (filters.title_like) {
    const search = filters.title_like.toLowerCase();
    result = result.filter((product) => product.title?.toLowerCase().includes(search));
  }

  if (filters._sort) {
    const sortField = filters._sort as keyof Product;
    const isDesc = filters._order?.toLowerCase() === 'desc';

    result.sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];

      if (valA === valB) {
        return 0;
      }
      if (valA == null) {
        return 1;
      }
      if (valB == null) {
        return -1;
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        return isDesc ? valB.localeCompare(valA) : valA.localeCompare(valB);
      }

      return isDesc ? (valB as number) - (valA as number) : (valA as number) - (valB as number);
    });
  }

  return result;
};

export const fetchProductById = async (
  id: number,
  signal?: AbortSignal,
): Promise<Product | null> => {
  if (signal?.aborted) {
    throw new DOMException('Aborted', 'AbortError');
  }

  const product = productsList.find((item) => Number(item.id) === Number(id));

  return product || null;
};
