const testimonials = [
  {
    text: "The birthday cake was absolutely stunning and delicious. Everyone at the party loved it! Will definitely order again.",
    name: "Ana García",
    initial: "A",
    color: "bg-[#7ECECA]",
  },
  {
    text: "Best chocolate cake I've ever had. The quality and presentation are both top notch. Sweet Bakery is truly special.",
    name: "María López",
    initial: "M",
    color: "bg-rose",
  },
  {
    text: "Ordered a custom wedding cake and it exceeded all expectations. Beautiful design and incredibly moist. Thank you!",
    name: "Carlos Mora",
    initial: "C",
    color: "bg-[#5BB8B8]",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-rose-light py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-rose font-bold uppercase tracking-widest text-sm mb-1">
          Happy Clients
        </p>
        <h2 className="font-heading text-4xl font-bold text-gray-800 mb-12">
          What They <span className="text-rose italic">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-hover bg-white rounded-3xl p-8 shadow-sm"
            >
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div
                  className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.initial}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-rose">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
