const { describe, it, expect, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 03 WhatsApp Quick Action Boundaries', () => {
  it('B03-1: Sanitizes complex phone formatting (spaces, pluses, dashes, parentheses)', () => {
    const rawPhone = '+91 (987) 65-43210';
    const url = generateWhatsAppUrl({ targetPhone: rawPhone });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
  });

  it('B03-2: Handles completely empty optional parameters without generating undefined strings', () => {
    const url = generateWhatsAppUrl({
      fullName: '',
      whatsappNumber: '',
      businessName: '',
      additionalRequirements: '',
    });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.text).not.toContain('undefined');
    expect(parsed.text).not.toContain('null');
  });

  it('B03-3: Preserves special characters, quotes, and newlines via strict URI encoding', () => {
    const complexNotes = 'Notes: "Line 1" & Line 2 + 100% discount? <test> #123';
    const url = generateWhatsAppUrl({ additionalRequirements: complexNotes });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.hasParam('Notes: "Line 1" & Line 2')).toBe(true);
  });

  it('B03-4: Extreme payload length (>2000 characters) generates valid URL structure', () => {
    const longString = 'A'.repeat(2500);
    const url = generateWhatsAppUrl({ additionalRequirements: longString });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.text.length).toBeGreaterThanOrEqual(2500);
  });

  it('B03-5: International dialing code validation (10 to 15 digits)', () => {
    const shortPhone = '12345'; // Invalid
    const validPhone = '919876543210'; // Valid
    expect(parseAndValidateWhatsAppUrl(`https://wa.me/${shortPhone}?text=Hi`).isValid).toBe(false);
    expect(parseAndValidateWhatsAppUrl(`https://wa.me/${validPhone}?text=Hi`).isValid).toBe(true);
  });
});
