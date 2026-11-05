# RevoDigital Website — Design Tokens, Content Specification & Architecture

Authoritative specification extracted directly from the verified design preview at:
`https://app.banani.co/preview/f0cDVHCexB-k`
Project Name: **RevoDigital Website**
Desktop Target Frame: **1440px width** (Canvas container: `max-w-[1280px]`)

---

## 1. Visual Design System & Design Tokens

### 1.1 Color Palette

| Token Name | Hex Code | RGB / HSL | Tailwind Class / Role | Description & Usage |
|---|---|---|---|---|
| `--color-background` | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-background`, `bg-white` | Page base background, card backgrounds |
| `--color-foreground` | `#14213D` | `rgb(20, 33, 61)` | `text-foreground`, `text-navy` | Primary high-contrast text color |
| `--color-navy` | `#14213D` | `rgb(20, 33, 61)` | `bg-navy`, `text-navy`, `border-navy` | Deep Navy brand signature; header text, primary badges, dark section backgrounds, footer |
| `--color-navy-light` | `#1E2F57` | `rgb(30, 47, 87)` | `bg-navy-light`, `border-navy-light` | Medium Navy; Product 1 mockup container, dark borders |
| `--color-primary` | `#2563EB` | `rgb(37, 99, 235)` | `bg-primary`, `text-primary`, `border-primary` | Royal Blue accent; active nav links, primary buttons, step icons, active card borders |
| `--color-primary-foreground` | `#FFFFFF` | `rgb(255, 255, 255)` | `text-primary-foreground` | Contrast text on primary blue |
| `--color-accent` | `#FF8A3D` | `rgb(255, 138, 61)` | `bg-accent`, `text-accent`, `border-accent` | Vibrant Tangerine Orange; CTA buttons ("Get a Quote", "Request Custom Design"), notification dots, step badges |
| `--color-accent-foreground` | `#FFFFFF` | `rgb(255, 255, 255)` | `text-accent-foreground` | Contrast text on accent orange |
| `--color-soft` | `#F7F9FC` | `rgb(247, 249, 252)` | `bg-soft` | Soft cool off-white surface; Product section background, step cards, inputs, secondary panels |
| `--color-ice` | `#EAF1FE` | `rgb(234, 241, 254)` | `bg-ice`, `border-ice` | Pale ice-blue tint; hero ambient background orb, badge backgrounds, active accordion background |
| `--color-skyline` | `#D8E6FF` | `rgb(216, 230, 255)` | `bg-skyline`, `border-skyline`, `text-skyline` | Sky blue accent; card borders, step number typography ("01", "02", "03"), avatar pills |
| `--color-border` | `#E6EAF2` | `rgb(230, 234, 242)` | `border-border` | Standard UI divider lines and card border strokes |
| `--color-input` | `#F7F9FC` | `rgb(247, 249, 252)` | `bg-input` | Form input element background |
| `--color-muted` | `#EEF2F9` | `rgb(238, 242, 249)` | `bg-muted` | Progress track background, subtle separators |
| `--color-muted-foreground` | `#526078` | `rgb(82, 96, 120)` | `text-muted-foreground` | Secondary copy and metadata labels |
| `--color-slate-text` | `#526078` | `rgb(82, 96, 120)` | `text-slate-text` | Body paragraph text, secondary subtitles, microcopy |
| `--color-success` | `#16A34A` | `rgb(22, 163, 74)` | `text-success`, `bg-success/15` | Positive indicators, checkmarks |
| `--color-whatsapp` | `#25D366` | `rgb(37, 211, 102)` | `bg-[#25D366]` | Official WhatsApp brand color for enquiry form submit CTA |

### 1.2 Typography System

- **Headings Font Family**: `Space Grotesk`, sans-serif (`font-headings`)
  - Google Fonts URL: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap`
  - Used on: All `h1`, `h2`, `h3`, brand wordmarks, step titles, section numbers, card titles
- **Body Font Family**: `Inter`, sans-serif (`font-body`)
  - Web font: `https://rsms.me/inter/inter.css` or Google Fonts `Inter`
  - Used on: Paragraphs, navigation items, buttons, input fields, badges, footers

#### Type Scale & Hierarchy

| Scale Token | Font Size | Line Height | Letter Spacing | Weight | Typical Application |
|---|---|---|---|---|---|
| `--text-6xl` | `68px` (4.25rem) | `1.02` (tight) | `-0.025em` (`tracking-tight`) | Bold (`700`) | Hero headline: "Make Every Connection Count." |
| `--text-5xl` | `52px` (3.25rem) | `1.0` | Normal | Bold (`700`) | Process step numeric markers: "01", "02", "03" |
| `--text-4xl` | `36px` (2.25rem) | `1.15 - 1.25` | `-0.025em` | Bold (`700`) | Section titles (H2) |
| `--text-3xl` | `30px` (1.875rem) | `1.2` | `-0.02em` | Bold (`700`) | Major subheadings, product feature headers (H3) |
| `--text-2xl` | `24px` (1.5rem) | `1.3` | Normal | Bold (`700`) | Card main titles |
| `--text-xl` | `20px` (1.25rem) | `1.4` | Normal | Bold / Semibold | Highlight callouts, modals |
| `--text-lg` | `18px` (1.125rem) | `1.625` (`leading-relaxed`) | Normal | Normal / Bold | Hero lead paragraph, step card headings, brand title |
| `--text-base` | `16px` (1.0rem) | `1.5` | Normal | Normal (`400`) / Medium (`500`) | Standard body paragraphs, descriptions, input values |
| `--text-sm` | `14px` (0.875rem) | `1.4` | Normal | Medium (`500`) / Semibold (`600`) | Button labels, navigation items, FAQ questions, feature bullet text |
| `--text-xs` | `12px` (0.75rem) | `1.33` | `0.1em` (`tracking-widest`) | Bold / Semibold | Section eyebrow labels (`02 — OUR PRODUCTS`), badges, metadata, timestamps |

### 1.3 Spacing, Borders, and Radii

- **Corner Radii**:
  - `--radius-sm`: `4px`
  - `--radius-md`: `8px` (Buttons, small cards, input elements)
  - `--radius-lg`: `12px` (Cards, sub-product containers)
  - `--radius-xl`: `24px` (Large cards, feature containers)
  - `--radius-2xl`: `32px` (Section banners, smartphone frame mockups)
  - Rounded Full: `9999px` (Pills, badges, avatars)

- **Container Widths**:
  - Desktop Screen Width: `1440px`
  - Main Layout Container: `max-w-[1280px] mx-auto px-8`
  - FAQ Content Container: `max-w-[860px] mx-auto px-8`
  - Enquiry Section Container: `max-w-[1080px] mx-auto px-8`
  - Header & Section Padding: `py-20` (80px vertical section spacing), `py-16` (64px)

