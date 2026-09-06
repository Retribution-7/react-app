import type { FeatureCard } from '@/shared/constants/featureCards';

interface AboutCardProps {
  card: FeatureCard;
}

export const AboutCard = ({ card }: AboutCardProps) => {
  return (
    <article className="flex flex-col gap-5 lg:gap-[30px] w-full sm:w-[calc(50%-32px)] xl:w-[calc(33.333%-94px)]">
      <div className="size-[60px] rounded-[14px] gradient-icon flex items-center justify-center shrink-0 border border-[rgba(255,196,0,0.3)]">
        <img
          src={card.icon}
          alt={card.iconAlt}
          className="size-6 object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col gap-3 lg:gap-5">
        <h3 className="font-sans font-normal text-[18px] leading-[1.4] lg:text-[22px] lg:leading-[30px] gradient-text">
          {card.title}
        </h3>
        <p className="font-sans font-normal text-[16px] leading-[1.4] lg:text-[22px] lg:leading-[30px] text-secondary opacity-80">
          {card.description}
        </p>
      </div>
    </article>
  );
};
