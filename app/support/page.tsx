'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Search, 
  LifeBuoy, 
  MessageCircle, 
  FileText, 
  ChevronDown, 
  Mail, 
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

const supportCategories = [
  {
    title: "Getting Started",
    description: "Learn how to set up and train your first AI assistant.",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
    links: ["Quick Start Guide", "Training Basics", "Installation on Website"]
  },
  {
    title: "Account & Billing",
    description: "Manage your subscription, invoices, and profile settings.",
    icon: ShieldCheck,
    color: "bg-blue-50 text-blue-600",
    links: ["Subscription Plans", "Billing History", "Changing Password"]
  },
  {
    title: "Integrations",
    description: "Connect with WhatsApp, Instagram, Facebook, and more.",
    icon: Globe,
    color: "bg-green-50 text-green-600",
    links: ["WhatsApp API Setup", "Instagram Connection", "Messenger Integration"]
  },
  {
    title: "Advanced Features",
    description: "Deep dive into lead capture, analytics, and custom rules.",
    icon: FileText,
    color: "bg-purple-50 text-purple-600",
    links: ["Smart Escalation", "Lead Exporting", "Analytics Dashboard"]
  }
];

const faqs = [
  {
    q: "How do I install the chatbot on my website?",
    a: "Installation is simple! Just copy the code snippet from your dashboard and paste it before the closing </body> tag on your website."
  },
  {
    q: "Can I connect multiple WhatsApp numbers?",
    a: "Yes, depending on your plan, you can connect multiple channels to a single dashboard for unified management."
  },
  {
    q: "Is there a free trial available?",
    a: "Absolutely! We offer a 14-day free trial on all plans so you can test all the premium features before committing."
  },
  {
    q: "How does the AI handle complex queries?",
    a: "If the AI encounters a question it can't answer, it uses 'Smart Escalation' to notify your human team immediately."
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Help Hero */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-blue-100 mb-4">
            <LifeBuoy className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Help Center</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            How can we <span className="text-blue-400">help you</span> today?
          </h1>
          
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or keywords..."
              className="w-full pl-14 pr-6 py-5 bg-white rounded-2xl shadow-2xl text-slate-800 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-lg"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            <span>Popular:</span>
            <a href="#" className="hover:text-white transition-colors underline decoration-blue-500/50">WhatsApp API</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-blue-500/50">Website Install</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-blue-500/50">Lead Capture</a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportCategories.map((cat, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-600 font-medium mb-6 text-sm leading-relaxed">{cat.description}</p>
              <ul className="space-y-3">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1">
                      {link} <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-black text-slate-900">Still need help?</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Our experts are ready to help you with any questions or technical issues you might be facing.
            </p>
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase">Email Support</p>
                  <p className="text-slate-900 font-bold">support@yoursitechat.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase">Call Us</p>
                  <p className="text-slate-900 font-bold">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase">Response Time</p>
                  <p className="text-slate-900 font-bold">Under 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-slate-100 pb-4">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between text-left py-4 hover:text-blue-600 transition-colors"
                    >
                      <span className="text-lg font-bold text-slate-800">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Talk to a human?</h3>
                <p className="text-blue-100 font-medium">Join our community or start a live chat right now.</p>
              </div>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <div className="w-8 h-8 overflow-hidden">
                  <img src="/chat.png" alt="Chat" className="w-full h-full object-contain" />
                </div>
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
