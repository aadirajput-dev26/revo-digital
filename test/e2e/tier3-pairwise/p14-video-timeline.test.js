const { describe, it, expect, createHeroTimelineStateMachine } = require('../test-helpers');

describe('Tier 3 Pairwise: P14 Hero Video Scrubber <-> Scene Timeline Sync', () => {
  it('P14: Hero timeline selection updates video scrubber status text and progress bar percentage', () => {
    const sm = createHeroTimelineStateMachine(2);
    expect(sm.activeSceneData.label).toBe('03 · Tap');
    expect(sm.activeSceneData.name).toBe('Tap interaction');

    // User selects Scene 05
    sm.selectScene(4);
    expect(sm.activeSceneData.label).toBe('05 · Review UI');
    expect(sm.activeSceneData.progress).toBe(85);
  });
});
