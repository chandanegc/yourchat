'use client';

import React from 'react';
import { MessageCircle, Twitter, Instagram, Facebook, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">Yoursitechat</span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed">
              Help customers instantly, reduce support workload, and deliver better experiences—24/7.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Linkedin, Github].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all">
                  <Icon className="w-5 h-5 text-slate-300 hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-6">
            <h5 className="text-lg font-bold text-white">Product</h5>
            <ul className="space-y-4">
              {[
                { name: "Features", href: "/feature" },
                { name: "How It Works", href: "/howItwork" },
                { name: "Pricing", href: "/pricing" },
                { name: "Integrations", href: "/integrations" },
                { name: "Changelog", href: "/changelog" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-6">
            <h5 className="text-lg font-bold text-white">Solutions</h5>
            <ul className="space-y-4">
              {[
                { name: "Customer Support", href: "/solutions/customer-support" },
                { name: "SaaS & Startups", href: "/solutions/saas" },
                { name: "E-commerce", href: "/solutions/ecommerce" },
                { name: "Enterprise", href: "/solutions/enterprise" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-6">
            <h5 className="text-lg font-bold text-white">Company</h5>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Support", href: "/support" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-sm">
            © {new Date().getFullYear()} Yoursitechat. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
