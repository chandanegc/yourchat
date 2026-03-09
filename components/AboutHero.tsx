'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="py-32 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase">Services</span>
            <h1 className="text-6xl font-black text-slate-900 tracking-tight leading-none">
              Service Name
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-lg">
              This section is used to describe the service in slightly more detail. Add a short explanation of what the service does, how it fits into the overall product, or what problem it helps address. Keep this content concise and informative, without going into technical depth. Replace this text with finalized service details.
            </p>
          </div>

          {/* Right Images (Overlapping) */}
          <div className="relative flex items-center justify-center h-[500px]">
             {/* Background Image - Absolute */}
             <div className="absolute top-0 right-1/4 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-0">
                <img 
                    src="https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=600&q=80" 
                    alt="Service Detail 1" 
                    className="w-full h-full object-cover"
                />
             </div>
             {/* Foreground Image - Shifted Down and Right */}
             <div className="absolute bottom-0 right-0 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-[#F8F9FA]">
                <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" 
                    alt="Service Detail 2" 
                    className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
