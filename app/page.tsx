'use client';

import React from 'react';
import Link from 'next/link';
import { Search, MessageCircle, Target, Users, CheckCircle2, ArrowDown, Mail, Star, ChevronDown, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Services from '@/components/Services';
import Showcase from '@/components/Showcase';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="h-[10px] w-full shrink-0" aria-hidden="true" />
      {/* Hero Section */}
      <div className="relative lg:bg-[#F9A834] min-h-[calc(100vh-80px)]  pt-12  px-4 sm:px-6 overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img src="/landing.png" alt="Hero Background" className="w-full lg:h-full h-[50%]   object-cover object-[100%_top] scale-100 animate-fade-in" />
        </div>
        {/* //description */}
        <div className="relative space-y-6 px-10 sm:space-y-8 animate-fade-in text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight">
            <span className="text-slate-900">TURN CONVERSATIONS</span>
            <br />
            <span className="text-slate-900">INTO CONVERSIONS</span>
            <br />

          </h1>
          <span className="relative -mt-5 sm:text-5xl inline-block -rotate-8 py-1">
            <span className="absolute inset-0 bg-yellow-400 -skew-x-12 border border-black"></span>
            <span className="relative z-10 text-slate-900 px-2 sm:px-3">
              AUTOMATICALLY
            </span>

          </span>

          <div className='w-full flex   justify-center lg:justify-start'  >
            <div className='w-full py-5  lg:w-[50%]'>
              <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                Engage customers instantly on WhatsApp <br /> with AI-powered chatbots that sell, support, <br />
                and scale your business 24/7.
              </p>

              <Link href="/form" className="group mt-5 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 w-fit mx-auto lg:mx-0">
                Get Started Today
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="relative -ml-40 animate-slide-in-right lg:pr-0 px-4 sm:px-6 lg:px-0  lg:-mt-20">
              <div className="relative mx-auto w-full max-w-md">
                {/* Floating Card 1 - Top Left: AI Chatbot - Green accent */}
                <div className="hidden sm:block absolute top-10 -right-4 md:-right-30 bg-white rounded-2xl shadow-2xl p-3 md:p-4 w-52 md:w-60 animate-float z-20 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm font-bold text-slate-800">AI Chatbot</div>
                      <div className="text-[10px] text-slate-400 mb-1.5">Response Rate</div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-emerald-400 h-1.5 rounded-full w-[82%]"></div>
                      </div>
                      <div className="text-[10px] text-emerald-500 font-semibold mt-0.5">82% efficiency</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 - Bottom Left: Customer Support - Blue accent */}
                <div className="hidden sm:block absolute top-100 -left-4 md:-left-70  bg-white rounded-2xl shadow-2xl p-3 md:p-4 w-52 md:w-60 animate-float z-20 border border-slate-100" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm font-bold text-slate-800">Customer Support</div>
                      <div className="text-[10px] text-slate-400 mb-1.5">Tickets Resolved</div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-blue-400 h-1.5 rounded-full w-[95%]"></div>
                      </div>
                      <div className="text-[10px] text-blue-500 font-semibold mt-0.5">95% resolved today</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 3 - Top Right: Target Audience - Purple accent */}
                <div className="hidden sm:block absolute top-80 -right-100 md:-right-100  bg-white rounded-2xl shadow-2xl p-3 md:p-4 w-52 md:w-60 animate-float z-20 border border-slate-100" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm font-bold text-slate-800">Target Audience</div>
                      <div className="text-[10px] text-slate-400 mb-1.5">Conversion Rate</div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-red-600 h-1.5 rounded-full w-[68%]"></div>
                      </div>
                      <div className="text-[10px] text-red-500 font-semibold mt-0.5">+68% conversions</div>
                    </div>
                  </div>
                </div>

                {/* Chat Widget */}
                <div className="relative animate-float bg-transparent -ml-20 w-100 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-4 sm:px-6 py-2 sm:py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center overflow-hidden">
                        <img src="/chat.png" alt="Chat" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-white">
                        <div className="font-semibold text-xs sm:text-sm">Yoursitechat</div>
                        <div className="text-[10px] sm:text-xs opacity-90">Smart AI Assistant</div>
                      </div>
                    </div>
                    <div className="flex gap-2 sm:gap-3 text-white">
                      <button className="hover:bg-white/20 p-1 rounded text-sm sm:text-base">✕</button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 bg-[#657e8f4b] from-slate-50 to-white min-h-[300px] sm:min-h-[400px] " >
                    {/* <div className="bg-slate-100 rounded-2xl p-3 sm:p-4 inline-block">
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-600">Customer Support</div>
                  </div> */}

                    <div className="space-y-2 mt-10">
                      <div className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                        Suggestions on what to ask Our AI
                      </div>

                      {[
                        'What can I ask you?',
                        'Which one of services is performing the best?',
                        'What service should I be considering about right now?'
                      ].map((question, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl sm:rounded-2xl px-1 sm:px-2 py-1 sm:py-2 text-xs sm:text-sm hover:shadow-lg transition-shadow cursor-pointer animate-slide-up"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {question}
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-[#657e8f4b] rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 p-2 sm:p-3 flex items-center gap-2 sm:gap-3">
                      <button className="text-white hover:text-indigo-600">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        placeholder="Ask me anything..."
                        className="flex-1 outline-none text-xs sm:text-sm text-slate-600 placeholder:text-white"
                      />
                      <button className="text-indigo-600 hover:text-indigo-700 z-10">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>


        <div className="lg:w-[70%] lg:mx-30  grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">



        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="py-12 bg-white border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Trusted by 1,200+ businesses worldwide
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Content */}
            <div className="flex overflow-hidden">
              <div className="flex gap-16 px-8" style={{
                animation: 'marquee 30s linear infinite'
              }}>
                {/* First Set */}
                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 635 262" className="h-full fill-slate-400 group-hover:fill-[#635BFF] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M634.3 118.8c0-11-8.2-16.1-22.1-16.1-14.9 0-25.5 5.5-25.5 5.5l-4.7-16s12-7 32-7c30.2 0 46.1 14.3 46.1 40.5V191h-21.7v-13s-9.3 15.6-31.1 15.6c-21.3 0-36-12.7-36-32.3 0-24.8 23.3-33.1 53-33.1 5.3 0 10.1.3 10.1.3v-10.2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Stripe</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 1000 316" className="h-full fill-slate-400 group-hover:fill-[#FF5A5F] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M495.2 255.4l-7.2-7.8c-12-12.8-21.7-26.4-28.7-40.4-1.7-3.4-3.4-6.8-4.9-10.3-6.5-15.6-9.6-32.3-9.6-49.8 0-36.7 15.5-70.5 43.1-93.9 14-11.9 31.2-18.4 49.8-18.4s35.8 6.5 49.8 18.4c27.6 23.4 43.1 57.2 43.1 93.9 0 17.5-3.1 34.2-9.6 49.8-1.5 3.5-3.2 6.9-4.9 10.3-7 14-16.7 27.6-28.7 40.4l-7.2 7.8c-1.6 1.7-2.7 4.1-3 6.6h.1c-.2 1.6-.3 3.1-.3 4.5 0 24.9 20.3 45.1 45.4 45.1s45.4-20.2 45.4-45.1v-62.7c0-111-91-201.3-202.8-201.3s-202.8 90.3-202.8 201.3v62.7c0 24.9 20.3 45.1 45.4 45.1s45.4-20.2 45.4-45.1c0-1.4-.1-2.9-.3-4.5h.1c-.3-2.5-1.4-4.9-3-6.6zm37.6-103.1c0-19-15.5-34.5-34.7-34.5s-34.7 15.5-34.7 34.5 15.5 34.5 34.7 34.5 34.7-15.5 34.7-34.5z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Airbnb</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 245 240" className="h-full fill-slate-400 group-hover:fill-[#5865F2] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
                      <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.2-.2-.3-.3-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Discord</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 32 32" className="h-full fill-slate-400 group-hover:fill-[#0073EA] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm0 28c-6.63 0-12-5.37-12-12S9.37 4 16 4s12 5.37 12 12-5.37 12-12 12z" />
                      <path d="M16 8c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Intercom</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 24 24" className="h-full fill-slate-400 group-hover:fill-[#E60023] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.622 0 11.988-5.365 11.988-11.987C24.005 5.367 18.639 0 12.017 0z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Pinterest</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 24 24" className="h-full fill-slate-400 group-hover:fill-[#00A4EF] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">LinkedIn</span>
                </div>

                {/* Duplicate Set for seamless loop */}
                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 635 262" className="h-full fill-slate-400 group-hover:fill-[#635BFF] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M634.3 118.8c0-11-8.2-16.1-22.1-16.1-14.9 0-25.5 5.5-25.5 5.5l-4.7-16s12-7 32-7c30.2 0 46.1 14.3 46.1 40.5V191h-21.7v-13s-9.3 15.6-31.1 15.6c-21.3 0-36-12.7-36-32.3 0-24.8 23.3-33.1 53-33.1 5.3 0 10.1.3 10.1.3v-10.2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Stripe</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 1000 316" className="h-full fill-slate-400 group-hover:fill-[#FF5A5F] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M495.2 255.4l-7.2-7.8c-12-12.8-21.7-26.4-28.7-40.4-1.7-3.4-3.4-6.8-4.9-10.3-6.5-15.6-9.6-32.3-9.6-49.8 0-36.7 15.5-70.5 43.1-93.9 14-11.9 31.2-18.4 49.8-18.4s35.8 6.5 49.8 18.4c27.6 23.4 43.1 57.2 43.1 93.9 0 17.5-3.1 34.2-9.6 49.8-1.5 3.5-3.2 6.9-4.9 10.3-7 14-16.7 27.6-28.7 40.4l-7.2 7.8c-1.6 1.7-2.7 4.1-3 6.6h.1c-.2 1.6-.3 3.1-.3 4.5 0 24.9 20.3 45.1 45.4 45.1s45.4-20.2 45.4-45.1v-62.7c0-111-91-201.3-202.8-201.3s-202.8 90.3-202.8 201.3v62.7c0 24.9 20.3 45.1 45.4 45.1s45.4-20.2 45.4-45.1c0-1.4-.1-2.9-.3-4.5h.1c-.3-2.5-1.4-4.9-3-6.6zm37.6-103.1c0-19-15.5-34.5-34.7-34.5s-34.7 15.5-34.7 34.5 15.5 34.5 34.7 34.5 34.7-15.5 34.7-34.5z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Airbnb</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 245 240" className="h-full fill-slate-400 group-hover:fill-[#5865F2] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
                      <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.2-.2-.3-.3-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Discord</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 32 32" className="h-full fill-slate-400 group-hover:fill-[#0073EA] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm0 28c-6.63 0-12-5.37-12-12S9.37 4 16 4s12 5.37 12 12-5.37 12-12 12z" />
                      <path d="M16 8c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Intercom</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 24 24" className="h-full fill-slate-400 group-hover:fill-[#E60023] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.622 0 11.988-5.365 11.988-11.987C24.005 5.367 18.639 0 12.017 0z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Pinterest</span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                  <div className="h-8 w-auto">
                    <svg viewBox="0 0 24 24" className="h-full fill-slate-400 group-hover:fill-[#00A4EF] transition-colors" style={{ transition: 'fill 0.3s' }}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `
        }} />
      </div>

      {/* Feature Detail Section */}
      <section className="py-10 pt-0 sm:py-10 px-4 sm:px-6 overflow-visible ">
        <div className="max-w-7xl  mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Visual Side (Left) */}
          <div className="relative order-2 lg:order-1">
            {/* Main Abstract Image */}
            <div className="relative w-[80%] animate-float sm:w-[85%] mx-auto lg:mx-0 aspect-[4/5] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
                alt="Abstract background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute animate-float -bottom-8 sm:-bottom-12 right-0 sm:right-4 lg:right-0 w-[45%] sm:w-[55%] aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white z-10 bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                alt="Person working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Cards - Hidden on mobile, visible on larger screens */}
            <div className="hidden animate-float md:block absolute top-20 right-[5%] z-20 space-y-4">
              <div className="bg-[#1a1a1a] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl w-40 sm:w-48 transform -rotate-3 transition-transform hover:rotate-0">
                <div className="text-2xl sm:text-3xl font-bold mb-1">10M+</div>
                <div className="text-xs sm:text-sm text-slate-400 leading-tight">Messages<br />Automated</div>
              </div>
              <div className="bg-[#1D63FF] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl w-40 sm:w-48 transform rotate-3 transition-transform hover:rotate-0">
                <div className="text-2xl sm:text-3xl font-bold mb-1">1.2K+</div>
                <div className="text-xs sm:text-sm text-blue-100 leading-tight">Happy<br />customers</div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -bottom-12 left-4 sm:left-12 grid grid-cols-4 gap-1 sm:gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-900 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Content Side (Right) */}
          <div className="space-y-6  sm:space-y-8 order-1 lg:order-2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 rounded-full text-xs sm:text-sm font-medium text-slate-600 border border-slate-200 mx-auto lg:mx-0">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-900 rounded-sm"></div>
              Your AI-powered conversation engine
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Defining the Future of AI-Driven Conversations
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium opacity-90">
              Transform how your business communicates with customers using AI-powered chatbots built for WhatsApp.
              YourSiteChat helps you respond instantly, automate support, and convert conversations into revenue — 24/7.
            </p>

            <ul className="space-y-3 sm:space-y-4 max-w-lg mx-auto lg:mx-0">
              {[
                "Instant AI replies with human-like responses",
                "Seamless handoff from bot to human agents",
                "Designed to increase engagement and conversions"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 font-semibold">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100/50 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group mx-auto lg:mx-0">
              Scroll For Features
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Resource Grid Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Cards */}
            {[
              {
                bg: 'bg-[#e5e1da]',
                img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&q=80',
                tag: 'AI PLAYBOOK',
                title: 'From Chatbots to AI Agents',
                desc: 'How autonomous AI is reshaping customer support.'
              },
              {
                bg: 'bg-black',
                img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80',
                tag: 'TRENDS',
                title: 'From Chatbots to AI Agents',
                desc: 'How autonomous AI is reshaping customer support.',
                dark: true
              },
              {
                bg: 'bg-[#f5f5f5]',
                img: 'https://images.unsplash.com/photo-1620121692029-d088224efc74?w=400&q=80',
                tag: 'TRENDS',
                title: 'Top Conversational AI Trends',
                desc: "What's next for website and in-app customer support."
              },
              {
                bg: 'bg-slate-900',
                img: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80',
                tag: 'INSIGHTS',
                title: 'AI, Privacy & Trust',
                desc: 'How to build secure, compliant AI-powered support.',
                dark: true
              },
              {
                bg: 'bg-slate-800',
                img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
                tag: 'GUIDES',
                title: 'The Automation Advantage',
                desc: 'Why support teams using AI chat scale faster.',
                dark: true
              },
              {
                bg: 'bg-[#FFD700]',
                img: null,
                tag: 'GUIDES',
                title: 'Human + AI Collaboration',
                desc: 'Designing chat experiences that feel helpful—not robotic.',
                solid: true
              },
              {
                bg: 'bg-slate-200',
                img: 'https://images.unsplash.com/photo-1542332213-31f87348057f?w=400&q=80',
                tag: 'PRODUCT',
                title: "What's New in YourSiteChat",
                desc: 'Latest updates to our AI-powered customer support chatbot.'
              },
              {
                bg: 'bg-slate-800',
                img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
                tag: 'GUIDES',
                title: 'The Automation Advantage',
                desc: 'Why support teams using AI chat scale faster.',
                dark: true
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`group relative aspect-[3/4]  overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${card.bg}`}
              >
                {card.img && !card.solid && (
                  <div className="absolute inset-0">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-40 sm:opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                  </div>
                )}
                {card.dark && card.img && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                )}
                <div className={`relative p-4 sm:p-6 md:p-8 h-full flex flex-col justify-start ${card.dark ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`text-[8px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.2em] ${card.dark ? 'text-white/70' : 'text-slate-900/70'} mb-2 sm:mb-4`}>
                    {card.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-1 sm:mb-2">
                    {card.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-medium ${card.dark ? 'text-white/80' : 'text-slate-700'}`}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <HowItWorks />
      <Showcase />
      <Pricing />
      <Testimonials />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />

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