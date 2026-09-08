import type React from 'react';

interface ProductActionsProps {
  onCalculate?: () => void;
  onClose: () => void;
}

export const ProductActions: React.FC<ProductActionsProps> = ({ onCalculate, onClose }) => {
  const _handleCallOrder = () => {
    onClose();

    requestAnimationFrame(() => {
      document.getElementById('consultation')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };
  return (
    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-2">
      <button
        type="button"
        onClick={onCalculate}
        className="flex-1 inline-flex items-center justify-center rounded-full
                 bg-gradient-to-r from-button-first to-button-second
                 px-6 py-[15px] font-sans text-[15px] lg:text-[17px] leading-[1.4] text-primary
                 transition-all duration-300 hover:scale-[1.02] cursor-pointer
                 shadow-[inset_0_0_12px_0_rgba(255,255,255,0.45)]"
      >
        {'Подсчитать стоимость'}
      </button>
      <button
        type="button"
        onClick={_handleCallOrder}
        className="flex-1 inline-flex items-center justify-center rounded-full
                 bg-surface-hover border border-button-first
                 px-6 py-[15px] font-sans text-[15px] lg:text-[17px] leading-[1.4] text-text-secondary
                 transition-colors duration-200 hover:bg-surface cursor-pointer no-underline text-center"
      >
        {'Заказать звонок'}
      </button>
    </div>
  );
};
