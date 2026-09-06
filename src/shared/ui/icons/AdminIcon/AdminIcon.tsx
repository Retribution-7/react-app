import { cn } from '@/shared/lib';
import { BaseIcon } from '../BaseIcon/BaseIcon';

type AdminIconProps = {
  extraClass?: string | undefined;
};

export const AdminIcon = ({ extraClass = '' }: AdminIconProps) => {
  const icon = (
    <svg
      viewBox="0 0 24 24"
      className="!size-5 !w-5 !h-5 shrink-0 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
    </svg>
  );

  return (
    <BaseIcon
      to="/admin"
      label="Панель администратора"
      icon={icon}
      extraClass={cn(
        'hidden gradient-icon shadow-[inset_0_0_12px_0_rgba(255,255,255,0.5)]',
        extraClass,
      )}
      dataAttr="data-admin-link"
    />
  );
};
