const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 3 Pairwise: P18 Global Enquiry Context Multi-Component Synchronization', () => {
  it('P18: Seamless state synchronization from arbitrary catalog variant selection to final WhatsApp URL generation', () => {
    // 1. Initial page load has default variant
    const sm = createEnquiryStateMachine('Smart Review Stand · Cloud White', 'Review Solutions');
    expect(sm.selectedVariant).toBe('Smart Review Stand · Cloud White');

    // 2. User browses to Section 03 and clicks Enquire on "Sunset Pop Stand"
    sm.setSelectedVariant('Smart Review Stand · Sunset Pop', 'Review Solutions');
    expect(sm.selectedVariant).toBe('Smart Review Stand · Sunset Pop');

    // 3. User browses to Section 04 and switches to "Terra Orange" business card
    sm.setSelectedVariant('Personal Business Card · Terra Orange', 'Business Cards');
    expect(sm.selectedVariant).toBe('Personal Business Card · Terra Orange');
    expect(sm.selectedCategory).toBe('Business Cards');

    // 4. User fills Enquiry Form and generates final WhatsApp payload
    const finalUrl = generateWhatsAppUrl({
      fullName: 'Ananya Roy',
      whatsappNumber: '+91 99000 88776',
      businessName: 'Studio Terra',
      quantity: 100,
      category: sm.selectedCategory,
      selectedVariant: sm.selectedVariant,
      additionalRequirements: 'Matte terracotta finish with QR destination to portfolio',
    });

    const parsed = parseAndValidateWhatsAppUrl(finalUrl);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('Terra Orange')).toBe(true);
    expect(parsed.hasParam('Business Cards')).toBe(true);
    expect(parsed.hasParam('100')).toBe(true);
    expect(parsed.hasParam('Ananya Roy')).toBe(true);
  });
});
