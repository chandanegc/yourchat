'use client';

import FAQ from "./FAQ";
import CTA from "./CTA";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

export default function HalfDashboard() {
    return (
        <>
        <Pricing/>
        <Testimonials/>
        <FAQ/>
        <CTA/>
        </>
    );
}