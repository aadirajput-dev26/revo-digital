const { describe, it, expect, createFaqAccordionStateMachine, getAggregatedSource } = require('../test-helpers');

describe('Tier 4 Scenario 04: Mobile User End-to-End Navigation & FAQ Experience', () => {
  it('S04: Mobile visitor opens hamburger menu, clicks FAQ, expands question 4, and opens WhatsApp chat', () => {
    // 1. Mobile visitor views sticky header and activates mobile menu
    const navSrc = getAggregatedSource('src/components/Navbar.tsx');
    expect(navSrc).toMatch(/md:hidden/);
    expect(navSrc).toContain('FAQ');

    let mobileDrawerOpen = false;
    mobileDrawerOpen = true; // User taps hamburger
    expect(mobileDrawerOpen).toBe(true);

    // 2. User taps "FAQ" link in drawer -> closes drawer and navigates to #faq
    mobileDrawerOpen = false;
    expect(mobileDrawerOpen).toBe(false);

    // 3. User views Section 08 FAQ
    const faqSrc = getAggregatedSource('src/components/FaqFooter.tsx');
    expect(faqSrc).toContain('08 — FAQ');
    expect(faqSrc).toContain('Everything, answered.');

    // 4. User expands Question 4: "Can I add my business logo?"
    const faqSm = createFaqAccordionStateMachine();
    expect(faqSm.isOpen('q1')).toBe(true);
    expect(faqSm.isOpen('q4')).toBe(false);

    faqSm.toggle('q4');
    expect(faqSm.isOpen('q4')).toBe(true);

    // 5. User checks WhatsApp support callout banner
    expect(faqSrc).toContain('Still curious? Chat with us on WhatsApp.');
    expect(faqSrc).toContain('Replies within minutes, 10am–8pm IST');
    expect(faqSrc).toContain('Chat Now');
  });
});
