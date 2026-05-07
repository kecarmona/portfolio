const services = [
  { icon: "🎂", title: "Birthday Cake", delay: "" },
  { icon: "🧁", title: "Cup Cake", delay: "animation-delay-500" },
  { icon: "🍫", title: "Chocolate Cake", delay: "animation-delay-1000" },
  { icon: "🎉", title: "Celebration Cake", delay: "animation-delay-1500" },
];

export default function Services() {
  return (
    <section
      className="bg-rose-light py-20 scallop-top scallop-bottom relative"
      id="services"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-rose font-bold uppercase tracking-widest text-sm mb-1">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl font-bold text-gray-800">
            Main <span className="text-rose italic">Service</span> We Provide
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <div className={`text-5xl mb-4 float ${service.delay}`}>
                {service.icon}
              </div>
              <h3 className="text-rose font-bold uppercase tracking-wide text-sm mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border-2 border-gray-400 text-gray-600 font-bold px-8 py-2 rounded-full hover:border-rose hover:text-rose transition-all">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
