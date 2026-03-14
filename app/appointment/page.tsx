'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Calendar, Clock, Video, CheckCircle, ArrowRight, 
  Sparkles, Target, Zap, ShieldCheck, Users, 
  MessageSquare, BarChart3, Globe2, Star, TrendingUp,
  Award, Rocket, Phone, Mail, MapPin, Crown,
  Headphones, ChevronRight
} from 'lucide-react';

export default function AppointmentPage() {
  const demoUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0mTVtYzzPAdu7on1Iui2HfG2GZu7kNe_J02DbEfR98C5hiNs3hHVfsxLAF2NjlmE39qRmKtuw7?gv=true";
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative z-10 overflow-hidden">
        
        {/* Hero Section with Advanced Background */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Advanced Animated Background */}
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
            
            {/* Animated mesh gradient overlays */}
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="absolute top-[-50%] left-[-25%] w-[100%] h-[100%] rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-[120px] animate-blob"></div>
              <div className="absolute top-[20%] right-[-25%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-[120px] animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-[-30%] left-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-[120px] animate-blob animation-delay-4000"></div>
            </div>
            
            {/* Geometric patterns */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}></div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_50%)]"></div>
            
            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 py-10 lg:py-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Content */}
              <div className={`space-y-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg">
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold">VIP Strategy Session</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                    Transform Your Business With
                    <span className="block mt-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      AI-Powered Support
                    </span>
                  </h1>
                  
                  <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                    Get a personalized strategy session with our AI experts. Discover how to automate 80% of customer queries and boost conversions instantly.
                  </p>
                </div>
                
                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: <CheckCircle className="w-5 h-5" />, text: "15-Min Quick Setup", color: "text-green-400" },
                    { icon: <CheckCircle className="w-5 h-5" />, text: "Zero Coding Required", color: "text-blue-400" },
                    { icon: <CheckCircle className="w-5 h-5" />, text: "Free Forever Trial", color: "text-purple-400" },
                    { icon: <CheckCircle className="w-5 h-5" />, text: "Expert 1-on-1 Guide", color: "text-pink-400" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={item.color}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-6 pt-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-purple-900 overflow-hidden shadow-xl">
                        <img 
                          src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                          alt="Customer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm font-bold text-gray-200">
                      Join 1,200+ Happy Customers
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right - Enhanced Booking Card */}
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                {/* Outer glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-[3rem] blur-3xl opacity-40 animate-pulse"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
                  {/* Top accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
                  
                  <div className="p-6 lg:p-7 space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-1">Book Your Slot</h3>
                        <p className="text-gray-600 font-semibold text-xs">Limited availability • First come, first served</p>
                      </div>
                    </div>
                    
                    {/* Details Cards */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">Duration</p>
                          <p className="text-base font-black text-gray-900 leading-none">15 Minutes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                          <Video className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">Platform</p>
                          <p className="text-base font-black text-gray-900 leading-none">Google Meet</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                          <Headphones className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">Expert</p>
                          <p className="text-base font-black text-gray-900 leading-none">AI Specialist</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <a 
                      href={demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3 overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="relative z-10">Schedule Free Demo</span>
                      <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </a>
                    
                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-6 text-xs text-gray-500 pt-2">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span className="font-semibold">100% Free</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold">No Commitment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-50 border-2 border-purple-200 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-purple-700">Demo Agenda</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                What's Inside The Call?
              </h2>
              <p className="text-xl text-gray-600">
                We don't just show features. We create your AI roadmap.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Business Analysis",
                  desc: "We analyze your support volume and find where AI can save 60%+ time instantly.",
                  gradient: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-50 to-pink-50",
                  borderColor: "border-purple-200"
                },
                {
                  icon: MessageSquare,
                  title: "Bot Personality",
                  desc: "Design your AI's tone and voice to perfectly match your brand identity.",
                  gradient: "from-blue-500 to-cyan-500",
                  bgGradient: "from-blue-50 to-cyan-50",
                  borderColor: "border-blue-200"
                },
                {
                  icon: BarChart3,
                  title: "ROI Calculator",
                  desc: "See exact revenue gains from instant 24/7 customer response automation.",
                  gradient: "from-pink-500 to-purple-500",
                  bgGradient: "from-pink-50 to-purple-50",
                  borderColor: "border-pink-200"
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className={`group relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}
                >
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl">
                    {i + 1}
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Steps - New Design */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Simple 3-Step Process
              </h2>
              <p className="text-xl text-gray-600">
                From demo to deployment in minutes, not months
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/4 left-[20%] right-[20%] h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 z-0"></div>

              {[
                { 
                  icon: <Rocket className="w-10 h-10" />, 
                  title: "Quick Integration", 
                  desc: "Connect all platforms (WhatsApp, Web, FB, Instagram) in 5 minutes",
                  color: "from-purple-600 to-pink-600"
                },
                { 
                  icon: <Target className="w-10 h-10" />, 
                  title: "Train Your AI", 
                  desc: "Upload FAQs and docs. AI learns your business instantly",
                  color: "from-blue-600 to-cyan-600"
                },
                { 
                  icon: <TrendingUp className="w-10 h-10" />, 
                  title: "Launch & Scale", 
                  desc: "Go live 24/7. Watch conversions and satisfaction soar",
                  color: "from-pink-600 to-purple-600"
                }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center space-y-4 z-10">
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white relative`}>
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-black text-sm shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 font-medium max-w-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe2 className="w-6 h-6 text-purple-400" />
                <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">Proven Results</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Trusted Worldwide</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real numbers from real businesses like yours
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "98.5%", label: "AI Accuracy", icon: <Award className="w-6 h-6" /> },
                { value: "2.4M", label: "Monthly Chats", icon: <MessageSquare className="w-6 h-6" /> },
                { value: "40%", label: "Revenue Boost", icon: <TrendingUp className="w-6 h-6" /> },
                { value: "24/7", label: "Always On", icon: <Clock className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                  <div className="flex justify-center mb-4 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900">
                Ready to <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">10x</span> Your Support?
              </h2>
              <p className="text-2xl text-gray-600 font-semibold">
                Limited slots available. Book now before they're gone!
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl font-black text-2xl hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-2 transition-all flex items-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Claim Your Free Demo</span>
                <ChevronRight className="relative z-10 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-bold">Only 3 slots left this week • No credit card needed</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}