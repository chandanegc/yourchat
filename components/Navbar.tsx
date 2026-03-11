'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageCircle, ChevronDown, Facebook, Globe, Instagram,
  LayoutDashboard, Zap, Users, BookOpen, Briefcase, Shield,
  Info, Phone, HelpCircle, Rss, Lock, Bot, ShoppingCart, Store
} from 'lucide-react';

const services = [
  {
    name: 'Website',
    description: 'Live chat widget for your website visitors',
    icon: Globe,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    href: '/service/website',
  },
  {
    name: 'WhatsApp',
    description: 'Automate support via WhatsApp messages',
    icon: MessageCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    href: '/service/whatsapp',
  },
  {
    name: 'Facebook',
    description: 'Engage customers on Facebook Messenger',
    icon: Facebook,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    href: '/service/facebook',
  },
  {
    name: 'Instagram',
    description: 'Auto-reply to Instagram DMs & comments',
    icon: Instagram,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    href: '/service/instagram',
  },
];

const integrations = [
  {
    name: 'WhatsApp Service',
    description: 'End-to-end WhatsApp automation & broadcasts',
    icon: MessageCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    href: '/integration/whatsapp',
  },
  {
    name: 'Facebook Service',
    description: 'Manage Facebook page conversations at scale',
    icon: Facebook,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    href: '/integration/facebook',
  },
  {
    name: 'Instagram Service',
    description: 'Automate Instagram story & DM responses',
    icon: Instagram,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    href: '/integration/instagram',
  },
  {
    name: 'Website Chat',
    description: 'Embed smart live chat on any website',
    icon: LayoutDashboard,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    href: '/integration/website',
  },
];

const company = [
  {
    name: 'About Us',
    description: 'Our story, mission and the team behind Yourchat',
    icon: Info,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    href: '/about',
  },
  {
    name: 'How It Works',
    description: 'See how Yourchat powers your business',
    icon: HelpCircle,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    href: '/howItwork',
  },
  {
    name: 'Contact',
    description: 'Reach our team anytime, we\'re happy to help',
    icon: Phone,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    href: '/contact',
  },
];

const explore = [
  {
    name: 'Blog',
    description: 'Tips, guides and product updates from our team',
    icon: Rss,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    href: '/blog',
  },
  {
    name: 'Career',
    description: 'Join us — explore open roles at Yourchat',
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    href: '/career',
  },
  {
    name: 'Security',
    description: 'How we keep your data safe and private',
    icon: Shield,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    href: '/security',
  },
];

type DropdownItem = {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  href: string;
};

function DropdownMenu({ items, isOpen }: { items: DropdownItem[]; isOpen: boolean }) {
  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 transform origin-top ${
      isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
    }`}>
      <div className="p-4 flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group"
          >
            <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800">{item.name}</span>
              <span className="text-[10px] text-slate-500 leading-tight">{item.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdowns: Record<string, DropdownItem[]> = {
    Services: services,
    Integrations: integrations,
    Company: company,
    Explore: explore,
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-white border-b border-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 flex items-center justify-center transform group-hover:rotate-6 transition-transform overflow-hidden">
                <img src="/chat.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Yoursitechat
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {['Services', 'Integrations', 'Company', 'Explore', 'Pricing'].map((item) => {
              if (dropdowns[item]) {
                const parentHref = item === 'Services' ? '/services' : item === 'Integrations' ? '/integrations' : '#';
                return (
                  <div
                    key={item}
                    className="relative py-2"
                    onMouseEnter={() => setOpenMenu(item)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link href={parentHref} className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer">
                      {item}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMenu === item ? 'rotate-180' : ''}`} />
                    </Link>
                    <DropdownMenu items={dropdowns[item]} isOpen={openMenu === item} />
                  </div>
                );
              }

              return (
                <Link
                  key={item}
                  href={item === 'Pricing' ? '/pricing' : '#'}
                  className="hover:text-indigo-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/form" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}