const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P04 Products Section <-> Gallery Catalog Interaction', () => {
  it('P04: ProductsSection "Explore Designs" connects to GalleryCustom Section 03', () => {
    const prodSrc = getAggregatedSource('src/components/ProductsSection.tsx');
    const gallerySrc = getAggregatedSource('src/components/GalleryCustom.tsx');

    expect(prodSrc).toContain('Explore Designs');
    expect(gallerySrc).toContain('03 — EXPLORE DESIGNS');
    expect(gallerySrc).toContain('A design for every brand personality.');
  });
});
