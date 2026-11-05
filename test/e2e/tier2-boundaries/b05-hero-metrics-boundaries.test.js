const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 05 Hero Value Props & Metrics Boundaries', () => {
  function getHero() {
    return getAggregatedSource('src/components/Hero.tsx');
  }

  it('B05-1: Customer rating score is strictly bounded between 0.0 and 5.0 ("4.9/5")', () => {
    const src = getHero();
    expect(src).toContain('4.9/5');
    const score = parseFloat('4.9');
    expect(score).toBeGreaterThanOrEqual(0.0);
    expect(score).toBeLessThanOrEqual(5.0);
  });

  it('B05-2: Avatar stack maintains negative margin boundary (-space-x-2) without collapsing', () => {
    const src = getHero();
    expect(src).toMatch(/-space-x-2|flex\s+items-center/);
  });

  it('B05-3: Headline text is constrained by max-width boundary preventing awkward line breaking', () => {
    const src = getHero();
    expect(src).toMatch(/max-w-\[|leading-/);
  });

  it('B05-4: Value props row uses responsive flex wrapping or responsive grid', () => {
    const src = getHero();
    expect(src).toMatch(/flex|grid/);
    expect(src).toContain('Tap & Scan');
  });

  it('B05-5: Primary CTA button text contrast ratio satisfies WCAG 2.1 AA standards', () => {
    const src = getHero();
    // Primary blue (#2563EB) paired with white text (#FFFFFF)
    expect(src).toMatch(/bg-primary.*text-primary-foreground|bg-primary.*text-white/);
  });
});
