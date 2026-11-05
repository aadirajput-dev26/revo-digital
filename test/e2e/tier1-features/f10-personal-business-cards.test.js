const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 10: Personal Business Cards Family Card', () => {
  function getProductSource() {
    return getAggregatedSource('src/components/ProductsSection.tsx');
  }

  it('F10-1: Product 02 card features dark navy background with radial glow styling', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/bg-navy/);
    expect(src).toMatch(/glow|blur|radial/i);
  });

  it('F10-2: Displays badge "PRODUCT 02" and label "Personal Business Cards"', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('PRODUCT 02');
    expect(src).toContain('Personal Business Cards');
  });

  it('F10-3: Displays H3 title: "Your Professional Identity. One Simple Tap."', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Your Professional Identity. One Simple Tap.');
  });

  it('F10-4: Includes all 6 feature pills: Photo + designation, Phone & WhatsApp, Email, Social links, Save contact, Tap + QR', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Photo + designation');
    expect(src).toContain('Phone & WhatsApp');
    expect(src).toContain('Email');
    expect(src).toContain('Social links');
    expect(src).toContain('Save contact');
    expect(src).toContain('Tap + QR');
  });

  it('F10-5: Renders live contact preview card with "Aarav Kapoor · Consultant" and "AK" avatar', () => {
    const src = getProductSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Aarav Kapoor · Consultant');
    expect(src).toContain('AK');
    expect(src).toContain('Tap preview — digital profile opens instantly');
  });
});
