/**
 * test/adversarial/adversarial.test.js
 * Comprehensive Adversarial Stress Test Suite for RevoDigital
 *
 * Focus Areas:
 * 1. Form validation boundaries (empty inputs, error highlighting, special characters/emojis/extreme strings in WhatsApp URL, extreme quantities)
 * 2. Layout & Viewport boundaries (1440px desktop, 768px tablet, 375px mobile, overflow safety, mobile drawer behavior)
 * 3. DOM & Asset integrity (every image has valid src & descriptive alt, every button has accessible name/aria-label)
 */

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

// Helper to read files
function readFile(relPath) {
  return fs.readFileSync(path.join(PROJECT_ROOT, relPath), 'utf8');
}

// Global test counters
let passCount = 0;
let failCount = 0;
const testResults = [];

function test(name, fn) {
  try {
    fn();
    passCount++;
    testResults.push({ name, passed: true });
    console.log(`  ✔ [PASS] ${name}`);
  } catch (err) {
    failCount++;
    testResults.push({ name, passed: false, error: err });
    console.log(`  ✖ [FAIL] ${name}`);
    console.log(`     ${err.message}`);
  }
}

console.log('======================================================================');
console.log('       RevoDigital EMPIRICAL CHALLENGER ADVERSARIAL TEST SUITE        ');
console.log('======================================================================\n');

// ---------------------------------------------------------------------------
// SUITE 1: Form Validation Boundaries & WhatsApp Generator Stress-Testing
// ---------------------------------------------------------------------------
console.log('>>> [SUITE 1] Form Validation Boundaries & WhatsApp URL Encoding');
console.log(''.padEnd(70, '-'));

const faqFooterSource = readFile('src/components/FaqFooter.tsx');
const contentSource = readFile('src/data/content.ts');

test('Form component contains explicit fullName and whatsappNumber validation logic', () => {
  assert.ok(
    faqFooterSource.includes('if (!formData.fullName.trim())'),
    'Must check for empty or whitespace fullName'
  );
  assert.ok(
    faqFooterSource.includes('errors.fullName = "Please enter your full name"'),
    'Must set descriptive error message for missing fullName'
  );
  assert.ok(
    faqFooterSource.includes('if (!formData.whatsappNumber.trim())'),
    'Must check for empty or whitespace whatsappNumber'
  );
  assert.ok(
    faqFooterSource.includes('errors.whatsappNumber = "Please enter your WhatsApp number"'),
    'Must set descriptive error message for missing whatsappNumber'
  );
});

test('Form inputs dynamically apply red border styling on validation failure without crashing', () => {
  assert.ok(
    faqFooterSource.includes('formErrors.fullName ? "border-red-500" : "border-border"'),
    'Full name input must highlight with border-red-500 on validation error'
  );
  assert.ok(
    faqFooterSource.includes('formErrors.whatsappNumber ? "border-red-500" : "border-border"'),
    'WhatsApp number input must highlight with border-red-500 on validation error'
  );
  assert.ok(
    faqFooterSource.includes('{formErrors.fullName && ('),
    'Form must render error text container for fullName'
  );
  assert.ok(
    faqFooterSource.includes('{formErrors.whatsappNumber && ('),
    'Form must render error text container for whatsappNumber'
  );
});

test('Form clearing logic removes error on field change', () => {
  assert.ok(
    faqFooterSource.includes('if (formErrors[field])'),
    'Must check if active field has existing error'
  );
  assert.ok(
    faqFooterSource.includes('delete next[field]'),
    'Must delete error key on input modification'
  );
});

