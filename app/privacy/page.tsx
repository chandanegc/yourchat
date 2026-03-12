'use client';

import React from 'react';
import { 
  Shield,
  FileText,
  Scale,
  Cookie,
  CheckCircle,
  ArrowRight,
  Download,
  Calendar,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 12, 2026";

  const quickLinks = [
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your data",
      icon: <Shield className="w-6 h-6" />,
      link: "#privacy-policy"
    },
    {
      title: "Terms of Service",
      description: "Rules and guidelines for using our platform",
      icon: <FileText className="w-6 h-6" />,
      link: "/terms"
    },
    {
      title: "Cookie Policy",
      description: "Information about cookies and tracking",
      icon: <Cookie className="w-6 h-6" />,
      link: "/cookie-policy"
    },
    {
      title: "Acceptable Use",
      description: "Guidelines for appropriate platform usage",
      icon: <Scale className="w-6 h-6" />,
      link: "/acceptable-use"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white ">
        {/* Simple Header */}
        <section className="py-16 px-4 sm:px-6 bg-[#D0DFFF] lg:px-8 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Quick Links Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Legal Documents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group p-6 bg-white border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all rounded-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 group-hover:bg-purple-100 flex items-center justify-center text-gray-600 group-hover:text-purple-600 mb-4 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="privacy-policy" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 leading-relaxed text-lg">
                At YourSiteChat, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our AI-powered chatbot platform and services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    1.1 Information You Provide
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information that you provide directly to us when you:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Create an account (name, email address, phone number, company name, and password)</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Configure your chatbot (website URL, business description, industry, and service details)</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Make a purchase (billing address and payment method details processed securely by our payment partners)</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Communicate with us (support tickets, feedback, and messages sent through our platform)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    1.2 Information Collected Automatically
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you access or use our services, we automatically collect certain information:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Usage Information:</strong> Pages visited, features used, time spent on the platform, and interaction patterns</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Device Information:</strong> IP address, browser type, device type, operating system, and unique device identifiers</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Chat Data:</strong> Conversations handled by your chatbot, customer queries, response metrics, and performance analytics</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. How We Use Your Information
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We use the information we collect for the following purposes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Service Delivery</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Provide and maintain chatbot services</li>
                    <li>• Process transactions and send notifications</li>
                    <li>• Respond to inquiries and provide support</li>
                    <li>• Train and improve AI models</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Personalization</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Customize chatbot responses</li>
                    <li>• Recommend features and integrations</li>
                    <li>• Analyze usage patterns</li>
                    <li>• Improve user experience</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Communication</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Send service updates and announcements</li>
                    <li>• Provide customer support</li>
                    <li>• Send marketing communications (with consent)</li>
                    <li>• Notify about account activity</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Security & Compliance</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Prevent fraud and abuse</li>
                    <li>• Ensure platform security</li>
                    <li>• Comply with legal obligations</li>
                    <li>• Enforce terms of service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Data Sharing and Disclosure
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>We do not sell your personal information.</strong> We may share your data only in the following circumstances:
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-2">Service Providers</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We work with third-party service providers for hosting, analytics, payment processing, and customer support. These partners access data only as needed to perform their services and are bound by confidentiality agreements.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 mb-2">Business Transfers</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your data is transferred and becomes subject to a different privacy policy.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-gray-900 mb-2">Legal Requirements</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We may disclose information if required by law, court order, or government request, or to protect our rights, property, or safety, or that of our users or the public.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-900 mb-2">With Your Consent</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We may share your information with third parties when you give us explicit consent to do so.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Cookies and Tracking Technologies
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage, and serve personalized content and ads.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Types of Cookies We Use:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Essential Cookies</p>
                    <p className="text-sm text-gray-700">Required for basic functionality like authentication and security. Cannot be disabled.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Analytics Cookies</p>
                    <p className="text-sm text-gray-700">Help us understand usage patterns and improve our services. Can be disabled in settings.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marketing Cookies</p>
                    <p className="text-sm text-gray-700">Used for targeted advertising and personalization. Can be disabled in settings.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect functionality.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Data Security
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement industry-standard security measures to protect your information:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-gray-900">Encryption</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    All data encrypted in transit (TLS 1.3) and at rest (AES-256)
                  </p>
                </div>

                <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Access Controls</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Role-based access and multi-factor authentication
                  </p>
                </div>

                <div className="p-5 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-900">Infrastructure</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    SOC 2 Type II certified cloud infrastructure
                  </p>
                </div>

                <div className="p-5 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-gray-900">Monitoring</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    24/7 security monitoring and incident response
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Your Rights and Choices
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                You have the following rights regarding your personal information:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-purple-500 transition-all">
                  <Eye className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Access Your Data</h4>
                    <p className="text-sm text-gray-700">Request a copy of all personal information we hold about you</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-purple-500 transition-all">
                  <FileText className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Correct Your Data</h4>
                    <p className="text-sm text-gray-700">Update or correct inaccurate information in your account settings</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-purple-500 transition-all">
                  <Shield className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Delete Your Data</h4>
                    <p className="text-sm text-gray-700">Request deletion of your personal information (subject to legal requirements)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-purple-500 transition-all">
                  <Download className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Data Portability</h4>
                    <p className="text-sm text-gray-700">Export your data in a structured, machine-readable format</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:privacy@yoursitechat.com" className="text-purple-600 hover:underline font-semibold">
                    privacy@yoursitechat.com
                  </a>
                  . We will respond within 30 days.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Contact Us
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about this Privacy Policy, please contact us:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:privacy@yoursitechat.com" className="text-purple-600 hover:underline">
                      privacy@yoursitechat.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Mailing Address</p>
                    <p className="text-sm text-gray-700">
                      YourSiteChat Private Limited<br />
                      123 Tech Park, Cyber City<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Data Protection Officer</p>
                    <a href="mailto:dpo@yoursitechat.com" className="text-purple-600 hover:underline">
                      dpo@yoursitechat.com
                    </a>
                  </div>
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