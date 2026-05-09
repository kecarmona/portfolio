import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-img-wrap reveal-left">
          <Image
            className="about-img-main"
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=85&w=1000"
            alt="Barber craftsmanship"
            width={500}
            height={667}
          />
          <Image
            className="about-img-accent"
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400"
            alt="Shop detail"
            width={200}
            height={200}
          />
          <div className="about-badge">
            <div className="about-badge-num">15+</div>
            <div className="about-badge-label">Años de Maestría</div>
          </div>
        </div>
        <div className="about-text reveal-right">
          <div className="section-label">Our Story</div>
          <h2>Donde el Arte<br />Encuentra la <em>Tradición</em></h2>
          <p>
            Founded in the heart of the city, The Noble Cut was born from a desire to bring back the golden era of barbering. 
            We believe that a haircut isn&apos;t a chore — it&apos;s a ritual.
          </p>
          <p>
            Our barbers are meticulously trained in both vintage techniques and modern trends, ensuring every client leaves 
            looking like the best version of themselves.
          </p>
          <ul className="about-list">
            <li>Certified Maestros Barberos</li>
            <li>Productos de Importación Premium</li>
            <li>Licores de Cortesía</li>
            <li>Con Cita Previa y Sin Cita</li>
          </ul>
          <a href="#booking" className="btn-primary">Reserva tu Sesión</a>
        </div>
      </div>
    </section>
  );
}