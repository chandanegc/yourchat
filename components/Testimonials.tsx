'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Syne } from 'next/font/google';
import { DM_Sans } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI Designer",
    company: "Airbnb",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop",
    text: "Found my dream job within 2 weeks of creating my profile. The process was seamless and the recommendations were spot on!",
    highlight: false,
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    company: "Discord",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop",
    text: "Impressive how well the platform understood my skills and matched me with relevant opportunities. Landed 4 interviews in a week.",
    highlight: true,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Stripe",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop",
    text: "The one-click apply feature saved me so much time. Multiple applications in minutes, and interviews started rolling in within days.",
    highlight: false,
  },
  {
    name: "James Patel",
    role: "Data Scientist",
    company: "OpenAI",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&fit=crop",
    text: "The AI-powered job matching is genuinely next-level. It understood what I wanted better than I could describe it myself.",
    highlight: false,
  },
  {
    name: "Priya Nair",
    role: "DevOps Engineer",
    company: "Cloudflare",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80&fit=crop",
    text: "Switched careers from networking to cloud infrastructure thanks to this platform. The skill gap analysis was a game changer.",
    highlight: true,
  },
  {
    name: "Lucas Martin",
    role: "Backend Engineer",
    company: "Figma",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&q=80&fit=crop",
    text: "Clean interface, smart filters, and employers actually respond. This is how job hunting should feel — not exhausting.",
    highlight: false,
  },
  {
    name: "Aisha Koroma",
    role: "UX Researcher",
    company: "Netflix",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&q=80&fit=crop",
    text: "Within 3 weeks I had offers from two top companies. The resume tips alone were worth signing up for.",
    highlight: false,
  },
  {
    name: "Tom Nguyen",
    role: "iOS Developer",
    company: "Spotify",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&q=80&fit=crop",
    text: "Best job search experience I've had — and I've tried them all. The company culture insights are uniquely helpful.",
    highlight: true,
  },
];

const companyColors: Record<string, string> = {
  Airbnb: "#FF5A5F",
  Discord: "#5865F2",
  Stripe: "#635BFF",
  OpenAI: "#10A37F",
  Cloudflare: "#F6821F",
  Figma: "#F24E1E",
  Netflix: "#E50914",
  Spotify: "#1DB954",
};

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const accentColor = companyColors[t.company] || "#6366f1";

  return (
    <div
      className="relative flex-shrink-0 w-80 mx-3 rounded-2xl p-6 bg-white border border-slate-100 shadow-md"
      style={{
        boxShadow: t.highlight
          ? `0 8px 32px -4px ${accentColor}33, 0 2px 8px rgba(0,0,0,0.06)`
          : '0 4px 24px rgba(0,0,0,0.07)',
        borderColor: t.highlight ? `${accentColor}55` : undefined,
      }}
    >
      <div className="absolute top-5 right-5 opacity-10" style={{ color: accentColor }}>
        <Quote className="w-10 h-10 fill-current" />
      </div>

      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className={`${dmSans.className} text-slate-600 text-sm leading-relaxed mb-5 font-medium`}>
        "{t.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img
          src={t.img}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover"
          style={{ boxShadow: `0 0 0 2px ${accentColor}44` }}
        />
        <div>
          <p className={`${dmSans.className} text-sm font-bold text-slate-900`}>{t.name}</p>
          <p className={`${dmSans.className} text-xs text-slate-400`}>
            {t.role} ·{' '}
            <span className="font-semibold" style={{ color: accentColor }}>
              {t.company}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  const duration = items.length * 6;
  return (
    <div className="overflow-hidden w-full">
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-ltr { animation: marquee-ltr ${duration}s linear infinite; }
        .marquee-rtl { animation: marquee-rtl ${duration}s linear infinite; }
        .marquee-ltr:hover, .marquee-rtl:hover { animation-play-state: paused; }
      `}</style>
      <div
        className={`flex ${reverse ? 'marquee-rtl' : 'marquee-ltr'}`}
        style={{ width: 'max-content' }}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <style>{`
        .fade-left {
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <div className={`${dmSans.className} inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-5 tracking-wide uppercase`}>
          ✦ Real Stories
        </div>
        <h2 className={`${syne.className} text-5xl font-bold text-slate-900 mb-4`}>
          Loved by <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">10,000+</span> professionals
        </h2>
        <p className={`${dmSans.className} text-slate-500 text-lg max-w-xl mx-auto`}>
          From first job seekers to senior engineers — people find their next chapter here.
        </p>
      </div>

      <div className="fade-left space-y-5">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-6">
        <div className="grid grid-cols-3 divide-x divide-slate-100 bg-white rounded-2xl shadow-sm border border-slate-100 py-6 px-4">
          {[
            { value: "10K+", label: "Jobs Placed" },
            { value: "4.9★", label: "Average Rating" },
            { value: "72hrs", label: "Avg. Time to Offer" },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <p className={`${syne.className} text-3xl font-bold-100 text-slate-900`}>{stat.value}</p>
              <p className={`${dmSans.className} text-slate-500 text-sm mt-1 font-medium`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}