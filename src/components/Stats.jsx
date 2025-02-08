import React, { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2, // Aumentamos el threshold para que espere a que más contenido sea visible
        rootMargin: '50px' // Añadimos margen para anticipar la animación
      }
    );

    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => observer.observe(card));

    return () => {
      statCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="stats">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">100+</div>
          <div className="stat-label">Proyectos Completados</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50+</div>
          <div className="stat-label">Clientes Satisfechos</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">Años de Experiencia</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Soporte Técnico</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
