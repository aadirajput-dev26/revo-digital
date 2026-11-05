const { describe, it, expect, readProjectFile, createHeroTimelineStateMachine } = require('../test-helpers');

describe('Feature 06: Hero Scene Timeline Selector', () => {
  it('F06-1: Defines all 6 interactive timeline scene steps (01-06)', () => {
    const content = readProjectFile('src/data/content.ts');
    expect(content).toBeTruthy();
    expect(content).toContain('01 · Card floats');
    expect(content).toContain('02 · Phone enters');
    expect(content).toContain('03 · Tap');
    expect(content).toContain('04 · Blue pulse');
    expect(content).toContain('05 · Review UI');
    expect(content).toContain('06 · Pull back');
  });

  it('F06-2: Default active scene is Scene 03 (Tap interaction)', () => {
    const sm = createHeroTimelineStateMachine();
    expect(sm.currentScene).toBe(2); // 0-indexed 2 is Scene 03
    expect(sm.activeSceneData.label).toBe('03 · Tap');
  });

  it('F06-3: Active scene transitions update state correctly across all 6 indices', () => {
    const sm = createHeroTimelineStateMachine();
    sm.selectScene(0);
    expect(sm.activeSceneData.name).toBe('Card floats');
    sm.selectScene(5);
    expect(sm.activeSceneData.name).toBe('Pull back');
  });

  it('F06-4: Scene status display string matches pattern "Tap interaction — Scene 03/06"', () => {
    const content = readProjectFile('src/data/content.ts');
    expect(content).toBeTruthy();
    expect(content).toContain('Tap interaction — Scene 03/06');
  });

  it('F06-5: Progress indicator calculation maps proportionally across scenes', () => {
    const sm = createHeroTimelineStateMachine();
    sm.selectScene(0);
    expect(sm.activeSceneData.progress).toBeLessThanOrEqual(20);
    sm.selectScene(5);
    expect(sm.activeSceneData.progress).toBe(100);
  });
});
