import React from 'react';
import HeroSection from '@/components/pageSections/HomePage/HeroSection';
import AboutSection from '@/components/pageSections/HomePage/AboutSection';
import ServicesSection from '@/components/pageSections/HomePage/ServicesSection';
import ContactActionSection from '@/components/pageSections/HomePage/ContactActionSection';

const HomePage = () => {
  return (
    <>
      <HeroSection phoneNumber="573028519920" />
      <AboutSection />
      <ServicesSection phoneNumber="573028519920" />
      <ContactActionSection phoneNumber="573028519920" />
    </>
  );
};

export default HomePage;