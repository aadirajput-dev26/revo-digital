const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 05: Custom Brand Before/After Audit & Design Request', () => {
  it('S05: Business owner evaluates Before/After comparison, inspects palette chips, and requests custom studio mockup', () => {
    // 1. User scrolls to Section 04 Customization Studio
    const customSrc = getAggregatedSource('src/components/GalleryCustom.tsx');
    expect(customSrc).toContain('04 — CUSTOMIZATION');
    expect(customSrc).toContain('Your Card. Your Identity. Your Design.');
    expect(customSrc).toContain('BEFORE · Standard');
    expect(customSrc).toContain('AFTER · Branded for Brew & Bean');

    // 2. User verifies all 6 studio service checklist items
    expect(customSrc).toContain('Logo personalization');
    expect(customSrc).toContain('Business branding');
    expect(customSrc).toContain('Custom colors');
    expect(customSrc).toContain('Typography & layouts');
    expect(customSrc).toContain('Personalized QR');
    expect(customSrc).toContain('RevoDigital studio design');

    // 3. User clicks "Request Custom Design" CTA
    expect(customSrc).toContain('Request Custom Design');
    const enquiry = createEnquiryStateMachine();
    enquiry.setSelectedVariant('Custom Bespoke Design · Branded Review Stand', 'Review Solutions');

    // 4. User completes custom design brief enquiry
    const customUrl = generateWhatsAppUrl({
      fullName: 'Natasha Sengupta',
      whatsappNumber: '+91 97766 55443',
      businessName: 'The Artisan Bakery',
      quantity: 3,
      category: enquiry.selectedCategory,
      selectedVariant: enquiry.selectedVariant,
      additionalRequirements: 'Need warm beige and forest green brand palette with embossed pastry logo',
    });

    const parsed = parseAndValidateWhatsAppUrl(customUrl);
    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
    expect(parsed.hasParam('The Artisan Bakery')).toBe(true);
    expect(parsed.hasParam('Custom Bespoke Design')).toBe(true);
    expect(parsed.hasParam('forest green')).toBe(true);
  });
});
