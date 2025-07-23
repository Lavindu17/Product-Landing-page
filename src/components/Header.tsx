import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-emerald-100/50 border-b border-emerald-100/30"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              BrightMind Care Counseling
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href.slice(1))}
                className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+94718000623"
              className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
            >
              <Phone className="h-4 w-4 mr-1" />
              (+94) 71 8000 623
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 hover:text-emerald-600 transition-colors duration-300 p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-emerald-100/30 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="block w-full text-left px-3 py-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg transition-all duration-300 font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-3 py-3 border-t border-emerald-100/30 mt-2">
                <a
                  href="tel:+94718000623"
                  className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors duration-300 mb-3 font-medium"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (+94) 71 8000 623
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
