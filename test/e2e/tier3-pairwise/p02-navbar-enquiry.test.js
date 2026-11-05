const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P02 Navbar <-> Enquiry Form Interaction', () => {
  it('P02: Navbar "Get a Quote" CTA navigates to Enquiry anchor target #enquiry', () => {
    const navSrc = getAggregatedSource('src/components/Navbar.tsx');
    const enquirySrc = getAggregatedSource('src/components/EnquirySection.tsx');

    expect(navSrc).toContain('Get a Quote');
    expect(enquirySrc).toContain('Tell us what you need. We handle the rest on WhatsApp.');
  });
});
