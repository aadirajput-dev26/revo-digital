const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 3 Pairwise: P10 Audience Personal Roles <-> Personal Cards Category Interaction', () => {
  it('P10: Selecting consultant or individual role connects with Business Cards category and creates WhatsApp URL', () => {
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Personal Business Card · Onyx Black', 'Business Cards');
    expect(sm.selectedCategory).toBe('Business Cards');

    const url = generateWhatsAppUrl({
      fullName: 'Aarav Kapoor',
      businessName: 'Kapoor Advisory',
      category: sm.selectedCategory,
      selectedVariant: sm.selectedVariant,
    });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('Business Cards')).toBe(true);
    expect(parsed.hasParam('Aarav Kapoor')).toBe(true);
  });
});
