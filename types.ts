import React from 'react';

export interface ServiceCategory {
  pageId: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  list: string[];
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  details: {
    theoryHours: number;
    practiceHours: number;
    requirements: string[];
    courseDescription: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
