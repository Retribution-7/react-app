import { useEffect, useState } from 'react';
import { type Product, ProductCard, type ProductFilters } from '@/entities/Product';
import { fetchProducts } from '@/entities/Product/api/productApi';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SkeletonGrid } from '@/shared/ui/Skeleton/Skeleton';
import { ProductDetailModal } from '../ProductDetailModal/ProductDetailModal';
import type { TabKey } from './model/constants';
import { CatalogControls } from './ui/CatalogControls';
import { CatalogTabs } from './ui/CatalogTabs';

const SEARCH_DEBOUNCE_MS = 500;

export const Catalog = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [activeSort, setActiveSort] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  // Храним ID открытого товара прямо в state (null — модалка закрыта)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const debouncedSearch = useDebounce(searchQuery, SEARCH_DEBOUNCE_MS);

  const handleOpenDetails = (id: number) => {
    setSelectedProductId(id);
  };

  const handleCloseModal = () => {
    setSelectedProductId(null);
  };

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      setIsLoading(true);
      setIsError(false);

      const filters: ProductFilters = {};

      if (activeTab !== 'all') {
        filters.category = activeTab;
      }

      if (activeSort) {
        const [field, order] = activeSort.split(':');
        if (field) {
          filters._sort = field;
        }
        if (order === 'asc' || order === 'desc') {
          filters._order = order;
        }
      }

      if (debouncedSearch.trim()) {
        filters.title_like = debouncedSearch.trim();
      }

      try {
        const items = await fetchProducts(filters, controller.signal);
        setProducts(items);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setIsError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void loadData();

    return () => {
      controller.abort();
    };
  }, [activeTab, activeSort, debouncedSearch]);

  return (
    <section
      className="bg-bg-first py-14 lg:py-20 transition-colors duration-300"
      id="catalog"
      aria-labelledby="catalog-heading"
    >
      <div className="container-main">
        <h2
          id="catalog-heading"
          className="font-sans font-normal text-[32px] leading-[1.2] sm:text-[40px] xl:text-[56px] xl:leading-[68px] gradient-text"
        >
          КАТАЛОГ ТОВАРОВ
        </h2>

        <CatalogControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeSort={activeSort}
          onSortChange={setActiveSort}
        />

        <CatalogTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div
          id="catalog-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10 mt-14 lg:mt-20 xl:mt-24"
          role="tabpanel"
        >
          {isLoading && (
            <div className="col-span-full">
              <SkeletonGrid count={4} />
            </div>
          )}

          {!isLoading && isError && (
            <div className="col-span-full flex flex-col items-center gap-4 py-20 text-center">
              <span className="font-sans text-[15px] text-text-third">
                Произошла ошибка при загрузке каталога
              </span>
            </div>
          )}

          {!isLoading && !isError && products.length === 0 && (
            <div className="col-span-full flex flex-col items-center gap-4 py-20 text-center">
              <svg
                className="size-12 text-secondary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <span className="font-sans text-[15px] text-text-third">
                По вашему запросу ничего не найдено
              </span>
            </div>
          )}

          {!isLoading &&
            !isError &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} onOpenDetails={handleOpenDetails} />
            ))}
        </div>
      </div>

      <ProductDetailModal
        isOpen={selectedProductId !== null}
        productId={selectedProductId}
        onClose={handleCloseModal}
      />
    </section>
  );
};
