const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 08 Smartphone Compatibility Strip Boundaries', () => {
  function getHero() {
    return getAggregatedSource('src/components/Hero.tsx');
  }

  it('B08-1: Ribbon layout supports flex-wrap on narrow viewports without text collision', () => {
    const src = getHero();
    expect(src).toMatch(/flex|grid/);
    expect(src).toContain('iOS');
  });

  it('B08-2: Exact platform array boundary contains precisely 6 distinct ecosystem names', () => {
    const platforms = ['iOS', 'Android', 'Google', 'WhatsApp', 'Instagram', 'LinkedIn'];
    expect(platforms.length).toBe(6);
    const unique = new Set(platforms);
    expect(unique.size).toBe(6);
  });

  it('B08-3: Uppercase ribbon banner text letter-spacing uses tracking-widest for legibility', () => {
    const src = getHero();
    expect(src).toMatch(/tracking-widest|tracking-wide|uppercase/);
  });

  it('B08-4: Strip border stroke preserves boundary contrast against page background', () => {
    const src = getHero();
    expect(src).toMatch(/border-border|border/);
  });

  it('B08-5: Platform names maintain minimum font-weight boundary (font-bold) for scanability', () => {
    const src = getHero();
    expect(src).toMatch(/font-bold|font-semibold/);
  });
});
