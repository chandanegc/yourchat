'use client';

import React, { useState, useEffect } from 'react';
import { Search, MessageCircle, Target, Users } from 'lucide-react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-[60] animate-bounce-subtle">
        <button className="w-14 h-14 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center group hover:scale-110 transition-transform cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Yoursitechat
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              {['Features', 'About Us', 'How It Works', 'Integrations', 'Security'].map((item, i) => (
                <a 
                  key={item}
                  href="#" 
                  className="hover:text-indigo-600 transition-colors relative group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>
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

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
           <img src="/hero-bg.png" alt="Hero Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white z-[1]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-5xl font-black leading-tight">
              <span className="text-slate-900">TURN CONVERSATIONS</span>
              <br />
              <span className="text-slate-900">INTO CONVERSIONS</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-slate-900 px-3">AUTOMATICALLY</span>
                <span className="absolute inset-0 bg-yellow-400 transform -skew-x-12"></span>
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Engage customers instantly on WhatsApp with AI-powered chatbots that sell, support, 
              and scale your business 24/7.
            </p>

            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative animate-slide-in-right">
            {/* Main Phone Mockup */}
            <div className="relative mx-auto w-full max-w-md">
              {/* Floating Card - Customer Support */}
              <div className="absolute top-10 -left-8 bg-white rounded-2xl shadow-2xl p-4 w-56 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">Customer Support</div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                      <div className="bg-teal-500 h-1.5 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - About Company */}
              <div className="absolute bottom-32 -left-12 bg-white rounded-2xl shadow-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full"></div>
                  <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
                </div>
                <div className="text-xs font-semibold mt-2 text-slate-900">About the company</div>
              </div>

              {/* Floating Card - Target Audience */}
              <div className="absolute top-40 -right-8 bg-white rounded-2xl shadow-2xl p-4 w-52 animate-float z-20" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" className="w-full h-full object-crop" />
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-red-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-red-500 h-1.5 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="text-xs font-semibold text-slate-700">Target Audience</div>
                  <Target className="w-4 h-4 text-red-500" />
                </div>
              </div>

              {/* Main Chat Interface */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="text-white">
                      <div className="font-semibold text-sm">Yoursitechat</div>
                      <div className="text-xs opacity-90">Smart AI Assistant</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-white">
                    <button className="hover:bg-white/20 p-1 rounded">✕</button>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="p-6 space-y-4 bg-gradient-to-b from-slate-50 to-white min-h-[400px]">
                  <div className="bg-slate-100 rounded-2xl p-4 inline-block">
                    <div className="text-xs font-semibold text-slate-600 mb-2">Customer Support</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-700 mb-3">
                      Suggestions on what to ask Our AI
                    </div>
                    
                    {[
                      'What can I ask you?',
                      'Which one of services is performing the best?',
                      'What service should I be considering about right now?'
                    ].map((question, i) => (
                      <div 
                        key={i}
                        className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl px-4 py-3 text-sm hover:shadow-lg transition-shadow cursor-pointer animate-slide-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {question}
                      </div>
                    ))}
                  </div>

                  {/* Input Area */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl shadow-lg border border-slate-200 p-3 flex items-center gap-3">
                    <button className="text-slate-600 hover:text-indigo-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      </svg>
                    </button>
                    <input 
                      type="text" 
                      placeholder="Ask me anything about Yoursitechat..."
                      className="flex-1 outline-none text-sm text-slate-600 placeholder:text-slate-400"
                    />
                    <button className="text-indigo-600 hover:text-indigo-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white/50 backdrop-blur-sm border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Stripe */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="h-6 w-auto">
                <svg viewBox="0 0 635 262" className="h-full fill-slate-500 group-hover:fill-[#635BFF] transition-colors">
                  <path d="M634.3 118.8c0-11-8.2-16.1-22.1-16.1-14.9 0-25.5 5.5-25.5 5.5l-4.7-16s12-7 32-7c30.2 0 46.1 14.3 46.1 40.5V191h-21.7v-13s-9.3 15.6-31.1 15.6c-21.3 0-36-12.7-36-32.3 0-24.8 23.3-33.1 53-33.1 5.3 0 10.1.3 10.1.3v-10.2zM435.4 71.8l17.8-6.3V40.2l-17.8 6.3V71.8zm0 22.5h17.8V191h-17.8V94.3zM348.4 118.8c0-11-8.2-16.1-22.1-16.1-14.9 0-25.5 5.5-25.5 5.5l-4.7-16s12-7 32-7c30.2 0 46.1 14.3 46.1 40.5V191h-21.7v-13s-9.3 15.6-31.1 15.6c-21.3 0-36-12.7-36-32.3 0-24.8 23.3-33.1 53-33.1 5.3 0 10.1.3 10.1.3v-10.2zM216.5 70.3v24H187v72.5c0 10.8 7.3 15.4 16.5 15.4 7 0 11.5-1.5 11.5-1.5l1.5 15.2s-7 3.5-19.3 3.5c-23.7 0-33.5-14.7-33.5-39.7V94.3h-19.8V71.8l19.8-11.5 6.3-17.8L187 35.2v25.2l29.5 9.9zM103.1 194.5c-16.1 0-28.7-5.5-28.7-5.5l-4.7-16s12-10 32-10c30.2 0 46.1 14.3 46.1 40.5V262h-21.7v-13s-9.3 15.6-31.1 15.6c-21.3 0-36-12.7-36-32.3 0-24.8 23.3-33.1 53-33.1 5.3 0 10.1.3 10.1.3v-5.4zM10.1 94.3h17.8V191H10.1V94.3zm0-22.5l17.8-6.3V40.2l-17.8 6.3V71.8z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Stripe</span>
            </div>
            {/* Airbnb */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="h-6 w-auto">
                <svg viewBox="0 0 1000 316" className="h-full fill-slate-500 group-hover:fill-red-500 transition-colors">
                  <path d="M495.2 255.4l-7.2-7.8c-12-12.8-21.7-26.4-28.7-40.4-1.7-3.4-3.4-6.8-4.9-10.3-6.5-15.6-9.6-32.3-9.6-49.8 0-36.7 15.5-70.5 43.1-93.9 14-11.9 31.2-18.4 49.8-18.4s35.8 6.5 49.8 18.4c27.6 23.4 43.1 57.2 43.1 93.9 0 17.5-3.1 34.2-9.6 49.8-1.5 3.5-3.2 6.9-4.9 10.3-7 14-16.7 27.6-28.7 40.4l-7.2 7.8c-1.6 1.7-2.7 4.1-3 6.6h.1c-.2 1.6-.3 3.1-.3 4.5 0 24.9 20.3 45.1 45.4 45.1s45.4-20.2 45.4-45.1v-62.7c0-111-91-201.3-202.8-201.3s-202.8 90.3-202.8 201.3v62.7c0 24.9 20.3 45.1 45.4 45.1s45.4-20.2 45.4-45.1c0-1.4-.1-2.9-.3-4.5h.1c-.3-2.5-1.4-4.9-3-6.6zm37.6-103.1c0-19-15.5-34.5-34.7-34.5s-34.7 15.5-34.7 34.5 15.5 34.5 34.7 34.5 34.7-15.5 34.7-34.5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Airbnb</span>
            </div>
            {/* Discord */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="h-6 w-auto">
                <svg viewBox="0 0 245 240" className="h-full fill-slate-500 group-hover:fill-indigo-500 transition-colors">
                  <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/>
                  <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Discord</span>
            </div>
            {/* Intercom */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="h-6 w-auto">
                <svg viewBox="0 0 32 32" className="h-full fill-slate-500 group-hover:fill-blue-600 transition-all">
                  <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm0 28c-6.63 0-12-5.37-12-12S9.37 4 16 4s12 5.37 12 12-5.37 12-12 12z"/>
                  <path d="M16 8c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Intercom</span>
            </div>
            {/* Pinterest */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="h-6 w-auto">
                <svg viewBox="0 0 24 24" className="h-full fill-slate-500 group-hover:fill-red-600 transition-colors">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.622 0 11.988-5.365 11.988-11.987C24.005 5.367 18.639 0 12.017 0z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Pinterest</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}