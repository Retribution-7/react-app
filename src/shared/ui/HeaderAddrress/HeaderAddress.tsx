import { cn } from '@/shared/lib';

type HeaderAddressProps = {
  extraClass?: string;
  showDivider?: boolean;
};

export const HeaderAddress = ({ extraClass = '', showDivider = false }: HeaderAddressProps) => {
  return (
    <div className={cn('flex items-end gap-6 shrink-0', extraClass)}>
      {showDivider && <div className="h-[70px] w-px bg-primary opacity-20" />}

      <address className="not-italic text-[17px] leading-[1.8] text-primary font-sans">
        Санкт-Петербург, Горелово,
        <br />
        Волхонское шоссе, 6
      </address>
    </div>
  );
};
