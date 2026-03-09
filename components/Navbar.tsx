'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
            {['About', 'Services', 'Features', 'How It Works', 'Integrations', 'Security'].map((item, i) => (
              <Link 
                key={item}
                href={item === 'About' ? '/about' : item === 'Services' ? '/services' : '#'} 
                className="hover:text-indigo-600 transition-colors relative group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
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
