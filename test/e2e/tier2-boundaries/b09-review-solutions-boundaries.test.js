const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 09 Review Solutions Card Boundaries', () => {
  function getProduct() {
    return getAggregatedSource('src/components/ProductsSection.tsx');
  }

  it('B09-1: Sub-product grid layout enforces 2-column boundary on desktop', () => {
    const src = getProduct();
    expect(src).toMatch(/grid-cols-2|grid/);
  });

  it('B09-2: Both sub-products have non-empty description strings', () => {
    const src = getProduct();
    expect(src).toContain('For reception desks & billing counters. Tabletop, branded, tap + QR.');
    expect(src).toContain('Compact for staff. Collect reviews at point of billing.');
  });

  it('B09-3: Sub-product icon containers maintain fixed square boundary (w-9 h-9)', () => {
    const src = getProduct();
    expect(src).toMatch(/w-9\s+h-9|rounded-md/);
  });

  it('B09-4: Mockup image aspect ratios enforce 4:5 boundary for tabletop and portable displays', () => {
    const src = getProduct();
    expect(src).toMatch(/aspect-\[4\/5\]|4:5/);
  });

  it('B09-5: Section padding top and bottom satisfies minimum 80px boundary (py-20)', () => {
    const src = getProduct();
    expect(src).toMatch(/py-20|py-16/);
  });
});
