import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center text-white -mt-20 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        src="/video/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-900/80 z-20" aria-hidden="true"></div>
      {/* Glassmorphic Card */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto mt-24 backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 py-12">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Szkoła Jazdy Machowski
        </h1>
        {/* Divider */}
        <div className="flex justify-center mb-2">
          <span className="inline-block w-24 h-1 rounded-full bg-blue-400/70"></span>
        </div>
        <p className="text-xl md:text-md lg:text-xl max-w-3xl mx-auto drop-shadow-md mb-4">
          Szkoła Jazdy Machowski to gwarancja profesjonalizmu, doświadczenia i nowoczesnego podejścia do nauki jazdy.
        </p>
        <a 
          href="/contact" 
          onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Zapisz się na kurs
        </a>
      </div>
      {/* Scroll Down Indicator */}
      <a 
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce cursor-pointer"
      >
        <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
