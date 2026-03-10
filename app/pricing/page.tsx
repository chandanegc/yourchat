'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Zap, Rocket, Building2, Sparkles, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for testing and small personal projects.",
    icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    features: [
      "1 AI Assistant",
      "100 messages/month",
      "Standard training",
      "Website integration",
      "Community support"
    ],
    buttonText: "Get Started",
    popular: false,
    gradient: "from-blue-50 to-indigo-50"
  },
  {
    name: "Pro",
    price: "49",
    description: "Everything you need for a growing business.",
    icon: <Zap className="w-8 h-8 text-purple-500" />,
    features: [
      "3 AI Assistants",
      "2,500 messages/month",
      "Priority training",
      "WhatsApp & Instagram",
      "Lead capture automation",
      "Email support"
    ],
    buttonText: "Start Free Trial",
    popular: true,
    gradient: "from-purple-50 to-pink-50"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced security and scale for large organizations.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    features: [
      "Unlimited Assistants",
      "Unlimited messages",
      "Custom training models",
      "Dedicated account manager",
      "SLA & Priority Support",
      "SSO & Custom Integration"
    ],
    buttonText: "Contact Sales",
    popular: false,
    gradient: "from-blue-50 to-slate-50"
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 text-blue-600 mb-4">
            <span className="text-sm font-bold uppercase tracking-wider">Pricing Plans</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            Plans that grow with <span className="text-blue-600">your business</span>
          </h1>
          
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300"
            >
              <div className={`w-6 h-6 bg-blue-600 rounded-full shadow-lg transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Annual</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-black rounded-full uppercase tracking-tighter">Save 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[2.5rem] border-2 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-purple-200 bg-white shadow-2xl scale-105 z-10' 
                  : 'border-slate-100 bg-white hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-black rounded-full shadow-xl uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900">
                    {plan.price === "Custom" ? "" : "$"}
                    {isAnnual && plan.price !== "Custom" ? Math.floor(parseInt(plan.price) * 0.8) : plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-slate-400 font-bold">/month</span>}
                </div>
                
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{plan.description}</p>
                
                <button className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02]' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}>
                  {plan.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <div className="pt-8 space-y-4">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">What's included:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white px-2">Still not sure which plan is for you?</h2>
          <p className="text-slate-400 font-medium text-lg">Talk to our product experts and we'll help you find the best solution for your business.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
              Chat With Expert
            </button>
            <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold backdrop-blur-md transition-all hover:bg-white/20 inline-block">
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
