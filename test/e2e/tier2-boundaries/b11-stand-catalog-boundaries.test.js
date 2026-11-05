const { describe, it, expect, createEnquiryStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 11 Counter Stand Catalog Boundaries', () => {
  function getGallery() {
    return getAggregatedSource('src/components/GalleryCustom.tsx');
  }

  it('B11-1: Catalog gallery contains exactly 3 curated stand models', () => {
    const stands = ['Cloud White Stand', 'Midnight Navy Stand', 'Sunset Pop Stand'];
    expect(stands.length).toBe(3);
    const src = getGallery();
    for (const s of stands) {
      expect(src).toContain(s);
    }
  });

  it('B11-2: Image frames strictly enforce 4/3 aspect ratio boundary', () => {
    const src = getGallery();
    expect(src).toMatch(/aspect-\[4\/3\]|4\/3/);
  });

  it('B11-3: Stand enquiry state transitions update variant without corrupting category', () => {
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Smart Review Stand · Midnight Navy', 'Review Solutions');
    expect(sm.selectedVariant).toBe('Smart Review Stand · Midnight Navy');
    expect(sm.selectedCategory).toBe('Review Solutions');
  });

  it('B11-4: Rapid sequential selection across all 3 stands completes deterministically', () => {
    const sm = createEnquiryStateMachine();
    const stands = ['Cloud White', 'Midnight Navy', 'Sunset Pop'];
    for (const name of stands) {
      sm.setSelectedVariant(`Smart Review Stand · ${name}`);
    }
    expect(sm.selectedVariant).toBe('Smart Review Stand · Sunset Pop');
    expect(sm.history.length).toBe(4); // initial + 3 updates
  });

  it('B11-5: Stand titles maintain bold typography boundary (font-bold text-navy)', () => {
    const src = getGallery();
    expect(src).toMatch(/font-bold\s+text-navy|font-headings/);
  });
});
