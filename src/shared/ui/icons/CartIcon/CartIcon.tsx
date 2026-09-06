import { cn } from '@/shared/lib';
import { BaseIcon } from '../BaseIcon/BaseIcon';

type CartIconProps = {
  extraClass?: string | undefined;
};

export const CartIcon = ({ extraClass = '' }: CartIconProps) => {
  const icon = <img src="/icons/cart.svg" alt="" className="size-5" />;

  return (
    <BaseIcon
      to="/cart"
      label="Открыть корзину"
      icon={icon}
      badgeCount={0}
      extraClass={cn('gradient-icon shadow-[inset_0_0_12px_0_rgba(255,255,255,0.5)]', extraClass)}
    />
  );
};
