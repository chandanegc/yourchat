'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Target, TrendingUp, Clock, Zap, Users, 
  ArrowRight, CheckCircle, Star, BarChart3, Magnet,
  Calendar, Award, Sparkles, MessageCircle,
  ChevronRight, UserPlus, Globe2, Filter,
  ClipboardCheck, Video, Mail, Bell, Phone,
  DollarSign, Rocket, ThumbsUp, Database, MousePointerClick
} from 'lucide-react';

export default function LeadGenerationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative overflow-hidden pt-20">
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(249 115 22 / 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
          
          {/* Animated blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-orange-200 rounded-full shadow-sm">
                  <Magnet className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-bold text-gray-700">Lead Generation AI</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Capture More
                  <span className="block mt-2 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Qualified Leads
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  AI-powered chatbot that captures, qualifies, and nurtures leads 24/7. Turn website visitors into high-quality leads automatically and grow your pipeline by 300%.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  {[
                    { value: "300%", label: "More Leads" },
                    { value: "75%", label: "Auto-Qualified" },
                    { value: "24/7", label: "Lead Capture" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-orange-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="/create-chatbot"
                    className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center gap-3"
                  >
                    Start Capturing Leads
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/appointment"
                    className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all flex items-center gap-3"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              {/* Right - Lead Generation Chat Demo */}
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Magnet className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="text-white">
                        <div className="font-bold">Lead Assistant</div>
                        <div className="text-xs opacity-90 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          Capturing leads now
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 bg-gray-50 min-h-[400px]">
                    {/* Bot message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-orange-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">👋 Hi! Looking to grow your business? I can help! What's your biggest challenge right now?</p>
                      </div>
                    </div>

                    {/* Quick option buttons */}
                    <div className="flex flex-col gap-2 pl-11">
                      {[
                        "🎯 Generate more leads",
                        "💰 Increase revenue",
                        "⚡ Automate sales process",
                        "📊 Better ROI tracking"
                      ].map((option, i) => (
                        <button 
                          key={i}
                          className="text-left px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm">I need more qualified leads for my business</p>
                      </div>
                    </div>

                    {/* Bot response with form */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-orange-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700 mb-3">Perfect! I can show you how to 3x your leads. Let me get your info:</p>
                        <div className="space-y-2">
                          <input 
                            type="text" 
                            placeholder="Your name"
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none"
                            disabled
                          />
                          <input 
                            type="email" 
                            placeholder="Work email"
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none"
                            disabled
                          />
                          <input 
                            type="tel" 
                            placeholder="Phone number"
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none"
                            disabled
                          />
                          <button className="w-full px-3 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg text-xs font-bold">
                            Get Free Strategy ✨
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Input area */}
                    <div className="pt-4">
                      <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-gray-200 p-3 shadow-sm">
                        <input 
                          type="text" 
                          placeholder="Type your message..."
                          className="flex-1 outline-none text-sm text-gray-700"
                          disabled
                        />
                        <button className="p-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-gray-200 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900">+347</div>
                      <div className="text-xs text-gray-500 font-semibold">Leads Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-50 border-2 border-orange-200 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-bold text-orange-700">Powerful Features</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Complete Lead Generation System
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to capture and qualify leads automatically
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MousePointerClick className="w-8 h-8" />,
                  title: "Smart Lead Capture",
                  desc: "Engage every website visitor instantly with personalized conversations that convert at 3x industry average.",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  icon: <Filter className="w-8 h-8" />,
                  title: "Auto Lead Qualification",
                  desc: "AI asks the right questions to score and qualify leads based on budget, timeline, and decision authority.",
                  gradient: "from-red-500 to-pink-500"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "CRM Integration",
                  desc: "Automatically sync qualified leads to Salesforce, HubSpot, Pipedrive, or your favorite CRM instantly.",
                  gradient: "from-pink-500 to-purple-500"
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Email Nurturing",
                  desc: "Send personalized follow-up sequences to warm leads and move them through your sales funnel automatically.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Meeting Scheduler",
                  desc: "Let hot leads book sales calls directly through chat. Sync with your calendar for instant confirmations.",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Lead Analytics",
                  desc: "Track lead sources, conversion rates, and ROI in real-time. Optimize campaigns based on data.",
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                From Visitor to Lead in 3 Steps
              </h2>
              <p className="text-xl text-gray-600">
                Start capturing qualified leads in minutes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/4 left-[20%] right-[20%] h-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 z-0"></div>

              {[
                { 
                  icon: <Rocket className="w-10 h-10" />, 
                  title: "Install Lead Bot", 
                  desc: "Add our AI chatbot to your website with a single line of code. Works on any platform.",
                  color: "from-orange-600 to-red-600"
                },
                { 
                  icon: <ClipboardCheck className="w-10 h-10" />, 
                  title: "Configure Questions", 
                  desc: "Set up qualification criteria, custom forms, and lead scoring rules in 5 minutes.",
                  color: "from-red-600 to-pink-600"
                },
                { 
                  icon: <TrendingUp className="w-10 h-10" />, 
                  title: "Watch Leads Flow", 
                  desc: "AI engages visitors 24/7, captures info, qualifies leads, and sends them to your CRM.",
                  color: "from-pink-600 to-purple-600"
                }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center space-y-4 z-10">
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white relative`}>
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 font-black text-lg shadow-lg">
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

        {/* Use Cases */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Perfect for Every Business Model
              </h2>
              <p className="text-xl text-gray-600">
                Generate qualified leads across all industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "B2B SaaS Companies",
                  desc: "Capture enterprise leads, qualify based on company size and budget, and book demos automatically with decision-makers.",
                  icon: <Globe2 className="w-8 h-8" />,
                  metrics: ["75% lead qualification", "Auto demo booking", "CRM sync"],
                  gradient: "from-orange-600 to-red-600"
                },
                {
                  title: "Digital Marketing Agencies",
                  desc: "Generate leads for your clients 24/7. Capture contact info, qualify interest level, and schedule strategy calls.",
                  icon: <Target className="w-8 h-8" />,
                  metrics: ["3x more leads", "Multi-client support", "White-label option"],
                  gradient: "from-red-600 to-pink-600"
                },
                {
                  title: "Real Estate & Property",
                  desc: "Capture buyer and seller leads, qualify budget and timeline, schedule property viewings automatically.",
                  icon: <UserPlus className="w-8 h-8" />,
                  metrics: ["Property matching", "Viewing scheduler", "Budget qualification"],
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Professional Services",
                  desc: "Law firms, consultants, and service providers can capture leads, assess case value, and book consultations.",
                  icon: <Award className="w-8 h-8" />,
                  metrics: ["Case assessment", "Consultation booking", "Client intake forms"],
                  gradient: "from-green-600 to-teal-600"
                }
              ].map((useCase, i) => (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, j) => (
                      <span key={j} className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-semibold text-orange-700">
                        ✓ {metric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Why Choose Our Lead Generation AI
              </h2>
              <p className="text-xl text-gray-600">
                Outperform traditional lead capture by 300%
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Never Miss a Lead",
                  desc: "Capture leads 24/7, even when your sales team is sleeping or on weekends.",
                  icon: <Clock className="w-6 h-6" />,
                  stat: "24/7 availability"
                },
                {
                  title: "Instant Response",
                  desc: "Engage visitors in under 2 seconds. Fast response = higher conversion rates.",
                  icon: <Zap className="w-6 h-6" />,
                  stat: "<2s response time"
                },
                {
                  title: "Higher Quality",
                  desc: "AI asks smart questions to filter out tire-kickers and find serious buyers.",
                  icon: <ThumbsUp className="w-6 h-6" />,
                  stat: "75% pre-qualified"
                },
                {
                  title: "Lower Cost",
                  desc: "Generate leads at 1/10th the cost of traditional paid advertising.",
                  icon: <DollarSign className="w-6 h-6" />,
                  stat: "90% cost savings"
                }
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border-2 border-gray-200 hover:shadow-xl transition-all text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg text-white">
                    {benefit.icon}
                  </div>
                  <div className="text-orange-600 font-black text-sm mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Real Results from Real Businesses
              </h2>
              <p className="text-xl text-gray-600">
                See how companies 3x their pipeline with AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: "TechFlow SaaS",
                  result: "347% increase in qualified leads",
                  quote: "We went from 20 leads/month to 89 qualified leads. Our sales team can't keep up! Best ROI we've ever seen.",
                  author: "Mark Stevens",
                  role: "VP of Sales",
                  avatar: "13"
                },
                {
                  company: "Elite Marketing Agency",
                  result: "5x more client meetings booked",
                  quote: "The AI chatbot books more discovery calls in a week than our SDR team did in a month. It's incredible.",
                  author: "Jessica Wu",
                  role: "Agency Owner",
                  avatar: "14"
                },
                {
                  company: "Premier Realty Group",
                  result: "$2.4M in closed deals",
                  quote: "We closed $2.4M in property sales from leads the AI chatbot captured. Changed our entire business model.",
                  author: "Carlos Martinez",
                  role: "Broker",
                  avatar: "15"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-orange-600 font-black text-xl mb-4">{testimonial.result}</div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${testimonial.avatar}`}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
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
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Lead Generation Power</h2>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Numbers that matter for your pipeline growth
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "300%", label: "More Leads", icon: <TrendingUp className="w-6 h-6" /> },
                { value: "75%", label: "Auto-Qualified", icon: <Filter className="w-6 h-6" /> },
                { value: "$2.4M", label: "Pipeline Generated", icon: <DollarSign className="w-6 h-6" /> },
                { value: "24/7", label: "Never Sleep", icon: <Clock className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-center mb-4 text-orange-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-orange-100 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-orange-200 rounded-full px-5 py-2">
                <Bell className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-bold text-gray-700">Limited Time: 14-Day Free Trial</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900">
                Ready to <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">3x</span> Your Leads?
              </h2>
              <p className="text-2xl text-gray-600 font-semibold">
                Join 1,200+ businesses generating qualified leads on autopilot
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/create-chatbot"
                className="group px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-black text-2xl hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-2 transition-all flex items-center gap-4"
              >
                Start Free Trial
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href="/appointment"
                className="px-12 py-6 bg-white border-2 border-orange-600 text-orange-600 rounded-2xl font-black text-2xl hover:bg-orange-50 transition-all flex items-center gap-4"
              >
                See Demo
                <ChevronRight className="w-8 h-8" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">No credit card required</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">Setup in 2 minutes</span>
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