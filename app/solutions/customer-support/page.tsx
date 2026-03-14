'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Headphones, MessageCircle, Clock, Zap, Users, 
  ArrowRight, CheckCircle, Star, BarChart3, Shield,
  Phone, Target, TrendingDown, Sparkles, Award,
  ChevronRight, LifeBuoy, Mail, MessageSquare,
  ThumbsUp, Globe2, Timer, HeartHandshake, UserCheck
} from 'lucide-react';

export default function SupportPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative overflow-hidden pt-12">
        
        {/* Hero Section */}
        <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[calc(100vh-70px)] flex items-center">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(99 102 241 / 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
          
          {/* Animated blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
<div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-blue-200 rounded-full shadow-sm">
                  <Headphones className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-gray-700">Customer Support AI</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Support Customers
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Instantly 24/7
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  AI-powered support chatbot that answers 80% of queries instantly, reduces ticket volume by 60%, and keeps your customers happy around the clock.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  {[
                    { value: "80%", label: "Auto-Resolved" },
                    { value: "60%", label: "Fewer Tickets" },
                    { value: "<2s", label: "Response Time" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="/create-chatbot"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-3"
                  >
                    Try Free for 14 Days
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/appointment"
                    className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-3"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              {/* Right - Support Chat Demo */}
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-white">
                        <div className="font-bold">Support Assistant</div>
                        <div className="text-xs opacity-90 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          Available 24/7
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 bg-gray-50 min-h-[400px]">
                    {/* Bot message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">👋 Hi! I'm here to help. What can I assist you with today?</p>
                      </div>
                    </div>

                    {/* Quick action buttons */}
                    <div className="flex flex-col gap-2 pl-11">
                      {[
                        "🔧 Technical issue",
                        "📦 Track my order",
                        "💳 Billing question",
                        "📚 Product help"
                      ].map((option, i) => (
                        <button 
                          key={i}
                          className="text-left px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm">I can't log into my account</p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">No worries! I can help you with that. Let me send you a password reset link right away. 🔐</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Input area */}
                    <div className="pt-4">
                      <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-gray-200 p-3 shadow-sm">
                        <input 
                          type="text" 
                          placeholder="Type your question..."
                          className="flex-1 outline-none text-sm text-gray-700"
                          disabled
                        />
                        <button className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-gray-200 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Timer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900">1.8s</div>
                      <div className="text-xs text-gray-500 font-semibold">Avg Response</div>
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
              <div className="inline-flex items-center gap-2 bg-blue-50 border-2 border-blue-200 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-700">Core Features</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Everything You Need for Great Support
              </h2>
              <p className="text-xl text-gray-600">
                Powerful AI that handles customer queries like a human expert
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: "Instant Answers",
                  desc: "AI responds to customer queries in under 2 seconds with accurate, helpful answers from your knowledge base.",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "24/7 Availability",
                  desc: "Never miss a customer question. Provide support around the clock, even on weekends and holidays.",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Globe2 className="w-8 h-8" />,
                  title: "Multilingual Support",
                  desc: "Communicate with customers in 50+ languages automatically. No language barriers.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: <UserCheck className="w-8 h-8" />,
                  title: "Smart Handoff",
                  desc: "Seamlessly transfer complex issues to human agents with full conversation context.",
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Performance Analytics",
                  desc: "Track resolution rates, satisfaction scores, and identify common issues in real-time.",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Secure & Compliant",
                  desc: "Enterprise-grade security with GDPR compliance and data encryption to protect customer information.",
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Why Teams Love Our Support AI
              </h2>
              <p className="text-xl text-gray-600">
                Transform your customer support experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Reduce Support Costs by 60%",
                  desc: "Automate repetitive questions and let AI handle tier-1 support, freeing your team to focus on complex issues.",
                  icon: <TrendingDown className="w-8 h-8" />,
                  stats: ["60% cost reduction", "80% automation", "5x team efficiency"],
                  gradient: "from-blue-600 to-indigo-600"
                },
                {
                  title: "Boost Customer Satisfaction",
                  desc: "Instant responses, accurate answers, and 24/7 availability lead to happier customers and better reviews.",
                  icon: <ThumbsUp className="w-8 h-8" />,
                  stats: ["95% satisfaction rate", "2s response time", "24/7 availability"],
                  gradient: "from-green-600 to-emerald-600"
                },
                {
                  title: "Scale Without Hiring",
                  desc: "Handle 10x more support tickets without adding headcount. AI scales instantly with your growth.",
                  icon: <Users className="w-8 h-8" />,
                  stats: ["10x ticket capacity", "Instant scaling", "Zero hiring needed"],
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  title: "Never Lose a Customer",
                  desc: "Respond instantly to every query before customers get frustrated and leave for competitors.",
                  icon: <HeartHandshake className="w-8 h-8" />,
                  stats: ["Zero wait time", "45% churn reduction", "Instant escalation"],
                  gradient: "from-orange-600 to-red-600"
                }
              ].map((benefit, i) => (
                <div key={i} className="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{benefit.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {benefit.stats.map((stat, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-700">
                        ✓ {stat}
                      </span>
                    ))}
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
                Perfect for Every Support Team
              </h2>
              <p className="text-xl text-gray-600">
                From startups to enterprises, AI adapts to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce",
                  desc: "Handle order status, returns, shipping queries, and product questions automatically.",
                  icon: <Mail className="w-6 h-6" />,
                  features: ["Order tracking", "Return automation", "Product FAQs"]
                },
                {
                  title: "SaaS Products",
                  desc: "Onboard users, troubleshoot technical issues, and guide feature adoption instantly.",
                  icon: <Zap className="w-6 h-6" />,
                  features: ["Onboarding help", "Bug resolution", "Feature guides"]
                },
                {
                  title: "Service Business",
                  desc: "Answer pricing questions, schedule appointments, and provide service information 24/7.",
                  icon: <Phone className="w-6 h-6" />,
                  features: ["Appointment booking", "Pricing info", "Service details"]
                }
              ].map((useCase, i) => (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.desc}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Loved by Support Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See how businesses transformed their customer support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: "ShopifyStore Plus",
                  result: "80% reduction in support tickets",
                  quote: "We went from drowning in tickets to handling everything instantly. Game changer for our small team.",
                  author: "Jessica Martinez",
                  role: "Support Manager",
                  avatar: "4"
                },
                {
                  company: "CloudSync SaaS",
                  result: "95% customer satisfaction score",
                  quote: "Customers love the instant responses. Our CSAT jumped from 78% to 95% in just 2 months.",
                  author: "David Kim",
                  role: "Head of CX",
                  avatar: "5"
                },
                {
                  company: "FitLife Services",
                  result: "24/7 support with same team size",
                  quote: "We're now available round-the-clock without hiring night shifts. AI handles everything perfectly.",
                  author: "Rachel Green",
                  role: "Operations Director",
                  avatar: "6"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-blue-600 font-black text-xl mb-4">{testimonial.result}</div>
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
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
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
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Support Excellence in Numbers</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Real metrics from teams using our AI support assistant
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "80%", label: "Tickets Auto-Resolved", icon: <CheckCircle className="w-6 h-6" /> },
                { value: "1.8s", label: "Avg Response Time", icon: <Timer className="w-6 h-6" /> },
                { value: "95%", label: "Customer Satisfaction", icon: <ThumbsUp className="w-6 h-6" /> },
                { value: "24/7", label: "Always Available", icon: <Clock className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-center mb-4 text-blue-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-blue-100 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 rounded-full px-5 py-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-gray-700">14-Day Free Trial</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900">
                Ready to Transform Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Support?</span>
              </h2>
              <p className="text-2xl text-gray-600 font-semibold">
                Join 1,200+ teams delivering exceptional customer support
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/create-chatbot"
                className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-2xl hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 transition-all flex items-center gap-4"
              >
                Start Free Trial
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href="/appointment"
                className="px-12 py-6 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl font-black text-2xl hover:bg-blue-50 transition-all flex items-center gap-4"
              >
                Book a Demo
                <ChevronRight className="w-8 h-8" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">No credit card required</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
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