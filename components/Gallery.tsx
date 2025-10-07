import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const images = [
  { src: '/images/1.jpg', alt: 'Kursant podczas jazdy motocyklem' },
  { src: '/images/2.jpg', alt: 'Plac manewrowy szkoły jazdy' },
  { src: '/images/3.jpg', alt: 'Uśmiechnięta kursantka z prawem jazdy' },
  { src: '/images/4.jpg', alt: 'Samochód nauki jazdy na ulicach miasta' },
  { src: '/images/7.jpg', alt: 'Instruktor tłumaczący zasady ruchu drogowego' },
  { src: '/images/13.png', alt: 'Ciężarówka do nauki jazdy na kategorię C' },
  // { src: '/images/7.jpg', alt: 'Grupa kursantów na zajęciach teoretycznych' },
  // { src: '/images/8.jpg', alt: 'Jazda z przyczepą, kategoria B+E' },
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Galeria</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Zobacz naszą szkołę, pojazdy i zadowolonych kursantów w akcji.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {images.map((image, index) => (
            <AnimateOnScroll key={index} className="break-inside-avoid">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
