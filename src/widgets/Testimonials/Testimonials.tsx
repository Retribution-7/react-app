import { useCallback, useEffect, useRef, useState } from 'react';
import type { Review } from '@/entities/Review';
import { fetchReviews } from '@/entities/Review/api/reviewApi';
import {
  CAROUSEL_AUTO_INTERVAL_MS,
  CAROUSEL_DESKTOP_BREAKPOINT_PX,
} from '@/shared/constants/carousel';
import { SkeletonCard } from '@/shared/ui/Skeleton/Skeleton';
import { ReviewCard } from './ui/ReviewCard';

const GAP = 41;

export const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [perView, setPerView] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [slideWidthPx, setSlideWidthPx] = useState<number>(0);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const newPerView = window.innerWidth >= CAROUSEL_DESKTOP_BREAKPOINT_PX ? 3 : 1;
      setPerView(newPerView);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchReviews()
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        const firstSlide = trackRef.current.querySelector<HTMLElement>('.testimonial-slide');

        if (firstSlide) {
          setSlideWidthPx(firstSlide.offsetWidth + GAP);
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    const timer = setTimeout(updateWidth, 50);

    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      const total = maxIndex + 1;

      if (total <= 0) {
        return;
      }

      const next = ((idx % total) + total) % total;
      setCurrentIndex(next);
    },
    [maxIndex],
  );

  useEffect(() => {
    if (isPaused || reviews.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      goTo(currentIndex + 1);
    }, CAROUSEL_AUTO_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, reviews.length, goTo]);

  const handlePrev = () => {
    setIsPaused(true);
    goTo(currentIndex - 1);
  };

  const handleNext = () => {
    setIsPaused(true);
    goTo(currentIndex + 1);
  };

  const handleDotClick = (idx: number) => {
    setIsPaused(true);
    goTo(idx);
  };

  return (
    <section
      className="bg-bg-second py-14 lg:py-20 xl:py-[100px] transition-colors duration-300"
      id="testimonials"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="container-main flex flex-col gap-8 xl:gap-[29px]">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h2
              id="testimonials-heading"
              className="font-sans font-normal text-[26px] leading-[1.2] sm:text-[36px] xl:text-[56px] xl:leading-[68px]"
            >
              <span className="gradient-text">ЛУЧШЕ ВСЕГО О НАС</span>
              <br />
              РАССКАЖУТ НАШИ КЛИЕНТЫ
            </h2>
          </div>

          <div className="flex items-center gap-[10px] shrink-0 mt-4">
            <button
              type="button"
              onClick={handlePrev}
              className="flex items-center justify-center size-[40px] rounded-full border border-primary/30 text-primary text-[18px] transition-all hover:border-button-first cursor-pointer"
              aria-label="Предыдущий отзыв"
            >
              ←
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center justify-center size-[70px] rounded-full gradient-icon text-white text-[22px] transition-opacity hover:opacity-90 cursor-pointer"
              aria-label="Следующий отзыв"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-[41px] transition-transform duration-500 ease-in-out min-h-[200px] items-center"
            style={{
              transform: `translateX(-${currentIndex * (slideWidthPx || 400)}px)`,
            }}
          >
            {isLoading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : error ? (
              <span className="font-sans text-[15px] text-text-third">{'testimonials-error'}</span>
            ) : (
              reviews.map((review) => (
                <ReviewCard
                  key={review.id ?? review.name}
                  review={review}
                  perView={perView}
                  gap={GAP}
                />
              ))
            )}
          </div>
        </div>

        {!isLoading && !error && reviews.length > 0 && (
          <fieldset className="flex gap-2 justify-center lg:hidden" aria-label="Страница отзывов">
            {reviews.map((review, idx) => {
              const active = idx === currentIndex;

              return (
                <button
                  key={review.id ?? review.name}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  className={`testimonial-dot h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    active ? 'bg-button-first w-6' : 'bg-primary/20 w-2'
                  }`}
                  aria-label={`Отзыв ${idx + 1}`}
                  aria-current={active ? 'true' : undefined}
                />
              );
            })}
          </fieldset>
        )}

        <div className="flex justify-center mt-4 lg:mt-8">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 rounded-full bg-bg-first border border-button-first px-6 py-3 lg:px-8 lg:py-[15px] font-sans text-[14px] sm:text-[15px] lg:text-[17px] leading-[1.4] text-primary transition-colors duration-200 hover:bg-surface cursor-pointer no-underline"
          >
            <span>{'testimonials-all'}</span>

            <svg
              viewBox="0 0 16 16"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
