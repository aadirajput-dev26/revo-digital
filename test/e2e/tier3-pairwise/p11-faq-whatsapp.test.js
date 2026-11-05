const { describe, it, expect, getAggregatedSource, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 3 Pairwise: P11 FAQ WhatsApp Support <-> Navbar WhatsApp Action Consistency', () => {
  it('P11: FAQ WhatsApp Support card and Navbar WhatsApp use identical phone target 919876543210', () => {
    const src = getAggregatedSource('src/components/FaqFooter.tsx');
    expect(src).toContain('Still curious? Chat with us on WhatsApp.');

    const url = generateWhatsAppUrl({ targetPhone: '919876543210' });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
  });
});
