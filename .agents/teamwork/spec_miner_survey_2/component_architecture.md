# Component Architecture & Layout Specification: RevoDigital

Authoritative Source: Banani Design Preview (`https://app.banani.co/preview/f0cDVHCexB-k`)  
Flow ID: `f0cDVHCexB-k`  
Project Name: `RevoDigital Website`  
Extracted Artifacts: `screens/homepage-desktop.jsx`, `components/Navbar.jsx`, `components/Hero.jsx`, `components/ProductsSection.jsx`, `components/GalleryCustom.jsx`, `components/HowAiWho.jsx`, `components/FaqFooter.jsx`

---

## 1. Executive Design System & Token Foundation

### Color Tokens
| Token Name | Hex Value | Semantic Role | Tailwind Utility Class |
|---|---|---|---|
| `--color-background` | `#FFFFFF` | Global page background | `bg-background` |
| `--color-foreground` | `#14213D` | Primary text and high-contrast elements | `text-navy` / `text-foreground` |
| `--color-navy` | `#14213D` | Deep brand navy blue | `bg-navy`, `text-navy`, `border-navy` |
| `--color-navy-light` | `#1E2F57` | Lighter navy for sub-panels and product backs | `bg-navy-light`, `border-navy-light` |
| `--color-primary` | `#2563EB` | Vibrant tech blue for primary buttons and accents | `bg-primary`, `text-primary` |
| `--color-primary-foreground` | `#FFFFFF` | Text on primary elements | `text-primary-foreground` |
| `--color-accent` | `#FF8A3D` | Warm vibrant orange CTA and highlight color | `bg-accent`, `text-accent`, `border-accent` |
| `--color-accent-foreground` | `#FFFFFF` | Text on accent elements | `text-accent-foreground` |
| `--color-border` | `#E6EAF2` | Subtle hairline borders | `border-border` |
| `--color-input` | `#F7F9FC` | Form inputs and inactive selector backgrounds | `bg-input` |
| `--color-soft` | `#F7F9FC` | Soft off-white background alternating sections | `bg-soft` |
| `--color-ice` | `#EAF1FE` | Soft blue tint for active chips and tags | `bg-ice`, `border-ice` |
| `--color-skyline` | `#D8E6FF` | Border and highlight accent for ice elements | `border-skyline`, `text-skyline` |
| `--color-muted` | `#EEF2F9` | Progress bars and neutral surfaces | `bg-muted` |
| `--color-slate-text` | `#526078` | Secondary body text and labels | `text-slate-text` |
| `--color-success` | `#16A34A` | Verification indicators and badges | `bg-success`, `text-success` |
| `WhatsApp Green` | `#25D366` | Dedicated WhatsApp CTA button | `bg-[#25D366]` |

### Typography Tokens
| Token | Font Family / Size | Usage |
|---|---|---|
| `--font-headings` | `'Space Grotesk', sans-serif` | All major section titles, numbers, card headings |
| `--font-body` | `'Inter', sans-serif` | Body copy, navigation links, form labels, small badges |
| `text-6xl` | `68px / leading-[1.02]` | Hero Title ("Make Every Connection Count.") |
| `text-5xl` | `52px / leading-none` | Number watermarks (01, 02, 03 in How It Works) |
| `text-4xl` | `36px / leading-tight` | Section Titles (Products, Gallery, AI, Audience, FAQ) |
| `text-3xl` | `30px / leading-tight` | Subsection & Feature Headings |
| `text-lg` | `18px / leading-relaxed` | Hero description, step titles |
| `text-base` | `16px / leading-relaxed` | Standard paragraph copy |
| `text-sm` | `14px / font-medium` | Navigation items, form inputs, button text |
| `text-xs` | `12px / font-bold / uppercase` | Section category badges, tracker badges, tags |

