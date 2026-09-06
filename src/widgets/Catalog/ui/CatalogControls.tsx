import { SORT_OPTIONS } from '../model/constants';

interface CatalogControlsProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  activeSort: string;
  onSortChange: (val: string) => void;
}

export const CatalogControls = ({
  searchQuery,
  onSearchChange,
  activeSort,
  onSortChange,
}: CatalogControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-12">
      <div className="relative flex-1">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-text-third pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          id="catalog-search"
          type="search"
          placeholder="Поиск по названию..."
          autoComplete="off"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-[46px] pl-10 pr-4 rounded-full border border-button-first bg-surface font-sans text-[15px] text-primary placeholder-text-third focus:outline-none focus:ring-2 focus:ring-button-first/40 transition-shadow"
        />
      </div>
      <select
        id="catalog-sort"
        value={activeSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="h-[46px] px-4 pr-9 rounded-full border border-button-first bg-surface font-sans text-[15px] text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-button-first/40 appearance-none transition-shadow"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M0 0l6 8 6-8z' fill='%2344444E'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 14px center',
        }}
        aria-label="Сортировка"
      >
        {SORT_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};
