'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  TrendingUp, ShoppingCart, Target, Zap, Users, 
  ArrowRight, CheckCircle, Star, BarChart3, MessageSquare,
  Phone, Clock, DollarSign, Sparkles, Award,
  ChevronRight, LineChart, ShoppingBag, UserPlus,
  Percent, Calendar, Bell, Gift, MousePointerClick
} from 'lucide-react';

export default function SalesPage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129 / 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
          
          {/* Animated blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
<div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-green-200 rounded-full shadow-sm">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-bold text-gray-700">Sales Automation</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Turn Visitors Into
                  <span className="block mt-2 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Paying Customers
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  AI-powered sales chatbot that engages visitors 24/7, qualifies leads automatically, and books meetings while you sleep. Increase conversions by up to 3x.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  {[
                    { value: "3x", label: "More Conversions" },
                    { value: "60%", label: "Lead Qualification" },
                    { value: "24/7", label: "Always Available" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-green-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="/create-chatbot"
                    className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all flex items-center gap-3"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/appointment"
                    className="px-8 py-4 bg-white border-2 border-green-600 text-green-600 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all flex items-center gap-3"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
              
              {/* Right - Interactive Demo Preview */}
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-white">
                        <div className="font-bold">Sales Assistant</div>
                        <div className="text-xs opacity-90">Online • Ready to help</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 bg-gray-50 min-h-[400px]">
                    {/* Bot message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">👋 Hi! Looking to boost your sales? I can help you find the perfect solution!</p>
                      </div>
                    </div>

                    {/* Quick action buttons */}
                    <div className="flex flex-col gap-2 pl-11">
                      {[
                        "📈 Increase conversions",
                        "🎯 Qualify leads automatically",
                        "📅 Book sales meetings"
                      ].map((option, i) => (
                        <button 
                          key={i}
                          className="text-left px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm">I want to increase my conversions</p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">🎉 Great! Our AI can help you convert 3x more visitors. Can I ask a few quick questions?</p>
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
                        <button className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-gray-200 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900">+247%</div>
                      <div className="text-xs text-gray-500 font-semibold">Conversion Rate</div>
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
              <div className="inline-flex items-center gap-2 bg-green-50 border-2 border-green-200 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-green-600" />
                <span className="text-sm font-bold text-green-700">Powerful Features</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Everything You Need to Close More Deals
              </h2>
              <p className="text-xl text-gray-600">
                Automated sales assistant that works 24/7 to grow your revenue
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Lead Qualification",
                  desc: "Automatically qualify leads with smart questions and score them based on purchase intent.",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Meeting Scheduling",
                  desc: "Let customers book sales calls directly through chat. Sync with your calendar instantly.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <ShoppingBag className="w-8 h-8" />,
                  title: "Product Recommendations",
                  desc: "Show the right products to the right customers based on their needs and behavior.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Percent className="w-8 h-8" />,
                  title: "Dynamic Discounts",
                  desc: "Offer personalized discounts to close deals faster and reduce cart abandonment.",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  icon: <Bell className="w-8 h-8" />,
                  title: "Follow-up Automation",
                  desc: "Never miss a lead. Auto-follow-up with prospects who didn't convert immediately.",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Sales Analytics",
                  desc: "Track conversion rates, revenue generated, and optimize your sales funnel in real-time.",
                  gradient: "from-teal-500 to-green-500"
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Start converting more visitors in 3 simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/4 left-[20%] right-[20%] h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 z-0"></div>

              {[
                { 
                  icon: <UserPlus className="w-10 h-10" />, 
                  title: "Install Chatbot", 
                  desc: "Add our sales chatbot to your website with a simple code snippet. Takes less than 2 minutes.",
                  color: "from-green-600 to-emerald-600"
                },
                { 
                  icon: <Target className="w-10 h-10" />, 
                  title: "Configure Sales Flow", 
                  desc: "Set up qualification questions, product catalog, and pricing. AI learns your sales process.",
                  color: "from-emerald-600 to-teal-600"
                },
                { 
                  icon: <TrendingUp className="w-10 h-10" />, 
                  title: "Start Converting", 
                  desc: "Watch leads pour in 24/7. AI qualifies, recommends, and books meetings automatically.",
                  color: "from-teal-600 to-green-600"
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
                Perfect For Every Sales Scenario
              </h2>
              <p className="text-xl text-gray-600">
                From e-commerce to B2B, our AI adapts to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-commerce Stores",
                  desc: "Guide shoppers to the right products, offer personalized discounts, and recover abandoned carts automatically.",
                  icon: <ShoppingCart className="w-8 h-8" />,
                  metrics: ["45% cart recovery", "3x product discovery", "Real-time support"],
                  gradient: "from-green-600 to-emerald-600"
                },
                {
                  title: "SaaS & Software",
                  desc: "Qualify trial users, demo your product features, and book sales calls with decision-makers.",
                  icon: <Zap className="w-8 h-8" />,
                  metrics: ["60% lead qualification", "2x demo bookings", "Auto trial extensions"],
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  title: "B2B Companies",
                  desc: "Capture enterprise leads, qualify them instantly, and route to the right sales rep automatically.",
                  icon: <Users className="w-8 h-8" />,
                  metrics: ["80% faster qualification", "Smart lead routing", "CRM integration"],
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  title: "Service Businesses",
                  desc: "Answer pricing questions, showcase your portfolio, and schedule consultations 24/7.",
                  icon: <Phone className="w-8 h-8" />,
                  metrics: ["24/7 availability", "Instant quotes", "Auto scheduling"],
                  gradient: "from-orange-600 to-red-600"
                }
              ].map((useCase, i) => (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, j) => (
                      <span key={j} className="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-semibold text-green-700">
                        ✓ {metric}
                      </span>
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
                Trusted by Top Sales Teams
              </h2>
              <p className="text-xl text-gray-600">
                See how businesses are crushing their sales goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: "TechFlow SaaS",
                  result: "250% increase in qualified leads",
                  quote: "The AI chatbot books more demos than our entire SDR team combined. It's incredible.",
                  author: "Sarah Chen",
                  role: "VP of Sales",
                  avatar: "1"
                },
                {
                  company: "StyleShop E-commerce",
                  result: "3x conversion rate improvement",
                  quote: "Cart abandonment dropped by 45%. The AI knows exactly what to say to close the sale.",
                  author: "Mike Rodriguez",
                  role: "Growth Director",
                  avatar: "2"
                },
                {
                  company: "B2B Solutions Inc",
                  result: "$2M+ in pipeline generated",
                  quote: "We're closing enterprise deals faster than ever. The lead qualification is spot-on.",
                  author: "Emily Watson",
                  role: "Head of Sales",
                  avatar: "3"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-green-600 font-black text-xl mb-4">{testimonial.result}</div>
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
        <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
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
              <h2 className="text-4xl sm:text-5xl font-black mb-4">The Numbers Don't Lie</h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Real results from businesses using our sales AI
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "247%", label: "Avg Conversion Increase", icon: <TrendingUp className="w-6 h-6" /> },
                { value: "60%", label: "Leads Auto-Qualified", icon: <Target className="w-6 h-6" /> },
                { value: "$2.4M", label: "Revenue Generated", icon: <DollarSign className="w-6 h-6" /> },
                { value: "24/7", label: "Always Selling", icon: <Clock className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-center mb-4 text-green-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-green-100 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-green-200 rounded-full px-5 py-2">
                <Gift className="w-5 h-5 text-green-600" />
                <span className="text-sm font-bold text-gray-700">Limited Time Offer</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900">
                Ready to <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">3x</span> Your Sales?
              </h2>
              <p className="text-2xl text-gray-600 font-semibold">
                Join 1,200+ businesses already crushing their targets
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/create-chatbot"
                className="group px-12 py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-black text-2xl hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-2 transition-all flex items-center gap-4"
              >
                Start Free Trial
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href="/appointment"
                className="px-12 py-6 bg-white border-2 border-green-600 text-green-600 rounded-2xl font-black text-2xl hover:bg-green-50 transition-all flex items-center gap-4"
              >
                Book a Demo
                <ChevronRight className="w-8 h-8" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold">No credit card required</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
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