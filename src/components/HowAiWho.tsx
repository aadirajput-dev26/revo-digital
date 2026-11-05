"use client";

import React, { useState } from "react";
import {
  Wifi,
  Smartphone,
  Star,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Store,
  Briefcase,
  Check,
} from "lucide-react";
import {
  HOW_IT_WORKS_STEPS,
  HOW_IT_WORKS_PHOTOS,
  AI_REVIEW_CONTENT,
  BUSINESS_SECTORS,
  INDIVIDUAL_PERSONAS,
} from "@/data/content";

export default function HowAiWho() {
  // Interactive AI Phone Demo States
  const [starRating, setStarRating] = useState(5);
  const [isEditingDraft, setIsEditingDraft] = useState(false);
  const [draftText, setDraftText] = useState(AI_REVIEW_CONTENT.phoneDemo.aiDraftText);
  const [postedSuccess, setPostedSuccess] = useState(false);

  const handleStarClick = (rating: number) => {
    setStarRating(rating);
    if (rating === 5) {
      setDraftText("“Loved the oat latte and quick service. Perfect spot to work — will be back!”");
    } else if (rating === 4) {
      setDraftText("“Great coffee and pleasant atmosphere. Staff was friendly and wifi was fast.”");
    } else if (rating <= 3) {
      setDraftText("“Decent coffee and helpful staff, though service took a little longer today.”");
    }
  };

  const handleContinueGoogle = () => {
    setPostedSuccess(true);
    setTimeout(() => {
      setPostedSuccess(false);
    }, 3000);
  };

  return (
    <div id="how-it-works" className="w-full bg-background">
      {/* ======================================================== */}
      {/* SECTION 05: HOW IT WORKS */}
      {/* ======================================================== */}
      <section className="max-w-[1280px] mx-auto px-8 py-20" aria-label="How It Works">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-primary mb-3">
            05 — HOW IT WORKS
          </div>
          <h2 className="font-headings font-bold text-navy text-4xl">
            Effortless by design. No tech skills needed.
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 01 */}
          <div className="bg-soft border border-border rounded-xl p-8 text-center relative overflow-hidden">
            <div className="text-5xl font-headings font-bold text-skyline">
              {HOW_IT_WORKS_STEPS[0].number}
            </div>
            <div className="w-14 h-14 rounded-xl bg-navy mx-auto my-4 flex items-center justify-center text-white shadow-xs">
              <Wifi className="w-6 h-6 rotate-90" />
            </div>
            <h3 className="text-lg font-bold text-navy font-headings">
              {HOW_IT_WORKS_STEPS[0].title}
            </h3>
            <p className="text-sm text-slate-text mt-2 leading-relaxed">
              {HOW_IT_WORKS_STEPS[0].description}
            </p>
            {/* Arrow to Step 2 */}
            <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-border rounded-full items-center justify-center hidden md:flex z-10 shadow-xs">
              <ArrowRight className="w-3.5 h-3.5 text-navy" />
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-soft border border-border rounded-xl p-8 text-center relative overflow-hidden">
            <div className="text-5xl font-headings font-bold text-skyline">
              {HOW_IT_WORKS_STEPS[1].number}
            </div>
            <div className="w-14 h-14 rounded-xl bg-navy mx-auto my-4 flex items-center justify-center text-white shadow-xs">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy font-headings">
              {HOW_IT_WORKS_STEPS[1].title}
            </h3>
            <p className="text-sm text-slate-text mt-2 leading-relaxed">
              {HOW_IT_WORKS_STEPS[1].description}
            </p>
            {/* Arrow to Step 3 */}
            <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-border rounded-full items-center justify-center hidden md:flex z-10 shadow-xs">
              <ArrowRight className="w-3.5 h-3.5 text-navy" />
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-soft border border-border rounded-xl p-8 text-center relative overflow-hidden">
            <div className="text-5xl font-headings font-bold text-skyline">
              {HOW_IT_WORKS_STEPS[2].number}
            </div>
            <div className="w-14 h-14 rounded-xl bg-navy mx-auto my-4 flex items-center justify-center text-white shadow-xs">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy font-headings">
              {HOW_IT_WORKS_STEPS[2].title}
            </h3>
            <p className="text-sm text-slate-text mt-2 leading-relaxed">
              {HOW_IT_WORKS_STEPS[2].description}
            </p>
          </div>
        </div>

        {/* Real-World Contextual Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {HOW_IT_WORKS_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-border relative aspect-[16/7] group shadow-xs"
            >
              <img
                src={photo.imageUrl}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs rounded-md px-4 py-2 text-sm font-bold text-navy shadow-xs">
                {photo.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 06: AI REVIEW ASSIST · INCLUDED (Dark Section) */}
      {/* ======================================================== */}
      <section className="w-full bg-navy py-20 relative overflow-hidden" aria-label="AI Review Assist">
        {/* Glow circle */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] top-[-200px] left-[30%] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Column: Description & 3 Steps */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs font-semibold text-white mb-5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>{AI_REVIEW_CONTENT.eyebrow}</span>
            </div>
            <h2 className="font-headings font-bold text-white text-4xl leading-tight">
              {AI_REVIEW_CONTENT.title}
            </h2>
            <p className="text-white/70 text-base mt-4 leading-relaxed">
              {AI_REVIEW_CONTENT.description}
            </p>

            {/* 3 Step Guides */}
            <div className="flex flex-col gap-3 mt-7">
              {AI_REVIEW_CONTENT.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/8 border border-white/12 rounded-lg px-4 py-3"
                >
                  <div className="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-white font-medium">{step}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-5 flex items-start gap-2 text-xs text-white/60 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{AI_REVIEW_CONTENT.disclaimer}</span>
            </div>
          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="flex justify-center">
            <div className="w-[300px] bg-white rounded-[28px] p-3 shadow-2xl">
              <div className="bg-soft rounded-[20px] overflow-hidden text-navy">
                {/* Header */}
                <div className="px-5 pt-5 pb-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-navy mx-auto flex items-center justify-center mb-2 text-white shadow-xs">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-sm font-bold text-navy">
                    {AI_REVIEW_CONTENT.phoneDemo.question}
                  </div>

                  {/* Interactive Star Rating Selector */}
                  <div className="flex justify-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        className="p-1 hover:scale-125 transition-transform cursor-pointer"
                        aria-label={`Rate ${star} stars`}
                      >
                        <Star
                          className={`w-4 h-4 transition-colors ${
                            star <= starRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300 fill-slate-100"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Input & AI Draft */}
                <div className="px-4 pb-4 flex flex-col gap-2">
                  <div className="bg-white border border-border rounded-lg p-3 text-xs text-navy italic">
                    {AI_REVIEW_CONTENT.phoneDemo.customerInput}
                  </div>

                  {/* AI Draft Box (Editable toggle) */}
                  <div className="bg-ice border border-skyline rounded-lg p-3">
                    <div className="text-xs font-bold text-primary flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-accent" />
                        <span>{AI_REVIEW_CONTENT.phoneDemo.aiDraftBadge}</span>
                      </div>
                      <span className="text-[10px] text-slate-text font-normal">
                        {starRating} ★ Draft
                      </span>
                    </div>

                    {isEditingDraft ? (
                      <textarea
                        value={draftText}
                        onChange={(e) => setDraftText(e.target.value)}
                        className="w-full mt-2 p-1.5 text-xs bg-white border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-navy resize-none"
                        rows={3}
                      />
                    ) : (
                      <div className="text-xs text-navy mt-1 leading-relaxed">
                        {draftText}
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => setIsEditingDraft(!isEditingDraft)}
                      className="border border-border bg-white rounded-md text-center text-xs font-bold text-navy py-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {isEditingDraft ? "Done" : AI_REVIEW_CONTENT.phoneDemo.editCta}
                    </button>
                    <button
                      type="button"
                      onClick={handleContinueGoogle}
                      className="bg-primary rounded-md text-center text-xs font-bold text-white py-2 hover:bg-primary/90 transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      {postedSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <span>{AI_REVIEW_CONTENT.phoneDemo.continueCta}</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 07: WHO IS IT FOR? */}
      {/* ======================================================== */}
      <section className="max-w-[1280px] mx-auto px-8 py-20" aria-label="Who Is It For">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest text-primary mb-3">
            07 — WHO IS IT FOR?
          </div>
          <h2 className="font-headings font-bold text-navy text-4xl">
            Built for counters, teams and talent.
          </h2>
        </div>

        {/* 2 Segment Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Panel 1: Google Review Solutions (6 Business Sectors) */}
          <div className="border border-border rounded-2xl p-6 bg-white shadow-xs">
            <div className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-md bg-ice flex items-center justify-center text-primary">
                <Store className="w-4 h-4" />
              </span>
              <span>Google Review Solutions</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BUSINESS_SECTORS.map((sector) => (
                <div
                  key={sector.id}
                  className="rounded-lg overflow-hidden relative aspect-[1/1.15] bg-soft group shadow-2xs"
                >
                  <img
                    src={sector.imageUrl}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent">
                    <div className="text-xs font-bold text-white leading-tight">
                      {sector.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2: Personal Business Cards (6 Personas) */}
          <div className="border border-border rounded-2xl p-6 bg-soft shadow-xs">
            <div className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-md bg-navy text-white flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </span>
              <span>Personal Business Cards</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INDIVIDUAL_PERSONAS.map((persona) => (
                <div
                  key={persona.id}
                  className="rounded-lg overflow-hidden relative aspect-[1/1.15] bg-white group shadow-2xs"
                >
                  <img
                    src={persona.imageUrl}
                    alt={persona.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent">
                    <div className="text-xs font-bold text-white leading-tight">
                      {persona.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
