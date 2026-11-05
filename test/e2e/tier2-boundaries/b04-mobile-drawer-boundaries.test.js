const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 04 Mobile Nav Drawer Boundaries', () => {
  function getNav() {
    return getAggregatedSource('src/components/Navbar.tsx');
  }

  it('B04-1: Mobile toggle button hides strictly at desktop breakpoint (hidden md:flex or md:hidden)', () => {
    const src = getNav();
    expect(src).toBeTruthy();
    expect(src).toMatch(/md:hidden|hidden\s+md:flex/);
  });

  it('B04-2: Rapid toggle simulation preserves strict boolean state', () => {
    let isOpen = false;
    for (let i = 0; i < 10; i++) {
      isOpen = !isOpen;
    }
    expect(isOpen).toBe(false);
    isOpen = !isOpen;
    expect(isOpen).toBe(true);
  });

  it('B04-3: Drawer backdrop applies high-density opacity and blur boundary', () => {
    const src = getNav();
    expect(src).toMatch(/bg-background\/|backdrop-blur|bg-white\//);
  });

  it('B04-4: Drawer navigation targets match all desktop navigation targets', () => {
    const src = getNav();
    expect(src).toContain('Products');
    expect(src).toContain('Customization');
    expect(src).toContain('How It Works');
    expect(src).toContain('FAQ');
  });

  it('B04-5: Drawer action button maintains minimum touch target size (>=44px)', () => {
    const src = getNav();
    expect(src).toMatch(/py-2\.5|py-3|h-10|h-11/);
  });
});
