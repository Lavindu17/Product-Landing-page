import React from "react";
import { Brain, Heart, Users, Zap, Shield, Compass } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-emerald-600" />,
      title: "Anxiety & Depression",
      description:
        "Evidence-based treatment for anxiety disorders, depression, and mood-related challenges using CBT and mindfulness techniques.",
      approach: "Cognitive Behavioral Therapy (CBT)",
      audience: "Adults experiencing anxiety, depression, or mood disorders",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Trauma & PTSD",
      description:
        "Specialized trauma-informed therapy to help process difficult experiences and develop healthy coping mechanisms.",
      approach: "EMDR and Trauma-Focused CBT",
      audience: "Individuals with trauma history or PTSD symptoms",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Relationship Counseling",
      description:
        "Support for couples and families to improve communication, resolve conflicts, and strengthen emotional bonds.",
      approach: "Gottman Method and EFT",
      audience: "Couples and families seeking relationship improvement",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: "Stress Management",
      description:
        "Learn practical strategies to manage work stress, life transitions, and overwhelming responsibilities effectively.",
      approach: "Mindfulness-Based Stress Reduction",
      audience: "Professionals and individuals facing high stress levels",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Addiction Recovery",
      description:
        "Comprehensive support for substance abuse recovery, including relapse prevention and healthy lifestyle development.",
      approach: "Motivational Interviewing and 12-Step Integration",
      audience: "Individuals in recovery or seeking sobriety",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Compass className="h-8 w-8 text-cyan-600" />,
      title: "Life Transitions",
      description:
        "Navigate major life changes such as career shifts, loss, divorce, or other significant transitions with confidence.",
      approach: "Solution-Focused Brief Therapy",
      audience: "Adults experiencing major life changes",
      gradient: "from-cyan-500 to-blue-500",
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
      id="services"
      className="py-20 bg-gradient-to-br from-emerald-50/50 via-teal-50/50 to-cyan-50/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Counseling Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your unique needs
            and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200/50 transform hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-100/50">
                    <p className="text-sm font-medium text-emerald-800">
                      Approach: {service.approach}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-3 border border-cyan-100/50">
                    <p className="text-sm font-medium text-cyan-800">
                      For: {service.audience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Learn More About My Approach</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
