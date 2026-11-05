const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 3 Pairwise: P15 Card Gallery Finish <-> Enquiry Context Interaction', () => {
  it('P15: Clicking "Enquire Now" on "Onyx Black" updates EnquiryContext to Business Cards category and preselects variant', () => {
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Personal Business Card · Onyx Black', 'Business Cards');

    expect(sm.selectedVariant).toBe('Personal Business Card · Onyx Black');
    expect(sm.selectedCategory).toBe('Business Cards');

    const url = generateWhatsAppUrl({
      fullName: 'Vikram Mehta',
      whatsappNumber: '+91 98111 22233',
      businessName: 'Mehta Capital',
      quantity: 1,
      category: sm.selectedCategory,
      selectedVariant: sm.selectedVariant,
    });

    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('Onyx Black')).toBe(true);
    expect(parsed.hasParam('Business Cards')).toBe(true);
  });
});