- **Shadows**:
  - Hero 3D Video Glow: `shadow-[0_32px_80px_-24px_rgba(37,99,235,0.35)]`
  - Floating Hero Review Pill: `shadow-[0_16px_40px_-16px_rgba(20,33,61,0.3)]`
  - Enquiry Form Card: `shadow-[0_24px_60px_-20px_rgba(20,33,61,0.25)]`
  - Phone & Marble Card Mockup: `shadow-2xl`
  - Header / Toolbar UI: `shadow-ui-sm` (`0 2px 8px rgba(0,0,0,0.08)`)

---

## 2. Page Structure & Component Hierarchy

The application consists of 6 primary sections structured into modular components:

```
<HomepageDesktop> (w-[1440px] bg-background)
├── <Navbar />                (Sticky top navigation with dual-ring logo, links & CTAs)
├── <Hero />                  (Headline, dual CTAs, social proof, interactive 3D video mockup, platform ribbon)
├── <ProductsSection />       (Section 02: Google Review Solutions + Personal Business Cards)
├── <GalleryCustom />         (Section 03: Explore Designs + Section 04: Customization Before/After)
├── <HowAiWho />              (Section 05: How It Works + Section 06: AI Review Assist + Section 07: Who Is It For?)
└── <FaqFooter />             (Section 08: FAQ Accordion + Enquiry WhatsApp Form + 4-Column Footer)
```

---

## 3. Detailed Component Specifications & Verbatim Content

### 3.1 Component 1: `Navbar`
- **Container**: `w-full bg-background/95 border-b border-border sticky top-0 z-50 backdrop-blur-sm`
- **Inner**: `max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between`
- **Brand Identity**:
  - **Logo Icon**: `w-10 h-10 rounded-xl bg-navy flex items-center justify-center relative overflow-hidden`
    - Outer Circle: `w-5 h-5 rounded-full border-[3px] border-background`
    - Interlocking Circle: `absolute w-5 h-5 rounded-full border-[3px] border-accent translate-x-[7px]`
  - **Brand Text**:
    - Title: `font-headings font-bold text-lg text-navy tracking-tight`: **"RevoDigital"**
    - Subtitle: `text-xs text-slate-text`: **"Make Every Connection Count."**
- **Navigation Links** (`flex items-center gap-8`):
  1. `text-sm font-medium text-primary`: **"Home"**
  2. `text-sm font-medium text-navy hover:text-primary transition`: **"Products"**
  3. `text-sm font-medium text-navy hover:text-primary transition`: **"Customization"**
  4. `text-sm font-medium text-navy hover:text-primary transition`: **"How It Works"**
  5. `text-sm font-medium text-navy hover:text-primary transition`: **"FAQ"**
- **Right Action Buttons** (`flex items-center gap-3`):
  - WhatsApp Pill: `flex items-center gap-2 text-sm font-medium text-navy border border-border rounded-md px-3 py-2 cursor-pointer hover:bg-soft transition`
    - Icon: `message-circle` (16x16)
    - Label: **"WhatsApp"**
  - CTA Button: `bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold rounded-md px-5 py-2.5 flex items-center gap-2 transition`
    - Label: **"Get a Quote"**
    - Icon: `arrow-right` (16x16)

---

### 3.2 Component 2: `Hero`
- **Container**: `w-full bg-background relative overflow-hidden`
- **Decorative Elements**:
  - Background surface: `absolute top-0 left-0 right-0 h-[480px] bg-soft rounded-b-2xl`
  - Ambient orb: `absolute top-[-80px] right-[-80px] w-[520px] h-[520px] rounded-full bg-ice opacity-80`
- **Grid Layout**: `relative max-w-[1280px] mx-auto px-8 pt-16 pb-12 grid grid-cols-2 gap-12 items-center`
- **Left Column**:
  - **Badge Row**:
    - Pill 1: `bg-navy text-white text-xs font-semibold rounded-full px-3 py-1.5 flex items-center gap-2`
      - Dot: `w-2 h-2 rounded-full bg-accent inline-block`
      - Text: **"Smart Contactless Experiences"**
    - Pill 2: `text-xs font-medium text-slate-text border border-border bg-background rounded-full px-3 py-1.5`
      - Text: **"Trusted by 2,400+ businesses"**
  - **Heading (H1)**: `font-headings font-bold text-navy leading-[1.02] tracking-tight text-6xl`:
    **"Make Every Connection Count."**
  - **Lead Paragraph**: `text-lg text-slate-text leading-relaxed max-w-[480px]`:
    **"Smarter ways to collect customer reviews and share your professional identity. Discover contactless experiences designed for modern businesses."**
  - **Action Buttons**:
    - Primary CTA: `bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-md px-7 py-3.5 flex items-center gap-2 transition`:
      - Label: **"Explore Products"**
      - Icon: `arrow-down-right` (18x18)
    - Secondary CTA: `bg-background border border-border hover:bg-soft text-navy text-sm font-semibold rounded-md px-7 py-3.5 flex items-center gap-2 transition`:
      - Icon: `phone` (16x16)
      - Label: **"Get in Touch"**
  - **Social Proof / Metrics Row** (`flex items-center gap-8 mt-2`):
    - Avatar Stack: 3 overlapping circles (`-space-x-2`):
      - Circle 1: `w-8 h-8 rounded-full bg-skyline border-2 border-white text-xs font-bold text-navy`: `R`
      - Circle 2: `w-8 h-8 rounded-full bg-navy border-2 border-white text-xs font-bold text-white`: `S`
      - Circle 3: `w-8 h-8 rounded-full bg-accent border-2 border-white text-xs font-bold text-white`: `M`
    - Rating Info: `text-xs leading-tight`:
      - Score: `font-bold text-navy text-sm`: **"4.9/5"**
      - Label: `text-slate-text`: **"Customer rating"**
    - Divider: `w-px h-10 bg-border`
    - Feature Tags (`flex items-center gap-6 text-xs text-slate-text`):
      - Tag 1: icon `zap` + `font-semibold text-navy`: **"Tap & Scan"**
      - Tag 2: icon `shield-check` + `font-semibold text-navy`: **"No app needed"**
      - Tag 3: icon `qr-code` + `font-semibold text-navy`: **"QR backup"**
