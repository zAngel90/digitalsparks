import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-palette',
      title: 'Diseño UI/UX',
      description: 'Creamos interfaces intuitivas y atractivas que cautivan a tus usuarios.'
    },
    {
      icon: 'fa-code',
      title: 'Desarrollo Web',
      description: 'Desarrollamos sitios web modernos y responsivos con las últimas tecnologías.'
    },
    {
      icon: 'fa-mobile-screen',
      title: 'Desarrollo Móvil',
      description: 'Aplicaciones móviles nativas y multiplataforma que destacan.'
    },
    {
      icon: 'fa-rocket',
      title: 'SEO y Marketing',
      description: 'Optimizamos tu presencia en línea para alcanzar tu audiencia.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="scroll-animate fade-up-fancy">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones digitales que impulsan tu negocio</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card scroll-animate fade-up-fancy"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-icon">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
