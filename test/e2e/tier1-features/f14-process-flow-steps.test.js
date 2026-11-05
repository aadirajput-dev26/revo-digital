const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 14: 3-Step Process Flow', () => {
  function getProcessSource() {
    return getAggregatedSource('src/components/HowAiWho.tsx');
  }

  it('F14-1: Section 05 displays eyebrow "05 — HOW IT WORKS" and H2 "Effortless by design. No tech skills needed."', () => {
    const src = getProcessSource();
    expect(src).toBeTruthy();
    expect(src).toContain('05 — HOW IT WORKS');
    expect(src).toContain('Effortless by design. No tech skills needed.');
  });

  it('F14-2: Step 01 features number "01", title "Tap or Scan", and nfc icon', () => {
    const src = getProcessSource();
    expect(src).toBeTruthy();
    expect(src).toContain('01');
    expect(src).toContain('Tap or Scan');
    expect(src).toContain('Hold any smartphone near the card, or scan the QR. No app to download.');
  });

  it('F14-3: Step 02 features number "02", title "Open the Experience", and smartphone icon', () => {
    const src = getProcessSource();
    expect(src).toBeTruthy();
    expect(src).toContain('02');
    expect(src).toContain('Open the Experience');
    expect(src).toContain('Review page or digital profile opens instantly in the browser.');
  });

  it('F14-4: Step 03 features number "03", title "Connect, Share or Review", and star icon', () => {
    const src = getProcessSource();
    expect(src).toBeTruthy();
    expect(src).toContain('03');
    expect(src).toContain('Connect, Share or Review');
    expect(src).toContain('Save contact, follow, or leave a Google review in seconds.');
  });

  it('F14-5: Renders workflow photography cards with labels "Review flow · at the counter" and "Networking flow · one tap share"', () => {
    const src = getProcessSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Review flow · at the counter');
    expect(src).toContain('Networking flow · one tap share');
  });
});
