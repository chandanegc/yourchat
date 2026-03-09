'use client';

import React from 'react';

const galleryImages = [
  {
    title: "Image Gallery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    color: "from-blue-900/40"
  },
  {
    title: "Image Gallery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80",
    color: "from-pink-900/40"
  }
];

export default function ImageGallery() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">
          Image Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((item, i) => (
            <div 
              key={i} 
              className="group relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-80 group-hover:opacity-90 transition-opacity`}></div>
              
              {/* Text */}
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                <p className="text-sm font-medium opacity-80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
