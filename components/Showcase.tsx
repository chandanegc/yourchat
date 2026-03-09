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
            { icon: Bot, text: "AI-Powered Support" },
            { icon: MessageCircle, text: "Instant Responses" },
            { icon: Zap, text: "No-Code Setup" }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 px-8 py-4 border-2 border-slate-900 rounded-full font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
              <feature.icon className="w-5 h-5" />
              {feature.text}
            </div>
          ))}
        </div>

        {/* Video / Dashboard Preview */}
        <div className="relative group cursor-pointer max-w-4xl mx-auto mt-12">
          <div className="absolute -inset-4 bg-slate-900/10 rounded-[3rem] blur-2xl group-hover:bg-slate-900/20 transition-all duration-500"></div>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-slate-900 bg-slate-900">
            {/* Dashboard Mockup Representation */}
            <div className="absolute inset-0 flex flex-col p-6 space-y-6">
              <div className="flex items-center justify-between opacity-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500"></div>
                  <div className="w-32 h-4 rounded bg-slate-700"></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="h-32 rounded-2xl bg-slate-800/50"></div>
                <div className="h-32 rounded-2xl bg-slate-800/50"></div>
                <div className="h-32 rounded-2xl bg-slate-800/50"></div>
              </div>
              <div className="flex-1 rounded-2xl bg-slate-800/30"></div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-16 bg-red-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Real Screenshot Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
