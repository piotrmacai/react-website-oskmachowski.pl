import React, { useState } from 'react';
import type { FaqItem } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const faqData: FaqItem[] = [
  {
    question: 'Jakie dokumenty są potrzebne, aby rozpocząć kurs?',
    answer: 'Aby rozpocząć kurs, potrzebujesz dowodu osobistego (lub paszportu), orzeczenia lekarskiego o braku przeciwwskazań do kierowania pojazdami oraz jednej aktualnej fotografii. Pomożemy Ci uzyskać numer PKK (Profil Kandydata na Kierowcę).',
  },
  {
    question: 'Ile trwa kurs na prawo jazdy kategorii B?',
    answer: 'Standardowy kurs na kategorię B obejmuje 30 godzin teorii oraz 30 godzin praktyki. Czas trwania kursu zależy od Twojej dyspozycyjności, ale zazwyczaj wynosi od 1 do 3 miesięcy.',
  },
  {
    question: 'Czy mogę zrobić badania lekarskie w waszej szkole?',
    answer: 'Tak, organizujemy badania lekarskie na miejscu w naszej szkole. Współpracujemy z uprawnionym lekarzem, co znacznie ułatwia i przyspiesza cały proces.',
  },
  {
    question: 'Czy jazdy odbywają się również w weekendy?',
    answer: 'Tak, jesteśmy elastyczni. Umawiamy jazdy indywidualnie z każdym kursantem, również w weekendy oraz w godzinach popołudniowych, aby dopasować się do Twojego grafiku.',
  },
];

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 px-2"
      >
        <span className="text-lg font-medium text-gray-800">{item.question}</span>
        <span className="text-blue-600">
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 pt-0 text-gray-600">
          {item.answer}
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Często zadawane pytania (FAQ)</h2>
          <p className="mt-4 text-lg text-gray-600">Masz pytania? Tutaj znajdziesz odpowiedzi na najczęstsze z nich.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <AccordionItem
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
