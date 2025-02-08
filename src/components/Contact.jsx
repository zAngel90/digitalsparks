import React from 'react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5212761141587';
    const message = 'Hola, me gustaría obtener más información sobre sus servicios.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Contáctanos</h1>
        <p className="contact-subtitle">Estamos aquí para convertir tus ideas en realidad</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-wrapper">
          <h2 className="info-title">Información de Contacto</h2>
          <p className="info-subtitle">Elige el método que prefieras para comunicarte con nosotros</p>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>dijitalsparks@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>WhatsApp</h3>
                <p>+52 1 276 114 1587</p>
              </div>
            </div>

            <div className="contact-item highlight">
              <div className="contact-icon">
                <i className="fas fa-calendar"></i>
              </div>
              <div className="contact-details">
                <h3>Agenda una Reunión</h3>
                <a 
                  href="https://calendly.com/dijitalsparks/15min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="schedule-link"
                >
                  Reserva tu espacio →
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Ubicación</h3>
                <p>Puebla, México</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;