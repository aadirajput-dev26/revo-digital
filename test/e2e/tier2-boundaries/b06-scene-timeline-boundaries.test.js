const { describe, it, expect, createHeroTimelineStateMachine } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 06 Hero Scene Timeline Boundaries', () => {
  it('B06-1: Negative scene indices are clamped safely to boundary (0)', () => {
    const sm = createHeroTimelineStateMachine(-5);
    expect(sm.currentScene).toBe(0);
    expect(sm.activeSceneData.name).toBe('Card floats');
  });

  it('B06-2: Overflow scene indices (>5) are clamped safely to upper boundary (5)', () => {
    const sm = createHeroTimelineStateMachine(99);
    expect(sm.currentScene).toBe(5);
    expect(sm.activeSceneData.name).toBe('Pull back');
  });

  it('B06-3: Progress bar percentage is strictly clamped between 0 and 100', () => {
    const sm = createHeroTimelineStateMachine();
    for (let i = 0; i < 6; i++) {
      sm.selectScene(i);
      expect(sm.activeSceneData.progress).toBeGreaterThanOrEqual(0);
      expect(sm.activeSceneData.progress).toBeLessThanOrEqual(100);
    }
  });

  it('B06-4: Cyclic nextScene step wraps gracefully from 5 back to 0', () => {
    const sm = createHeroTimelineStateMachine(5);
    sm.nextScene();
    expect(sm.currentScene).toBe(0);
  });

  it('B06-5: Scene selection operates independently of video play/pause toggle', () => {
    const sm = createHeroTimelineStateMachine(1);
    sm.togglePlay();
    expect(sm.currentScene).toBe(1);
    expect(sm.isPlaying).toBe(false);
  });
});
