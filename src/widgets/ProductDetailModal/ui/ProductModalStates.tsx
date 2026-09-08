import type React from 'react';
import { Skeleton } from '../../../shared/ui/Skeleton';

export const ProductLoadingState: React.FC = () => (
  <div className="py-20">
    <Skeleton lines={5} />
  </div>
);

export const ProductErrorState: React.FC = () => (
  <div className="p-10 text-center">
    <h3 className="font-sans text-[20px] gradient-text">{'product-error'}</h3>
    <p className="mt-2 font-sans text-[15px] text-text-secondary">{'product-error-desc'}</p>
  </div>
);

export const ProductNotFoundState: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="p-10 text-center">
    <h3 className="font-sans text-[20px] gradient-text">{'product-not-found'}</h3>
    <button
      type="button"
      onClick={onClose}
      className="mt-4 inline-flex items-center justify-center rounded-full
                 bg-gradient-to-r from-button-first to-button-second
                 px-6 py-[15px] font-sans text-[15px] text-primary
                 shadow-[inset_0_0_12px_0_rgba(255,255,255,0.45)] cursor-pointer"
    >
      {'product-not-found-link'}
    </button>
  </div>
);
