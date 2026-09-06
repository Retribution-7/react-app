import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/lib';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  extraClass?: string;
}

export const Button = ({ children, variant = 'primary', extraClass, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'inline-flex items-center justify-center text-center transition-all duration-300',

        variant === 'primary' && 'btn-primary',
        variant === 'secondary' && 'bg-gray-200 text-black hover:bg-gray-300',
        variant === 'outline' &&
          'border-2 border-primary text-primary hover:bg-primary hover:text-white',

        extraClass,
      )}
    >
      {children}
    </button>
  );
};
