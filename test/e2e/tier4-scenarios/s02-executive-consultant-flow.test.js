const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 02: Executive Consultant Profile Flow', () => {
  it('S02: Consultant explores Onyx Black smart card, verifies profile preview, and submits tailored order', () => {
    // 1. Consultant scrolls to Product 02 and checks live contact preview
    const prodSrc = getAggregatedSource('src/components/ProductsSection.tsx');
    expect(prodSrc).toContain('Personal Business Cards');
    expect(prodSrc).toContain('Your Professional Identity. One Simple Tap.');
    expect(prodSrc).toContain('Aarav Kapoor · Consultant');

    // 2. Consultant explores Section 03 Card Gallery and selects Onyx Black
    const gallerySrc = getAggregatedSource('src/components/GalleryCustom.tsx');
    expect(gallerySrc).toContain('Onyx Black');
    expect(gallerySrc).toContain('Premium matte · gold foil');

    const enquiryState = createEnquiryStateMachine();
    enquiryState.setSelectedVariant('Personal Business Card · Onyx Black', 'Business Cards');
    expect(enquiryState.selectedVariant).toBe('Personal Business Card · Onyx Black');
    expect(enquiryState.selectedCategory).toBe('Business Cards');

    // 3. Consultant submits order for 1 personal smart card with gold foil
    const url = generateWhatsAppUrl({
      fullName: 'Aarav Kapoor',
      whatsappNumber: '+91 99887 76655',
      businessName: 'Kapoor Strategic Advisory',
      quantity: 1,
      category: enquiryState.selectedCategory,
      selectedVariant: enquiryState.selectedVariant,
      additionalRequirements: 'Need matte gold foil deboss with LinkedIn + vCard NFC configuration',
    });

    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
    expect(parsed.hasParam('Aarav Kapoor')).toBe(true);
    expect(parsed.hasParam('Onyx Black')).toBe(true);
    expect(parsed.hasParam('Business Cards')).toBe(true);
    expect(parsed.hasParam('gold foil deboss')).toBe(true);
  });
});
