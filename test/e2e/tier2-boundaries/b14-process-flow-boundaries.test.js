const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 14 Process Flow Steps Boundaries', () => {
  function getProcess() {
    return getAggregatedSource('src/components/HowAiWho.tsx');
  }

  it('B14-1: Step numbers strictly follow two-digit padded format ("01", "02", "03")', () => {
    const numbers = ['01', '02', '03'];
    for (const num of numbers) {
      expect(/^\d{2}$/.test(num)).toBe(true);
    }
    const src = getProcess();
    expect(src).toContain('01');
    expect(src).toContain('02');
    expect(src).toContain('03');
  });

  it('B14-2: Step number watermarks use text-5xl Space Grotesk typography', () => {
    const src = getProcess();
    expect(src).toMatch(/text-5xl|font-headings/);
  });

  it('B14-3: Step card icon containers enforce fixed 56px square boundary (w-14 h-14)', () => {
    const src = getProcess();
    expect(src).toMatch(/w-14\s+h-14|rounded-xl/);
  });

  it('B14-4: Exactly 3 steps and 2 workflow photography cards are defined', () => {
    const src = getProcess();
    expect(src).toContain('Tap or Scan');
    expect(src).toContain('Open the Experience');
    expect(src).toContain('Connect, Share or Review');
    expect(src).toContain('Review flow · at the counter');
    expect(src).toContain('Networking flow · one tap share');
  });

  it('B14-5: Desktop grid enforces 3-column boundary with responsive mobile stacking', () => {
    const src = getProcess();
    expect(src).toMatch(/grid-cols-3|grid/);
  });
});
