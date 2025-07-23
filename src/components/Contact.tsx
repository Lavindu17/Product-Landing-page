import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
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
      className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-200/15 to-teal-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to take the first step toward better mental health? I'm here
            to help you on your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send a Message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
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
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
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
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400"
                    placeholder="071 234 5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactMethod"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white/80 backdrop-blur-sm transition-all duration-300"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message / Reason for Contact
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white/80 backdrop-blur-sm transition-all duration-300 resize-none placeholder:text-slate-400"
                    placeholder="Tell me a bit about what brings you here and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-slate-600 mb-4">
                  I've received your message and will respond within 24 hours.
                </p>
                <p className="text-sm text-slate-500">
                  If this is urgent, please call (+94) 71 8000 623
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      Office Address
                    </p>
                    <p className="text-slate-600">
                      235/A <br />
                      Wawila Road (70620)
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Phone</p>
                    <a
                      href="tel:+94718000623"
                      className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                    >
                      (+94) 71 8000 623
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <a
                      href="mailto:sajeevansltas@gmail.com"
                      className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                    >
                      sajeevansltas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Office Hours</p>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Thursday: 9:00 AM - 7:00 PM</p>
                      <p>Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">!</span>
                </div>
                Emergency Contact
              </h4>
              <p className="text-amber-700 text-sm">
                If you're experiencing a mental health crisis, please call 1333
                (Courage Compassion Commitment) or go to your nearest emergency
                room. For urgent but non-emergency situations, call my office
                and I'll do my best to accommodate same-day appointments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
