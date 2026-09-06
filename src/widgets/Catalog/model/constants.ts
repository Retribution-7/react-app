export type CategoryKey = 'metal-tile' | 'corrugated-sheet' | 'seam-roofing';
export type TabKey = 'all' | CategoryKey;

export const CATALOG_TABS: { key: TabKey; label: string }[] = [
  { key: 'all', label: 'Все материалы' },
  { key: 'metal-tile', label: 'Металлочерепица' },
  { key: 'corrugated-sheet', label: 'Профнастил' },
  { key: 'seam-roofing', label: 'Фальцевая кровля' },
];

export const SORT_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'По умолчанию' },
  { value: 'price:asc', label: 'Цена: по возрастанию' },
  { value: 'price:desc', label: 'Цена: по убыванию' },
  { value: 'title:asc', label: 'Название: А → Я' },
  { value: 'title:desc', label: 'Название: Я → А' },
];
