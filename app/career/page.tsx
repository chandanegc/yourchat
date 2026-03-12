'use client';

import React, { useState } from 'react';
import { 
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Rocket,
  Heart,
  Zap,
  TrendingUp,
  Award,
  Coffee,
  Globe,
  Code,
  Palette,
  BarChart3,
  Headphones,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  Shield,
  Calendar,
  Send,
  Building2,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = [
    'All',
    'Engineering',
    'Design',
    'Marketing',
    'Sales',
    'Customer Success',
    'Operations'
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote (India)',
      type: 'Full-time',
      salary: '₹15-25 LPA',
      icon: <Code className="w-5 h-5" />,
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      salary: '₹12-20 LPA',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Growth Marketing Manager',
      department: 'Marketing',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      salary: '₹10-18 LPA',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-orange-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Delhi NCR',
      type: 'Full-time',
      salary: '₹6-12 LPA',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Customer Success Specialist',
      department: 'Customer Success',
      location: 'Remote (India)',
      type: 'Full-time',
      salary: '₹8-14 LPA',
      icon: <Headphones className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 6,
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Bangalore / Remote',
      type: 'Full-time',
      salary: '₹18-30 LPA',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 7,
      title: 'Content Marketing Writer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '₹5-10 LPA',
      icon: <Lightbulb className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Pune',
      type: 'Full-time',
      salary: '₹12-22 LPA',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Remote First',
      description: 'Work from anywhere in India or our offices',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you & family',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Fast Growth',
      description: 'Rapid career advancement opportunities',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning Budget',
      description: '₹50,000/year for courses & conferences',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Flexible Hours',
      description: 'Choose your own working hours',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'ESOPs',
      description: 'Employee stock ownership program',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Customer First',
      description: 'We obsess over customer success and build products they love.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Move Fast',
      description: 'Speed and iteration are in our DNA. We ship fast and learn faster.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Spirit',
      description: 'We win together, celebrate together, and support each other.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We encourage bold ideas and creative problem-solving.',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const stats = [
    { value: '50+', label: 'Team Members' },
    { value: '12+', label: 'Countries' },
    { value: '1.2K+', label: 'Customers' },
    { value: '4.8/5', label: 'Glassdoor Rating' }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 opacity-50"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(147 51 234 / 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                <Briefcase className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700 font-semibold">We're Hiring!</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build the Future of
                <span className="block mt-2 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  AI-Powered Customer Service
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join our mission to help businesses provide exceptional customer experiences through AI. We're a fast-growing startup backed by top investors.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700 font-semibold">Our Values</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Believe In
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our values guide everything we do, from building products to working together
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                <Heart className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 font-semibold">Benefits & Perks</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Join YourSiteChat?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We take care of our team so they can take care of our customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-700 font-semibold">Open Positions</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Find Your Role
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We're looking for talented individuals to join our growing team
              </p>

              {/* Department Filter */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedDepartment === dept
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div 
                    key={job.id}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-green-600">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="group/btn flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No positions found in this department.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-semibold">Don't See Your Role?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We're Always Looking for Exceptional Talent
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Send us your resume and tell us why you'd be a great fit for YourSiteChat
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:careers@yoursitechat.com"
                className="group px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Email Your Resume
              </a>
              <a 
                href="#positions"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                View All Positions
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 text-sm mb-4">Follow our journey</p>
              <div className="flex items-center justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}