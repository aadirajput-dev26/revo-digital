const { describe, it, expect, createEnquiryStateMachine, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 3 Pairwise: P06 Customization Studio <-> Enquiry Context Interaction', () => {
  it('P06: "Request Custom Design" CTA preselects custom branding in EnquiryContext and routes to WhatsApp', () => {
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Custom Design · Branded Review Stand', 'Review Solutions');

    const url = generateWhatsAppUrl({
      fullName: 'Café Owner',
      businessName: 'Brew & Bean',
      selectedVariant: sm.selectedVariant,
      additionalRequirements: 'Need logo + custom color scheme from Customization studio',
    });

    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('Custom Design')).toBe(true);
    expect(parsed.hasParam('Brew & Bean')).toBe(true);
  });
});
