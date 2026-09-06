import { cn } from '@/shared/lib';
import { CATALOG_TABS, type TabKey } from '../model/constants';

interface CatalogTabsProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export const CatalogTabs = ({ activeTab, onTabChange }: CatalogTabsProps) => {
  return (
    <div
      className="flex flex-wrap gap-3 lg:gap-[15px] mt-6 lg:mt-8"
      role="tablist"
      aria-label="Категории товаров"
    >
      {CATALOG_TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="catalog-grid"
            onClick={() => onTabChange(tab.key)}
            className={cn(
              'font-sans font-normal text-[15px] sm:text-[17px] xl:text-[22px] xl:leading-[30px]',
              'px-4 py-2.5 lg:px-6 lg:py-[15px] rounded-full border border-button-first transition-colors duration-200 cursor-pointer whitespace-nowrap',
              isActive
                ? 'bg-button-first text-white'
                : 'bg-surface text-primary hover:bg-button-first/10',
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
