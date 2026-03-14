'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  GraduationCap, BookOpen, Clock, Zap, Users, 
  ArrowRight, CheckCircle, Star, BarChart3, Brain,
  Calendar, Target, Award, Sparkles, MessageCircle,
  ChevronRight, Library, UserCheck, Globe2,
  ClipboardCheck, Video, FileText, Lightbulb, Bell
} from 'lucide-react';

export default function EducationPage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(168 85 247 / 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
          
          {/* Animated blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
<div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-purple-200 rounded-full shadow-sm">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-bold text-gray-700">Education AI Assistant</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Empower Students
                  <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    With AI Learning
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  AI-powered educational chatbot that provides instant answers, personalized learning paths, and 24/7 academic support for students, teachers, and institutions.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  {[
                    { value: "95%", label: "Student Engagement" },
                    { value: "24/7", label: "Learning Support" },
                    { value: "50+", label: "Languages" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-purple-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="/create-chatbot"
                    className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-3"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/appointment"
                    className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all flex items-center gap-3"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              
              {/* Right - Educational Chat Demo */}
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-white">
                        <div className="font-bold">EduBot Assistant</div>
                        <div className="text-xs opacity-90 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          Ready to teach
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 bg-gray-50 min-h-[400px]">
                    {/* Bot message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">👋 Hi there! I'm your AI learning assistant. What would you like to study today?</p>
                      </div>
                    </div>

                    {/* Quick topic buttons */}
                    <div className="flex flex-col gap-2 pl-11">
                      {[
                        "📐 Math & Algebra",
                        "🧪 Science & Chemistry",
                        "📚 Literature & Writing",
                        "💻 Programming Basics"
                      ].map((option, i) => (
                        <button 
                          key={i}
                          className="text-left px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm">Can you help me understand quadratic equations?</p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-700">📊 Absolutely! Let's start with the basics. A quadratic equation is written as: ax² + bx + c = 0. Would you like a visual explanation?</p>
                      </div>
                    </div>

                    {/* Quick action buttons */}
                    <div className="flex gap-2 pl-11">
                      <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-xs font-semibold hover:bg-purple-200 transition-all">
                        📹 Watch Video
                      </button>
                      <button className="px-4 py-2 bg-pink-100 text-pink-700 rounded-xl text-xs font-semibold hover:bg-pink-200 transition-all">
                        📝 Practice Quiz
                      </button>
                    </div>

                    {/* Input area */}
                    <div className="pt-4">
                      <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-gray-200 p-3 shadow-sm">
                        <input 
                          type="text" 
                          placeholder="Ask me anything..."
                          className="flex-1 outline-none text-sm text-gray-700"
                          disabled
                        />
                        <button className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-gray-200 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900">95%</div>
                      <div className="text-xs text-gray-500 font-semibold">Pass Rate</div>
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
              <div className="inline-flex items-center gap-2 bg-purple-50 border-2 border-purple-200 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-purple-700">Smart Features</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Complete Learning Ecosystem
              </h2>
              <p className="text-xl text-gray-600">
                Everything students and educators need in one AI platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Personalized Learning",
                  desc: "AI adapts to each student's pace, learning style, and knowledge gaps for customized education paths.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: <ClipboardCheck className="w-8 h-8" />,
                  title: "Instant Homework Help",
                  desc: "Get step-by-step explanations for homework problems across all subjects, available 24/7.",
                  gradient: "from-pink-500 to-orange-500"
                },
                {
                  icon: <Video className="w-8 h-8" />,
                  title: "Interactive Lessons",
                  desc: "Engage with video tutorials, visual explanations, and interactive quizzes for better retention.",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Study Material Library",
                  desc: "Access comprehensive notes, practice tests, and reference materials for every subject.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Progress Tracking",
                  desc: "Monitor student performance, identify weak areas, and celebrate achievements with detailed analytics.",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  icon: <Globe2 className="w-8 h-8" />,
                  title: "Multilingual Support",
                  desc: "Learn in 50+ languages with automatic translation and localized content for global accessibility.",
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                Start Learning in 3 Simple Steps
              </h2>
              <p className="text-xl text-gray-600">
                From setup to success in minutes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/4 left-[20%] right-[20%] h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 z-0"></div>

              {[
                { 
                  icon: <UserCheck className="w-10 h-10" />, 
                  title: "Create Account", 
                  desc: "Sign up students, teachers, or institutions. Set up courses, subjects, and learning goals in minutes.",
                  color: "from-purple-600 to-pink-600"
                },
                { 
                  icon: <Lightbulb className="w-10 h-10" />, 
                  title: "Upload Content", 
                  desc: "Add your curriculum, textbooks, and study materials. AI learns your teaching style instantly.",
                  color: "from-pink-600 to-orange-600"
                },
                { 
                  icon: <Zap className="w-10 h-10" />, 
                  title: "Start Teaching", 
                  desc: "Students get instant help, teachers save time, and everyone learns better with AI assistance.",
                  color: "from-orange-600 to-red-600"
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
                Perfect for Every Education Level
              </h2>
              <p className="text-xl text-gray-600">
                From K-12 to higher education and beyond
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "K-12 Schools",
                  desc: "Engage young learners with interactive lessons, homework help, and gamified learning experiences that make education fun.",
                  icon: <BookOpen className="w-8 h-8" />,
                  metrics: ["95% student engagement", "Interactive quizzes", "Parent progress reports"],
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  title: "Universities & Colleges",
                  desc: "Support higher education with advanced subject tutoring, research assistance, and 24/7 academic support.",
                  icon: <GraduationCap className="w-8 h-8" />,
                  metrics: ["Advanced topics", "Research help", "Exam preparation"],
                  gradient: "from-pink-600 to-orange-600"
                },
                {
                  title: "Online Learning Platforms",
                  desc: "Enhance e-learning with AI tutors, instant Q&A, and personalized course recommendations for students.",
                  icon: <Globe2 className="w-8 h-8" />,
                  metrics: ["Course recommendations", "24/7 support", "Multi-language"],
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Corporate Training",
                  desc: "Onboard employees faster with AI-powered training, compliance courses, and skill development programs.",
                  icon: <Target className="w-8 h-8" />,
                  metrics: ["Employee onboarding", "Compliance training", "Skill assessments"],
                  gradient: "from-green-600 to-teal-600"
                }
              ].map((useCase, i) => (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, j) => (
                      <span key={j} className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-xs font-semibold text-purple-700">
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
                Why Educators Choose Our AI
              </h2>
              <p className="text-xl text-gray-600">
                Transform teaching and learning outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "For Students",
                  benefits: [
                    "24/7 homework help",
                    "Personalized learning pace",
                    "Interactive practice quizzes",
                    "Instant doubt clearing",
                    "Multi-language support"
                  ],
                  icon: <Users className="w-6 h-6" />,
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  title: "For Teachers",
                  benefits: [
                    "Reduce grading time by 70%",
                    "Auto-generate lesson plans",
                    "Track student progress",
                    "Identify struggling students",
                    "Focus on teaching, not admin"
                  ],
                  icon: <Award className="w-6 h-6" />,
                  gradient: "from-pink-600 to-orange-600"
                },
                {
                  title: "For Institutions",
                  benefits: [
                    "Scale without hiring tutors",
                    "Improve pass rates by 40%",
                    "24/7 student support",
                    "Detailed analytics dashboard",
                    "ROI in first semester"
                  ],
                  icon: <Library className="w-6 h-6" />,
                  gradient: "from-orange-600 to-red-600"
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
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
                Trusted by Top Institutions
              </h2>
              <p className="text-xl text-gray-600">
                See how schools are transforming education with AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  institution: "Bright Future Academy",
                  result: "40% improvement in test scores",
                  quote: "Our students are more engaged and learning faster. The AI tutor is like having a teaching assistant for every student.",
                  author: "Dr. Amanda Foster",
                  role: "Principal",
                  avatar: "7"
                },
                {
                  institution: "State University",
                  result: "95% student satisfaction rate",
                  quote: "Students love the 24/7 support. We've seen dramatic improvements in course completion rates and grades.",
                  author: "Prof. Michael Chen",
                  role: "Dean of Education",
                  avatar: "8"
                },
                {
                  institution: "Global EdTech Platform",
                  result: "3x course engagement",
                  quote: "The AI chatbot answered 80% of student queries instantly. Our support team can now focus on complex issues.",
                  author: "Sarah Williams",
                  role: "Head of Product",
                  avatar: "9"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-purple-600 font-black text-xl mb-4">{testimonial.result}</div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${testimonial.avatar}`}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.institution}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
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
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Education Excellence in Numbers</h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Real impact on learning outcomes worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "95%", label: "Student Engagement", icon: <Users className="w-6 h-6" /> },
                { value: "40%", label: "Better Test Scores", icon: <Award className="w-6 h-6" /> },
                { value: "24/7", label: "Learning Support", icon: <Clock className="w-6 h-6" /> },
                { value: "50+", label: "Languages", icon: <Globe2 className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-center mb-4 text-purple-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-purple-100 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-purple-200 rounded-full px-5 py-2">
                <Bell className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-gray-700">Start Teaching Smarter Today</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900">
                Ready to <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">Transform</span> Education?
              </h2>
              <p className="text-2xl text-gray-600 font-semibold">
                Join 1,200+ institutions already revolutionizing learning
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/create-chatbot"
                className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-black text-2xl hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-2 transition-all flex items-center gap-4"
              >
                Start Free Trial
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href="/appointment"
                className="px-12 py-6 bg-white border-2 border-purple-600 text-purple-600 rounded-2xl font-black text-2xl hover:bg-purple-50 transition-all flex items-center gap-4"
              >
                Schedule Demo
                <ChevronRight className="w-8 h-8" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">No credit card required</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
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