'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Heart, Stethoscope, Clock, Shield, Users, 
  ArrowRight, CheckCircle, Star, BarChart3, Activity,
  Calendar, Target, Award, Sparkles, MessageCircle,
  ChevronRight, Pill, UserCheck, Globe2,
  ClipboardCheck, Video, FileText, Bell, Phone,
  Ambulance, Thermometer, HeartPulse, Lock, Zap
} from 'lucide-react';

export default function HealthcarePage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(20 184 166 / 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
          
          {/* Animated blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
<div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-teal-200 rounded-full shadow-sm">
                  <Heart className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-bold text-gray-700">Healthcare AI Assistant</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Transform Patient
                  <span className="block mt-2 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Care with AI
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  HIPAA-compliant AI chatbot that handles patient inquiries, appointment scheduling, symptom checking, and provides 24/7 healthcare support while reducing staff workload by 70%.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  {[
                    { value: "70%", label: "Staff Time Saved" },
                    { value: "24/7", label: "Patient Support" },
                    { value: "HIPAA", label: "Compliant" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-teal-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="/create-chatbot"
                    className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all flex items-center gap-3"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/appointment"
                    className="px-8 py-4 bg-white border-2 border-teal-600 text-teal-600 rounded-2xl font-bold text-lg hover:bg-teal-50 transition-all flex items-center gap-3"
                  >
                    Schedule Demo
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-semibold text-gray-700">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-semibold text-gray-700">256-bit Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-semibold text-gray-700">GDPR Ready</span>
                  </div>
                </div>
              </div>
              
              {/* Right - Healthcare Chat Demo */}
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Stethoscope className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="text-white">
                        <div className="font-bold">HealthCare Assistant</div>
                        <div className="text-xs opacity-90 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          Available 24/7
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 bg-gray-50 min-h-[400px]">
                    {/* Bot message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-teal-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">👋 Hello! I'm your virtual healthcare assistant. How can I help you today?</p>
                      </div>
                    </div>

                    {/* Quick action buttons */}
                    <div className="flex flex-col gap-2 pl-11">
                      {[
                        "📅 Schedule appointment",
                        "💊 Prescription refill",
                        "🩺 Check symptoms",
                        "📋 View test results"
                      ].map((option, i) => (
                        <button 
                          key={i}
                          className="text-left px-4 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm">I need to schedule an appointment with Dr. Smith</p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-teal-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">I can help you with that! Dr. Smith has the following available slots this week:</p>
                      </div>
                    </div>

                    {/* Appointment slots */}
                    <div className="flex gap-2 pl-11 flex-wrap">
                      <button className="px-4 py-2 bg-teal-100 text-teal-700 rounded-xl text-xs font-semibold hover:bg-teal-200 transition-all">
                        📅 Mon 2:00 PM
                      </button>
                      <button className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-xl text-xs font-semibold hover:bg-cyan-200 transition-all">
                        📅 Wed 10:30 AM
                      </button>
                      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-xs font-semibold hover:bg-blue-200 transition-all">
                        📅 Fri 3:00 PM
                      </button>
                    </div>

                    {/* Input area */}
                    <div className="pt-4">
                      <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-gray-200 p-3 shadow-sm">
                        <input 
                          type="text" 
                          placeholder="Type your health concern..."
                          className="flex-1 outline-none text-sm text-gray-700"
                          disabled
                        />
                        <button className="p-2 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-gray-200 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <HeartPulse className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900">98%</div>
                      <div className="text-xs text-gray-500 font-semibold">Accuracy Rate</div>
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
              <div className="inline-flex items-center gap-2 bg-teal-50 border-2 border-teal-200 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-bold text-teal-700">Advanced Features</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Complete Healthcare Solution
              </h2>
              <p className="text-xl text-gray-600">
                Everything your practice needs to deliver exceptional patient care
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Smart Appointment Scheduling",
                  desc: "Patients can book, reschedule, or cancel appointments 24/7. Automatic reminders reduce no-shows by 60%.",
                  gradient: "from-teal-500 to-cyan-500"
                },
                {
                  icon: <Thermometer className="w-8 h-8" />,
                  title: "AI Symptom Checker",
                  desc: "Help patients understand their symptoms and determine urgency before visiting the doctor.",
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <Pill className="w-8 h-8" />,
                  title: "Prescription Management",
                  desc: "Automate prescription refill requests, track medication history, and send dosage reminders.",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Medical Records Access",
                  desc: "Secure patient portal for viewing test results, medical history, and doctor's notes instantly.",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "HIPAA Compliance",
                  desc: "Enterprise-grade security with end-to-end encryption protecting sensitive patient data.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Healthcare Analytics",
                  desc: "Track patient engagement, appointment rates, and identify common health concerns in real-time.",
                  gradient: "from-pink-500 to-red-500"
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-xl text-gray-600">
                From setup to patient care in minutes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/4 left-[20%] right-[20%] h-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 z-0"></div>

              {[
                { 
                  icon: <UserCheck className="w-10 h-10" />, 
                  title: "Setup Practice Profile", 
                  desc: "Add your doctors, services, operating hours, and medical specialties in just a few clicks.",
                  color: "from-teal-600 to-cyan-600"
                },
                { 
                  icon: <ClipboardCheck className="w-10 h-10" />, 
                  title: "Configure Health Protocols", 
                  desc: "Set up symptom checking rules, appointment types, and automated patient intake forms.",
                  color: "from-cyan-600 to-blue-600"
                },
                { 
                  icon: <Zap className="w-10 h-10" />, 
                  title: "Start Helping Patients", 
                  desc: "Go live instantly. AI handles appointments, questions, and triage 24/7 while you focus on care.",
                  color: "from-blue-600 to-indigo-600"
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
                Perfect for Every Healthcare Setting
              </h2>
              <p className="text-xl text-gray-600">
                From clinics to hospitals, AI adapts to your practice
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Primary Care Clinics",
                  desc: "Handle appointment scheduling, patient triage, prescription refills, and answer common health questions automatically.",
                  icon: <Stethoscope className="w-8 h-8" />,
                  metrics: ["70% fewer phone calls", "Automated scheduling", "Patient reminders"],
                  gradient: "from-teal-600 to-cyan-600"
                },
                {
                  title: "Dental Practices",
                  desc: "Book cleanings, send appointment reminders, answer insurance questions, and collect patient forms before visits.",
                  icon: <Heart className="w-8 h-8" />,
                  metrics: ["60% less no-shows", "Digital intake forms", "Insurance verification"],
                  gradient: "from-cyan-600 to-blue-600"
                },
                {
                  title: "Specialty Hospitals",
                  desc: "Route patients to the right department, provide pre-procedure instructions, and track post-op recovery.",
                  icon: <Ambulance className="w-8 h-8" />,
                  metrics: ["Smart department routing", "Pre/post-op care", "24/7 nurse line support"],
                  gradient: "from-blue-600 to-indigo-600"
                },
                {
                  title: "Telehealth Services",
                  desc: "Screen patients before virtual visits, collect symptoms, and ensure smooth online consultation experiences.",
                  icon: <Video className="w-8 h-8" />,
                  metrics: ["Pre-visit screening", "Symptom collection", "Virtual waiting room"],
                  gradient: "from-indigo-600 to-purple-600"
                }
              ].map((useCase, i) => (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, j) => (
                      <span key={j} className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs font-semibold text-teal-700">
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
                Why Healthcare Providers Choose Us
              </h2>
              <p className="text-xl text-gray-600">
                Proven results for better patient outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "For Patients",
                  benefits: [
                    "24/7 instant responses",
                    "Easy appointment booking",
                    "Symptom checking guidance",
                    "Prescription refill requests",
                    "Secure medical records access"
                  ],
                  icon: <Users className="w-6 h-6" />,
                  gradient: "from-teal-600 to-cyan-600"
                },
                {
                  title: "For Healthcare Staff",
                  benefits: [
                    "70% reduction in phone calls",
                    "Automated appointment management",
                    "Pre-visit patient screening",
                    "Streamlined workflows",
                    "Focus on patient care"
                  ],
                  icon: <Award className="w-6 h-6" />,
                  gradient: "from-cyan-600 to-blue-600"
                },
                {
                  title: "For Practice Management",
                  benefits: [
                    "60% fewer no-shows",
                    "Increased patient satisfaction",
                    "HIPAA-compliant operations",
                    "Detailed analytics dashboard",
                    "Lower operational costs"
                  ],
                  icon: <Target className="w-6 h-6" />,
                  gradient: "from-blue-600 to-indigo-600"
                }
              ].map((group, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br ${group.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg text-white`}>
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-6">{group.title}</h3>
                  <div className="space-y-3">
                    {group.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                Trusted by Healthcare Leaders
              </h2>
              <p className="text-xl text-gray-600">
                See how practices transformed patient care with AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  practice: "Family Health Clinic",
                  result: "70% reduction in phone calls",
                  quote: "Our staff can finally focus on patient care instead of answering the same questions all day. Game changer!",
                  author: "Dr. Jennifer Adams",
                  role: "Medical Director",
                  avatar: "10"
                },
                {
                  practice: "Metro Dental Group",
                  result: "60% decrease in no-shows",
                  quote: "Automated reminders and easy rescheduling cut our no-show rate in half. Revenue is up significantly.",
                  author: "Dr. Robert Chen",
                  role: "Practice Owner",
                  avatar: "11"
                },
                {
                  practice: "CityWide Hospital",
                  result: "95% patient satisfaction score",
                  quote: "Patients love the 24/7 access to information. Our patient satisfaction scores have never been higher.",
                  author: "Lisa Martinez",
                  role: "Patient Experience Director",
                  avatar: "12"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-teal-600 font-black text-xl mb-4">{testimonial.result}</div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${testimonial.avatar}`}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.practice}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
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
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Healthcare Excellence in Numbers</h2>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                Real impact on patient care and practice efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "98%", label: "Patient Satisfaction", icon: <Heart className="w-6 h-6" /> },
                { value: "70%", label: "Staff Time Saved", icon: <Clock className="w-6 h-6" /> },
                { value: "60%", label: "Fewer No-Shows", icon: <Calendar className="w-6 h-6" /> },
                { value: "24/7", label: "Always Available", icon: <Shield className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-center mb-4 text-teal-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-teal-100 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-teal-200 rounded-full px-5 py-2">
                <Bell className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-bold text-gray-700">HIPAA-Compliant Solution</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900">
                Ready to Transform <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Patient Care?</span>
              </h2>
              <p className="text-2xl text-gray-600 font-semibold">
                Join 500+ healthcare providers improving patient experience with AI
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/create-chatbot"
                className="group px-12 py-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl font-black text-2xl hover:shadow-2xl hover:shadow-teal-500/50 hover:-translate-y-2 transition-all flex items-center gap-4"
              >
                Start Free Trial
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href="/appointment"
                className="px-12 py-6 bg-white border-2 border-teal-600 text-teal-600 rounded-2xl font-black text-2xl hover:bg-teal-50 transition-all flex items-center gap-4"
              >
                Schedule Demo
                <ChevronRight className="w-8 h-8" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span className="font-semibold">HIPAA compliant</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span className="font-semibold">No credit card required</span>
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