### Spacing & Max Widths
- Standard Content Container: `max-w-[1280px] mx-auto px-8`
- Lead Capture / Enquiry Container: `max-w-[1080px] mx-auto px-8`
- FAQ Accordion Container: `max-w-[860px] mx-auto px-8`
- Border Radii:
  - `--radius-sm`: `4px`
  - `--radius-md`: `8px` (`rounded-md` on buttons and cards)
  - `--radius-lg`: `12px` (`rounded-xl` on sub-panels)
  - `--radius-xl`: `24px` (`rounded-2xl` on major feature cards)
  - `--radius-2xl`: `32px` (`rounded-[28px]` on mobile preview container)
  - `rounded-full` on badges, rating avatars, and pill tabs

---

## 2. Complete Section-by-Section Breakdown

### Section 0: Global Navigation Bar (`Navbar.jsx`)
- **Visual Appearance**: Sticky header with semi-transparent frosted background (`bg-background/95 border-b border-border backdrop-blur-md`).
- **Layout**: Flexbox `items-center justify-between` across `max-w-[1280px] px-8 py-4`.
- **Elements**:
  1. **Brand Identity**:
     - Logo Box: `w-10 h-10 rounded-xl bg-navy flex items-center justify-center relative overflow-hidden`.
     - Geometric Logo: Interlocking concentric circles (`w-5 h-5 rounded-full border-[3px] border-background` and `absolute w-5 h-5 rounded-full border-[3px] border-accent translate-x-[7px]`).
     - Text Lockup: "RevoDigital" (`font-headings font-bold text-lg text-navy tracking-tight`) + "Make Every Connection Count." (`text-xs text-slate-text`).
  2. **Navigation Menu**:
     - `flex items-center gap-8`
     - Links: "Home" (`text-sm font-medium text-primary`), "Products", "Customization", "How It Works", "FAQ" (`text-sm font-medium text-navy hover:text-primary transition-colors`).
  3. **Right Action Group**:
     - WhatsApp pill button: `flex items-center gap-2 text-sm font-medium text-navy border border-border rounded-md px-3 py-2 hover:bg-soft transition-colors`, `message-circle` icon (16px).
     - "Get a Quote" primary CTA: `bg-accent text-accent-foreground text-sm font-semibold rounded-md px-5 py-2.5 flex items-center gap-2 hover:brightness-105 transition-all shadow-sm`, `arrow-right` icon (16px).
  4. **Mobile Navigation (Responsive)**:
     - Hamburger toggle button (`md:hidden`) with slide-over drawer containing vertical links and action buttons.

---

### Section 1: Hero Section (`Hero.jsx`)
- **Visual Appearance**: Clean background with soft blue banner (`h-[480px] bg-soft rounded-b-2xl`) and decorative radiant blur circle (`w-[520px] h-[520px] bg-ice opacity-80`).
- **Layout**: 2-column grid (`grid grid-cols-2 gap-12 items-center max-w-[1280px] mx-auto px-8 pt-16 pb-12`).
- **Left Column (Value Proposition & Social Proof)**:
  1. **Pill Badges Row**:
     - Category pill: `bg-navy text-white text-xs font-semibold rounded-full px-3 py-1.5 flex items-center gap-2` with pulsing orange accent indicator (`w-2 h-2 rounded-full bg-accent`). Text: "Smart Contactless Experiences".
     - Trust pill: `text-xs font-medium text-slate-text border border-border bg-background rounded-full px-3 py-1.5`. Text: "Trusted by 2,400+ businesses".
  2. **Main Headline (H1)**:
     - `font-headings font-bold text-navy leading-[1.02] tracking-tight text-6xl`: "Make Every Connection Count."
  3. **Description**:
     - `text-lg text-slate-text leading-relaxed max-w-[480px]`: "Smarter ways to collect customer reviews and share your professional identity. Discover contactless experiences designed for modern businesses."
  4. **Action Buttons**:
     - Primary: "Explore Products" (`bg-primary text-primary-foreground text-sm font-semibold rounded-md px-7 py-3.5 flex items-center gap-2`, `arrow-down-right` icon).
     - Secondary: "Get in Touch" (`bg-background border border-border text-navy text-sm font-semibold rounded-md px-7 py-3.5 flex items-center gap-2`, `phone` icon).
  5. **Trust & Feature Indicator Row**:
     - Customer Rating: Stacked avatars (R: `bg-skyline text-navy`, S: `bg-navy text-white`, M: `bg-accent text-white`), `4.9/5` bold navy, "Customer rating".
     - Divider: `w-px h-10 bg-border`.
     - 3 Value Props:
       - `zap` icon + "Tap & Scan"
       - `shield-check` icon + "No app needed"
       - `qr-code` icon + "QR backup"
