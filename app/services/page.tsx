'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import FeatureSection from '@/components/FeatureSection';
import AboutFeatures from '@/components/AboutFeatures';
import ImageGallery from '@/components/ImageGallery';
import HalfDashboard from '@/components/HalfDashboard';

export default function ServicesPage() {
  const sections = [
    {
      title: "Smart AI Chatbot System",
      description: "Our intelligent AI chatbot understands customer queries in natural language and provides instant, accurate responses. Trained on your business data, FAQs, and knowledge base, it handles customer support 24/7 without human intervention. The chatbot learns from every interaction, continuously improving its responses to serve your customers better.",
      points: [
        "Natural language understanding across 100+ languages",
        "Instant FAQ automation and query resolution", 
        "24/7 automated customer support system"
      ],
      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
      reverse: false
    },
    {
      title: "Multi-Platform Integration",
      description: "Connect your AI assistant across all major communication channels from a single unified dashboard. Whether your customers reach out via WhatsApp, Instagram, Facebook Messenger, or your website, they get consistent, intelligent responses. Manage all conversations in one place with seamless synchronization across platforms.",
      points: [
        "Unified inbox for Website, WhatsApp, Instagram & Facebook",
        "Real-time message synchronization across channels",
        "Single setup connects to multiple platforms instantly"
      ],
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      reverse: true
    },
    {
      title: "Automated Lead Generation & Booking",
      description: "Capture leads automatically while customers chat with your AI assistant. Collect contact information, qualify prospects, and schedule appointments without any manual work. Our intelligent system knows when to ask for details and seamlessly integrates with your CRM, ensuring no opportunity is missed.",
      points: [
        "Automatic capture of names, emails, and phone numbers",
        "Smart appointment scheduling with calendar integration",
        "Lead qualification scoring and CRM synchronization"
      ],
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      reverse: false
    },
    {
      title: "Voice-Enabled AI Assistant",
      description: "Take customer engagement to the next level with voice-powered conversations. Our AI understands spoken queries and responds naturally, providing hands-free support for your customers. Perfect for accessibility, mobile users, and situations where typing isn't convenient.",
      points: [
        "Natural voice interaction with AI-powered responses",
        "Support for 100+ languages with accent recognition",
        "Hands-free customer engagement for better accessibility"
      ],
      imageSrc: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
      reverse: true
    },
    {
      title: "Real-Time Analytics & Insights",
      description: "Track every conversation, measure performance, and gain actionable insights from your customer interactions. Our comprehensive analytics dashboard shows you response times, customer satisfaction, popular queries, conversion rates, and more. Make data-driven decisions to continuously improve your customer service.",
      points: [
        "Comprehensive dashboard with real-time metrics",
        "Track leads, bookings, and customer satisfaction scores",
        "Identify trends and optimize chatbot performance"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      reverse: false
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your data security is our top priority. All conversations are encrypted end-to-end with AES-256 encryption, the same standard used by banks. We're fully compliant with GDPR, SOC 2, and HIPAA requirements, ensuring your business and customer data is always protected with enterprise-level security measures.",
      points: [
        "End-to-end encryption for all conversations",
        "GDPR, SOC 2 Type II, and HIPAA compliant",
        "Role-based access control and audit logs"
      ],
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />

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