- **Right Column (Hero Interactive 3D / Video Mockup Card)**:
  - Container: `bg-gradient-to-b from-ice to-background border border-border rounded-2xl p-4 shadow-[0_32px_80px_-24px_rgba(37,99,235,0.35)] relative`
  - Window Header: `bg-navy rounded-xl px-4 py-2.5 flex items-center justify-between`
    - Title: dot `bg-accent` + `text-white text-xs font-semibold tracking-wide`: **"REVO STUDIO — HERO ANIMATION • 00:06 LOOP"**
    - Window Dots: 3 circles (`w-2.5 h-2.5 rounded-full`, two `bg-white/20`, one `bg-accent`)
  - Video Display Box: `relative mt-4 rounded-xl overflow-hidden bg-white aspect-[16/10] flex items-center justify-center`
    - Background Image: 3D Render of white Google Review tap card with floating smartphone (query: *"bright premium studio product scene white google review tap card with smartphone floating, ice blue background soft shadows, photorealistic 3d render"*)
    - Top-left Badge: `bg-navy text-white text-xs font-medium rounded-full px-3 py-1.5 flex items-center gap-1.5`:
      - Icon: `clapperboard` (13x13)
      - Text: **"6–7s seamless loop"**
    - Top-right NFC Badge: `w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center border-4 border-white/60`:
      - Icon: `nfc` (20x20)
    - Bottom Overlay Card: `bg-white/95 rounded-lg px-4 py-3 flex items-center justify-between border border-border`:
      - Play button: `w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center` with icon `play` (16x16)
      - Scene status: `text-xs font-bold text-navy`: **"Tap interaction — Scene 03/06"**
      - Progress bar: `w-[220px] h-1.5 bg-muted rounded-full mt-1.5` with inner progress `w-[55%] bg-primary`
      - Badge: `text-xs font-semibold text-primary border border-skyline bg-ice rounded-md px-2.5 py-1.5`: **"Replace with 3D video"**
  - Scene Timeline Pills (`grid grid-cols-6 gap-2 mt-3`):
    1. `rounded-md px-2 py-2 text-center text-xs font-semibold border bg-white text-slate-text border-border`: **"01 · Card floats"**
    2. `rounded-md px-2 py-2 text-center text-xs font-semibold border bg-white text-slate-text border-border`: **"02 · Phone enters"**
    3. `rounded-md px-2 py-2 text-center text-xs font-semibold border bg-navy text-white border-navy`: **"03 · Tap"** (Active)
    4. `rounded-md px-2 py-2 text-center text-xs font-semibold border bg-white text-slate-text border-border`: **"04 · Blue pulse"**
    5. `rounded-md px-2 py-2 text-center text-xs font-semibold border bg-white text-slate-text border-border`: **"05 · Review UI"**
    6. `rounded-md px-2 py-2 text-center text-xs font-semibold border bg-white text-slate-text border-border`: **"06 · Pull back"**
  - Floating Badges:
    - Floating Bottom-Left Card: `absolute -left-6 bottom-10 bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_16px_40px_-16px_rgba(20,33,61,0.3)]`
      - Icon: `star` in `w-10 h-10 rounded-lg bg-ice`
      - Title: `text-sm font-bold text-navy`: **"+128 Google reviews"**
      - Sub: `text-xs text-slate-text`: **"Café Aroma · last 30 days"**
    - Floating Top-Right Card: `absolute -right-3 top-10 bg-white border border-border rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-[0_16px_40px_-16px_rgba(20,33,61,0.3)]`
      - Icon: `check` in `w-8 h-8 rounded-full bg-success/15`
      - Title: `text-xs font-bold text-navy`: **"Profile saved in 1 tap"**
- **Bottom Ribbon**: `relative max-w-[1280px] mx-auto px-8 pb-8`
  - Ribbon Box: `border border-border rounded-xl bg-white px-6 py-4 flex items-center justify-between`
  - Left Text: `text-xs font-semibold tracking-widest text-slate-text`: **"WORKS WITH EVERY MODERN SMARTPHONE — NO APP NEEDED"**
  - Right Platform Names: `flex items-center gap-6 text-sm font-bold text-navy`:
    - **"iOS"** | **"Android"** | **"Google"** | **"WhatsApp"** | **"Instagram"** | **"LinkedIn"**

---

### 3.3 Component 3: `ProductsSection`
- **Container**: `w-full bg-soft py-20`
- **Section Header**: `flex items-end justify-between mb-10`
  - Eyebrow: `text-xs font-bold tracking-widest text-primary mb-3`: **"02 — OUR PRODUCTS"**
  - Heading (H2): `font-headings font-bold text-navy text-4xl leading-tight max-w-[520px]`: **"Two product families. One seamless experience."**
  - Subhead: `text-base text-slate-text max-w-[380px]`: **"Premium hardware paired with beautiful digital profiles — ready for counters, teams and professionals."**
- **Product Card 01: Google Review Solutions** (`bg-white border border-border rounded-2xl overflow-hidden grid grid-cols-2 mb-6`):
  - Left Column (`p-10 flex flex-col gap-5`):
    - Badge Row:
      - Pill: `bg-ice text-primary text-xs font-bold rounded-full px-3 py-1`: **"PRODUCT 01"**
      - Sub-label: `text-xs font-semibold text-slate-text`: **"Google Review Solutions"**
    - Title (H3): `font-headings font-bold text-navy text-3xl leading-tight`: **"Make Sharing Experiences Effortless."**
    - Description: `text-base text-slate-text`: **"Give customers a convenient way to access your Google Review page through a simple tap or QR scan."**
    - Sub-Products Grid (`grid grid-cols-2 gap-3 mt-1`):
      - Sub-product 1: `border border-border rounded-lg p-4 bg-soft`
        - Icon box: `w-9 h-9 rounded-md bg-navy flex items-center justify-center mb-2` with `presentation` icon (18x18)
        - Title: `text-sm font-bold text-navy`: **"Smart Review Stand"**
        - Copy: `text-xs text-slate-text mt-1 leading-relaxed`: **"For reception desks & billing counters. Tabletop, branded, tap + QR."**
      - Sub-product 2: `border border-border rounded-lg p-4 bg-soft`
        - Icon box: `w-9 h-9 rounded-md bg-primary flex items-center justify-center mb-2` with `id-card` icon (18x18)
        - Title: `text-sm font-bold text-navy`: **"Salesperson Review Card"**
        - Copy: `text-xs text-slate-text mt-1 leading-relaxed`: **"Compact for staff. Collect reviews at point of billing."**
    - Buttons Row:
      - Button 1: `bg-navy hover:bg-navy/90 text-white text-sm font-semibold rounded-md px-6 py-3`: **"Explore Designs"**
      - Button 2: `border border-border hover:bg-soft text-navy text-sm font-semibold rounded-md px-6 py-3 flex items-center gap-2`: **"Enquire Now"** + `arrow-right`
  - Right Column (`bg-navy-light p-8 grid grid-cols-2 gap-4 relative overflow-hidden`):
    - Mockup 1: `rounded-xl overflow-hidden bg-white aspect-[4/5] relative`
      - Image: Tabletop review stand with QR on counter
      - Label pill: `absolute bottom-3 left-3 bg-white rounded-md px-3 py-1.5 text-xs font-bold text-navy`: **"Stand · Counter"**
    - Mockup 2: `rounded-xl overflow-hidden bg-white aspect-[4/5] relative mt-8`
      - Image: Hand holding black review tap card
      - Label pill: `absolute bottom-3 left-3 bg-white rounded-md px-3 py-1.5 text-xs font-bold text-navy`: **"Card · Portable"**
