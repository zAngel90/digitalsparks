import React from 'react';

const SocialManagement = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5212761141587';
    const message = 'Hola, me interesa conocer más sobre la gestión de redes sociales.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="social-management" id="social-management">
      <div className="social-management-content">
        <h2 className="social-title">
          Diseño de Páginas Web México - <span>Redes Sociales</span> - Marketing Digital
        </h2>
        
        <div className="social-text">
          <p>
            Ofrecemos una amplia gama de estrategias y servicios adaptados a las necesidades únicas de cada cliente, 
            emprendedores, profesionistas, negocios, tiendas en línea ecommerce y empresas.
          </p>
          
          <p>
            Nuestro enfoque se centra en comprender al público objetivo, desarrollar una historia de marca convincente 
            y utilizar los canales de publicidad y comercialización digital adecuada para llegar a los clientes potenciales.
          </p>
        </div>

        <div className="social-cta">
          <p className="highlight">¡haz tu cotización vía WhatsApp!</p>
          <button onClick={handleWhatsAppClick} className="whatsapp-button">
            <i className="fab fa-whatsapp"></i>
            Solicitar Cotización Vía WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialManagement; 