import {
  ProductVariant,
  FaqItem,
  AudienceSector,
  ProductCategory,
} from "@/types";

export const COMPANY_INFO = {
  name: "RevoDigital",
  tagline: "Make Every Connection Count.",
  email: "hello@revodigital.in",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  rating: "4.9/5",
  ratingLabel: "Customer rating",
  trustedCount: "Trusted by 2,400+ businesses",
  reviewsProof: {
    count: "+128 Google reviews",
    sub: "Café Aroma · last 30 days",
  },
  oneTapProof: "Profile saved in 1 tap",
  footerCopyright: "© 2026 RevoDigital. All rights reserved.",
  footerTagline: "Smart contactless experiences for modern businesses.",
};

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Customization", href: "#customization" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_CONTENT = {
  categoryBadge: "Smart Contactless Experiences",
  trustBadge: "Trusted by 2,400+ businesses",
  headline: "Make Every Connection Count.",
  lead: "Smarter ways to collect customer reviews and share your professional identity. Discover contactless experiences designed for modern businesses.",
  primaryCta: "Explore Products",
  secondaryCta: "Get in Touch",
  valueProps: [
    { icon: "zap", label: "Tap & Scan" },
    { icon: "shield-check", label: "No app needed" },
    { icon: "qr-code", label: "QR backup" },
  ],
  studioHeader: "REVO STUDIO — HERO ANIMATION • 00:06 LOOP",
  loopBadge: "6–7s seamless loop",
  scrubberText: "Tap interaction — Scene 03/06",
  replaceVideoTag: "Replace with 3D video",
};

export const HERO_TIMELINE_STEPS = [
  { id: "01", label: "01 · Card floats" },
  { id: "02", label: "02 · Phone enters" },
  { id: "03", label: "03 · Tap" },
  { id: "04", label: "04 · Blue pulse" },
  { id: "05", label: "05 · Review UI" },
  { id: "06", label: "06 · Pull back" },
];

export const HERO_PLATFORMS = [
  "iOS",
  "Android",
  "Google",
  "WhatsApp",
  "Instagram",
  "LinkedIn",
];

export const PRODUCTS_CONTENT = {
  eyebrow: "02 — OUR PRODUCTS",
  title: "Two product families. One seamless experience.",
  subtitle:
    "Premium hardware paired with beautiful digital profiles — ready for counters, teams and professionals.",
  product1: {
    badge: "PRODUCT 01",
    categoryLabel: "Google Review Solutions",
    title: "Make Sharing Experiences Effortless.",
    description:
      "Give customers a convenient way to access your Google Review page through a simple tap or QR scan.",
    subProducts: [
      {
        icon: "presentation",
        title: "Smart Review Stand",
        description:
          "For reception desks & billing counters. Tabletop, branded, tap + QR.",
      },
      {
        icon: "id-card",
        title: "Salesperson Review Card",
        description:
          "Compact for staff. Collect reviews at point of billing.",
      },
    ],
    primaryCta: "Explore Designs",
    secondaryCta: "Enquire Now",
    mockup1: {
      tag: "Stand · Counter",
      query:
        "premium white tabletop google review stand with qr code on reception counter bright minimal",
      aspectRatio: "4:5",
    },
    mockup2: {
      tag: "Card · Portable",
      query:
        "hand holding premium black salesperson review tap card near smartphone bright office",
      aspectRatio: "4:5",
    },
  },
  product2: {
    badge: "PRODUCT 02",
    categoryLabel: "Personal Business Cards",
    title: "Your Professional Identity. One Simple Tap.",
    description:
      "Share your professional identity instantly with a personalized digital business profile.",
    featurePills: [
      "Photo + designation",
      "Phone & WhatsApp",
      "Email",
      "Social links",
      "Save contact",
      "Tap + QR",
    ],
    primaryCta: "Explore Designs",
    secondaryCta: "View Live Profile",
    preview: {
      initials: "AK",
      nameRole: "Aarav Kapoor · Consultant",
      status: "Tap preview — digital profile opens instantly",
    },
    mockup: {
      query:
        "luxury navy and gold smart business tap card on marble premium photography",
      aspectRatio: "16:10",
    },
  },
};

