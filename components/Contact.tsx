import React, { useEffect } from 'react';

// A helper component for displaying contact information items.
const ContactInfoItem: React.FC<{ icon: React.ReactNode, title: string, content: string, href?: string }> = ({ icon, title, content, href }) => {
  const isLink = !!href;
  const ContentTag = isLink ? 'a' : 'p';
  
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <ContentTag 
          href={href} 
          className={`mt-1 text-gray-600 ${isLink ? 'hover:text-blue-600 transition-colors' : ''}`}
        >
          {content}
        </ContentTag>
      </div>
    </div>
  );
};

// The main Contact component.
const Contact: React.FC = () => {

  // This useEffect hook handles the setup and cleanup of the Botpress webchat.
  useEffect(() => {
    // 1. Add the main Botpress script to the page
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script.async = true;
    document.body.appendChild(script);

    // 2. Add custom styles to make the webchat an embedded iframe
    const style = document.createElement('style');
    style.id = 'botpress-webchat-custom-styles'; // Add an ID for easy removal
    style.innerHTML = `
      #webchat .bpWebchat {
        position: unset;
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        border-radius: 8px; /* Optional: adds rounded corners */
        box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* Optional: adds a subtle shadow */
      }
      #webchat .bpFab {
        display: none; /* Hides the default floating action button */
      }
    `;
    document.head.appendChild(style);

    // 3. Initialize the bot once the main script is loaded
    script.onload = () => {
      // TypeScript check to ensure window.botpress exists
      if (window.botpress) {
        window.botpress.on("webchat:ready", () => {
          window.botpress.open();
        });

        window.botpress.init({
          "botId": "ae063aa4-8325-421d-8e9f-b087afaa36f7",
          "clientId": "a6f87ddd-177d-438d-b1ee-81a2b2426394",
          "selector": "#webchat",
          "configuration": {
            "composerPlaceholder": "Zadaj pytanie...",
            "botName": "Asystent Szkoły Jazdy",
            "botAvatar": "https://files.bpcontent.cloud/2024/09/26/20/20240926202727-W8SNZCV0.png",
            "botDescription": "Witaj! Jestem wirtualnym asystentem Szkoły Jazdy Machowski. Jak mogę Ci pomóc?",
            "website": {
              "title": "https://szkolajazdymachowski.pl",
              "link": "https://szkolajazdymachowski.pl"
            },
            "email": { "title": "", "link": "" },
            "phone": { "title": "+48 693 632 360", "link": "+48 693 632 360" },
            "termsOfService": { "title": "", "link": "" },
            "privacyPolicy": { "title": "", "link": "" },
            "color": "#2563eb",
            "variant": "solid",
            "themeMode": "light",
            "fontFamily": "Inter, sans-serif",
            "radius": 8,
            "showPoweredBy": false
          },
        });
      }
    };

    // 4. Cleanup function to run when the component unmounts
    return () => {
      // Remove the script that was added
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      
      // Remove the custom styles
      const styleElement = document.getElementById('botpress-webchat-custom-styles');
      if (styleElement && document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
      
      // Clear the container where the bot was rendered to remove its UI.
      const webchatContainer = document.getElementById('webchat');
      if (webchatContainer) {
        webchatContainer.innerHTML = '';
      }

      // Remove the global object injected by the script to ensure a clean state
      // for the next time this component mounts.
      if (window.botpress) {
        delete window.botpress;
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once per mount.

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Skontaktuj się z nami</h2>
          <p className="mt-4 text-lg text-gray-600">Porozmawiaj z naszym asystentem AI lub skontaktuj się z nami bezpośrednio.</p>
        </div>

        {/* Botpress Iframe Container - Placed below the title */}
        <div className="mb-16 max-w-2xl mx-auto rounded-lg">
            <div id="webchat" style={{ width: '100%', height: '550px' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ContactInfoItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              title="Adres"
              content="ul. Osiecka 37, 28-230 Połaniec"
            />
            <ContactInfoItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
              title="Telefon"
              content="693 632 360"
              href="tel:+48693632360"
            />
            <ContactInfoItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Email"
              content="szkolajazdymachowski@gmail.com"
              href="mailto:szkolajazdymachowski@gmail.com"
            />
          </div>
          <div className="h-96 lg:h-full w-full rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.492759972373!2d21.28580431572401!3d50.42171997947138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717b2b8e3e46c7d%3A0x6e7e4a1a5b8e9b6e!2sOsiecka%2037%2C%2028-230%20Po%C5%82aniec%2C%20Poland!5e0!3m2!1sen!2sus!4v1689254321098!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Szkoły Jazdy Machowski"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Declaration for the window.botpress object to satisfy TypeScript
declare global {
  interface Window {
    botpress: any;
  }
}

// import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     botpress?: any;
//   }
// }

// const ContactInfoItem: React.FC<{ icon: React.ReactNode, title: string, content: string, href?: string }> = ({ icon, title, content, href }) => {
//   const isLink = !!href;
//   const ContentTag = isLink ? 'a' : 'p';
  
//   return (
//     <div className="flex items-start">
//       <div className="flex-shrink-0">
//         <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
//           {icon}
//         </div>
//       </div>
//       <div className="ml-4">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <ContentTag 
//           href={href} 
//           className={`mt-1 text-gray-600 ${isLink ? 'hover:text-blue-600 transition-colors' : ''}`}
//         >
//           {content}
//         </ContentTag>
//       </div>
//     </div>
//   );
// };

// const Contact: React.FC = () => {
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.id = 'botpress-webchat-style';
//     style.innerHTML = `
//       #webchat .bpWebchat { position: unset; width: 100%; height: 100%; max-height: 100%; max-width: 100%; }
//       #webchat .bpFab { display: none; }
//       /* Dodatkowe drobne dopasowania, aby webchat wpasował się w layout iframe */
//       #webchat { width: 100%; height: 500px; }
//     `;
//     document.head.appendChild(style);

//     // 2. Wstrzyknięcie skryptu Botpress (only once)
//     if (!document.getElementById('botpress-webchat-script')) {
//       const script = document.createElement('script');
//       script.id = 'botpress-webchat-script';
//       script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
//       script.async = true;
//       script.onload = () => {
//         try {
//           window.botpress?.on?.('webchat:ready', () => {
//             window.botpress.open?.();
//           });

//           window.botpress?.init?.({
//             botId: 'ae063aa4-8325-421d-8e9f-b087afaa36f7',
//             configuration: {
//               composerPlaceholder: '',
//               botName: 'Asystent Szkoły Jazdy',
//               botAvatar: 'https://files.bpcontent.cloud/2024/09/26/20/20240926202727-W8SNZCV0.png',
//               botDescription: 'Witaj! Jestem wirtualnym asystentem Szkoły Jazdy Machowski. Jak mogę Ci pomóc?',
//               website: { title: 'https://szkolajazdymachowski.pl', link: 'https://szkolajazdymachowski.pl' },
//               email: { title: '', link: '' },
//               phone: { title: '+48 693 632 360', link: '+48 693 632 360' },
//               termsOfService: { title: '', link: '' },
//               privacyPolicy: { title: '', link: '' },
//               color: '#2563eb',
//               variant: 'solid',
//               themeMode: 'light',
//               fontFamily: 'rubik',
//               radius: 2,
//               showPoweredBy: false
//             },
//             clientId: 'a6f87ddd-177d-438d-b1ee-81a2b2426394',
//             selector: '#webchat'
//           });
//         } catch (e) {
  
//         }
//       };
//       document.body.appendChild(script);
//     } else {
//       if (window.botpress && typeof window.botpress.init === 'function') {
//         try {
//           window.botpress.init?.({
//             botId: 'ae063aa4-8325-421d-8e9f-b087afaa36f7',
//             configuration: {
//               composerPlaceholder: '',
//               botName: 'Asystent Szkoły Jazdy',
//               botAvatar: 'https://files.bpcontent.cloud/2024/09/26/20/20240926202727-W8SNZCV0.png',
//               botDescription: 'Witaj! Jestem wirtualnym asystentem Szkoły Jazdy Machowski. Jak mogę Ci pomóc?',
//               website: { title: 'https://szkolajazdymachowski.pl', link: 'https://szkolajazdymachowski.pl' },
//               email: { title: '', link: '' },
//               phone: { title: '+48 693 632 360', link: '+48 693 632 360' },
//               termsOfService: { title: '', link: '' },
//               privacyPolicy: { title: '', link: '' },
//               color: '#2563eb',
//               variant: 'solid',
//               themeMode: 'light',
//               fontFamily: 'rubik',
//               radius: 2,
//               showPoweredBy: false
//             },
//             clientId: 'a6f87ddd-177d-438d-b1ee-81a2b2426394',
//             selector: '#webchat'
//           });
//         } catch (e) {}
//       }
//     }

//     return () => {
//       const s = document.getElementById('botpress-webchat-script');
//       const st = document.getElementById('botpress-webchat-style');
//       if (st) st.remove();
//     };
//   }, []);

//   return (
//     <section id="kontakt" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-6">
//           <h2 className="text-4xl font-extrabold text-gray-900">Skontaktuj się z nami</h2>

//           <div className="mx-auto mt-6 mb-6 max-w-xl">
//             <div id="webchat" style={{ width: '100%', height: 420 }}></div>
//           </div>

//           <p className="mt-4 text-lg text-gray-600">Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub odwiedź nas osobiście.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <ContactInfoItem 
//               icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
//               title="Adres"
//               content="ul. Osiecka 37, 28-230 Połaniec"
//             />
//             <ContactInfoItem 
//               icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
//               title="Telefon"
//               content="693 632 360"
//               href="tel:+48693632360"
//             />
//             <ContactInfoItem 
//               icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
//               title="Email"
//               content="szkolajazdymachowski@gmail.com"
//               href="mailto:szkolajazdymachowski@gmail.com"
//             />
//           </div>
//           <div className="h-96 lg:h-full w-full rounded-lg shadow-xl overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.492759972373!2d21.28580431572401!3d50.42171997947138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717b2b8e3e46c7d%3A0x6e7e4a1a5b8e9b6e!2sOsiecka%2037%2C%2028-230%20Po%C5%82aniec%2C%20Poland!5e0!3m2!1sen!2sus!4v1689254321098!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Lokalizacja Szkoły Jazdy Machowski"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



// import React from 'react';

// const ContactInfoItem: React.FC<{ icon: React.ReactNode, title: string, content: string, href?: string }> = ({ icon, title, content, href }) => {
//   const isLink = !!href;
//   const ContentTag = isLink ? 'a' : 'p';
  
//   return (
//     <div className="flex items-start">
//       <div className="flex-shrink-0">
//         <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
//           {icon}
//         </div>
//       </div>
//       <div className="ml-4">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <ContentTag 
//           href={href} 
//           className={`mt-1 text-gray-600 ${isLink ? 'hover:text-blue-600 transition-colors' : ''}`}
//         >
//           {content}
//         </ContentTag>
//       </div>
//     </div>
//   );
// };

// const Contact: React.FC = () => {
//   return (
//     <section id="kontakt" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900">Skontaktuj się z nami</h2>
//           <p className="mt-4 text-lg text-gray-600">Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub odwiedź nas osobiście.</p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <ContactInfoItem 
//               icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
//               title="Adres"
//               content="ul. Osiecka 37, 28-230 Połaniec"
//             />
//             <ContactInfoItem 
//               icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
//               title="Telefon"
//               content="693 632 360"
//               href="tel:+48693632360"
//             />
//             <ContactInfoItem 
//               icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
//               title="Email"
//               content="szkolajazdymachowski@gmail.com"
//               href="mailto:szkolajazdymachowski@gmail.com"
//             />
//           </div>
//           <div className="h-96 lg:h-full w-full rounded-lg shadow-xl overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.492759972373!2d21.28580431572401!3d50.42171997947138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717b2b8e3e46c7d%3A0x6e7e4a1a5b8e9b6e!2sOsiecka%2037%2C%2028-230%20Po%C5%82aniec%2C%20Poland!5e0!3m2!1sen!2sus!4v1689254321098!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Lokalizacja Szkoły Jazdy Machowski"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
