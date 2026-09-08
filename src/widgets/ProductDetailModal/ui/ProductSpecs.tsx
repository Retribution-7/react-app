import React from 'react';
import type { Product } from '@/entities/Product';

interface ProductSpecsProps {
  specs: Product['specs'];
  categoryKey: string;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ specs, categoryKey }) => (
  <dl className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 font-sans text-[14px] leading-[1.4] text-text-secondary border-t border-b border-border-light dark:border-border-dark py-4">
    {specs.slice(0, 2).map((spec) => (
      <React.Fragment key={spec.label}>
        <dt className="text-text-third">{spec.label}</dt>
        <dd className="text-right">{spec.value}</dd>
      </React.Fragment>
    ))}
    <dt className="text-text-third">{'Категория продукта'}</dt>
    <dd className="text-right">{categoryKey}</dd>
  </dl>
);
