const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 09: Review Solutions Family Card', () => {
  function getProductSource() {
    return getAggregatedSource('src/components/ProductsSection.tsx');
  }

  it('F09-1: Section header displays eyebrow "02 — OUR PRODUCTS" and H2 "Two product families. One seamless experience."', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('02 — OUR PRODUCTS');
    expect(src).toContain('Two product families. One seamless experience.');
  });

  it('F09-2: Product 01 card displays badge "PRODUCT 01" and label "Google Review Solutions"', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('PRODUCT 01');
    expect(src).toContain('Google Review Solutions');
  });

  it('F09-3: Displays headline: "Make Sharing Experiences Effortless."', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Make Sharing Experiences Effortless.');
  });

  it('F09-4: Includes both sub-products: "Smart Review Stand" and "Salesperson Review Card"', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Smart Review Stand');
    expect(src).toContain('Salesperson Review Card');
  });

  it('F09-5: Contains action CTAs "Explore Designs" and "Enquire Now" with mockup labels', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Explore Designs');
    expect(src).toContain('Enquire Now');
    expect(src).toContain('Stand · Counter');
    expect(src).toContain('Card · Portable');
  });
});
