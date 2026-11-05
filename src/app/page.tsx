import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import GalleryCustom from "@/components/GalleryCustom";
import HowAiWho from "@/components/HowAiWho";
import FaqFooter from "@/components/FaqFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-navy font-body antialiased selection:bg-skyline selection:text-navy">
      {/* 00 — Global Sticky Blur Navigation */}
      <Navbar />

      <main>
        {/* 01 — Hero Section & 3D Interactive Timeline Studio */}
        <Hero />

        {/* 02 — Products Section (Google Review Solutions & Personal Cards) */}
        <ProductsSection />

        {/* 03 & 04 — Explore Designs Gallery & Customization Studio */}
        <GalleryCustom />

        {/* 05, 06 & 07 — How It Works, AI Review Assist & Who Is It For */}
        <HowAiWho />

        {/* 08, 09 & 10 — FAQ Accordion, Universal WhatsApp Enquiry & Footer */}
        <FaqFooter />
      </main>
    </div>
  );
}
