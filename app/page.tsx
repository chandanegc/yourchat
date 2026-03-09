'use client';

import React from 'react';
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
    <div className="min-h-screen bg-white">
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-[60] animate-bounce-subtle">
        <button className="w-14 h-14 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center group hover:scale-110 transition-transform cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>

      <Navbar />

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

      <div className="py-10 bg-white/50 backdrop-blur-sm border-y mt-12 border-slate-100">
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
      
      {/* Feature Detail Section */}
      <section className="py-24 px-6 overflow-visible">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side (Left) */}
          <div className="relative">
            {/* Main Abstract Image */}
            <div className="relative w-[85%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" 
                alt="Abstract background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-12 right-0 w-[55%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white z-10 bg-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" 
                alt="Person working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute top-20 right-[5%] z-20 space-y-4">
              {/* Messages Automated Card */}
              <div className="bg-[#1a1a1a] text-white p-6 rounded-3xl shadow-2xl w-48 transform -rotate-3 transition-transform hover:rotate-0">
                <div className="text-3xl font-bold mb-1">10M+</div>
                <div className="text-sm text-slate-400 leading-tight">Messages<br />Automated</div>
              </div>

              {/* Happy Customers Card */}
              <div className="bg-[#1D63FF] text-white p-6 rounded-3xl shadow-2xl w-48 transform rotate-3 transition-transform hover:rotate-0">
                <div className="text-3xl font-bold mb-1">1.2K+</div>
                <div className="text-sm text-blue-100 leading-tight">Happy<br />customers</div>
              </div>
            </div>

            {/* Decorative Dots/Patterns */}
            <div className="absolute -bottom-16 left-12 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-slate-900 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Text Side (Right) */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600 border border-slate-200">
              <div className="w-2 h-2 bg-slate-900 rounded-sm"></div>
              Your AI-powered conversation engine
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-[1.15]">
              Defining the Future of AI-Driven Conversations
            </h2>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium opacity-90">
              Transform how your business communicates with customers using AI-powered chatbots built for WhatsApp. 
              YourSiteChat helps you respond instantly, automate support, and convert conversations into revenue — 24/7.
            </p>

            <ul className="space-y-5">
              {[
                "Instant AI replies with human-like responses",
                "Seamless handoff from bot to human agents",
                "Designed to increase engagement and conversions"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-base">
                  <div className="w-6 h-6 bg-blue-100/50 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group">
              Scroll For Features
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Resource Grid Section */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: AI Playbook */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#e5e1da]">
                <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&q=80" alt="Playbook" className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-900 mb-4 opacity-70">AI PLAYBOOK</span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">From Chatbots to AI Agents</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">How autonomous AI is reshaping customer support and service operations.</p>
              </div>
            </div>

            {/* Card 2: Trends */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-black">
                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80" alt="Trends" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 mb-4">TRENDS</span>
                <h3 className="text-2xl font-bold text-white leading-tight mb-2">From Chatbots to AI Agents</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium">How autonomous AI is reshaping customer support and service operations.</p>
              </div>
            </div>

            {/* Card 3: Trends (Secondary) */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#f5f5f5]">
                <img src="https://images.unsplash.com/photo-1620121692029-d088224efc74?w=400&q=80" alt="Trends 2" className="w-full h-full object-cover opacity-40 mix-blend-multiply" />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-start">
                <span className="text-[10px] font-bold tracking-[0.1em] text-slate-900 mb-4 opacity-70">TRENDS</span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">Top Conversational AI Trends</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">What's next for website and in-app customer support experiences.</p>
              </div>
            </div>

            {/* Card 4: Insights */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-slate-900">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80" alt="Insights" className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 mb-4">INSIGHTS</span>
                <h3 className="text-2xl font-bold text-white leading-tight mb-2">AI, Privacy & Trust</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium text-pretty">How to build secure, compliant AI-powered support conversations.</p>
              </div>
            </div>

            {/* Card 5: Guides */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-slate-800">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80" alt="Guides" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 mb-4">GUIDES</span>
                <h3 className="text-2xl font-bold text-white leading-tight mb-2">The Automation Advantage</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium">Why support teams using AI chat scale faster with fewer resources.</p>
              </div>
            </div>

            {/* Card 6: Guides (Yellow) */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#FFD700]">
              <div className="relative p-8 h-full flex flex-col justify-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-900/70 mb-4">GUIDES</span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">Human + AI Collaboration</h3>
                <p className="text-sm text-slate-900/80 leading-relaxed font-medium">Designing chat experiences that feel helpful—not robotic.</p>
              </div>
            </div>

            {/* Card 7: Product */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?w=400&q=80" alt="Product" className="w-full h-full object-cover opacity-40 mix-blend-multiply" />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-900 mb-4 opacity-70">PRODUCT</span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">What's New in YourSiteChat</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">Latest updates to our AI-powered customer support chatbot for web and apps.</p>
              </div>
            </div>
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