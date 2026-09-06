interface SkeletonProps {
  lines?: number;
  className?: string;
}

export const Skeleton = ({ lines = 3, className = '' }: SkeletonProps) => {
  return (
    <div className={`animate-pulse flex flex-col gap-3 ${className}`}>
      {Array.from({ length: lines }, (_, i) => {
        const widthClass = i === lines - 1 ? 'w-2/3' : 'w-full';
        return (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: Элементы скелетона статичны и не меняют порядок
            key={i}
            className={`h-4 rounded bg-gray-200 dark:bg-gray-700 ${widthClass}`}
          />
        );
      })}
    </div>
  );
};

interface SkeletonCardProps {
  className?: string;
}

export const SkeletonCard = ({ className = '' }: SkeletonCardProps) => {
  return (
    <div
      className={`animate-pulse bg-surface rounded-[14px] card-shadow p-6 flex flex-col gap-4 ${className}`}
    >
      <div className="h-[200px] rounded-[8px] bg-gray-200 dark:bg-gray-700" />
      <div className="h-5 rounded bg-gray-200 dark:bg-gray-700 w-3/4" />
      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700 w-1/2" />
      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700 w-full" />
    </div>
  );
};

interface SkeletonGridProps {
  count?: number;
  className?: string;
}

export const SkeletonGrid = ({ count = 4, className = '' }: SkeletonGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10 w-full ${className}`}
    >
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard
          // biome-ignore lint/suspicious/noArrayIndexKey: Элементы скелетона статичны и не меняют порядок
          key={index}
        />
      ))}
    </div>
  );
};
