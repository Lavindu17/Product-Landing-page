import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Dr. Mitchell helped me navigate through one of the most difficult periods of my life. Her compassionate approach and practical tools made all the difference in my recovery.",
      name: "Sarah K.",
      outcome: "Overcame anxiety and depression after 6 months of therapy",
      rating: 5,
    },
    {
      quote:
        "The relationship counseling sessions saved my marriage. We learned to communicate better and rediscovered our connection. I'm grateful for the guidance and support.",
      name: "Michael R.",
      outcome: "Improved relationship satisfaction and communication",
      rating: 5,
    },
    {
      quote:
        "I was skeptical about therapy at first, but Dr. Mitchell created such a safe space. I finally felt heard and understood. The trauma therapy has been life-changing.",
      name: "Jennifer L.",
      outcome: "Successfully processed trauma and reduced PTSD symptoms",
      rating: 5,
    },
    {
      quote:
        "The stress management techniques I learned have completely transformed how I handle work pressure. I feel more balanced and in control of my life.",
      name: "David C.",
      outcome: "Developed effective stress management strategies",
      rating: 5,
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real stories from clients who have found healing and growth through
            therapy
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Quote className="h-12 w-12 text-emerald-600" />
            </div>

            <blockquote className="text-xl md:text-2xl text-slate-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-lg font-semibold text-slate-800 mb-1">
                {testimonials[currentIndex].name}
              </p>

              <p className="text-emerald-600 font-medium">
                {testimonials[currentIndex].outcome}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-slate-200"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-slate-200"
          >
            <ChevronRight className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-emerald-600" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
