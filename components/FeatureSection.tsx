'use client';

import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  reverse?: boolean;
}

export default function FeatureSection({ title, description, points, imageSrc, reverse = false }: FeatureSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-8 ${reverse ? 'lg:order-2' : ''}`}>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              {description}
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <div className="w-5 h-5 bg-[#CCFF00]/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#CCFF00] rounded-full shadow-[0_0_8px_#CCFF00]"></div>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
             <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
