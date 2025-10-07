
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const features = [
  {
    title: "Ponad 20 lat doświadczenia",
    description: "Jesteśmy na rynku od ponad dwóch dekad. Tysiące zadowolonych kursantów to nasza najlepsza wizytówka.",
    imageUrl: "/images/1.jpg",
    imageAlt: "Doświadczony instruktor nauki jazdy z kursantem",
  },
  {
    title: "Własny plac manewrowy",
    description: "Posiadamy pełnowymiarowy, oświetlony plac manewrowy, identyczny z placem egzaminacyjnym WORD, co pozwala na komfortowe i bezstresowe ćwiczenia.",
    imageUrl: "/images/2.jpg",
    imageAlt: "Plac manewrowy szkoły jazdy z pachołkami",
  },
  {
    title: "Kompleksowe usługi",
    description: "Zapewniamy kompletne materiały szkoleniowe, organizujemy badania lekarskie na miejscu oraz pomagamy we wszystkich formalnościach urzędowych.",
    imageUrl: "/images/3.jpg",
    imageAlt: "Materiały szkoleniowe i kluczyki do samochodu",
  },
  {
    title: "Nowoczesna flota pojazdów",
    description: "Szkolimy na nowych, klimatyzowanych pojazdach, takich samych jak na egzaminie państwowym. Nasza flota jest regularnie serwisowana i utrzymana w nienagannym stanie.",
    imageUrl: "/images/hero.jpeg",
    imageAlt: "Nowoczesne samochody i motocykle szkoły jazdy",
  },
];


const About: React.FC = () => {
  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Dlaczego My?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Wybierz sprawdzoną szkołę jazdy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Stawiamy na jakość, bezpieczeństwo i indywidualne podejście do każdego kursanta.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title}>
              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.imageAlt} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover" 
                    style={{ aspectRatio: '4/3' }}
                    loading="lazy"
                  />
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
