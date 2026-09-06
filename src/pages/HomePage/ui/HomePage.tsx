import { About } from '@/widgets/About';
import { Catalog } from '@/widgets/Catalog';
import { Header } from '@/widgets/Header/Header';
import { Hero } from '@/widgets/Hero';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Catalog />
    </>
  );
};
