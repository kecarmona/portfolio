"use client";

import { useState } from "react";

const categories = ["All Sweets", "Cakes", "Cupcakes", "Breads"];

const products = [
  {
    id: 1,
    name: "Girl's Cake",
    price: "$28",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
    category: "Cakes",
  },
  {
    id: 2,
    name: "Summer Mood",
    price: "$32",
    image: "https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=500&q=80",
    category: "Cakes",
  },
  {
    id: 3,
    name: "Birthday Set",
    price: "$45",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80",
    category: "Cakes",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All Sweets");

  return (
    <section className="py-20 bg-white" id="products" style={{ paddingTop: "48px" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-rose font-bold uppercase tracking-widest text-sm mb-1">
            Fresh & Delicious
          </p>
          <h2 className="font-heading text-4xl font-bold text-gray-800">
            Our <span className="text-rose italic">Delicious</span> Products
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-bold px-6 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-[#7ECECA] text-white shadow"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-rose hover:text-rose"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-hover bg-[#FFF8F5] rounded-3xl overflow-hidden shadow-sm group"
            >
              <div className="img-zoom h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-heading font-bold text-gray-800">{product.name}</h4>
                    <p className="text-rose font-bold text-lg">{product.price}</p>
                  </div>
                  <button className="bg-rose text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-rose-soft transition-all shadow-md">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-10">
          <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:border-rose hover:text-rose transition-all text-sm">
            ‹
          </button>
          <button className="w-8 h-8 rounded-full bg-rose text-white font-bold text-sm">
            1
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:border-rose hover:text-rose transition-all text-sm">
            2
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:border-rose hover:text-rose transition-all text-sm">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
