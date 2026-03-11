'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from "next/link";
import { 
  Shield,
  Lock,
  Key,
  Server,
  Globe,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  CloudUpload,
  Fingerprint,
  EyeOff,
  Bell,
  Clock,
  Smartphone,
  Award,
  AlertTriangle,
  Database,
  RefreshCw,
  ShieldCheck,
  Layers,
  Target,
  Zap,
  TrendingUp,
  Settings,
  Download,
  CheckCheck,
  ShieldAlert
} from 'lucide-react';

export default function SecurityPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const trustBadges = [
    { name: "GDPR Compliant", icon: "🇪🇺", color: "blue" },
    { name: "ISO 27001", icon: "✅", color: "green" },
    { name: "SOC 2 Type II", icon: "🔒", color: "purple" },
    { name: "HIPAA Ready", icon: "🏥", color: "red" },
    { name: "PCI DSS", icon: "💳", color: "indigo" },
    { name: "CCPA Compliant", icon: "📋", color: "orange" },
    { name: "EU-US Privacy Shield", icon: "🌍", color: "blue" },
    { name: "Cyber Essentials", icon: "🛡️", color: "green" }
  ];

  const mainFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted both in transit and at rest using AES-256 bit encryption — the same standard used by banks and governments.",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "TLS 1.3 for data in transit",
        "AES-256 encryption at rest",
        "Hardware Security Module (HSM) support",
        "Perfect Forward Secrecy"
      ]
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Strict Access Control",
      description: "Role-based access control (RBAC) ensures only authorized personnel can access your sensitive data.",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Multi-factor authentication (MFA)",
        "Single Sign-On (SSO) integration",
        "Granular permission levels",
        "Session management & timeout controls"
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Secure Infrastructure",
      description: "Hosted on world-class cloud providers with redundant security layers and continuous monitoring.",
      gradient: "from-green-500 to-green-600",
      features: [
        "AWS & Google Cloud infrastructure",
        "Regular penetration testing",
        "DDoS protection & WAF",
        "24/7 security monitoring"
      ]
    },
    {
      icon: <EyeOff className="w-8 h-8" />,
      title: "Data Privacy & Sovereignty",
      description: "You control where your data lives. Choose data residency regions and maintain complete ownership.",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Data residency choices (US, EU, Asia)",
        "Automatic data anonymization",
        "Data deletion on request",
        "No third-party data sharing"
      ]
    }
  ];

  const complianceCerts = [
    {
      title: "GDPR Compliant",
      description: "Full compliance with European Union data protection regulations. Your EU customers' data is handled with care.",
      icon: "🇪🇺",
      gradient: "from-blue-500 to-blue-600",
      features: ["Right to access", "Right to erasure", "Data portability"]
    },
    {
      title: "SOC 2 Type II",
      description: "Audited for security, availability, and confidentiality. Our controls meet rigorous AICPA standards.",
      icon: "🔐",
      gradient: "from-purple-500 to-purple-600",
      features: ["Annual audits", "Security controls", "Availability guarantees"]
    },
    {
      title: "HIPAA Readiness",
      description: "Prepared for healthcare data with BAA support and required safeguards for protected health information.",
      icon: "🏥",
      gradient: "from-red-500 to-pink-600",
      features: ["BAA available", "Audit logs", "Access controls"]
    },
    {
      title: "ISO 27001",
      description: "Certified information security management system ensuring best practices globally.",
      icon: "📋",
      gradient: "from-green-500 to-emerald-600",
      features: ["Risk management", "Continuous improvement", "Security controls"]
    },
    {
      title: "PCI DSS Compliant",
      description: "Secure payment data handling for businesses processing card transactions.",
      icon: "💳",
      gradient: "from-indigo-500 to-blue-600",
      features: ["Encrypted payments", "Tokenization", "Secure storage"]
    },
    {
      title: "CCPA Ready",
      description: "Compliant with California Consumer Privacy Act for US customers.",
      icon: "📱",
      gradient: "from-orange-500 to-amber-600",
      features: ["Privacy rights", "Opt-out options", "Data disclosure"]
    }
  ];

  const advancedFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Automated Backups",
      description: "Daily encrypted backups with 30-day retention",
      color: "blue"
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Auth",
      description: "Support for fingerprint and face ID login",
      color: "purple"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-time Alerts",
      description: "Instant notifications for suspicious activities",
      color: "orange"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global CDN",
      description: "Secure content delivery with DDoS protection",
      color: "green"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Audit Logs",
      description: "Complete trail of all access and changes",
      color: "indigo"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Management",
      description: "Secure user provisioning and deprovisioning",
      color: "pink"
    },
    {
      icon: <CloudUpload className="w-6 h-6" />,
      title: "Secure API",
      description: "Authenticated and rate-limited API access",
      color: "teal"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Security",
      description: "Secure mobile SDK with local encryption",
      color: "cyan"
    }
  ];

  const securityStats = [
    { number: "24/7", label: "Security Monitoring", desc: "Round-the-clock threat detection", icon: <Shield className="w-8 h-8" /> },
    { number: "99.99%", label: "Uptime SLA", desc: "Guaranteed availability", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "90+", label: "Security Audits", desc: "Annual penetration tests", icon: <ShieldCheck className="w-8 h-8" /> },
    { number: "<10ms", label: "Encryption Overhead", desc: "Minimal performance impact", icon: <Zap className="w-8 h-8" /> }
  ];

  const faqs = [
    {
      q: "Where is my data stored?",
      a: "You can choose your data residency region during setup. We offer data centers in US, EU, and Asia-Pacific regions. All data stays within your chosen geography.",
      icon: <Database className="w-5 h-5" />
    },
    {
      q: "Do you offer SSO and MFA?",
      a: "Yes, we support SAML-based Single Sign-On (SSO) for enterprise customers and require Multi-Factor Authentication (MFA) for all administrative accounts by default.",
      icon: <Key className="w-5 h-5" />
    },
    {
      q: "How often do you run security audits?",
      a: "We conduct third-party penetration testing quarterly and internal security audits continuously. Our full SOC 2 audit is performed annually.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      q: "What happens if there's a data breach?",
      a: "We have a comprehensive incident response plan. You'll be notified within 24 hours of confirmed breach, and we'll provide full details of impact and remediation steps.",
      icon: <ShieldAlert className="w-5 h-5" />
    },
    {
      q: "Can I get a BAA for HIPAA compliance?",
      a: "Yes, we offer Business Associate Agreements (BAA) for customers handling protected health information. Contact our sales team to enable HIPAA mode.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      q: "Is my chatbot conversation data encrypted?",
      a: "Absolutely. All conversations are encrypted end-to-end and stored using AES-256 encryption. Only authorized team members with proper permissions can access them.",
      icon: <Lock className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246 / 0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>

        {/* Floating shields */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-blue-100/50">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700 font-semibold">Enterprise-Grade Security</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Data Security Is Our
            <span className="block mt-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Top Priority
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We protect your business and customer data with bank-level encryption, strict compliance, and 24/7 monitoring.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all inline-flex items-center gap-2"
            >
              Contact Security Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/compliance" 
              className="group bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Award className="w-5 h-5" />
              View Compliance Certificates
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-8 font-medium">Trusted and compliant with global standards</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {trustBadges.map((badge, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center">
                <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{badge.icon}</span>
                <span className="text-xs font-semibold text-gray-700 block leading-tight">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Security Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Security Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every layer of YourSiteChat is built with security in mind — from infrastructure to application.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className=" px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We meet the highest standards of security and privacy compliance globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCerts.map((cert, i) => (
              <div 
                key={i} 
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{cert.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                <div className="space-y-2">
                  {cert.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.gradient}`}></div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Security Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600">Built-in protection at every level</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-100 text-${feature.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Security Practices
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How we maintain and continuously improve our security posture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityStats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.desc}</div>
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
              Security FAQs
            </h2>
            <p className="text-xl text-gray-600">Common security questions answered</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-blue-200 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.q}</h3>
                      {expandedFaq === i && (
                        <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
                      )}
                    </div>
                  </div>
                  <ArrowRight 
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                      expandedFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Whitepaper CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 border-2 border-blue-200 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-lg">
              <FileText className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Download Our Security Whitepaper
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get detailed information about our security architecture, encryption methods, compliance certifications, and data protection practices.
            </p>
            <Link 
              href="/security/whitepaper.pdf" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Security Whitepaper
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-semibold">Enterprise Security Ready</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join thousands of trusted businesses that rely on YourSiteChat for secure, compliant AI automation.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link 
              href="/start" 
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
            >
              Talk to Security Expert
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Enterprise plans include dedicated security onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">14-day free trial</span>
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