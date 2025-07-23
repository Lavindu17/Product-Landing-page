import React from "react";
import { Shield, Sun, CloudRain } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                About WeatherGuard Pro
              </h2>
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="h-5 w-5 text-amber-400" />
                <span className="font-medium">
                  Smart Outdoor Drying Solution
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 mb-8">
              <div className="prose prose-lg text-slate-200">
                <p className="mb-4">
                  Revolutionary weather-responsive technology meets premium
                  outdoor living. Our WeatherGuard Pro cloth rack represents the
                  pinnacle of intelligent home solutions, combining advanced
                  sensors with sleek design to deliver the ultimate outdoor
                  drying experience.
                </p>

                <p className="mb-4">
                  Engineered for the modern home, this isn't just a cloth rack –
                  it's your personal laundry assistant. Harness the power of
                  natural sunlight for eco-friendly drying, while our
                  intelligent rain detection system ensures your clothes stay
                  perfectly protected when weather conditions change.
                </p>

                <p>
                  Built with premium materials and cutting-edge technology,
                  WeatherGuard Pro transforms the simple act of drying clothes
                  into a seamless, worry-free experience. Set it, forget it, and
                  let nature do the work while our smart system handles the
                  rest.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                Premium Features
              </h3>
              <div className="grid grid-cols-1 gap-6 w-full">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Sun className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-full">
                    <p className="font-medium text-white">
                      Solar-Optimized Drying
                    </p>
                    <p className="text-slate-300 text-sm">
                      Maximizes natural sunlight exposure for faster,
                      eco-friendly drying
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <CloudRain className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-full">
                    <p className="font-medium text-white">
                      Intelligent Rain Protection
                    </p>
                    <p className="text-slate-300 text-sm">
                      Automatic coverage system activates instantly when rain is
                      detected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <img
                src="../public/shirt.png"
                alt="WeatherGuard Pro - Smart Weather-Responsive Cloth Rack"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>

            {/* Premium Stats */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-amber-300/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-amber-100 text-sm">Weather Safe</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-blue-300/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-100 text-sm">Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
