import { useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/lib';

interface ProductDropdownProps {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (val: string) => void;
}

export const ProductDropdown = ({ label, value, options, onChange }: ProductDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-[6px]" ref={ref}>
      <span className="font-sans font-normal text-[13px] leading-[1.3] text-primary">{label}</span>
      <div className="relative w-[152px]">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-7 w-full rounded-[5px] border border-primary/20 bg-surface text-left cursor-pointer transition-colors hover:border-button-first focus:outline-none focus:border-button-first"
        >
          <span className="absolute left-[10px] top-1/2 -translate-y-1/2 font-sans text-[13px] leading-[1.3] text-primary whitespace-nowrap">
            {value}
          </span>
          <svg
            className={cn(
              'absolute right-[10px] top-1/2 -translate-y-1/2 size-[9px] text-primary transition-transform',
              isOpen && 'rotate-180',
            )}
            viewBox="0 0 9 6"
            fill="currentColor"
            aria-label="dropdown"
          >
            <path d="M0 0l4.5 6L9 0z" />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute left-0 right-0 top-[calc(100%+4px)] z-10 max-h-[180px] overflow-y-auto rounded-[5px] border border-primary/20 bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.08)] py-1">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'block w-full text-left px-[10px] py-1.5 font-sans text-[13px] leading-[1.3] text-primary hover:bg-bg-first transition-colors cursor-pointer',
                    option === value && 'bg-bg-first',
                  )}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
