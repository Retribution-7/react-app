import { cn } from '@/shared/lib';
import { BaseIcon } from '../BaseIcon/BaseIcon';

type AuthIconProps = {
  extraClass?: string | undefined;
};

export const AuthIcon = ({ extraClass = '' }: AuthIconProps) => {
  const icon = (
    <svg
      viewBox="0 0 24 24"
      className="size-5 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {' '}
      <circle cx="12" cy="8" r="4" /> <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />{' '}
    </svg>
  );

  return (
    <BaseIcon
      to="/auth"
      label="Войти или зарегистрироваться"
      icon={icon}
      extraClass={cn('border border-button-first bg-surface', extraClass)}
      dataAttr="data-auth-link"
    />
  );
};