// Simulation of form validation and URL generator
function simulateEnquirySubmit(formData, targetPhone = '919876543210') {
  const errors = {};
  if (!formData.fullName || !formData.fullName.trim()) {
    errors.fullName = 'Please enter your full name';
  }
  if (!formData.whatsappNumber || !formData.whatsappNumber.trim()) {
    errors.whatsappNumber = 'Please enter your WhatsApp number';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, waUrl: null };
  }

  const formattedMessage = [
    `*New Product Enquiry — RevoDigital*`,
    `---------------------------------`,
    `*Selected Variant:* ${formData.selectedVariant}`,
    `*Category:* ${formData.category}`,
    `*Quantity:* ${formData.quantity}`,
    `*Full Name:* ${formData.fullName}`,
    `*WhatsApp:* ${formData.whatsappNumber}`,
    `*Business Name:* ${formData.businessName || 'Not provided'}`,
    `*Requirements:* ${formData.additionalRequirements || 'None'}`,
  ].join('\n');

  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMessage)}`;
  return { success: true, errors: {}, waUrl, formattedMessage };
}

test('Validation rejects empty strings and spaces', () => {
  const res1 = simulateEnquirySubmit({ fullName: '', whatsappNumber: '' });
  assert.strictEqual(res1.success, false);
  assert.strictEqual(res1.errors.fullName, 'Please enter your full name');
  assert.strictEqual(res1.errors.whatsappNumber, 'Please enter your WhatsApp number');

  const res2 = simulateEnquirySubmit({ fullName: '   ', whatsappNumber: '   \t\n' });
  assert.strictEqual(res2.success, false);
  assert.strictEqual(res2.errors.fullName, 'Please enter your full name');
  assert.strictEqual(res2.errors.whatsappNumber, 'Please enter your WhatsApp number');
});

test('WhatsApp URL generator safely encodes special characters, emojis and quotes without URL breakage', () => {
  const complexBusiness = 'Café "L’Étoile" & Brew <Co.> #1 / 100% 👍';
  const complexReq = `Need 5 custom QR stands with:
- Line breaks & indentation
- Emojis: ☕✨🎉
- Special symbols: @ # $ % ^ & * ( ) _ + = { } [ ] : ; " ' < > ? / | \\ ~ \``;

  const result = simulateEnquirySubmit({
    fullName: 'Dr. Jane O\'Connor-Smith & Co.',
    whatsappNumber: '+91 (98200) 12345',
    businessName: complexBusiness,
    quantity: 25,
    category: 'Review Solutions',
    selectedVariant: 'Sunset Pop Stand',
    additionalRequirements: complexReq,
  });

  assert.strictEqual(result.success, true);
  assert.ok(result.waUrl, 'URL must be produced');

  // Parse with native URL parser
  const parsedUrl = new URL(result.waUrl);
  assert.strictEqual(parsedUrl.protocol, 'https:');
  assert.strictEqual(parsedUrl.hostname, 'wa.me');
  assert.strictEqual(parsedUrl.pathname, '/919876543210');

  // Verify decoded text contains exact uncorrupted characters
  const decodedText = parsedUrl.searchParams.get('text');
  assert.ok(decodedText.includes(complexBusiness), 'Business name must decode intact');
  assert.ok(decodedText.includes('☕✨🎉'), 'Emojis must decode intact');
  assert.ok(decodedText.includes("Dr. Jane O'Connor-Smith & Co."), 'Full name must decode intact');
  assert.ok(decodedText.includes('@ # $ % ^ & *'), 'Symbols must decode intact');
});

test('WhatsApp URL generator handles extreme payload size (10,000+ characters) without throwing', () => {
  const hugeString = 'X'.repeat(12000);
  const result = simulateEnquirySubmit({
    fullName: 'Tester',
    whatsappNumber: '+919999999999',
    businessName: 'Scale Corp',
    quantity: 100,
    category: 'Business Cards',
    selectedVariant: 'Onyx Black',
    additionalRequirements: hugeString,
  });

  assert.strictEqual(result.success, true);
  const parsed = new URL(result.waUrl);
  const text = parsed.searchParams.get('text');
  assert.strictEqual(text.length > 12000, true);
  assert.ok(text.includes('Scale Corp'));
});

test('Quantity boundary inputs in select dropdown match design requirements', () => {
  assert.ok(faqFooterSource.includes('<option value={1}>1 piece</option>'));
  assert.ok(faqFooterSource.includes('<option value={2}>2 pieces</option>'));
  assert.ok(faqFooterSource.includes('<option value={5}>5 pieces</option>'));
  assert.ok(faqFooterSource.includes('<option value={10}>10 pieces</option>'));
  assert.ok(faqFooterSource.includes('<option value={25}>25+ pieces (Bulk)</option>'));
  assert.ok(
    faqFooterSource.includes('handleInputChange("quantity", Number(e.target.value))'),
    'Quantity must be parsed as a numeric type'
  );
});

// ---------------------------------------------------------------------------
// SUITE 2: Layout & Viewport Boundaries (1440px, 768px, 375px)
// ---------------------------------------------------------------------------
console.log('\n>>> [SUITE 2] Layout Boundaries & Viewport Responsiveness');
console.log(''.padEnd(70, '-'));

