const { describe, it, expect, getAggregatedSource, createHeroTimelineStateMachine } = require('../test-helpers');

describe('Feature 07: Hero Video Scrubber & Play State', () => {
  it('F07-1: Studio window header displays title "REVO STUDIO — HERO ANIMATION • 00:06 LOOP"', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toBeTruthy();
    expect(src).toContain('REVO STUDIO — HERO ANIMATION • 00:06 LOOP');
  });

  it('F07-2: Displays "6–7s seamless loop" badge and "Replace with 3D video" badge', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toBeTruthy();
    expect(src).toContain('6–7s seamless loop');
    expect(src).toContain('Replace with 3D video');
  });

  it('F07-3: Supports play and pause toggle state on the video scrubber', () => {
    const sm = createHeroTimelineStateMachine();
    expect(sm.isPlaying).toBe(true);
    sm.togglePlay();
    expect(sm.isPlaying).toBe(false);
    sm.togglePlay();
    expect(sm.isPlaying).toBe(true);
  });

  it('F07-4: Renders floating social proof badge: "+128 Google reviews · Café Aroma"', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toBeTruthy();
    expect(src).toContain('+128 Google reviews');
    expect(src).toContain('Café Aroma');
  });

  it('F07-5: Renders floating contactless badge: "Profile saved in 1 tap"', () => {
    const src = getAggregatedSource('src/components/Hero.tsx');
    expect(src).toBeTruthy();
    expect(src).toContain('Profile saved in 1 tap');
  });
});
