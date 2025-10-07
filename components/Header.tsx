import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/services';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, anchor?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'O Nas', page: 'home', anchor: '#o-nas' },
    { name: 'Galeria', page: 'home', anchor: '#galeria' },
    { name: 'Kontakt', page: 'home', anchor: '#kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: string, anchor?: string) => {
    onNavigate(page, anchor);
    setIsOpen(false);
    setIsServicesOpen(false);
  };
  
  const isSolid = isScrolled || currentPage !== 'home';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="flex items-center gap-3">
            <img src="/images/logoSzkola1.jpg" alt="Szkoła Jazdy Machowski Logo" className="h-12 w-auto rounded-sm" />
            {/* <span className={`text-xl font-bold transition-colors hidden sm:block ${isSolid ? 'text-gray-800' : 'text-white'}`}>
              Szkoła Jazdy Machowski
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.slice(0, 1).map((link) => (
              <a 
                key={link.name} 
                href={link.anchor || '#'} 
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.page, link.anchor); }}
                className={`text-lg font-medium transition-colors ${isSolid ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Services Dropdown - Desktop */}
            <div className="relative group">
              <button className={`text-lg font-medium transition-colors flex items-center ${isSolid ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-gray-200'} focus:outline-none`}>
                Usługi
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute -left-4 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {servicesData.map(service => (
                    <a
                      key={service.pageId}
                      href="#"
                      onClick={(e) => { e.preventDefault(); handleLinkClick(`service-${service.pageId}`); }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
               <a 
                key={link.name} 
                href={link.anchor || '#'} 
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.page, link.anchor); }}
                className={`text-lg font-medium transition-colors ${isSolid ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4 ml-4">
            <a href="https://www.facebook.com/szkolajazdymachowski" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-8 h-8 text-pink-500 hover:text-pink-700 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`z-50 focus:outline-none transition-colors ${isSolid ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-600 bg-opacity-95 backdrop-blur-sm z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6 text-center">
           <a 
              href={'#'} 
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
              className="text-3xl font-bold text-white hover:text-blue-200 transition-colors"
            >
              Home
            </a>

            {/* Services Accordion - Mobile */}
            <div>
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-3xl font-bold text-white hover:text-blue-200 transition-colors flex items-center">
                Usługi
                <svg className={`w-6 h-6 ml-2 transition-transform duration-300 ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col space-y-4 mt-4">
                  {servicesData.map(service => (
                     <a
                      key={service.pageId}
                      href="#"
                      onClick={(e) => { e.preventDefault(); handleLinkClick(`service-${service.pageId}`); }}
                      className="text-xl text-white hover:text-blue-200"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a 
                key={link.name} 
                href={link.anchor || '#'} 
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.page, link.anchor); }}
                className="text-3xl font-bold text-white hover:text-blue-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          {/* Social Media Icons - Mobile */}
          <div className="flex items-center space-x-6 mt-8">
            <a href="https://www.facebook.com/szkolajazdymachowski" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-8 h-8 text-white hover:text-blue-200 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-8 h-8 text-white hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