- **Right Column (Interactive 3D / Animation Studio Showcase)**:
  1. **Studio Window Card**:
     - Card container: `bg-gradient-to-b from-ice to-background border border-border rounded-2xl p-4 shadow-[0_32px_80px_-24px_rgba(37,99,235,0.35)] relative`.
     - Header bar: `bg-navy rounded-xl px-4 py-2.5 flex items-center justify-between`. Text: "REVO STUDIO — HERO ANIMATION • 00:06 LOOP", 3 window dots.
     - Viewport (16:10 aspect ratio):
       - High-fidelity product scene render.
       - Floating top badge: `clapperboard` icon + "6–7s seamless loop".
       - Floating top-right circle: `nfc` icon.
       - Bottom interactive scrubber bar: `play` button, "Tap interaction — Scene 03/06", progress bar (55%), tag "Replace with 3D video".
  2. **6-Step Scene Timeline Indicator**:
     - `grid grid-cols-6 gap-2 mt-3`.
     - Steps: `01 · Card floats`, `02 · Phone enters`, `03 · Tap` (Active: `bg-navy text-white border-navy`), `04 · Blue pulse`, `05 · Review UI`, `06 · Pull back`.
  3. **Floating Contextual Chip 1 (Bottom Left)**:
     - `absolute -left-6 bottom-10 bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_16px_40px_-16px_rgba(20,33,61,0.3)]`.
     - Gold star in ice background, "+128 Google reviews", "Café Aroma · last 30 days".
  4. **Floating Contextual Chip 2 (Top Right)**:
     - `absolute -right-3 top-10 bg-white border border-border rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-[0_16px_40px_-16px_rgba(20,33,61,0.3)]`.
     - Checkmark in success background, "Profile saved in 1 tap".
- **Bottom Compatibility Banner**:
  - `max-w-[1280px] mx-auto px-8 pb-8`.
  - Box: `border border-border rounded-xl bg-white px-6 py-4 flex items-center justify-between`.
  - Label: `WORKS WITH EVERY MODERN SMARTPHONE — NO APP NEEDED`.
  - Platforms: `iOS`, `Android`, `Google`, `WhatsApp`, `Instagram`, `LinkedIn`.

---

### Section 2: Products Section (`ProductsSection.jsx`)
- **Visual Appearance**: Alternating soft background (`bg-soft py-20`).
- **Section Header**:
  - Category tag: `02 — OUR PRODUCTS` (`text-xs font-bold tracking-widest text-primary`).
  - Title: "Two product families. One seamless experience." (`font-headings font-bold text-navy text-4xl max-w-[520px]`).
  - Subtitle: "Premium hardware paired with beautiful digital profiles — ready for counters, teams and professionals."
- **Card 1: Google Review Solutions (White Card)**:
  - Layout: `bg-white border border-border rounded-2xl overflow-hidden grid grid-cols-2 mb-6`.
  - Left content (`p-10 flex flex-col gap-5`):
    - Tag: `PRODUCT 01` (Ice blue pill) + "Google Review Solutions".
    - Heading: "Make Sharing Experiences Effortless."
    - Paragraph: "Give customers a convenient way to access your Google Review page through a simple tap or QR scan."
    - 2 Product Sub-cards (`grid grid-cols-2 gap-3`):
      1. Smart Review Stand: `presentation` icon in navy box, "Smart Review Stand", "For reception desks & billing counters. Tabletop, branded, tap + QR."
      2. Salesperson Review Card: `id-card` icon in primary blue box, "Salesperson Review Card", "Compact for staff. Collect reviews at point of billing."
    - Action buttons: "Explore Designs" (`bg-navy text-white`), "Enquire Now" (`border border-border text-navy` + arrow).
  - Right content (`bg-navy-light p-8 grid grid-cols-2 gap-4`):
    - Staggered image display (aspect 4/5):
      - Image 1: Tabletop stand on reception counter with tag "Stand · Counter".
      - Image 2: Hand holding black review card with tag "Card · Portable" (staggered with `mt-8`).
