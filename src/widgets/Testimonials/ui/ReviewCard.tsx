import type { Review } from '@/entities/Review';

interface ReviewCardProps {
  review: Review;
  perView: number;
  gap: number;
}

export const ReviewCard = ({ review, perView, gap }: ReviewCardProps) => {
  const widthStyle = perView > 1 ? `calc((100% - ${gap * (perView - 1)}px) / ${perView})` : '100%';

  return (
    <article
      className="testimonial-slide bg-surface rounded-[14px] card-shadow p-[40px] flex flex-col gap-[25px] transition-colors duration-300 shrink-0"
      style={{ flex: `0 0 ${widthStyle}`, minWidth: 0 }}
    >
      <div className="flex items-center gap-[25px]">
        <img
          src={review.avatar}
          alt={review.name}
          className="size-[70px] rounded-full object-cover shrink-0"
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="font-sans font-normal text-[22px] leading-[30px] text-123-first">
            {review.name}
          </span>
          <span className="font-sans font-normal text-[17px] leading-[1.8] text-123-second">
            {review.date}
          </span>
        </div>
      </div>

      <div>
        <img
          src="/icons/yandex-logo.png"
          alt="Яндекс Карты — 5 звёзд"
          className="h-[23px] object-contain"
        />
      </div>

      <p className="font-sans font-normal text-[22px] leading-[30px] text-primary opacity-80">
        {review.text}
      </p>
    </article>
  );
};
