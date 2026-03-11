'use client';

import React, { useState } from 'react';
import { 
  ArrowRight,
  CheckCircle,
  Mail,
  User,
  Phone,
  Building2,
  Globe,
  MapPin,
  MessageSquare,
  Copy,
  Check,
  Sparkles,
  Code,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Target,
  Users,
  Instagram,
  Send,
  Heart,
  Camera,
  Image,
  Video,
  Bookmark,
  Bell,
  AtSign,
  Hash
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InstagramIntegrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    yourName: '',
    businessName: '',
    websiteUrl: '',
    contactPhone: '',
    contactEmail: '',
    businessAddress: '',
    serviceDescription: '',
    instagramHandle: '',
    primaryColor: '#E1306C',
    secondaryColor: '#C13584'
  });

  const [embedCode, setEmbedCode] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const generatedCode = `<!-- YourSiteChat Instagram Integration -->
<script>
  window.YourSiteChatInstagram = {
    businessName: "${formData.businessName}",
    instagramHandle: "${formData.instagramHandle}",
    welcomeMessage: "Hi! DM us on Instagram 💜",
    position: "right",
    theme: "gradient"
  };
</script>
<script src="https://cdn.yoursitechat.com/instagram-widget.js" async></script>`;
    
    setEmbedCode(generatedCode);
    setCurrentStep(2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const features = [
    {
      icon: <Send className="w-5 h-5" />,
      title: "Instagram DM Automation",
      description: "Auto-reply to direct messages instantly",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Comment Auto-Reply",
      description: "Respond to post & story comments",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Story Mentions",
      description: "Engage with story tags automatically",
      color: "from-pink-600 to-orange-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "2B+ Active Users",
      description: "Reach massive global audience",
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: <Image className="w-5 h-5" />,
      title: "Rich Media Support",
      description: "Send images, videos & carousels",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "85% Engagement",
      description: "Highest engagement rate platform",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "2B+", label: "Active Users", icon: <Users className="w-5 h-5" /> },
    { value: "85%", label: "Engagement Rate", icon: <Heart className="w-5 h-5" /> },
    { value: "24/7", label: "Auto-Reply", icon: <Clock className="w-5 h-5" /> },
    { value: "500M", label: "Daily Stories", icon: <Camera className="w-5 h-5" /> }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Instagram themed background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 opacity-70"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(225 48 108 / 0.2) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>

          {/* Floating Instagram gradient blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              {/* Instagram Badge */}
              <div className="inline-flex items-center gap-2 bg-white border-2 border-pink-500 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-pink-500/20">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-bold">Instagram Business Integration</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automate Instagram DMs &
                <span className="block mt-2 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Boost Engagement 10x
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect your Instagram Business account and automate DMs, comments, and story replies. Engage with 2 billion users while you sleep with AI-powered automation.
              </p>

              {/* Instagram Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-5 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all hover:scale-105 group">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm text-pink-700 font-semibold">Powerful Features</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Instagram Automation?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The most visual and engaging platform to connect with your audience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-pink-50 rounded-2xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Instagram className="w-7 h-7 text-pink-600" />
                    Setup Instagram Bot
                  </h2>
                  <p className="text-gray-600">
                    Connect your Instagram Business account and start automating DMs, comments, and story interactions instantly.
                  </p>
                </div>

                {/* Instagram Benefits */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    What You'll Get
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Automated Instagram DM responses 24/7",
                      "Auto-reply to post & reel comments",
                      "Story mention engagement automation",
                      "Lead capture through DM conversations",
                      "Product catalog integration in DMs",
                      "Click-to-DM Instagram ad campaigns",
                      "Quick reply buttons & interactive menus",
                      "Real-time analytics & insights"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Heart className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instagram Preview */}
                <div className="bg-white rounded-2xl p-6 border-2 border-pink-200 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl p-4 text-white mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white">
                        <Camera className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold flex items-center gap-1">
                          Your Business
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-xs text-white/80">Active now</div>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl rounded-tl-none p-3">
                      <p className="text-sm">Hey! 👋 Thanks for reaching out! How can we help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <Bookmark className="w-5 h-5 text-gray-400" />
                    <Send className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-xs text-center text-gray-500 italic mt-3">Preview of Instagram DM interface</p>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                      alt="Customer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-pink-400"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Martinez</div>
                      <div className="text-xs text-gray-600">Fashion Brand Owner</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">
                    "Instagram automation helped us handle 1000+ DMs daily. Our engagement rate jumped from 12% to 85%! 💜"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-pink-200 sticky top-24">
                  {currentStep === 1 ? (
                    <>
                      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 p-6 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/50">
                              <Instagram className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">Instagram Integration Setup</h3>
                              <p className="text-sm text-white/90">Connect your business account</p>
                            </div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                            <span className="text-white font-semibold text-sm">Step 1 of 2</span>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Name *</label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                name="yourName"
                                value={formData.yourName}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                                placeholder="John Doe"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Business Name *</label>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                                placeholder="Acme Corp"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Instagram Handle - Highlighted */}
                        <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-300 rounded-xl p-4">
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                            <Instagram className="w-4 h-4 text-pink-600" />
                            Instagram Business Handle *
                          </label>
                          <div className="relative">
                            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-600" />
                            <input
                              type="text"
                              name="instagramHandle"
                              value={formData.instagramHandle}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-pink-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                              placeholder="yourbusiness"
                            />
                          </div>
                          <p className="text-xs text-pink-700 mt-2 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Enter your Instagram username (without @)
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Website URL *</label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="url"
                              name="websiteUrl"
                              value={formData.websiteUrl}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                              placeholder="https://www.example.com/"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Contact Phone</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="tel"
                                name="contactPhone"
                                value={formData.contactPhone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Contact Email</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="email"
                                name="contactEmail"
                                value={formData.contactEmail}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                                placeholder="john@example.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Business Address</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              name="businessAddress"
                              value={formData.businessAddress}
                              onChange={handleChange}
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                              placeholder="123 Main St, City, Country"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Describe Your Services</label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <textarea
                              name="serviceDescription"
                              value={formData.serviceDescription}
                              onChange={handleChange}
                              rows={3}
                              maxLength={2000}
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all resize-none"
                              placeholder="Describe your products, services, pricing..."
                            />
                          </div>
                          <p className="text-xs text-gray-500 text-right mt-1">{formData.serviceDescription.length} / 2000</p>
                        </div>

                        <button
                          type="submit"
                          className="w-full group bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/40 transition-all inline-flex items-center justify-center gap-2 mt-2"
                        >
                          <Instagram className="w-5 h-5" />
                          Generate Instagram Integration
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 p-6 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce border-2 border-white/50">
                              <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">Instagram Connected! 🎉</h3>
                              <p className="text-sm text-white/90">Your automation is ready</p>
                            </div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                            <span className="text-white font-semibold text-sm">Step 2 of 2</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 mb-3 border-2 border-pink-300">
                            <Instagram className="w-8 h-8 text-pink-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">Integration Ready!</h2>
                          <p className="text-sm text-gray-600">Copy the code and add to your website</p>
                        </div>

                        <div className="space-y-4">
                          {/* Instagram Handle Display */}
                          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-300 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center text-white border-2 border-white shadow-lg">
                                <Instagram className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-600 font-medium">Connected Instagram</div>
                                <div className="text-lg font-bold text-gray-900 flex items-center gap-1">
                                  @{formData.instagramHandle}
                                  <CheckCircle className="w-5 h-5 text-blue-500" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                                <Code className="w-4 h-4 text-pink-600" />
                                Instagram Widget Code
                              </label>
                              <button
                                onClick={copyToClipboard}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                  isCopied 
                                    ? 'bg-pink-500 text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {isCopied ? (
                                  <>
                                    <Check className="w-3.5 h-3.5" />
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    Copy Code
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto border border-gray-700">
                              <code className="text-pink-400 text-xs font-mono">{embedCode}</code>
                            </pre>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-blue-600" />
                              Quick Install Guide
                            </h3>
                            <ol className="space-y-2 text-xs text-gray-700">
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
                                <span>Copy the Instagram widget code above</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center">2</span>
                                <span>Paste before <code className="bg-white px-1.5 py-0.5 rounded text-pink-600">&lt;/body&gt;</code> tag in your website</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center">3</span>
                                <span>Save and publish your website</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                                <span className="font-semibold">Done! Instagram DM button is live 🎉</span>
                              </li>
                            </ol>
                          </div>

                          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-4">
                            <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <Heart className="w-4 h-4 text-pink-600" />
                              What Happens Next?
                            </h4>
                            <ul className="space-y-2 text-xs text-gray-700">
                              <li className="flex items-start gap-2">
                                <Camera className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                                <span>An Instagram icon appears on your website</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Send className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span>Visitors click to DM you on Instagram instantly</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Heart className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                                <span>AI auto-replies handle DMs, comments & story mentions</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Bell className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span>Get real-time notifications for new messages</span>
                              </li>
                            </ul>
                          </div>

                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                              onClick={() => setCurrentStep(1)}
                              className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition-all"
                            >
                              ← Edit Details
                            </button>
                            
                             <a href="/dashboard"
                              className="px-4 py-2.5 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white rounded-lg text-sm font-semibold hover:shadow-xl transition-all text-center flex items-center justify-center gap-2"
                            >
                              Dashboard
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
      `}</style>
    </>
  );
}