- **Card 2: Personal Business Cards (Dark Navy Card)**:
  - Layout: `bg-navy rounded-2xl overflow-hidden grid grid-cols-2`.
  - Right content (`order-2 p-10 flex flex-col gap-5`):
    - Tag: `PRODUCT 02` (`bg-accent text-white`) + "Personal Business Cards".
    - Heading: "Your Professional Identity. One Simple Tap." (`text-white text-3xl font-headings`).
    - Paragraph: "Share your professional identity instantly with a personalized digital business profile."
    - 6 Feature Pills (`flex flex-wrap gap-2`):
      - Photo + designation, Phone & WhatsApp, Email, Social links, Save contact, Tap + QR.
    - Action buttons: "Explore Designs" (`bg-accent text-white`), "View Live Profile" (`border border-white/25 text-white`).
  - Left content (`order-1 p-8 relative flex items-center justify-center`):
    - Ambient radial glow: `w-[380px] h-[380px] rounded-full bg-primary/30 blur-[80px]`.
    - 16:10 Luxury business card photo with gold foil details.
    - Live digital profile preview popup: Avatar "AK", "Aarav Kapoor · Consultant", "Tap preview — digital profile opens instantly", `qr-code` icon.

---

### Section 3: Explore Designs Gallery (`GalleryCustom.jsx` - Top Half)
- **Visual Appearance**: Clean white background (`bg-background py-20`).
- **Section Header**:
  - Category tag: `03 — EXPLORE DESIGNS` (`text-primary`).
  - Title: "A design for every brand personality." (`text-navy text-4xl text-center`).
  - Subtitle: "Same smart technology, different visual identities. Pick a style or make it entirely yours."
- **Grid 1: Counter Stands (3-Column Grid, `aspect-[4/3]` Image)**:
  1. **Cloud White Stand**: "Clean minimal · QR + Tap" | "Enquire" button (`border-skyline bg-ice text-primary`).
  2. **Midnight Navy Stand**: "Bold counter presence" | "Enquire" button.
  3. **Sunset Pop Stand**: "Orange accent · hospitality" | "Enquire" button.
- **Grid 2: Business Cards (4-Column Grid, `aspect-[3/3.4]` Image)**:
  1. **Onyx Black**: "Premium matte · gold foil" | "Enquire Now" link + arrow.
  2. **Arctic White**: "Minimalist · soft touch" | "Enquire Now" link + arrow.
  3. **Ocean Gradient**: "Contemporary blue blend" | "Enquire Now" link + arrow.
  4. **Terra Orange**: "Bold creative · startups" | "Enquire Now" link + arrow.

---

### Section 4: Customization Studio (`GalleryCustom.jsx` - Bottom Half)
- **Visual Appearance**: Soft container (`bg-soft border border-border rounded-2xl p-10`).
- **Layout**: 2-column grid (`grid grid-cols-2 gap-10 items-center`).
- **Left Column**:
  - Tag: `04 — CUSTOMIZATION` (Accent orange).
  - Title: "Your Card. Your Identity. Your Design." (`text-4xl text-navy`).
  - Subtitle: "Start from a curated design or send your artwork — we handle logos, colors, typography and QR destinations."
  - 6 Feature Grid (`grid grid-cols-2 gap-2.5 mt-6`):
    - Logo personalization, Business branding, Custom colors, Typography & layouts, Personalized QR, RevoDigital studio design.
  - CTAs: "Explore Existing Designs" (`bg-navy text-white`), "Request Custom Design" (`bg-accent text-white`).
