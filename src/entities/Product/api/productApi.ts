import type { Product, ProductFilters } from '../model/types';

export const API_BASE = '/api';

/**
 * Загрузка списка товаров с фильтрацией, сортировкой и поиском.
 * @param filters - параметры фильтрации
 * @param signal - AbortSignal для отмены устаревших запросов в React
 */
export const fetchProducts = async (
  filters: ProductFilters = {},
  signal?: AbortSignal,
): Promise<Product[]> => {
  const params = new URLSearchParams();

  if (filters.category) {
    params.set('category', filters.category);
  }
  if (filters._sort) {
    params.set('_sort', filters._sort);
  }
  if (filters._order) {
    params.set('_order', filters._order);
  }
  if (filters.title_like) {
    params.set('title_like', filters.title_like);
  }

  const queryString = params.toString();
  const url = `${API_BASE}/products${queryString ? `?${queryString}` : ''}`;

  const res = await fetch(url, signal ? { signal } : undefined);

  if (!res.ok) {
    throw new Error('Ошибка загрузки товаров');
  }

  return res.json() as Promise<Product[]>;
};

export const fetchProductById = async (
  id: number,
  signal?: AbortSignal,
): Promise<Product | null> => {
  const res = await fetch(`${API_BASE}/products/${id}`, signal ? { signal } : undefined);
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error('Ошибка загрузки товара');
  }
  return res.json() as Promise<Product>;
};
