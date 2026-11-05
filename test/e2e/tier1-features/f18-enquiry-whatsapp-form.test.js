const { describe, it, expect, getAggregatedSource, generateWhatsAppUrl, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Feature 18: Universal Enquiry Form & WhatsApp Link', () => {
  function getEnquirySource() {
    return getAggregatedSource('src/components/EnquirySection.tsx');
  }

  it('F18-1: Displays eyebrow "ENQUIRY · ONE FORM, EVERY PRODUCT" and title "Tell us what you need. We handle the rest on WhatsApp."', () => {
    const src = getEnquirySource();
    expect(src).toBeTruthy();
    expect(src).toContain('ENQUIRY · ONE FORM, EVERY PRODUCT');
    expect(src).toContain('Tell us what you need. We handle the rest on WhatsApp.');
  });

  it('F18-2: Displays 3 value checkpoints detailing the WhatsApp checkout model', () => {
    const src = getEnquirySource();
    expect(src).toBeTruthy();
    expect(src).toContain('Product & variant auto-filled from the button you tapped');
    expect(src).toContain('No payment now — just design + quantity + delivery');
    expect(src).toContain('Prefilled WhatsApp message — you press send');
  });

  it('F18-3: Form card contains all required lead capture inputs', () => {
    const src = getEnquirySource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/Full Name|fullName/);
    expect(src).toMatch(/WhatsApp Number|whatsappNumber/);
    expect(src).toMatch(/Business Name|businessName/);
    expect(src).toMatch(/Quantity|quantity/);
    expect(src).toMatch(/Additional Requirements|additionalRequirements/);
  });

  it('F18-4: Submit button features WhatsApp brand styling (#25D366) and label "Continue to WhatsApp"', () => {
    const src = getEnquirySource();
    expect(src).toBeTruthy();
    expect(src).toContain('Continue to WhatsApp');
    expect(src).toMatch(/#25D366|bg-whatsapp|whatsapp/i);
  });

  it('F18-5: Generates comprehensive WhatsApp enquiry payload with all form fields', () => {
    const url = generateWhatsAppUrl({
      fullName: 'Priya Sharma',
      whatsappNumber: '+91 98200 12345',
      businessName: 'Brew & Bean',
      quantity: 2,
      category: 'Review Solutions',
      selectedVariant: 'Smart Review Stand · Cloud White',
      additionalRequirements: 'Need logo + menu QR on the stand…',
    });

    const parsed = parseAndValidateWhatsAppUrl(url);
    expect(parsed.isValid).toBe(true);
    expect(parsed.phone).toBe('919876543210');
    expect(parsed.hasParam('Priya Sharma')).toBe(true);
    expect(parsed.hasParam('Brew & Bean')).toBe(true);
    expect(parsed.hasParam('Smart Review Stand · Cloud White')).toBe(true);
    expect(parsed.hasParam('2')).toBe(true);
    expect(parsed.hasParam('Need logo + menu QR')).toBe(true);
  });
});
