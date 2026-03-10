'use client';

import React from 'react';

export default function FloatingChat() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] animate-bounce-subtle">
      <button className="w-16 h-16 bg-transparent shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform cursor-pointer overflow-hidden p-0">
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src="/chat.png" 
            alt="Chat" 
            className="w-full h-full object-contain"
          />
        </div>
      </button>
      
      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
