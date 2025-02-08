import React from 'react'

const StatCard = ({ label, number, helpText }) => {
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <span className="stat-number">{number}</span>
      <span className="stat-help-text">{helpText}</span>
    </div>
  )
}

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="stats-grid">
          <StatCard
            label="Propiedades"
            number="417"
            helpText="Total gestionadas"
          />
          <StatCard
            label="Clientes"
            number="278"
            helpText="Activos este mes"
          />
          <StatCard
            label="Consultas"
            number="53"
            helpText="Últimas 24 horas"
          />
          <StatCard
            label="Visitas"
            number="895"
            helpText="Esta semana"
          />
        </div>
      </div>
    </section>
  )
}

export default Features
