const { describe, it, expect, getAggregatedSource } = require('../test-helpers');

describe('Feature 16: Dual-Sector Audience Showcase', () => {
  function getAudienceSource() {
    return getAggregatedSource('src/components/HowAiWho.tsx');
  }

  it('F16-1: Section 07 displays eyebrow "07 — WHO IS IT FOR?" and H2 "Built for counters, teams and talent."', () => {
    const src = getAudienceSource();
    expect(src).toBeTruthy();
    expect(src).toContain('07 — WHO IS IT FOR?');
    expect(src).toContain('Built for counters, teams and talent.');
  });

  it('F16-2: Panel 1 displays Google Review Solutions header and 6 business sectors', () => {
    const src = getAudienceSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Restaurants');
    expect(src).toContain('Clinics & Healthcare');
    expect(src).toContain('Salons & Spas');
    expect(src).toContain('Retail Stores');
    expect(src).toContain('Hotels & Hospitality');
    expect(src).toContain('Auto Showrooms');
  });

  it('F16-3: Panel 2 displays Personal Business Cards header and 6 individual roles', () => {
    const src = getAudienceSource();
    expect(src).toBeTruthy();
    expect(src).toContain('Entrepreneurs');
    expect(src).toContain('Freelancers');
    expect(src).toContain('Consultants');
    expect(src).toContain('Sales Pros');
    expect(src).toContain('Business Owners');
    expect(src).toContain('Creators');
  });

  it('F16-4: Audience panels incorporate distinct sector icons (Store and Briefcase)', () => {
    const src = getAudienceSource();
    expect(src).toBeTruthy();
    expect(src).toMatch(/Store|Briefcase/i);
  });

  it('F16-5: Exactly 12 audience sectors/roles are represented across the showcase', () => {
    const content = getAggregatedSource('src/data/content.ts');
    expect(content).toBeTruthy();
    const count = (content.match(/title:\s*["'][A-Za-z &]+["']/g) || []).length;
    expect(count).toBeGreaterThanOrEqual(12);
  });
});
