'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs font-black tracking-[0.3em] text-pink-600 uppercase">Instagram Integration</span>
            <h1 className="text-6xl font-black text-gray-900 tracking-tight leading-none">
              Instagram
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mt-2">
                DM Automation
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">
              Engage with over 2 billion Instagram users through automated Direct Message responses. Our AI chatbot integrates seamlessly with Instagram Business accounts, enabling instant replies to DMs, comment automation, story interactions, and lead capture — all while maintaining Instagram's authentic, visual-first experience.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-xl border border-pink-200 shadow-sm">
                <div className="text-3xl font-bold text-pink-600">2B+</div>
                <div className="text-xs text-gray-600 mt-1">Users</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-pink-200 shadow-sm">
                <div className="text-3xl font-bold text-purple-600">85%</div>
                <div className="text-xs text-gray-600 mt-1">Engagement</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-pink-200 shadow-sm">
                <div className="text-3xl font-bold text-pink-700">24/7</div>
                <div className="text-xs text-gray-600 mt-1">Available</div>
              </div>
            </div>
          </div>

          {/* Right Images (Overlapping) */}
          <div className="relative flex items-center justify-center h-[500px]">
             {/* Background Image - Absolute */}
             <div className="absolute top-0 right-1/4 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-0">
                <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80" 
                    alt="Instagram DM Dashboard" 
                    className="w-full h-full object-cover"
                />
             </div>
             {/* Foreground Image - Shifted Down and Right */}
             <div className="absolute bottom-0 right-0 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&q=80" 
                    alt="Instagram Chat Interface" 
                    className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}