- **Right Column (Before & After Comparison)**:
  - 2-column comparison cards:
    - Card 1: `BEFORE · Standard` — plain white generic card in soft container.
    - Card 2: `AFTER · Branded for Brew & Bean` — dark navy container with coffee shop branded stand and color swatches (Orange, Blue, White).

---

### Section 5: How It Works (`HowAiWho.jsx` - Section 05)
- **Section Header**: Tag `05 — HOW IT WORKS`, Title: "Effortless by design. No tech skills needed."
- **3-Step Process Cards (`grid grid-cols-3 gap-4`)**:
  - Card 1: Number `01` watermark, `nfc` icon in navy box, "Tap or Scan", "Hold any smartphone near the card, or scan the QR. No app to download.", connecting arrow circle on right border.
  - Card 2: Number `02` watermark, `smartphone` icon in navy box, "Open the Experience", "Review page or digital profile opens instantly in the browser.", connecting arrow circle.
  - Card 3: Number `03` watermark, `star` icon in navy box, "Connect, Share or Review", "Save contact, follow, or leave a Google review in seconds."
- **Real-world Contextual Imagery Cards (`grid grid-cols-2 gap-4 mt-4`)**:
  - Card 1 (16:7 aspect): Customer tapping phone at restaurant billing counter with pill tag "Review flow · at the counter".
  - Card 2 (16:7 aspect): Two professionals exchanging contact with smart card handshake with pill tag "Networking flow · one tap share".

---

### Section 6: AI Review Assist (`HowAiWho.jsx` - Section 06)
- **Visual Appearance**: Full-width dark navy banner (`bg-navy py-20 relative overflow-hidden`) with radial blue glow.
- **Layout**: 2-column grid (`grid grid-cols-2 gap-14 items-center max-w-[1280px] mx-auto px-8`).
- **Left Column**:
  - Badge: `sparkles` icon + "06 — AI REVIEW ASSIST · INCLUDED".
  - Title: "Make Sharing Genuine Experiences Easier." (`text-4xl text-white font-headings`).
  - Description: "Customers often know they loved you — but not what to write. AI turns a few honest notes into a natural draft they control, edit and choose to publish."
  - 3-Step Numbered Guide:
    1. "Customer shares a few details about their real visit"
    2. "AI drafts a natural review from only those details"
    3. "Customer edits, approves and posts to Google themselves"
  - Ethical AI Disclaimer: `shield-check` icon + "Responsible by design: never fabricates experiences, never forces ratings, never auto-posts. The customer always stays in control."
- **Right Column (Interactive Smartphone Simulator)**:
  - Phone chassis: `w-[300px] bg-white rounded-[28px] p-3 shadow-2xl mx-auto`.
  - Screen card: `bg-soft rounded-[20px] p-4 text-center`:
    - Star icon, "How was Brew & Bean?", 5 interactive gold stars.
    - Customer note box: `“Great oat latte, fast wifi, friendly staff…”`.
    - AI draft container: `bg-ice border border-skyline rounded-lg p-3 text-left`, `sparkles` icon + "AI draft — editable", text: `“Loved the oat latte and quick service. Perfect spot to work — will be back!”`.
    - Action buttons: "Edit" (`border border-border bg-white text-navy`) and "Continue to Google" (`bg-primary text-white`).

---

### Section 7: Who Is It For (`HowAiWho.jsx` - Section 07)
- **Section Header**: Tag `07 — WHO IS IT FOR?`, Title: "Built for counters, teams and talent."
- **2 Segment Panels (`grid grid-cols-2 gap-4`)**:
  - **Panel 1: Google Review Solutions (White Box)**:
    - Header: `store` icon in ice box + "Google Review Solutions".
    - 6 Categories (3x2 grid, aspect 1:1.15):
      1. Restaurants
      2. Clinics & Healthcare
      3. Salons & Spas
      4. Retail Stores
      5. Hotels & Hospitality
      6. Auto Showrooms
  - **Panel 2: Personal Business Cards (Soft Box)**:
    - Header: `briefcase` icon in navy box + "Personal Business Cards".
    - 6 Personas (3x2 grid, aspect 1:1.15):
      1. Entrepreneurs
      2. Freelancers
      3. Consultants
      4. Sales Pros
      5. Business Owners
      6. Creators

