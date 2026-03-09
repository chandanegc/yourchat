'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import FeatureSection from '@/components/FeatureSection';
import AboutFeatures from '@/components/AboutFeatures';
import ImageGallery from '@/components/ImageGallery';
import HalfDashboard from '@/components/HalfDashboard';

export default function AboutPage() {
  const sections = [
    {
      title: "Feature Title Goes Here",
      description: "This paragraph is used to explain the feature or service in a little more detail. Describe what it helps with, how it fits into the overall product, or what kind of problem it addresses. This text is intentionally generic and can be replaced once the feature details are finalized.",
      points: ["Benefit three of this feature", "Benefit three of this feature", "Benefit three of this feature"],
      imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      reverse: false
    },
    {
      title: "Feature Title Goes Here",
      description: "This paragraph is used to explain the feature or service in a little more detail. Describe what it helps with, how it fits into the overall product, or what kind of problem it addresses. This text is intentionally generic and can be replaced once the feature details are finalized.",
      points: ["Benefit three of this feature", "Benefit three of this feature", "Benefit three of this feature"],
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      reverse: true
    },
    {
      title: "Feature Title Goes Here",
      description: "This paragraph is used to explain the feature or service in a little more detail. Describe what it helps with, how it fits into the overall product, or what kind of problem it addresses. This text is intentionally generic and can be replaced once the feature details are finalized.",
      points: ["Benefit three of this feature", "Benefit three of this feature", "Benefit three of this feature"],
      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
      reverse: false
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

      {/* New Sections from User Image */}
      <AboutFeatures />
      <ImageGallery />
      <HalfDashboard/>

      <Footer />
    </div>
  );
}
