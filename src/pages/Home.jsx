import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import SocialManagement from '../components/SocialManagement';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
// ... otros imports

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <SocialManagement />
      <Pricing />
      <Contact />
      {/* ... otros componentes */}
    </>
  );
};

export default Home; 