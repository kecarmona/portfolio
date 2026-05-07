export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stat-item reveal" data-delay="1">
        <div className="stat-number">15+</div>
        <div className="stat-label">Años de Maestría</div>
      </div>
      <div className="stat-item reveal" data-delay="2">
        <div className="stat-number">8K+</div>
        <div className="stat-label">Clientes Felices</div>
      </div>
      <div className="stat-item reveal" data-delay="3">
        <div className="stat-number">3</div>
        <div className="stat-label">Maestros Barberos</div>
      </div>
      <div className="stat-item reveal" data-delay="4">
        <div className="stat-number">4.9★</div>
        <div className="stat-label">Calificación Media</div>
      </div>
    </div>
  );
}