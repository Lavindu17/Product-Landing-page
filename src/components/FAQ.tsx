import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long is each therapy session?",
      answer:
        "Each individual therapy session is 50 minutes long, which is the standard duration for most therapeutic interventions. This allows sufficient time to explore topics in depth while maintaining focus and therapeutic momentum.",
    },
    {
      question: "How often should I attend sessions?",
      answer:
        "Most clients benefit from weekly sessions, especially in the beginning. As you progress, we may adjust the frequency to bi-weekly or monthly sessions based on your needs and goals. The frequency is always determined collaboratively based on your unique situation.",
    },
    {
      question: "What should I expect in my first session?",
      answer:
        "Your first session will focus on getting to know you and understanding your concerns. We'll discuss your history, current challenges, and goals for therapy. I'll explain my approach and answer any questions you have. This is also an opportunity for you to see if we're a good fit for working together.",
    },
    {
      question: "Is everything I share confidential?",
      answer:
        "Yes, confidentiality is a cornerstone of the therapeutic relationship. Everything you share is protected by law and professional ethics. The only exceptions are if there's imminent danger to yourself or others, suspected child or elder abuse, or if ordered by a court (which is very rare).",
    },
    {
      question: "Do you offer online therapy sessions?",
      answer:
        "Yes, I offer secure video therapy sessions through a HIPAA-compliant platform. Online therapy can be just as effective as in-person sessions and provides greater flexibility and accessibility. We can discuss whether online or in-person sessions would be best for you.",
    },
    {
      question: "How do I know if therapy is working?",
      answer:
        "Progress in therapy varies for each person, but common signs include feeling more self-aware, developing better coping strategies, improved relationships, and working toward your goals. We'll regularly check in about your progress and adjust our approach as needed.",
    },
    {
      question: "What if I'm in crisis or need immediate help?",
      answer:
        "If you're experiencing a mental health crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. For urgent but non-emergency situations, you can call my office and I'll do my best to accommodate same-day appointments or provide appropriate referrals.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Common questions about therapy and my practice
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg border border-slate-100">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6">
              I'm here to help clarify any concerns you may have about therapy
              or my practice.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
