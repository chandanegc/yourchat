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
  MessageCircleIcon,
  Send,
  CheckCheck,
  Bot,
  Smartphone,
  Download,
  PlayCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WhatsAppIntegrationPage() {
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
    primaryColor: '#25D366',
    secondaryColor: '#075E54'
  });

  const [embedCode, setEmbedCode] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Extract phone number for WhatsApp
    const phone = formData.contactPhone.replace(/\D/g, '');
    setWhatsappNumber(phone);
    
    const generatedCode = `<!-- YourSiteChat WhatsApp Integration -->
<script>
  window.YourSiteChatWhatsApp = {
    businessName: "${formData.businessName}",
    phoneNumber: "${phone}",
    welcomeMessage: "Hi! I'm interested in your services.",
    position: "right",
    color: "${formData.primaryColor}"
  };
</script>
<script src="https://cdn.yoursitechat.com/whatsapp-widget.js" async></script>`;
    
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
      icon: <MessageCircleIcon className="w-5 h-5" />,
      title: "Direct WhatsApp Chat",
      description: "Connect customers directly to WhatsApp",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <CheckCheck className="w-5 h-5" />,
      title: "98% Open Rate",
      description: "Higher engagement than email",
      color: "from-green-600 to-teal-500"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Instant Messaging",
      description: "Real-time customer conversations",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "AI Auto-Reply",
      description: "Automated responses 24/7",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "2B+ Users",
      description: "Reach massive audience globally",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "End-to-End Encrypted",
      description: "Secure business conversations",
      color: "from-emerald-600 to-green-700"
    }
  ];

  const stats = [
    { value: "2B+", label: "WhatsApp Users", icon: <Users className="w-5 h-5" /> },
    { value: "98%", label: "Open Rate", icon: <CheckCheck className="w-5 h-5" /> },
    { value: "24/7", label: "Available", icon: <Clock className="w-5 h-5" /> },
    { value: "<1s", label: "Response Time", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* WhatsApp themed background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-70"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(37 211 102 / 0.2) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>

          {/* Floating WhatsApp icons */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              {/* WhatsApp Badge */}
              <div className="inline-flex items-center gap-2 bg-white border-2 border-green-500 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-green-500/20">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <MessageCircleIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-bold">Official WhatsApp Business API</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Connect Your Business to
                <span className="block mt-2 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  2 Billion WhatsApp Users
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Integrate AI-powered WhatsApp chatbot with your business. Automate customer support, capture leads, and boost sales — all through the world's most popular messaging app.
              </p>

              {/* WhatsApp Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-5 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all hover:scale-105">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
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
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 font-semibold">Powerful Features</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose WhatsApp Integration?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The most trusted messaging platform for business communication worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-green-50 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all hover:-translate-y-1"
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
                    <MessageCircleIcon className="w-7 h-7 text-green-600" />
                    Setup WhatsApp Bot
                  </h2>
                  <p className="text-gray-600">
                    Connect your business WhatsApp number and start automating customer conversations instantly.
                  </p>
                </div>

                {/* WhatsApp Benefits */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Official WhatsApp Business API access",
                      "AI-powered auto-reply system",
                      "Instant customer notifications",
                      "Rich media support (images, videos, docs)",
                      "Lead capture & CRM integration",
                      "Broadcast messages to unlimited contacts",
                      "Real-time analytics dashboard",
                      "Multi-agent support with handoff"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Preview */}
                <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <MessageCircleIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Your Business</div>
                        <div className="text-xs text-white/80">Online</div>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm">👋 Hi! How can we help you today?</p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-500 italic">Preview of how your WhatsApp chat will look</p>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                      alt="Customer"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Mike Johnson</div>
                      <div className="text-xs text-gray-600">E-commerce Owner</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">
                    "WhatsApp integration increased our response rate by 300%. Customers love the instant connection!"
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
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-green-200 sticky top-24">
                  {currentStep === 1 ? (
                    <>
                      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-6 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <MessageCircleIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">WhatsApp Integration Setup</h3>
                              <p className="text-sm text-white/90">Connect your business number</p>
                            </div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
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
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
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
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
                                placeholder="Acme Corp"
                              />
                            </div>
                          </div>
                        </div>

                        {/* WhatsApp Phone Number - Highlighted */}
                        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-green-600" />
                            WhatsApp Business Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                            <input
                              type="tel"
                              name="contactPhone"
                              value={formData.contactPhone}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-green-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          <p className="text-xs text-green-700 mt-2 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            This will be your WhatsApp Business number
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
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
                              placeholder="https://www.example.com/"
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
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
                              placeholder="john@example.com"
                            />
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
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
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
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all resize-none"
                              placeholder="Describe your products, services, pricing..."
                            />
                          </div>
                          <p className="text-xs text-gray-500 text-right mt-1">{formData.serviceDescription.length} / 2000</p>
                        </div>

                        <button
                          type="submit"
                          className="w-full group bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/30 transition-all inline-flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircleIcon className="w-5 h-5" />
                          Generate WhatsApp Integration
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                              <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">WhatsApp Connected!</h3>
                              <p className="text-sm text-white/90">Your integration is ready</p>
                            </div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-white font-semibold text-sm">Step 2 of 2</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-3">
                            <MessageCircleIcon className="w-8 h-8 text-green-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">Integration Ready!</h2>
                          <p className="text-sm text-gray-600">Copy the code below and add to your website</p>
                        </div>

                        <div className="space-y-4">
                          {/* WhatsApp Number Display */}
                          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                                <MessageCircleIcon className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-600 font-medium">Connected WhatsApp Number</div>
                                <div className="text-lg font-bold text-gray-900">{formData.contactPhone}</div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                                <Code className="w-4 h-4 text-green-600" />
                                WhatsApp Widget Code
                              </label>
                              <button
                                onClick={copyToClipboard}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                  isCopied 
                                    ? 'bg-green-500 text-white' 
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
                              <code className="text-green-400 text-xs font-mono">{embedCode}</code>
                            </pre>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-blue-600" />
                              Quick Install Guide
                            </h3>
                            <ol className="space-y-2 text-xs text-gray-700">
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
                                <span>Copy the WhatsApp widget code above</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">2</span>
                                <span>Paste before <code className="bg-white px-1.5 py-0.5 rounded text-green-600">&lt;/body&gt;</code> tag in your website</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">3</span>
                                <span>Save and publish your changes</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                                <span className="font-semibold">Done! WhatsApp button is now live on your site 🎉</span>
                              </li>
                            </ol>
                          </div>

                          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                            <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <MessageCircleIcon className="w-4 h-4 text-green-600" />
                              What Happens Next?
                            </h4>
                            <ul className="space-y-2 text-xs text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>A floating WhatsApp button appears on your website</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Visitors can click to chat directly with you on WhatsApp</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>AI auto-replies handle common questions instantly</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>You receive notifications for new conversations</span>
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
                            
                            <a  href="/dashboard"
                              className="px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
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