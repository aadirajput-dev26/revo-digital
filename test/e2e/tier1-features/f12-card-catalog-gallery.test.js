const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 12: Business Card Catalog Gallery', () => {
  function getCardSource() {
    return getAggregatedSource('src/components/GalleryCustom.tsx');
  }

  it('F12-1: Features "Onyx Black" card finish with subtitle "Premium matte · gold foil"', () => {
    const src = getCardSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Onyx Black');
    expect(src).toContain('Premium matte · gold foil');
  });

  it('F12-2: Features "Arctic White" card finish with subtitle "Minimalist · soft touch"', () => {
    const src = getCardSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Arctic White');
    expect(src).toContain('Minimalist · soft touch');
  });

  it('F12-3: Features "Ocean Gradient" card finish with subtitle "Contemporary blue blend"', () => {
    const src = getCardSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Ocean Gradient');
    expect(src).toContain('Contemporary blue blend');
  });

  it('F12-4: Features "Terra Orange" card finish with subtitle "Bold creative · startups"', () => {
    const src = getCardSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Terra Orange');
    expect(src).toContain('Bold creative · startups');
  });

  it('F12-5: Each card finish renders an "Enquire Now" action CTA', () => {
    const src = getCardSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Enquire Now');
  });
});
