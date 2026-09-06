import { API_BASE } from '@/entities/Product/api/productApi';
import type { Review } from '../model/types';

export const fetchReviews = async (): Promise<Review[]> => {
  const res = await fetch(`${API_BASE}/reviews`);
  if (!res.ok) {
    throw new Error('Ошибка загрузки отзывов');
  }
  return res.json() as Promise<Review[]>;
};
