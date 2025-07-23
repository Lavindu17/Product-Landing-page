import React from "react";
import { CloudRain, Phone, Mail, MapPin, Truck, Shield } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-2 shadow-lg">
                <CloudRain className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">WeatherGuard Pro</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Smart, solar-powered drying + automatic rain protection for your
              outdoor laundry.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                {/* LinkedIn SVG */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                {/* Facebook SVG */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.51-3.62.99 0 2.02.18 2.02.18v2.22h-1.13c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7.03C18.34 21.25 22 17.09 22 12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              {[
                ["Home", "home"],
                ["Features", "features"],
                ["How It Works", "how-it-works"],
                ["Testimonials", "testimonials"],
                ["FAQ", "faq"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Standard Model</li>
              <li>Deluxe Model</li>
              <li>Commercial Model</li>
              <li>Custom Solutions</li>
              <li>Request Demo</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-2 mt-0.5" />
                <div>
                  235/A Wawila Road
                  <br />
                  (70620), Sri Lanka
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-2" />
                <a
                  href="tel:+94718000623"
                  className="hover:text-amber-400 transition-colors"
                >
                  (+94) 71 8000 623
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-2" />
                <a
                  href="mailto:info@weatherguardpro.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@weatherguardpro.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 WeatherGuard Pro. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-slate-400 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Warranty Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
