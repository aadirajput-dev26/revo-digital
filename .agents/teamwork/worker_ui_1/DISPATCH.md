## 2026-11-05T07:38:12Z

# Dispatch: worker_ui_1 (Full UI Component Implementation & Page Integration)

## MANDATORY INTEGRITY WARNING
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Objective
Implement all visible UI components and screens for RevoDigital from the authoritative Banani design preview (`https://app.banani.co/preview/f0cDVHCexB-k`) as modular Next.js components with TypeScript and Tailwind CSS v4, and assemble them in `src/app/page.tsx`.

## Scope & Components to Build
1. `src/components/Navbar.tsx`:
   - Sticky header with semi-transparent backdrop blur (`bg-background/95 backdrop-blur-md border-b border-border`).
   - Geometric Brand Logo (dual concentric overlapping rings mark in navy box with orange accent).
   - Brand typography: "RevoDigital" (`font-headings font-bold text-lg text-navy`) + "Make Every Connection Count." (`text-xs text-slate-text`).
   - Navigation links: "Home", "Products", "Customization", "How It Works", "FAQ" with smooth scroll anchors.
   - Right action group: WhatsApp pill button with icon + "Get a Quote" primary CTA (`bg-accent text-white hover:brightness-105`).
   - Mobile hamburger button and responsive slide-over drawer with backdrop blur.

2. `src/components/Hero.tsx`:
   - 2-column layout (`max-w-[1280px] mx-auto px-8 pt-16 pb-12`).
   - Left column:
     - Pill badges row: Category pill ("Smart Contactless Experiences" with pulsing orange dot) + Trust pill ("Trusted by 2,400+ businesses").
     - H1 Headline: `font-headings font-bold text-navy text-6xl leading-[1.02] tracking-tight`: "Make Every Connection Count."
     - Description: "Smarter ways to collect customer reviews and share your professional identity. Discover contactless experiences designed for modern businesses."
     - Action buttons: "Explore Products" (`bg-primary text-white`) and "Get in Touch" (`border border-border text-navy`).
     - Trust row: Stacked customer rating avatars, "4.9/5", divider, 3 value props ("Tap & Scan", "No app needed", "QR backup" with icons).
   - Right column:
     - REVO STUDIO mockup card with navy header bar ("REVO STUDIO — HERO ANIMATION • 00:06 LOOP", 3 window dots).
     - 16:10 scene viewport with floating badges ("6–7s seamless loop", NFC icon) and scrubber bar (play/pause toggle, progress track).
     - 6-step interactive timeline buttons (`01 · Card floats`, `02 · Phone enters`, `03 · Tap`, `04 · Blue pulse`, `05 · Review UI`, `06 · Pull back`). Clicking each step updates the active step styling and scene description.
     - Floating review chip: "+128 Google reviews / Café Aroma · last 30 days" with gold star.
     - Floating save chip: "Profile saved in 1 tap" with green checkmark.
   - Bottom compatibility ribbon:
     - "WORKS WITH EVERY MODERN SMARTPHONE — NO APP NEEDED"
     - Platform badges: iOS, Android, Google, WhatsApp, Instagram, LinkedIn.

3. `src/components/ProductsSection.tsx`:
   - Header: `02 — OUR PRODUCTS`, "Two product families. One seamless experience.", subtitle.
   - Card 1 (Google Review Solutions):
     - White card, tag `PRODUCT 01`, "Make Sharing Experiences Effortless."
     - 2 sub-product cards: Smart Review Stand (reception desks) & Salesperson Review Card (point of billing).
     - Staggered imagery display on right in `bg-navy-light`.
     - "Explore Designs" and "Enquire Now" action buttons.
   - Card 2 (Personal Business Cards):
     - Dark navy card (`bg-navy`), tag `PRODUCT 02` (`bg-accent`), "Your Professional Identity. One Simple Tap."
     - 6 feature pills (Photo + designation, Phone & WhatsApp, Email, Social links, Save contact, Tap + QR).
     - Ambient radial primary glow.
     - Luxury business card mockup with live profile preview popup (Aarav Kapoor · Consultant).
     - "Explore Designs" and "View Live Profile" action buttons.

