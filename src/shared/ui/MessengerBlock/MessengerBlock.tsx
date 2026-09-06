import { cn } from '@/shared/lib';
import { MessengerLinks } from '@/shared/ui/MessengerLinks';

type MessengerBlockProps = {
  extraClass?: string;
};

export const MessengerBlock = ({ extraClass = '' }: MessengerBlockProps) => {
  return (
    <div className={cn('hidden 2xl:flex flex-col items-start gap-3 shrink-0', extraClass)}>
      <div className="flex items-center gap-2">
        <span className="size-[6px] rounded-full bg-button-first shrink-0" />
        <span
          className="text-[13px] text-primary font-normal leading-[1.3]"
          data-i18n="header-ask-online"
        >
          Задайте вопрос online
        </span>
      </div>
      <div className="flex items-center gap-[15px]">
        <MessengerLinks />
      </div>
    </div>
  );
};
