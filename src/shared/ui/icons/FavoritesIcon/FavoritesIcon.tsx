import { cn } from '@/shared/lib';
import { BaseIcon } from '../BaseIcon/BaseIcon';

type FavoritesIconProps = {
  extraClass?: string | undefined;
};

export const FavoritesIcon = ({ extraClass = '' }: FavoritesIconProps) => {
  const icon = (
    <svg
      viewBox="0 0 24 24"
      className="size-5 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {' '}
      <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 4.5C19 16.5 12 21 12 21z" />{' '}
    </svg>
  );

  return (
    <BaseIcon
      to="/favorites"
      label="Открыть избранное"
      icon={icon}
      badgeCount={0}
      extraClass={cn('border border-button-first bg-surface', extraClass)}
      dataAttr="data-favorites-badge"
    />
  );
};
