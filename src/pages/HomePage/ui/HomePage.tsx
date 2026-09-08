import { About } from '@/widgets/About';
import { Catalog } from '@/widgets/Catalog';
import { ContactForm } from '@/widgets/ContactForm';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header/Header';
import { Hero } from '@/widgets/Hero';
import { Testimonials } from '@/widgets/Testimonials';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Catalog />
      <ContactForm />
      <Testimonials />
      <Footer />
    </>
  );
};
