'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HalfDashboard from '@/components/HalfDashboard';

export default function PricingPage() {

  return (
    <div >
      <Navbar />
      <HalfDashboard />
      <Footer />
    </div>
  );
}