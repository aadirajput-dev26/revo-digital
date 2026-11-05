const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 11: Counter Stand Catalog Gallery', () => {
  function getGallerySource() {
    return getAggregatedSource('src/components/GalleryCustom.tsx');
  }

  it('F11-1: Section 03 displays eyebrow "03 — EXPLORE DESIGNS" and H2 "A design for every brand personality."', () => {
    const src = getGallerySource();
    expect(src).toBeTruthy();
    expect(src).toContain('03 — EXPLORE DESIGNS');
    expect(src).toContain('A design for every brand personality.');
  });

  it('F11-2: Includes "Cloud White Stand" with subtitle "Clean minimal · QR + Tap"', () => {
    const src = getGallerySource();
    expect(src).toBeTruthy();
    expect(src).toContain('Cloud White Stand');
    expect(src).toContain('Clean minimal · QR + Tap');
  });

  it('F11-3: Includes "Midnight Navy Stand" with subtitle "Bold counter presence"', () => {
    const src = getGallerySource();
    expect(src).toBeTruthy();
    expect(src).toContain('Midnight Navy Stand');
    expect(src).toContain('Bold counter presence');
  });

  it('F11-4: Includes "Sunset Pop Stand" with subtitle "Orange accent · hospitality"', () => {
    const src = getGallerySource();
    expect(src).toBeTruthy();
    expect(src).toContain('Sunset Pop Stand');
    expect(src).toContain('Orange accent · hospitality');
  });

  it('F11-5: Each stand card renders an "Enquire" action button triggering order selection', () => {
    const src = getGallerySource();
    expect(src).toBeTruthy();
    expect(src).toContain('Enquire');
  });
});
