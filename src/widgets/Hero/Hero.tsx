import { HeroContent } from './ui/HeroContent';
import { HeroSidebar } from './ui/HeroSidebar';

export const Hero = () => {
  return (
    <section
      className="relative min-h-[500px] lg:min-h-[700px] xl:min-h-[961px] overflow-hidden"
      aria-label="Главный баннер"
    >
      <img
        src="/images/backgrounds/hero-background.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      <HeroContent />

      <HeroSidebar />
    </section>
  );
};
