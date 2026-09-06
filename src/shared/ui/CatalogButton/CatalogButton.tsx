import { cn } from '@/shared/lib';

type CatalogButtonProps = {
  extraClass?: string;
};

export const CatalogButton = ({ extraClass = '' }: CatalogButtonProps) => {
  const handleClick = () => {
    document.getElementById('catalog')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={cn('inline-flex shrink-0 btn-primary px-6 py-5 text-[17px]', extraClass)}
      onClick={handleClick}
    >
      Посмотреть каталог товаров
    </button>
  );
};
