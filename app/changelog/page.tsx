'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Zap, 
  Rocket, 
  Settings, 
  Bug, 
  Sparkles, 
  Clock,
  Layout,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  ChevronRight
} from 'lucide-react';

const changelogEntries = [
  {
    version: "v2.4.0",
    date: "March 2024",
    title: "The Multi-Platform Revolution",
    description: "Our biggest update yet, adding official WhatsApp and Instagram integrations to unify your communication channels.",
    categories: [
      {
        name: "New Features",
        icon: Rocket,
        color: "bg-blue-50 text-blue-600",
        items: [
          "Official WhatsApp Business API integration",
          "Instagram Direct Message automation",
          "Unified Customer Dashboard v2",
          "Real-time analytics for all channels"
        ]
      },
      {
        name: "Improvements",
        icon: Settings,
        color: "bg-purple-50 text-purple-600",
        items: [
          "50% faster AI response times",
          "Enhanced training data processing",
          "Mobile-optimized dashboard layout",
          "Improved lead notification system"
        ]
      }
    ]
  },
  {
    version: "v2.3.1",
    date: "February 2024",
    title: "Security & Stability",
    description: "Focusing on enterprise-grade security and SOC 2 compliance readiness.",
    categories: [
        {
          name: "Security",
          icon: ShieldCheck,
          color: "bg-green-50 text-green-600",
          items: [
            "End-to-end encryption for all messages",
            "Single Sign-On (SSO) for Enterprise plans",
            "Granular permission settings for team members",
            "Audit logging for all system activities"
          ]
        },
        {
          name: "Bug Fixes",
          icon: Bug,
          color: "bg-orange-50 text-orange-600",
          items: [
            "Fixed widget rendering on Safari mobile",
            "Resolved dashboard table scrolling issue",
            "Corrected lead export timestamp errors"
          ]
        }
      ]
  },
  {
    version: "v2.2.0",
    date: "January 2024",
    title: "AI Wisdom Update",
    description: "Introducing advanced context memory and emotional intelligence to AI assistants.",
    categories: [
        {
          name: "AI Update",
          icon: Sparkles,
          color: "bg-yellow-50 text-yellow-600",
          items: [
            "Context memory: AI remembers previous chats",
            "Sentiment detection: AI flags frustrated users",
            "Smart hand-off: Automated escalation to humans",
            "Custom brand voice training"
          ]
        }
      ]
  }
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full border border-blue-200">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest">Product Updates</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
            What's <span className="text-blue-600">new</span> at YourSiteChat
          </h1>
          
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Stay up to date with the latest features, improvements, and bug fixes as we continuously evolve our platform.
          </p>
          
          <div className="flex items-center gap-6 pt-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
              Subscribe to Updates
            </button>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden ring-4 ring-slate-50">
                  <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold ring-4 ring-slate-50">+1.2k</div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog List */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-24">
          {changelogEntries.map((entry, i) => (
            <div key={i} className="relative pl-12 border-l border-slate-100">
              {/* Timeline Marker */}
              <div className="absolute top-0 left-[-13px] w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-lg"></div>
              
              <div className="space-y-12">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600">{entry.version}</span>
                    <span className="flex items-center gap-2 uppercase tracking-widest">
                      <Clock className="w-4 h-4" />
                      {entry.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900">{entry.title}</h2>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">{entry.description}</p>
                </div>

                {/* Categories */}
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  {entry.categories.map((cat, j) => (
                    <div key={j} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center shadow-md`}>
                          <cat.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{cat.name}</h4>
                      </div>
                      <ul className="space-y-4">
                        {cat.items.map((item, k) => (
                          <li key={k} className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2"></div>
                            <span className="text-sm font-bold text-slate-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="pt-24 text-center">
            <button className="px-10 py-5 bg-white border border-slate-100 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-slate-900 group">
                View Older Versions <ChevronRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
