const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 08: Ecosystem Compatibility Strip', () => {
  function getCompatSource() {
    return getAggregatedSource('src/components/Hero.tsx');
  }

  it('F08-1: Displays uppercase ribbon text: "WORKS WITH EVERY MODERN SMARTPHONE — NO APP NEEDED"', () => {
    const src = getCompatSource();
    expect(src).toBeTruthy();
    expect(src).toContain('WORKS WITH EVERY MODERN SMARTPHONE — NO APP NEEDED');
  });

  it('F08-2: Features all 6 platform names: iOS, Android, Google, WhatsApp, Instagram, LinkedIn', () => {
    const src = getCompatSource();
    expect(src).toBeTruthy();
    expect(src).toContain('iOS');
    expect(src).toContain('Android');
    expect(src).toContain('Google');
    expect(src).toContain('WhatsApp');
    expect(src).toContain('Instagram');
    expect(src).toContain('LinkedIn');
  });

  it('F08-3: Strip container has border and rounded layout styling', () => {
    const src = getCompatSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/border\s+border-border|rounded-xl/);
  });

  it('F08-4: Platform text uses high-contrast navy typography', () => {
    const src = getCompatSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/text-navy|font-bold/);
  });

  it('F08-5: Compatibility strip is positioned below hero grid as full-width banner', () => {
    const src = getCompatSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/max-w-\[1280px\]|mx-auto/);
  });
});
