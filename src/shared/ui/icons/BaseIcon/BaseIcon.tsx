import { Link } from 'react-router';
import { cn } from '@/shared/lib';

type BaseIconProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  badgeCount?: number;
  extraClass?: string;
  dataAttr?: string;
  style?: React.CSSProperties;
};

export const BaseIcon = ({
  to,
  label,
  icon,
  badgeCount,
  extraClass = '',
  dataAttr,
  style,
}: BaseIconProps) => {
  return (
    <Link
      to={to}
      {...(dataAttr ? { [dataAttr]: true } : {})}
      style={style}
      className={cn(
        'relative grid size-11 shrink-0 place-items-center rounded-full transition-transform hover:scale-105',
        extraClass,
      )}
      aria-label={label}
    >
      {icon}

      {badgeCount !== undefined && (
        <span
          className={cn(
            'absolute -top-1 -right-1 hidden h-5 min-w-[20px] rounded-full bg-button-first px-1.5 text-center font-sans text-[12px] font-medium leading-5 text-primary',
            badgeCount > 0 && '!block',
          )}
        >
          {badgeCount}
        </span>
      )}
    </Link>
  );
};
