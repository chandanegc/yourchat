'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Globe, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Slack, 
  ShoppingBag, 
  Smartphone,
  ChevronRight,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Layers,
  BarChart3
} from 'lucide-react';

const integrationCategories = ["All", "Messaging", "E-commerce", "Lead Generation", "Analytics"];

const platforms = [
  {
    name: "Website",
    category: "Messaging",
    description: "Install your AI assistant on any website with a single line of code.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
    status: "Active",
    link: "/integrations/website"
  },
  {
    name: "WhatsApp",
    category: "Messaging",
    description: "Connect via official WhatsApp Business API for instant support.",
    icon: MessageCircle,
    color: "bg-green-50 text-green-600",
    status: "Beta",
    link: "/integrations/whatsapp"
  },
  {
    name: "Instagram",
    category: "Messaging",
    description: "Automate DMs and comments directly on your profile.",
    icon: Instagram,
    color: "bg-pink-50 text-pink-600",
    status: "Active",
    link: "/integrations/instagram"
  },
  {
    name: "Facebook Messenger",
    category: "Messaging",
    description: "Handle Facebook page queries automatically with AI.",
    icon: Facebook,
    color: "bg-blue-50 text-blue-700",
    status: "Active",
    link: "/integrations/facebook"
  },
  {
    name: "Slack",
    category: "Lead Generation",
    description: "Get real-time alerts and lead notifications in your Slack channels.",
    icon: Slack,
    color: "bg-indigo-50 text-indigo-600",
    status: "New",
    link: "/integrations/slack"
  },
  {
    name: "Shopify",
    category: "E-commerce",
    description: "Sync products and handle order queries automatically.",
    icon: ShoppingBag,
    color: "bg-green-50 text-green-700",
    status: "Coming Soon",
    link: "/integrations/shopify"
  }
];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlatforms = activeCategory === "All" 
    ? platforms 
    : platforms.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-blue-100 mb-4 shadow-xl">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Connect Everything</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight">
            Seamlessly <span className="text-blue-400">integrate</span> with your tools
          </h1>
          
          <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            From your website to WhatsApp and beyond. Connect YourSiteChat with the platforms your customers use most.
          </p>

          <div className="pt-8 flex flex-wrap justify-center gap-4">
            {integrationCategories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-blue-900 shadow-xl scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlatforms.map((platform, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${platform.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-8 h-8" />
                </div>
                
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-slate-900">{platform.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                    platform.status === 'Active' ? 'bg-green-100 text-green-700' :
                    platform.status === 'Beta' ? 'bg-orange-100 text-orange-700' :
                    platform.status === 'New' ? 'bg-blue-100 text-blue-700' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {platform.status}
                  </span>
                </div>
                
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{platform.description}</p>
                
                <a href={platform.link} className="inline-flex items-center gap-2 text-blue-600 font-black hover:text-blue-800 transition-colors uppercase tracking-widest text-xs pt-4">
                  View Setup Guide <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <platform.icon className="w-24 h-24" />
              </div>
            </div>
          ))}
          
          {/* Custom Integration Card */}
          <div className="group p-10 rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-gray-50 flex flex-col items-center justify-center text-center space-y-6 hover:bg-slate-100 transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
              <Plus className="w-8 h-8 text-slate-500" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Custom API</h3>
              <p className="text-slate-500 font-medium text-sm">Need something else? Build your own integration using our robust API.</p>
            </div>
            <button className="text-blue-600 font-black uppercase tracking-widest text-xs">Read API Docs</button>
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-100">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Safe & Secure</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Securely <span className="text-blue-600">syncing</span> across your business
              </h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                All integrations are built using industry-standard protocols. We prioritize data integrity and end-to-end encryption for every message processed across platforms.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 underline decoration-blue-200 decoration-2 underline-offset-4">Zero-latency sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                    <Layers className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 underline decoration-purple-200 decoration-2 underline-offset-4">Unified dashboard</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-square bg-slate-900 rounded-[3rem] relative overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="absolute inset-0 opacity-20">
                 <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
                   <path d="M0,30 Q25,80 50,30 T100,30" fill="none" stroke="white" strokeWidth="0.5" />
                 </svg>
               </div>
               <BarChart3 className="w-32 h-32 text-white opacity-90 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