- **Product Card 02: Personal Business Cards** (`bg-navy rounded-2xl overflow-hidden grid grid-cols-2`):
  - Left Column (`p-8 order-1 relative flex items-center justify-center`):
    - Ambient radial glow: `absolute w-[380px] h-[380px] rounded-full bg-primary/30 blur-[80px]`
    - Card Container: `relative w-full max-w-[460px]`
      - Card Image: `rounded-xl overflow-hidden border border-white/20 aspect-[16/10] shadow-2xl` (Luxury navy and gold smart business card on marble)
      - Interactive Contact Preview: `bg-white rounded-xl p-4 mt-4 flex items-center gap-4`
        - Avatar: `w-12 h-12 rounded-full bg-ice flex items-center justify-center font-bold text-navy`: **"AK"**
        - Info:
          - Name/Role: `text-sm font-bold text-navy`: **"Aarav Kapoor · Consultant"**
          - Status: `text-xs text-slate-text`: **"Tap preview — digital profile opens instantly"**
        - QR Button: `w-10 h-10 rounded-md bg-navy flex items-center justify-center text-white` with `qr-code` icon (18x18)
  - Right Column (`p-10 flex flex-col gap-5 order-2`):
    - Badge Row:
      - Pill: `bg-accent text-white text-xs font-bold rounded-full px-3 py-1`: **"PRODUCT 02"**
      - Sub-label: `text-xs font-semibold text-white/70`: **"Personal Business Cards"**
    - Title (H3): `font-headings font-bold text-white text-3xl leading-tight`: **"Your Professional Identity. One Simple Tap."**
    - Description: `text-base text-white/70`: **"Share your professional identity instantly with a personalized digital business profile."**
    - Feature Tags (`flex flex-wrap gap-2` with `check` icon 13x13):
      1. `Photo + designation`
      2. `Phone & WhatsApp`
      3. `Email`
      4. `Social links`
      5. `Save contact`
      6. `Tap + QR`
    - Buttons Row:
      - Button 1: `bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-md px-6 py-3`: **"Explore Designs"**
      - Button 2: `border border-white/25 hover:bg-white/10 text-white text-sm font-semibold rounded-md px-6 py-3`: **"View Live Profile"**

---

### 3.4 Component 4: `GalleryCustom`
- **Container**: `w-full bg-background`
- **Part 1: Section 03 — EXPLORE DESIGNS**:
  - Container: `max-w-[1280px] mx-auto px-8 pt-20 pb-10`
  - Header: `text-center max-w-[640px] mx-auto mb-10`
    - Eyebrow: `text-xs font-bold tracking-widest text-primary mb-3`: **"03 — EXPLORE DESIGNS"**
    - Title (H2): `font-headings font-bold text-navy text-4xl`: **"A design for every brand personality."**
    - Subhead: `text-base text-slate-text mt-3`: **"Same smart technology, different visual identities. Pick a style or make it entirely yours."**
  - **3 Review Stand Models** (`grid grid-cols-3 gap-4 mb-4`):
    1. **Cloud White Stand**:
       - Aspect: `aspect-[4/3]`, clean minimal photo
       - Title: `text-sm font-bold text-navy`: **"Cloud White Stand"**
       - Sub: `text-xs text-slate-text`: **"Clean minimal · QR + Tap"**
       - Button: `text-xs font-bold text-primary border border-skyline bg-ice rounded-md px-3 py-2`: **"Enquire"**
    2. **Midnight Navy Stand**:
       - Aspect: `aspect-[4/3]`, navy stand photo
       - Title: `text-sm font-bold text-navy`: **"Midnight Navy Stand"**
       - Sub: `text-xs text-slate-text`: **"Bold counter presence"**
       - Button: `text-xs font-bold text-primary border border-skyline bg-ice rounded-md px-3 py-2`: **"Enquire"**
    3. **Sunset Pop Stand**:
       - Aspect: `aspect-[4/3]`, orange accent stand photo
       - Title: `text-sm font-bold text-navy`: **"Sunset Pop Stand"**
       - Sub: `text-xs text-slate-text`: **"Orange accent · hospitality"**
       - Button: `text-xs font-bold text-primary border border-skyline bg-ice rounded-md px-3 py-2`: **"Enquire"**
  - **4 Personal Card Finishes** (`grid grid-cols-4 gap-4`):
    1. **Onyx Black**:
       - Aspect: `aspect-[3/3.4]`
       - Title: **"Onyx Black"**
       - Sub: **"Premium matte · gold foil"**
       - CTA: **"Enquire Now"** + `arrow-right` (13x13)
    2. **Arctic White**:
       - Aspect: `aspect-[3/3.4]`
       - Title: **"Arctic White"**
       - Sub: **"Minimalist · soft touch"**
       - CTA: **"Enquire Now"** + `arrow-right` (13x13)
    3. **Ocean Gradient**:
       - Aspect: `aspect-[3/3.4]`
       - Title: **"Ocean Gradient"**
       - Sub: **"Contemporary blue blend"**
       - CTA: **"Enquire Now"** + `arrow-right` (13x13)
    4. **Terra Orange**:
       - Aspect: `aspect-[3/3.4]`
       - Title: **"Terra Orange"**
       - Sub: **"Bold creative · startups"**
       - CTA: **"Enquire Now"** + `arrow-right` (13x13)
