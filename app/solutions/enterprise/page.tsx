'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Users, 
  BarChart3, 
  ArrowRight,
  Globe,
  Settings,
  Lock,
  Target,
  Search,
  CheckCircle,
  Smartphone,
  MessageCircle,
  Sparkles,
  Layers,
  Database,
  Briefcase
} from 'lucide-react';

const pillars = [
  {
    title: "SOC 2 Type II Security",
    description: "The highest standard of security for enterprise data protection. We ensure complete confidentiality, integrity, and availability.",
    icon: ShieldCheck,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "SSO & IAM Integration",
    description: "Connect YourSiteChat with your existing enterprise identity management systems for secure, centralized user provisioning.",
    icon: Lock,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Dedicated Account Management",
    description: "Every enterprise client receives a dedicated success manager and 24/7 priority technical support with custom SLAs.",
    icon: Briefcase,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Custom LLM Training",
    description: "Train private AI models on your proprietary internal knowledge base while maintaining data sovereignty and privacy.",
    icon: Sparkles,
    color: "bg-orange-50 text-orange-600"
  }
];

export default function EnterpriseSolution() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-42 pb-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.1" />
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl">
                 <Building2 className="w-4 h-4 shadow-xl shadow-blue-500/50" />
                 <span>The Enterprise Solution</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                The AI platform for <br /><span className="text-blue-500">Global Enterprises.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed">
                Scale your customer engagement with confidence. Secure, compliant, and deeply integrated into your existing enterprise stack.
              </p>

              <div className="flex flex-wrap gap-8 pt-6">
                 <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                   Request Custom Demo <ArrowRight className="w-6 h-6" />
                 </button>
                 <button className="px-12 py-6 bg-white/5 text-white border border-white/20 rounded-2xl font-black backdrop-blur-md transition-all hover:bg-white/10">
                   Contact Sales Team
                 </button>
              </div>
              
              <div className="pt-12 flex items-center gap-12 border-t border-white/5">
                 <div className="space-y-2">
                    <p className="text-4xl font-black text-white">99.99%</p>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Uptime Guarantee (SLA)</p>
                 </div>
                 <div className="w-px h-12 bg-white/5"></div>
                 <div className="space-y-2">
                    <p className="text-4xl font-black text-white">2k+</p>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Enterprises Trusted</p>
                 </div>
              </div>
           </div>

           <div className="relative group">
              <div className="absolute -inset-10 bg-blue-600/10 rounded-[5rem] blur-[120px] animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-3xl rounded-[4rem] p-12 border border-white/20 shadow-2xl flex flex-col justify-center gap-12 group-hover:bg-white/20 transition-all duration-1000">
                 <div className="space-y-6">
                    <div className="inline-flex gap-2 items-center text-blue-400 font-extrabold uppercase tracking-widest text-[10px]">
                       <Lock className="w-3 h-3" />
                       <span>Security Dashboard</span>
                    </div>
                    <h3 className="text-2xl font-black text-white px-2">Compliance Real-time Stream</h3>
                    <div className="space-y-4">
                       {[
                         { label: "SOC 2 Type II", status: "Verified", color: "bg-green-500" },
                         { label: "GDPR Compliance", status: "Active", color: "bg-blue-500" },
                         { label: "ISO 27001", status: "Managed", color: "bg-purple-500" },
                         { label: "Data Sovereignty", status: "Multi-Region", color: "bg-orange-500" }
                       ].map(s => (
                         <div key={s.label} className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-center justify-between group-hover:scale-105 transition-transform duration-700">
                            <span className="text-white font-bold">{s.label}</span>
                            <div className="flex items-center gap-2">
                               <div className={`w-2 h-2 ${s.color} rounded-full`}></div>
                               <span className="text-[10px] font-black uppercase text-slate-400">{s.status}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                       <Database className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                       <p className="text-white font-bold text-sm">Region: Global Distributed (AWS/GCP)</p>
                       <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Connected with redundant failover</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Enterprise Pillars */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
         <div className="text-center space-y-6 mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">The pillars of <span className="text-blue-600 underline underline-offset-8 decoration-blue-100">Enterprise AI.</span></h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">Built from the ground up to meet the rigorous demands of global organizations.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {pillars.map((p, i) => (
              <div key={i} className="group p-10 rounded-[3.5rem] border border-slate-100 bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-4 cursor-pointer relative overflow-hidden">
                 <div className={`w-20 h-20 rounded-3xl ${p.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                    <p.icon className="w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-4">{p.title}</h3>
                 <p className="text-slate-500 font-bold text-sm leading-relaxed">{p.description}</p>
                 <div className="absolute bottom-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                    <Building2 className="w-24 h-24" />
                 </div>
              </div>
            ))}
         </div>
      </section>
      
      {/* Enterprise CTA Banner */}
      <section className="py-32 px-6 bg-blue-600 relative overflow-hidden">
         <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none px-4">Scale with confidence.</h2>
            <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed">Get in touch with our enterprise sales team to build a custom solution for your organization.</p>
            <div className="flex flex-wrap justify-center gap-8 pt-8 px-2">
               <button className="px-14 py-6 bg-white text-blue-600 rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg">
                  Request Custom Proposal
               </button>
               <button className="px-14 py-6 bg-blue-900 text-white rounded-2xl font-black shadow-2xl hover:bg-blue-950 transition-all text-lg">
                  Speak To An Expert
               </button>
            </div>
         </div>
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-900/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl animate-pulse"></div>
      </section>

      <Footer />
    </div>
  );
}
