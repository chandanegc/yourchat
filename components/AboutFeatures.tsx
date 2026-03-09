'use client';

import React from 'react';
import { Box } from 'lucide-react';

const featureData = [
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
  }
];

export default function AboutFeatures() {
  return (
    <section className="py-32 px-6 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Long heading is what you see here in this feature section
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, i) => (
            <div 
              key={i} 
              className="group relative bg-[#1A1A1A] p-10 py-16 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Corner Dots */}
              <div className="absolute top-6 left-6 w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-white/20"></div>

              {/* Icon */}
              <div className="relative w-12 h-12 mx-auto mb-8">
                <Box className="w-full h-full text-[#CCFF00]" strokeWidth={2.5} />
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
