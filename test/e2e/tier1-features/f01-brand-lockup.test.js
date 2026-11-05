const { describe, it, expect, getAggregatedSource, readProjectFile } = require('../test-helpers');

describe('Feature 01: Header Brand Lockup', () => {
  function getSource() {
    return getAggregatedSource('src/components/Navbar.tsx');
  }

  it('F01-1: Displays authoritative brand name RevoDigital with bold heading typography', () => {
    const src = getSource();
    expect(src).toBeTruthy();
    expect(src).toContain('RevoDigital');
    expect(src).toMatch(/font-headings|font-bold|text-navy/);
  });

  it('F01-2: Displays authoritative brand tagline verbatim: "Make Every Connection Count."', () => {
    const src = getSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Make Every Connection Count.');
    expect(src).toMatch(/text-xs|text-slate-text/);
  });

  it('F01-3: Contains dual overlapping concentric ring logo mark with accent highlight', () => {
    const src = getSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/w-10\s+h-10|rounded-xl|bg-navy/);
    expect(src).toMatch(/border-accent|border-\[3px\]/);
  });

  it('F01-4: Brand lockup is present in both sticky header and global footer', () => {
    const navSrc = getAggregatedSource('src/components/Navbar.tsx');
    const footerSrc = getAggregatedSource('src/components/Footer.tsx');
    expect(navSrc).toContain('RevoDigital');
    expect(footerSrc).toContain('RevoDigital');
  });

  it('F01-5: Brand identity links navigate to home/top (# or /)', () => {
    const src = getSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/href=["'](#|\/)["']|NAV_LINKS/);
  });
});
