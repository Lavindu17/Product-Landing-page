import React from "react";
import { ShoppingCart, PlayCircle, Sun, CloudRain } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Subtle tech pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f59e0b%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

        {/* Floating weather icons */}
        <div className="absolute top-32 left-1/4 w-4 h-4 text-amber-400/40 animate-bounce">
          <Sun className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 right-1/4 w-6 h-6 text-blue-400/40 animate-bounce delay-700">
          <CloudRain className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-sm font-medium mb-8 shadow-2xl">
            <Sun className="h-4 w-4 mr-2" />
            Smart Weather-Responsive Technology
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Never Worry About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 block">
              Weather Again
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Introducing WeatherGuard Pro - the revolutionary smart cloth rack
            that harnesses sunlight for perfect drying and automatically
            protects your clothes when rain approaches.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ShoppingCart className="h-5 w-5 mr-2 relative z-10" />
              <span className="relative z-10">Order Now - Limited Stock</span>
            </button>

            <button className="group relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <PlayCircle className="h-5 w-5 mr-2 relative z-10" />
              <span className="relative z-10">Watch Demo Video</span>
            </button>
          </div>

          {/* Premium Product Showcase */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-800/30 to-indigo-800/30 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/10">
              <img
                src="../public/weatherguard-hero.jpg"
                alt="WeatherGuard Pro Smart Cloth Rack - Outdoor drying with automatic rain protection"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

              {/* Feature Highlights */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-amber-400/30">
                <div className="flex items-center text-white">
                  <Sun className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">Solar Powered</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-blue-400/30">
                <div className="flex items-center text-white">
                  <CloudRain className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">Rain Detection</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/40">
                <div className="flex items-center text-slate-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold">
                    Smart & Automatic
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-80 animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-80 animate-pulse delay-700 shadow-lg"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse delay-300 shadow-lg"></div>

            {/* Trust Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-amber-400">★★★★★</div>
                  <div className="text-xs text-slate-300">500+ Reviews</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">2 Year</div>
                  <div className="text-xs text-slate-300">Warranty</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">Free</div>
                  <div className="text-xs text-slate-300">Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