- **Part 2: Section 04 — CUSTOMIZATION**:
  - Container: `mt-20 bg-soft border border-border rounded-2xl p-10 grid grid-cols-2 gap-10 items-center overflow-hidden`
  - Left Column:
    - Eyebrow: `text-xs font-bold tracking-widest text-accent mb-3`: **"04 — CUSTOMIZATION"**
    - Title (H2): `font-headings font-bold text-navy text-4xl leading-tight`: **"Your Card. Your Identity. Your Design."**
    - Subhead: `text-base text-slate-text mt-3`: **"Start from a curated design or send your artwork — we handle logos, colors, typography and QR destinations."**
    - 6 Feature Checklist Tags (`grid grid-cols-2 gap-2.5 mt-6`, each with `check` icon 15x15):
      1. **"Logo personalization"**
      2. **"Business branding"**
      3. **"Custom colors"**
      4. **"Typography & layouts"**
      5. **"Personalized QR"**
      6. **"RevoDigital studio design"**
    - Buttons:
      - Button 1: `bg-navy hover:bg-navy/90 text-white text-sm font-semibold rounded-md px-6 py-3`: **"Explore Existing Designs"**
      - Button 2: `bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-md px-6 py-3`: **"Request Custom Design"**
  - Right Column (Before / After Comparison):
    - Comparison Grid: `grid grid-cols-2 gap-4`
    - Before Card: `bg-white border border-border rounded-xl overflow-hidden`
      - Label: `text-xs font-bold text-slate-text px-4 pt-3`: **"BEFORE · Standard"**
      - Photo: Blank white generic review card
    - After Card: `bg-navy rounded-xl overflow-hidden border border-navy-light mt-6`
      - Label: `text-xs font-bold text-accent px-4 pt-3`: **"AFTER · Branded for Brew & Bean"**
      - Photo: Branded coffee shop review stand with logo on warm cafe counter
      - Swatches: 3 circular color chips (`w-6 h-6 rounded-full border-2 border-white`: accent orange `#FF8A3D`, primary blue `#2563EB`, pure white `#FFFFFF`)

---

### 3.5 Component 5: `HowAiWho`
- **Part 1: Section 05 — HOW IT WORKS**:
  - Container: `max-w-[1280px] mx-auto px-8 py-20`
  - Header: `text-center mb-12`
    - Eyebrow: `text-xs font-bold tracking-widest text-primary mb-3`: **"05 — HOW IT WORKS"**
    - Title (H2): `font-headings font-bold text-navy text-4xl`: **"Effortless by design. No tech skills needed."**
  - 3 Process Steps (`grid grid-cols-3 gap-4`):
    - **Step 01**:
      - Number: `text-5xl font-headings font-bold text-skyline`: **"01"**
      - Icon Box: `w-14 h-14 rounded-xl bg-navy mx-auto my-4 flex items-center justify-center text-white` with `nfc` (24x24)
      - Title: `text-lg font-bold text-navy font-headings`: **"Tap or Scan"**
      - Description: `text-sm text-slate-text mt-2 leading-relaxed`: **"Hold any smartphone near the card, or scan the QR. No app to download."**
      - Arrow connector badge: `absolute right-[-16px] top-1/2 w-8 h-8 bg-white border border-border rounded-full flex items-center justify-center` with `arrow-right` (15x15)
    - **Step 02**:
      - Number: `text-5xl font-headings font-bold text-skyline`: **"02"**
      - Icon Box: `w-14 h-14 rounded-xl bg-navy mx-auto my-4 flex items-center justify-center text-white` with `smartphone` (24x24)
      - Title: `text-lg font-bold text-navy font-headings`: **"Open the Experience"**
      - Description: `text-sm text-slate-text mt-2 leading-relaxed`: **"Review page or digital profile opens instantly in the browser."**
      - Arrow connector badge: with `arrow-right` (15x15)
    - **Step 03**:
      - Number: `text-5xl font-headings font-bold text-skyline`: **"03"**
      - Icon Box: `w-14 h-14 rounded-xl bg-navy mx-auto my-4 flex items-center justify-center text-white` with `star` (24x24)
      - Title: `text-lg font-bold text-navy font-headings`: **"Connect, Share or Review"**
      - Description: `text-sm text-slate-text mt-2 leading-relaxed`: **"Save contact, follow, or leave a Google review in seconds."**
  - Real-world Photos Row (`grid grid-cols-2 gap-4 mt-4`):
    - Photo 1: `aspect-[16/7]` with label badge **"Review flow · at the counter"**
    - Photo 2: `aspect-[16/7]` with label badge **"Networking flow · one tap share"**

- **Part 2: Section 06 — AI REVIEW ASSIST · INCLUDED**:
  - Container: `w-full bg-navy py-20 relative overflow-hidden text-white`
  - Decorative glow: `absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] top-[-200px] left-[30%]`
  - Layout: `relative max-w-[1280px] mx-auto px-8 grid grid-cols-2 gap-14 items-center`
  - Left Column:
    - Badge: `inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs font-semibold text-white mb-5`:
      - Icon: `sparkles` (14x14)
      - Text: **"06 — AI REVIEW ASSIST · INCLUDED"**
    - Title (H2): `font-headings font-bold text-white text-4xl leading-tight`: **"Make Sharing Genuine Experiences Easier."**
    - Description: `text-white/70 text-base mt-4 leading-relaxed`: **"Customers often know they loved you — but not what to write. AI turns a few honest notes into a natural draft they control, edit and choose to publish."**
    - 3 Steps List (`flex flex-col gap-3 mt-7`):
      1. Step 1: `bg-white/8 border border-white/12 rounded-lg px-4 py-3 flex items-center gap-3`
         - Number chip: `w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0`: `1`
         - Text: `text-sm text-white font-medium`: **"Customer shares a few details about their real visit"**
      2. Step 2:
         - Number chip: `2`
         - Text: **"AI drafts a natural review from only those details"**
      3. Step 3:
         - Number chip: `3`
         - Text: **"Customer edits, approves and posts to Google themselves"**
    - Assurance Note: `mt-5 flex items-start gap-2 text-xs text-white/60 leading-relaxed`:
      - Icon: `shield-check` (15x15)
      - Text: **"Responsible by design: never fabricates experiences, never forces ratings, never auto-posts. The customer always stays in control."**
  - Right Column (Smartphone UI Mockup):
    - Outer Chassis: `w-[300px] bg-white rounded-[28px] p-3 shadow-2xl`
    - Inner Screen: `bg-soft rounded-[20px] overflow-hidden`
    - Header: Star icon, Title **"How was Brew & Bean?"**, 5 golden stars (`flex justify-center gap-1 mt-2`)
    - Customer Input Card: `bg-white border border-border rounded-lg p-3 text-xs text-navy`:
      **“Great oat latte, fast wifi, friendly staff…”**
    - AI Draft Card: `bg-ice border border-skyline rounded-lg p-3`:
      - Label: `text-xs font-bold text-primary flex items-center gap-1`: icon `sparkles` + **"AI draft — editable"**
      - Body: `text-xs text-navy mt-1 leading-relaxed`: **“Loved the oat latte and quick service. Perfect spot to work — will be back!”**
    - Action Buttons: `grid grid-cols-2 gap-2`:
      - Left: `border border-border bg-white rounded-md text-center text-xs font-bold text-navy py-2`: **"Edit"**
      - Right: `bg-primary rounded-md text-center text-xs font-bold text-white py-2`: **"Continue to Google"**

