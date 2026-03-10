'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs font-black tracking-[0.3em] text-indigo-600 uppercase">Website Integration</span>
            <h1 className="text-6xl font-black text-gray-900 tracking-tight leading-none">
              Website
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                Chat Widget
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">
              Add a powerful AI chatbot to your website in minutes with our customizable chat widget. Provide instant 24/7 support, capture leads, book appointments, and guide visitors through your site — all with a beautiful, branded chat interface that matches your website's design perfectly.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-xl border border-indigo-200 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600">&lt;2min</div>
                <div className="text-xs text-gray-600 mt-1">Setup</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-indigo-200 shadow-sm">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-xs text-gray-600 mt-1">Customizable</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-indigo-200 shadow-sm">
                <div className="text-3xl font-bold text-indigo-700">24/7</div>
                <div className="text-xs text-gray-600 mt-1">Available</div>
              </div>
            </div>
          </div>

          {/* Right Images (Overlapping) */}
          <div className="relative flex items-center justify-center h-[500px]">
             {/* Background Image - Absolute */}
             <div className="absolute top-0 right-1/4 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-0">
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                    alt="Website Chat Widget Dashboard" 
                    className="w-full h-full object-cover"
                />
             </div>
             {/* Foreground Image - Shifted Down and Right */}
             <div className="absolute bottom-0 right-0 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" 
                    alt="Live Chat Interface" 
                    className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}