---

### Section 8: FAQ Section (`FaqFooter.jsx` - Section 08)
- **Container**: `max-w-[860px] mx-auto px-8 pb-20`.
- **Header**: Tag `08 — FAQ`, Title: "Everything, answered."
- **9 Accordion Items**:
  1. **"How does contactless tapping work?"** (Default Open: `border-primary bg-ice/40`, `minus` icon, explanation: "Hold any NFC-enabled smartphone near the card or stand. The digital experience opens instantly in the browser — no app needed.")
  2. "Can customers scan a QR code instead?" (`plus` icon, collapsed)
  3. "Are the cards compatible with different smartphones?"
  4. "Can I add my business logo?"
  5. "Can I provide my own design?"
  6. "Can RevoDigital create a custom design?"
  7. "How does the AI Review Assist feature work?"
  8. "How can I place an order?"
  9. "What are the delivery options?"
- **WhatsApp Support Callout Banner**:
  - `mt-8 bg-navy rounded-xl px-6 py-5 flex items-center justify-between text-white`.
  - Icon: `message-circle` in orange accent circle.
  - Copy: "Still curious? Chat with us on WhatsApp." / "Replies within minutes, 10am–8pm IST".
  - CTA: "Chat Now" (`bg-accent text-white px-6 py-3 rounded-md`).

---

### Section 9: Lead Capture & Enquiry Form (`FaqFooter.jsx` - Enquiry)
- **Container**: `w-full bg-soft border-t border-border py-16`, `max-w-[1080px] mx-auto px-8 grid grid-cols-2 gap-10 items-center`.
- **Left Column**:
  - Tag: `ENQUIRY · ONE FORM, EVERY PRODUCT` (`text-primary`).
  - Title: "Tell us what you need. We handle the rest on WhatsApp."
  - 3 Value Checkpoints:
    1. "Product & variant auto-filled from the button you tapped"
    2. "No payment now — just design + quantity + delivery"
    3. "Prefilled WhatsApp message — you press send"
- **Right Column (Form Card)**:
  - Container: `bg-white rounded-2xl border border-border p-7 shadow-[0_24px_60px_-20px_rgba(20,33,61,0.25)]`.
  - Header: "Enquire Now" + Auto-filled badge ("Smart Review Stand · Cloud White").
  - Form Fields:
    1. Full Name (`input`, default "Priya Sharma")
    2. WhatsApp Number (`input`, default "+91 98200 12345")
    3. Business Name (`input`, default "Brew & Bean")
    4. Quantity (`select`, default "2", chevron icon)
    5. Product Category (Pills: "Review Solutions" [Active] / "Business Cards")
    6. Additional Requirements (`input`/`textarea`, "Need logo + menu QR on the stand…")
  - CTA Button: `bg-[#25D366] text-white text-sm font-bold rounded-md py-3.5 flex items-center justify-center gap-2 w-full hover:brightness-105` ("Continue to WhatsApp", `message-circle` icon).
  - Help text: "Opens WhatsApp with your enquiry pre-filled. You press send."

---

### Section 10: Global Footer (`FaqFooter.jsx` - Footer)
- **Container**: `w-full bg-navy text-white`, `max-w-[1280px] mx-auto px-8 pt-14 pb-6`.
- **4-Column Link Directory (`grid grid-cols-4 gap-8 pb-10 border-b border-white/10`)**:
  - Column 1: Brand logo lockup, tagline "Make Every Connection Count.", and 4 social icons (`Instagram`, `LinkedIn`, `YouTube`, `Facebook` in `bg-white/10` boxes).
  - Column 2 (PRODUCTS): "Smart Review Stand", "Salesperson Review Card", "Personal Business Cards", "AI Review Assist".
  - Column 3 (COMPANY): "Customization", "How It Works", "FAQ", "Get a Quote".
  - Column 4 (CONTACT): `hello@revodigital.in` (`mail` icon), `+91 98765 43210` (`phone` icon), "WhatsApp Us" button (`bg-accent`).
