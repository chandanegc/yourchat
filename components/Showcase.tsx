'use client';

import React from 'react';
import { Bot, Zap, Settings2 } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="py-20 px-6 bg-[#FACC15] relative overflow-hidden">
      {/* Background decorative curves */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M-100,400 C200,200 400,600 700,300 S1100,100 1300,400" fill="none" stroke="black" strokeWidth="3"/>
          <path d="M-100,600 C200,400 400,800 700,500 S1100,300 1300,600" fill="none" stroke="black" strokeWidth="3"/>
          <path d="M900,-50 C750,150 850,400 750,600 S700,800 900,900" fill="none" stroke="black" strokeWidth="3"/>
          <circle cx="950" cy="120" r="180" fill="none" stroke="black" strokeWidth="3"/>
          <circle cx="100" cy="700" r="120" fill="none" stroke="black" strokeWidth="3"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-5">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Your AI Customer Support,<br />Up and Running in Minutes
          </h2>
          <p className="text-lg text-slate-800/75 max-w-2xl mx-auto font-medium">
            Deploy an AI chatbot on your website or app to instantly resolve customer queries, reduce support tickets, and improve response times—24/7.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            { icon: Bot, text: 'AI-Powered Support' },
            { icon: Zap, text: 'Instant Responses' },
            { icon: Settings2, text: 'No-Code Setup' },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2.5 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Icon className="w-4 h-4 text-[#F9A834]" />
              {text}
            </div>
          ))}
        </div>

        {/* YouTube Video */}
        <div className="relative">
          {/* Glow shadow */}
          <div className="absolute -inset-6 bg-slate-900/20 rounded-[2.5rem] blur-3xl" />

          <div className="relative rounded-2xl overflow-hidden border-[2px] border-slate-900/40 shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
            {/* macOS-style top bar */}
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-900">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-[6px] text-white font-black">Y</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">yoursitechat — product demo</span>
              </div>
            </div>

            {/* 16:9 YouTube iframe */}
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hXjR8C3rRoA?rel=0&modestbranding=1"
                title="Yoursitechat Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}