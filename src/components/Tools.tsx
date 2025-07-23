import React from "react";
import {
  ExternalLink,
  Clock,
  CheckCircle,
  Shield,
  BarChart3,
  Heart,
  Brain,
} from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      title: "DASS-21 Assessment",
      subtitle: "Depression, Anxiety & Stress Scale",
      features: [
        "5-minute completion time",
        "Measures depression, anxiety, and stress levels",
        "Clinically validated screening tool",
        "Immediate results with explanations",
      ],
      link: "https://meantal-health-assessement.netlify.app/",
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Relationship Health Check",
      subtitle: "Assess Your Relationship Patterns",
      features: [
        "10-minute comprehensive assessment",
        "Evaluates communication and connection",
        "Based on Gottman research",
        "Personalized recommendations",
      ],
      link: "#",
    },
    {
      icon: <Brain className="h-8 w-8 text-emerald-600" />,
      title: "Mindfulness Assessment",
      subtitle: "Evaluate Your Present-Moment Awareness",
      features: [
        "7-minute mindfulness evaluation",
        "Measures attention and awareness",
        "Research-backed questionnaire",
        "Includes mindfulness exercises",
      ],
      link: "#",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="tools"
      className="py-20 bg-gradient-to-br from-emerald-50 to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Free Mental Health Assessment Tools
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take advantage of these professional-grade assessment tools to
            better understand your mental health and identify areas where
            counseling might be beneficial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200"
            >
              <div className="flex items-center mb-4">
                {tool.icon}
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{tool.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.open(tool.link, "_blank")}
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center"
              >
                Take Assessment
                <ExternalLink className="h-4 w-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-start mb-4">
            <Shield className="h-6 w-6 text-amber-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Important Disclaimer
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                These assessment tools are for informational and educational
                purposes only. They are not intended to replace professional
                mental health evaluation or treatment. Results should be
                discussed with a qualified mental health professional for proper
                interpretation and guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Discuss Your Results - Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tools;
