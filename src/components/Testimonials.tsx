import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  CheckCircle,
} from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "WeatherGuard Pro has completely transformed our laundry routine! No more rushing to bring clothes inside when it starts raining. The smart detection works flawlessly and our clothes are always perfectly dry.",
      name: "Amanda Chen",
      location: "Colombo, Sri Lanka",
      outcome: "Saved 15+ hours per week on laundry management",
      rating: 5,
      product: "WeatherGuard Pro Standard",
      timeUsed: "8 months",
    },
    {
      quote:
        "As a working mother of three, this has been a game-changer. The solar drying is incredibly efficient, and I love that it's environmentally friendly. The app notifications give me complete peace of mind.",
      name: "Priya Jayawardena",
      location: "Kandy, Sri Lanka",
      outcome: "Reduced energy bills by 85% and gained work-life balance",
      rating: 5,
      product: "WeatherGuard Pro Deluxe",
      timeUsed: "1 year",
    },
    {
      quote:
        "The durability is outstanding! We've had it through monsoon season and intense heat waves. The automatic fabric care ensures our expensive clothes are treated perfectly every time.",
      name: "Rohit Mendis",
      location: "Galle, Sri Lanka",
      outcome: "Protected premium clothing worth over LKR 500,000",
      rating: 5,
      product: "WeatherGuard Pro Commercial",
      timeUsed: "2 years",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-sm font-medium mb-8 shadow-2xl">
            <CheckCircle className="h-4 w-4 mr-2" />
            Verified Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            Customer Success Stories
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how WeatherGuard Pro has transformed outdoor drying
            experiences for families across Sri Lanka
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed font-light">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-xl font-bold text-white mb-2">
                {testimonials[currentIndex].name}
              </p>

              <p className="text-slate-300 mb-3">
                {testimonials[currentIndex].location}
              </p>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30 mb-4">
                <p className="text-green-300 font-semibold flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {testimonials[currentIndex].outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-lg rounded-full p-4 shadow-2xl hover:shadow-amber-500/25 hover:bg-white/20 transition-all duration-300 border border-white/20 group"
          >
            <ChevronLeft className="h-6 w-6 text-slate-300 group-hover:text-amber-400 transition-colors duration-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-lg rounded-full p-4 shadow-2xl hover:shadow-amber-500/25 hover:bg-white/20 transition-all duration-300 border border-white/20 group"
          >
            <ChevronRight className="h-6 w-6 text-slate-300 group-hover:text-amber-400 transition-colors duration-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 scale-125 shadow-lg"
                  : "bg-slate-500 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators - FIXED VERSION */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Join 2,500+ Satisfied Customers
            </h3>
            <p className="text-slate-300">
              WeatherGuard Pro has transformed outdoor drying experiences across
              Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">98%</div>
              <div className="text-sm text-slate-400">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-sm text-slate-400">Weather Protection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                2,500+
              </div>
              <div className="text-sm text-slate-400">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">5★</div>
              <div className="text-sm text-slate-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