export const GALLERY_STANDS: ProductVariant[] = [
  {
    id: "stand-cloud-white",
    name: "Cloud White Stand",
    category: "Review Solutions",
    subtitle: "Clean minimal · QR + Tap",
    description: "Clean minimal tabletop stand with QR + Tap",
    imageUrl:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    aspectRatio: "4/3",
  },
  {
    id: "stand-midnight-navy",
    name: "Midnight Navy Stand",
    category: "Review Solutions",
    subtitle: "Bold counter presence",
    description: "Bold counter presence with premium dark navy finish",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    aspectRatio: "4/3",
  },
  {
    id: "stand-sunset-pop",
    name: "Sunset Pop Stand",
    category: "Review Solutions",
    subtitle: "Orange accent · hospitality",
    description: "Vibrant orange accent stand perfect for hospitality & cafes",
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    aspectRatio: "4/3",
  },
];

export const GALLERY_CARDS: ProductVariant[] = [
  {
    id: "card-onyx-black",
    name: "Onyx Black",
    category: "Business Cards",
    subtitle: "Premium matte · gold foil",
    description: "Premium matte finish with elegant gold foil details",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    aspectRatio: "3/3.4",
  },
  {
    id: "card-arctic-white",
    name: "Arctic White",
    category: "Business Cards",
    subtitle: "Minimalist · soft touch",
    description: "Minimalist soft-touch white smart business card",
    imageUrl:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    aspectRatio: "3/3.4",
  },
  {
    id: "card-ocean-gradient",
    name: "Ocean Gradient",
    category: "Business Cards",
    subtitle: "Contemporary blue blend",
    description: "Contemporary blue gradient blend smart NFC card",
    imageUrl:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    aspectRatio: "3/3.4",
  },
  {
    id: "card-terra-orange",
    name: "Terra Orange",
    category: "Business Cards",
    subtitle: "Bold creative · startups",
    description: "Bold creative terracotta orange card for modern startups",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    aspectRatio: "3/3.4",
  },
];

export const CUSTOMIZATION_CONTENT = {
  eyebrow: "04 — CUSTOMIZATION",
  title: "Your Card. Your Identity. Your Design.",
  subtitle:
    "Start from a curated design or send your artwork — we handle logos, colors, typography and QR destinations.",
  features: [
    "Logo personalization",
    "Business branding",
    "Custom colors",
    "Typography & layouts",
    "Personalized QR",
    "RevoDigital studio design",
  ],
  exploreCta: "Explore Existing Designs",
  requestCta: "Request Custom Design",
  before: {
    label: "BEFORE · Standard",
    query: "plain white generic review card blank minimal product photo",
    imageUrl:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
  },
  after: {
    label: "AFTER · Branded for Brew & Bean",
    query:
      "branded coffee shop review stand with logo warm cozy cafe counter",
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    swatches: ["#FF8A3D", "#2563EB", "#FFFFFF"],
  },
};

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Tap or Scan",
    description:
      "Hold any smartphone near the card, or scan the QR. No app to download.",
    icon: "nfc",
  },
  {
    number: "02",
    title: "Open the Experience",
    description:
      "Review page or digital profile opens instantly in the browser.",
    icon: "smartphone",
  },
  {
    number: "03",
    title: "Connect, Share or Review",
    description:
      "Save contact, follow, or leave a Google review in seconds.",
    icon: "star",
  },
];

