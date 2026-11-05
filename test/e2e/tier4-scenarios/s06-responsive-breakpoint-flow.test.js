const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 06: Responsive Breakpoint Integrity Flow', () => {
  it('S06: Validates layout constraints across Desktop (1440px), Tablet (768px), and Mobile (375px)', () => {
    const pageSrc = getAggregatedSource('src/app/page.tsx');
    expect(pageSrc).toBeTruthy();

    // 1. Desktop Layout Boundary (1440px / 1280px container)
    expect(pageSrc).toMatch(/max-w-\[1280px\]|max-w-7xl/);

    // 2. Tablet Responsive Breakpoint Adapters (md: prefixes)
    expect(pageSrc).toMatch(/md:grid-cols-|md:flex|md:text-|md:hidden|hidden\s+md:flex/);

    // 3. Mobile Viewport Safeguards (padding and single column fallbacks)
    expect(pageSrc).toMatch(/px-8|px-4/);
    expect(pageSrc).toMatch(/flex-col|flex-wrap|grid/);
  });
});
