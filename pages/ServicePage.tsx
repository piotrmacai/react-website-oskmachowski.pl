import React from 'react';
import type { ServiceCategory } from '../types';
import AnimateOnScroll from '../components/AnimateOnScroll';

interface ServicePageProps {
  service: ServiceCategory;
  onNavigate: (page: string) => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ service, onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${service.hero.backgroundImage}')` }}
        ></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            {service.hero.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            {service.hero.description}
          </p>
        </div>

         {/* <ul className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md list-disc list-inside mt-4">
            {service.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul> */}
      </section>

      {/* Course Details Section */}
      <AnimateOnScroll>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Szczegóły kursu</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{service.details.courseDescription}</p>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Wymagania i zakres</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Teoria:</strong> {service.details.theoryHours} godzin</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Praktyka:</strong> {service.details.practiceHours} godzin</span>
                  </li>
                  {service.details.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Gotowy, aby zacząć?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Zapisz się na kurs {service.title} już dziś i zrób pierwszy krok w stronę zdobycia prawa jazdy!
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Skontaktuj się z nami
            </button>
          </div>
        </section>
      </AnimateOnScroll>
      
      {/* Gallery Section */}
      {/* {service.gallery.length > 0 && (
        <AnimateOnScroll>
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nasza flota i plac - {service.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      )} */}
    </div>
  );
};

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


export default ServicePage;
