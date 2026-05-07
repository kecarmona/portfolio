const features = [
  {
    icon: "🏅",
    title: "Bootstrap 4",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry since the 1500s.",
  },
  {
    icon: "✏️",
    title: "Free Fonts",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry since the 1500s.",
  },
  {
    icon: "💻",
    title: "Clean Code",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry since the 1500s.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16 mt-6" id="about">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((feature) => (
          <div key={feature.title} className="card-hover p-6 rounded-2xl">
            <div className="w-16 h-16 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">{feature.icon}</span>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
