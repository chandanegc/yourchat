'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/app/integration/facebook/AboutHero';
import FeatureSection from '@/components/FeatureSection';
import AboutFeatures from '@/components/AboutFeatures';
import ImageGallery from '@/components/ImageGallery';
import HalfDashboard from '@/components/HalfDashboard';

export default function FacebookPage() {
  const sections = [
    {
      title: "Facebook Messenger Integration",
      description: "Connect your AI chatbot directly to Facebook Messenger and respond to customer inquiries automatically. Our seamless integration with Facebook's Messenger Platform enables instant replies to messages sent to your Facebook Page. Handle customer questions, provide support, and capture leads without manual intervention, all while maintaining Facebook's quality standards.",
      points: [
        "One-click integration with Facebook Business Pages",
        "Automatic responses to all Messenger conversations",
        "Full compliance with Facebook Messenger policies"
      ],
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      reverse: false
    },
    {
      title: "Instant Auto-Reply System",
      description: "Never leave customers waiting with our instant auto-reply feature. The moment someone sends a message to your Facebook Page, our AI chatbot responds immediately with helpful information. Answer common questions about your business hours, products, services, pricing, and more. Keep customers engaged with instant acknowledgment and reduce response time from hours to seconds.",
      points: [
        "Instant replies within milliseconds of receiving messages",
        "AI understands context and provides relevant answers",
        "Handle unlimited simultaneous conversations"
      ],
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      reverse: true
    },
    {
      title: "Lead Generation & Contact Collection",
      description: "Turn Facebook Messenger conversations into valuable leads automatically. Our chatbot intelligently asks for customer information during natural conversations, collecting names, email addresses, phone numbers, and specific interests. All lead data is instantly synced to your CRM, making it easy to follow up and convert Messenger inquiries into paying customers.",
      points: [
        "Automatic collection of contact information during chat",
        "Lead qualification based on customer responses",
        "Instant CRM sync with Salesforce, HubSpot, Zoho & more"
      ],
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      reverse: false
    },
    {
      title: "Automated Appointment Booking",
      description: "Allow customers to book appointments directly through Facebook Messenger without leaving the conversation. Our chatbot checks your calendar availability in real-time, presents open time slots, confirms bookings instantly, and sends automatic reminders. Integrate with Google Calendar, Outlook, Calendly, and other scheduling platforms for seamless appointment management.",
      points: [
        "Real-time calendar sync and availability checking",
        "Automated booking confirmations via Messenger",
        "Reminder notifications before scheduled appointments"
      ],
      imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
      reverse: true
    },
    {
      title: "Facebook Comments Auto-Reply",
      description: "Respond to Facebook post comments automatically with AI-powered replies. When someone comments on your Facebook posts, our chatbot can detect questions, keywords, or specific phrases and reply instantly with relevant information. Drive engagement, answer questions publicly, and invite commenters to continue conversations in Messenger for more personalized support.",
      points: [
        "Automatic replies to Facebook post comments",
        "Keyword detection for targeted responses",
        "Invite commenters to Messenger for private conversations"
      ],
      imageSrc: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      reverse: false
    },
    {
      title: "Rich Interactive Messages",
      description: "Enhance customer engagement with Facebook Messenger's rich media features. Send images, videos, carousels, quick reply buttons, and call-to-action links. Create interactive experiences with templates for receipts, shipping updates, order confirmations, and product showcases. Make conversations more engaging and guide customers through your sales funnel with visual, clickable content.",
      points: [
        "Send images, videos, files, and carousel cards",
        "Quick reply buttons for guided conversations",
        "Structured templates for receipts and confirmations"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      reverse: true
    },
    {
      title: "Messenger Ad Integration",
      description: "Supercharge your Facebook Ads with click-to-Messenger campaigns. When users click your ads, they're taken directly to an automated Messenger conversation with your chatbot. Qualify leads instantly, answer product questions, collect contact information, and book appointments right from your ad clicks. Increase conversion rates and lower customer acquisition costs with automated follow-up.",
      points: [
        "Click-to-Messenger ads with instant chatbot responses",
        "Automated lead qualification from ad traffic",
        "Higher conversion rates compared to landing pages"
      ],
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      reverse: false
    },
    {
      title: "Smart AI + Human Handoff",
      description: "Combine AI efficiency with human expertise for the best customer experience. Our chatbot handles routine questions automatically, but when complex issues arise, it seamlessly transfers conversations to your support team with full context. Your team can take over anytime, add internal notes, assign conversations to specific agents, and collaborate to resolve customer issues efficiently.",
      points: [
        "Seamless handoff from bot to human agents",
        "Team inbox with conversation assignment",
        "Internal notes and team collaboration features"
      ],
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      reverse: true
    },
    {
      title: "Broadcast Messages & Campaigns",
      description: "Send promotional messages, updates, and announcements to your Messenger subscribers. Create targeted broadcast campaigns to re-engage customers, promote new products, share special offers, and drive sales. Segment your audience based on tags, behavior, and preferences. Track delivery rates, open rates, and click-through rates with detailed analytics to optimize your messaging strategy.",
      points: [
        "Broadcast messages to unlimited Messenger subscribers",
        "Audience segmentation based on tags and behavior",
        "Detailed analytics on delivery, opens, and clicks"
      ],
      imageSrc: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
      reverse: false
    },
    {
      title: "Analytics & Performance Tracking",
      description: "Get complete visibility into your Facebook Messenger performance with comprehensive analytics. Track message volume, response times, conversation completion rates, lead generation metrics, and customer satisfaction scores. Identify your most popular queries, peak conversation times, and bot performance gaps. Use data-driven insights to continuously improve your Messenger automation and customer experience.",
      points: [
        "Real-time dashboard with key Messenger metrics",
        "Track conversations, leads, and conversion rates",
        "Export detailed reports for performance analysis"
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