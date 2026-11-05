const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 13: Customization Studio Comparison', () => {
  function getCustomSource() {
    return getAggregatedSource('src/components/GalleryCustom.tsx');
  }

  it('F13-1: Section 04 displays eyebrow "04 — CUSTOMIZATION" and H2 "Your Card. Your Identity. Your Design."', () => {
    const src = getCustomSource();
    expect(src).toBeTruthy();
    expect(src).toContain('04 — CUSTOMIZATION');
    expect(src).toContain('Your Card. Your Identity. Your Design.');
  });

  it('F13-2: Displays all 6 customization capability checklist items', () => {
    const src = getCustomSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Logo personalization');
    expect(src).toContain('Business branding');
    expect(src).toContain('Custom colors');
    expect(src).toContain('Typography & layouts');
    expect(src).toContain('Personalized QR');
    expect(src).toContain('RevoDigital studio design');
  });

  it('F13-3: Features Before / After comparison card with labels "BEFORE · Standard" and "AFTER · Branded for Brew & Bean"', () => {
    const src = getCustomSource();
    expect(src).toBeTruthy();
    expect(src).toContain('BEFORE · Standard');
    expect(src).toContain('AFTER · Branded for Brew & Bean');
  });

  it('F13-4: Renders 3 brand color swatches (#FF8A3D, #2563EB, #FFFFFF)', () => {
    const src = getCustomSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/#FF8A3D/i);
    expect(src).toMatch(/#2563EB/i);
  });

  it('F13-5: Provides dual action buttons "Explore Existing Designs" and "Request Custom Design"', () => {
    const src = getCustomSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Explore Existing Designs');
    expect(src).toContain('Request Custom Design');
  });
});
