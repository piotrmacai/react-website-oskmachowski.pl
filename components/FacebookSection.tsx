import React from 'react';

const FacebookSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center -mx-4 min-h-[400px]">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Bądź na bieżąco!</h2>
              <p className="text-gray-600 mb-6">
                Odwiedź nasz profil na Facebooku, aby zobaczyć najnowsze informacje o kursach, promocjach, a także sukcesy naszych kursantów. Dołącz do naszej społeczności!
              </p>
              <a
                href="https://www.facebook.com/szkolyjazdymachowski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                Odwiedź nas na Facebooku
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex justify-center mt-16 sm:mt-2">
  <iframe
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fszkolajazdymachowski&tabs=timeline&width=500&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    width="500"
    height="300"
    style={{ border: 'none', overflow: 'hidden' }}
    scrolling="no"
    frameBorder={0}
    // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allow="autoplay; encrypted-media; picture-in-picture; web-share"

    allowFullScreen
    title="Facebook Page"
  ></iframe>
</div>
          {/* <div className="w-full lg:w-1/2 px-4 flex justify-center">
             <img src="https://picsum.photos/seed/social/500/400" alt="Social media illustration" className="rounded-lg shadow-xl" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
