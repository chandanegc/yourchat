'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Culture() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Our Culture</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
              <p>
                We build <span className="font-bold text-slate-900">YourSiteChat</span> with one simple belief: 
                great customer support starts with thoughtful people and clear intent.
              </p>
              <p>
                Our team works at the intersection of AI, product, and empathy—designing systems that help 
                businesses support customers better without losing the human touch. We value clarity over complexity, 
                ownership over hierarchy, and learning over perfection.
              </p>
              <p>
                We collaborate closely, experiment often, and hold ourselves to high standards—because 
                the tools we build directly impact real customer conversations every day.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "Customer-first thinking",
                "Ownership & accountability",
                "Learning & Improvement"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <div className="w-5 h-5 bg-[#CCFF00]/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#CCFF00] rounded-full shadow-[0_0_8px_#CCFF00]"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform"></div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" 
                alt="Workspace and Culture" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
