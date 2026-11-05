"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowRight, Menu, X } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/data/content";
import { NavbarProps } from "@/types";

export default function Navbar({ onQuoteClick, activeSection = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileMenuOpen(false);
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const enquiryEl = document.getElementById("enquiry");
      if (enquiryEl) {
        enquiryEl.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hi RevoDigital, I'd like to know more about your contactless cards and stands.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <header className="w-full bg-background/95 border-b border-border sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, "#")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
            <div className="w-5 h-5 rounded-full border-[3px] border-background" />
            <div className="absolute w-5 h-5 rounded-full border-[3px] border-accent translate-x-[7px]" />
          </div>
          <div className="leading-none">
            <div className="font-headings font-bold text-lg text-navy tracking-tight">
              {COMPANY_INFO.name}
            </div>
            <div className="text-xs text-slate-text mt-0.5">
              {COMPANY_INFO.tagline}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isHome = link.href === "#";
            const isActive = isHome ? activeSection === "home" : activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-navy hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Group */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 text-sm font-medium text-navy border border-border rounded-md px-3 py-2 hover:bg-soft transition-colors cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-navy" />
            <span>WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={handleQuoteClick}
            className="bg-accent text-accent-foreground text-sm font-semibold rounded-md px-5 py-2.5 flex items-center gap-2 hover:brightness-105 transition-all shadow-sm cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="p-2 text-navy border border-border rounded-md hover:bg-soft"
            aria-label="WhatsApp quick contact"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-navy border border-border rounded-md hover:bg-soft transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-lg px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-medium text-navy hover:text-primary py-2 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 text-sm font-medium text-navy border border-border rounded-md py-3 hover:bg-soft"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us ({COMPANY_INFO.whatsappDisplay})</span>
            </button>
            <button
              type="button"
              onClick={handleQuoteClick}
              className="bg-accent text-accent-foreground text-sm font-semibold rounded-md py-3 flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
