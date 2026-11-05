const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 05: Hero Value Proposition & Social Proof', () => {
  function getHero() {
    return getAggregatedSource('src/components/Hero.tsx');
  }

  it('F05-1: Displays 68px Space Grotesk H1: "Make Every Connection Count."', () => {
    const src = getHero();
    expect(src).toBeTruthy();
    expect(src).toContain('Make Every Connection Count.');
    expect(src).toMatch(/font-headings/);
    expect(src).toMatch(/text-5xl|text-6xl/);
  });

  it('F05-2: Features authoritative lead paragraph copy', () => {
    const src = getHero();
    expect(src).toBeTruthy();
    expect(src).toContain('Smarter ways to collect customer reviews and share your professional identity.');
  });

  it('F05-3: Displays category badge and trust social proof pill', () => {
    const src = getHero();
    expect(src).toBeTruthy();
    expect(src).toContain('Smart Contactless Experiences');
    expect(src).toContain('Trusted by 2,400+ businesses');
  });

  it('F05-4: Displays customer rating score "4.9/5" and label "Customer rating"', () => {
    const src = getHero();
    expect(src).toBeTruthy();
    expect(src).toContain('4.9/5');
    expect(src).toContain('Customer rating');
  });

  it('F05-5: Highlights 3 core value tags: Tap & Scan, No app needed, and QR backup', () => {
    const src = getHero();
    expect(src).toBeTruthy();
    expect(src).toContain('Tap & Scan');
    expect(src).toContain('No app needed');
    expect(src).toContain('QR backup');
  });
});
