import { Link } from 'react-router';
import { cn } from '@/shared/lib';

type PriceListProps = {
  to?: string;
  extraClass?: string;
};

export const PriceList = ({ to = '/', extraClass = '' }: PriceListProps) => {
  return (
    <Link
      to={to}
      className={cn('group hidden shrink-0 items-center gap-5 3xl:flex', extraClass)}
      aria-label="Скачать прайс-лист PDF"
      download
    >
      <div className="flex size-[61px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-[inset_0_0_12px_0_rgba(255,255,255,0.5)]">
        <span className="font-sans text-[17px] font-normal text-primary">PDF</span>
      </div>

      <span className="font-normal text-[17px] text-primary group-hover:underline">
        Скачать прайс-лист
      </span>
    </Link>
  );
};
