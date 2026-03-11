'use client';

import React, { useState } from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Will this AI chatbot replace my support team?",
    answer: "No — it's designed to work alongside your team, not replace them. The AI handles repetitive, high-volume queries 24/7 so your human agents can focus on complex, high-value conversations. Think of it as your always-on first line of support."
  },
  {
    question: "What can the AI chatbot help my customers with?",
    answer: "It can answer product FAQs, track orders, collect leads, book appointments, handle complaints, and guide users through your website — all automatically. You can train it on your own data so it knows your business inside out."
  },
  {
    question: "Will conversations feel robotic or natural?",
    answer: "Completely natural. Our AI is trained on conversational language and responds in a warm, human tone. You can also customize its personality, language style, and even give it a name that matches your brand."
  },
  {
    question: "Do I need coding knowledge to set it up?",
    answer: "Not at all. Setup takes under 10 minutes with our no-code dashboard. Just paste a snippet on your website or connect your WhatsApp/Instagram — no developer needed. We also offer hands-on onboarding support if you need it."
  },
  {
    question: "How does the chatbot learn about my business?",
    answer: "You can upload documents, paste URLs, or manually enter information about your products and services. The AI uses this knowledge base to answer customer questions accurately and consistently every time."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. All data is encrypted in transit and at rest. We follow strict GDPR-compliant practices and never share your data with third parties. Your conversation history and business data remain fully private and under your control."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Header */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Got questions?</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Frequently asked<br />
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">questions</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">
              Everything you need to know about our AI chatbot platform. Can't find the answer? Talk to our team.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-indigo-500/40 bg-indigo-950/30'
                    : 'border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15'
                }`}
                style={{ borderColor: isOpen ? 'rgba(99,102,241,0.35)' : undefined }}
              >
                <div className="flex items-center justify-between gap-6 px-8 py-6">
                  <span className={`text-lg font-bold transition-colors duration-200 ${
                    isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-indigo-500 rotate-0' : 'bg-white/8 group-hover:bg-white/15'
                  }`}>
                    {isOpen
                      ? <Minus className="w-4 h-4 text-white" />
                      : <Plus className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    }
                  </div>
                </div>

                {/* Answer */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-7">
                    <div className="w-full h-px bg-white/8 mb-5" />
                    <p className="text-slate-400 leading-relaxed font-medium text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <p className="text-slate-500 font-medium">Still have questions?</p>
          
           <a href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with our team
          </a>
        </div>

      </div>
    </section>
  );
}