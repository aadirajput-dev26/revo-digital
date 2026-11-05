const { describe, it, expect, createAiReviewAssistStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 15 AI Review Assist Boundaries', () => {
  it('B15-1: Star rating is strictly clamped between minimum 1 and maximum 5 stars', () => {
    const ai = createAiReviewAssistStateMachine();
    ai.setRating(0); // Underflow
    expect(ai.rating).toBe(1);
    ai.setRating(10); // Overflow
    expect(ai.rating).toBe(5);
    ai.setRating(3.7); // Fractional rounding
    expect(ai.rating).toBe(4);
  });

  it('B15-2: Empty customer input fallback generates clean draft without crashing', () => {
    const ai = createAiReviewAssistStateMachine();
    ai.setNote('');
    expect(ai.draft).toContain('Brew & Bean');
    expect(ai.draft.length).toBeGreaterThan(0);
  });

  it('B15-3: Extremely long customer notes (>1000 characters) generate valid review draft', () => {
    const longNote = 'Exceptional coffee, outstanding service. '.repeat(50);
    const ai = createAiReviewAssistStateMachine();
    ai.setNote(longNote);
    expect(ai.draft.length).toBeGreaterThanOrEqual(1000);
  });

  it('B15-4: Custom draft edits are strictly preserved by the state machine', () => {
    const ai = createAiReviewAssistStateMachine();
    const customText = 'My completely customized review text after editing!';
    ai.toggleEdit();
    ai.updateDraft(customText);
    expect(ai.draft).toBe(customText);
  });

  it('B15-5: Google destination URL includes encoded business parameter without protocol errors', () => {
    const ai = createAiReviewAssistStateMachine({ businessName: 'Café & Bistro 100%' });
    const action = ai.continueToGoogle();
    expect(action.destination.startsWith('https://search.google.com/local/writereview')).toBe(true);
    expect(action.destination).toContain(encodeURIComponent('Café & Bistro 100%'));
  });
});
