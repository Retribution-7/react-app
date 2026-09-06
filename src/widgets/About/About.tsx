import { featureCards } from '@/shared/constants/featureCards';
import { AboutCard } from './ui/AboutCard';
import { AboutHeader } from './ui/AboutHeader';

export const About = () => {
  return (
    <section
      className="bg-surface py-14 lg:py-20 transition-colors duration-300"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container-main flex flex-col gap-14 lg:gap-[110px]">
        <AboutHeader />

        <div className="flex flex-wrap gap-x-16 gap-y-12 xl:gap-x-[140px] xl:gap-y-[90px]">
          {featureCards.map((card) => (
            <AboutCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
