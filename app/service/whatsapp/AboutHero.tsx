'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs font-black tracking-[0.3em] text-green-600 uppercase">WhatsApp Integration</span>
            <h1 className="text-6xl font-black text-gray-900 tracking-tight leading-none">
              WhatsApp
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-2">
                AI Chatbot
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">
              Connect with over 2 billion WhatsApp users worldwide. Our AI-powered chatbot integrates seamlessly with WhatsApp Business API, enabling automated customer support, instant replies, lead capture, and appointment booking right within your customers' favorite messaging app.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-xl border border-green-200 shadow-sm">
                <div className="text-3xl font-bold text-green-600">2B+</div>
                <div className="text-xs text-gray-600 mt-1">Users</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-green-200 shadow-sm">
                <div className="text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-xs text-gray-600 mt-1">Open Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-green-200 shadow-sm">
                <div className="text-3xl font-bold text-green-700">24/7</div>
                <div className="text-xs text-gray-600 mt-1">Available</div>
              </div>
            </div>
          </div>

          {/* Right Images (Overlapping) */}
          <div className="relative flex items-center justify-center h-[500px]">
             {/* Background Image - Absolute */}
             <div className="absolute top-0 right-1/4 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-0">
                <img 
                    src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80" 
                    alt="WhatsApp Business Dashboard" 
                    className="w-full h-full object-cover"
                />
             </div>
             {/* Foreground Image - Shifted Down and Right */}
             <div className="absolute bottom-0 right-0 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" 
                    alt="WhatsApp Chat Interface" 
                    className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}