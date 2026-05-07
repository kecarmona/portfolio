"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#7ECECA] py-20 relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-heading text-4xl font-bold text-white mb-4">
          Ready to Order?
        </h2>
        <p className="text-white/80 mb-10 text-lg">
          Place your custom cake order today and let us sweeten your celebration!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-rose transition-colors w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-rose transition-colors w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-rose transition-colors w-full"
            />
            <select
              value={formData.cakeType}
              onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
              className="border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-500 focus:outline-none focus:border-rose transition-colors w-full appearance-none"
            >
              <option value="">Select Cake Type</option>
              <option value="birthday">Birthday Cake</option>
              <option value="wedding">Wedding Cake</option>
              <option value="cupcakes">Cupcakes</option>
              <option value="custom">Custom Order</option>
            </select>
          </div>
          <textarea
            rows={3}
            placeholder="Special requests..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border border-gray-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-rose transition-colors w-full resize-none mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-rose text-white font-bold px-10 py-3 rounded-full pulse-btn hover:bg-rose-soft transition-all shadow-lg w-full md:w-auto"
          >
            Send Order Request 🎂
          </button>
        </form>
      </div>
    </section>
  );
}
