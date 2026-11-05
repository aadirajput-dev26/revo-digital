const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 01: Café Owner Order Flow', () => {
  it('S01: Complete journey of Café Aroma owner ordering 2 Cloud White stands via WhatsApp', () => {
    // 1. Owner arrives on Hero and verifies social proof
    const heroSrc = getAggregatedSource('src/components/Hero.tsx');
    expect(heroSrc).toContain('Make Every Connection Count.');
    expect(heroSrc).toContain('+128 Google reviews');
    expect(heroSrc).toContain('Café Aroma');

    // 2. Owner browses to Section 03 Stand Catalog and clicks Enquire on Cloud White Stand
    const gallerySrc = getAggregatedSource('src/components/GalleryCustom.tsx');
    expect(gallerySrc).toContain('Cloud White Stand');

    const enquiryState = createEnquiryStateMachine();
    enquiryState.setSelectedVariant('Smart Review Stand · Cloud White', 'Review Solutions');
    expect(enquiryState.selectedVariant).toBe('Smart Review Stand · Cloud White');
    expect(enquiryState.selectedCategory).toBe('Review Solutions');

    // 3. Owner fills out the Lead Capture Form
    const formData = {
      fullName: 'Vikram Patel',
      whatsappNumber: '+91 98201 55443',
      businessName: 'Café Aroma',
      quantity: 2,
      category: enquiryState.selectedCategory,
      selectedVariant: enquiryState.selectedVariant,
      additionalRequirements: 'Please place Google Review QR on front and café logo on top',
    };

    // 4. Owner clicks "Continue to WhatsApp" and generates live WhatsApp payload
    const url = generateWhatsAppUrl(formData);
    const parsed = parseAndValidateWhatsAppUrl(url);

    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
    expect(parsed.hasParam('Café Aroma')).toBe(true);
    expect(parsed.hasParam('Vikram Patel')).toBe(true);
    expect(parsed.hasParam('Smart Review Stand · Cloud White')).toBe(true);
    expect(parsed.hasParam('2')).toBe(true);
    expect(parsed.hasParam('café logo on top')).toBe(true);
  });
});
