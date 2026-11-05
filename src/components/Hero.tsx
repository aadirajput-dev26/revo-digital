"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDownRight,
  Phone,
  Zap,
  ShieldCheck,
  QrCode,
  Play,
  Pause,
  Clapperboard,
  Check,
  Star,
  Wifi,
} from "lucide-react";
import { HERO_CONTENT, HERO_TIMELINE_STEPS, HERO_PLATFORMS, COMPANY_INFO } from "@/data/content";
import { HeroSectionProps } from "@/types";

export default function Hero({ onExploreClick, onContactClick }: HeroSectionProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // 0-based: index 2 = "03 · Tap"
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-advance loop when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % HERO_TIMELINE_STEPS.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeStep = HERO_TIMELINE_STEPS[activeStepIndex];

  // Calculate progress percentage based on active step (1 to 6)
  const progressPercent = Math.round(((activeStepIndex + 1) / HERO_TIMELINE_STEPS.length) * 100);

  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById("products");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById("enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full bg-background relative overflow-hidden" aria-label="Hero Section">
      {/* Soft background decor */}
      <div className="absolute top-0 left-0 right-0 h-[480px] bg-soft rounded-b-2xl pointer-events-none" />
      <div className="absolute top-[-80px] right-[-80px] w-[520px] h-[520px] rounded-full bg-ice opacity-80 pointer-events-none blur-2xl" />

      {/* Main Hero Container */}
      <div className="relative max-w-[1280px] mx-auto px-8 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Value Proposition & Proof */}
        <div className="flex flex-col gap-6">
          {/* Pill Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-navy text-white text-xs font-semibold rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
              <span>{HERO_CONTENT.categoryBadge}</span>
            </div>
            <div className="text-xs font-medium text-slate-text border border-border bg-background rounded-full px-3 py-1.5 shadow-xs">
              <span>{HERO_CONTENT.trustBadge}</span>
            </div>
          </div>

          {/* H1 Headline */}
          <h1 className="font-headings font-bold text-navy leading-[1.02] tracking-tight text-5xl sm:text-6xl">
            {HERO_CONTENT.headline}
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-text leading-relaxed max-w-[480px]">
            {HERO_CONTENT.lead}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <button
              type="button"
              onClick={handleExplore}
              className="bg-primary text-primary-foreground text-sm font-semibold rounded-md px-7 py-3.5 flex items-center gap-2 hover:brightness-105 transition-all shadow-sm cursor-pointer"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleContact}
              className="bg-background border border-border text-navy text-sm font-semibold rounded-md px-7 py-3.5 flex items-center gap-2 hover:bg-soft transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-navy" />
              <span>{HERO_CONTENT.secondaryCta}</span>
            </button>
          </div>

          {/* Trust Rating & Value Props */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-2 pt-2 border-t border-border/40">
            {/* Rating with Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-skyline border-2 border-white flex items-center justify-center text-xs font-bold text-navy shadow-xs">
                  R
                </div>
                <div className="w-8 h-8 rounded-full bg-navy border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-xs">
                  S
                </div>
                <div className="w-8 h-8 rounded-full bg-accent border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-xs">
                  M
                </div>
              </div>
              <div className="text-xs leading-tight">
                <span className="font-bold text-navy text-sm">{COMPANY_INFO.rating}</span>
                <br />
                <span className="text-slate-text">{COMPANY_INFO.ratingLabel}</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-border" />

            {/* 3 Value Props */}
            <div className="flex items-center gap-5 sm:gap-6 text-xs text-slate-text">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span className="font-semibold text-navy">Tap &amp; Scan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-success shrink-0" />
                <span className="font-semibold text-navy">No app needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-accent shrink-0" />
                <span className="font-semibold text-navy">QR backup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Video Studio Mockup Player */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-gradient-to-b from-ice to-background border border-border rounded-2xl p-4 shadow-[0_32px_80px_-24px_rgba(37,99,235,0.35)] relative">
            {/* Window Header */}
            <div className="bg-navy rounded-xl px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white text-xs font-semibold tracking-wide">
                  {HERO_CONTENT.studioHeader}
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              </div>
            </div>

            {/* Interactive Viewport */}
            <div className="relative mt-4 rounded-xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center group">
              <img
                src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80"
                alt="RevoDigital 3D Hero Animation Scene"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />

              {/* Viewport Overlay Details for Scene */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30 pointer-events-none" />

              {/* Floating Top Left Loop Badge */}
              <div className="absolute top-4 left-4 bg-navy/90 text-white text-xs font-medium rounded-full px-3 py-1.5 flex items-center gap-1.5 backdrop-blur-xs">
                <Clapperboard className="w-3.5 h-3.5 text-accent" />
                <span>{HERO_CONTENT.loopBadge}</span>
              </div>

              {/* Floating Top Right NFC Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center border-4 border-white/60 shadow-lg">
                <Wifi className="w-5 h-5 text-white rotate-90" />
              </div>

              {/* Center Scene State Label */}
              <div className="absolute inset-x-8 text-center pointer-events-none">
                <div className="inline-block bg-navy/85 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white shadow-xl">
                  <div className="text-xs uppercase tracking-widest text-skyline font-bold">
                    Interactive Scene
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    {activeStep.label}
                  </div>
                </div>
              </div>

              {/* Bottom Scrubber Bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-lg px-4 py-3 flex items-center justify-between border border-border backdrop-blur-md shadow-md">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
                    aria-label={isPlaying ? "Pause timeline preview" : "Play timeline preview"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    )}
                  </button>
                  <div>
                    <div className="text-xs font-bold text-navy">
                      Tap interaction — Scene {activeStep.id}/06
                    </div>
                    <div className="w-[180px] sm:w-[220px] h-1.5 bg-muted rounded-full mt-1.5 relative overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-primary border border-skyline bg-ice rounded-md px-2.5 py-1.5 hidden sm:block">
                  {HERO_CONTENT.replaceVideoTag}
                </div>
              </div>
            </div>

            {/* 6-Step Scene Timeline Selector */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
              {HERO_TIMELINE_STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`rounded-md px-2 py-2 text-center text-xs font-semibold border transition-all cursor-pointer ${
                      isActive
                        ? "bg-navy text-white border-navy shadow-sm"
                        : "bg-white text-slate-text border-border hover:border-slate-300 hover:text-navy"
                    }`}
                  >
                    {step.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Floating Contextual Chip 1 (Bottom Left): Reviews Proof */}
          <div className="absolute -left-3 sm:-left-6 bottom-10 bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_16px_40px_-16px_rgba(20,33,61,0.3)] z-10 animate-bounce duration-1000">
            <div className="w-10 h-10 rounded-lg bg-ice flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-accent fill-accent" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy">
                {COMPANY_INFO.reviewsProof.count}
              </div>
              <div className="text-xs text-slate-text">
                {COMPANY_INFO.reviewsProof.sub}
              </div>
            </div>
          </div>

          {/* Floating Contextual Chip 2 (Top Right): 1-Tap Save Proof */}
          <div className="absolute -right-2 sm:-right-3 top-10 bg-white border border-border rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-[0_16px_40px_-16px_rgba(20,33,61,0.3)] z-10">
            <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-success" />
            </div>
            <div className="text-xs font-bold text-navy">
              {COMPANY_INFO.oneTapProof}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Smartphone Compatibility Ribbon */}
      <div className="relative max-w-[1280px] mx-auto px-8 pb-8">
        <div className="border border-border rounded-xl bg-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs">
          <span className="text-xs font-semibold tracking-widest text-slate-text text-center md:text-left">
            WORKS WITH EVERY MODERN SMARTPHONE — NO APP NEEDED
          </span>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-sm font-bold text-navy">
            {HERO_PLATFORMS.map((platform) => (
              <span key={platform} className="hover:text-primary transition-colors">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
