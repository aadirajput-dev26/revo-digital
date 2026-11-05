"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  GALLERY_STANDS,
  GALLERY_CARDS,
  CUSTOMIZATION_CONTENT,
} from "@/data/content";
import { useEnquiry } from "@/context/EnquiryContext";
import { GallerySectionProps } from "@/types";

export default function GalleryCustom({
  onSelectVariant,
  onRequestCustomDesign,
}: GallerySectionProps) {
  const { setSelectedVariant } = useEnquiry();

  const handleSelect = (variantName: string, category: "Review Solutions" | "Business Cards") => {
    if (onSelectVariant) {
      onSelectVariant(variantName);
    } else {
      setSelectedVariant(variantName, category);
    }
  };

  const handleRequestCustom = () => {
    if (onRequestCustomDesign) {
      onRequestCustomDesign();
    } else {
      setSelectedVariant("Custom Bespoke Design", "Review Solutions");
    }
  };

  const handleScrollToTopGallery = () => {
    const el = document.getElementById("customization");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="customization" className="w-full bg-background" aria-label="Designs and Customization">
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        {/* Section 03 Header */}
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <div className="text-xs font-bold tracking-widest text-primary mb-3">
            03 — EXPLORE DESIGNS
          </div>
          <h2 className="font-headings font-bold text-navy text-4xl">
            A design for every brand personality.
          </h2>
          <p className="text-base text-slate-text mt-3">
            Same smart technology, different visual identities. Pick a style or make it entirely yours.
          </p>
        </div>

        {/* 3-Column Counter Stand Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {GALLERY_STANDS.map((stand) => (
            <div
              key={stand.id}
              className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-soft relative">
                <img
                  src={stand.imageUrl}
                  alt={stand.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-navy">{stand.name}</div>
                  <div className="text-xs text-slate-text">{stand.subtitle}</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelect(stand.name, "Review Solutions")}
                  className="text-xs font-bold text-primary border border-skyline bg-ice hover:bg-skyline/40 rounded-md px-3 py-2 transition-colors cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Column Business Card Catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_CARDS.map((card) => (
            <div
              key={card.id}
              className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[3/3.4] overflow-hidden bg-soft relative">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-bold text-navy">{card.name}</div>
                <div className="text-xs text-slate-text mb-2">{card.subtitle}</div>
                <button
                  type="button"
                  onClick={() => handleSelect(card.name, "Business Cards")}
                  className="text-xs font-bold text-navy flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 04: Customization Studio Container */}
        <div className="mt-20 bg-soft border border-border rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
          {/* Left Column: Features & CTAs */}
          <div>
            <div className="text-xs font-bold tracking-widest text-accent mb-3">
              {CUSTOMIZATION_CONTENT.eyebrow}
            </div>
            <h3 className="font-headings font-bold text-navy text-4xl leading-tight">
              {CUSTOMIZATION_CONTENT.title}
            </h3>
            <p className="text-base text-slate-text mt-3">
              {CUSTOMIZATION_CONTENT.subtitle}
            </p>

            {/* 6 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
              {CUSTOMIZATION_CONTENT.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm font-medium text-navy bg-white border border-border rounded-md px-3 py-2.5 shadow-2xs"
                >
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                type="button"
                onClick={handleScrollToTopGallery}
                className="bg-navy text-white text-sm font-semibold rounded-md px-6 py-3 hover:bg-navy-light transition-all cursor-pointer"
              >
                {CUSTOMIZATION_CONTENT.exploreCta}
              </button>
              <button
                type="button"
                onClick={handleRequestCustom}
                className="bg-accent text-white text-sm font-semibold rounded-md px-6 py-3 hover:brightness-105 transition-all shadow-sm cursor-pointer"
              >
                {CUSTOMIZATION_CONTENT.requestCta}
              </button>
            </div>
          </div>

          {/* Right Column: Before & After Split Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before: Standard Generic Card */}
            <div className="bg-white border border-border rounded-xl overflow-hidden shadow-xs">
              <div className="text-xs font-bold text-slate-text px-4 pt-3">
                {CUSTOMIZATION_CONTENT.before.label}
              </div>
              <div className="aspect-[4/3] m-3 rounded-lg overflow-hidden bg-soft relative">
                <img
                  src={CUSTOMIZATION_CONTENT.before.imageUrl}
                  alt="Standard generic review card before customization"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* After: Branded for Brew & Bean */}
            <div className="bg-navy rounded-xl overflow-hidden border border-navy-light mt-0 sm:mt-6 shadow-xl">
              <div className="text-xs font-bold text-accent px-4 pt-3">
                {CUSTOMIZATION_CONTENT.after.label}
              </div>
              <div className="aspect-[4/3] m-3 rounded-lg overflow-hidden relative">
                <img
                  src={CUSTOMIZATION_CONTENT.after.imageUrl}
                  alt="Branded Brew and Bean review stand"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 pb-4 flex gap-2">
                {CUSTOMIZATION_CONTENT.after.swatches.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-6 h-6 rounded-full border-2 border-white shadow-xs"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
