const menuItems = [
  {
    name: "Heart Shaped Cake",
    description: "Special occasion / 6 servings",
    price: "$120",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&q=80",
  },
  {
    name: "Dark Chocolate Dream",
    description: "Classic / 8 servings",
    price: "$115",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80",
  },
  {
    name: "Strawberry Delight",
    description: "Seasonal / 6 servings",
    price: "$135",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&q=80",
  },
];

export default function Menu() {
  return (
    <section className="bg-[#FFF8F5] py-20" id="menu">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-rose font-bold uppercase tracking-widest text-sm mb-1">
            Chef&apos;s Picks
          </p>
          <h2 className="font-heading text-4xl font-bold text-gray-800">
            Recommendation <span className="text-rose italic">Menu</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="card-hover bg-white rounded-2xl p-5 flex items-center gap-5 shadow-sm"
            >
              <div className="img-zoom w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-gray-800">{item.name}</h4>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
              <p className="text-rose font-bold text-xl">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
