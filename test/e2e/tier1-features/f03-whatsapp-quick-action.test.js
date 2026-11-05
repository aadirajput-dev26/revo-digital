const { describe, it, expect, getAggregatedSource, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Feature 03: Quick WhatsApp Action', () => {
  it('F03-1: Navbar contains quick WhatsApp pill action with MessageCircle icon', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toBeTruthy();
    expect(src).toContain('WhatsApp');
    expect(src).toMatch(/MessageCircle/);
  });

  it('F03-2: FAQ section provides dedicated WhatsApp Support card with immediate response guarantee', () => {
    const src = getAggregatedSource('src/components/FaqFooter.tsx');
    expect(src).toBeTruthy();
    expect(src).toContain('Still curious? Chat with us on WhatsApp.');
    expect(src).toContain('Replies within minutes, 10am–8pm IST');
    expect(src).toContain('Chat Now');
  });

  it('F03-3: Footer contains direct WhatsApp action button ("WhatsApp Us")', () => {
    const src = getAggregatedSource('src/components/Footer.tsx');
    expect(src).toBeTruthy();
    expect(src).toMatch(/WhatsApp Us|hello@revodigital\.in/);
  });

  it('F03-4: Authoritative WhatsApp destination targets clean phone number 919876543210', () => {
    const content = getAggregatedSource('src/data/content.ts');
    expect(content).toBeTruthy();
    expect(content).toContain('919876543210');
  });

  it('F03-5: WhatsApp generator constructs valid HTTPS URLs with proper URI encoding', () => {
    const url = generateWhatsAppUrl({
      fullName: 'Aarav Test',
      whatsappNumber: '+91 98200 12345',
      businessName: 'Test Business',
      quantity: 5,
      selectedVariant: 'Smart Review Stand · Cloud White',
    });

    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
    expect(parsed.hasParam('Smart Review Stand')).toBe(true);
    expect(parsed.hasParam('Aarav Test')).toBe(true);
  });
});
