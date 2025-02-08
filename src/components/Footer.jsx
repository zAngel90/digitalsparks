import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5212761141587';
    const message = 'Hola, me gustaría obtener más información sobre sus servicios.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Digital Sparks</h3>
          <p>
            Transformamos ideas en experiencias digitales excepcionales. 
            Diseño web profesional y marketing digital para hacer crecer tu negocio.
          </p>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/packages">Paquetes</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>
            <i className="fas fa-envelope"></i> dijitalsparks@gmail.com
          </p>
          <p className="whatsapp-contact" onClick={handleWhatsAppClick}>
            <i className="fab fa-whatsapp"></i> +52 1 276 114 1587
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Puebla, México
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Digital Sparks. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
