# Project: RevoDigital Next.js Website

Authoritative Source: Banani Design Preview (`https://app.banani.co/preview/f0cDVHCexB-k`)
Flow ID: `f0cDVHCexB-k`
Technology Stack: Next.js (App Router), TypeScript, Tailwind CSS, Lucide React

---

## Architecture

The application is structured as a modern, high-performance Next.js application following clean modular component hierarchy:

```
src/
├── app/
│   ├── layout.tsx                # Global HTML wrapper, Inter + Space Grotesk fonts, SEO metadata
│   ├── page.tsx                  # Single-page vertical assembly of all 10 sections
│   └── globals.css               # Tailwind CSS styles & CSS custom property tokens
├── components/
│   ├── Navbar.tsx                # Sticky header, logo, nav links, WhatsApp pill, Quote CTA, mobile drawer
│   ├── Hero.tsx                  # Headline, rating, CTAs, 3D video studio scrubber, platform strip
│   ├── ProductsSection.tsx       # Section 02: Review Solutions card + Personal Business Cards card
│   ├── GalleryCustom.tsx         # Section 03: Explore Designs + Section 04: Customization Studio
│   ├── HowAiWho.tsx              # Section 05: How it works + Section 06: AI Review + Section 07: Who is it for
│   ├── FaqFooter.tsx             # Section 08: 9-item FAQ accordion + WhatsApp Support card
│   ├── EnquirySection.tsx        # Section 09: Lead capture & interactive WhatsApp enquiry generator
│   ├── Footer.tsx                # Section 10: 4-column directory, contacts, social links, copyright
│   └── ui/                       # Reusable micro-components (Button, Badge, Accordion, Modal)
├── context/
│   └── EnquiryContext.tsx        # Global client state for selected product variant & enquiry form
├── data/
│   └── content.ts                # Authoritative copy, products, gallery items, FAQ data, sectors
└── types/
    └── index.ts                  # Shared TypeScript interfaces & types
```

---

## Code Layout

- Source Code Root: `src/`
- Component Directory: `src/components/`
- Data & Content: `src/data/`
- Type Definitions: `src/types/`
- Test Infrastructure: `test/`
- Agent Metadata: `.agents/teamwork/`

---

## Feature Inventory

