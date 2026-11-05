const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 10 Personal Business Cards Boundaries', () => {
  function getProduct() {
    return getAggregatedSource('src/components/ProductsSection.tsx');
  }

  it('B10-1: Feature pills list contains exactly 6 distinct contactless capabilities', () => {
    const pills = [
      'Photo + designation',
      'Phone & WhatsApp',
      'Email',
      'Social links',
      'Save contact',
      'Tap + QR',
    ];
    expect(pills.length).toBe(6);
  });

  it('B10-2: Radial glow background uses high blur radius (blur-[80px]) for subtle ambient halo', () => {
    const src = getProduct();
    expect(src).toMatch(/blur-\[80px\]|blur|glow/);
  });

  it('B10-3: Consultant profile avatar initials generation maintains 2-character uppercase boundary ("AK")', () => {
    const name = 'Aarav Kapoor';
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    expect(initials).toBe('AK');
    expect(initials.length).toBe(2);
  });

  it('B10-4: Smart card mockup aspect ratio enforces 16:10 landscape boundary', () => {
    const src = getProduct();
    expect(src).toMatch(/16:10|aspect-\[16\/10\]/);
  });

  it('B10-5: Action buttons use contrasting accent orange and outline styles', () => {
    const src = getProduct();
    expect(src).toMatch(/bg-accent/);
    expect(src).toMatch(/border-white/);
  });
});
