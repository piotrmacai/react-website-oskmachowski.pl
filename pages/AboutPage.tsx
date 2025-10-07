import React from 'react';
import About from '../components/About';
import Gallery from '../components/Gallery';
import AnimateOnScroll from '../components/AnimateOnScroll';

const HistorySection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Nasza Historia</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Poznaj drogę, którą przebyliśmy, aby stać się jedną z wiodących szkół jazdy w regionie.
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6 text-justify">
        <p>
          Szkoła Jazdy Machowski została założona w 1998 roku przez pasjonata motoryzacji, Jana Machowskiego. Zaczynaliśmy skromnie, z jednym samochodem i ogromnym zapałem do szkolenia przyszłych kierowców. Naszym celem od samego początku było nie tylko skuteczne przygotowanie do egzaminu, ale przede wszystkim nauka bezpiecznej, odpowiedzialnej i kulturalnej jazdy.
        </p>
        <p>
          Przez ponad dwie dekady działalności, zdobyliśmy zaufanie tysięcy kursantów, którzy dzięki nam z powodzeniem zdobyli upragnione prawo jazdy. Systematycznie rozwijaliśmy naszą ofertę, wprowadzając kolejne kategorie i inwestując w nowoczesną flotę pojazdów oraz infrastrukturę. Kluczowym momentem w naszej historii było wybudowanie własnego, pełnowymiarowego placu manewrowego, co znacząco podniosło jakość i komfort szkolenia.
        </p>
        <p>
          Dziś jesteśmy dumni z naszej pozycji na rynku. Dysponujemy nowoczesnymi pojazdami, doświadczoną kadrą instruktorów i kompleksowym zapleczem. Nieustannie podnosimy nasze kwalifikacje i dostosowujemy metody nauczania do zmieniających się przepisów i oczekiwań kursantów. Mimo upływu lat, nasza misja pozostaje niezmienna: kształcić najlepszych kierowców.
        </p>
      </div>
    </div>
  </section>
);

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimateOnScroll>
        <HistorySection />
      </AnimateOnScroll>
      <About />
      <Gallery />
    </div>
  );
};

export default AboutPage;
