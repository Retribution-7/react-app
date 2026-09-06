import { cn } from '@/shared/lib';

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  extraClass?: string;
};

export const BurgerButton = ({ isOpen, onClick, extraClass = '' }: BurgerButtonProps) => {
  return (
    <button
      type="button"
      className={cn('flex flex-col gap-[5px] p-2 shrink-0 3xl:hidden', extraClass)}
      onClick={onClick}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
    >
      <span
        className={cn(
          'block h-0.5 w-6 bg-primary transition-all duration-300',
          isOpen && 'translate-y-[7px] rotate-45',
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-6 bg-primary transition-all duration-300',
          isOpen && 'opacity-0',
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-6 bg-primary transition-all duration-300',
          isOpen && '-translate-y-[7px] -rotate-45',
        )}
      />
    </button>
  );
};
