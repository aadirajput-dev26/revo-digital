const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 3 Pairwise: P05 Gallery Stand <-> Enquiry Context Interaction', () => {
  it('P05: Clicking "Enquire" on Cloud White Stand preselects variant and generates tailored WhatsApp payload', () => {
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Smart Review Stand · Cloud White', 'Review Solutions');
    expect(sm.selectedVariant).toBe('Smart Review Stand · Cloud White');
    expect(sm.selectedCategory).toBe('Review Solutions');

    const url = generateWhatsAppUrl({
      fullName: 'Aarav Test',
      selectedVariant: sm.selectedVariant,
      category: sm.selectedCategory,
    });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('Smart Review Stand · Cloud White')).toBe(true);
  });
});
