import { cn } from '@/shared/lib';

type PhoneLinkProps = {
  extraClass?: string;
};

export const PhoneLink = ({ extraClass = '' }: PhoneLinkProps) => {
  return (
    <a
      href="tel:+78123255055"
      className={cn(
        'flex size-11 shrink-0 items-center justify-center rounded-full gradient-icon shadow-[inset_0_0_12px_0_rgba(255,255,255,0.5)] ml-auto min-[440px]:ml-0 2xl:hidden',
        extraClass,
      )}
      aria-label="Позвонить +7 (812) 325-50-55"
    >
      <span className="sr-only">Позвонить +7 (812) 325-50-55</span>
      <svg className="size-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.6.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.5-.5-.9-1-.9z" />
      </svg>
    </a>
  );
};
