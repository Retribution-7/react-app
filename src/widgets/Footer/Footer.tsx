import { useState } from 'react';
import { Link } from 'react-router';
import { CatalogButton } from '@/shared/ui/CatalogButton/CatalogButton';
import { ConfirmModal } from '@/shared/ui/ConfirmModal/ConfirmModal';
import { MessengerLinks } from '@/shared/ui/MessengerLinks';

export const Footer = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleResetSettings = () => {
    setIsConfirmOpen(true);
  };

  const handleConfirmReset = () => {
    localStorage.clear();
    localStorage.setItem('theme', 'light');
    window.location.hash = '';
    window.location.reload();
  };

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="border-t border-primary/10 bg-surface transition-colors duration-300">
        <div className="container-main py-[37px]">
          {/* Основная строка */}
          <div className="flex flex-wrap items-center justify-between gap-8">
            {/* Логотип */}
            <Link to="/" aria-label="Металлобаза Волхонка — на главную" className="shrink-0">
              <img
                src="/icons/logo.svg"
                alt="Металлобаза Волхонка"
                className="h-[108px] w-[134px] object-contain"
              />
            </Link>

            {/* PDF прайс-лист */}
            <a
              href="/price-list.pdf"
              download
              className="group flex shrink-0 items-center gap-5"
              aria-label="Скачать прайс-лист PDF"
            >
              <div className="flex size-[61px] shrink-0 items-center justify-center rounded-full gradient-icon shadow-[inset_0_0_12px_0_rgba(255,255,255,0.5)]">
                <span className="font-sans text-[17px] font-normal text-primary">PDF</span>
              </div>

              <span className="font-sans text-[17px] font-normal text-primary group-hover:underline">
                Скачать прайс-лист
              </span>
            </a>

            {/* Кнопка каталога */}
            <CatalogButton extraClass="text-[17px] px-6 py-5" />

            {/* Мессенджеры */}
            <div className="flex shrink-0 flex-col items-start gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="size-[6px] shrink-0 rounded-full bg-button-first"
                  aria-hidden="true"
                />

                <span className="font-sans text-[13px] font-normal leading-[1.3] text-primary">
                  Задайте вопрос online
                </span>
              </div>

              <div className="flex items-center gap-[15px]">
                <MessengerLinks />
              </div>
            </div>

            {/* Телефон */}
            <div className="flex shrink-0 flex-col items-start">
              <a
                href="tel:+78123255055"
                className="font-sans text-[28px] font-normal leading-[38px] gradient-text transition-opacity hover:opacity-80"
              >
                +7 (812) 325-50-55
              </a>

              <button
                type="button"
                className="cursor-pointer font-sans text-[22px] font-normal leading-[30px] text-primary hover:underline"
                onClick={() => handleScrollTo('consultation')}
              >
                Перезвоним Вам
              </button>
            </div>
          </div>

          {/* Нижняя строка */}
          <div className="mt-[18px] flex flex-col items-center gap-2 border-t border-primary/10 pt-[18px]">
            <nav
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
              aria-label="Дополнительные ссылки"
            >
              <a
                href="#company"
                className="font-sans text-[15px] font-normal leading-[1.8] text-primary hover:underline sm:text-[17px]"
              >
                О компании
              </a>

              <span
                className="hidden size-1 rounded-full bg-primary/30 sm:inline-block"
                aria-hidden="true"
              />

              <a
                href="#reviews"
                className="font-sans text-[15px] font-normal leading-[1.8] text-primary hover:underline sm:text-[17px]"
              >
                Отзывы
              </a>

              <span
                className="hidden size-1 rounded-full bg-primary/30 sm:inline-block"
                aria-hidden="true"
              />

              <a
                href="/privacy-policy"
                className="font-sans text-[15px] font-normal leading-[1.8] text-primary hover:underline sm:text-[17px]"
              >
                Политика конфиденциальности
              </a>

              <span
                className="hidden size-1 rounded-full bg-primary/30 sm:inline-block"
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={handleResetSettings}
                className="cursor-pointer font-sans text-[15px] font-normal leading-[1.8] text-text-third transition-colors hover:text-button-first hover:underline sm:text-[17px]"
              >
                Сбросить настройки
              </button>
            </nav>

            <p className="text-center font-sans text-[15px] font-normal leading-[1.8] text-primary sm:text-[17px]">
              Copyright © 2010 - 2022 | ООО «СУПЕРМЕТ»
            </p>
          </div>
        </div>
      </footer>

      <ConfirmModal
        isOpen={isConfirmOpen}
        title="Сбросить настройки?"
        description="Все сохранённые настройки будут сброшены."
        onConfirm={handleConfirmReset}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </>
  );
};
