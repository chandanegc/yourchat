'use client';

import React from 'react';

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <div className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">PROCESS</div>
          <h2 className="text-5xl font-black text-slate-900">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-0"></div>
          
          {[
            {
              num: "1",
              title: "Add the Chatbot",
              desc: "Integrate the AI chatbot into your website or app with a simple script or SDK."
            },
            {
              num: "2",
              title: "Train with Your Data",
              desc: "Upload FAQs, help docs, or knowledge base to train the chatbot on your product."
            },
            {
              num: "3",
              title: "Support Customers 24/7",
              desc: "Instantly answer queries, escalate complex issues to agents, and track support performance."
            }
          ].map((step, i) => (
            <div key={i} className="relative text-center space-y-6 flex flex-col items-center group">
              <div className="w-18 h-18 rounded-full border-2 border-blue-100 bg-white flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-500 z-10 bg-white">
                {step.num}
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[280px] mx-auto font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-700 to-rose-400 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
