'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Users, 
  BarChart3, 
  ArrowRight,
  Headphones,
  Sparkles,
  Search,
  CheckCircle,
  TrendingUp,
  Globe,
  Settings,
  Smartphone
} from 'lucide-react';

const benefits = [
  {
    title: "Instant Responses 24/7",
    description: "Never leave a customer waiting. Our AI handles 80% of routine queries instantly, day or night.",
    icon: Clock,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Seamless Human Handoff",
    description: "When things get complex, the AI smoothly transitions the conversation to your human team with full context.",
    icon: Users,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Multi-Language Support",
    description: "Scale globally without hiring a bilingual team. Chat with customers in 50+ languages effortlessly.",
    icon: Globe,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Lead Capture Integration",
    description: "Automatically qualify leads and sync them with your CRM while your customers get their questions answered.",
    icon: TrendingUp,
    color: "bg-orange-50 text-orange-600"
  }
];

export default function CustomerSupportSolution() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <defs>
               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
             </defs>
             <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-blue-100 mb-4 shadow-xl">
               <Headphones className="w-4 h-4" />
               <span className="text-sm font-semibold tracking-wider uppercase">Solution: Customer Support</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Automate support. <br /><span className="text-blue-300">Delight customers.</span>
            </h1>
            
            <p className="text-xl text-blue-100/80 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Scale your support operations without scaling your headcount. Our AI handles the repetitive, so your team can focus on the exceptional.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
               <button className="px-10 py-5 bg-white text-blue-900 rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                 Get Started Free <ArrowRight className="w-5 h-5 text-blue-600" />
               </button>
               <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-black backdrop-blur-md transition-all hover:bg-white/20 inline-block">
                 Watch Demo
               </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 p-8 shadow-2xl scale-105">
                <div className="space-y-6">
                   <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                      <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                         <img src="/chat.png" alt="Chat" className="w-full h-full object-contain" />
                      </div>
                      <div>
                         <p className="text-white font-bold">AI Assistant</p>
                         <p className="text-blue-200 text-xs font-medium uppercase tracking-widest">Active & Learning</p>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-2xl text-sm font-medium text-blue-100 max-w-[80%]">Hi! How do I reset my password?</div>
                      <div className="bg-blue-600/20 p-4 rounded-2xl text-sm font-medium text-white max-w-[85%] self-end ml-auto border border-blue-500/30">
                         I can help with that! You'll find the "Reset Password" link on the login page. I've also sent a direct link to your email. Need anything else?
                      </div>
                      <div className="flex items-center gap-2 pt-4 justify-center">
                         <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                         <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                         <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                         <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest ml-1">AI is thinking...</span>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20 px-2 leading-relaxed">
           <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Support that <span className="text-blue-600 underline decoration-blue-100 underline-offset-8 decoration-8">never sleeps</span></h2>
           <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">Proven features designed to reduce churn and boost customer lifetime value.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {benefits.map((benefit, i) => (
             <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                   <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{benefit.description}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <BarChart3 className="w-48 h-48" />
              </div>
              <div className="relative z-10 space-y-6">
                 <div className="flex gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-6 h-6 fill-current" />)}
                 </div>
                 <h3 className="text-3xl font-black text-slate-900">"Our support team's workload dropped by 65% in the first month."</h3>
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden ring-4 ring-blue-50">
                       <img src="https://i.pravatar.cc/100?u=cx-lead" alt="Sarah J" />
                    </div>
                    <div>
                       <p className="font-black text-slate-900">Sarah Johnson</p>
                       <p className="text-blue-600 font-bold text-sm">Head of Customer Experience, SaasMaster</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                    <div>
                       <p className="text-3xl font-black text-blue-600">80%</p>
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Queries Resolved</p>
                    </div>
                    <div>
                       <p className="text-3xl font-black text-blue-600">&lt; 1min</p>
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Response Time</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Better support starts with <span className="text-blue-600">smarter Conversations</span></h2>
              <ul className="space-y-6">
                 {[
                   "Easily train AI on your existing help docs and FAQs.",
                   "Custom brand voice for consistent identity.",
                   "Real-time analytics to track happiness scores.",
                   "Direct integration with Slack & Ticket systems."
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-md">
                         <CheckCircle className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold text-slate-700">{item}</span>
                   </li>
                 ))}
              </ul>
              <div className="pt-4">
                 <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-all flex items-center gap-2 group">
                    Learn More About AI Training <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