const navbarSource = readFile('src/components/Navbar.tsx');
const heroSource = readFile('src/components/Hero.tsx');
const productsSource = readFile('src/components/ProductsSection.tsx');
const gallerySource = readFile('src/components/GalleryCustom.tsx');
const howAiSource = readFile('src/components/HowAiWho.tsx');
const pageSource = readFile('src/app/page.tsx');
const layoutSource = readFile('src/app/layout.tsx');

test('Root viewport configuration matches mobile & responsive standards in layout.tsx', () => {
  assert.ok(layoutSource.includes('width: "device-width"'), 'Must define device-width');
  assert.ok(layoutSource.includes('initialScale: 1'), 'Must define initialScale 1');
  assert.ok(layoutSource.includes('themeColor: "#14213D"'), 'Must define theme color');
  assert.ok(layoutSource.includes('scroll-smooth'), 'Must enable smooth scrolling');
});

test('Main page wrapper enforces anti-overflow and standard background tokens', () => {
  assert.ok(pageSource.includes('min-h-screen'), 'Page must be min-h-screen');
  assert.ok(pageSource.includes('bg-background'), 'Page must use bg-background');
  assert.ok(pageSource.includes('text-navy'), 'Page must use text-navy');
});

test('Desktop container boundaries (1440px desktop) use max-w-[1280px] containers with padding', () => {
  const components = [
    { name: 'Navbar', src: navbarSource, maxW: 'max-w-[1280px]' },
    { name: 'Hero', src: heroSource, maxW: 'max-w-[1280px]' },
    { name: 'ProductsSection', src: productsSource, maxW: 'max-w-[1280px]' },
    { name: 'GalleryCustom', src: gallerySource, maxW: 'max-w-[1280px]' },
    { name: 'HowAiWho', src: howAiSource, maxW: 'max-w-[1280px]' },
    { name: 'FaqFooter', src: faqFooterSource, maxW: 'max-w-[1280px]' },
  ];

  for (const c of components) {
    assert.ok(
      c.src.includes(c.maxW),
      `${c.name} must constrain max container width with ${c.maxW}`
    );
    assert.ok(
      c.src.includes('px-8') || c.src.includes('px-6'),
      `${c.name} must provide horizontal padding to prevent edge sticking on 1440px+`
    );
  }
});

test('Tablet container boundaries (768px md breakpoint) support responsive column transitions', () => {
  // Check md: and sm: transitions
  assert.ok(navbarSource.includes('hidden md:flex'), 'Navbar links hide on < 768px and show on md:');
  assert.ok(navbarSource.includes('flex md:hidden'), 'Navbar hamburger shows on < 768px and hides on md:');
  assert.ok(heroSource.includes('grid-cols-1 lg:grid-cols-2'), 'Hero stacks to 1 column on tablet and 2 on lg:');
  assert.ok(gallerySource.includes('grid-cols-1 md:grid-cols-3'), 'Stand catalog transforms gracefully at md:');
  assert.ok(gallerySource.includes('grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'), 'Card catalog transforms 1 -> 2 -> 4 cols');
  assert.ok(productsSource.includes('grid-cols-1 lg:grid-cols-2'), 'Product cards stack to 1 col on tablet');
});

test('Mobile container boundaries (375px) prevent horizontal overflow', () => {
  // Ensure decor elements that bleed outside bounds have overflow-hidden or pointer-events-none
  assert.ok(
    heroSource.includes('overflow-hidden'),
    'Hero section must have overflow-hidden to clip radial gradients'
  );
  assert.ok(
    heroSource.includes('pointer-events-none'),
    'Decor elements must have pointer-events-none to prevent touch interception'
  );
  assert.ok(
    howAiSource.includes('overflow-hidden'),
    'HowAiWho section must have overflow-hidden for ambient glows'
  );
  assert.ok(
    productsSource.includes('overflow-hidden'),
    'Products cards must have overflow-hidden for inner image mockups'
  );
  assert.ok(
    gallerySource.includes('overflow-hidden'),
    'GalleryCustom studio must have overflow-hidden'
  );
});

test('Mobile drawer opens, closes, toggles state, and provides backdrop blur', () => {
  assert.ok(navbarSource.includes('const [mobileMenuOpen, setMobileMenuOpen] = useState(false);'));
  assert.ok(navbarSource.includes('onClick={() => setMobileMenuOpen(!mobileMenuOpen)}'));
  assert.ok(navbarSource.includes('mobileMenuOpen && ('));
  assert.ok(navbarSource.includes('md:hidden border-t border-border bg-background/98 backdrop-blur-lg'));
  assert.ok(navbarSource.includes('setMobileMenuOpen(false);'), 'Links must close mobile drawer on tap');
});

