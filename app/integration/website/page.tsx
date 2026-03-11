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
  BarChart3,
  Users,
  Settings,
  Palette,
  Bell,
  Download
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WebsiteIntegrationPage() {
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
    primaryColor: '#9333EA',
    secondaryColor: '#3B82F6'
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
    
    const generatedCode = `<!-- YourSiteChat Widget -->
<script>
  window.YourSiteChatConfig = {
    businessName: "${formData.businessName}",
    primaryColor: "${formData.primaryColor}",
    secondaryColor: "${formData.secondaryColor}",
    welcomeMessage: "Hi! How can we help you today?"
  };
</script>
<script src="https://cdn.yoursitechat.com/widget.js" async></script>`;
    
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
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Setup",
      description: "Add AI chat to your site in 2 minutes"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Lead Capture",
      description: "Automatically collect visitor information"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Fully Customizable",
      description: "Match your brand perfectly"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multi-Language",
      description: "Support 100+ languages"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure & Private",
      description: "Enterprise-grade encryption"
    }
  ];

  const stats = [
    { value: "<2min", label: "Setup Time" },
    { value: "100%", label: "Customizable" },
    { value: "24/7", label: "Available" },
    { value: "0", label: "Coding Required" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 opacity-50"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(147 51 234 / 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700 font-semibold">Website Chat Widget</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Add AI Chatbot to
                <span className="block mt-2 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Your Website
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Install our AI-powered chat widget in under 2 minutes. No coding required. Provide instant 24/7 support, capture leads, and boost conversions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Website Chat Widget?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to provide exceptional customer experience on your website
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Get Started Now
                  </h2>
                  <p className="text-gray-600">
                    Fill in your details and get your custom chat widget code instantly. Installation takes less than 2 minutes.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    What You'll Get
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Instant AI-powered responses",
                      "Customizable colors & branding",
                      "Lead capture & contact forms",
                      "Appointment booking system",
                      "Multi-language support (100+)",
                      "Real-time analytics dashboard",
                      "Mobile-responsive design",
                      "GDPR & privacy compliant"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                      alt="Customer"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">David Chen</div>
                      <div className="text-xs text-gray-600">CEO, TechStart</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Setup took literally 90 seconds. Our response time improved dramatically and we're capturing 3x more leads!"
                  </p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 sticky top-24">
                  {currentStep === 1 ? (
                    <>
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">Setup Your Chat Widget</h3>
                            <p className="text-sm text-white/90">Fill in your business details</p>
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
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
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
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                                placeholder="Acme Corp"
                              />
                            </div>
                          </div>
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
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                              placeholder="https://www.example.com/"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">We'll analyze your website to train the chatbot</p>
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
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
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
                                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
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
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
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
                              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all resize-none"
                              placeholder="Describe your products, services, pricing..."
                            />
                          </div>
                          <p className="text-xs text-gray-500 text-right mt-1">{formData.serviceDescription.length} / 2000</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                          <h3 className="text-sm font-bold text-gray-900 mb-3">Chatbot Colors</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-2">Primary</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="color"
                                  name="primaryColor"
                                  value={formData.primaryColor}
                                  onChange={handleChange}
                                  className="w-10 h-10 rounded-lg cursor-pointer border border-gray-300"
                                />
                                <input
                                  type="text"
                                  value={formData.primaryColor}
                                  onChange={handleChange}
                                  name="primaryColor"
                                  className="flex-1 px-2 py-1.5 bg-white border border-gray-300 rounded-lg text-xs text-gray-900 focus:border-purple-500 outline-none transition-all uppercase"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-2">Secondary</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="color"
                                  name="secondaryColor"
                                  value={formData.secondaryColor}
                                  onChange={handleChange}
                                  className="w-10 h-10 rounded-lg cursor-pointer border border-gray-300"
                                />
                                <input
                                  type="text"
                                  value={formData.secondaryColor}
                                  onChange={handleChange}
                                  name="secondaryColor"
                                  className="flex-1 px-2 py-1.5 bg-white border border-gray-300 rounded-lg text-xs text-gray-900 focus:border-blue-500 outline-none transition-all uppercase"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full group bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all inline-flex items-center justify-center gap-2 mt-2"
                        >
                          Generate Widget Code
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">Widget Ready!</h3>
                            <p className="text-sm text-white/90">Copy and install the code</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-white font-semibold text-sm">Step 2 of 2</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-3">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">Installation Code Ready!</h2>
                          <p className="text-sm text-gray-600">Copy and paste into your website</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                                <Code className="w-4 h-4 text-purple-600" />
                                Your Widget Code
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
                              Installation Steps
                            </h3>
                            <ol className="space-y-2 text-xs text-gray-700">
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
                                <span>Copy the code above using the button</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">2</span>
                                <span>Open your website's HTML file or page editor</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">3</span>
                                <span>Paste the code just before the closing <code className="bg-white px-1.5 py-0.5 rounded text-blue-600">&lt;/body&gt;</code> tag</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">4</span>
                                <span>Save and publish your changes</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                                <span className="font-semibold">Done! Your chat widget is now live 🎉</span>
                              </li>
                            </ol>
                          </div>

                          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                            <h4 className="text-sm font-bold text-gray-900 mb-2">Need Help?</h4>
                            <p className="text-xs text-gray-600 mb-3">
                              Check our detailed installation guides for popular platforms:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Webflow'].map((platform) => (
                                <span key={platform} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                                  {platform}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                              onClick={() => setCurrentStep(1)}
                              className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition-all"
                            >
                              ← Edit Details
                            </button>
                            
                              <a href="/dashboard"
                              className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all text-center"
                            >
                              Go to Dashboard →
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
    </>
  );
}