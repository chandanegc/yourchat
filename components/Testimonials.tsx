'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-50/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-slate-900">What Our Users Say</h2>
          <p className="text-lg text-slate-600">Hear from professionals who found their dream jobs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "UI Designer at Airbnb",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80",
              text: "I found my dream job within 2 weeks of creating my profile. The process was seamless and the job recommendations were spot on!"
            },
            {
              name: "Michael Chen",
              role: "Frontend Developer at Discord",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80",
              text: "As a developer, I was impressed by how well the platform understood my skills and matched me with relevant opportunities.",
              highlight: true
            },
            {
              name: "Emily Rodriguez",
              role: "Product Manager at Stripe",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80",
              text: "The one-click apply feature saved me so much time. I was able to apply to multiple jobs quickly and landed interviews within days."
            }
          ].map((testimonial, i) => (
            <div key={i} className={`bg-white p-8 rounded-3xl border ${testimonial.highlight ? 'border-blue-400 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]' : 'border-slate-100 shadow-sm'} space-y-6 transition-all duration-300 hover:-translate-y-2`}>
              <div className="flex items-center gap-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-slate-900">{testimonial.name}</h5>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
