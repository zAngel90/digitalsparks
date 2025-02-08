import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo-link">
            <img
              src="/assets/logo.png"
              alt="Digital Sparks"
              className="logo"
            />
            <span className="logo-text">Digital Sparks</span>
          </Link>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Inicio
            </Link>
            <Link to="/packages" className={`nav-link ${location.pathname === '/packages' ? 'active' : ''}`}>
              Paquetes
            </Link>
            <a 
              href="#social-management" 
              className={`nav-link ${location.hash === '#social-management' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('social-management');
              }}
            >
              Redes Sociales
            </a>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
