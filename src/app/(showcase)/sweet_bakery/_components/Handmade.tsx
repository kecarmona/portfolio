export default function Handmade() {
  return (
    <section className="py-20 bg-[#FFF8F5]" id="handmade">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-rose font-bold uppercase tracking-widest text-sm mb-2">
            Hand Made Products
          </p>
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
            Made With Love
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
          </p>
          <a
            href="#"
            className="bg-rose text-white font-bold px-8 py-3 rounded-full hover:bg-rose-soft transition-all shadow-lg pulse-btn inline-block"
          >
            Learn More
          </a>
        </div>
        <div className="flex-1 img-zoom rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80"
            alt="Baker making cake"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
