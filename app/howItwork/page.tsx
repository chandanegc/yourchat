'use client';

import { useState } from 'react';
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Building2,
  Cpu,
  Rocket,
  Smartphone,
  Globe,
  MessageCircle,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Shield,
  BarChart3,
  Play,
  ChevronDown,
  Star,
  TrendingUp,
  HeadphonesIcon,
  Target,
  Settings,
  Eye,
  Lock,
  Layers,
  Download,
  Upload,
  RefreshCw,
  Award,
  ThumbsUp
} from 'lucide-react';

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const steps = [
    {
      number: 1,
      icon: <Building2 className="w-7 h-7" />,
      title: "Add Your Business Information",
      subtitle: "Train the AI in minutes",
      description: "Simply provide your essential business details through our easy setup form. No technical skills needed.",
      duration: "5-10 min",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      features: [
        { text: "Business Name & Details", icon: <Building2 className="w-4 h-4" /> },
        { text: "Services & Pricing", icon: <Target className="w-4 h-4" /> },
        { text: "Working Hours", icon: <Clock className="w-4 h-4" /> },
        { text: "FAQs & Knowledge Base", icon: <MessageCircle className="w-4 h-4" /> },
        { text: "Support Rules & Policies", icon: <Shield className="w-4 h-4" /> },
        { text: "Brand Voice Guidelines", icon: <Sparkles className="w-4 h-4" /> }
      ]
    },
    {
      number: 2,
      icon: <Globe className="w-7 h-7" />,
      title: "Connect Your Channels",
      subtitle: "One-click integrations",
      description: "Choose where you want your AI assistant to live. Connect to all your customer touchpoints instantly.",
      duration: "2-5 min",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      platforms: [
        { platform: "Website", time: "2 min", icon: "🌐", color: "bg-blue-100 text-blue-600" },
        { platform: "WhatsApp", time: "3 min", icon: "💬", color: "bg-green-100 text-green-600" },
        { platform: "Instagram", time: "2 min", icon: "📷", color: "bg-pink-100 text-pink-600" },
        { platform: "Facebook", time: "2 min", icon: "📘", color: "bg-blue-100 text-blue-700" },
        { platform: "Telegram", time: "1 min", icon: "✈️", color: "bg-sky-100 text-sky-600" }
      ]
    },
    {
      number: 3,
      icon: <Rocket className="w-7 h-7" />,
      title: "Go Live & Start Automating",
      subtitle: "Instant deployment",
      description: "Your AI assistant starts working immediately — engaging customers, answering questions, and capturing leads.",
      duration: "Instant",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      liveFeatures: [
        { feature: "24/7 Support", icon: <Clock className="w-5 h-5" />, color: "purple" },
        { feature: "Lead Capture", icon: <Target className="w-5 h-5" />, color: "orange" },
        { feature: "Appointments", icon: <Calendar className="w-5 h-5" />, color: "blue" },
        { feature: "FAQ Automation", icon: <MessageCircle className="w-5 h-5" />, color: "green" },
        { feature: "Smart Escalation", icon: <RefreshCw className="w-5 h-5" />, color: "pink" },
        { feature: "Analytics", icon: <BarChart3 className="w-5 h-5" />, color: "indigo" }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Setup",
      description: "Get started in under 15 minutes",
      stat: "15min",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption & compliance",
      stat: "100%",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Always Available",
      description: "Never miss a customer inquiry",
      stat: "24/7",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Track performance instantly",
      stat: "Live",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const features = [
    {
      icon: <HeadphonesIcon className="w-7 h-7" />,
      title: "24/7 Customer Support",
      description: "Instant answers to common questions anytime, day or night.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Lead Capture",
      description: "Automatically collects names, emails, and phone numbers from interested customers.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Appointment Booking",
      description: "Customers schedule meetings without back-and-forth emails.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "FAQ Automation",
      description: "Handles repetitive questions instantly, freeing up your team.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Multi-Channel Sync",
      description: "Conversations continue seamlessly across all platforms.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Smart Escalation",
      description: "Complex issues get routed to your human team automatically.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const faqs = [
    {
      q: "Do I need coding knowledge to set this up?",
      a: "No coding required at all. Our setup is 100% no-code. If you can fill out a form and copy-paste a line of code, you can have your chatbot live in minutes.",
      icon: <Settings className="w-5 h-5" />
    },
    {
      q: "How long does it take to train the AI?",
      a: "Training is instant. Once you provide your business information, our AI processes it immediately and is ready to start answering questions.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      q: "Can I change my business information after setup?",
      a: "Absolutely. You can update your business details, FAQs, and preferences anytime from your dashboard. The AI learns and adapts in real-time.",
      icon: <RefreshCw className="w-5 h-5" />
    },
    {
      q: "What platforms can I connect?",
      a: "YourSiteChat connects to Website (via code snippet), WhatsApp, Instagram, Facebook Messenger, and Telegram — all from a single unified system.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      q: "What happens if the AI can't answer a question?",
      a: "Our smart escalation system automatically routes complex queries to your human team, ensuring customers always get the help they need.",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      q: "Can I customize the chatbot's personality?",
      a: "Yes! You can define your brand voice, tone, and communication style. The AI adapts to match your business personality perfectly.",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(147 51 234 / 0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-purple-100/50">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700 font-semibold">Simple 3-Step Process</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Your Business Data Into an
            <span className="block mt-3 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              AI-Powered Assistant in Minutes
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Get your AI chatbot live on your website, WhatsApp, and Instagram in three simple steps — no coding required.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/start" 
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
            >
              Start Free Trial 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://www.youtube.com/watch?v=hXjR8C3rRoA"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Setup in 15 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits Bar */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm mb-3 text-white">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{benefit.stat}</div>
                <div className="text-sm text-white/90">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Main Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Three simple steps to automate your customer engagement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 opacity-30" style={{ top: '100px' }}></div>

            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative group"
                onMouseEnter={() => setActiveStep(step.number)}
              >
                <div className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 h-full ${
                  activeStep === step.number 
                    ? 'border-purple-400 shadow-2xl shadow-purple-100 -translate-y-2' 
                    : 'border-gray-200 hover:border-purple-200 hover:shadow-xl'
                }`}>
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} text-white text-xl font-bold flex items-center justify-center shadow-lg z-10`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>

                  {/* Duration badge */}
                  <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-4">{step.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  {/* Features/Platforms/Live Features */}
                  {step.features && (
                    <div className="space-y-3">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm bg-gray-50 rounded-lg p-3 group-hover:bg-purple-50 transition-colors">
                          <div className="text-purple-500">
                            {feature.icon}
                          </div>
                          <span className="text-gray-700 font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.platforms && (
                    <div className="space-y-2">
                      {step.platforms.map((platform, i) => (
                        <div key={i} className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 border border-gray-100 hover:border-blue-200 transition-all">
                          <div className="flex items-center gap-3">
                            <span className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center text-lg`}>
                              {platform.icon}
                            </span>
                            <span className="font-semibold text-gray-700">{platform.platform}</span>
                          </div>
                          <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                            {platform.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.liveFeatures && (
                    <div className="grid grid-cols-2 gap-3">
                      {step.liveFeatures.map((feature, i) => (
                        <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 text-center hover:border-purple-200 hover:shadow-md transition-all group/feature">
                          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-${feature.color}-100 text-${feature.color}-600 mb-2 group-hover/feature:scale-110 transition-transform`}>
                            {feature.icon}
                          </div>
                          <span className="text-xs font-semibold text-gray-700 block">{feature.feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Business Example */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Eye className="w-4 h-4" />
              Real Example
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">See How Easy It Is</h2>
            <p className="text-xl text-gray-600">Real business example: "The Coffee Shop"</p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Step 1 Example */}
              <div className="p-8 hover:bg-purple-50/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business Info</h3>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm space-y-3">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Business Name</p>
                      <p className="text-sm text-gray-900 font-semibold">The Coffee Shop</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Services</p>
                      <p className="text-sm text-gray-900">Espresso, Latte, Cappuccino, Pastries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Hours</p>
                      <p className="text-sm text-gray-900">Mon-Fri 7am-6pm, Sat-Sun 8am-4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 Example */}
              <div className="p-8 hover:bg-blue-50/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Channels</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Website", icon: "🌐", status: "Connected" },
                    { name: "WhatsApp", icon: "💬", status: "Connected" },
                    { name: "Instagram", icon: "📷", status: "Connected" },
                    { name: "Facebook", icon: "📘", status: "Optional" }
                  ].map((channel, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{channel.icon}</span>
                        <span className="font-medium text-gray-700">{channel.name}</span>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        channel.status === "Connected" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {channel.status === "Connected" && <CheckCircle className="w-3 h-3 inline mr-1" />}
                        {channel.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 Example */}
              <div className="p-8 hover:bg-green-50/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Live Stats</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Questions answered", value: "1,247", icon: <MessageCircle className="w-4 h-4" />, color: "purple" },
                    { label: "Bookings made", value: "89", icon: <Calendar className="w-4 h-4" />, color: "blue" },
                    { label: "Leads captured", value: "234", icon: <Target className="w-4 h-4" />, color: "green" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg bg-${stat.color}-100 text-${stat.color}-600 flex items-center justify-center`}>
                          {stat.icon}
                        </div>
                        <span className="text-sm text-gray-600">{stat.label}</span>
                      </div>
                      <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features That Matter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Happens After Launch
            </h2>
            <p className="text-xl text-gray-600">Your AI assistant works around the clock</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-purple-200 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.q}</h3>
                      {expandedFaq === i && (
                        <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
                      )}
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-semibold">Ready to Launch</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands of businesses using YourSiteChat to provide 24/7 support, capture leads, and book appointments automatically.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link 
              href="/start" 
              className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-2xl"
            >
              Start Free Trial 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Contact Sales
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
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