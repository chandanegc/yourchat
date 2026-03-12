'use client';

import React from 'react';
import { MessageCircle, Target, Headphones, TrendingUp } from 'lucide-react';

export default function HeroWithFloatingCards() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F9A834] via-[#FDB44B] to-[#F9A834] overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-tight">
              TURN CONVERSATIONS<br />
              INTO CONVERSIONS<br />
              <span className="relative inline-block">
                <span className="bg-yellow-300 text-black px-4 py-1 italic">AUTOMATICALLY</span>
              </span>
            </h1>

            <p className="text-xl text-gray-900 leading-relaxed max-w-lg">
              Engage customers instantly on WhatsApp with AI-powered chatbots that sell, support, and scale your business 24/7.
            </p>

            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3">
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right - Chat Widget with Floating Cards */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            {/* Floating Card 1 - Top Left: AI Chatbot */}
            <div className="hidden sm:block absolute -top-12 -left-16 lg:-left-24 bg-white rounded-2xl shadow-2xl p-4 w-60 animate-float z-20 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-gray-800">AI Chatbot</div>
                  <div className="text-xs text-gray-500 mb-2">Response Rate</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[82%]"></div>
                  </div>
                  <div className="text-xs text-green-600 font-semibold mt-1">82% efficiency</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Left: Customer Support */}
            <div className="hidden sm:block absolute top-64 lg:top-72 -left-16 lg:-left-24 bg-white rounded-2xl shadow-2xl p-4 w-60 animate-float z-20 border border-gray-100" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-gray-800">Customer Support</div>
                  <div className="text-xs text-gray-500 mb-2">Tickets Resolved</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[95%]"></div>
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-1">95% resolved today</div>
                </div>
              </div>
            </div>

            {/* Floating Card 3 - Top Right: Target Audience */}
            <div className="hidden sm:block absolute -top-12 -right-8 lg:-right-16 bg-white rounded-2xl shadow-2xl p-4 w-60 animate-float z-20 border border-gray-100" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-gray-800">Target Audience</div>
                  <div className="text-xs text-gray-500 mb-2">Conversion Rate</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-[68%]"></div>
                  </div>
                  <div className="text-xs text-purple-600 font-semibold mt-1">+68% conversions</div>
                </div>
              </div>
            </div>

            {/* Floating Card 4 - Bottom Right: About the Company */}
            <div className="hidden sm:block absolute top-64 lg:top-80 -right-8 lg:-right-16 bg-white rounded-2xl shadow-2xl p-4 w-56 animate-float z-20 border border-gray-100" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-gray-800">About the company</div>
                </div>
              </div>
            </div>

            {/* Main Chat Widget */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-sm">Yoursitechat</div>
                    <div className="text-xs opacity-90">Smart AI Assistant</div>
                  </div>
                </div>
                <button className="text-white hover:bg-white/20 p-2 rounded-full transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-[450px] relative">
                {/* Customer Support Badge */}
                <div className="inline-block bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-xs font-semibold text-gray-700">Customer Support</div>
                  </div>
                </div>

                {/* Suggestions */}
                <div className="space-y-3 pt-6">
                  <div className="text-sm font-semibold text-gray-700">
                    Suggestions on what to ask Our AI
                  </div>

                  {[
                    'What can I ask you?',
                    'Which one of services is performing the best?',
                    'What service should I be considering about right now?'
                  ].map((question, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl px-4 py-3 text-sm hover:shadow-lg transition-all cursor-pointer animate-slide-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {question}
                    </div>
                  ))}
                </div>

                {/* Input Box */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-3 flex items-center gap-3">
                  <button className="text-gray-400 hover:text-indigo-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Ask me anything about CDB..."
                    className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
                  />
                  <button className="bg-gradient-to-r from-indigo-600 to-blue-500 p-2 rounded-full hover:shadow-lg transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}