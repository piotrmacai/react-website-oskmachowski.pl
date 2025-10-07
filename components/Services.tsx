import React from 'react';
import type { ServiceCategory } from '../types';
import { servicesData } from '../data/services';
import AnimateOnScroll from './AnimateOnScroll';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const CategoryCard: React.FC<{ category: ServiceCategory; onNavigate: (page: string) => void; }> = ({ category, onNavigate }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
    {category.icon}
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.title}</h3>
    <p className="text-gray-600 flex-grow">{category.description}</p>
    <button
      onClick={() => onNavigate(`service-${category.pageId}`)}
      className="mt-6 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-full hover:bg-blue-200 transition-colors"
    >
      Dowiedz się więcej
    </button>
  </div>
);

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="uslugi" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Nasze Usługi</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Oferujemy szeroki zakres kursów na prawo jazdy, dostosowanych do Twoich potrzeb.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((cat, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <CategoryCard category={cat} onNavigate={onNavigate} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
