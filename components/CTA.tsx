'use client';

import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-black pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 border border-white/10 p-12 md:p-20 text-center space-y-10 group">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
              Enterprise-Ready AI Customer Support That Scales With You
            </h2>
            <p className="text-blue-100/80 font-medium max-w-2xl mx-auto">
              Deploy an AI chatbot on your website or app to resolve customer issues instantly, reduce support load, and deliver consistent experiences—without sacrificing control.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-10 py-4 bg-white text-blue-800 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Get Started Free
            </button>
            <button className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
