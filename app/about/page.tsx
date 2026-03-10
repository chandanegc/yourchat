'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Culture from '@/components/Culture';
import CoreValues from '@/components/CoreValues';
import Benefits from '@/components/Benefits';
import Showcase from '@/components/Showcase';
import HowItWorks from '@/components/HowItWorks';
import HalfDashboard from '@/components/HalfDashboard';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" 
            alt="Business Collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              TURN CONVERSATIONS
            </h1>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              INTO CONVERSIONS
            </h1>
            
            <div className="relative inline-block mt-6">
              <div className="absolute inset-0 bg-[#CCFF00] transform -skew-x-12"></div>
              <p className="relative z-10 text-black text-xl md:text-3xl font-black px-6 py-2 tracking-tight uppercase">
                AUTOMATICALLY. THOUGHTFULLY. AT SCALE.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Culture/>
      <CoreValues/>
      <Benefits/>
      <Services />
      <HowItWorks/>
      <Showcase/>
      <HalfDashboard/>
      <Contact />
      <Footer />
    </div>
  );
}
