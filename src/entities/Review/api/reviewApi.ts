import db from '@/../DB/db.json';
import type { Review } from '../model/types';

const reviewsList: Review[] = (db as { reviews?: Review[] }).reviews ?? [];

export const fetchReviews = async (signal?: AbortSignal): Promise<Review[]> => {
  if (signal?.aborted) {
    throw new DOMException('Aborted', 'AbortError');
  }

  return [...reviewsList];
};
