import { Button } from '@/shared/ui/Button/Button';

export const HeroContent = () => {
  return (
    <div className="container-main relative z-10 pt-20 pb-16 lg:pt-[160px] lg:pb-[100px] xl:pt-[267px] xl:pb-[147px]">
      <div className="flex flex-col gap-6 lg:gap-8 xl:gap-[43px] max-w-[899px] xl:max-w-none">
        <h1
          data-i18n-html="hero-title"
          className="font-sans font-normal text-[28px] leading-[1.2] sm:text-[36px] lg:text-[44px] lg:leading-[1.2] xl:text-[56px] xl:leading-[68px] text-[#303030]"
        >
          ПРОДАЖА кровельных материалов
          <br />
          <span className="gradient-text">
            с доставкой
            <br />
            по Санкт-Петербургу
            <br />и области
          </span>{' '}
          в день заказа
        </h1>

        <p
          data-i18n-html="hero-desc"
          className="font-sans text-[16px] sm:text-[18px] xl:text-[22px] leading-[1.3] text-black max-w-[434px]"
        >
          За 1 минуту пройдите тест и{' '}
          <strong className="gradient-text font-normal">рассчитайте стоимость кровли</strong> под
          ваш объект с точностью 97% и получите подарки
        </p>

        <div>
          <Button
            variant="primary"
            aria-label="Рассчитать стоимость материалов"
            data-i18n="hero-btn"
            className="px-6 py-4 text-[14px] sm:px-8 sm:py-5 sm:text-[16px] xl:px-[46px] xl:py-9 xl:text-[22px]"
          >
            РАССЧИТАТЬ СТОИМОСТЬ МАТЕРИАЛОВ
          </Button>
        </div>
      </div>
    </div>
  );
};
