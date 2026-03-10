'use client';

import React from 'react';
import { Bot, MessageCircle, Zap } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="py-24 px-6 bg-[#FFD700] relative overflow-hidden">
      {/* Subtle Background Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,200 Q250,150 500,200 T1000,200" fill="none" stroke="black" strokeWidth="2" />
          <path d="M0,500 Q250,450 500,500 T1000,500" fill="none" stroke="black" strokeWidth="2" />
          <path d="M0,800 Q250,750 500,800 T1000,800" fill="none" stroke="black" strokeWidth="2" />
          <path d="M200,0 Q150,250 200,500 T200,1000" fill="none" stroke="black" strokeWidth="2" />
          <path d="M500,0 Q450,250 500,500 T500,1000" fill="none" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Your AI Customer Support, Up and Running in Minutes
          </h2>
          <p className="text-xl text-slate-900/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Deploy an AI chatbot on your website or app to instantly resolve customer queries, reduce support tickets, and improve response times—24/7.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { text: "AI-Powered Support" },
            { text: "Instant Responses" },
            { text: "No-Code Setup" }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 px-8 py-4 border-2 border-slate-900 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
              <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
                <img src="/chat.png" alt="Icon" className="w-full h-full object-contain brightness-0 group-hover:brightness-100 invert group-hover:invert-0 transition-all" />
              </div>
              {feature.text}
            </div>
          ))}
        </div>

        {/* Video / Dashboard Preview */}
        <div className="relative group cursor-pointer max-w-4xl mx-auto mt-12">
          <div className="absolute -inset-4 bg-slate-900/10 rounded-[3rem] blur-2xl group-hover:bg-slate-900/20 transition-all duration-500"></div>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-slate-900 bg-slate-900">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/hXjR8C3rRoA?autoplay=0&rel=0"
              title="Yoursitechat Video Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
