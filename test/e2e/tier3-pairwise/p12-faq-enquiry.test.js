const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P12 FAQ Question 8 <-> Enquiry Form Workflow Integration', () => {
  it('P12: FAQ Question 8 directly explains and guides user to the Enquiry Form WhatsApp flow', () => {
    const src = getAggregatedSource('src/components/FaqFooter.tsx');
    expect(src).toContain('How can I place an order?');
    expect(src).toContain("You can tap any 'Enquire' button or fill out the enquiry form below. It pre-fills your details and connects directly to our team on WhatsApp for immediate confirmation.");
  });
});
