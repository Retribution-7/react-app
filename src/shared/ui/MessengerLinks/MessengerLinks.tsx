import { cn } from '@/shared/lib';

type MessengerLinksProps = {
  compact?: boolean;
};

export const MessengerLinks = ({ compact = false }: MessengerLinksProps) => {
  const linkClass = cn(
    'flex h-[41px] w-[50px] items-center justify-center rounded-[8px]',
    !compact && 'shrink-0 transition-opacity hover:opacity-80',
  );

  return (
    <>
      <a
        href="https://wa.me/78123255055"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        style={{ background: 'linear-gradient(145deg, rgba(0,215,41,0.3) 0%, rgb(0,215,41) 100%)' }}
        aria-label="WhatsApp"
      >
        <img src="/icons/whats-app-logo.svg" alt="WhatsApp" className="size-[19px]" />
      </a>

      <a
        href="https://t.me/metallobaza"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        style={{
          background: 'linear-gradient(145deg, rgba(40,169,234,0.3) 0%, rgb(40,169,234) 100%)',
        }}
        aria-label="Telegram"
      >
        <img src="/icons/telegram-logo.svg" alt="Telegram" className="size-[19px]" />
      </a>

      <a
        href="https://vk.com/metallobaza"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkClass, 'bg-[#0077FF]')}
        aria-label="ВКонтакте"
      >
        <img src="/icons/vk-logo.svg" alt="ВКонтакте" className="size-[19px]" />
      </a>
    </>
  );
};
