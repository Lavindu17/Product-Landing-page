import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Truck,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://silnkythlmluxjjzxgvm.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbG5reXRobG1sdXhqanp4Z3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjIxNDMsImV4cCI6MjA2ODA5ODE0M30.Ik-H7d-tvErGQSNvq449_UKZvmw8W9rbINRKLZj0EVI";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "email",
    productInterest: "WeatherGuard Pro Standard",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Insert form data into Supabase
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          contact_method: formData.contactMethod,
          product_interest: formData.productInterest,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message || "Failed to submit form");
      }

      // If successful
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        contactMethod: "email",
        productInterest: "WeatherGuard Pro Standard",
        message: "",
      });

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);

      // More user-friendly error messages
      let errorMessage =
        "An error occurred while submitting your form. Please try again.";

      if (error instanceof Error) {
        if (
          error.message.includes("relation") &&
          error.message.includes("does not exist")
        ) {
          errorMessage =
            "Database table not found. Please contact the administrator.";
        } else if (error.message.includes("permission")) {
          errorMessage = "Permission denied. Please contact the administrator.";
        } else {
          errorMessage = error.message;
        }
      }

      alert(`Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-sm font-medium mb-8 shadow-2xl">
            <Shield className="h-4 w-4 mr-2" />
            Premium Smart Home Solution
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            Get Your WeatherGuard Pro
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform your outdoor drying experience with intelligent weather
            protection. Contact our experts for personalized consultation and
            exclusive offers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <Send className="h-4 w-4 text-white" />
              </div>
              Request Information
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 bg-white/5 backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 bg-white/5 backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 bg-white/5 backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 text-white"
                    placeholder="071 234 5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 bg-white/5 backdrop-blur-sm transition-all duration-300 text-white"
                  >
                    <option value="WeatherGuard Pro Standard">
                      WeatherGuard Pro Standard
                    </option>
                    <option value="WeatherGuard Pro Deluxe">
                      WeatherGuard Pro Deluxe
                    </option>
                    <option value="WeatherGuard Pro Commercial">
                      WeatherGuard Pro Commercial
                    </option>
                    <option value="Custom Solution">Custom Solution</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contactMethod"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 bg-white/5 backdrop-blur-sm transition-all duration-300 text-white"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message / Specific Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 bg-white/5 backdrop-blur-sm transition-all duration-300 resize-none placeholder:text-slate-400 text-white"
                    placeholder="Tell us about your outdoor space, installation requirements, or specific features you're interested in..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-amber-500/25 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-2"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Get Expert Consultation
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-400/30">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Thank You for Your Interest!
                </h3>
                <p className="text-slate-300 mb-4">
                  Our WeatherGuard Pro specialists will contact you within 24
                  hours with personalized recommendations.
                </p>
                <p className="text-sm text-slate-400">
                  For immediate assistance, call (+94) 71 8000 623
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      WeatherGuard Pro Headquarters
                    </p>
                    <p className="text-slate-300">
                      235/A Wawila Road <br />
                      Smart Home Solutions Center <br />
                      Sri Lanka (70620)
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sales & Support</p>
                    <a
                      href="tel:+94718000623"
                      className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      (+94) 71 8000 623
                    </a>
                    <p className="text-sm text-slate-400 mt-1">
                      24/7 Technical Support
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email Support</p>
                    <a
                      href="mailto:info@weatherguardpro.com"
                      className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      info@weatherguardpro.com
                    </a>
                    <p className="text-sm text-slate-400 mt-1">
                      Response within 4 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Service Hours</p>
                    <div className="text-slate-300 space-y-1 text-sm">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-amber-400 font-medium">
                        Emergency Support: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Features */}
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <h4 className="font-semibold text-amber-300 mb-4 flex items-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <Shield className="text-white text-xs" />
                </div>
                Premium Service Guarantees
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-amber-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Free consultation and site assessment
                </div>
                <div className="flex items-center text-sm text-amber-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Professional installation included
                </div>
                <div className="flex items-center text-sm text-amber-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  2-year comprehensive warranty
                </div>
                <div className="flex items-center text-sm text-amber-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  30-day money-back guarantee
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <h4 className="font-semibold text-blue-300 mb-4 flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <Truck className="text-white text-xs" />
                </div>
                Delivery & Installation
              </h4>
              <div className="space-y-2 text-sm text-blue-200">
                <p>• Free delivery island-wide</p>
                <p>• Professional installation included</p>
                <p>• Same-day setup in Colombo area</p>
                <p>• Full training and support provided</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