4. `src/components/GalleryCustom.tsx`:
   - Section 03 (Explore Designs):
     - Header: `03 — EXPLORE DESIGNS`, "A design for every brand personality."
     - 3-Column Counter Stand Catalog:
       - Cloud White Stand ("Clean minimal · QR + Tap")
       - Midnight Navy Stand ("Bold counter presence")
       - Sunset Pop Stand ("Orange accent · hospitality")
       - Each has "Enquire" button that calls `setSelectedVariant(stand.name, 'Review Solutions')`.
     - 4-Column Business Card Catalog:
       - Onyx Black, Arctic White, Ocean Gradient, Terra Orange.
       - Each has "Enquire Now" link that calls `setSelectedVariant(card.name, 'Business Cards')`.
   - Section 04 (Customization Studio):
     - Soft container with `04 — CUSTOMIZATION`, "Your Card. Your Identity. Your Design."
     - 6 feature grid (Logo personalization, Business branding, Custom colors, Typography & layouts, Personalized QR, Studio design).
     - Before & After split comparison card:
       - Before: Standard generic white card.
       - After: Branded for Brew & Bean in dark navy with branded stand and color swatches.
     - "Explore Existing Designs" and "Request Custom Design" buttons.

5. `src/components/HowAiWho.tsx`:
   - Section 05 (How It Works):
     - Header: `05 — HOW IT WORKS`, "Effortless by design. No tech skills needed."
     - 3-step process cards with numbers `01`, `02`, `03` in `text-skyline`, icons, titles, and connecting arrow badges.
     - 2 real-world imagery cards: "Review flow · at the counter" and "Networking flow · one tap share".
   - Section 06 (AI Review Assist · Included):
     - Full-width dark navy section (`bg-navy py-20 text-white`).
     - Badge: `sparkles` icon + "06 — AI REVIEW ASSIST · INCLUDED".
     - Headline: "Make Sharing Genuine Experiences Easier."
     - 3-step numbered guide (Customer shares details -> AI drafts review -> Customer edits and posts).
     - Ethical AI disclaimer with shield-check icon.
     - Interactive smartphone review drafting simulator:
       - Phone chassis with star rating selector (1-5 interactive stars).
       - Customer note box.
       - AI drafted review container with sparkles badge.
       - Editable toggle: clicking "Edit" turns draft into editable textarea; clicking "Done" saves it.
       - "Continue to Google" button.
   - Section 07 (Who Is It For?):
     - Header: `07 — WHO IS IT FOR?`, "Built for counters, teams and talent."
     - Dual-sector showcase:
       - Panel 1: Google Review Solutions (6 business sectors: Restaurants, Clinics, Salons, Retail, Hotels, Auto Showrooms).
       - Panel 2: Personal Business Cards (6 individual personas: Entrepreneurs, Freelancers, Consultants, Sales Pros, Business Owners, Creators).

6. `src/components/FaqFooter.tsx`:
   - Section 08 (FAQ):
     - Header: `08 — FAQ`, "Everything, answered."
     - 9 Accordion items with animated expand/collapse (first item open by default: `bg-ice/40 border-primary`, `minus` icon; collapsed items have `plus` icon).
     - WhatsApp Support Callout card: "Still curious? Chat with us on WhatsApp." with "Chat Now" button.
   - Section 09 (Lead Capture & Enquiry Form):
     - Tag: `ENQUIRY · ONE FORM, EVERY PRODUCT`, "Tell us what you need. We handle the rest on WhatsApp."
     - 3 value checkpoints.
     - Reactive Form Card:
       - Product variant badge (auto-updates when user clicks Enquire on any stand or card).
       - Category selector pills ("Review Solutions" / "Business Cards").
       - Inputs: Full Name, WhatsApp Number, Business Name, Quantity selector (1, 2, 5, 10, 25+), Requirements textarea.
       - "Continue to WhatsApp" CTA button in `#25D366` (WhatsApp Green): validates inputs and opens `https://wa.me/919876543210?text=...` with formatted enquiry details.
   - Section 10 (Global Footer):
     - 4-column directory: Brand lockup & social icons (Instagram, LinkedIn, YouTube, Facebook), Products, Company, Contact info.
     - Bottom copyright bar: "© 2026 RevoDigital. All rights reserved."

7. `src/app/page.tsx`:
   - Mount all sections in vertical order.
   - Ensure clean layout, responsive spacing, and smooth scrolling for all anchor links.

## Verification
- Run `npx tsc --noEmit` and ensure 0 errors.
- Run `npm run build` and ensure clean compilation with exit code 0.
- Verify all interactive states (timeline buttons, play toggle, star ratings, edit draft, FAQ accordion, enquiry form inputs and WhatsApp link generation).

## Output Requirements
- Write your progress to `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\worker_ui_1\progress.md`
- Write your handoff to `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\worker_ui_1\handoff.md`
- Send completion message to parent when done.
