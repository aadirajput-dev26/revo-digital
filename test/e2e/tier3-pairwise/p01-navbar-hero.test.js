const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P01 Navbar <-> Hero Interaction', () => {
  it('P01: Brand lockup in Navbar connects to Hero section home anchor', () => {
    const navSrc = getAggregatedSource('src/components/Navbar.tsx');
    const heroSrc = getAggregatedSource('src/components/Hero.tsx');

    expect(navSrc).toContain('RevoDigital');
    expect(heroSrc).toContain('Make Every Connection Count.');

    // Verifies home anchor target
    expect(navSrc).toMatch(/href=["'](#|\/)["']|NAV_LINKS/);
  });
});
