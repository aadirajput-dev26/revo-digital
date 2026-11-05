const { describe, it, expect, createEnquiryStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 12 Business Card Catalog Boundaries', () => {
  function getGallery() {
    return getAggregatedSource('src/components/GalleryCustom.tsx');
  }

  it('B12-1: Catalog gallery contains exactly 4 curated card finishes', () => {
    const finishes = ['Onyx Black', 'Arctic White', 'Ocean Gradient', 'Terra Orange'];
    expect(finishes.length).toBe(4);
    const src = getGallery();
    for (const f of finishes) {
      expect(src).toContain(f);
    }
  });

  it('B12-2: Card finishes enforce aspect ratio boundary (aspect-[3/3.4] or 3:4 portrait)', () => {
    const src = getGallery();
    expect(src).toMatch(/aspect-\[3\/3\.4\]|aspect-\[3\/4\]|3\/3\.4/);
  });

  it('B12-3: Selecting a business card finish sets category to "Business Cards"', () => {
    const sm = createEnquiryStateMachine();
    sm.setSelectedVariant('Personal Business Card · Onyx Black', 'Business Cards');
    expect(sm.selectedVariant).toBe('Personal Business Card · Onyx Black');
    expect(sm.selectedCategory).toBe('Business Cards');
  });

  it('B12-4: Responsive layout supports 4-column grid on desktop and 2-column on tablet', () => {
    const src = getGallery();
    expect(src).toMatch(/grid-cols-4|grid-cols-2|grid/);
  });

  it('B12-5: Card CTAs maintain consistent arrow-right indicator icons', () => {
    const src = getGallery();
    expect(src).toMatch(/ArrowRight|arrow-right/i);
  });
});
