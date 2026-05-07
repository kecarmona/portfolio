export default function Hero() {
  return (
    <section className="bg-[#7ECECA] scallop-bottom scallop-hero-bottom relative overflow-hidden pt-16 pb-24">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-rose-soft rounded-full opacity-60"></div>
      <div className="absolute top-24 left-32 w-2 h-2 bg-white rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 bg-rose rounded-full opacity-30"></div>
      <div className="absolute top-16 right-40 w-3 h-3 bg-white rounded-full opacity-50"></div>
      <div className="absolute bottom-24 right-16 w-5 h-5 bg-rose-soft rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-white">
          <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight fade-up uppercase">
            Quality Products...
            <br />
            <span className="italic font-normal">With Sweet, Eggs</span>
            <br />
            & Breads
          </h1>
          <div className="flex gap-4 mt-10 fade-up delay-2">
            <a
              href="#menu"
              className="bg-rose text-white font-bold px-6 py-3 rounded-full pulse-btn hover:bg-rose-soft transition-all shadow-lg"
            >
              Order Now
            </a>
            <a
              href="#products"
              className="bg-white text-gray-700 font-bold px-6 py-3 rounded-full hover:bg-rose-light transition-all shadow-md"
            >
              Products
            </a>
          </div>
        </div>

        {/* Image collage */}
        <div className="flex-1 relative h-80 md:h-96 fade-up delay-3">
          <div className="absolute left-0 bottom-0 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl rotate-[-4deg] img-zoom">
            <img
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=80"
              alt="Pink drip cake"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute left-28 top-0 w-52 h-64 rounded-2xl overflow-hidden shadow-2xl img-zoom z-10">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80"
              alt="Chocolate cake"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-0 top-6 w-48 h-52 rounded-2xl overflow-hidden shadow-2xl rotate-[3deg] img-zoom z-20">
            <img
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80"
              alt="Berry cake"
              className="w-full h-full object-cover"
            />
          </div>
          {/* floating badge */}
          <div className="absolute bottom-8 right-4 bg-white rounded-xl shadow-lg p-3 z-30 fade-up delay-4 float">
            <p className="text-xs text-gray-500">Fresh baked today</p>
            <p className="text-rose font-bold text-sm">🎂 12 new cakes!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
