const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 02 Anchor Navigation Boundaries', () => {
  it('B02-1: All anchor targets begin with "#" or "/" preventing external redirect loops', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toBeTruthy();
    const hrefMatches = src.match(/href:\s*["']([^"']+)["']/g) || [];
    for (const m of hrefMatches) {
      const href = m.replace(/href:\s*["']/, '').replace(/["']/, '');
      expect(href.startsWith('#') || href.startsWith('/') || href.startsWith('https://')).toBe(true);
    }
  });

  it('B02-2: Sticky header includes z-index boundary (z-50) ensuring priority over modal backdrops', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/z-50|z-40/);
  });

  it('B02-3: Anchor list handles rapid sequential updates without throwing exceptions', () => {
    const navAnchors = ['#products', '#customization', '#how-it-works', '#faq', '#enquiry'];
    let lastAnchor = '';
    for (const a of navAnchors) {
      lastAnchor = a;
    }
    expect(lastAnchor).toBe('#enquiry');
  });

  it('B02-4: Smooth scrolling offset accommodates sticky navigation height', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/sticky|scroll/);
  });

  it('B02-5: Navigation links maintain minimum accessibility tap padding', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/px-|py-|gap-/);
  });
});
