const { describe, it, expect, getAggregatedSource, createAiReviewAssistStateMachine } = require('../test-helpers');

describe('Feature 15: AI Review Assist Demo', () => {
  function getAiSource() {
    return getAggregatedSource('src/components/HowAiWho.tsx');
  }

  it('F15-1: Section 06 displays eyebrow "06 — AI REVIEW ASSIST · INCLUDED" with dark theme styling', () => {
    const src = getAiSource();
    expect(src).toBeTruthy();
    expect(src).toContain('06 — AI REVIEW ASSIST · INCLUDED');
    expect(src).toContain('Make Sharing Genuine Experiences Easier.');
  });

  it('F15-2: Lists all 3 progressive steps in the AI review drafting flow', () => {
    const src = getAiSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Customer shares a few details about their real visit');
    expect(src).toContain('AI drafts a natural review from only those details');
    expect(src).toContain('Customer edits, approves and posts to Google themselves');
  });

  it('F15-3: Displays responsible AI assurance note protecting review integrity', () => {
    const src = getAiSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Responsible by design: never fabricates experiences, never forces ratings, never auto-posts. The customer always stays in control.');
  });

  it('F15-4: Smartphone mockup displays "How was Brew & Bean?" with customer notes and AI draft', () => {
    const src = getAiSource();
    expect(src).toBeTruthy();
    expect(src).toContain('How was Brew & Bean?');
    expect(src).toContain('Great oat latte, fast wifi, friendly staff…');
    expect(src).toContain('Loved the oat latte and quick service. Perfect spot to work — will be back!');
  });

  it('F15-5: AI state machine supports rating updates and draft editing workflows', () => {
    const ai = createAiReviewAssistStateMachine();
    expect(ai.rating).toBe(5);
    ai.setRating(4);
    expect(ai.rating).toBe(4);
    expect(ai.isEditing).toBe(false);
    ai.toggleEdit();
    expect(ai.isEditing).toBe(true);
    const googleAction = ai.continueToGoogle();
    expect(googleAction.destination).toContain('writereview');
  });
});
