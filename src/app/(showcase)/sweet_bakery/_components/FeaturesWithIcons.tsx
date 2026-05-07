const features = [
  {
    icon: "🎨",
    title: "Free Fonts",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard.",
    bgColor: "bg-rose-light",
  },
  {
    icon: "✅",
    title: "Easy Setup",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard.",
    bgColor: "bg-[#D6F5F5]",
  },
  {
    icon: "💎",
    title: "Clean Code",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard.",
    bgColor: "bg-rose-light",
  },
];

export default function FeaturesWithIcons() {
  return (
    <section className="bg-white py-20" id="features">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Cake image with ring */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            <div
              className="absolute inset-0 rounded-full border-4 border-dashed border-[#7ECECA] opacity-40 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div className="absolute inset-4 rounded-full border-2 border-rose-soft opacity-50"></div>
            <div className="absolute inset-8 rounded-full overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80"
                alt="Featured cake"
                className="w-full h-full object-cover"
              />
            </div>
            {/* dots */}
            <div className="absolute top-2 right-6 w-4 h-4 bg-[#7ECECA] rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-rose rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-rose-soft rounded-full"></div>
          </div>
        </div>

        {/* Features list */}
        <div className="flex-1">
          <p className="text-rose font-bold uppercase tracking-widest text-sm mb-1">
            Why Choose Us
          </p>
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-10">
            Features <span className="text-rose italic">With</span> Icons
          </h2>
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-5 items-start card-hover p-4 rounded-2xl"
              >
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
