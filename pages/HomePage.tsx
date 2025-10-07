import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import FacebookSection from '../components/FacebookSection';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import AnimateOnScroll from '../components/AnimateOnScroll';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <section id="services">
      <Services onNavigate={onNavigate} />
      </section>
            <AnimateOnScroll>
        <FacebookSection />
      </AnimateOnScroll>
      <About />

      <Gallery />
      <FAQ />
      <AnimateOnScroll>
        <Contact />
      </AnimateOnScroll>
    </>
  );
};

export default HomePage;
