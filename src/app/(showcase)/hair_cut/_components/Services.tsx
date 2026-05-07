const services = [
  {
    num: "01",
    name: "El Corte de Autor",
    desc: "A tailored haircut including a relaxing wash and precision style. The classic noble experience, elevated.",
    price: 45,
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M6 3 L12 21 M18 3 L12 21 M8 9 L16 9 M7 15 L17 15" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Afeitado con Toalla Caliente",
    desc: "Traditional straight razor shave with essential oils and steaming hot towels. Pure, timeless ritual.",
    price: 35,
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2 C6.5 2 2 6.5 2 12 C2 17.5 6.5 22 12 22" />
        <path d="M12 6 C12 6 16 8 16 12 C16 14.5 14.2 16.8 12 17.5" />
        <path d="M19 15 L22 12 L19 9 M22 12 L15 12" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Esculpido de Barba",
    desc: "Shape and line-up your beard with precision tools and premium balms. Bold definition, sharp edges.",
    price: 25,
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 7 Q12 4 21 7 L21 14 Q12 17 3 14 Z" />
        <path d="M7 7 L7 14 M12 6 L12 15 M17 7 L17 14" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "El Ritual Completo",
    desc: "The ultimate package — Haircut, Beard Trim, Facial, and a complimentary whiskey. The full experience.",
    price: 90,
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2 L14.5 9 L22 9 L16 14 L18.5 21 L12 17 L5.5 21 L8 14 L2 9 L9.5 9 Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-header">
        <div className="reveal">
          <div className="section-label">Lo Que Ofrecemos</div>
          <h2 className="section-title">NUESTROS<br /><em>Servicios</em></h2>
        </div>
        <p
          className="reveal"
          data-delay="2"
          style={{ maxWidth: '300px', fontSize: '13px', color: '#555', lineHeight: '1.8', textAlign: 'right' }}
        >
          Each service is a carefully crafted ritual, delivered by certified master barbers using only premium products.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card reveal" data-delay={service.num.charAt(0)} key={service.num}>
            <div className="service-num">{service.num}</div>
            <div className="service-icon-wrap">{service.icon}</div>
            <div className="service-name">{service.name}</div>
            <p className="service-desc">{service.desc}</p>
            <div className="service-price"><span>$</span>{service.price}</div>
            <div className="service-arrow">
              <svg viewBox="0 0 24 24" fill="none">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7,7 17,7 17,17" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}