- **Part 3: Section 07 — WHO IS IT FOR?**:
  - Container: `max-w-[1280px] mx-auto px-8 py-20`
  - Header: `text-center mb-10`
    - Eyebrow: `text-xs font-bold tracking-widest text-primary mb-3`: **"07 — WHO IS IT FOR?"**
    - Title (H2): `font-headings font-bold text-navy text-4xl`: **"Built for counters, teams and talent."**
  - Two Category Panels (`grid grid-cols-2 gap-4`):
    - **Panel 1: Google Review Solutions** (`border border-border rounded-2xl p-6 bg-white`):
      - Header: icon `store` in `bg-ice` + `text-sm font-bold text-navy`: **"Google Review Solutions"**
      - 6 Sector Tiles (`grid grid-cols-3 gap-3`, aspect `[1/1.15]` with bottom gradient label):
        1. **"Restaurants"**
        2. **"Clinics & Healthcare"**
        3. **"Salons & Spas"**
        4. **"Retail Stores"**
        5. **"Hotels & Hospitality"**
        6. **"Auto Showrooms"**
    - **Panel 2: Personal Business Cards** (`border border-border rounded-2xl p-6 bg-soft`):
      - Header: icon `briefcase` in `bg-navy` + `text-sm font-bold text-navy`: **"Personal Business Cards"**
      - 6 Role Tiles (`grid grid-cols-3 gap-3`, aspect `[1/1.15]` with bottom gradient label):
        1. **"Entrepreneurs"**
        2. **"Freelancers"**
        3. **"Consultants"**
        4. **"Sales Pros"**
        5. **"Business Owners"**
        6. **"Creators"**

---

### 3.6 Component 6: `FaqFooter`
- **Part 1: Section 08 — FAQ**:
  - Container: `max-w-[860px] mx-auto px-8 pb-20`
  - Header: `text-center mb-10`
    - Eyebrow: `text-xs font-bold tracking-widest text-primary mb-3`: **"08 — FAQ"**
    - Title (H2): `font-headings font-bold text-navy text-4xl`: **"Everything, answered."**
  - 9 Accordion FAQ Items:
    1. **Q1 (Active/Expanded in preview)**:
       - Style: `border rounded-lg overflow-hidden border-primary bg-ice/40`
       - Question: **"How does contactless tapping work?"**
       - Icon: `minus` in `w-8 h-8 rounded-full bg-primary text-white`
       - Answer: `px-5 pb-5 text-sm text-slate-text leading-relaxed`:
         **"Hold any NFC-enabled smartphone near the card or stand. The digital experience opens instantly in the browser — no app needed."**
    2. **Q2**: **"Can customers scan a QR code instead?"** (plus icon in `bg-soft text-navy`)
       - Detailed Answer for implementation: *"Yes. Every RevoDigital product includes a high-contrast QR code as a standard fallback for devices without NFC or when scanning is preferred."*
    3. **Q3**: **"Are the cards compatible with different smartphones?"**
       - Detailed Answer: *"Yes. NFC works natively across all modern iPhones (iPhone 7 and newer) and virtually all Android devices without downloading any third-party app."*
    4. **Q4**: **"Can I add my business logo?"**
       - Detailed Answer: *"Absolutely. We provide full high-resolution UV print customization with your exact company logo, brand colors, and typography."*
    5. **Q5**: **"Can I provide my own design?"**
       - Detailed Answer: *"Yes, you can upload or send your ready-to-print vector artwork (AI, PDF, SVG), or have our design studio lay it out for you."*
    6. **Q6**: **"Can RevoDigital create a custom design?"**
       - Detailed Answer: *"Yes! Our in-house design studio creates custom bespoke mockups tailored to your brand identity at no extra design fee."*
    7. **Q7**: **"How does the AI Review Assist feature work?"**
       - Detailed Answer: *"Customers tap the card, bullet out a couple of honest notes about their visit, and AI turns them into a complete draft that they can edit and publish to Google themselves."*
    8. **Q8**: **"How can I place an order?"**
       - Detailed Answer: *"You can tap any 'Enquire' button or fill out the enquiry form below. It pre-fills your details and connects directly to our team on WhatsApp for immediate confirmation."*
    9. **Q9**: **"What are the delivery options?"**
       - Detailed Answer: *"We ship nationwide across India via expedited courier. Typical dispatch takes 3–5 business days following design approval."*
  - **WhatsApp Callout Banner**: `mt-8 bg-navy rounded-xl px-6 py-5 flex items-center justify-between`
    - Left: Icon `message-circle` in `w-10 h-10 rounded-full bg-accent`
    - Text:
      - Title: `text-sm font-bold text-white`: **"Still curious? Chat with us on WhatsApp."**
      - Sub: `text-xs text-white/60`: **"Replies within minutes, 10am–8pm IST"**
    - Button: `bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-md px-6 py-3 transition`: **"Chat Now"**

- **Part 2: Section ENQUIRY · ONE FORM, EVERY PRODUCT**:
  - Container: `w-full bg-soft border-t border-border py-16`
  - Inner Grid: `max-w-[1080px] mx-auto px-8 grid grid-cols-2 gap-10 items-center`
  - Left Column:
    - Eyebrow: `text-xs font-bold tracking-widest text-primary mb-3`: **"ENQUIRY · ONE FORM, EVERY PRODUCT"**
    - Heading (H3): `font-headings font-bold text-navy text-3xl leading-tight`: **"Tell us what you need. We handle the rest on WhatsApp."**
    - 3 Value Checkpoints (`flex flex-col gap-2.5 mt-5 text-sm text-slate-text`, each with `check` icon 15x15):
      1. **"Product & variant auto-filled from the button you tapped"**
      2. **"No payment now — just design + quantity + delivery"**
      3. **"Prefilled WhatsApp message — you press send"**
  - Right Column (Interactive Form Card):
    - Container: `bg-white rounded-2xl border border-border p-7 shadow-[0_24px_60px_-20px_rgba(20,33,61,0.25)]`
    - Form Header: `flex items-center justify-between mb-5`
      - Title: `text-base font-bold text-navy font-headings`: **"Enquire Now"**
      - Selected Variant Badge: `text-xs font-semibold text-primary bg-ice rounded-full px-3 py-1`: **"Smart Review Stand · Cloud White"**
    - Input Fields (`grid grid-cols-2 gap-3`):
      1. **Full Name**: Label `text-xs font-semibold text-navy mb-1.5`, Input: `Priya Sharma` (`border border-border rounded-md px-3 py-2.5 text-sm bg-soft text-slate-text`)
      2. **WhatsApp Number**: Label `WhatsApp Number`, Input: `+91 98200 12345`
      3. **Business Name**: Label `Business Name`, Input: `Brew & Bean`
      4. **Quantity**: Label `Quantity`, Dropdown selector: `2` + `chevron-down` icon (14x14)
      5. **Product Category** (span 2 cols):
         - Label `Product Category`
         - Pill 1 (Active): `text-xs font-bold bg-navy text-white rounded-full px-3 py-1.5`: **"Review Solutions"**
         - Pill 2 (Inactive): `text-xs font-medium border border-border rounded-full px-3 py-1.5 text-slate-text`: **"Business Cards"**
      6. **Additional Requirements** (span 2 cols):
         - Label `Additional Requirements`
         - Textarea/Input: `Need logo + menu QR on the stand…`
    - Submit Button:
      - Class: `w-full mt-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold rounded-md py-3.5 flex items-center justify-center gap-2 transition`
      - Icon: `message-circle` (17x17)
      - Label: **"Continue to WhatsApp"**
    - Helper Microcopy: `text-center text-xs text-slate-text mt-2`:
      **"Opens WhatsApp with your enquiry pre-filled. You press send."**

