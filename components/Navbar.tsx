'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MessageCircle, ChevronDown, Facebook, ShoppingBag, Slack, Globe, Instagram } from 'lucide-react';

const integrations = [
  {
    name: 'Website',
    description: 'Connect with your website visitors',
    icon: Globe,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'WhatsApp',
    description: 'Instant messaging support',
    icon: MessageCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Facebook',
    description: 'Engage with Facebook users',
    icon: Facebook,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    name: 'Instagram',
    description: 'Connect with Instagram audience',
    icon: Instagram,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex items-center">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full opacity-80 blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Yoursitechat
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {['About Us', 'Services', 'How It Works', 'Integrations', 'Security', 'Blog', 'Contact'].map((item, i) => {
              if (item === 'Integrations') {
                return (
                  <div 
                    key={item}
                    className="relative py-2"
                    onMouseEnter={() => setIsIntegrationsOpen(true)}
                    onMouseLeave={() => setIsIntegrationsOpen(false)}
                  >
                    <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer outline-none">
                      Integrations <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isIntegrationsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 transform origin-top ${
                      isIntegrationsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}>
                      <div className="p-4 flex flex-col gap-1">
                        {integrations.map((integration) => (
                          <Link
                            key={integration.name}
                            href="#"
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                          >
                            <div className={`w-10 h-10 rounded-lg ${integration.bgColor} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                              <integration.icon className={`w-5 h-5 ${integration.color}`} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-800">{integration.name}</span>
                              <span className="text-[10px] text-slate-500 leading-tight">{integration.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link 
                  key={item}
                  href={
                    item === 'About Us' ? '/about' : 
                    item === 'Services' ? '/services' : 
                    item === 'Features' ? '/feature' : 
                    item === 'How It Works' ? '/howItwork' : 
                    item === 'Security' ? '/security' : 
                    item === 'Blog' ? '/blog' : 
                    item === 'Contact' ? '/contact' : 
                    item === 'Support' ? '/support' : 
                    '#'
                  } 
                  className="hover:text-indigo-600 transition-colors relative group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
