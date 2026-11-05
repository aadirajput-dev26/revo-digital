const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Tier 3 Pairwise: P09 Audience Business Sectors <-> Review Solutions Family Interaction', () => {
  it('P09: Business sector categories correspond to Google Review Solutions product hardware', () => {
    const src = getAggregatedSource('src/components/HowAiWho.tsx');
    expect(src).toContain('Google Review Solutions');
    expect(src).toContain('Restaurants');
    expect(src).toContain('Clinics & Healthcare');
  });
});
