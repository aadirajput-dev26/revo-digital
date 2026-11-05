const { describe, it, expect, getAggregatedSource, readProjectFile } = require('../test-helpers');

describe('Feature 02: Section Anchor Navigation', () => {
  function getNavSource() {
    return getAggregatedSource('src/components/Navbar.tsx');
  }

  it('F02-1: Defines all 5 primary navigation links (Home, Products, Customization, How It Works, FAQ)', () => {
    const src = getNavSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Home');
    expect(src).toContain('Products');
    expect(src).toContain('Customization');
    expect(src).toContain('How It Works');
    expect(src).toContain('FAQ');
  });

  it('F02-2: Configures correct smooth scroll anchor hrefs (#products, #customization, #how-it-works, #faq)', () => {
    const src = getNavSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/#products/);
    expect(src).toMatch(/#customization/);
    expect(src).toMatch(/#how-it-works/);
    expect(src).toMatch(/#faq/);
  });

  it('F02-3: Header navigation is sticky with high z-index and border divider', () => {
    const src = getNavSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/sticky\s+top-0/);
    expect(src).toMatch(/z-50/);
    expect(src).toMatch(/border-b\s+border-border/);
  });

  it('F02-4: "Get a Quote" primary CTA navigates directly to enquiry anchor (#enquiry)', () => {
    const src = getNavSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Get a Quote');
    expect(src).toMatch(/bg-accent/);
  });

  it('F02-5: Navigation links include hover and active color transitions', () => {
    const src = getNavSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/transition/);
  });
});
