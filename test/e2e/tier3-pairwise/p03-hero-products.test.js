const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P03 Hero <-> Products Section Interaction', () => {
  it('P03: Hero "Explore Products" CTA links to Section 02 anchor #products', () => {
    const heroSrc = getAggregatedSource('src/components/Hero.tsx');
    const prodSrc = getAggregatedSource('src/components/ProductsSection.tsx');

    expect(heroSrc).toContain('Explore Products');
    expect(prodSrc).toContain('02 — OUR PRODUCTS');
    expect(prodSrc).toContain('Two product families. One seamless experience.');
  });
});
