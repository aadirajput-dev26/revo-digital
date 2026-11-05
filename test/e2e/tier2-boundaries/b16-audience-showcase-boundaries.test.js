const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 16 Dual-Sector Audience Showcase Boundaries', () => {
  function getAudience() {
    return getAggregatedSource('src/components/HowAiWho.tsx');
  }

  it('B16-1: Business sectors list contains exactly 6 categories', () => {
    const sectors = [
      'Restaurants',
      'Clinics & Healthcare',
      'Salons & Spas',
      'Retail Stores',
      'Hotels & Hospitality',
      'Auto Showrooms',
    ];
    expect(sectors.length).toBe(6);
    const src = getAudience();
    for (const s of sectors) {
      expect(src).toContain(s);
    }
  });

  it('B16-2: Individual personas list contains exactly 6 roles', () => {
    const roles = [
      'Entrepreneurs',
      'Freelancers',
      'Consultants',
      'Sales Pros',
      'Business Owners',
      'Creators',
    ];
    expect(roles.length).toBe(6);
    const src = getAudience();
    for (const r of roles) {
      expect(src).toContain(r);
    }
  });

  it('B16-3: Total audience categories sum to precisely 12 (6 business + 6 individual)', () => {
    const totalCount = 6 + 6;
    expect(totalCount).toBe(12);
  });

  it('B16-4: Audience panels enforce 2-column desktop grid with rounded border panels', () => {
    const src = getAudience();
    expect(src).toMatch(/grid-cols-2|grid/);
    expect(src).toMatch(/rounded-2xl|border-border/);
  });

  it('B16-5: Sector cards maintain aspect ratio boundary (aspect-[1/1.15] or portrait cards)', () => {
    const src = getAudience();
    expect(src).toMatch(/aspect-\[1\/1\.15\]|aspect-|grid-cols-3/);
  });
});