- **Part 3: FOOTER**:
  - Container: `w-full bg-navy text-white`
  - Inner Grid: `max-w-[1280px] mx-auto px-8 pt-14 pb-6`
  - Top 4-Column Section (`grid grid-cols-4 gap-8 pb-10 border-b border-white/10`):
    - **Column 1 (Brand Info)**:
      - Logo & Wordmark: Dual circle badge (`w-9 h-9 rounded-lg bg-white`) + **"RevoDigital"** (`font-headings font-bold text-white`)
      - Tagline: `text-sm text-white/60`: **"Make Every Connection Count."**
      - Social Media Icons (`flex gap-2 mt-4`):
        - Instagram: `w-9 h-9 rounded-md bg-white/10 flex items-center justify-center` with `instagram` icon (16x16)
        - LinkedIn: `linkedin` icon (16x16)
        - YouTube: `youtube` icon (16x16)
        - Facebook: `facebook` icon (16x16)
    - **Column 2 (PRODUCTS)**:
      - Header: `text-xs font-bold tracking-widest text-white/50 mb-4`: **"PRODUCTS"**
      - Links (`flex flex-col gap-2.5 text-sm text-white/80`):
        - **"Smart Review Stand"**
        - **"Salesperson Review Card"**
        - **"Personal Business Cards"**
        - **"AI Review Assist"**
    - **Column 3 (COMPANY)**:
      - Header: `text-xs font-bold tracking-widest text-white/50 mb-4`: **"COMPANY"**
      - Links (`flex flex-col gap-2.5 text-sm text-white/80`):
        - **"Customization"**
        - **"How It Works"**
        - **"FAQ"**
        - **"Get a Quote"**
    - **Column 4 (CONTACT)**:
      - Header: `text-xs font-bold tracking-widest text-white/50 mb-4`: **"CONTACT"**
      - Email: `flex items-center gap-2`: icon `mail` (14x14) + **"hello@revodigital.in"**
      - Phone: `flex items-center gap-2`: icon `phone` (14x14) + **"+91 98765 43210"**
      - WhatsApp Button: `mt-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-md px-5 py-2.5 flex items-center gap-2 w-fit transition`:
        - Icon: `message-circle` (15x15)
        - Text: **"WhatsApp Us"**
  - **Bottom Row**: `flex items-center justify-between pt-5 text-xs text-white/50`
    - Left: **"© 2026 RevoDigital. All rights reserved."**
    - Right: **"Smart contactless experiences for modern businesses."**

---

## 4. Media Assets Inventory

### 4.1 Icons Catalog (26 Unique Lucide / SVG Icons)

All icons use `stroke="currentColor"` with clean vector geometry:

| Icon Name | Standard Width / Height | Stroke Width | Lucide Icon Component | Usage Location |
|---|---|---|---|---|
| `message-circle` | 16px / 18px | 2.8 - 3.2px | `MessageCircle` | Navbar WhatsApp, Footer WhatsApp, Enquiry WhatsApp Button, FAQ callout |
| `arrow-right` | 13px / 15px / 16px | 3.2 - 3.7px | `ArrowRight` | Navbar CTA, Product 1 CTA, Gallery links, Step indicators |
| `arrow-down-right`| 18px | 2.67px | `ArrowDownRight` | Hero "Explore Products" CTA |
| `phone` | 14px / 16px | 3.0 - 3.4px | `Phone` | Hero "Get in Touch" CTA, Footer Contact Phone |
| `zap` | 15px | 3.2px | `Zap` | Hero "Tap & Scan" feature badge |
| `shield-check` | 15px | 3.2px | `ShieldCheck` | Hero "No app needed", AI Review Assist responsible design note |
| `qr-code` | 15px / 18px | 2.67 - 3.2px | `QrCode` | Hero "QR backup", Product 2 digital profile preview |
| `play` | 16px | 3.0px | `Play` | Hero 3D Video mockup player button |
| `clapperboard` | 13px | 3.7px | `Clapperboard` | Hero video "6-7s seamless loop" badge |
| `nfc` | 20px / 24px | 2.0 - 2.4px | `Nfc` | Hero video NFC badge, How It Works Step 01 |
| `star` | 18px / 20px / 24px | 2.0 - 2.67px | `Star` | Hero floating reviews badge, How It Works Step 03, AI phone rating stars |
| `check` | 13px / 15px / 16px | 3.0 - 3.7px | `Check` | Hero floating badge, Product 2 tags, Customization checklist, Enquiry features |
| `presentation` | 18px | 2.67px | `Presentation` | Product 1 "Smart Review Stand" icon box |
| `id-card` | 18px | 2.67px | `IdCard` / `Contact` | Product 1 "Salesperson Review Card" icon box |
| `smartphone` | 24px | 2.0px | `Smartphone` | How It Works Step 02 "Open the Experience" |
| `sparkles` | 12px / 14px | 3.4 - 4.0px | `Sparkles` | AI Review Assist section eyebrow, AI phone mockup draft badge |
| `store` | 16px | 3.0px | `Store` | Who Is It For: "Google Review Solutions" header |
| `briefcase` | 16px | 3.0px | `Briefcase` | Who Is It For: "Personal Business Cards" header |
| `minus` | 16px | 3.0px | `Minus` | FAQ Accordion expanded item toggle |
| `plus` | 16px | 3.0px | `Plus` | FAQ Accordion collapsed item toggle |
| `chevron-down` | 14px | 3.4px | `ChevronDown` | Enquiry form quantity dropdown selector |
| `instagram` | 16px | 3.0px | `Instagram` | Footer social icon |
| `linkedin` | 16px | 3.0px | `Linkedin` | Footer social icon |
| `youtube` | 16px | 3.0px | `Youtube` | Footer social icon |
| `facebook` | 16px | 3.0px | `Facebook` | Footer social icon |
| `mail` | 14px | 3.4px | `Mail` | Footer Contact Email |

