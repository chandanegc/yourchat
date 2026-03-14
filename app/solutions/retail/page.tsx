'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Store, ShoppingBag, Clock, Shield, Users, 
  ArrowRight, CheckCircle, Star, BarChart3, ShoppingCart,
  Calendar, Target, Award, Sparkles, MessageCircle,
  ChevronRight, Tag, UserCheck, Globe2,
  ClipboardCheck, HardDrive, FileText, Bell, Phone,
  Truck, Zap
} from 'lucide-react';

export default function RetailPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative overflow-hidden pt-12">
        
        {/* Hero Section */}
        <section className="pt-16 pb-12 px-6 bg-slate-900 relative overflow-hidden min-h-[calc(100vh-70px)] flex items-center">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-600/10 skew-x-[-30deg] translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto relative z-10 space-y-8 text-center pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl">
               <Store className="w-4 h-4 animate-bounce" />
               <span>The Retail & Physical Store Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
              Connect your <br /><span className="text-orange-500">Retail Store</span> to AI.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
              Bridge the gap between online and offline. Automate customer inquiries, check stock, and manage orders via WhatsApp and Web Chat.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
               <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-3 text-sm">
                 Start Free Trial <ArrowRight className="w-5 h-5 text-orange-600" />
               </button>
               <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 text-white border border-white/20 rounded-2xl font-black backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40 inline-flex items-center justify-center text-sm">
                 Book Store Demo
               </a>
            </div>
            
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 text-white font-bold">
               {["Hypermarkets", "Fashion", "Electronics", "Groceries"].map(t => (
                 <div key={t} className="flex flex-col items-center gap-2">
                   <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                     <Tag className="w-6 h-6 text-orange-400" />
                   </div>
                   <span className="text-xs">{t}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-xl font-bold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Retail Experience</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Modernize your <br />Customer Journey.
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Stock Checking", desc: "Let customers check product availability in real-time." },
                    { title: "Store Locator", desc: "Guide customers to their nearest physical branch." },
                    { title: "Click & Collect", desc: "Automate pick-up notifications and order status." }
                  ].map((f, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-black text-xl text-slate-900">{f.title}</h3>
                        <p className="text-slate-500 font-medium">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-orange-600/20 blur-[100px] rounded-full"></div>
                <div className="relative bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-8 border-slate-800">
                   <div className="bg-slate-800 rounded-[2rem] overflow-hidden aspect-[9/16] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" 
                        alt="Retail" 
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                           <Store className="w-8 h-8 text-orange-600" />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
