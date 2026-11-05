const { describe, it, expect, createAiReviewAssistStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 03: Customer AI Review Assist Experience', () => {
  it('S03: End-to-end user review drafting workflow with star rating adjustment, draft edit, and Google dispatch', () => {
    // 1. User arrives on Section 06 AI Review Assist
    const src = getAggregatedSource('src/components/HowAiWho.tsx');
    expect(src).toContain('06 — AI REVIEW ASSIST · INCLUDED');
    expect(src).toContain('Make Sharing Genuine Experiences Easier.');
    expect(src).toContain('Responsible by design: never fabricates experiences, never forces ratings, never auto-posts. The customer always stays in control.');

    // 2. Customer initializes AI review assistant
    const ai = createAiReviewAssistStateMachine({
      initialRating: 5,
      businessName: 'Brew & Bean',
    });
    expect(ai.rating).toBe(5);

    // 3. Customer modifies rating to 4 stars and types honest visit notes
    ai.setRating(4);
    expect(ai.rating).toBe(4);
    ai.setNote('Fast wifi, excellent cold brew, friendly barista.');

    // 4. Customer toggles Edit mode and personalizes the draft
    expect(ai.isEditing).toBe(false);
    ai.toggleEdit();
    expect(ai.isEditing).toBe(true);

    const editedDraft = 'Loved the quick service and cold brew! Great spot for meetings.';
    ai.updateDraft(editedDraft);
    expect(ai.draft).toBe(editedDraft);

    // 5. Customer approves and clicks "Continue to Google"
    const googleAction = ai.continueToGoogle();
    expect(googleAction.rating).toBe(4);
    expect(googleAction.reviewText).toBe(editedDraft);
    expect(googleAction.destination).toContain('writereview');
    expect(googleAction.destination).toContain('Brew%20%26%20Bean');
  });
});
