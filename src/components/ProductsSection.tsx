"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Tv,
  CreditCard,
  Check,
  QrCode,
  X,
  Phone,
  Mail,
  Share2,
} from "lucide-react";
import { PRODUCTS_CONTENT } from "@/data/content";
import { useEnquiry } from "@/context/EnquiryContext";
import { ProductsSectionProps, ProductCategory } from "@/types";

export default function ProductsSection({
  onEnquireProduct,
  onExploreDesigns,
}: ProductsSectionProps) {
  const { setSelectedVariant } = useEnquiry();
  const [showLiveProfile, setShowLiveProfile] = useState(false);

  const handleExplore = (category: ProductCategory) => {
    if (onExploreDesigns) {
      onExploreDesigns(category);
    } else {
      const el = document.getElementById("customization");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquire = (variantName: string, category: ProductCategory) => {
    if (onEnquireProduct) {
      onEnquireProduct(variantName, category);
    } else {
      setSelectedVariant(variantName, category);
    }
  };

  return (
    <section id="products" className="w-full bg-soft py-20" aria-label="Our Products">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest text-primary mb-3">
              {PRODUCTS_CONTENT.eyebrow}
            </div>
            <h2 className="font-headings font-bold text-navy text-4xl leading-tight max-w-[520px]">
              {PRODUCTS_CONTENT.title}
            </h2>
          </div>
          <p className="text-base text-slate-text max-w-[380px]">
            {PRODUCTS_CONTENT.subtitle}
          </p>
        </div>

        {/* Card 1: Google Review Solutions (White Card) */}
        <div className="bg-white border border-border rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-6 shadow-sm">
          {/* Left Content Column */}
          <div className="p-8 sm:p-10 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-ice text-primary text-xs font-bold rounded-full px-3 py-1">
                  {PRODUCTS_CONTENT.product1.badge}
                </span>
                <span className="text-xs font-semibold text-slate-text">
                  {PRODUCTS_CONTENT.product1.categoryLabel}
                </span>
              </div>
              <h3 className="font-headings font-bold text-navy text-3xl leading-tight">
                {PRODUCTS_CONTENT.product1.title}
              </h3>
              <p className="text-base text-slate-text">
                {PRODUCTS_CONTENT.product1.description}
              </p>
            </div>

            {/* 2 Sub-product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-border rounded-lg p-4 bg-soft hover:border-slate-300 transition-colors">
                <div className="w-9 h-9 rounded-md bg-navy flex items-center justify-center mb-2 text-white">
                  <Tv className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-navy">
                  {PRODUCTS_CONTENT.product1.subProducts[0].title}
                </div>
                <div className="text-xs text-slate-text mt-1 leading-relaxed">
                  {PRODUCTS_CONTENT.product1.subProducts[0].description}
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 bg-soft hover:border-slate-300 transition-colors">
                <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center mb-2 text-white">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-navy">
                  {PRODUCTS_CONTENT.product1.subProducts[1].title}
                </div>
                <div className="text-xs text-slate-text mt-1 leading-relaxed">
                  {PRODUCTS_CONTENT.product1.subProducts[1].description}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                type="button"
                onClick={() => handleExplore("Review Solutions")}
                className="bg-navy text-white text-sm font-semibold rounded-md px-6 py-3 hover:bg-navy-light transition-all cursor-pointer"
              >
                {PRODUCTS_CONTENT.product1.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => handleEnquire("Smart Review Stand · Cloud White", "Review Solutions")}
                className="border border-border text-navy text-sm font-semibold rounded-md px-6 py-3 flex items-center gap-2 hover:bg-soft transition-all cursor-pointer"
              >
                <span>{PRODUCTS_CONTENT.product1.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Staggered Imagery */}
          <div className="bg-navy-light p-8 grid grid-cols-2 gap-4 relative overflow-hidden items-center">
            {/* Image 1: Tabletop Stand */}
            <div className="rounded-xl overflow-hidden bg-white aspect-[4/5] relative shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                alt="Smart Tabletop Google Review Stand"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs rounded-md px-3 py-1.5 text-xs font-bold text-navy shadow-xs">
                {PRODUCTS_CONTENT.product1.mockup1.tag}
              </div>
            </div>

            {/* Image 2: Handheld Card */}
            <div className="rounded-xl overflow-hidden bg-white aspect-[4/5] relative mt-8 shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                alt="Salesperson Portable Review Card"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs rounded-md px-3 py-1.5 text-xs font-bold text-navy shadow-xs">
                {PRODUCTS_CONTENT.product1.mockup2.tag}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Personal Business Cards (Dark Navy Card) */}
        <div className="bg-navy rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-xl">
          {/* Content Column (order 2 on desktop) */}
          <div className="p-8 sm:p-10 flex flex-col justify-between gap-6 order-2 lg:order-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-accent text-white text-xs font-bold rounded-full px-3 py-1">
                  {PRODUCTS_CONTENT.product2.badge}
                </span>
                <span className="text-xs font-semibold text-white/70">
                  {PRODUCTS_CONTENT.product2.categoryLabel}
                </span>
              </div>
              <h3 className="font-headings font-bold text-white text-3xl leading-tight">
                {PRODUCTS_CONTENT.product2.title}
              </h3>
              <p className="text-base text-white/70">
                {PRODUCTS_CONTENT.product2.description}
              </p>
            </div>

            {/* 6 Feature Pills */}
            <div className="flex flex-wrap gap-2">
              {PRODUCTS_CONTENT.product2.featurePills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-medium text-white bg-white/10 border border-white/15 rounded-full px-3 py-1.5 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                type="button"
                onClick={() => handleExplore("Business Cards")}
                className="bg-accent text-white text-sm font-semibold rounded-md px-6 py-3 hover:brightness-105 transition-all cursor-pointer shadow-sm"
              >
                {PRODUCTS_CONTENT.product2.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => setShowLiveProfile(true)}
                className="border border-white/25 text-white text-sm font-semibold rounded-md px-6 py-3 hover:bg-white/10 transition-all cursor-pointer"
              >
                {PRODUCTS_CONTENT.product2.secondaryCta}
              </button>
            </div>
          </div>

          {/* Left Visual Column (order 1 on desktop) */}
          <div className="p-8 order-1 lg:order-1 relative flex items-center justify-center overflow-hidden">
            {/* Ambient Radial Glow */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-primary/30 blur-[80px] pointer-events-none" />

            <div className="relative w-full max-w-[460px]">
              {/* Luxury Business Card Mockup */}
              <div className="rounded-xl overflow-hidden border border-white/20 aspect-[16/10] shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury RevoDigital Smart Business Card"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Digital Profile Live Preview Chip */}
              <div
                onClick={() => setShowLiveProfile(true)}
                className="bg-white rounded-xl p-4 mt-4 flex items-center gap-4 shadow-xl cursor-pointer hover:shadow-2xl transition-all"
                role="button"
                tabIndex={0}
                aria-label="View Aarav Kapoor live digital profile preview"
              >
                <div className="w-12 h-12 rounded-full bg-ice flex items-center justify-center font-bold text-navy shrink-0">
                  {PRODUCTS_CONTENT.product2.preview.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-navy truncate">
                    {PRODUCTS_CONTENT.product2.preview.nameRole}
                  </div>
                  <div className="text-xs text-slate-text truncate">
                    {PRODUCTS_CONTENT.product2.preview.status}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-md bg-navy flex items-center justify-center text-white shrink-0">
                  <QrCode className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Live Profile Modal Popup */}
      {showLiveProfile && (
        <div
          className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowLiveProfile(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLiveProfile(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-text hover:bg-soft transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Live Profile Header */}
            <div className="text-center pt-2">
              <div className="w-20 h-20 rounded-full bg-navy text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-md border-4 border-ice">
                AK
              </div>
              <h4 className="font-headings font-bold text-navy text-xl mt-3">
                Aarav Kapoor
              </h4>
              <p className="text-xs text-primary font-semibold">
                Senior Management Consultant
              </p>
              <p className="text-xs text-slate-text mt-1">
                Apex Strategies · Mumbai, India
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-2 mt-5">
              <a
                href="tel:+919876543210"
                className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-soft hover:bg-ice transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-navy">Call</span>
              </a>
              <a
                href="mailto:aarav@apexstrategies.in"
                className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-soft hover:bg-ice transition-colors text-center"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-navy">Email</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Aarav Kapoor · Digital Card",
                      url: window.location.href,
                    });
                  }
                }}
                className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-soft hover:bg-ice transition-colors text-center cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-navy">Share</span>
              </button>
            </div>

            {/* Save Contact CTA */}
            <button
              type="button"
              onClick={() => {
                handleEnquire("Personal Smart Card · Onyx Black", "Business Cards");
                setShowLiveProfile(false);
              }}
              className="w-full mt-5 bg-navy text-white text-sm font-semibold rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-navy-light transition-colors cursor-pointer"
            >
              <span>Get Your Own Smart Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
