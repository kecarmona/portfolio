export default function NavBar() {
  const navLinks = [
    { href: "#", label: "Home", active: true },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#menu", label: "Menu" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-rose rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🎂</span>
          </div>
          <div>
            <p className="font-display text-rose text-lg leading-none">Sweet</p>
            <p className="font-display text-mint text-sm leading-none">Bakery</p>
          </div>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-body font-bold text-sm text-gray-600">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link transition-colors ${
                  link.active ? "text-rose font-bold" : "hover:text-rose"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-rose transition-colors relative">
            🛒
            <span className="absolute -top-1 -right-1 bg-rose text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <button className="hover:text-rose transition-colors">♡</button>
          <button className="hover:text-rose transition-colors">🔍</button>
        </div>
      </div>
    </nav>
  );
}
