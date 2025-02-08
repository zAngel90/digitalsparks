import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title scroll-animate fade-up-fancy">
          Transformamos Ideas en Experiencias Digitales Excepcionales
        </h1>
        <p className="hero-subtitle scroll-animate slide-sides slide-left scroll-delay-1">
          Diseñamos y desarrollamos soluciones web innovadoras que impulsan el crecimiento de tu negocio. 
          Desde landing pages hasta aplicaciones web completas.
        </p>
        <Link 
          to="/packages" 
          className="hero-cta scroll-animate scale-rotate scroll-delay-2"
        >
          Ver Nuestros Paquetes
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
