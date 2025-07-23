import React from "react";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-emerald-400 mr-2" />
              <h3 className="text-xl font-bold">Bright Mind Counseling</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Professional, compassionate counseling services to help you find
              your path to mental wellness.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/priyantha-sajeewan-b94785196/"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
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
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                aria-label="Psychology Today"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("tools")}
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Assessment Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Anxiety & Depression</li>
              <li>Trauma & PTSD</li>
              <li>Relationship Counseling</li>
              <li>Stress Management</li>
              <li>Addiction Recovery</li>
              <li>Life Transitions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" />
                <div className="text-slate-300 text-sm">
                  235/A,
                  <br />
                  Wawila Road (70620)
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2" />
                <a
                  href="tel:+9471800623"
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  (+94) 71 8000 623
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                <a
                  href="mailto:sajeevansltas@gmail.com"
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  sajeevansltas@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Bright Mind Counseling. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
            >
              HIPAA Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
