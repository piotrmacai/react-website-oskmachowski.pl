
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import { servicesData } from './data/services';
import BotpressChat from "./components/BotpressChat";
import VoiceflowChat from './components/Voiceflow';

const App: React.FC = () => {
  const [page, setPage] = useState<{ name: string, anchor?: string }>({ name: 'home' });

  const handleNavigate = (pageName: string, anchor?: string) => {
    setPage({ name: pageName, anchor });
  };

  useEffect(() => {
    if (page.anchor) {
      setTimeout(() => {
        const element = document.querySelector(page.anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [page]);

  const renderPage = () => {
    if (page.name.startsWith('service-')) {
      const serviceId = page.name.split('-')[1];
      const service = servicesData.find(s => s.pageId === serviceId);
      if (service) {
        return <ServicePage service={service} onNavigate={handleNavigate} />;
      }
    }

    switch (page.name) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        // Fallback to home if no page matches
        return <HomePage onNavigate={handleNavigate} />;
    }
  };


  return (
    <div className="bg-gray-50 text-gray-800">
      <Header currentPage={page.name} onNavigate={handleNavigate} />
      <main>
        <div key={page.name} className="page-fade-in">
          {renderPage()}
        </div>
      </main>
      <Footer />
      <VoiceflowChat />
    </div>
  );
};

export default App;
