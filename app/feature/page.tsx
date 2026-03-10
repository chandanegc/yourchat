'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  MessageSquare, 
  Mic, 
  Calendar, 
  Magnet, 
  Globe, 
  Zap, 
  Clock, 
  TrendingUp,
  Shield,
  DollarSign,
  Users,
  Sparkles,
  ChevronRight,
  Check,
  ArrowRight,
  Bot,
  Settings,
  BarChart3,
  Rocket
} from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const coreFeatures = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Chatbot",
      description: "Natural voice interactions powered by AI",
      gradient: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      borderLight: "border-purple-200",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      features: [
        "Voice interaction with natural language processing",
        "AI-powered voice responses",
        "24/7 availability for customer support",
        "Hands-free customer engagement",
        "100+ languages support"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Smart AI Chatbot",
      description: "Intelligent Q&A and customer support automation",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      borderLight: "border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      features: [
        "Customer question solving with AI",
        "FAQ automation for common queries",
        "Business knowledge-based answers",
        "24/7 automated support system",
        "100+ languages support"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Booking",
      description: "Automated scheduling workflow",
      gradient: "from-green-500 to-emerald-500",
      bgLight: "bg-green-50",
      borderLight: "border-green-200",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
      features: [
        "Automated scheduling system",
        "Service selection integration",
        "Real-time availability checking",
        "Confirmation notifications",
        "Calendar synchronization"
      ]
    },
    {
      icon: <Magnet className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Automated lead capture and qualification",
      gradient: "from-orange-500 to-red-500",
      bgLight: "bg-orange-50",
      borderLight: "border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      features: [
        "Auto lead capture system",
        "Phone number collection",
        "Email address validation",
        "Full name gathering",
        "Lead qualification scoring"
      ]
    }
  ];

  const platforms = [
    { 
      name: "Website", 
      icon: <Globe className="w-8 h-8" />,
      description: "Embed on any website",
      color: "text-blue-600"
    },
    { 
      name: "WhatsApp", 
      icon: <MessageSquare className="w-8 h-8" />,
      description: "Official API integration",
      color: "text-green-600"
    },
    { 
      name: "Instagram", 
      icon: <Users className="w-8 h-8" />,
      description: "DM automation",
      color: "text-pink-600"
    },
    { 
      name: "Facebook", 
      icon: <MessageSquare className="w-8 h-8" />,
      description: "Messenger support",
      color: "text-blue-700"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Never miss a customer query",
      stat: "10M+",
      statLabel: "Messages Automated",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Faster Response",
      description: "Instant customer engagement",
      stat: "<1s",
      statLabel: "Response Time",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Scalability",
      description: "Grow without limits",
      stat: "10x",
      statLabel: "Efficiency Boost",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Lower operational expenses",
      stat: "70%",
      statLabel: "Cost Savings",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Magnet className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Capture every opportunity",
      stat: "3x",
      statLabel: "More Leads",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Automated Bookings",
      description: "Seamless scheduling",
      stat: "24/7",
      statLabel: "Availability",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const setupSteps = [
    {
      number: "1",
      title: "Add the Chatbot",
      description: "Integrate the AI chatbot into your website or app with a simple script or SDK.",
      icon: <div className="w-6 h-6 overflow-hidden"><img src="/chat.png" alt="Chat" className="w-full h-full object-contain" /></div>,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "2",
      title: "Train with Your Data",
      description: "Upload FAQs, help docs, or knowledge base to train the chatbot on your product.",
      icon: <Settings className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "3",
      title: "Support Customers 24/7",
      description: "Instantly answer queries, escalate complex issues to agents, and track support performance.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-blue-50/30 to-pink-100/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(209 213 219 / 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-700 font-medium">Platform Features</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Powerful Features
              </span>
              <br />
              <span className="text-gray-900">That Drive Results</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to automate customer engagement and grow your business with AI-powered conversations
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all shadow-md inline-block">
                Request a Demo
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: "10M+", label: "Messages Automated" },
              { value: "1.2K+", label: "Happy Customers" },
              { value: "24/7", label: "Support Available" },
              { value: "99.9%", label: "Uptime Guarantee" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-4 uppercase tracking-wider">CORE SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You Can Do With YourSiteChat
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive AI-powered solutions for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white border-2 ${feature.borderLight} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Platform Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wider">INTEGRATIONS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              One Platform, Multiple Channels
            </h2>
            <p className="text-gray-600 text-lg">
              Connect with customers wherever they are
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-purple-300 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className={`${platform.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {platform.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h4>
                <p className="text-sm text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>

          {/* Integration Visual */}
          <div className="relative max-w-3xl mx-auto mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-blue-200/50 blur-3xl"></div>
            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-12 text-center shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mb-6 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">YourSiteChat AI Platform</h3>
              <p className="text-gray-600">Centralized control for all your customer conversations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-4 uppercase tracking-wider">BENEFITS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Measurable Impact on Your Business
            </h2>
            <p className="text-gray-600 text-lg">
              Real results that drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white shadow-md`}>
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>{benefit.stat}</div>
                    <div className="text-xs text-gray-500">{benefit.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-4 uppercase tracking-wider">PROCESS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 -translate-y-1/2 rounded-full"></div>
            
            {setupSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white text-2xl font-bold mb-6 mx-auto shadow-lg`}>
                    {step.number}
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-purple-600 mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/30">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose YourSiteChat
            </h2>
            <p className="text-gray-600 text-lg">
              The complete AI automation platform for modern businesses
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Multi-Platform AI System",
                description: "Unified solution across Website, WhatsApp, Instagram, and Facebook",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "No-Code Setup",
                description: "Quick deployment without technical expertise required",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Scalable Architecture",
                description: "Grows with your business from startup to enterprise",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Business-Focused Design",
                description: "Built specifically for business automation and customer engagement",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Cost-Effective Automation",
                description: "Reduce operational costs while improving service quality",
                color: "from-pink-500 to-rose-500"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 text-white shadow-md`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600"></div>
            
            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Automating Your Business Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your customer engagement with AI-powered automation. Join 1,200+ businesses already growing with YourSiteChat.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a href="https://www.youtube.com/watch?v=hXjR8C3rRoA" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all inline-block">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
