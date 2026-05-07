const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
];

const cakeLinks = [
  { label: "Birthday Cakes", href: "#" },
  { label: "Wedding Cakes", href: "#" },
  { label: "Cupcakes", href: "#" },
  { label: "Custom Orders", href: "#" },
];

const contactInfo = [
  "📞 +1-866-786-7981",
  "📍 123 Baker Street",
  "✉️ hello@sweetbakery.com",
  "🕐 Mon–Sat: 8am – 8pm",
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-rose rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🎂</span>
              </div>
              <p className="font-display text-rose text-xl">Sweet Bakery</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quality products made with love. Bringing sweetness to every celebration since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-rose mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-rose transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Cakes */}
          <div>
            <h4 className="font-bold text-rose mb-4">Our Cakes</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {cakeLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-rose transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-rose mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {contactInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
          <p>© 2025 Sweet Bakery. All rights reserved. Made with 🩷</p>
        </div>
      </div>
    </footer>
  );
}