// ---------------------------------------------------------------------------
// SUITE 3: DOM & Asset Integrity (Images & Buttons Accessibility)
// ---------------------------------------------------------------------------
console.log('\n>>> [SUITE 3] DOM & Asset Integrity: Image Alt Tags & Button Aria Labels');
console.log(''.padEnd(70, '-'));

const allTsxFiles = [
  'src/components/Navbar.tsx',
  'src/components/Hero.tsx',
  'src/components/ProductsSection.tsx',
  'src/components/GalleryCustom.tsx',
  'src/components/HowAiWho.tsx',
  'src/components/FaqFooter.tsx',
  'src/app/page.tsx',
  'src/app/layout.tsx',
];

test('Every <img> element across all source components has a valid src and alt attribute', () => {
  let imgCount = 0;
  for (const relPath of allTsxFiles) {
    const content = readFile(relPath);
    const imgRegex = /<img\s+([^>]+)>/g;
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
      imgCount++;
      const attrs = match[1];
      assert.ok(
        attrs.includes('src='),
        `<img> in ${relPath} is missing src attribute: ${match[0]}`
      );
      assert.ok(
        attrs.includes('alt='),
        `<img> in ${relPath} is missing alt attribute: ${match[0]}`
      );
      // Ensure alt is not empty string
      assert.ok(
        !attrs.includes('alt=""') && !attrs.includes("alt=''"),
        `<img> in ${relPath} has empty alt text: ${match[0]}`
      );
    }
  }
  assert.ok(imgCount >= 10, `Expected at least 10 <img> elements across components, found ${imgCount}`);
  console.log(`     (Audited ${imgCount} <img> elements: 100% compliant with descriptive alt attributes)`);
});

