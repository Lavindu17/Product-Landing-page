import React, { useState } from "react";
import {
  Zap,
  Calendar,
  User,
  ArrowRight,
  X,
  Shield,
  Sun,
  CloudRain,
  Smartphone,
  Leaf,
  Settings,
} from "lucide-react";

// Define the feature interface
interface Feature {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  icon: React.ElementType;
  specs: { [key: string]: string };
  benefits: string[];
}

// Premium features data - Extended to 6 features
const features: Feature[] = [
  {
    id: 1,
    title: "Smart Rain Detection System",
    excerpt:
      "Advanced weather sensors detect incoming rain within seconds, automatically triggering protective cover.",
    content: `Our revolutionary Smart Rain Detection System represents the pinnacle of weather-responsive technology. Using advanced atmospheric sensors and machine learning algorithms, WeatherGuard Pro detects incoming precipitation with 99.5% accuracy.

The system continuously monitors humidity levels, barometric pressure, and wind patterns to predict weather changes up to 15 minutes in advance. Multiple sensor arrays positioned strategically provide 360-degree weather monitoring.

The automated response system activates within 30 seconds of rain detection, smoothly deploying the waterproof cover over your clothes. Weather data is processed using our proprietary AI algorithm that learns from local patterns.`,
    imageUrl:
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2070&auto=format&fit=crop",
    category: "Weather Protection",
    icon: CloudRain,
    specs: {
      "Response Time": "< 30 seconds",
      "Weather Accuracy": "99.5%",
      "Sensor Range": "360° coverage",
      "Prediction Window": "15 minutes",
    },
    benefits: [
      "Automatic weather response",
      "Military-grade sensors",
      "AI-powered predictions",
      "Complete clothes protection",
    ],
  },
  {
    id: 2,
    title: "Solar-Powered Drying Technology",
    excerpt:
      "Harness natural sunlight with optimized solar system for faster, eco-friendly clothes drying.",
    content: `Our Solar-Powered Drying Technology transforms your WeatherGuard Pro into an eco-friendly powerhouse. The innovative solar panel array powers smart features and optimizes drying through intelligent positioning.

Advanced airflow optimization creates perfect drying conditions using natural convection enhanced by solar heating. The integrated battery system stores excess energy for cloudy days and night operation.

Smart fabric sensors monitor moisture levels, automatically adjusting ventilation and positioning to optimize drying times. This reduces drying time by up to 40% compared to traditional air drying.`,
    imageUrl:
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=2070&auto=format&fit=crop",
    category: "Solar Technology",
    icon: Sun,
    specs: {
      "Energy Source": "Solar + Battery",
      "Drying Speed": "40% faster",
      "Battery Life": "7 days backup",
      "Power Usage": "< 15W",
    },
    benefits: [
      "Zero energy costs",
      "Environmentally friendly",
      "Automatic sun tracking",
      "UV sterilization included",
    ],
  },
  {
    id: 3,
    title: "All-Weather Durability Shield",
    excerpt:
      "Premium materials ensuring reliable performance in rain, snow, wind, and intense sunlight.",
    content: `The All-Weather Durability Shield ensures flawless performance in any climate. Our premium aluminum alloy frame withstands wind speeds up to 75 mph while maintaining structural integrity.

The protective cover features triple-layer construction with waterproof outer shell, insulating middle layer, and moisture-wicking inner lining. Reinforced anchor points ensure stability in challenging conditions.

Weather sealing technology protects electronics from moisture, dust, and temperature fluctuations. IP67-rated enclosures ensure reliable operation in the harshest environments.`,
    imageUrl:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop",
    category: "Durability",
    icon: Shield,
    specs: {
      "Wind Resistance": "75 mph",
      "Temperature Range": "-20°F to 140°F",
      "Weatherproof Rating": "IP67",
      "Frame Material": "Aerospace aluminum",
    },
    benefits: [
      "Extreme weather resistant",
      "10-year lifespan testing",
      "Corrosion-proof hardware",
      "Modular replacement parts",
    ],
  },
  {
    id: 4,
    title: "Smart Home Integration",
    excerpt:
      "WiFi connectivity, mobile app control, and voice assistant compatibility for seamless automation.",
    content: `The Smart Home Integration Hub transforms WeatherGuard Pro into a connected device that integrates with your modern smart home ecosystem. WiFi connectivity enables real-time monitoring from anywhere.

Voice control compatibility with Alexa, Google Assistant, and Apple HomeKit allows hands-free operation. Advanced automation features let you create custom schedules based on weather forecasts.

Over-the-air updates ensure your system always has the latest features. Cloud backup protects all settings and preferences for seamless data migration.`,
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-7a28a0f3db5c?q=80&w=2070&auto=format&fit=crop",
    category: "Smart Technology",
    icon: Smartphone,
    specs: {
      Connectivity: "WiFi 6",
      "Voice Control": "Alexa, Google, Siri",
      "Mobile App": "iOS & Android",
      "Cloud Storage": "Unlimited",
    },
    benefits: [
      "Remote monitoring",
      "Voice commands",
      "Custom automation",
      "Real-time notifications",
    ],
  },
  {
    id: 5,
    title: "Automated Fabric Care System",
    excerpt:
      "Intelligent fabric recognition and customized care programs for optimal treatment of all materials.",
    content: `The Automated Fabric Care System uses advanced sensors and AI to provide customized care for every type of fabric in your wardrobe. Fabric recognition technology identifies different materials automatically.

Moisture sensors monitor humidity levels at multiple points, ensuring even drying and preventing over-drying that can damage fabrics. Real-time adjustments maintain optimal conditions for each garment type.

Anti-wrinkle technology uses gentle air circulation patterns to minimize creasing during the drying process. Your clothes come out looking freshly pressed without ironing.`,
    imageUrl:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop",
    category: "Fabric Care",
    icon: Leaf,
    specs: {
      "Fabric Types": "Cotton, Wool, Silk, Synthetic",
      "Recognition Accuracy": "98%",
      "Moisture Sensors": "12 point monitoring",
      "Care Programs": "15+ presets",
    },
    benefits: [
      "Prevents fabric damage",
      "Wrinkle-free results",
      "Material-specific care",
      "Learning algorithms",
    ],
  },
  {
    id: 6,
    title: "Energy Management System",
    excerpt:
      "Advanced power optimization maximizes solar efficiency while minimizing environmental impact.",
    content: `Our Energy Management System ensures WeatherGuard Pro operates with minimal environmental impact while maximizing efficiency. Solar energy optimization algorithms analyze sun position and weather patterns.

Smart grid integration allows excess solar energy to be stored or fed back to the grid. Carbon footprint tracking provides detailed reports on environmental impact reduction.

Energy storage optimization uses predictive algorithms to manage battery cycles, extending battery life while ensuring power availability when needed.`,
    imageUrl:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070&auto=format&fit=crop",
    category: "Sustainability",
    icon: Settings,
    specs: {
      "Solar Output": "150W peak",
      "Battery Capacity": "500Wh",
      "Grid Integration": "Yes",
      "Energy Savings": "90% reduction",
    },
    benefits: [
      "Carbon neutral operation",
      "Smart grid compatibility",
      "Predictive energy management",
      "Environmental reporting",
    ],
  },
];

