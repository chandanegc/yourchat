'use client';

import React from 'react';

export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Headings */}
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">About Us</span>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase">
            Benefits YourSiteChat
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-8 text-slate-600 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
          <p>
            We believe building great AI products starts with taking care of the people behind them. 
            At YourSiteChat, we focus on creating an environment where teams can do their best work—without burnout, 
            unnecessary process, or rigid hierarchies.
          </p>
          <p>
            We operate as a product-led team, which means ownership, trust, and flexibility are built into how we work. 
            Everyone is encouraged to think critically, experiment responsibly, and contribute directly to 
            decisions that shape the product.
          </p>
          <p>
            We support flexible work setups and value outcomes over hours. Whether it's how you structure your day 
            or how you approach a problem, we care more about impact than rigid rules.
          </p>
          <p>
            Learning is a core part of working here. As AI and customer support evolve, we make space for 
            continuous improvement—through hands-on problem-solving, feedback, and exposure to real customer use cases.
          </p>
          <p>
            Most importantly, we foster a culture of respect and balance. We want people to grow professionally 
            while still having the space to recharge, stay curious, and build sustainably.
          </p>
        </div>
      </div>
    </section>
  );
}
