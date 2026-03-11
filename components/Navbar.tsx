'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageCircle, ChevronDown, Facebook, Globe, Instagram,
  LayoutDashboard, Zap, Users, BookOpen, Briefcase, Shield,
  Info, Phone, HelpCircle, Rss, Lock, Bot, ShoppingCart, Store,
  Menu, X
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

function DropdownMenu({ items, isOpen, mobile = false }: { items: DropdownItem[]; isOpen: boolean; mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="mt-2 space-y-1 pl-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
          >
            <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
              <item.icon className={`w-4 h-4 ${item.color}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800">{item.name}</span>
              <span className="text-xs text-slate-500">{item.description}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const dropdowns: Record<string, DropdownItem[]> = {
    Services: services,
    Integrations: integrations,
    Company: company,
    Explore: explore,
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  return (
    <>
      {/* Placeholder to prevent content from hiding under the fixed navbar */}
      <div className="h-[70px]  w-full shrink-0" aria-hidden="true" />
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-white border-b border-slate-50'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
              <div className="absolute inset-0 flex items-center justify-center transform group-hover:rotate-6 transition-transform overflow-hidden">
                <img src="/chat.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
              Yoursitechat
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm font-medium text-slate-600">
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
                    <Link href={parentHref} className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap">
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
                  className="hover:text-indigo-600 transition-colors relative group whitespace-nowrap"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/form" className="px-5 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm xl:text-base whitespace-nowrap">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-[73px] sm:top-[81px] bg-white border-t border-slate-100 transition-all duration-300 ease-in-out z-50 overflow-y-auto ${
          mobileMenuOpen ? 'max-h-[calc(100vh-73px)] sm:max-h-[calc(100vh-81px)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="p-4 sm:p-6 space-y-4">
            {['Services', 'Integrations', 'Company', 'Explore', 'Pricing'].map((item) => {
              if (dropdowns[item]) {
                return (
                  <div key={item} className="border-b border-slate-100 pb-4">
                    <button
                      onClick={() => toggleMobileDropdown(item)}
                      className="flex items-center justify-between w-full text-left font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <span>{item}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        mobileDropdownOpen === item ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {mobileDropdownOpen === item && (
                      <DropdownMenu items={dropdowns[item]} isOpen={true} mobile={true} />
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item}
                  href={item === 'Pricing' ? '/pricing' : '#'}
                  className="block py-2 font-medium text-slate-700 hover:text-indigo-600 transition-colors border-b border-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/form"
                className="block w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold text-center hover:shadow-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
}