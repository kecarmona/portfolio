export default function NavBar() {
  return (
    <nav id="navbar">
      <div className="nav-logo">EL CORTE <span>NOBLE</span></div>
      <div className="nav-links">
        <a href="#services">Servicios</a>
        <a href="#about">Nuestra Historia</a>
        <a href="#team">Barberos</a>
        <a href="#booking">Reservas</a>
      </div>
      <a href="#booking" className="nav-cta">Reserva un Turno</a>
    </nav>
  );
}