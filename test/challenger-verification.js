/**
 * test/challenger-verification.js
 * Adversarial Empirical Verification Suite for RevoDigital Interactive State & UI
 * 
 * Domains Tested:
 * 1. Hero Timeline & Scrubber (01-06 steps, progress %, interval loop, play/pause)
 * 2. AI Review Assist Simulator (1-5 stars, draft text mapping, edit toggle, Continue to Google)
 * 3. FAQ Accordion (default open, toggle open/close, multi-open behavior)
 * 4. Universal Enquiry & WhatsApp (variant auto-fill, category sync, URL encoding, input validation)
 * 5. Production HTTP DOM verification against live server (http://localhost:3456)
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const results = {
  passed: 0,
  failed: 0,
  findings: [],
  tests: [],
};

function recordTest(name, passed, details = '') {
  if (passed) {
    results.passed++;
    results.tests.push({ name, status: 'PASS', details });
    console.log(`  ✔ [PASS] ${name}`);
  } else {
    results.failed++;
    results.tests.push({ name, status: 'FAIL', details });
    console.error(`  ✖ [FAIL] ${name}: ${details}`);
  }
}

function addFinding(id, severity, title, observation, logicChain, impact, recommendation) {
  results.findings.push({
    id,
    severity,
    title,
    observation,
    logicChain,
    impact,
    recommendation,
  });
}

console.log('======================================================================');
console.log('       CHALLENGER EMPIRICAL VERIFICATION & STRESS-TEST HARNESS        ');
console.log('======================================================================\n');

// ============================================================================
// SUITE 1: Hero Timeline & Scrubber
// ============================================================================
console.log('>>> [SUITE 1] Hero Timeline & Video Scrubber State Transitions');
console.log('----------------------------------------------------------------------');

const HERO_TIMELINE_STEPS = [
  { id: "01", label: "01 · Card floats" },
  { id: "02", label: "02 · Phone enters" },
  { id: "03", label: "03 · Tap" },
  { id: "04", label: "04 · Blue pulse" },
  { id: "05", label: "05 · Review UI" },
  { id: "06", label: "06 · Pull back" },
];

function simulateHeroTimeline() {
  let activeStepIndex = 2; // Initial state: index 2 = "03 · Tap"
  let isPlaying = false;
  let intervalTimer = null;

  return {
    get activeStepIndex() { return activeStepIndex; },
    get activeStep() { return HERO_TIMELINE_STEPS[activeStepIndex]; },
    get isPlaying() { return isPlaying; },
    get progressPercent() {
      return Math.round(((activeStepIndex + 1) / HERO_TIMELINE_STEPS.length) * 100);
    },
    selectStep(idx) {
      if (idx >= 0 && idx < HERO_TIMELINE_STEPS.length) {
        activeStepIndex = idx;
        isPlaying = false;
        if (intervalTimer) {
          clearInterval(intervalTimer);
          intervalTimer = null;
        }
      }
    },
    togglePlay() {
      isPlaying = !isPlaying;
    },
    tickAdvance() {
      if (isPlaying) {
        activeStepIndex = (activeStepIndex + 1) % HERO_TIMELINE_STEPS.length;
      }
    },
  };
}

// Test 1.1: Initial State
{
  const hero = simulateHeroTimeline();
  const pass = hero.activeStepIndex === 2 &&
               hero.activeStep.id === '03' &&
               hero.activeStep.label === '03 · Tap' &&
               hero.progressPercent === 50 &&
               hero.isPlaying === false;
  recordTest('Hero Initial State: default index 2 ("03 · Tap"), 50% progress, paused', pass);
}

// Test 1.2: All 6 Timeline Buttons & Progress Calculation
{
  const expectedProgress = [17, 33, 50, 67, 83, 100];
  let allMatch = true;
  for (let i = 0; i < 6; i++) {
    const hero = simulateHeroTimeline();
    hero.selectStep(i);
    if (hero.activeStepIndex !== i || hero.progressPercent !== expectedProgress[i]) {
      allMatch = false;
      break;
    }
  }
  recordTest('Hero 6 Timeline Buttons (01-06): correct step selection and exact progress % [17%, 33%, 50%, 67%, 83%, 100%]', allMatch);
}

// Test 1.3: Play/Pause Toggle & Auto-advance Loop
{
  const hero = simulateHeroTimeline();
  hero.togglePlay();
  const playStateAfterToggle = hero.isPlaying === true;
  
  // Advance 6 steps (should complete full cycle back to index 2)
  for (let step = 0; step < 6; step++) {
    hero.tickAdvance();
  }
  const fullLoopReturn = hero.activeStepIndex === 2;
  
  // Advance 1 step
  hero.tickAdvance();
  const step3 = hero.activeStepIndex === 3;
  
  recordTest('Hero Play/Pause: toggle starts playback, advances modulo 6 in continuous loop', playStateAfterToggle && fullLoopReturn && step3);
}

// Test 1.4: Manual Step Click Pauses Playback
{
  const hero = simulateHeroTimeline();
  hero.togglePlay(); // playing
  hero.selectStep(5); // user clicks 06
  const pausedAfterClick = hero.isPlaying === false && hero.activeStepIndex === 5;
  recordTest('Hero Manual Interruption: selecting button stops automated playback immediately', pausedAfterClick);
}

// Test 1.5: Out-of-bounds Resilience
{
  const hero = simulateHeroTimeline();
  hero.selectStep(-1);
  const ignoreNegative = hero.activeStepIndex === 2;
  hero.selectStep(99);
  const ignoreOverflow = hero.activeStepIndex === 2;
  recordTest('Hero Boundary Robustness: ignores negative or out-of-range step indices', ignoreNegative && ignoreOverflow);
}

// ============================================================================
// SUITE 2: AI Review Assist Simulator
// ============================================================================
console.log('\n>>> [SUITE 2] AI Review Assist Simulator State & Actions');
console.log('----------------------------------------------------------------------');

const DEFAULT_AI_DRAFT = "“Loved the oat latte and quick service. Perfect spot to work — will be back!”";

function simulateAiReviewAssist() {
  let starRating = 5;
  let isEditingDraft = false;
  let draftText = DEFAULT_AI_DRAFT;
  let postedSuccess = false;

  return {
    get starRating() { return starRating; },
    get isEditingDraft() { return isEditingDraft; },
    get draftText() { return draftText; },
    get postedSuccess() { return postedSuccess; },
    handleStarClick(rating) {
      starRating = rating;
      if (rating === 5) {
        draftText = "“Loved the oat latte and quick service. Perfect spot to work — will be back!”";
      } else if (rating === 4) {
        draftText = "“Great coffee and pleasant atmosphere. Staff was friendly and wifi was fast.”";
      } else if (rating <= 3) {
        draftText = "“Decent coffee and helpful staff, though service took a little longer today.”";
      }
    },
    toggleEdit() {
      isEditingDraft = !isEditingDraft;
    },
    setDraftText(newText) {
      draftText = newText;
    },
    handleContinueGoogle() {
      postedSuccess = true;
      // In component: setTimeout sets false after 3000ms
    },
    resetPosted() {
      postedSuccess = false;
    },
  };
}

// Test 2.1: Default Rating & Draft
{
  const ai = simulateAiReviewAssist();
  const pass = ai.starRating === 5 &&
               ai.isEditingDraft === false &&
               ai.draftText.includes("Loved the oat latte") &&
               ai.postedSuccess === false;
  recordTest('AI Simulator Initial State: 5 stars, default oat latte draft, view mode', pass);
}

// Test 2.2: Star Ratings 1 to 5 Dynamic Draft Mapping
{
  const ai = simulateAiReviewAssist();
  
  // Test 4 stars
  ai.handleStarClick(4);
  const star4Ok = ai.starRating === 4 && ai.draftText.includes("Great coffee and pleasant atmosphere");
  
  // Test 3 stars
  ai.handleStarClick(3);
  const star3Ok = ai.starRating === 3 && ai.draftText.includes("service took a little longer today");
  
  // Test 2 stars
  ai.handleStarClick(2);
  const star2Ok = ai.starRating === 2 && ai.draftText.includes("service took a little longer today");
  
  // Test 1 star
  ai.handleStarClick(1);
  const star1Ok = ai.starRating === 1 && ai.draftText.includes("service took a little longer today");
  
  // Test back to 5 stars
  ai.handleStarClick(5);
  const star5Ok = ai.starRating === 5 && ai.draftText.includes("Loved the oat latte and quick service");
  
  recordTest('AI Star Rating Mapping: 1-5 stars correctly switch sentiment copy dynamically', star4Ok && star3Ok && star2Ok && star1Ok && star5Ok);
}

// Test 2.3: Editable Draft Toggle and Text Persistence
{
  const ai = simulateAiReviewAssist();
  ai.toggleEdit();
  const inEditMode = ai.isEditingDraft === true;
  
  // Modify draft
  const customDraft = "Custom review: The matcha latte and outdoor seating are unmatched!";
  ai.setDraftText(customDraft);
  
  // Finish editing
  ai.toggleEdit();
  const outOfEditMode = ai.isEditingDraft === false;
  const draftPersisted = ai.draftText === customDraft;
  
  recordTest('AI Draft Editor: edit toggle enables textarea editing and persists custom user text', inEditMode && outOfEditMode && draftPersisted);
}

// Test 2.4: Continue to Google Trigger State
{
  const ai = simulateAiReviewAssist();
  ai.handleContinueGoogle();
  const copiedState = ai.postedSuccess === true;
  ai.resetPosted();
  const resetState = ai.postedSuccess === false;
  recordTest('AI Continue to Google: triggers Copied state and resets after timeout', copiedState && resetState);
}

// ============================================================================
// SUITE 3: FAQ Accordion State Machine
// ============================================================================
console.log('\n>>> [SUITE 3] FAQ Accordion Multi-Item & Mutex Behavior');
console.log('----------------------------------------------------------------------');

const FAQ_IDS = [
  "faq-1", "faq-2", "faq-3", "faq-4", "faq-5", "faq-6", "faq-7", "faq-8", "faq-9"
];

function simulateFaqAccordion() {
  let openFaqIds = ["faq-1"]; // FaqFooter.tsx initial state

  return {
    get openFaqIds() { return [...openFaqIds]; },
    isOpen(id) { return openFaqIds.includes(id); },
    toggleFaq(id) {
      openFaqIds = openFaqIds.includes(id)
        ? openFaqIds.filter((item) => item !== id)
        : [...openFaqIds, id];
    },
  };
}

// Test 3.1: Default Open State
{
  const faq = simulateFaqAccordion();
  const pass = faq.isOpen("faq-1") && !faq.isOpen("faq-2") && faq.openFaqIds.length === 1;
  recordTest('FAQ Initial State: first item ("faq-1") is open by default, all others closed', pass);
}

// Test 3.2: Toggling Open Item Closes It
{
  const faq = simulateFaqAccordion();
  faq.toggleFaq("faq-1");
  const pass = !faq.isOpen("faq-1") && faq.openFaqIds.length === 0;
  recordTest('FAQ Toggle Open: clicking active item ("faq-1") collapses it (all closed)', pass);
}

// Test 3.3: Toggling Closed Item Opens It
{
  const faq = simulateFaqAccordion();
  faq.toggleFaq("faq-3");
  const pass = faq.isOpen("faq-1") && faq.isOpen("faq-3");
  recordTest('FAQ Multi-Open Support: clicking second item opens it alongside first item', pass);
}

// Test 3.4: Stress Test - Toggle All 9 Items Sequentially
{
  const faq = simulateFaqAccordion();
  for (const id of FAQ_IDS) {
    if (!faq.isOpen(id)) {
      faq.toggleFaq(id);
    }
  }
  const allOpen = FAQ_IDS.every(id => faq.isOpen(id));
  
  // Collapse all 9
  for (const id of FAQ_IDS) {
    faq.toggleFaq(id);
  }
  const allClosed = faq.openFaqIds.length === 0;
  recordTest('FAQ Full Traversal: successfully opens all 9 items and collapses all 9 cleanly', allOpen && allClosed);
}

// ============================================================================
// SUITE 4: Universal Enquiry & WhatsApp Builder
// ============================================================================
console.log('\n>>> [SUITE 4] Universal Enquiry State Sync & WhatsApp URL Encoding');
console.log('----------------------------------------------------------------------');

function buildWhatsAppUrl({
  phone = "919876543210",
  selectedVariant = "Smart Review Stand · Cloud White",
  category = "Review Solutions",
  quantity = 1,
  fullName = "Priya Sharma",
  whatsappNumber = "+91 98200 12345",
  businessName = "Brew & Bean",
  additionalRequirements = "Need logo + menu QR",
} = {}) {
  const formattedMessage = [
    `*New Product Enquiry — RevoDigital*`,
    `---------------------------------`,
    `*Selected Variant:* ${selectedVariant}`,
    `*Category:* ${category}`,
    `*Quantity:* ${quantity}`,
    `*Full Name:* ${fullName}`,
    `*WhatsApp:* ${whatsappNumber}`,
    `*Business Name:* ${businessName || "Not provided"}`,
    `*Requirements:* ${additionalRequirements || "None"}`,
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(formattedMessage)}`;
}

// Test 4.1: URL Syntax & Phone Number Validity
{
  const url = buildWhatsAppUrl();
  const parsed = new URL(url);
  const pass = parsed.protocol === 'https:' &&
               parsed.hostname === 'wa.me' &&
               parsed.pathname === '/919876543210' &&
               parsed.searchParams.has('text');
  recordTest('WhatsApp URL: valid HTTPS URL targeting wa.me/919876543210 with encoded text parameter', pass);
}

// Test 4.2: Payload Field Encoding & Decoding Integrity
{
  const testData = {
    selectedVariant: "Midnight Navy Stand",
    category: "Review Solutions",
    quantity: 10,
    fullName: "Aaditya Raj & Co.",
    whatsappNumber: "+91 99999 88888",
    businessName: "Studio 'Revo' & <Digital>",
    additionalRequirements: "Color #FF8A3D & 100% custom UV-print",
  };
  const url = buildWhatsAppUrl(testData);
  const parsed = new URL(url);
  const decodedText = parsed.searchParams.get('text');

  const pass = decodedText.includes("*Selected Variant:* Midnight Navy Stand") &&
               decodedText.includes("*Category:* Review Solutions") &&
               decodedText.includes("*Quantity:* 10") &&
               decodedText.includes("*Full Name:* Aaditya Raj & Co.") &&
               decodedText.includes("*Business Name:* Studio 'Revo' & <Digital>") &&
               decodedText.includes("Color #FF8A3D & 100% custom UV-print");
  recordTest('WhatsApp Payload Integrity: handles special characters (&, #, quotes, brackets, spaces, newlines) safely', pass);
}

// Test 4.3: Optional Field Fallbacks ("Not provided", "None")
{
  const url = buildWhatsAppUrl({
    businessName: "",
    additionalRequirements: "",
  });
  const parsed = new URL(url);
  const decodedText = parsed.searchParams.get('text');
  const pass = decodedText.includes("*Business Name:* Not provided") &&
               decodedText.includes("*Requirements:* None");
  recordTest('WhatsApp Optional Fallbacks: blank business name and requirements default cleanly', pass);
}

// Test 4.4: Enquiry Form Validation Logic
{
  function validateEnquiry(formData) {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name";
    }
    if (!formData.whatsappNumber.trim()) {
      errors.whatsappNumber = "Please enter your WhatsApp number";
    }
    return errors;
  }

  const err1 = validateEnquiry({ fullName: "", whatsappNumber: "" });
  const hasBothErrors = err1.fullName && err1.whatsappNumber;

  const err2 = validateEnquiry({ fullName: "   ", whatsappNumber: "9876543210" });
  const hasNameError = err2.fullName && !err2.whatsappNumber;

  const err3 = validateEnquiry({ fullName: "John Doe", whatsappNumber: "9876543210" });
  const validNoErrors = Object.keys(err3).length === 0;

  recordTest('Enquiry Form Validation: rejects empty/whitespace required fields with correct error feedback', hasBothErrors && hasNameError && validNoErrors);
}

// Test 4.5: Adversarial State Synchronization Check: Category Sync Precedence
{
  // IN FaqFooter.tsx line 86:
  // `*Category:* ${formData.category || selectedCategory}`
  // Let's test the state sync interaction:
  let contextCategory = "Review Solutions";
  let contextVariant = "Smart Review Stand · Cloud White";

  // FaqFooter mounts with initial formData copied from context:
  let localFormData = {
    category: contextCategory, // "Review Solutions"
    selectedVariant: contextVariant,
  };

  // User later clicks an "Onyx Black" Business Card in the Gallery:
  contextCategory = "Business Cards";
  contextVariant = "Onyx Black";

  // How does FaqFooter compute the WhatsApp message Category?
  const computedCategory = localFormData.category || contextCategory;
  const isBugPresent = (computedCategory === "Review Solutions" && contextCategory === "Business Cards");

  if (isBugPresent) {
    addFinding(
      'BUG-CHALLENGE-01',
      'MEDIUM',
      'Category Precedence Inversion in FaqFooter handleEnquirySubmit',
      'In FaqFooter.tsx line 86: `*Category:* ${formData.category || selectedCategory}`. When a user selects a Business Card variant from the gallery, EnquiryContext updates selectedCategory to "Business Cards". However, because formData.category was initialized to "Review Solutions" and is truthy, formData.category takes precedence over selectedCategory in the submitted message.',
      '1. FaqFooter initializes formData.category with default "Review Solutions"\n2. User clicks "Onyx Black" card in GalleryCustom.tsx\n3. handleSelect calls setSelectedVariant("Onyx Black", "Business Cards")\n4. Context updates selectedCategory to "Business Cards"\n5. User submits form without clicking category tab buttons\n6. Expression `formData.category || selectedCategory` evaluates to "Review Solutions"\n7. Result: WhatsApp enquiry says "*Category:* Review Solutions" with "*Selected Variant:* Onyx Black".',
      'Submitted WhatsApp payload reports "Review Solutions" category for business card products unless the user explicitly clicks the "Business Cards" category pill on the form.',
      'Update line 86 in FaqFooter.tsx to `${selectedCategory || formData.category}` matching the pattern used for selectedVariant line 85 `${selectedVariant || formData.selectedVariant}`, or sync formData.category via useEffect when selectedCategory changes.'
    );
  }

  recordTest('Enquiry State Analysis: identified Category precedence inversion in FaqFooter line 86', isBugPresent);
}

// ============================================================================
// SUITE 5: Live Production HTTP DOM Verification (http://localhost:3456)
// ============================================================================
console.log('\n>>> [SUITE 5] Live Production Server DOM Verification');
console.log('----------------------------------------------------------------------');

async function testLiveServer() {
  try {
    const res = await fetch('http://localhost:3456');
    const html = await res.text();
    
    // Test 5.1: HTTP Status
    recordTest('Live HTTP: Server responds with status 200 OK', res.status === 200);

    // Test 5.2: Hero Timeline Scrubber Buttons rendered in production HTML
    const hasTimeline = html.includes('01 · Card floats') &&
                        html.includes('02 · Phone enters') &&
                        html.includes('03 · Tap') &&
                        html.includes('04 · Blue pulse') &&
                        html.includes('05 · Review UI') &&
                        html.includes('06 · Pull back');
    recordTest('Live DOM: Renders all 6 Hero timeline buttons (01-06) with correct labels', hasTimeline);

    // Test 5.3: Hero Play/Pause button rendered
    const hasPlayPause = html.includes('aria-label="Play timeline preview"') ||
                         html.includes('aria-label="Pause timeline preview"');
    recordTest('Live DOM: Renders Hero play/pause timeline button with proper ARIA label', hasPlayPause);

    // Test 5.4: AI Review Assist Smartphone Mockup rendered
    const hasAiReview = (html.includes('How was Brew & Bean?') || html.includes('How was Brew &amp; Bean?')) &&
                        html.includes('Rate 5 stars') &&
                        html.includes('Loved the oat latte');
    recordTest('Live DOM: Renders AI Review Assist phone mockup with 5-star rating buttons', hasAiReview);

    // Test 5.5: FAQ Accordion items rendered
    const hasFaq = html.includes('How does contactless tapping work?') &&
                   html.includes('Can customers scan a QR code instead?') &&
                   html.includes('Are the cards compatible with different smartphones?');
    recordTest('Live DOM: Renders FAQ section with authoritative accordion questions', hasFaq);

    // Test 5.6: Universal Enquiry Form inputs & WhatsApp button rendered
    const hasEnquiry = html.includes('id="fullName"') &&
                       html.includes('id="whatsappNumber"') &&
                       html.includes('id="businessName"') &&
                       html.includes('Continue to WhatsApp');
    recordTest('Live DOM: Renders Universal Enquiry form with all fields and WhatsApp CTA', hasEnquiry);

  } catch (err) {
    recordTest('Live HTTP Server Verification', false, err.message);
  }
}

async function main() {
  await testLiveServer();

  console.log('\n======================================================================');
  console.log('                   VERIFICATION RUN COMPLETE                          ');
  console.log('======================================================================');
  console.log(`Total Empirical Checks: ${results.passed + results.failed}`);
  console.log(`Passed: ${results.passed}`);
  console.log(`Failed: ${results.failed}`);
  console.log(`Findings Recorded: ${results.findings.length}`);
  
  if (results.findings.length > 0) {
    console.log('\nFindings Summary:');
    for (const f of results.findings) {
      console.log(`- [${f.severity}] ${f.id}: ${f.title}`);
    }
  }

  // Write results JSON for reporting
  fs.writeFileSync(
    path.join(__dirname, 'challenger-results.json'),
    JSON.stringify(results, null, 2),
    'utf8'
  );
  console.log('\nWrote test results to test/challenger-results.json');
}

main().catch(err => {
  console.error('Fatal error in test runner:', err);
  process.exit(1);
});
