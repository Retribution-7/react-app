import { cn } from '@/shared/lib';
import { CatalogButton } from '../CatalogButton/CatalogButton';
import { HeaderAddress } from '../HeaderAddrress';
import { AdminIcon } from '../icons/AdminIcon';
import { AuthIcon } from '../icons/AuthIcon';
import { CartIcon } from '../icons/CartIcon';
import { FavoritesIcon } from '../icons/FavoritesIcon';
import { LangToggle } from '../LangToggle';
import { MessengerLinks } from '../MessengerLinks';
import { PriceList } from '../PriceList';
import { ThemeToggle } from '../ThemeToggle';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  extraClass?: string;
};

export const MobileMenu = ({ isOpen, onClose, extraClass = '' }: MobileMenuProps) => {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <div
      className={cn(
        'border-t border-gray-100 py-6 flex-col gap-5 overflow-y-auto max-h-[calc(100vh-80px)] 3xl:hidden',
        isOpen ? 'flex' : 'hidden',
        extraClass,
      )}
    >
      <div className="flex flex-col gap-3 min-[440px]:hidden">
        <AdminIcon extraClass="w-full flex-row justify-start" />{' '}
        <AuthIcon extraClass="w-full flex-row justify-start" />
        <FavoritesIcon extraClass="w-full flex-row justify-start" />
        <CartIcon extraClass="w-full flex-row justify-start" />
      </div>

      <HeaderAddress extraClass="text-[17px] leading-[1.6]" />
      <PriceList extraClass="flex items-center gap-4 text-[17px]" />

      <CatalogButton extraClass="w-full text-center py-4" />

      <div className="flex gap-3">
        <MessengerLinks compact={true} />
      </div>

      <button
        type="button"
        className="text-left text-[17px] font-sans font-normal text-primary underline underline-offset-2"
        onClick={() => handleScrollTo('consultation')}
        data-i18n="header-callback"
      >
        Перезвоним Вам
      </button>

      <div className="flex flex-wrap items-center gap-3">
        <LangToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};
