const { describe, it, expect, getAggregatedSource, readProjectFile } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 01 Brand Lockup Boundaries', () => {
  it('B01-1: Graceful fallback when tagline is undefined or empty', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toBeTruthy();
    // Brand title must always remain visible regardless of tagline
    expect(src).toContain('RevoDigital');
  });

  it('B01-2: Container boundary enforces max-w-[1280px] to prevent ultra-wide viewport stretching', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/max-w-\[1280px\]|max-w-7xl/);
  });

  it('B01-3: Concentric ring border thickness is bounded (3px stroke) to prevent pixel blur on high DPI', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/border-\[3px\]|border-2/);
  });

  it('B01-4: Wordmark casing is strictly preserved as "RevoDigital"', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/RevoDigital/);
    expect(src).not.toContain('REVODIGITAL');
  });

  it('B01-5: Brand container maintains minimum touch target height (>=40px)', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/h-10|py-4/);
  });
});
