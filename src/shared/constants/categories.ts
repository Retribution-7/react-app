import type { Product } from '@/entities/Product';

export const CATEGORY_MAP: Record<Product['category'], string> = {
  'metal-tile': 'Металочерепица',
  'corrugated-sheet': 'Профнастил',
  'seam-roofing': 'Фальцевая кровля',
};

export const catKey = (category: Product['category']): string => CATEGORY_MAP[category] ?? category;

export const catLabelKey = (category: string): string =>
  CATEGORY_MAP[category as Product['category']] ?? category;
