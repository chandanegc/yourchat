'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Users, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Globe,
  Layout,
  MessageCircle,
  Trophy,
  MousePointer2
} from 'lucide-react';

const benefits = [
  {
    title: "On-Demand Onboarding",
    description: "Guide new users through your platform without human intervention. Boost activation and retention from day one.",
    icon: Rocket,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Lead Qualification AI",
    description: "Automatically qualify high-value leads and book demos directly into your sales team's calendar.",
    icon: Target,
    color: "bg-purple-50 text-purple-600",
    specialIcon: true
  },
  {
    title: "Churn Defense v2",
    description: "Identify frustrated users in real-time and offer proactive solutions or direct human escalation automatically.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Product Feedback Loop",
    description: "Collect and categorize feature requests and feedback automatically for your product team.",
    icon: MessageCircle,
    color: "bg-orange-50 text-orange-600"
  }
];

function Target({ className }: { className?: string }) {
  return <MousePointer2 className={className} />;
}

export default function SaasSolution() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-42 pb-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/10 skew-x-[-30deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl">
             <Rocket className="w-4 h-4 animate-bounce" />
             <span>The Saas & Startups Solution</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Scale your <br /><span className="text-blue-500">Startup</span> with AI.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            From zero to thousands of users. Manage support and sales without the hiring headache. Built for fast-moving SaaS teams.
          </p>

          <div className="flex flex-wrap gap-6 pt-6 justify-center">
             <button className="px-12 py-6 bg-white text-slate-900 rounded-2xl font-black shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-3">
               Start For Free <ArrowRight className="w-6 h-6 text-blue-600" />
             </button>
             <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-white/5 text-white border border-white/20 rounded-2xl font-black backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40 inline-flex items-center justify-center">
               Book Founder Demo
             </a>
          </div>
          
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {["SaaS", "Fintech", "EdTech", "MarTech"].map(t => (
               <div key={t} className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Layout className="w-6 h-6 text-white" />
                 </div>
                 <span className="text-white font-black uppercase tracking-tighter text-[10px]">{t} Optimized</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">Built for <span className="text-blue-600 underline decoration-blue-100 underline-offset-8 decoration-8">SaaS Efficiency</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">Stop letting leads fall through the cracks and users churn because of slow support times. YourSiteChat is the AI foundation for modern software companies.</p>
              
              <div className="space-y-8">
                 {benefits.map((b, i) => (
                   <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
                      <div className={`w-14 h-14 rounded-2xl ${b.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                         <b.icon className="w-7 h-7" />
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-xl font-bold text-slate-900">{b.title}</h4>
                         <p className="text-slate-500 font-bold text-sm leading-relaxed">{b.description}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative">
              <div className="absolute -inset-10 bg-blue-100/50 rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative bg-white p-4 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100">
                  <div className="bg-slate-900 rounded-[3rem] p-10 text-white space-y-10 aspect-[4/5] flex flex-col justify-center overflow-hidden">
                     <div className="space-y-4">
                        <div className="inline-flex gap-2 items-center text-blue-400 font-black uppercase tracking-widest text-[10px]">
                           <Sparkles className="w-3 h-3" />
                           <span>AI Insights</span>
                        </div>
                        <h4 className="text-3xl font-black tracking-tight leading-tight">Your Weekly Growth Report</h4>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className="w-[85%] h-full bg-blue-500 rounded-full"></div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <p className="text-blue-400 font-black text-3xl">1.2k</p>
                           <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest leading-none">Leads Captured</p>
                        </div>
                        <div className="space-y-2">
                           <p className="text-white font-black text-3xl">+42%</p>
                           <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest leading-none">Response Speed</p>
                        </div>
                     </div>
                     <div className="pt-8 border-t border-white/10">
                        <div className="flex -space-x-3 mb-4">
                           {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900"></div>)}
                        </div>
                        <p className="text-sm font-bold text-slate-400">“We've doubled our demo booking rate since integrating YourSiteChat.”</p>
                     </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Solution */}
      <section className="py-32 px-6 bg-blue-600">
         <div className="max-w-4xl mx-auto text-center space-y-10">
            <Trophy className="w-20 h-20 text-white mx-auto animate-pulse opacity-50" />
            <h2 className="text-4xl md:text-7xl font-black text-white px-2 tracking-tighter leading-none">Don't wait to grow.</h2>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">Join 500+ SaaS founders who have transformed their engagement.</p>
            <div className="pt-4">
               <button className="px-12 py-6 bg-white text-blue-600 rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  Get Started For Free
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
