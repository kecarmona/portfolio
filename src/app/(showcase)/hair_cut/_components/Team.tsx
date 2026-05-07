import Image from "next/image";

const teamMembers = [
  {
    name: "MARCUS VANE",
    role: "Fundador y Maestro Barbero",
    bio: "15 years perfecting the craft. Trained in London and New York. Specializes in classic fades and bespoke styling.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "JULIAN THORNE",
    role: "Estilista Principal",
    bio: "Master of hot towel shaves and beard sculpting. Known for his meticulous attention to detail.",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "ELIAS GREY",
    role: "Estilista",
    bio: "Contemporary cuts with a bold editorial edge. Expert in textured styles and modern undercuts.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Team() {
  return (
    <section id="team">
      <div className="section-header">
        <div className="reveal">
          <div className="section-label">Los Maestros</div>
          <h2 className="section-title">CONOCE A LOS<br /><em>Barberos</em></h2>
        </div>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, i) => (
          <div className="team-card reveal" data-delay={i + 1} key={member.name}>
            <Image 
              src={member.image} 
              alt={member.name}
              width={400}
              height={600}
            />
            <div className="team-overlay"></div>
            <div className="team-info">
              <div className="team-role">{member.role}</div>
              <div className="team-name">{member.name}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}