import { useState } from 'react';
import { BurgerButton } from '@/shared/ui/BurgerButton';
import { CatalogButton } from '@/shared/ui/CatalogButton/CatalogButton';
import { HeaderAddress } from '@/shared/ui/HeaderAddrress';
import { AdminIcon } from '@/shared/ui/icons/AdminIcon';
import { AuthIcon } from '@/shared/ui/icons/AuthIcon';
import { CartIcon } from '@/shared/ui/icons/CartIcon';
import { FavoritesIcon } from '@/shared/ui/icons/FavoritesIcon';
import { LangToggle } from '@/shared/ui/LangToggle';
import { Logo } from '@/shared/ui/Logo';
import { MessengerBlock } from '@/shared/ui/MessengerBlock';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';
import { PhoneLink } from '@/shared/ui/PhoneLink';
import { PriceList } from '@/shared/ui/PriceList';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50 w-full bg-surface shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-colors duration-300">
      <div className="container-main">
        <nav
          className="flex items-center justify-between gap-6 py-6 2xl:py-10"
          aria-label="Главная навигация"
        >
          <Logo />

          <div className="hidden shrink-0 items-end gap-6 3xl:flex">
            <HeaderAddress showDivider />
          </div>
          <PriceList />

          <div className="hidden 2xl:flex">
            <CatalogButton />
          </div>
          <MessengerBlock />

          <div className="hidden shrink-0 items-center gap-3 2xl:flex">
            <LangToggle />
            <ThemeToggle />
            <AdminIcon />
            <AuthIcon />
            <FavoritesIcon />
            <CartIcon />
          </div>

          <div className="ml-auto hidden shrink-0 items-center gap-2 min-[440px]:flex 2xl:hidden">
            <AdminIcon />
            <AuthIcon />
            <FavoritesIcon />
            <CartIcon />
          </div>

          <PhoneLink />

          <BurgerButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </nav>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </header>
  );
};
