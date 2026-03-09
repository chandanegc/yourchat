'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Clock, Cookie, Lock, Globe, FileText, ChevronRight, Scale, CheckCircle } from 'lucide-react';

const cookies = [
  {
    title: "1. Essential Cookies",
    content: "These cookies are necessary for the website to function properly. They enable core site functionality such as security, network management, and accessibility. You can disable these in your browser, but it will impact our ability to provide the service.",
    icon: <Lock className="w-6 h-6 text-blue-500" />
  },
  {
    title: "2. Analytical Cookies",
    content: "We use these cookies to understand how our visitors interact with the website. They help us collect information such as visitor counts and traffic sources, which allow us to measure and improve our site's performance.",
    icon: <Globe className="w-6 h-6 text-green-500" />
  },
  {
    title: "3. Functional Cookies",
    content: "These cookies enable us to remember choices you make, such as your username or language preferences, so we can provide a more personalized and seamless experience for you.",
    icon: <Cookie className="w-6 h-6 text-purple-500" />
  },
  {
    title: "4. Marketing & Ad Cookies",
    content: "These cookies are used to track visitors across websites. The intent is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.",
    icon: <Scale className="w-6 h-6 text-orange-500" />
  }
];

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Legal Header */}
      <section className="pt-42 pb-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/5 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 text-blue-700 rounded-full border border-blue-200">
              <Cookie className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Legal & Compliance</span>
           </div>
           
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
             Cookie <span className="text-blue-600">Settings</span>
           </h1>
           
           <div className="flex items-center gap-6 text-slate-400 font-bold text-sm uppercase tracking-widest">
              <span className="flex items-center gap-2">
                 <Clock className="w-4 h-4" />
                 Last Updated: March 2024
              </span>
              <span className="flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4" />
                 Compliance: GDPR, CCPA, SOC2
              </span>
           </div>

           <p className="text-xl text-slate-500 font-medium max-w-2xl pt-4 leading-relaxed">
             Transparency is our goal. This page details all cookies used on our platform so you can choose how your information is handled.
           </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
         <div className="space-y-16">
            <div className="prose prose-slate prose-lg max-w-none">
               <p className="text-lg font-bold text-slate-700 leading-relaxed">We use cookies and similar technologies to help keep our service secure, improve your experience, and provide us with analytics on how you use our platform.</p>
            </div>

            <div className="grid gap-12 pt-8">
               {cookies.map((c, i) => (
                 <div key={i} className="group space-y-4 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                       <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                          {c.icon}
                       </div>
                       <h3 className="text-2xl font-black text-slate-900">{c.title}</h3>
                    </div>
                    <p className="text-slate-600 font-bold text-lg leading-relaxed pt-2">
                       {c.content}
                    </p>
                    <div className="pt-4 flex items-center justify-between">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">Consent required</span>
                       <div className="flex gap-2">
                          <button className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-black hover:bg-slate-200 transition-colors">Disable</button>
                          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-black hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">Enable</button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-slate-900 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FileText className="w-32 h-32" />
               </div>
               <div className="flex-1 space-y-4 relative z-10 text-center md:text-left">
                  <h3 className="text-2xl font-black">Want to reset all?</h3>
                  <p className="text-slate-400 font-medium">Clicking this will remove all non-essential cookies and reset your preferences.</p>
               </div>
               <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black shadow-xl hover:scale-105 transition-all relative z-10">
                  Reset Preferences
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
