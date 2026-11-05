const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P13 Mobile Drawer <-> Page Anchor Targets Alignment', () => {
  it('P13: Mobile drawer navigation hrefs match all desktop page anchor targets', () => {
    const src = getAggregatedSource('src/components/Navbar.tsx');
    expect(src).toMatch(/#products/);
    expect(src).toMatch(/#customization/);
    expect(src).toMatch(/#how-it-works/);
    expect(src).toMatch(/#faq/);
  });
});
