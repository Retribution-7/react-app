import type React from 'react';
import { COLOR_OPTIONS, SURFACE_OPTIONS, THICKNESS_OPTIONS } from '@/entities/Product';
import { ProductDropdown } from '@/entities/Product/ui/ProductDropdown';
import type { SelectedOptions } from '../lib/hooks/useProductDetail';

interface ProductParametersProps {
  options: SelectedOptions;
  onChange: (field: keyof SelectedOptions, value: string) => void;
}

export const ProductParameters: React.FC<ProductParametersProps> = ({ options, onChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-5">
    <ProductDropdown
      label={'Цвет: '}
      value={options.color}
      options={COLOR_OPTIONS}
      onChange={(val: string) => onChange('color', val)}
    />
    <ProductDropdown
      label={'Толщина: '}
      value={options.thickness}
      options={THICKNESS_OPTIONS}
      onChange={(val: string) => onChange('thickness', val)}
    />
    <ProductDropdown
      label={'Поверхность: '}
      value={options.surface}
      options={SURFACE_OPTIONS}
      onChange={(val: string) => onChange('surface', val)}
    />
  </div>
);
