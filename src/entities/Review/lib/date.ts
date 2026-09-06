import type { Review } from '../model/types';

const parseDate = (s: string): number => {
  const [d = 0, m = 1, y = 0] = s.split('.').map(Number);

  return new Date(y, m - 1, d).getTime();
};

export const reviewDateMs = (review: Review): number => parseDate(review.date);
