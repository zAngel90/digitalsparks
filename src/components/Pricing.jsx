import React, { useEffect } from 'react';

const PriceCard = ({ title, price, features, index, className }) => {
  return (
    <div className={`price-card ${className}`} style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="price-header">
        <h3 className="price-title">{title}</h3>
        <div className="price">{price}</div>
      </div>
      
      <div className="features-list">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-item">
            {typeof feature === 'string' ? (
              <>
                <span className="check">✓</span>
                {feature}
              </>
            ) : (
              feature
            )}
          </div>
        ))}
      </div>
      
      <button className="hero-cta">
        Solicitar Información
      </button>
    </div>
  );
};

const Pricing = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      title: "Paquete Básico - Starter",
      price: "300 USD",
      features: [
        "Creación de una landing page simple (1 página)",
        "Diseño responsivo (móviles y tablets)",
        "Integración de formulario de contacto básico",
        "Conexión con redes sociales (links)",
        "Asistencia técnica por 1 semana después del lanzamiento"
      ]
    },
    {
      title: "Paquete Premium - Professional",
      price: "850 USD",
      features: [
        "Sitio web de 4 a 6 páginas totalmente personalizado",
        "Integración de un blog básico (opcional)",
        "SEO básico con palabras clave principales",
        "Funciones adicionales: mapas, botones personalizados y chat básico",
        "Optimización para velocidad y seguridad básica",
        "Soporte técnico durante 2 meses",
        "¿Necesitas más? Personaliza tu paquete con funciones adicionales",
        <span className="feature-highlight">Adaptamos el proyecto a tus necesidades específicas</span>
      ]
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="scroll-animate fade-up-fancy">
        <h2 className="section-title">Nuestros Paquetes</h2>
        <p className="section-subtitle">Selecciona el plan que mejor se adapte a tus necesidades</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <PriceCard 
            key={idx} 
            {...plan} 
            index={idx} 
            className={`scroll-animate fade-up-fancy scroll-delay-${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
