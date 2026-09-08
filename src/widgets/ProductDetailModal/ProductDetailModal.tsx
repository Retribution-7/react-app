import type React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Product } from '@/entities/Product';
import { catKey } from '../../shared/constants/categories';
import { type SelectedOptions, useProductDetail } from './lib/hooks/useProductDetail';
import { ProductActions } from './ui/ProductActions';
import {
  ProductErrorState,
  ProductLoadingState,
  ProductNotFoundState,
} from './ui/ProductModalStates';
import { ProductParameters } from './ui/ProductParametrs';
import { ProductSpecs } from './ui/ProductSpecs';

interface ProductDetailModalProps {
  isOpen: boolean;
  productId: number | null;
  onClose: () => void;
  onCalculate?: (product: Product, options: SelectedOptions) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  productId,
  onClose,
  onCalculate,
}) => {
  const { product, isLoading, error, options, updateOption } = useProductDetail(isOpen, productId);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const key = product ? catKey(product.category) : '';

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* 1. Кликабельный фон (Backdrop) */}
      <button
        type="button"
        className="fixed inset-0 size-full bg-black/60 backdrop-blur-sm cursor-default -z-10"
        tabIndex={-1}
        aria-label="Закрыть модальное окно"
        onClick={onClose}
      />

      {/* 2. Контейнер модалки */}
      <div className="relative w-full max-w-5xl my-auto bg-surface rounded-[14px] card-shadow p-5 sm:p-6 lg:p-10 transition-colors duration-300 max-h-[90vh] overflow-y-auto z-10">
        {/* Кнопка Закрыть */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 size-10 rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-surface-hover transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          ✕
        </button>

        {/* Стейты загрузки / ошибок */}
        {isLoading && <ProductLoadingState />}
        {!isLoading && error && <ProductErrorState />}
        {!isLoading && !error && !product && <ProductNotFoundState onClose={onClose} />}

        {/* Основной контент */}
        {!isLoading && !error && product && (
          <article>
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-10">
              {/* Превью */}
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-square w-full overflow-hidden rounded-[10px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Главная информация и выбор параметров */}
              <div className="flex flex-col gap-5 lg:gap-6">
                <span className="font-sans text-[13px] lg:text-[14px] uppercase tracking-[0.08em] text-button-first">
                  {key}
                </span>

                <h1
                  id="modal-product-title"
                  className="font-sans font-normal text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px] xl:text-[52px] gradient-text"
                >
                  {product.title}
                </h1>

                {/* Цена */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-sans">
                  <span className="text-[14px] text-text-third">{'От'}</span>
                  <span className="text-[32px] lg:text-[40px] leading-none text-primary">
                    {product.price}
                  </span>
                  <span className="text-[18px] lg:text-[20px] text-text-secondary tracking-[-0.03em]">
                    ₽ / м²
                  </span>
                  <span className="ml-auto text-[13px] text-text-third">
                    {'Бренд продукта: '}
                    {product.brand}
                  </span>
                </div>

                <ProductSpecs specs={product.specs} categoryKey={key} />
                <ProductParameters options={options} onChange={updateOption} />
                <ProductActions
                  onCalculate={() => onCalculate?.(product, options)}
                  onClose={onClose}
                />
              </div>
            </div>
          </article>
        )}
      </div>
    </div>,
    document.body,
  );
};
