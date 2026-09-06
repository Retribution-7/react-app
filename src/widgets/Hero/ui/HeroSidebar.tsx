import { SidebarAction } from './SidebarAction';

export const HeroSidebar = () => {
  return (
    <div className="absolute right-0 top-[267px] bottom-[147px] z-10 hidden lg:flex flex-col justify-center gap-[10px] w-[110px]">
      <SidebarAction
        iconSrc="/icons/calculatings.svg"
        iconClass="w-[37px] h-[32px]"
        label={<span data-i18n="hero-calc">Произвести расчет</span>}
        ariaLabel="Произвести расчёт"
      />

      <SidebarAction
        href="#"
        iconSrc="/icons/price-list.svg"
        iconClass="w-[47px] h-[39px]"
        label={<span data-i18n="hero-price-list">Скачать прайс-лист</span>}
        ariaLabel="Скачать прайс-лист"
      />

      <SidebarAction
        onClick={() =>
          document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
        }
        iconSrc="/icons/whats-app-logo.svg"
        iconClass="w-[37px] h-[36px]"
        label={
          <span data-i18n-html="hero-call-back">
            Перезвоните
            <br />
            мне
          </span>
        }
        ariaLabel="Перезвоните мне"
      />
    </div>
  );
};
