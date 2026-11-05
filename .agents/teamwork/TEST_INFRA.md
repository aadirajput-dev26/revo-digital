# E2E Test Infra: RevoDigital Next.js Website

## Test Philosophy
- Opaque-box, requirement-driven derivation based on ORIGINAL_REQUEST.md and design preview specification.
- Zero dependency on internal implementation details; evaluates rendered DOM, HTTP endpoints, interactive components, responsive views, and user flows.
- Methodology: Category-Partition + Boundary Value Analysis (BVA) + Pairwise Combinatorial Testing + Real-World Workload Testing.

## Feature Inventory & Test Mapping (18 Core Features)
| # | Feature | Requirement Source | Tier 1 (Features) | Tier 2 (Boundaries) | Tier 3 (Pairwise) |
|---|---------|-------------------|:-----------------:|:-------------------:|:-----------------:|
| 1 | Header Brand Lockup | R1, R2, Navbar | 5 tests | 5 tests | ✓ |
| 2 | Section Anchor Navigation | R1, R2, Navbar | 5 tests | 5 tests | ✓ |
| 3 | WhatsApp Quick Action | R1, R2, Navbar | 5 tests | 5 tests | ✓ |
| 4 | Mobile Navigation Drawer | R1, R2, Navbar | 5 tests | 5 tests | ✓ |
| 5 | Hero Value Props & Metrics | R1, R2, Hero | 5 tests | 5 tests | ✓ |
| 6 | Hero Scene Timeline Selector | R1, R2, Hero | 5 tests | 5 tests | ✓ |
| 7 | Hero Video Scrubber & Play State | R1, R2, Hero | 5 tests | 5 tests | ✓ |
| 8 | Smartphone Compatibility Ribbon | R1, R2, Hero | 5 tests | 5 tests | ✓ |
| 9 | Review Solutions Product Card | R1, R2, Products | 5 tests | 5 tests | ✓ |
| 10 | Personal Business Cards Card | R1, R2, Products | 5 tests | 5 tests | ✓ |
| 11 | Counter Stand Catalog Gallery | R1, R2, Gallery | 5 tests | 5 tests | ✓ |
| 12 | Business Card Catalog Gallery | R1, R2, Gallery | 5 tests | 5 tests | ✓ |
| 13 | Customization Studio Comparison | R1, R2, Customization | 5 tests | 5 tests | ✓ |
| 14 | 3-Step Process Flow | R1, R2, How It Works | 5 tests | 5 tests | ✓ |
| 15 | AI Review Assist Demo | R1, R2, AI Review | 5 tests | 5 tests | ✓ |
| 16 | Dual-Sector Audience Showcase | R1, R2, Audience | 5 tests | 5 tests | ✓ |
| 17 | Expandable FAQ Accordion | R1, R2, FAQ | 5 tests | 5 tests | ✓ |
| 18 | Universal Enquiry Form & WhatsApp | R1, R2, Enquiry | 5 tests | 5 tests | ✓ |

## Test Architecture
- **Test Runner**: Node test runner or Vitest / Jest running automated E2E tests against the built Next.js application / DOM fixtures.
- **Pass / Fail Semantics**: Zero exit code (`exit 0`), 100% test assertions pass, zero console error traces or uncaught exceptions.
- **Directory Layout**: `test/e2e/` containing tier-specific test suites:
  - `test/e2e/tier1-features/`
  - `test/e2e/tier2-boundaries/`
  - `test/e2e/tier3-pairwise/`
  - `test/e2e/tier4-scenarios/`
  - `test/e2e/runner.js` (Root test suite execution script)

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Expected Outcome |
|---|----------|--------------------|------------------|
| 1 | Café Owner Order Flow | F1, F2, F9, F11, F18 | User browses Hero, views Review Stand, clicks Enquire on Cloud White Stand, lands on Enquiry Form with prefilled variant, enters details, generates valid WhatsApp URL. |
| 2 | Executive Consultant Profile Flow | F2, F10, F12, F18 | User scrolls to Business Cards, explores Onyx Black card, clicks Enquire, preselects Business Cards category with Onyx Black variant. |
| 3 | Customer AI Review Assist Experience | F2, F14, F15 | User steps through How It Works, tries AI Review Assist phone simulator, adjusts star rating, toggles edit mode, tests draft generation. |
| 4 | Mobile User End-to-End Navigation | F4, F1, F2, F3, F18 | Mobile viewport simulation (<768px): user opens hamburger menu, clicks FAQ link, expands accordion question, taps WhatsApp support CTA. |
| 5 | Custom Brand Before/After Audit | F13, F18 | User compares standard card vs Brew & Bean custom stand, clicks "Request Custom Design", verifies enquiry routing. |
| 6 | Responsive Breakpoint Integrity | All features | Validates layout and touch/click targets across desktop (1440px), tablet (768px), and mobile (375px). |
| 7 | Full Page Accessibility & Keyboard Nav | F1, F2, F17, F18 | Validates tab navigation, ARIA attributes, label associations, focus indicators, and form keyboard submit. |
| 8 | Empty & Invalid Input Robustness | F18 | Submits enquiry form with invalid phone or missing fields, verifies clean validation feedback without crash. |
| 9 | Direct WhatsApp Contact Flow | F3, F17, F19 | Verifies all WhatsApp triggers across navbar, FAQ banner, enquiry form, and footer generate valid URLs with appropriate encoded parameters. |

## Coverage Thresholds
- Tier 1: 90 tests (5 per feature × 18 features)
- Tier 2: 90 tests (5 boundary/corner tests × 18 features)
- Tier 3: 18 tests (Pairwise feature interaction suites)
- Tier 4: 9 real-world end-to-end scenarios
- **Total Minimum Test Count: 207 tests**

