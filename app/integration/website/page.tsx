'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/app/integration/website/AboutHero';
import FeatureSection from '@/components/FeatureSection';
import AboutFeatures from '@/components/AboutFeatures';
import ImageGallery from '@/components/ImageGallery';
import HalfDashboard from '@/components/HalfDashboard';

export default function WebsiteChatPage() {
  const sections = [
    {
      title: "Easy One-Click Installation",
      description: "Add a powerful AI chatbot to your website in under 2 minutes with a simple code snippet. No technical expertise required — just copy and paste one line of code before your closing </body> tag. Works with any website platform including WordPress, Shopify, Wix, Squarespace, custom HTML sites, and more. The chat widget loads asynchronously without affecting your site's performance.",
      points: [
        "Install with single line of code — no coding skills needed",
        "Compatible with all website platforms and CMS",
        "Lightweight script with zero impact on page speed"
      ],
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      reverse: false
    },
    {
      title: "Fully Customizable Design",
      description: "Make the chat widget match your brand perfectly with complete design customization. Choose colors, fonts, button styles, widget position, welcome messages, and avatar images. Create a seamless experience that looks like a native part of your website. Preview changes in real-time before publishing. Custom CSS support available for advanced styling needs.",
      points: [
        "Customize colors, fonts, and button styles",
        "Upload custom avatar and brand logo",
        "Position widget anywhere: bottom-right, left, center, or custom"
      ],
      imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      reverse: true
    },
    {
      title: "Instant 24/7 Customer Support",
      description: "Provide round-the-clock customer support without hiring more staff. The AI chatbot answers visitor questions instantly, any time of day or night. Handle common inquiries about your products, services, pricing, shipping, returns, and more. Reduce support tickets, improve customer satisfaction, and never miss an opportunity to help a potential customer.",
      points: [
        "AI responds instantly to all visitor questions 24/7",
        "Trained on your FAQs, documentation, and knowledge base",
        "Handles unlimited simultaneous conversations"
      ],
      imageSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      reverse: false
    },
    {
      title: "Intelligent Lead Capture",
      description: "Turn website visitors into qualified leads automatically. The chatbot engages visitors proactively, understands their needs through conversation, and collects contact information naturally. Capture names, emails, phone numbers, company details, and specific requirements. All lead data is instantly synced to your CRM, making follow-up easy and efficient.",
      points: [
        "Proactive chat invitations based on visitor behavior",
        "Natural conversation flow for contact collection",
        "Instant CRM sync with Salesforce, HubSpot, Pipedrive & more"
      ],
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      reverse: true
    },
    {
      title: "Smart Appointment Booking",
      description: "Let website visitors book appointments, demos, consultations, or meetings directly through the chat widget. The chatbot checks your calendar availability in real-time, presents open time slots, confirms bookings instantly, and sends automatic reminder emails. Integrates seamlessly with Google Calendar, Outlook, Calendly, and other scheduling tools.",
      points: [
        "Real-time calendar integration and availability",
        "Automated booking confirmations and reminders",
        "Works with Google Calendar, Outlook, Calendly & more"
      ],
      imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
      reverse: false
    },
    {
      title: "Proactive Chat Triggers",
      description: "Engage visitors at the perfect moment with intelligent, behavior-based triggers. Display chat prompts when visitors spend time on specific pages, are about to leave (exit intent), scroll to certain sections, or show signs of confusion. Customize trigger timing and messages for different pages. Increase engagement rates and reduce bounce rates with well-timed interventions.",
      points: [
        "Exit-intent triggers to prevent visitors from leaving",
        "Time-based triggers (e.g., after 30 seconds on page)",
        "Page-specific custom welcome messages"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      reverse: true
    },
    {
      title: "Multi-Language Support",
      description: "Serve global customers with automatic language detection and responses. The AI chatbot detects the visitor's language and responds in their preferred language automatically. Support over 100 languages including English, Spanish, French, German, Chinese, Japanese, Arabic, Hindi, and more. No need to create separate bots for different languages.",
      points: [
        "Automatic language detection from visitor's browser",
        "Respond in 100+ languages with native accuracy",
        "No additional configuration needed for multi-language"
      ],
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      reverse: false
    },
    {
      title: "Human Agent Handoff",
      description: "Seamlessly transfer conversations from AI to human agents when needed. When the chatbot encounters complex questions it can't answer, it automatically escalates to your support team with full conversation history. Your team sees all context, can add internal notes, assign conversations to specific agents, and collaborate to resolve issues efficiently.",
      points: [
        "Automatic escalation to human agents for complex queries",
        "Complete conversation history and context preserved",
        "Team inbox with assignment, tagging, and collaboration"
      ],
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      reverse: true
    },
    {
      title: "Rich Media & File Sharing",
      description: "Enhance conversations with images, videos, documents, and clickable buttons. The chatbot can share product images, tutorial videos, PDF guides, pricing sheets, and more. Visitors can also upload files for support tickets or inquiries. Create interactive experiences with quick reply buttons, carousels, and call-to-action links that guide visitors through your site.",
      points: [
        "Send and receive images, videos, PDFs, and documents",
        "Interactive buttons, quick replies, and carousels",
        "Clickable links and call-to-action buttons"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      reverse: false
    },
    {
      title: "Analytics & Insights Dashboard",
      description: "Understand your website visitors better with comprehensive chat analytics. Track total conversations, response times, customer satisfaction scores, most common questions, conversion rates, and chatbot performance. Identify knowledge gaps, optimize responses, and measure ROI. Export detailed reports to make data-driven decisions about your website and customer service strategy.",
      points: [
        "Real-time dashboard with visitor engagement metrics",
        "Track conversations, leads, bookings, and satisfaction",
        "Identify popular questions and optimize bot responses"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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