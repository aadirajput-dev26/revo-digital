"use client";

import React, { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  Check,
  ChevronDown,
  Mail,
  Phone,
} from "lucide-react";
import { FAQ_ITEMS, ENQUIRY_CONTENT, FOOTER_CONTENT, COMPANY_INFO } from "@/data/content";
import { useEnquiry } from "@/context/EnquiryContext";
import { ProductCategory, EnquiryFormData } from "@/types";

export default function FaqFooter() {
  const { selectedVariant, selectedCategory, setSelectedCategory } = useEnquiry();

  // FAQ Accordion State (Item 0 open by default)
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(["faq-1"]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Enquiry Form State
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: ENQUIRY_CONTENT.defaultFormValues.fullName,
    whatsappNumber: ENQUIRY_CONTENT.defaultFormValues.whatsappNumber,
    businessName: ENQUIRY_CONTENT.defaultFormValues.businessName,
    quantity: ENQUIRY_CONTENT.defaultFormValues.quantity,
    category: selectedCategory,
    selectedVariant: selectedVariant,
    additionalRequirements: ENQUIRY_CONTENT.defaultFormValues.additionalRequirements,
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: keyof EnquiryFormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleCategorySwitch = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setFormData((prev) => ({ ...prev, category: cat }));
  };

  const handleDirectWhatsAppChat = () => {
    const text = encodeURIComponent(
      "Hi RevoDigital team, I have a quick question about your smart review stands and contactless cards."
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name";
    }
    if (!formData.whatsappNumber.trim()) {
      errors.whatsappNumber = "Please enter your WhatsApp number";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Build formatted message
    const formattedMessage = [
      `*New Product Enquiry — RevoDigital*`,
      `---------------------------------`,
      `*Selected Variant:* ${selectedVariant || formData.selectedVariant}`,
      `*Category:* ${formData.category || selectedCategory}`,
      `*Quantity:* ${formData.quantity}`,
      `*Full Name:* ${formData.fullName}`,
      `*WhatsApp:* ${formData.whatsappNumber}`,
      `*Business Name:* ${formData.businessName || "Not provided"}`,
      `*Requirements:* ${formData.additionalRequirements || "None"}`,
    ].join("\n");

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* SECTION 08: FAQ */}
      {/* ======================================================== */}
      <section id="faq" className="max-w-[860px] mx-auto px-8 pb-20 pt-10" aria-label="Frequently Asked Questions">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest text-primary mb-3">
            08 — FAQ
          </div>
          <h2 className="font-headings font-bold text-navy text-4xl">
            Everything, answered.
          </h2>
        </div>

        {/* 9 Accordion Items */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-primary bg-ice/40 shadow-xs" : "border-border bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-navy pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-primary text-white" : "bg-soft text-navy"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-text leading-relaxed border-t border-primary/10 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Callout Card */}
        <div className="mt-8 bg-navy rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shrink-0 shadow-xs">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Still curious? Chat with us on WhatsApp.
              </div>
              <div className="text-xs text-white/60">
                Replies within minutes, 10am–8pm IST
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDirectWhatsAppChat}
            className="bg-accent text-white text-sm font-semibold rounded-md px-6 py-3 hover:brightness-105 transition-all cursor-pointer shadow-xs shrink-0"
          >
            Chat Now
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 09: LEAD CAPTURE & ENQUIRY FORM */}
      {/* ======================================================== */}
      <section id="enquiry" className="w-full bg-soft border-t border-border py-16" aria-label="Enquiry Form">
        <div className="max-w-[1080px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Info Column */}
          <div>
            <div className="text-xs font-bold tracking-widest text-primary mb-3">
              {ENQUIRY_CONTENT.eyebrow}
            </div>
            <h3 className="font-headings font-bold text-navy text-3xl leading-tight">
              {ENQUIRY_CONTENT.title}
            </h3>
            <div className="flex flex-col gap-3 mt-6 text-sm text-slate-text">
              {ENQUIRY_CONTENT.checkpoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-ice flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Reactive Form Card */}
          <div className="bg-white rounded-2xl border border-border p-7 shadow-[0_24px_60px_-20px_rgba(20,33,61,0.25)]">
            <form onSubmit={handleEnquirySubmit}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div className="text-base font-bold text-navy font-headings">
                  {ENQUIRY_CONTENT.cardTitle}
                </div>
                <div className="text-xs font-semibold text-primary bg-ice rounded-full px-3 py-1 shadow-2xs">
                  {selectedVariant || formData.selectedVariant}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-navy mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full border rounded-md px-3 py-2.5 text-sm text-navy bg-soft focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary ${
                      formErrors.fullName ? "border-red-500" : "border-border"
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsappNumber" className="block text-xs font-semibold text-navy mb-1.5">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="whatsappNumber"
                    type="text"
                    value={formData.whatsappNumber}
                    onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                    placeholder="e.g. +91 98200 12345"
                    className={`w-full border rounded-md px-3 py-2.5 text-sm text-navy bg-soft focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary ${
                      formErrors.whatsappNumber ? "border-red-500" : "border-border"
                    }`}
                  />
                  {formErrors.whatsappNumber && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.whatsappNumber}</p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-xs font-semibold text-navy mb-1.5">
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    placeholder="e.g. Brew & Bean"
                    className="w-full border border-border rounded-md px-3 py-2.5 text-sm text-navy bg-soft focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-xs font-semibold text-navy mb-1.5">
                    Quantity
                  </label>
                  <div className="relative">
                    <select
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange("quantity", Number(e.target.value))}
                      className="w-full appearance-none border border-border rounded-md px-3 py-2.5 text-sm text-navy font-semibold bg-white focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                    >
                      <option value={1}>1 piece</option>
                      <option value={2}>2 pieces</option>
                      <option value={5}>5 pieces</option>
                      <option value={10}>10 pieces</option>
                      <option value={25}>25+ pieces (Bulk)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-text absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Product Category Tabs */}
                <div className="sm:col-span-2">
                  <div className="text-xs font-semibold text-navy mb-1.5">
                    Product Category
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleCategorySwitch("Review Solutions")}
                      className={`text-xs font-bold rounded-full px-3.5 py-1.5 transition-colors cursor-pointer ${
                        (selectedCategory || formData.category) === "Review Solutions"
                          ? "bg-navy text-white shadow-xs"
                          : "border border-border text-slate-text hover:bg-slate-50"
                      }`}
                    >
                      Review Solutions
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCategorySwitch("Business Cards")}
                      className={`text-xs font-bold rounded-full px-3.5 py-1.5 transition-colors cursor-pointer ${
                        (selectedCategory || formData.category) === "Business Cards"
                          ? "bg-navy text-white shadow-xs"
                          : "border border-border text-slate-text hover:bg-slate-50"
                      }`}
                    >
                      Business Cards
                    </button>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="sm:col-span-2">
                  <label htmlFor="requirements" className="block text-xs font-semibold text-navy mb-1.5">
                    Additional Requirements
                  </label>
                  <input
                    id="requirements"
                    type="text"
                    value={formData.additionalRequirements}
                    onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                    placeholder="e.g. Need logo + menu QR on the stand…"
                    className="w-full border border-border rounded-md px-3 py-2.5 text-sm text-navy bg-soft focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full mt-5 bg-[#25D366] text-white text-sm font-bold rounded-md py-3.5 flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{ENQUIRY_CONTENT.submitCta}</span>
              </button>

              <div className="text-center text-xs text-slate-text mt-2.5">
                {ENQUIRY_CONTENT.helperText}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 10: GLOBAL 4-COLUMN FOOTER */}
      {/* ======================================================== */}
      <footer id="footer" className="w-full bg-navy text-white" aria-label="Footer">
        <div className="max-w-[1280px] mx-auto px-8 pt-14 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
            {/* Column 1: Brand lockup & socials */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center relative overflow-hidden shadow-xs">
                  <div className="w-4 h-4 rounded-full border-[2.5px] border-navy" />
                  <div className="absolute w-4 h-4 rounded-full border-[2.5px] border-accent translate-x-[6px]" />
                </div>
                <span className="font-headings font-bold text-white text-lg">
                  {COMPANY_INFO.name}
                </span>
              </div>
              <div className="text-sm text-white/60">
                {COMPANY_INFO.tagline}
              </div>
              {/* Social Icons */}
              <div className="flex gap-2 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                      <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15l5-3l-5-3z" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Products */}
            <div>
              <div className="text-xs font-bold tracking-widest text-white/50 mb-4">
                {FOOTER_CONTENT.columns.products.title}
              </div>
              <div className="flex flex-col gap-2.5 text-sm text-white/80">
                {FOOTER_CONTENT.columns.products.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Company */}
            <div>
              <div className="text-xs font-bold tracking-widest text-white/50 mb-4">
                {FOOTER_CONTENT.columns.company.title}
              </div>
              <div className="flex flex-col gap-2.5 text-sm text-white/80">
                {FOOTER_CONTENT.columns.company.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Contact */}
            <div>
              <div className="text-xs font-bold tracking-widest text-white/50 mb-4">
                {FOOTER_CONTENT.columns.contact.title}
              </div>
              <div className="flex flex-col gap-2.5 text-sm text-white/80">
                <a
                  href={`mailto:${FOOTER_CONTENT.columns.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{FOOTER_CONTENT.columns.contact.email}</span>
                </a>
                <a
                  href={`tel:${FOOTER_CONTENT.columns.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{FOOTER_CONTENT.columns.contact.phone}</span>
                </a>
              </div>
              <button
                type="button"
                onClick={handleDirectWhatsAppChat}
                className="mt-4 bg-accent text-white text-sm font-semibold rounded-md px-5 py-2.5 flex items-center gap-2 w-fit hover:brightness-105 transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{FOOTER_CONTENT.columns.contact.cta}</span>
              </button>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-5 text-xs text-white/50 gap-2">
            <span>{COMPANY_INFO.footerCopyright}</span>
            <span>{COMPANY_INFO.footerTagline}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