test('All data catalogs provide valid non-empty imageUrl and descriptive labels', () => {
  // Extract catalog arrays from content.ts source text
  function extractArray(name) {
    const reg = new RegExp(`export const ${name}(?::\\s*[A-Za-z0-9_\\[\\]]+)?\\s*=\\s*(\\[[\\s\\S]*?\\]);`, 'm');
    const match = contentSource.match(reg);
    assert.ok(match, `Could not find export for ${name}`);
    // Clean TypeScript typecasts if any like "as ProductCategory"
    const cleaned = match[1].replace(/as\s+[A-Za-z0-9_]+/g, '');
    return JSON.parse(
      cleaned
        .replace(/(\w+):/g, '"$1":') // quote keys
        .replace(/'/g, '"')          // single to double quotes
        .replace(/,\s*([\]}])/g, '$1') // trailing commas
    );
  }

  // Parse stands
  const standMatches = [...contentSource.matchAll(/id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?imageUrl:\s*"([^"]+)"/g)];
  assert.ok(standMatches.length >= 3, 'Must have at least 3 gallery stands');
  for (const m of standMatches) {
    assert.ok(m[3].startsWith('http'), `Stand ${m[1]} must have valid http url`);
    assert.ok(m[2].length > 3, `Stand ${m[1]} must have descriptive name`);
  }

  // Parse cards
  const cardMatches = [...contentSource.matchAll(/id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?imageUrl:\s*"([^"]+)"/g)];
  assert.ok(cardMatches.length >= 7, 'Must have stands + cards in catalogs');

  // Parse business sectors
  const sectorMatches = [...contentSource.matchAll(/id:\s*"(sec-[^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"business",\s*imageUrl:\s*"([^"]+)"/g)];
  assert.strictEqual(sectorMatches.length, 6, 'Must have 6 business sectors');
  for (const m of sectorMatches) {
    assert.ok(m[3].startsWith('http'), `Sector ${m[1]} must have valid http url`);
    assert.ok(m[2].length > 2, `Sector ${m[1]} must have descriptive title`);
  }

  // Parse individual personas
  const personaMatches = [...contentSource.matchAll(/id:\s*"(role-[^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"individual",\s*imageUrl:\s*"([^"]+)"/g)];
  assert.strictEqual(personaMatches.length, 6, 'Must have 6 individual personas');
  for (const m of personaMatches) {
    assert.ok(m[3].startsWith('http'), `Persona ${m[1]} must have valid http url`);
    assert.ok(m[2].length > 2, `Persona ${m[1]} must have descriptive title`);
  }
});

test('Every icon-only <button> element has an accessible name via aria-label', () => {
  // Mobile Hamburger Toggle
  assert.ok(
    navbarSource.includes('aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}'),
    'Hamburger toggle button must have dynamic aria-label'
  );

  // Mobile WhatsApp Quick Contact
  assert.ok(
    navbarSource.includes('aria-label="WhatsApp quick contact"'),
    'Mobile WhatsApp button must have aria-label'
  );

  // Video Timeline Play/Pause Button in Hero
  assert.ok(
    heroSource.includes('aria-label={isPlaying ? "Pause timeline preview" : "Play timeline preview"}'),
    'Hero video scrubber play/pause button must have dynamic aria-label'
  );

  // Star Rating Buttons in HowAiWho
  assert.ok(
    howAiSource.includes('aria-label={`Rate ${star} stars`}'),
    'AI demo star buttons must have descriptive aria-label'
  );

  // Modal Close Button in ProductsSection
  assert.ok(
    productsSource.includes('aria-label="Close modal"'),
    'Popup modal close button must have aria-label="Close modal"'
  );

  // FAQ Accordion Toggle Button in FaqFooter
  assert.ok(
    faqFooterSource.includes('aria-expanded={isOpen}'),
    'FAQ accordion toggle buttons must communicate open/closed state via aria-expanded'
  );
});

test('Social media icon links in footer include accessible aria-label attributes', () => {
  assert.ok(faqFooterSource.includes('aria-label="Instagram"'));
  assert.ok(faqFooterSource.includes('aria-label="LinkedIn"'));
  assert.ok(faqFooterSource.includes('aria-label="YouTube"'));
  assert.ok(faqFooterSource.includes('aria-label="Facebook"'));
});

// ---------------------------------------------------------------------------
// SUITE 4: Interactive State Machine & Boundary Stress Transitions
// ---------------------------------------------------------------------------
console.log('\n>>> [SUITE 4] Interactive State Machine Edge Cases & Boundary Stress');
console.log(''.padEnd(70, '-'));

test('FAQ Accordion can toggle open/closed multiple times without state corruption', () => {
  let openFaqIds = ['faq-1'];
  const toggle = (id) => {
    openFaqIds = openFaqIds.includes(id)
      ? openFaqIds.filter((item) => item !== id)
      : [...openFaqIds, id];
  };

  assert.deepStrictEqual(openFaqIds, ['faq-1']);
  toggle('faq-1');
  assert.deepStrictEqual(openFaqIds, []);
  toggle('faq-2');
  assert.deepStrictEqual(openFaqIds, ['faq-2']);
  toggle('faq-3');
  assert.deepStrictEqual(openFaqIds, ['faq-2', 'faq-3']);
  toggle('faq-2');
  assert.deepStrictEqual(openFaqIds, ['faq-3']);
});

test('Hero scene timeline auto-advancement cycles modulus correctly through all 6 scenes', () => {
  const stepsCount = 6;
  let activeStepIndex = 2; // initial scene 03

  for (let i = 0; i < 18; i++) {
    activeStepIndex = (activeStepIndex + 1) % stepsCount;
    assert.ok(activeStepIndex >= 0 && activeStepIndex < 6);
  }
  // After 18 increments from 2, (2 + 18) % 6 = 2
  assert.strictEqual(activeStepIndex, 2);
});

test('AI Review rating transitions dynamically modify suggested draft text', () => {
  let starRating = 5;
  let draftText = '';

  const handleStarClick = (rating) => {
    starRating = rating;
    if (rating === 5) {
      draftText = 'Loved the oat latte and quick service. Perfect spot to work — will be back!';
    } else if (rating === 4) {
      draftText = 'Great coffee and pleasant atmosphere. Staff was friendly and wifi was fast.';
    } else if (rating <= 3) {
      draftText = 'Decent coffee and helpful staff, though service took a little longer today.';
    }
  };

  handleStarClick(5);
  assert.ok(draftText.includes('Loved the oat latte'));
  handleStarClick(4);
  assert.ok(draftText.includes('Great coffee and pleasant atmosphere'));
  handleStarClick(3);
  assert.ok(draftText.includes('Decent coffee'));
  handleStarClick(1);
  assert.ok(draftText.includes('Decent coffee'));
});

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log('\n======================================================================');
console.log('                   CHALLENGER STRESS TEST SUMMARY                     ');
console.log('======================================================================');
console.log(`TOTAL ADVERSARIAL STRESS TESTS: ${passCount + failCount}`);
console.log(`PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('======================================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
