'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase">Facebook Integration</span>
            <h1 className="text-6xl font-black text-gray-900 tracking-tight leading-none">
              Facebook
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                Messenger Bot
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">
              Engage with 3 billion Facebook users through automated Messenger conversations. Our AI chatbot integrates seamlessly with Facebook Messenger, enabling instant customer support, lead generation, and automated responses across your Facebook Page and Instagram Direct Messages from one unified platform.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">3B+</div>
                <div className="text-xs text-gray-600 mt-1">Users</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600">80%</div>
                <div className="text-xs text-gray-600 mt-1">Response Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-700">24/7</div>
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
                    alt="Facebook Messenger Dashboard" 
                    className="w-full h-full object-cover"
                />
             </div>
             {/* Foreground Image - Shifted Down and Right */}
             <div className="absolute bottom-0 right-0 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&q=80" 
                    alt="Facebook Chat Interface" 
                    className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}