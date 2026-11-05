const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P16 Footer Directory Links <-> Section Anchor Consistency', () => {
  it('P16: Footer company and product links match navbar navigation anchor targets', () => {
    const src = getAggregatedSource('src/components/Footer.tsx');
    expect(src).toMatch(/#products/);
    expect(src).toMatch(/#customization/);
    expect(src).toMatch(/#how-it-works/);
    expect(src).toMatch(/#faq/);
    expect(src).toMatch(/#enquiry/);
  });
});
