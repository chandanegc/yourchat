'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Tag,
  Search,
  CheckCircle,
  Smartphone,
  MessageCircle,
  Sparkles,
  Layers,
  BarChart3,
  Heart
} from 'lucide-react';

const features = [
  {
    title: "Instant Order Tracking",
    description: "Let customers track their orders directly through the chat widget. Reduce 'Where is my order?' tickets by 70%.",
    icon: Truck,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Smart Product Upsells",
    description: "AI analyzes customer intent to recommend the right products at the right time, increasing average order value.",
    icon: Zap,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Abandoned Cart Recovery",
    description: "Proactively reach out to customers who left items in their cart via WhatsApp or Facebook Messenger.",
    icon: ShoppingBag,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Automated Refunds & Returns",
    description: "Handle simple return requests and refund status checks instantly with our pre-built e-commerce workflows.",
    icon: CreditCard,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function EcommerceSolution() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-42 pb-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-[15deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-10 group cursor-pointer">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-100 text-slate-900 rounded-full font-black uppercase tracking-widest text-[10px] shadow-sm transform group-hover:scale-105 transition-transform">
                 <ShoppingBag className="w-4 h-4" />
                 <span>The E-commerce Solution</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Turn chats <br /><span className="text-blue-600">into checkouts.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                Unlock the power of conversational commerce. From personalized styling advice to automated order updates, your store is always open.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                 <button className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                   Scale My Store <ArrowRight className="w-6 h-6 text-blue-600" />
                 </button>
                 <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black transition-all hover:bg-slate-50 inline-flex items-center justify-center">
                   Watch Demo Video
                 </a>
              </div>
              
              <div className="pt-10 flex items-center gap-8 border-t border-slate-100">
                 <div className="space-y-1">
                    <p className="text-3xl font-black text-slate-900">4x</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Higher Conversion</p>
                 </div>
                 <div className="w-px h-10 bg-slate-100"></div>
                 <div className="space-y-1">
                    <p className="text-3xl font-black text-slate-900">+35%</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Value (AOV)</p>
                 </div>
              </div>
           </div>

           <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-[4rem] group-hover:scale-110 transition-transform -rotate-6"></div>
              <div className="relative bg-white p-10 rounded-[3.5rem] shadow-2xl border border-slate-100 space-y-10 rotate-3 group-hover:rotate-0 transition-transform">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-white" />
                       </div>
                       <p className="font-black text-slate-900">AI Concierge</p>
                    </div>
                    <Heart className="w-6 h-6 text-pink-500 fill-current opacity-20" />
                 </div>
                 <div className="space-y-8">
                    {/* Message 1 */}
                    <div className="flex items-start gap-4">
                       <div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0"></div>
                       <div className="bg-slate-50 p-6 rounded-3xl rounded-tl-none space-y-4">
                          <p className="text-sm font-bold text-slate-700">Looking for a wedding guest outfit that's blue and midi length.</p>
                       </div>
                    </div>
                    {/* Message 2 */}
                    <div className="flex items-start gap-4 flex-row-reverse">
                       <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 shadow-md"></div>
                       <div className="bg-blue-600 p-6 rounded-3xl rounded-tr-none text-white space-y-4 shadow-xl">
                          <p className="text-sm font-bold">Great choice! Check out our Midnight Blue Silk Dress. It fits perfectly and customers love it for weddings.</p>
                          <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-4">
                             <div className="w-12 h-12 bg-white/20 rounded-xl"></div>
                             <div>
                                <p className="text-xs font-black uppercase tracking-widest opacity-80">Midnight Silk</p>
                                <p className="text-sm font-black">$129.00</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, i) => (
              <div key={i} className="group p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                 <div className={`w-16 h-16 rounded-2xl ${f.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                    <f.icon className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-4">{f.title}</h3>
                 <p className="text-slate-500 font-bold text-sm leading-relaxed">{f.description}</p>
                 <div className="pt-8 group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100 duration-500">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Integration Banner */}
      <section className="py-32 px-6 bg-slate-900 border-t border-white/5">
         <div className="max-w-7xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-black text-white px-2 tracking-tighter">Native E-commerce <span className="text-blue-500">Integrations.</span></h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-700 pt-8 grayscale hover:grayscale-0">
               {["Shopify", "WooCommerce", "Magento", "BigCommerce"].map(p => (
                 <div key={p} className="flex flex-col items-center gap-4 group">
                    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-xl">
                       <Tag className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-white font-black uppercase tracking-widest text-[10px]">{p}</span>
                 </div>
               ))}
            </div>
            <div className="pt-12">
               <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-2xl">
                  Connect Your Store Now
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
