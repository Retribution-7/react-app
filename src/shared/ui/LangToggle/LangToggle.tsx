import { cn } from '@/shared/lib';

type LangToggleProps = {
  extraClass?: string;
  onSelectLang?: (lang: 'ru' | 'en') => void;
};

export const LangToggle = ({ extraClass = '', onSelectLang }: LangToggleProps) => {
  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center rounded-full bg-bg-first p-0.5',
        extraClass,
      )}
    >
      <div
        data-lang-indicator
        className="pointer-events-none absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-button-first to-button-second shadow-[inset_0_0_12px_0_rgba(255,255,255,0.45)] transition-transform duration-300"
      />

      <button
        type="button"
        data-lang-btn="ru"
        onClick={() => onSelectLang?.('ru')}
        className="relative z-10 h-8 w-9 cursor-pointer font-sans text-[13px] font-medium text-primary"
      >
        RU
      </button>

      <button
        type="button"
        data-lang-btn="en"
        onClick={() => onSelectLang?.('en')}
        className="relative z-10 h-8 w-9 cursor-pointer font-sans text-[13px] font-medium text-primary"
      >
        EN
      </button>
    </div>
  );
};
