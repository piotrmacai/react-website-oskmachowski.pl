import React from 'react';
import type { ServiceCategory } from '../types';
import { MotorcycleIcon, CarIcon, TruckIcon, TrailerIcon, CertificateIcon } from '../components/icons';

export const servicesData: ServiceCategory[] = [
  {
    pageId: 'a',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(MotorcycleIcon, { className: "w-12 h-12 text-blue-600 mb-4" }),
    title: 'Kategoria A',
    description: 'Uprawnia do kierowania motocyklem. Wymagany wiek: 24 lata (lub 20 lat, jeśli posiadasz prawo jazdy kat. A2 od 2 lat).',
    list: [
      'Profesjonalne przygotowanie do egzaminu państwowego',
      'Nauka bezpiecznej jazdy w ruchu miejskim i na placu manewrowym',
      'Doświadczeni instruktorzy z pasją do motocykli',
      'Nowoczesny sprzęt i indywidualne podejście do każdego kursanta'
    ],
    hero: {
      title: 'Kurs Prawa Jazdy Kategoria A',
      description: 'Zdobądź wolność na dwóch kółkach. Profesjonalne szkolenie motocyklowe.',
      backgroundImage: "/images/1.jpg",
    },
    details: {
      theoryHours: 30,
      practiceHours: 20,
      requirements: ['Wiek: 24 lata (lub 20 przy kat. A2 od 2 lat)', 'Orzeczenie lekarskie', 'Profil Kandydata na Kierowcę (PKK)'],
      courseDescription: 'Nasz kurs na kategorię A kompleksowo przygotuje Cię do egzaminu państwowego i samodzielnej, bezpiecznej jazdy motocyklem. Szkolenie obejmuje zajęcia teoretyczne oraz praktyczne manewry na placu i jazdę w ruchu miejskim.',
    },
    gallery: [
      { src: 'https://picsum.photos/seed/gallery-a1/600/400', alt: 'Motocykl szkoleniowy Kategoria A' },
      { src: 'https://picsum.photos/seed/gallery-a2/600/400', alt: 'Kursant na motocyklu na placu' },
    ]
  },
  {
    pageId: 'a2',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(MotorcycleIcon, { className: "w-12 h-12 text-blue-600 mb-4" }),
    title: 'Kategoria A2',
    description: 'Uprawnia do kierowania motocyklem o mocy nieprzekraczającej 35 kW. Wymagany wiek: 18 lat.',
    list: [
      'Nauka jazdy na motocyklach o mocy do 35 kW',
      'Zajęcia teoretyczne i praktyczne z doświadczonymi instruktorami',
      'Bezpieczne manewry i jazda w ruchu drogowym',
      'Przygotowanie do egzaminu państwowego'
    ],
    hero: {
      title: 'Kurs Prawa Jazdy Kategoria A2',
      description: 'Idealny start w świat motocykli. Zacznij swoją przygodę z kategorią A2.',
      backgroundImage: "/images/1.jpg",
    },
    details: {
      theoryHours: 30,
      practiceHours: 20,
      requirements: ['Wiek: 18 lat', 'Orzeczenie lekarskie', 'Profil Kandydata na Kierowcę (PKK)'],
      courseDescription: 'Kurs na kategorię A2 to doskonały wybór dla młodych pasjonatów motoryzacji. Nauczymy Cię panowania nad maszyną i bezpiecznego poruszania się w każdych warunkach.',
    },
    gallery: [
      { src: 'https://picsum.photos/seed/gallery-a2-1/600/400', alt: 'Motocykl szkoleniowy Kategoria A2' },
      { src: 'https://picsum.photos/seed/gallery-a2-2/600/400', alt: 'Jazda motocyklem A2' },
    ]
  },
  {
    pageId: 'b',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(CarIcon, { className: "w-12 h-12 text-blue-600 mb-4" }),
    title: 'Kategoria B',
    description: 'Najpopularniejsza kategoria, uprawniająca do kierowania pojazdem samochodowym o dmc do 3,5 tony.',
    list: [
      'Możliwość prowadzenia samochodów osobowych do 3,5 tony',
      'Kompleksowe szkolenie teoretyczne i praktyczne',
      'Nowoczesna flota pojazdów identycznych jak na egzaminie',
      'Własny plac manewrowy i indywidualne podejście',
      'Przyjazna atmosfera i wsparcie na każdym etapie nauki'
    ],
    hero: {
      title: 'Kurs Prawa Jazdy Kategoria B',
      description: 'Zdobądź niezależność za kierownicą. Kompleksowe szkolenie na samochody osobowe.',
      backgroundImage: "/images/11.png",
    },
    details: {
      theoryHours: 30,
      practiceHours: 30,
      requirements: ['Ukończone 17 lat i 9 miesięcy', 'Orzeczenie lekarskie o braku przeciwwskazań', 'Profil Kandydata na Kierowcę (PKK)'],
      courseDescription: 'Nasz flagowy kurs na kategorię B to gwarancja najwyższej jakości szkolenia. Doświadczeni instruktorzy, nowoczesna flota pojazdów identycznych jak na egzaminie oraz własny plac manewrowy zapewniają komfortowe warunki do nauki. Przygotujemy Cię nie tylko do zdania egzaminu, ale do bycia pewnym i bezpiecznym kierowcą na co dzień.',
    },
    gallery: [
      { src: 'https://picsum.photos/seed/gallery-b1/600/400', alt: 'Samochód szkoleniowy Szkoły Jazdy Machowski' },
      { src: 'https://picsum.photos/seed/gallery-b2/600/400', alt: 'Kursantka za kierownicą podczas jazdy po mieście' },
      { src: 'https://picsum.photos/seed/gallery-b3/600/400', alt: 'Manewry na placu szkoleniowym' },
      { src: 'https://picsum.photos/seed/gallery-b4/600/400', alt: 'Instruktor udzielający wskazówek' },
    ]
  },
  {
    pageId: 'be',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(TrailerIcon, { className: "w-12 h-12 text-blue-600 mb-4" }),
    title: 'Kategoria B+E',
    description: 'Uprawnia do kierowania zespołem pojazdów złożonym z pojazdu kat. B i przyczepy innej niż lekka.',
    list: [
      'Potrzebujesz uprawnień do przewozu większych ładunków',
      'Chcesz nauczyć się manewrowania zespołem pojazdów',
      'Otrzymasz praktyczne wskazówki od doświadczonych instruktorów'
    ],
    hero: {
      title: 'Kurs Prawa Jazdy Kategoria B+E',
      description: 'Zwiększ swoje możliwości. Naucz się bezpiecznie jeździć z przyczepą.',
      backgroundImage: "/images/2.jpg",
    },
    details: {
      theoryHours: 0,
      practiceHours: 15,
      requirements: ['Posiadanie prawa jazdy kat. B', 'Orzeczenie lekarskie', 'Profil Kandydata na Kierowcę (PKK)'],
      courseDescription: 'Kurs B+E skierowany jest do osób, które potrzebują uprawnień do ciągnięcia cięższych przyczep. Szkolenie obejmuje wyłącznie część praktyczną, skupiając się na manewrach i jeździe z przyczepą.',
    },
    gallery: [
      { src: 'https://picsum.photos/seed/gallery-be1/600/400', alt: 'Samochód z przyczepą szkoleniową' },
      { src: 'https://picsum.photos/seed/gallery-be2/600/400', alt: 'Manewr cofania z przyczepą' },
    ]
  },
  {
    pageId: 'c',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(TruckIcon, { className: "w-12 h-12 text-blue-600 mb-4" }),
    title: 'Kategoria C',
    description: 'Uprawnia do kierowania pojazdem samochodowym o dmc przekraczającej 3,5 tony (ciężarówka).',
    list: [
      'Szkolenie na nowoczesnej ciężarówce',
      'Zajęcia teoretyczne i praktyczne z doświadczonymi instruktorami',
      'Nauka manewrów na pełnowymiarowym placu',
      'Przygotowanie do pracy w transporcie drogowym'
    ],
    hero: {
      title: 'Kurs Prawa Jazdy Kategoria C',
      description: 'Otwórz sobie drogę do kariery zawodowego kierowcy. Zdobądź uprawnienia na ciężarówki.',
      backgroundImage: "/images/3.jpg",
    },
    details: {
      theoryHours: 20,
      practiceHours: 30,
      requirements: ['Wiek: 21 lat', 'Posiadanie prawa jazdy kat. B', 'Orzeczenie lekarskie i psychologiczne', 'Profil Kandydata na Kierowcę (PKK)'],
      courseDescription: 'Profesjonalne szkolenie na kategorię C przygotuje Cię do pracy jako kierowca zawodowy. Dysponujemy nowoczesną ciężarówką i pełnowymiarowym placem manewrowym.',
    },
    gallery: [
      { src: 'https://picsum.photos/seed/gallery-c1/600/400', alt: 'Ciężarówka szkoleniowa Kategoria C' },
      { src: 'https://picsum.photos/seed/gallery-c2/600/400', alt: 'Plac manewrowy dla ciężarówek' },
    ]
  },
  {
    pageId: 'ce',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(TruckIcon, { className: "w-12 h-12 text-blue-600 mb-4" }),
    title: 'Kategoria C+E',
    description: 'Uprawnia do kierowania zespołem pojazdów złożonym z pojazdu kat. C i przyczepy.',
    list: [
      'Intensywna nauka manewrowania zestawem pojazdów',
      'Praktyczne zajęcia z jazdy w ruchu drogowym',
      'Wsparcie doświadczonych instruktorów'
    ],
    hero: {
      title: 'Kurs Prawa Jazdy Kategoria C+E',
      description: 'Zostań królem szos. Zdobądź pełne uprawnienia na pojazdy ciężarowe z naczepą.',
      backgroundImage: "/images/4.jpg",
    },
    details: {
      theoryHours: 0,
      practiceHours: 25,
      requirements: ['Posiadanie prawa jazdy kat. C', 'Orzeczenie lekarskie i psychologiczne', 'Profil Kandydata na Kierowcę (PKK)'],
      courseDescription: 'Kurs na kategorię C+E to ostatni krok do zostania w pełni wykwalifikowanym kierowcą TIRa. Szkolenie praktyczne obejmuje wszystkie niezbędne manewry i jazdę w ruchu drogowym.',
    },
    gallery: [
      { src: 'https://picsum.photos/seed/gallery-ce1/600/400', alt: 'Ciężarówka z naczepą' },
      { src: 'https://picsum.photos/seed/gallery-ce2/600/400', alt: 'Jazda zestawem C+E' },
    ]
  },
  {
    pageId: 'kwalifikacja',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(CertificateIcon, { className: "w-12 h-12 text-blue-600 mb-4" }),
    title: 'Świadectwo kwalifikacji',
    description: 'Szkolenia okresowe i kwalifikacja wstępna dla kierowców zawodowych.',
    list: [
      'Kwalifikacja wstępna i szkolenia okresowe (kod 95)',
      'Profesjonalne materiały i wykładowców',
      'Aktualna wiedza zgodna z przepisami'
    ],
    hero: {
      title: 'Szkolenia dla Kierowców Zawodowych',
      description: 'Podnieś swoje kwalifikacje i bądź na bieżąco z przepisami.',
      backgroundImage: "/images/9.jpg",
    },
    details: {
      theoryHours: 140, // Kwalifikacja wstępna
      practiceHours: 0, // Zależne od typu
      requirements: ['Posiadanie prawa jazdy odpowiedniej kategorii (C lub D)', 'Wiek zgodny z przepisami'],
      courseDescription: 'Oferujemy pełen zakres szkoleń dla kierowców zawodowych, w tym kwalifikację wstępną, wstępną przyspieszoną, uzupełniającą oraz szkolenia okresowe (kod 95). Zapewniamy profesjonalne materiały i wykładowców.',
    },
    gallery: [
      { src: 'https://picsum.photos/seed/gallery-kw1/600/400', alt: 'Sala wykładowa' },
      { src: 'https://picsum.photos/seed/gallery-kw2/600/400', alt: 'Certyfikat kwalifikacji zawodowej' },
    ]
  }
];