Every single feature discovered during the authoritative survey is cataloged and assigned to a specific milestone below.

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Header Brand Lockup | Dual overlapping ring mark + RevoDigital typography + tagline | M2 | Navbar.jsx |
| 2 | Section Anchor Navigation | Smooth scroll to `#products`, `#customization`, `#how-it-works`, `#faq`, `#enquiry` | M2 | Navbar.jsx |
| 3 | Quick WhatsApp Action | Direct contact action via WhatsApp button | M2 | Navbar.jsx |
| 4 | Mobile Navigation Drawer | Hamburger button toggling mobile slide-over drawer with backdrop blur | M2 | Navbar.jsx |
| 5 | Hero Value Proposition & Social Proof | 68px Space Grotesk H1, subtitle, rating (4.9/5), avatar stack, CTAs | M2 | Hero.jsx |
| 6 | Hero Scene Timeline Selector | 6-scene interactive tab bar (01-06) updating active frame | M2 | Hero.jsx |
| 7 | Hero Video Scrubber & Play State | Simulated video player with loop scrubber & play/pause toggle | M2 | Hero.jsx |
| 8 | Ecosystem Compatibility Strip | Works with every modern smartphone (iOS, Android, WhatsApp, etc.) | M2 | Hero.jsx |
| 9 | Review Solutions Family Card | White card with stand + salesperson sub-cards & staggered imagery | M3 | ProductsSection.jsx |
| 10 | Personal Business Cards Family Card | Dark navy card with radial glow, 6 feature pills, live profile popup | M3 | ProductsSection.jsx |
| 11 | Counter Stand Catalog Gallery | 3-column curated stand design grid (Cloud White, Midnight Navy, Sunset Pop) | M3 | GalleryCustom.jsx |
| 12 | Business Card Catalog Gallery | 4-column card design grid (Onyx Black, Arctic White, Ocean, Terra) | M3 | GalleryCustom.jsx |
| 13 | Customization Studio Comparison | Before/After comparison card (standard card vs branded Brew & Bean) | M3 | GalleryCustom.jsx |
| 14 | 3-Step Process Flow | Tap or scan -> Open experience -> Connect & review with workflow imagery | M4 | HowAiWho.jsx |
| 15 | AI Review Assist Demo | Dark section with interactive phone mockup, star rating, and AI draft editor | M4 | HowAiWho.jsx |
| 16 | Dual-Sector Audience Showcase | 6 business sectors (Restaurants, Clinics, etc.) vs 6 personal roles | M4 | HowAiWho.jsx |
| 17 | Expandable FAQ Accordion | 9 Q&As with expand/collapse states (default first item open) | M5 | FaqFooter.jsx |
| 18 | Universal Enquiry Form & WhatsApp Link | Reactive lead form, product variant auto-selection, WhatsApp URL builder | M5 | FaqFooter.jsx |
| 19 | Global 4-Column Footer | Products, company, contact info, social links, copyright bar | M5 | FaqFooter.jsx |
| 20 | Complete E2E Test Suite | Automated test harness covering Tiers 1-4 with 100% pass rate | M6 | Testing Track |
| 21 | Adversarial Coverage Hardening | Tier 5 white-box coverage analysis and adversarial test cases | M6 | Challenger Loop |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Foundation & Design System | Next.js 16, TypeScript, Tailwind CSS tokens, fonts, shared types, content constants | none | DONE |
| M2 | Navbar & Hero Experience | Brand header, mobile drawer, H1, social proof, 3D video mockup scrubber, platform ribbon | M1 | DONE |
| M3 | Products & Gallery Showcase | Review Solutions, Personal Cards, Stand & Card Galleries, Before/After Customization | M1, M2 | DONE |
| M4 | How It Works, AI Review & Audience | 3-step process, AI review drafting phone simulator, 12 audience sector/persona cards | M1, M3 | DONE |
| M5 | FAQ, Enquiry Form & Footer | 9 FAQ accordions, reactive enquiry form with WhatsApp generator, 4-col footer, page integration | M1, M4 | DONE |
| M6 | E2E Test Verification & Hardening | 100% pass on Tiers 1-4 test suite, followed by Tier 5 adversarial hardening | M1-M5, Test Track | DONE |

---

## Interface Contracts

### `src/types/index.ts`
```typescript
export type ProductCategory = 'Review Solutions' | 'Business Cards';

export interface ProductVariant {
  id: string;
  name: string;
  category: ProductCategory;
  subtitle: string;
  imageUrl: string;
  tag?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface AudienceSector {
  id: string;
  title: string;
  imageUrl: string;
  category: 'business' | 'individual';
}

export interface EnquiryFormData {
  fullName: string;
  whatsappNumber: string;
  businessName: string;
  quantity: number;
  category: ProductCategory;
  selectedVariant: string;
  additionalRequirements: string;
}
```

### `EnquiryContext`
- `selectedVariant: string`: Current product variant selected across cards/gallery.
- `setSelectedVariant: (variant: string, category?: ProductCategory) => void`: Updates selected variant and triggers smooth scroll to `#enquiry`.
- `selectedCategory: ProductCategory`: Active product category tab.
- `setSelectedCategory: (category: ProductCategory) => void`.

---

## Design System Tokens Reference

- `--color-background`: `#FFFFFF`
- `--color-foreground`: `#14213D`
- `--color-navy`: `#14213D`
- `--color-navy-light`: `#1E2F57`
- `--color-primary`: `#2563EB`
- `--color-accent`: `#FF8A3D`
- `--color-soft`: `#F7F9FC`
- `--color-ice`: `#EAF1FE`
- `--color-skyline`: `#D8E6FF`
- `--color-border`: `#E6EAF2`
- `--color-slate-text`: `#526078`
- `--color-whatsapp`: `#25D366`
- Fonts: `Space Grotesk` (headings), `Inter` (body)

