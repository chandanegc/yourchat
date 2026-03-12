'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-slate-900">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600">Choose the perfect plan for your business needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Free Trial Card */}
          <div className="bg-white animate-float p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col space-y-8 h-full">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900">Free Trial</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">₹0</span>
                <span className="text-slate-500 font-medium">/forever</span>
              </div>
              <p className="text-slate-500 font-medium text-sm">Perfect for trying out our AI chatbot platform.</p>
            </div>

            <div className="space-y-4 flex-1">
              {[
                "1 AI Chatbot",
                "10 chats per month",
                "10,000 tokens/month",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-700 to-rose-400 text-white rounded-xl font-bold hover:shadow-lg transition-all">
              Start Free →
            </button>
          </div>

          {/* Starter Card (Highlighted) */}
          <div className="relative animate-float bg-gradient-to-b from-blue-600 to-indigo-800 p-10 rounded-[2.5rem] shadow-2xl flex flex-col space-y-8 text-white transform scale-105 z-10 h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white text-blue-600 text-xs font-bold rounded-full shadow-md whitespace-nowrap">
              Most Popular
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Starter</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">₹749</span>
                <span className="opacity-70 font-medium">/month</span>
              </div>
              <p className="opacity-70 font-medium text-sm">Scale your business with confidence.</p>
            </div>

            <div className="space-y-4 flex-1">
              {[
                "1 AI Chatbot",
                "100 chats per month",
                "100,000 tokens/month",
                "Advanced analytics",
                "Priority support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  {item}
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Get Started
            </button>
          </div>

          {/* Pro Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col space-y-8 h-full">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900">Pro</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">₹4,100</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <p className="text-slate-500 font-medium text-sm">Scale your business with confidence.</p>
            </div>

            <div className="space-y-4 flex-1">
              {[
                "5 AI Chatbots",
                "500 chats per month",
                "500,000 tokens/month",
                "Advanced analytics",
                "Priority support",
                "API access",
                "Custom branding",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-700 to-rose-400 text-white rounded-xl font-bold hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col space-y-8 h-full">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900">Enterprise</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">₹24,900</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <p className="text-slate-500 font-medium text-sm">Scale your business with confidence.</p>
            </div>

            <div className="space-y-4 flex-1">
              {[
                "20 AI Chatbots",
                "1000 chats per month",
                "5,000,000 tokens/month",
                "Advanced analytics",
                "Priority support",
                "API access",
                "Custom branding",
                "24/7 dedicated support",
                "Custom integrations",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-700 to-rose-400 text-white rounded-xl font-bold hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}