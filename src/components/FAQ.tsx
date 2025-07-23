import React, { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Shield } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the Smart Rain Detection System work?",
      answer:
        "WeatherGuard Pro uses advanced atmospheric sensors and machine learning algorithms to detect incoming precipitation with 99.5% accuracy. The system monitors humidity levels, barometric pressure, and wind patterns to predict weather changes up to 15 minutes in advance, automatically deploying the protective cover within 30 seconds of rain detection.",
    },
    {
      question: "How much energy does WeatherGuard Pro consume?",
      answer:
        "WeatherGuard Pro is completely solar-powered and energy-efficient, consuming less than 15W of power. The integrated solar panel array generates up to 150% of operational requirements on sunny days, storing excess energy for up to 7 days of autonomous operation during cloudy weather.",
    },
    {
      question: "What weather conditions can it withstand?",
      answer:
        "Our All-Weather Durability Shield is engineered to withstand extreme conditions including wind speeds up to 75 mph, temperature ranges from -20°F to 140°F, and is IP67-rated for complete weatherproofing. The aerospace-grade aluminum frame and marine-grade hardware ensure reliable operation in any climate.",
    },
    {
      question: "Is installation difficult? Do I need professional help?",
      answer:
        "WeatherGuard Pro features a modular design for easy installation. Most customers can set it up in 2-3 hours using our comprehensive installation guide and video tutorials. Professional installation service is available in select areas, and our support team provides remote assistance if needed.",
    },
    {
      question: "Can I control it remotely through my smartphone?",
      answer:
        "Yes! WeatherGuard Pro includes WiFi 6 connectivity and a premium mobile app for iOS and Android. You can monitor weather conditions, control settings, receive real-time notifications, and integrate with Alexa, Google Assistant, and Apple HomeKit for voice control and smart home automation.",
    },
    {
      question: "How does it protect different fabric types?",
      answer:
        "Our Automated Fabric Care System uses near-infrared spectroscopy to identify different materials (cotton, wool, silk, synthetics) and automatically adjusts drying parameters. The system includes 12-point moisture monitoring, anti-wrinkle technology, and UV protection to prevent fabric damage and fading.",
    },
    {
      question: "What's included in the warranty?",
      answer:
        "WeatherGuard Pro comes with a comprehensive 2-year warranty covering all components, sensors, and smart technology. This includes free software updates, technical support, and replacement parts. Extended warranty options up to 5 years are available for additional peace of mind.",
    },
    {
      question: "How quickly can it respond to sudden weather changes?",
      answer:
        "The system responds to detected rain within 30 seconds, but our predictive algorithms typically provide 15 minutes advance warning. For sudden weather changes, emergency override sensors can deploy protection in under 10 seconds, ensuring complete clothes protection even during unexpected downpours.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-sm font-medium mb-8 shadow-2xl">
            <Zap className="h-4 w-4 mr-2" />
            Smart Technology Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about WeatherGuard Pro's advanced
            features and smart technology
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-2xl group"
              >
                <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-amber-300 transition-colors duration-300">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-amber-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0 group-hover:text-amber-400 transition-colors duration-300" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Need More Information?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our WeatherGuard Pro specialists are ready to answer your
              questions and help you choose the perfect smart drying solution
              for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                Contact Our Experts
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20">
                Request Product Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg font-bold text-amber-400">24/7</div>
                <div className="text-xs text-slate-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">2 Year</div>
                <div className="text-xs text-slate-400">Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">Free</div>
                <div className="text-xs text-slate-400">Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
