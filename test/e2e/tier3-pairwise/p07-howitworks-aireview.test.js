const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P07 How It Works <-> AI Review Assist Interaction', () => {
  it('P07: How It Works step 03 ("Connect, Share or Review") transitions logically into Section 06 AI Review Assist', () => {
    const src = getAggregatedSource('src/components/HowAiWho.tsx');
    expect(src).toContain('Connect, Share or Review');
    expect(src).toContain('06 — AI REVIEW ASSIST · INCLUDED');
    expect(src).toContain('Make Sharing Genuine Experiences Easier.');
  });
});
