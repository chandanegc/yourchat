'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-10 px-6 bg-black relative overflow-hidden">
      {/* Abstract Background SVG */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 C200,300 400,700 600,500 S800,200 1000,500" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M800,0 L1000,200" stroke="white" strokeWidth="0.5" />
          <path d="M900,1000 L1000,900" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-white">Contact Us</h2>
          <p className="text-slate-400 font-medium">Take the first step toward transforming your business. Fill out the form below to get started.</p>
        </div>

        <div className="bg-[#1a1a1a]/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-4">First Name</label>
                <input type="text" placeholder="Your first name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-blue-500 transition-colors outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-4">Last Name</label>
                <input type="text" placeholder="Your last name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-blue-500 transition-colors outline-none" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-4">Email</label>
                <input type="email" placeholder="Your email address" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-blue-500 transition-colors outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-4">Phone Number</label>
                <input type="tel" placeholder="Your phone number" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-blue-500 transition-colors outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 ml-4">Message</label>
              <textarea rows={4} placeholder="Type us a message" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-blue-500 transition-colors outline-none resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-rose-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
              Send Quote <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