- **Bottom Copyright Bar (`flex items-center justify-between pt-5 text-xs text-white/50`)**:
  - Left: "© 2026 RevoDigital. All rights reserved."
  - Right: "Smart contactless experiences for modern businesses."

---

## 3. Features Discovered & Probe Matrix

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Navigation | Header Brand Lockup | Dual overlapping ring mark + RevoDigital typography | None | Rendered logo & home link | Falls back to text if icon fails | Authoritative `Navbar.jsx` DOM |
| 2 | Navigation | Section Anchor Navigation | Smooth scroll to `#products`, `#customization`, `#how-it-works`, `#faq`, `#enquiry` | User click | Viewport scroll to section | Falls back to top if ID missing | `Navbar.jsx` links |
| 3 | Navigation | Quick WhatsApp Action | Direct contact action via WhatsApp button | User click | Opens WhatsApp with prefilled message | Opens web WhatsApp fallback | `Navbar.jsx` action pill |
| 4 | Hero | Value Proposition & Metrics | Headline, subtitle, rating (4.9/5), avatar stack | Dynamic ratings / copy | Visual social proof elements | Displays default static values | `Hero.jsx` left column |
| 5 | Hero | Scene Timeline Selector | 6-scene interactive tab bar (01-06) | Active index (1-6) | Toggles active step styling & scene | Retains current scene if invalid | `Hero.jsx` scene grid |
| 6 | Hero | Video Scrubber & Play State | Simulated video player with loop scrubber | Play button click | Toggles play/pause loop indicator | Displays fallback static frame | `Hero.jsx` video overlay |
| 7 | Hero | Ecosystem Compatibility Strip | Supported smartphone platforms (iOS, Android, etc.) | Static list | Visual brand badges | Text labels shown | `Hero.jsx` bottom banner |
| 8 | Products | Review Solutions Family | Highlights stand & salesperson card with sub-cards | Product data object | 2-column card with staggered imagery | Displays placeholder image | `ProductsSection.jsx` |
| 9 | Products | Personal Business Cards Family | Dark navy showcase with 6 feature pills & popup | Product data object | Inverted 2-col card with radial glow | Displays default profile data | `ProductsSection.jsx` |
| 10 | Gallery | Counter Stand Catalog | 3-column curated stand design grid | Design items array | Rendered stand cards with Enquire CTA | Empty grid fallback | `GalleryCustom.jsx` |
| 11 | Gallery | Business Card Catalog | 4-column card design grid (Onyx, Arctic, etc.) | Design items array | Rendered card designs with arrow link | Empty grid fallback | `GalleryCustom.jsx` |
| 12 | Customization | Before/After Comparison | Visual comparison of generic card vs branded stand | Brand asset presets | Interactive split card with color swatches | Default color swatches | `GalleryCustom.jsx` |
| 13 | How It Works | 3-Step Process Flow | Tap or scan -> Open experience -> Connect & review | Step definitions | 3 cards with sequential arrow links | Standard cards without arrows | `HowAiWho.jsx` |
| 14 | AI Assist | Interactive Review Demo | Real-time review drafting simulator | Star rating (1-5), customer notes | Dynamic drafted review text box | Uses default sample draft | `HowAiWho.jsx` AI phone |
| 15 | Audience | Dual-Sector Audience Showcase | Review solutions (6 sectors) vs Business cards (6 personas) | Category items array | 2 master cards with 3x2 image grids | Fallback generic tiles | `HowAiWho.jsx` |
| 16 | FAQ | Expandable Accordion | 9 Q&As with expand/collapse states | Active accordion ID | Toggles answer height & minus/plus icon | Defaults to first item open | `FaqFooter.jsx` |
| 17 | Lead Capture | Universal Enquiry Form | Captures lead info and prefilled product variant | Name, phone, business, qty, category | Prepares structured WhatsApp query | Shows inline validation error | `FaqFooter.jsx` |
| 18 | Global Footer | Multi-column directory | Products, company, contacts, copyright, social icons | Social links & company metadata | Responsive 4-col footer grid | Displays text fallbacks | `FaqFooter.jsx` |

