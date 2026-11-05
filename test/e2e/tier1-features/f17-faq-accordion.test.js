const { describe, it, expect, getAggregatedSource, createFaqAccordionStateMachine } = require('../test-helpers');

describe('Feature 17: Expandable FAQ Accordion', () => {
  function getFaqSource() {
    return getAggregatedSource('src/components/FaqFooter.tsx');
  }

  it('F17-1: Section 08 displays eyebrow "08 — FAQ" and H2 "Everything, answered."', () => {
    const src = getFaqSource();
    expect(src).toBeTruthy();
    expect(src).toContain('08 — FAQ');
    expect(src).toContain('Everything, answered.');
  });

  it('F17-2: Contains all 9 authoritative question titles', () => {
    const src = getFaqSource();
    expect(src).toBeTruthy();
    expect(src).toContain('How does contactless tapping work?');
    expect(src).toContain('Can customers scan a QR code instead?');
    expect(src).toContain('Are the cards compatible with different smartphones?');
    expect(src).toContain('Can I add my business logo?');
    expect(src).toContain('Can I provide my own design?');
    expect(src).toContain('Can RevoDigital create a custom design?');
    expect(src).toContain('How does the AI Review Assist feature work?');
    expect(src).toContain('How can I place an order?');
    expect(src).toContain('What are the delivery options?');
  });

  it('F17-3: Default first item (Q1) is marked as expanded in state model', () => {
    const sm = createFaqAccordionStateMachine();
    expect(sm.isOpen('q1')).toBe(true);
    expect(sm.isOpen('q2')).toBe(false);
  });

  it('F17-4: Accordion state machine supports toggling items between open and closed', () => {
    const sm = createFaqAccordionStateMachine();
    sm.toggle('q1');
    expect(sm.isOpen('q1')).toBe(false);
    sm.toggle('q3');
    expect(sm.isOpen('q3')).toBe(true);
  });

  it('F17-5: Renders WhatsApp support banner with "Replies within minutes, 10am–8pm IST"', () => {
    const src = getFaqSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Still curious? Chat with us on WhatsApp.');
    expect(src).toContain('Replies within minutes, 10am–8pm IST');
    expect(src).toContain('Chat Now');
  });
});
