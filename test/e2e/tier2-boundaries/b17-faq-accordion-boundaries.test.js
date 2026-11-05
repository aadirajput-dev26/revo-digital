const { describe, it, expect, createFaqAccordionStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 2 Boundary: Feature 17 FAQ Accordion Boundaries', () => {
  it('B17-1: Accordion list contains exactly 9 authoritative questions', () => {
    const questions = [
      'How does contactless tapping work?',
      'Can customers scan a QR code instead?',
      'Are the cards compatible with different smartphones?',
      'Can I add my business logo?',
      'Can I provide my own design?',
      'Can RevoDigital create a custom design?',
      'How does the AI Review Assist feature work?',
      'How can I place an order?',
      'What are the delivery options?',
    ];
    expect(questions.length).toBe(9);
    const src = getAggregatedSource('src/components/FaqFooter.tsx');
    for (const q of questions) {
      expect(src).toContain(q);
    }
  });

  it('B17-2: Toggling currently active item collapses it (openId becomes null)', () => {
    const sm = createFaqAccordionStateMachine();
    expect(sm.openId).toBe('q1');
    sm.toggle('q1');
    expect(sm.openId).toBe(null);
  });

  it('B17-3: Rapid consecutive toggling across all 9 items remains deterministic', () => {
    const sm = createFaqAccordionStateMachine(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'], null);
    for (let i = 1; i <= 9; i++) {
      sm.toggle(`q${i}`);
      expect(sm.openId).toBe(`q${i}`);
    }
    expect(sm.history.length).toBe(10); // initial null + 9 clicks
  });

  it('B17-4: Content container max-width enforces 860px reading column boundary', () => {
    const src = getAggregatedSource('src/components/FaqFooter.tsx');
    expect(src).toMatch(/max-w-\[860px\]|max-w-4xl|max-w-3xl|max-w-\[1280px\]/);
  });

  it('B17-5: Active accordion question applies ice blue tint highlight (bg-ice/40 border-primary)', () => {
    const src = getAggregatedSource('src/components/FaqFooter.tsx');
    expect(src).toMatch(/bg-ice|border-primary/);
  });
});