### 4.2 Imagery Catalog (27 High-Fidelity Asset Queries)

| # | Component / Section | Aspect Ratio | Query / Description | Display Classes |
|---|---|---|---|---|
| 1 | Hero Video Mockup | 16:10 | bright premium studio product scene white google review tap card with smartphone floating, ice blue background soft shadows, photorealistic 3d render | `absolute inset-0 w-full h-full object-cover` |
| 2 | Products (Product 1 Stand) | 4:5 | premium white tabletop google review stand with qr code on reception counter bright minimal | `w-full h-full object-cover` |
| 3 | Products (Product 1 Card) | 4:5 | hand holding premium black salesperson review tap card near smartphone bright office | `w-full h-full object-cover` |
| 4 | Products (Product 2 Marble) | 16:10 | luxury navy and gold smart business tap card on marble premium photography | `w-full h-full object-cover` |
| 5 | Gallery (Cloud White Stand) | 4:3 | minimal white review stand product photo bright background | `w-full h-full object-cover` |
| 6 | Gallery (Midnight Navy Stand) | 4:3 | navy blue review stand product photo premium counter | `w-full h-full object-cover` |
| 7 | Gallery (Sunset Pop Stand) | 4:3 | orange and white review stand product photography cafe | `w-full h-full object-cover` |
| 8 | Gallery (Onyx Black Card) | 1:1 (3/3.4) | black luxury business tap card gold details premium | `w-full h-full object-cover` |
| 9 | Gallery (Arctic White Card) | 1:1 (3/3.4) | white minimal smart business card product photo bright | `w-full h-full object-cover` |
| 10 | Gallery (Ocean Gradient Card) | 1:1 (3/3.4) | blue gradient modern business card premium photography | `w-full h-full object-cover` |
| 11 | Gallery (Terra Orange Card) | 1:1 (3/3.4) | orange creative business card design product photo | `w-full h-full object-cover` |
| 12 | Customization (Before Card) | 4:3 | plain white generic review card blank minimal product photo | `w-full h-full object-cover opacity-90` |
| 13 | Customization (After Stand) | 4:3 | branded coffee shop review stand with logo warm cozy cafe counter | `w-full h-full object-cover` |
| 14 | How It Works (Counter Photo) | 16:7 | customer tapping phone on review stand at restaurant billing counter bright | `w-full h-full object-cover` |
| 15 | How It Works (Handshake Photo)| 16:7 | two professionals exchanging contact with smart business card tap handshake office bright | `w-full h-full object-cover` |
| 16 | Who Is It For (Sector 1) | 1:1 (1/1.15) | cozy restaurant interior warm tables | `w-full h-full object-cover` |
| 17 | Who Is It For (Sector 2) | 1:1 (1/1.15) | bright modern clinic reception clean | `w-full h-full object-cover` |
| 18 | Who Is It For (Sector 3) | 1:1 (1/1.15) | elegant salon interior mirrors bright | `w-full h-full object-cover` |
| 19 | Who Is It For (Sector 4) | 1:1 (1/1.15) | modern retail store shelves bright | `w-full h-full object-cover` |
| 20 | Who Is It For (Sector 5) | 1:1 (1/1.15) | luxury hotel lobby bright elegant | `w-full h-full object-cover` |
| 21 | Who Is It For (Sector 6) | 1:1 (1/1.15) | premium car showroom bright modern | `w-full h-full object-cover` |
| 22 | Who Is It For (Role 1) | 1:1 (1/1.15) | confident entrepreneur portrait office bright | `w-full h-full object-cover` |
| 23 | Who Is It For (Role 2) | 1:1 (1/1.15) | freelancer working laptop cafe bright portrait | `w-full h-full object-cover` |
| 24 | Who Is It For (Role 3) | 1:1 (1/1.15) | consultant professional portrait suit bright | `w-full h-full object-cover` |
| 25 | Who Is It For (Role 4) | 1:1 (1/1.15) | sales professional smiling showroom portrait | `w-full h-full object-cover` |
| 26 | Who Is It For (Role 5) | 1:1 (1/1.15) | small business owner shop portrait smiling | `w-full h-full object-cover` |
| 27 | Who Is It For (Role 6) | 1:1 (1/1.15) | independent creative professional portrait studio | `w-full h-full object-cover` |

---

## 5. Interactive States & UX Behaviors

1. **Navbar Navigation & Smooth Scrolling**:
   - Clicking "Products", "Customization", "How It Works", "FAQ" smooth-scrolls to the corresponding section `id`s (`#products`, `#customization`, `#how-it-works`, `#faq`).
   - Clicking "WhatsApp" opens `https://wa.me/919876543210?text=Hi%20RevoDigital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products` in a new tab.
   - Clicking "Get a Quote" smooth-scrolls to `#enquiry` and focuses the enquiry form.

2. **Hero Video & Timeline Interaction**:
   - Timeline step pills ("01 · Card floats", "02 · Phone enters", "03 · Tap", "04 · Blue pulse", "05 · Review UI", "06 · Pull back"): Clicking a pill activates that step state, highlighting the pill with `bg-navy text-white` and updating the active scene status.

3. **Product & Gallery Enquire Action**:
   - Clicking "Enquire" on any card (e.g., "Cloud White Stand", "Midnight Navy Stand", "Onyx Black", etc.) smooth-scrolls to the Enquiry Form and updates the selected product pill (e.g. `Smart Review Stand · Cloud White` or `Personal Business Card · Onyx Black`).

4. **FAQ Accordion**:
   - Click to toggle accordion item expand/collapse.
   - Active open item displays `border-primary bg-ice/40` with `minus` icon and answer body.
   - Closed items display `border-border bg-white` with `plus` icon.

5. **Enquiry Form & WhatsApp Dispatch**:
   - Product category toggle (`Review Solutions` vs `Business Cards`).
   - Quantity selector dropdown.
   - Clicking **"Continue to WhatsApp"** formats a WhatsApp URL:
     `https://wa.me/919876543210?text=...` with the user's name, business, selected product, quantity, and requirements, then launches WhatsApp in a new tab with the pre-filled message.

---

## 6. Verification and Reference Assets

- Flow ID: `f0cDVHCexB-k`
- Preview URL: `https://app.banani.co/preview/f0cDVHCexB-k`
- Authoritative Full Desktop Screenshot:
  `https://storage.googleapis.com/banani-screenshots/structure-covers/f0cDVHCexB-k/9a698997cf6f6709f0164c73d7fc89038b868b40e769b15b4429417b31595c5f/homepage-desktop.jpg`
- Local Screen & Component JPGs saved in:
  `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\spec_miner_survey_1\`
