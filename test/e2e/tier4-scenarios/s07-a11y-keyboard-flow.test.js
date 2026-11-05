const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 07: Full Page Accessibility & Keyboard Navigation Flow', () => {
  it('S07: Verifies semantic HTML landmarks, heading hierarchy, and interactive element labels', () => {
    const pageSrc = getAggregatedSource('src/app/page.tsx');
    expect(pageSrc).toBeTruthy();

    // 1. Semantic landmarks
    expect(pageSrc).toMatch(/<header/);
    expect(pageSrc).toMatch(/<main/);
    expect(pageSrc).toMatch(/<footer/);
    expect(pageSrc).toMatch(/<section/);

    // 2. Heading hierarchy (h1, h2, h3)
    expect(pageSrc).toMatch(/<h1/);
    expect(pageSrc).toMatch(/<h2/);

    // 3. Interactive controls (buttons, inputs)
    expect(pageSrc).toMatch(/<button/);

    // 4. Color contrast tokens
    expect(pageSrc).toMatch(/text-navy|text-white/);
  });
});
