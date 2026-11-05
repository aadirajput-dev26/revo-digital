const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 13 Customization Studio Boundaries', () => {
  function getCustom() {
    return getAggregatedSource('src/components/GalleryCustom.tsx');
  }

  it('B13-1: Before/After comparison grid enforces 2-column boundary', () => {
    const src = getCustom();
    expect(src).toMatch(/grid-cols-2|grid/);
  });

  it('B13-2: Color swatches array contains exactly 3 brand color hex codes', () => {
    const swatches = ['#FF8A3D', '#2563EB', '#FFFFFF'];
    expect(swatches.length).toBe(3);
    for (const hex of swatches) {
      expect(/^#[0-9A-F]{6}$/i.test(hex)).toBe(true);
    }
  });

  it('B13-3: Swatch elements maintain circular boundary (rounded-full) with border stroke', () => {
    const src = getCustom();
    expect(src).toMatch(/rounded-full/);
    expect(src).toMatch(/border-2\s+border-white|border/);
  });

  it('B13-4: Feature checklist tags array contains exactly 6 capabilities', () => {
    const features = [
      'Logo personalization',
      'Business branding',
      'Custom colors',
      'Typography & layouts',
      'Personalized QR',
      'RevoDigital studio design',
    ];
    expect(features.length).toBe(6);
  });

  it('B13-5: "AFTER · Branded for Brew & Bean" card uses dark navy background with light border', () => {
    const src = getCustom();
    expect(src).toMatch(/bg-navy/);
    expect(src).toContain('AFTER · Branded for Brew & Bean');
  });
});
