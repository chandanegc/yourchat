'use client';

import React from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="flex flex-col items-center space-y-6">
           <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
              <MessageCircle className="w-8 h-8 text-white" />
           </div>
           <h2 className="text-6xl font-black text-center leading-tight">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {[
            "Will this AI chatbot replace my support team??",
            "What can the AI chatbot help my customers with?",
            "Will conversations feel robotic or natural?",
            "Do I need coding knowledge to set it up?"
          ].map((q, i) => (
            <div key={i} className="group border-b border-white/10 py-6 cursor-pointer hover:bg-white/5 transition-colors px-4 rounded-xl">
              <div className="flex items-center justify-between gap-8">
                <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{q}</span>
                <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-white transition-all transform group-hover:rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
