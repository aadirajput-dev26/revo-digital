const { describe, it, expect, generateWhatsAppUrl, parseAndValidateWhatsAppUrl, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 09: Direct WhatsApp Contact Flow across Omnichannel Touchpoints', () => {
  it('S09: Verifies all 4 distinct WhatsApp access points generate valid URLs with consistent target phone', () => {
    const TARGET_PHONE = '919876543210';

    // Touchpoint 1: Navbar WhatsApp Pill
    const navUrl = generateWhatsAppUrl({ targetPhone: TARGET_PHONE });
    const navParsed = parseAndValidateWhatsAppUrl(navUrl);
    expect(navParsed.isValid).toBe(true);
    expect(navParsed.phone).toBe(TARGET_PHONE);

    // Touchpoint 2: FAQ Support Banner
    const faqUrl = generateWhatsAppUrl({
      targetPhone: TARGET_PHONE,
      additionalRequirements: 'Quick query from FAQ support banner',
    });
    const faqParsed = parseAndValidateWhatsAppUrl(faqUrl);
    expect(faqParsed.isValid).toBe(true);
    expect(faqParsed.phone).toBe(TARGET_PHONE);
    expect(faqParsed.hasParam('FAQ support banner')).toBe(true);

    // Touchpoint 3: Lead Capture Form WhatsApp Generator
    const formUrl = generateWhatsAppUrl({
      fullName: 'Sunil Rao',
      whatsappNumber: '+91 98333 44556',
      businessName: 'Rao Dental Clinic',
      quantity: 4,
      category: 'Review Solutions',
      selectedVariant: 'Smart Review Stand · Cloud White',
      additionalRequirements: 'Clinic reception counter stands',
      targetPhone: TARGET_PHONE,
    });
    const formParsed = parseAndValidateWhatsAppUrl(formUrl);
    expect(formParsed.isValid).toBe(true);
    expect(formParsed.phone).toBe(TARGET_PHONE);
    expect(formParsed.hasParam('Rao Dental Clinic')).toBe(true);

    // Touchpoint 4: Global Footer Contact Section
    const footerUrl = generateWhatsAppUrl({ targetPhone: TARGET_PHONE });
    const footerParsed = parseAndValidateWhatsAppUrl(footerUrl);
    expect(footerParsed.isValid).toBe(true);
    expect(footerParsed.phone).toBe(TARGET_PHONE);
  });
});
