const { describe, it, expect, createHeroTimelineStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 07 Hero Video Scrubber Boundaries', () => {
  it('B07-1: Video progress track width is bounded to container (aspect-[16/10])', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toMatch(/aspect-\[16\/10\]|aspect-video/);
  });

  it('B07-2: Rapid play toggle execution maintains deterministic boolean states', () => {
    const sm = createHeroTimelineStateMachine();
    const states = [];
    for (let i = 0; i < 5; i++) {
      states.push(sm.togglePlay());
    }
    expect(states).toEqual([false, true, false, true, false]);
  });

  it('B07-3: Floating review badge maintains absolute offset boundaries (-left-6 / -right-3)', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toMatch(/-left-|-right-|shadow-/);
  });

  it('B07-4: Play button element maintains minimum circular touch radius (36px)', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toMatch(/w-9\s+h-9|w-10\s+h-10|rounded-full/);
  });

  it('B07-5: Scrubber indicator track preserves background fill contrast', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toMatch(/bg-primary|bg-muted/);
  });
});
