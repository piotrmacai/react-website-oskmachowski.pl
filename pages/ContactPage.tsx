
import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] pt-20">
      <div className="w-full">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
