'use client';

import React from 'react';
import { Box } from 'lucide-react';

const values = [
  {
    title: "Customer First",
    desc: "Every feature starts with a real support problem. We build AI that helps customers get answers faster—without friction or confusion."
  },
  {
    title: "Human-Centered AI",
    desc: "Automation should assist, not replace, people. We design AI that knows when to help and when to step aside for humans."
  },
  {
    title: "Clarity Over Complexity",
    desc: "Simple systems scale better. We focus on clear workflows, understandable AI behavior, and products teams can trust."
  },
  {
    title: "Ownership & Accountability",
    desc: "We take responsibility for what we build. From model behavior to edge cases, we own the impact our AI has on customer conversations."
  },
  {
    title: "Security by Design",
    desc: "Trust is not optional in customer support. We treat customer data, conversations, and privacy with enterprise-grade care."
  },
  {
    title: "Continuous Learning",
    desc: "AI evolves fast—and so do we. We learn from real conversations, feedback, and outcomes to constantly improve."
  }
];

export default function CoreValues() {
  return (
    <section className="py-32 px-6 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-6xl font-black text-white tracking-tight">Our Core Values</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            These values guide how we build, ship, and improve AI-powered customer support—every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div 
              key={i} 
              className="group relative bg-[#1A1A1A] p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Corner Dots */}
              <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-white/10 group-hover:bg-blue-500/40 transition-colors"></div>
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/10 group-hover:bg-blue-500/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-white/10 group-hover:bg-blue-500/40 transition-colors"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-white/10 group-hover:bg-blue-500/40 transition-colors"></div>

              {/* Icon with 3D effect */}
              <div className="relative w-16 h-16 mx-auto mb-10">
                <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:rotate-6 transition-transform">
                  <Box className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
