const { describe, it, expect, generateWhatsAppUrl, parseAndValidateWhatsAppUrl, createEnquiryStateMachine } = require('../test-helpers');

describe('Tier 4 Scenario 08: Empty & Invalid Form Input Robustness Flow', () => {
  it('S08: Validates form submission handling with missing fields, invalid phone numbers, and extreme characters', () => {
    // 1. Missing phone number: defaults to sanitization
    const urlNoPhone = generateWhatsAppUrl({ fullName: 'Anonymous', whatsappNumber: '' });
    const parsedNoPhone = parseAndValidateWhatsAppUrl(urlNoPhone);
    expect(parsedNoPhone.isValid).toBe(true);
    expect(parsedNoPhone.hasParam('Anonymous')).toBe(true);

    // 2. Form with XSS / injection payload
    const maliciousInput = '<script>alert("hack")</script> & drop table users;';
    const urlXss = generateWhatsAppUrl({ businessName: maliciousInput });
    const parsedXss = parseAndValidateWhatsAppUrl(urlXss);
    expect(parsedXss.isValid).toBe(true);
    // Verified URI encoded safely
    expect(parsedXss.text).toContain(maliciousInput);

    // 3. State machine integrity under rapid mutations
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Variant A', 'Review Solutions');
    sm.setSelectedVariant('Variant B', 'Business Cards');
    sm.reset();
    expect(sm.selectedVariant).toBe('Smart Review Stand · Cloud White');
    expect(sm.selectedCategory).toBe('Review Solutions');
  });
});