export const HOW_IT_WORKS_PHOTOS = [
  {
    label: "Review flow · at the counter",
    query:
      "customer tapping phone on review stand at restaurant billing counter bright",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Networking flow · one tap share",
    query:
      "two professionals exchanging contact with smart business card tap handshake office bright",
    imageUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const AI_REVIEW_CONTENT = {
  eyebrow: "06 — AI REVIEW ASSIST · INCLUDED",
  title: "Make Sharing Genuine Experiences Easier.",
  description:
    "Customers often know they loved you — but not what to write. AI turns a few honest notes into a natural draft they control, edit and choose to publish.",
  steps: [
    "Customer shares a few details about their real visit",
    "AI drafts a natural review from only those details",
    "Customer edits, approves and posts to Google themselves",
  ],
  disclaimer:
    "Responsible by design: never fabricates experiences, never forces ratings, never auto-posts. The customer always stays in control.",
  phoneDemo: {
    question: "How was Brew & Bean?",
    customerInput: "“Great oat latte, fast wifi, friendly staff…”",
    aiDraftBadge: "AI draft — editable",
    aiDraftText:
      "“Loved the oat latte and quick service. Perfect spot to work — will be back!”",
    editCta: "Edit",
    continueCta: "Continue to Google",
  },
};

export const BUSINESS_SECTORS: AudienceSector[] = [
  {
    id: "sec-restaurants",
    title: "Restaurants",
    category: "business",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sec-clinics",
    title: "Clinics & Healthcare",
    category: "business",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sec-salons",
    title: "Salons & Spas",
    category: "business",
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sec-retail",
    title: "Retail Stores",
    category: "business",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sec-hotels",
    title: "Hotels & Hospitality",
    category: "business",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sec-auto",
    title: "Auto Showrooms",
    category: "business",
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
  },
];

export const INDIVIDUAL_PERSONAS: AudienceSector[] = [
  {
    id: "role-entrepreneurs",
    title: "Entrepreneurs",
    category: "individual",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "role-freelancers",
    title: "Freelancers",
    category: "individual",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "role-consultants",
    title: "Consultants",
    category: "individual",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "role-sales",
    title: "Sales Pros",
    category: "individual",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "role-owners",
    title: "Business Owners",
    category: "individual",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "role-creators",
    title: "Creators",
    category: "individual",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How does contactless tapping work?",
    answer:
      "Hold any NFC-enabled smartphone near the card or stand. The digital experience opens instantly in the browser — no app needed.",
    defaultOpen: true,
  },
  {
    id: "faq-2",
    question: "Can customers scan a QR code instead?",
    answer:
      "Yes. Every RevoDigital product includes a high-contrast QR code as a standard fallback for devices without NFC or when scanning is preferred.",
    defaultOpen: false,
  },
  {
    id: "faq-3",
    question: "Are the cards compatible with different smartphones?",
    answer:
      "Yes. NFC works natively across all modern iPhones (iPhone 7 and newer) and virtually all Android devices without downloading any third-party app.",
    defaultOpen: false,
  },
  {
    id: "faq-4",
    question: "Can I add my business logo?",
    answer:
      "Absolutely. We provide full high-resolution UV print customization with your exact company logo, brand colors, and typography.",
    defaultOpen: false,
  },
  {
    id: "faq-5",
    question: "Can I provide my own design?",
    answer:
      "Yes, you can upload or send your ready-to-print vector artwork (AI, PDF, SVG), or have our design studio lay it out for you.",
    defaultOpen: false,
  },
  {
    id: "faq-6",
    question: "Can RevoDigital create a custom design?",
    answer:
      "Yes! Our in-house design studio creates custom bespoke mockups tailored to your brand identity at no extra design fee.",
    defaultOpen: false,
  },
  {
    id: "faq-7",
    question: "How does the AI Review Assist feature work?",
    answer:
      "Customers tap the card, bullet out a couple of honest notes about their visit, and AI turns them into a complete draft that they can edit and publish to Google themselves.",
    defaultOpen: false,
  },
  {
    id: "faq-8",
    question: "How can I place an order?",
    answer:
      "You can tap any 'Enquire' button or fill out the enquiry form below. It pre-fills your details and connects directly to our team on WhatsApp for immediate confirmation.",
    defaultOpen: false,
  },
  {
    id: "faq-9",
    question: "What are the delivery options?",
    answer:
      "We ship nationwide across India via expedited courier. Typical dispatch takes 3–5 business days following design approval.",
    defaultOpen: false,
  },
];

export const ENQUIRY_CONTENT = {
  eyebrow: "ENQUIRY · ONE FORM, EVERY PRODUCT",
  title: "Tell us what you need. We handle the rest on WhatsApp.",
  checkpoints: [
    "Product & variant auto-filled from the button you tapped",
    "No payment now — just design + quantity + delivery",
    "Prefilled WhatsApp message — you press send",
  ],
  cardTitle: "Enquire Now",
  submitCta: "Continue to WhatsApp",
  helperText: "Opens WhatsApp with your enquiry pre-filled. You press send.",
  defaultFormValues: {
    fullName: "Priya Sharma",
    whatsappNumber: "+91 98200 12345",
    businessName: "Brew & Bean",
    quantity: 2,
    category: "Review Solutions" as ProductCategory,
    selectedVariant: "Smart Review Stand · Cloud White",
    additionalRequirements: "Need logo + menu QR on the stand…",
  },
};

export const FOOTER_CONTENT = {
  columns: {
    products: {
      title: "PRODUCTS",
      links: [
        { label: "Smart Review Stand", href: "#products" },
        { label: "Salesperson Review Card", href: "#products" },
        { label: "Personal Business Cards", href: "#products" },
        { label: "AI Review Assist", href: "#how-it-works" },
      ],
    },
    company: {
      title: "COMPANY",
      links: [
        { label: "Customization", href: "#customization" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "FAQ", href: "#faq" },
        { label: "Get a Quote", href: "#enquiry" },
      ],
    },
    contact: {
      title: "CONTACT",
      email: "hello@revodigital.in",
      phone: "+91 98765 43210",
      cta: "WhatsApp Us",
    },
  },
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "YouTube", href: "https://youtube.com" },
    { name: "Facebook", href: "https://facebook.com" },
  ],
};