---

## 4. Edge Cases & Behavioral Findings

| # | Feature | Input / Condition | Observed / Required Behavior |
|---|---------|-------------------|-----------------------------|
| 1 | Navigation | Mobile viewport (`< 768px`) | Navbar links collapse into hamburger icon; clicking opens slide-over mobile menu with backdrop blur. |
| 2 | Hero Scene Timeline | User clicks non-active scene (e.g. 05) | Active scene updates immediately to `bg-navy text-white`; scrubber progress bar and scene text update. |
| 3 | Gallery Enquire CTA | User clicks "Enquire" on "Sunset Pop Stand" | Page smooth-scrolls to `#enquiry`, updates the selected variant badge to "Smart Review Stand · Sunset Pop", and pre-selects "Review Solutions" category pill. |
| 4 | AI Phone Demo | User clicks 4 stars instead of 5 | Star icons fill gold up to 4; draft review updates tone to match selected rating. |
| 5 | AI Phone Demo | User clicks "Edit" button | Draft text replaces with an active editable `<textarea>` with focus ring; "Edit" changes to "Done". |
| 6 | FAQ Accordion | User clicks currently open item | Collapses the item, changing icon from `minus` to `plus` and resetting background from `bg-ice/40` to `bg-white`. |
| 7 | FAQ Accordion | User clicks unopened item | Expands clicked item with animated height transition; collapses previously open item. |
| 8 | Enquiry Form | Empty submission or invalid phone | Form highlights invalid fields with red border (`border-red-500`) and displays assistive helper text. |
| 9 | Enquiry Form | User clicks "Continue to WhatsApp" | Validates input; generates URL `https://wa.me/919876543210?text=${encodeURIComponent(formattedText)}` and opens in new window. |
| 10 | Image Preloading | High-resolution assets on slow connection | Preload `<link rel="preload" as="image">` tags and skeleton shimmer placeholders prevent layout shifts (CLS). |

---

## 5. TypeScript Props Modeling & Component Hierarchy for Next.js

```typescript
// ==========================================
// 1. Core Data Models (src/types/index.ts)
// ==========================================

export type ProductCategory = 'Review Solutions' | 'Business Cards';

export interface ProductVariant {
  id: string;
  name: string;
  category: ProductCategory;
  badge?: string;
  description: string;
  imageUrl: string;
  aspectRatio: string;
  features?: string[];
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

// ==========================================
// 2. Component Props Definitions
// ==========================================

// Navbar
export interface NavbarProps {
  onQuoteClick: () => void;
  activeSection?: string;
}

// Hero
export interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export interface HeroSceneViewerProps {
  activeScene: number;
  onSelectScene: (sceneIndex: number) => void;
}

// Products
export interface ProductsSectionProps {
  onEnquireProduct: (variantName: string, category: ProductCategory) => void;
  onExploreDesigns: (category: ProductCategory) => void;
}

// Gallery & Customization
export interface GallerySectionProps {
  onSelectVariant: (variantName: string) => void;
  onRequestCustomDesign: () => void;
}

// How It Works
export interface HowItWorksSectionProps {
  steps?: Array<{
    number: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

// AI Review Assist Demo
export interface AiReviewAssistProps {
  initialRating?: number;
  sampleDraft?: string;
  businessName?: string;
}

// Who Is It For
export interface WhoIsItForProps {
  businessSectors: AudienceSector[];
  individualPersonas: AudienceSector[];
}

// FAQ
export interface FaqSectionProps {
  faqs: FaqItem[];
  onChatSupportClick: () => void;
}

// Enquiry Form
export interface EnquirySectionProps {
  selectedProductVariant: string;
  selectedCategory: ProductCategory;
  onSubmitEnquiry: (data: EnquiryFormData) => void;
}

// Footer
export interface FooterProps {
  onWhatsAppClick: () => void;
}
```
