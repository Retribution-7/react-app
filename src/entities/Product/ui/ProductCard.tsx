import { Fragment, useState } from 'react';
import { cn } from '@/shared/lib';
import { COLOR_OPTIONS, SURFACE_OPTIONS, THICKNESS_OPTIONS } from '../model/constants';
import type { Product } from '../model/types';
import { ProductDropdown } from './ProductDropdown';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [color, setColor] = useState(product.color);
  const [thickness, setThickness] = useState(product.thickness);
  const [surface, setSurface] = useState(product.surface);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <article className="bg-surface rounded-[14px] card-shadow p-6 flex flex-col gap-[23px] transition-colors duration-300">
      <div className="relative h-[260px] w-full overflow-hidden rounded-[8px]">
        <img
          src={product.image}
          alt={product.title}
          className="size-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <button
          type="button"
          onClick={toggleFavorite}
          className={cn(
            'absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-surface/95 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-200 hover:scale-110 cursor-pointer',
            isFavorite ? 'text-button-first' : 'text-primary',
          )}
        >
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-label="card"
          >
            <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 4.5C19 16.5 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <h3 className="font-sans font-normal text-[20px] leading-[1.2] tracking-[0.04em] text-primary">
        {product.title}
      </h3>

      <dl className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-[5px] font-sans text-[13px] leading-[1.3] text-primary">
        <dt>Бренд</dt>
        <dd className="text-right">{product.brand}</dd>
        {product.specs.slice(0, 2).map((spec) => (
          <Fragment key={spec.label}>
            <dt>{spec.label}</dt>
            <dd className="text-right">{spec.value}</dd>
          </Fragment>
        ))}
      </dl>

      <div className="flex items-end gap-[7px] font-sans">
        <span className="text-[13px] leading-[1.3] text-text-third">от</span>
        <span className="text-[20px] leading-none text-primary">{product.price}</span>
        <span className="text-[20px] leading-none text-primary tracking-[-0.05em]">₽ / м²</span>
      </div>

      <div className="flex flex-col gap-[15px]">
        <ProductDropdown label="Цвет:" value={color} options={COLOR_OPTIONS} onChange={setColor} />
        <ProductDropdown
          label="Толщина:"
          value={thickness}
          options={THICKNESS_OPTIONS}
          onChange={setThickness}
        />
        <ProductDropdown
          label="Покрытие:"
          value={surface}
          options={SURFACE_OPTIONS}
          onChange={setSurface}
        />
      </div>

      <div className="flex flex-col gap-[15px] mt-auto">
        <button
          type="button"
          className="self-start inline-flex items-center justify-center rounded-full bg-gradient-to-r from-button-first to-button-second px-6 py-[15px] font-sans text-[17px] leading-[1.8] text-primary transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-[inset_0_0_12px_0_rgba(255,255,255,0.45)]"
        >
          <span>Рассчитать стоимость</span>
        </button>
        <a
          href={`#product/${product.id}`}
          className="self-start inline-flex items-center justify-center rounded-full bg-bg-first border border-button-first px-6 py-[15px] font-sans text-[17px] leading-[1.8] text-primary transition-colors duration-200 hover:bg-surface cursor-pointer no-underline"
        >
          <span>Подробнее</span>
        </a>
      </div>
    </article>
  );
};
