// ==========================================
// Core Data Models (src/types/index.ts)
// ==========================================

export type ProductCategory = 'Review Solutions' | 'Business Cards';

export interface ProductVariant {
  id: string;
  name: string;
  category: ProductCategory;
  badge?: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  aspectRatio?: string;
  tag?: string;
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
// Component Props Definitions
// ==========================================

export interface NavbarProps {
  onQuoteClick?: () => void;
  activeSection?: string;
}

export interface HeroSectionProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export interface HeroSceneViewerProps {
  activeScene: number;
  onSelectScene: (sceneIndex: number) => void;
}

export interface ProductsSectionProps {
  onEnquireProduct?: (variantName: string, category: ProductCategory) => void;
  onExploreDesigns?: (category: ProductCategory) => void;
}

export interface GallerySectionProps {
  onSelectVariant?: (variantName: string) => void;
  onRequestCustomDesign?: () => void;
}

export interface HowItWorksSectionProps {
  steps?: Array<{
    number: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface AiReviewAssistProps {
  initialRating?: number;
  sampleDraft?: string;
  businessName?: string;
}

export interface WhoIsItForProps {
  businessSectors?: AudienceSector[];
  individualPersonas?: AudienceSector[];
}

export interface FaqSectionProps {
  faqs?: FaqItem[];
  onChatSupportClick?: () => void;
}

export interface EnquirySectionProps {
  selectedProductVariant?: string;
  selectedCategory?: ProductCategory;
  onSubmitEnquiry?: (data: EnquiryFormData) => void;
}

export interface FooterProps {
  onWhatsAppClick?: () => void;
}

// ==========================================
// Context Types
// ==========================================

export interface EnquiryContextType {
  selectedVariant: string;
  setSelectedVariant: (variant: string, category?: ProductCategory) => void;
  selectedCategory: ProductCategory;
  setSelectedCategory: (category: ProductCategory) => void;
}
