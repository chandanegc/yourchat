'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageCircle, ChevronDown, Facebook, Globe, Instagram,
  LayoutDashboard, Zap, Users, BookOpen, Briefcase, Shield,
  Info, Phone, HelpCircle, Rss, Lock, Bot, ShoppingCart, Store,
  Menu, X, Headphones, Megaphone, Building2, HeartPulse, Sparkles,
  ArrowRight, Calendar
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

const solutions = [
  {
    name: 'Sales',
    icon: Bot,
    href: '/solutions/sales',
  },
  {
    name: 'Customer Support',
    icon: Headphones,
    href: '/solutions/customer-support',
  },
  {
    name: 'eCommerce',
    icon: ShoppingCart,
    href: '/solutions/ecommerce',
  },
  {
    name: 'Retail',
    icon: Store,
    href: '/solutions/retail',
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    href: '/solutions/marketing',
  },
  {
    name: 'Education',
    icon: BookOpen,
    href: '/solutions/education',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    href: '/solutions/enterprise',
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    href: '/solutions/healthcare',
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
    href: '/solutions/customer-support',
  },
  {
    name:"Privacy Policy",
    description:"How we collect, use, and protect your data",
    icon:Shield,
    color:"text-blue-600",
    bgColor:"bg-blue-50",
    href:"/privacy"
  }
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
  {
    name: 'Appointment',
    description: 'Book a personal demo or consultation',
    icon: Calendar,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    href: '/appointment',
  },
];

type DropdownItem = {
  name: string;
  description?: string;
  icon: React.ElementType;
  color?: string;
  bgColor?: string;
  href: string;
};

function DropdownMenu({ items, solutions, isOpen, mobile = false }: { items: DropdownItem[]; solutions?: DropdownItem[]; isOpen: boolean; mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="mt-2 space-y-1 pl-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
          >
            <div className={`w-8 h-8 rounded-lg ${item.bgColor || 'bg-slate-50'} flex items-center justify-center flex-shrink-0`}>
              <item.icon className={`w-4 h-4 ${item.color || 'text-slate-600'}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800">{item.name}</span>
              {item.description && <span className="text-xs text-slate-500">{item.description}</span>}
            </div>
          </Link>
        ))}
        {solutions && (
           <div className="pt-2">
           <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Solutions</div>
           {solutions.map((item) => (
             <Link
               key={item.name}
               href={item.href}
               className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
             >
               <item.icon className="w-4 h-4 text-slate-400" />
               <span className="text-sm font-bold text-slate-800">{item.name}</span>
             </Link>
           ))}
         </div>
        )}
      </div>
    );
  }

  if (solutions) {
    return (
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 transform origin-top z-[60] ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}>
        <div className="flex h-full min-h-[420px]">
          {/* Left Panel */}
          <div className="w-[280px] bg-slate-50/50 p-6 border-r border-slate-100 flex flex-col gap-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
              >
                <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 transition-transform group-hover/item:scale-110`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800">{item.name}</span>
                  <span className="text-[10px] text-slate-500 leading-tight">{item.description}</span>
                </div>
              </Link>
            ))}
            
            <div className="mt-auto pt-4 border-t border-slate-200 px-2 text-center">
               <Link href="/form" className="flex items-center justify-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors group/trial">
                 Start a free 14-day trial
                 <ArrowRight className="w-3 h-3 transition-transform group-hover/trial:translate-x-1" />
               </Link>
            </div>
          </div>

          {/* Right Panel (Solutions) */}
          <div className="flex-1 p-6">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Solutions</div>
            <div className="grid grid-cols-1 gap-1">
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all group/sol"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-slate-400 group-hover/sol:text-indigo-600 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 group-hover/sol:text-indigo-600 transition-colors">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
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
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-slate-200/50' 
          : 'bg-white border-b border-slate-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer relative z-10">
            <div className="w-10 h-10 sm:w-11 sm:h-11 relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-xl rotate-0 group-hover:rotate-12 transition-all duration-500 scale-100 opacity-0 group-hover:opacity-20 blur-md"></div>
              <div className="relative inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 bg-white rounded-xl shadow-sm border border-slate-100">
                <img src="/chat.png" alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                YourSiteChat
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  AI Active
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-bold text-slate-600">
            {['Services', 'Integrations', 'Company', 'Explore', 'Pricing'].map((item) => {
              const isActive = openMenu === item;
              if (dropdowns[item]) {
                const parentHref = item === 'Services' ? '/services' : item === 'Integrations' ? '/integrations' : '#';
                return (
                  <div
                    key={item}
                    className="relative px-4 py-2 transition-all duration-300 rounded-xl hover:bg-slate-50 group/nav"
                    onMouseEnter={() => setOpenMenu(item)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link href={parentHref} className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${isActive ? 'text-indigo-600' : 'group-hover/nav:text-indigo-600'}`}>
                      {item}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`} />
                    </Link>
                    <DropdownMenu items={dropdowns[item]} solutions={item === 'Services' ? solutions : undefined} isOpen={isActive} />
                  </div>
                );
              }

              return (
                <Link
                  key={item}
                  href={item === 'Pricing' ? '/pricing' : '#'}
                  className="px-4 py-2 transition-all relative group whitespace-nowrap hover:bg-slate-50 rounded-xl hover:text-indigo-600"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-all px-2">
              Login
            </Link>
            <Link href="/form" className="group relative px-7 py-3 bg-indigo-600 text-white rounded-2xl font-bold overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:scale-[1.03] active:scale-[0.97]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-sm xl:text-base tracking-wide flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
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
                      <DropdownMenu items={dropdowns[item]} solutions={item === 'Services' ? solutions : undefined} isOpen={true} mobile={true} />
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