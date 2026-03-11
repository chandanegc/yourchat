'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/app/service/whatsapp/AboutHero';
import FeatureSection from '@/components/FeatureSection';
import AboutFeatures from '@/components/AboutFeatures';
import ImageGallery from '@/components/ImageGallery';
import HalfDashboard from '@/components/HalfDashboard';

export default function WhatsAppPage() {
  const sections = [
    {
      title: "Official WhatsApp Business API",
      description: "Get verified access to WhatsApp Business API with the coveted green tick verification badge. Connect directly to WhatsApp's official platform for reliable, enterprise-grade messaging with guaranteed high delivery rates. Our integration ensures your business complies with all WhatsApp policies while maintaining the highest standards of security, performance, and customer trust.",
      points: [
        "Verified green tick badge for brand authenticity and trust",
        "99.9% message delivery rate with guaranteed uptime SLA",
        "Full compliance with WhatsApp Business policies and guidelines"
      ],
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      reverse: false
    },
    {
      title: "Instant AI-Powered Responses",
      description: "Never leave a customer waiting again. Our advanced AI chatbot responds to every WhatsApp message in under 1 second, 24/7, 365 days a year. Handle unlimited simultaneous conversations with natural, human-like responses. The AI understands context, remembers conversation history, and provides accurate answers based on your business knowledge base, FAQs, and product information.",
      points: [
        "Lightning-fast AI responses in under 1 second, day or night",
        "Handle unlimited conversations simultaneously without delays",
        "Natural language understanding in 100+ languages with context awareness"
      ],
      imageSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      reverse: true
    },
    {
      title: "Smart Lead Capture & Qualification",
      description: "Transform WhatsApp conversations into a powerful lead generation machine. Our intelligent chatbot automatically collects customer contact information through natural conversation flow. It qualifies leads based on your custom criteria, scores prospects, and syncs all data in real-time to your CRM. Never manually enter lead information again — everything happens automatically while maintaining a friendly, non-intrusive chat experience.",
      points: [
        "Automatic collection of names, emails, phone numbers, and preferences",
        "AI-powered lead qualification and scoring based on conversation analysis",
        "Real-time CRM integration with Salesforce, HubSpot, Zoho, and 50+ platforms"
      ],
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      reverse: false
    },
    {
      title: "Seamless Appointment Booking",
      description: "Let customers book appointments, consultations, or services directly within WhatsApp — no external links or apps needed. Our smart booking system checks your calendar availability in real-time, presents available time slots, handles rescheduling and cancellations, sends automatic confirmations, and delivers smart reminders before appointments. Integrates seamlessly with Google Calendar, Outlook, Calendly, and custom scheduling systems.",
      points: [
        "Real-time calendar sync with instant availability checking",
        "Automated confirmations, reminders, and rescheduling options",
        "Two-way integration with Google Calendar, Outlook, and Calendly"
      ],
      imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
      reverse: true
    },
    {
      title: "Powerful Broadcast & Campaigns",
      description: "Send targeted marketing messages, promotions, product launches, and important updates to thousands of customers at once with WhatsApp broadcasts. Create personalized campaigns with dynamic fields, segment audiences based on behavior and preferences, and include rich media like images, videos, PDFs, and interactive buttons. Track every aspect of your campaigns with detailed analytics on delivery rates, read receipts, click-through rates, and customer responses.",
      points: [
        "Send bulk messages to unlimited opted-in contacts with personalization",
        "Rich media support: high-quality images, videos, documents, and call-to-action buttons",
        "Comprehensive analytics tracking delivery, reads, clicks, and conversion rates"
      ],
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      reverse: false
    },
    {
      title: "No-Code Workflow Automation",
      description: "Build sophisticated automated conversation flows without writing a single line of code. Our visual workflow builder lets you create custom automations triggered by keywords, customer actions, time delays, or business events. Design flows for order tracking, payment collection, support ticket creation, feedback surveys, product recommendations, and more. Every workflow feels natural to customers while saving your team countless hours.",
      points: [
        "Keyword and action-triggered automatic message sequences and flows",
        "Intuitive drag-and-drop workflow builder requiring zero coding skills",
        "Pre-built templates for orders, payments, support, surveys, and more"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      reverse: true
    },
    {
      title: "Rich Media & Interactive Elements",
      description: "Go far beyond plain text messages with WhatsApp's powerful rich media capabilities. Send high-resolution images, engaging videos, important PDFs, location pins, and contact cards. Create interactive experiences with quick reply buttons, list pickers, and call-to-action buttons. Showcase your products with beautiful catalog messages that display images, descriptions, and pricing. Make every conversation engaging, visual, and action-oriented.",
      points: [
        "Share images, videos, PDFs, audio, locations, and contact cards",
        "Interactive buttons, quick replies, list messages, and menu options",
        "Product catalogs with images, descriptions, pricing, and direct ordering"
      ],
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      reverse: false
    },
    {
      title: "Intelligent Human Handoff",
      description: "Provide the perfect balance of automation and human touch. When the AI chatbot encounters a complex query it can't handle, it seamlessly escalates to your support team with full conversation history and context. Multiple team members can collaborate on conversations with role-based permissions, internal notes that customers can't see, conversation assignment, and status tracking. Your team stays organized and customers get the help they need.",
      points: [
        "Smart escalation from AI to human agents with complete conversation context",
        "Team inbox with role-based access, permissions, and conversation assignment",
        "Internal team notes, tags, and collaboration tools invisible to customers"
      ],
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      reverse: true
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Get complete visibility into every aspect of your WhatsApp customer interactions with our comprehensive analytics dashboard. Monitor message delivery rates, average response times, customer satisfaction scores, conversion rates, and chatbot performance metrics. Identify your peak messaging hours, most common customer queries, bottlenecks in your flows, and opportunities for improvement. Export detailed reports for stakeholders and make data-driven decisions to continuously optimize your WhatsApp strategy.",
      points: [
        "Live dashboard displaying all key metrics updated in real-time",
        "Track leads generated, bookings made, and customer satisfaction scores",
        "Detailed reports on message volume, response times, popular queries, and conversion funnels"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      reverse: false
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your customers' privacy and data security are our top priorities. Every WhatsApp message is protected with end-to-end encryption, ensuring that only you and your customers can read the content. Our platform is fully compliant with GDPR, WhatsApp Business policies, CCPA, and data protection regulations worldwide. All customer data is stored in secure, encrypted databases with strict access controls. Automated opt-in/opt-out management ensures compliance, and you maintain complete control over data retention and deletion policies.",
      points: [
        "End-to-end encryption for all messages — WhatsApp can't read them either",
        "GDPR, CCPA, and SOC 2 compliant with automated consent management",
        "Secure data storage with encryption at rest, access logs, and audit trails"
      ],
      imageSrc: "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=800&q=80",
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />

      {/* WhatsApp Benefits Banner */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose WhatsApp for Business?
            </h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              WhatsApp is the world's most popular messaging app with unmatched engagement rates
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "2 Billion+", label: "Active Users Worldwide", icon: "👥" },
              { stat: "98%", label: "Message Open Rate", icon: "📬" },
              { stat: "5x", label: "Higher Engagement vs Email", icon: "📈" },
              { stat: "90%", label: "Messages Read in 3 Minutes", icon: "⚡" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-sm text-green-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <FeatureSection 
          key={i}
          {...section}
        />
      ))}

      <AboutFeatures />
      <ImageGallery />
      <HalfDashboard/>
      <Footer />
    </div>
  );
}