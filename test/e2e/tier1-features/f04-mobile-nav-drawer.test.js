const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 04: Mobile Navigation Drawer', () => {
  function getNav() {
    return getAggregatedSource('src/components/Navbar.tsx');
  }

  it('F04-1: Contains hamburger menu button visible only on mobile viewports (md:hidden)', () => {
    const src = getNav();
    expect(src).toBeTruthy();
    expect(src).toMatch(/md:hidden/);
  });

  it('F04-2: Mobile toggle includes accessible attributes or button semantics', () => {
    const src = getNav();
    expect(src).toBeTruthy();
    expect(src).toMatch(/<button|aria-label/);
  });

  it('F04-3: Mobile drawer structure incorporates backdrop blur for elevated focus', () => {
    const src = getNav();
    expect(src).toBeTruthy();
    expect(src).toMatch(/backdrop-blur/);
  });

  it('F04-4: Mobile drawer renders the complete set of primary section links', () => {
    const src = getNav();
    expect(src).toBeTruthy();
    expect(src).toContain('Products');
    expect(src).toContain('Customization');
    expect(src).toContain('How It Works');
    expect(src).toContain('FAQ');
  });

  it('F04-5: Mobile drawer includes both WhatsApp and Quote action buttons', () => {
    const src = getNav();
    expect(src).toBeTruthy();
    expect(src).toContain('WhatsApp');
    expect(src).toContain('Get a Quote');
  });
});
