'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Clock, Eye, Lock, Globe, FileText, ChevronRight, Scale } from 'lucide-react';

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, train your AI assistant, or contact customer support. This includes name, email address, business details, and any training data you upload.",
    icon: <Eye className="w-6 h-6 text-blue-500" />
  },
  {
    title: "2. How We Use Your Data",
    content: "We use your data to provide, maintain, and improve our services, including training your AI assistants. Your data is strictly used for your own instance and is never shared with other customers or third parties for their own use.",
    icon: <Globe className="w-6 h-6 text-green-500" />
  },
  {
    title: "3. Data Security & Encryption",
    content: "Your data is protected using industry-standard AES-256 bit encryption at rest and TLS 1.3 in transit. We conduct regular security audits and penetration testing to ensure the highest level of protection.",
    icon: <Lock className="w-6 h-6 text-purple-500" />
  },
  {
    title: "4. Your Privacy Rights (GDPR/CCPA)",
    content: "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data. We fully support 'Right to be Forgotten' and data portability requests.",
    icon: <Shield className="w-6 h-6 text-orange-500" />
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Legal Header */}
      <section className="pt-42 pb-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/5 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 text-blue-700 rounded-full border border-blue-200">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Legal & Compliance</span>
           </div>
           
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
             Privacy <span className="text-blue-600">Policy</span>
           </h1>
           
           <div className="flex items-center gap-6 text-slate-400 font-bold text-sm uppercase tracking-widest">
              <span className="flex items-center gap-2">
                 <Clock className="w-4 h-4" />
                 Last Updated: March 2024
              </span>
              <span className="flex items-center gap-2">
                 <Scale className="w-4 h-4" />
                 Compliance: GDPR, CCPA, SOC2
              </span>
           </div>

           <p className="text-xl text-slate-500 font-medium max-w-2xl pt-4 leading-relaxed">
             At YourSiteChat, we take your data privacy seriously. This policy explains how we collect, use, and protect your information when you use our services.
           </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
         <div className="space-y-16">
            <div className="prose prose-slate prose-lg max-w-none">
               <p className="text-lg font-bold text-slate-700 leading-relaxed">By using YourSiteChat, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
            </div>

            <div className="grid gap-12 pt-8">
               {sections.map((s, i) => (
                 <div key={i} className="group space-y-4 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                       <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                          {s.icon}
                       </div>
                       <h3 className="text-2xl font-black text-slate-900">{s.title}</h3>
                    </div>
                    <p className="text-slate-600 font-bold text-lg leading-relaxed pt-2">
                       {s.content}
                    </p>
                 </div>
               ))}
            </div>

            <div className="bg-slate-900 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FileText className="w-32 h-32" />
               </div>
               <div className="flex-1 space-y-4 relative z-10 text-center md:text-left">
                  <h3 className="text-2xl font-black">Need a DPA?</h3>
                  <p className="text-slate-400 font-medium">We offer standard Data Processing Agreements for our enterprise and professional plan customers.</p>
               </div>
               <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-2 relative z-10">
                  Contact Compliance <ChevronRight className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