// Modal Component (unchanged)
const FeatureModal: React.FC<{
  feature: Feature | null;
  onClose: () => void;
}> = ({ feature, onClose }) => {
  React.useEffect(() => {
    if (feature) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [feature]);

  if (!feature) return null;

  const IconComponent = feature.icon;

  return (
    <div
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-lg flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 scale-in-95 duration-300 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-800/95 to-slate-900/95 backdrop-blur-lg border-b border-white/10 p-6 flex justify-between items-start z-10 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
              <IconComponent size={16} />
              {feature.category}
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-400/30">
              Premium Feature
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6 leading-tight">
            {feature.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
              <User size={16} className="text-amber-400" />
              <span>WeatherGuard Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
              <Calendar size={16} className="text-blue-400" />
              <span>Latest Technology</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
              <Zap size={16} className="text-green-400" />
              <span>AI-Powered</span>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative mb-8">
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent rounded-2xl"></div>

            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold border border-green-400/30">
              ✨ Premium Feature
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-slate-300 leading-relaxed mb-8">
            {feature.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 bg-white/5 p-4 rounded-xl border border-white/10"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-400/20">
              <h3 className="text-xl font-semibold text-amber-400 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(feature.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between p-3 bg-white/5 rounded-lg"
                  >
                    <span className="text-slate-400">{key}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl border border-blue-400/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Key Benefits
              </h3>
              <div className="space-y-3">
                {feature.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white/5 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">
                    WeatherGuard Engineering
                  </p>
                  <p className="text-sm text-slate-400">
                    Smart Home Innovation Experts
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">
                      Currently Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-white/20"
                >
                  Close
                </button>
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25 font-semibold">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component with Updated Layout
const PremiumFeatureShowcase: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const openModal = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-sm font-medium mb-6 shadow-2xl">
              <Zap className="h-4 w-4 mr-2" />
              Premium Smart Technology
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              Revolutionary Features
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the cutting-edge technology that makes WeatherGuard Pro
              the ultimate smart outdoor drying solution.
            </p>
          </div>

          {/* Feature Grid - 6 Cards in 2 Rows of 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <article
                  key={feature.id}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:border-amber-400/50 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(feature)}
                >
                  <div className="relative">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                        <IconComponent size={12} />
                        {feature.category}
                      </div>
                    </div>

                    {/* Premium Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium border border-white/30">
                        ✨ Premium
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300 line-clamp-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-2 text-sm">
                      {feature.excerpt}
                    </p>

                    {/* Feature Benefits Preview - Reduced to 2 */}
                    <div className="grid grid-cols-1 gap-1 mb-4">
                      {feature.benefits.slice(0, 2).map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center text-xs text-slate-400"
                        >
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Available</span>
                      </div>

                      <div className="flex items-center gap-1 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                        <span className="text-xs font-medium">Learn More</span>
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-3">
                Experience the Future of Outdoor Drying
              </h3>
              <p className="text-slate-300 mb-6 text-sm">
                Join thousands of satisfied customers who have transformed their
                laundry routine with WeatherGuard Pro's intelligent technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/25 text-sm">
                  Order WeatherGuard Pro
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-white/20 text-sm">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureModal feature={selectedFeature} onClose={closeModal} />
    </>
  );
};

export default PremiumFeatureShowcase;
