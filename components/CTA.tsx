'use client';

import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-[95%] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-12 py-14 text-center">
          {/* Gradient Overlay Effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/30 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/40 blur-3xl rounded-full"></div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug max-w-3xl mx-auto">
              Enterprise-Ready AI Customer Support That Scales With You
            </h2>
            
            <p className="text-blue-100 text-base max-w-2xl mx-auto leading-relaxed px-4">
              Deploy an AI chatbot on your website or app to resolve customer issues instantly, reduce support load, and deliver consistent experiences—without sacrificing control.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button className="px-7 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all text-sm">
                Get Started Free
              </button>
              <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm inline-block">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}