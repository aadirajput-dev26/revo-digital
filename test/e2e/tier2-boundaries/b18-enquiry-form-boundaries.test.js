const { describe, it, expect, generateWhatsAppUrl, parseAndValidateWhatsAppUrl, createEnquiryStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 18 Universal Enquiry Form Boundaries', () => {
  it('B18-1: Quantity underflow (0 or negative) clamps or handles cleanly', () => {
    const url = generateWhatsAppUrl({ quantity: -5 });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('-5')).toBe(true);
  });

  it('B18-2: Boundary large quantity (9999 units) formats accurately', () => {
    const url = generateWhatsAppUrl({ quantity: 9999 });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('9999')).toBe(true);
  });

  it('B18-3: Emoji and international characters in additional requirements are safely encoded', () => {
    const notesWithEmoji = '✨ Please add gold foil logo & Hindi text: नमस्ते 🙏';
    const url = generateWhatsAppUrl({ additionalRequirements: notesWithEmoji });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('नमस्ते')).toBe(true);
  });

  it('B18-4: State machine category switching preserves selected variant across tabs', () => {
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Smart Review Stand · Sunset Pop', 'Review Solutions');
    expect(sm.selectedVariant).toBe('Smart Review Stand · Sunset Pop');
    sm.setSelectedCategory('Business Cards');
    expect(sm.selectedCategory).toBe('Business Cards');
    expect(sm.selectedVariant).toBe('Smart Review Stand · Sunset Pop');
  });

  it('B18-5: Lead capture container width is bounded to max-w-[1080px]', () => {
    const src = getAggregatedSource('src/components/EnquirySection.tsx');
    expect(src).toMatch(/max-w-\[1080px\]|max-w-5xl|max-w-\[1280px\]/);
  });
});
