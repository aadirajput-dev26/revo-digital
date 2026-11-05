const { describe, it, expect, createAiReviewAssistStateMachine, createEnquiryStateMachine } = require('../test-helpers');

describe('Tier 3 Pairwise: P08 AI Review Demo <-> Enquiry Context State Isolation', () => {
  it('P08: Interacting with AI Review phone simulator does not pollute or mutate active EnquiryContext form data', () => {
    const enquiry = createEnquiryStateMachine('Smart Review Stand · Cloud White', 'Review Solutions');
    const ai = createAiReviewAssistStateMachine();

    // Perform AI actions
    ai.setRating(4);
    ai.toggleEdit();
    ai.updateDraft('Custom edited draft for testing');

    // Verify EnquiryContext is unmodified
    expect(enquiry.selectedVariant).toBe('Smart Review Stand · Cloud White');
    expect(enquiry.selectedCategory).toBe('Review Solutions');
    expect(enquiry.history.length).toBe(1);
  });
});
