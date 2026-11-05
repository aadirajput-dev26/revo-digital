const { describe, it, expect, getAggregatedSource, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 3 Pairwise: P17 Footer WhatsApp Action <-> Omnichannel Contact Alignment', () => {
  it('P17: Footer "WhatsApp Us" button generates valid WhatsApp URL with official target phone', () => {
    const src = getAggregatedSource('src/components/Footer.tsx');
    expect(src).toMatch(/WhatsApp Us|hello@revodigital\.in/);

    const url = generateWhatsAppUrl({ targetPhone: '919876543210' });
    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
  });
});
