'use client';

import React from 'react';
import { Mail } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 px-6 bg-blue-50/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-slate-900">Our Other Services</h2>
          <p className="text-lg text-slate-600">What You Can Do With YourSiteChat</p>
        </div>

        <div className="space-y-8">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI WhatsApp Chatbot",
                desc: "Automate customer replies using AI to answer questions, qualify leads, and guide users instantly."
              },
              {
                title: "Official WhatsApp API",
                desc: "Get verified WhatsApp Business API with high delivery, compliance, and scalability."
              },
              {
                title: "Workflow Automation",
                desc: "Create smart message flows triggered by keywords, actions, or customer behavior — no code required."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium opacity-80">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Centered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Lead Capture & CRM Sync",
                desc: "Collect user data, tag conversations, and sync leads directly with your CRM."
              },
              {
                title: "Broadcast & Campaigns",
                desc: "Send promotional and transactional messages to thousands of users — safely and efficiently."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium opacity-80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
