'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/app/service/instagram/AboutHero';
import FeatureSection from '@/components/FeatureSection';
import AboutFeatures from '@/components/AboutFeatures';
import ImageGallery from '@/components/ImageGallery';
import HalfDashboard from '@/components/HalfDashboard';

export default function InstagramPage() {
  const sections = [
    {
      title: "Instagram DM Automation",
      description: "Automate Instagram Direct Messages with our AI-powered chatbot that responds instantly to customer inquiries. Connect your Instagram Business or Creator account and let the bot handle DMs 24/7. Answer questions about products, services, pricing, availability, and more — all while maintaining your brand's authentic voice and personality on Instagram's most personal communication channel.",
      points: [
        "Instant automated responses to all Instagram DMs",
        "Connect Instagram Business & Creator accounts",
        "Natural, conversational AI that matches your brand voice"
      ],
      imageSrc: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      reverse: false
    },
    {
      title: "Comment Auto-Reply",
      description: "Never miss a comment on your Instagram posts again. Our chatbot automatically detects and responds to comments on your feed posts, reels, and IGTV videos. Reply to questions, thank users for positive feedback, address concerns, and invite commenters to DM for more personalized conversations. Boost engagement rates and build stronger relationships with your Instagram community.",
      points: [
        "Auto-reply to comments on posts, reels & IGTV",
        "Keyword detection for targeted responses",
        "Invite users to DM for private conversations"
      ],
      imageSrc: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
      reverse: true
    },
    {
      title: "Story Mentions & Reply Automation",
      description: "Engage with users who mention you in their Instagram Stories automatically. When someone tags your account in a story, our chatbot can respond instantly with a thank you message, promotional offer, or invitation to continue the conversation. Turn story mentions into meaningful interactions and potential leads without manual monitoring of every mention.",
      points: [
        "Auto-respond to Instagram Story mentions",
        "Send personalized thank you messages",
        "Convert story engagement into leads"
      ],
      imageSrc: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80",
      reverse: false
    },
    {
      title: "Lead Generation Through DMs",
      description: "Capture valuable lead information directly through Instagram DM conversations. Our AI chatbot naturally collects names, email addresses, phone numbers, and customer preferences during conversations. Qualify leads based on their responses, tag them appropriately, and sync all data to your CRM automatically. Turn Instagram engagement into sales opportunities.",
      points: [
        "Collect contact info during natural conversations",
        "Lead qualification and tagging system",
        "Automatic CRM sync with all major platforms"
      ],
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      reverse: true
    },
    {
      title: "Product Catalog Integration",
      description: "Showcase your products directly in Instagram DMs with visual product catalogs. When customers ask about products, the chatbot can display images, prices, descriptions, and purchase links. Connect your Instagram Shop or e-commerce store to enable seamless product discovery and shopping without leaving the DM conversation. Increase sales with visual, interactive product recommendations.",
      points: [
        "Display product catalogs within DM conversations",
        "Show images, prices, and descriptions automatically",
        "Direct links to Instagram Shop or your website"
      ],
      imageSrc: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
      reverse: false
    },
    {
      title: "Appointment & Reservation Booking",
      description: "Let customers book appointments, consultations, or table reservations directly through Instagram DMs. Our chatbot checks your calendar in real-time, presents available time slots, confirms bookings, and sends reminder notifications — all within Instagram. Perfect for salons, restaurants, fitness studios, consultants, and any service-based business looking to reduce booking friction.",
      points: [
        "Book appointments directly in Instagram DMs",
        "Real-time calendar availability checking",
        "Automated booking confirmations and reminders"
      ],
      imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
      reverse: true
    },
    {
      title: "Instagram Ad Click-to-DM",
      description: "Maximize ROI from Instagram Ads with click-to-DM campaigns. When users click your Instagram ads, they're instantly connected to your chatbot in DMs. The bot welcomes them, answers questions, qualifies leads, collects information, and guides them through your sales funnel automatically. Higher engagement and conversion rates compared to traditional landing pages.",
      points: [
        "Click-to-DM Instagram ad campaigns",
        "Instant chatbot engagement from ad clicks",
        "Higher conversion rates than landing pages"
      ],
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      reverse: false
    },
    {
      title: "AI + Human Handoff",
      description: "Combine automated efficiency with human touch when needed. Our chatbot handles common questions and initial conversations automatically, but complex inquiries are seamlessly transferred to your team with complete conversation history. Your support team can take over, collaborate with internal notes, assign conversations, and provide personalized assistance while maintaining context.",
      points: [
        "Seamless bot-to-human conversation transfer",
        "Full conversation history and context preserved",
        "Team collaboration with internal notes"
      ],
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      reverse: true
    },
    {
      title: "Quick Replies & Interactive Buttons",
      description: "Create engaging, interactive DM conversations with quick reply buttons and call-to-action prompts. Guide customers through conversations with pre-defined button options that make it easy to navigate your services, products, FAQs, and booking flows. Reduce friction, improve user experience, and increase conversion rates with intuitive, clickable conversation paths.",
      points: [
        "Quick reply buttons for guided conversations",
        "Call-to-action buttons (Visit Website, Book Now, etc.)",
        "Interactive menus and option lists"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      reverse: false
    },
    {
      title: "Analytics & Performance Insights",
      description: "Track and optimize your Instagram automation with comprehensive analytics. Monitor DM volume, response times, engagement rates, lead generation metrics, and customer satisfaction scores. Identify trending questions, peak activity hours, and conversation drop-off points. Use data-driven insights to refine your chatbot responses and improve Instagram customer experience continuously.",
      points: [
        "Real-time dashboard with Instagram metrics",
        "Track DMs, comments, leads, and conversions",
        "Detailed reports on engagement and performance"
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