import { About } from '@/widgets/About';
import { Catalog } from '@/widgets/Catalog';
import { ContactForm } from '@/widgets/ContactForm';
import { Header } from '@/widgets/Header/Header';
import { Hero } from '@/widgets/Hero';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Catalog />
      <ContactForm />
    </>
  );
};
