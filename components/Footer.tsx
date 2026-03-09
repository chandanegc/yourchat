'use client';

import React from 'react';
import { MessageCircle, Twitter, Instagram, Facebook, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">YourSiteChat</span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed">
              Empowering businesses with AI-driven conversations. Automate support, engage users, and scale faster with our WhatsApp-first platform.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Linkedin, Github].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all">
                  <Icon className="w-5 h-5 text-slate-300 hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-6">
            <h5 className="text-lg font-bold">Product</h5>
            <ul className="space-y-4">
              {["Ai Chatbot", "WhatsApp Integration", "Automation Workflow", "Pricing", "Case Studies"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-6">
            <h5 className="text-lg font-bold">Company</h5>
            <ul className="space-y-4">
              {["About Us", "Careers", "Partners", "Contact", "News"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/Legal */}
          <div className="space-y-6">
            <h5 className="text-lg font-bold">Stay Updated</h5>
            <p className="text-slate-400 font-medium italic">Join our newsletter to get latest AI insights.</p>
            <div className="relative group">
              <input type="email" placeholder="Email address" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-blue-500 outline-none" />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-sm">
            © {new Date().getFullYear()} YourSiteChat. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
