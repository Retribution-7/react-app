type SidebarActionProps = {
  href?: string;
  onClick?: () => void;
  iconSrc: string;
  iconClass: string;
  label: React.ReactNode;
  ariaLabel: string;
};

export const SidebarAction = ({
  href,
  onClick,
  iconSrc,
  iconClass,
  label,
  ariaLabel,
}: SidebarActionProps) => {
  const baseClasses =
    'flex flex-col items-center gap-[10px] w-full h-[105px] px-[15px] pt-[15px] pb-[13px] rounded-tl-[8px] rounded-bl-[8px] gradient-icon shadow-[inset_0_0_12px_0_rgba(255,255,255,0.3)] transition-opacity hover:opacity-90 cursor-pointer';

  const content = (
    <>
      <img src={iconSrc} alt="" aria-hidden="true" className={`object-contain ${iconClass}`} />
      <span className="font-sans text-[10px] leading-none text-white text-center">{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} aria-label={ariaLabel}>
      {content}
    </button>
  );
};
