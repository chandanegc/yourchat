'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Clock, Eye, Lock, Globe, FileText, ChevronRight, Scale, CheckCircle } from 'lucide-react';

const terms = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using our Services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.",
    icon: <CheckCircle className="w-6 h-6 text-blue-500" />
  },
  {
    title: "2. Description of Service",
    content: "YourSiteChat provides AI-powered conversational automation tools for businesses. We reserve the right to modify, suspend, or discontinue any part of the service at any time.",
    icon: <Globe className="w-6 h-6 text-green-500" />
  },
  {
    title: "3. User Responsibilities",
    content: "You are responsible for maintaining the security of your account, for all activities that occur under your account, and for any content or training data you provide to the platform.",
    icon: <Lock className="w-6 h-6 text-purple-500" />
  },
  {
    title: "4. Fees & Payments",
    content: "Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or specified in your custom SLA.",
    icon: <Scale className="w-6 h-6 text-orange-500" />
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Legal Header */}
      <section className="pt-42 pb-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/5 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 text-blue-700 rounded-full border border-blue-200">
              <Scale className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Legal & Compliance</span>
           </div>
           
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
             Terms of <span className="text-blue-600">Service</span>
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
             Please read these terms carefully before using YourSiteChat. They contain important information about your rights and obligations as a user of our platform.
           </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
         <div className="space-y-16">
            <div className="prose prose-slate prose-lg max-w-none">
               <p className="text-lg font-bold text-slate-700 leading-relaxed">By using YourSiteChat, you agree to these terms. If you are using the service on behalf of an organization, you are agreeing to these terms for that organization.</p>
            </div>

            <div className="grid gap-12 pt-8">
               {terms.map((t, i) => (
                 <div key={i} className="group space-y-4 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                       <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                          {t.icon}
                       </div>
                       <h3 className="text-2xl font-black text-slate-900">{t.title}</h3>
                    </div>
                    <p className="text-slate-600 font-bold text-lg leading-relaxed pt-2">
                       {t.content}
                    </p>
                 </div>
               ))}
            </div>

            <div className="bg-slate-900 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FileText className="w-32 h-32" />
               </div>
               <div className="flex-1 space-y-4 relative z-10 text-center md:text-left">
                  <h3 className="text-2xl font-black text-white/90">Enterprise SLA</h3>
                  <p className="text-slate-400 font-medium">Have specific enterprise requirements? Speak to our team about custom Service Level Agreements (SLA).</p>
               </div>
               <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-2 relative z-10">
                  Speak To Sales <ChevronRight className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
