/**
 * test/e2e/test-helpers.js
 * Opaque-box E2E test harness and DOM / source inspection utilities.
 * Zero external runtime dependencies; executes in native Node.js 22.
 */

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

// Root directory of the RevoDigital project
const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

// Test Suite Registry
const testRegistry = {
  suites: [],
  currentSuite: null,
};

function describe(suiteName, fn) {
  const previousSuite = testRegistry.currentSuite;
  const suite = {
    name: suiteName,
    tests: [],
  };
  testRegistry.suites.push(suite);
  testRegistry.currentSuite = suite;

  try {
    fn();
  } finally {
    testRegistry.currentSuite = previousSuite;
  }
}

function it(testName, fn) {
  const currentSuite = testRegistry.currentSuite;
  const testItem = {
    name: testName,
    fn,
  };
  if (currentSuite) {
    currentSuite.tests.push(testItem);
  } else {
    testRegistry.suites.push({
      name: 'Default Suite',
      tests: [testItem],
    });
  }
}

const test = it;

// Chainable Expectation Matchers
function expect(actual) {
  return {
    toBe(expected) {
      assert.strictEqual(actual, expected, `Expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);
    },
    toEqual(expected) {
      assert.deepStrictEqual(actual, expected, `Expected ${JSON.stringify(actual)} to deeply equal ${JSON.stringify(expected)}`);
    },
    toBeTruthy() {
      assert.ok(actual, `Expected ${JSON.stringify(actual)} to be truthy`);
    },
    toBeFalsy() {
      assert.ok(!actual, `Expected ${JSON.stringify(actual)} to be falsy`);
    },
    toBeGreaterThan(expected) {
      assert.ok(actual > expected, `Expected ${actual} to be greater than ${expected}`);
    },
    toBeGreaterThanOrEqual(expected) {
      assert.ok(actual >= expected, `Expected ${actual} to be greater than or equal to ${expected}`);
    },
    toBeLessThan(expected) {
      assert.ok(actual < expected, `Expected ${actual} to be less than ${expected}`);
    },
    toBeLessThanOrEqual(expected) {
      assert.ok(actual <= expected, `Expected ${actual} to be less than or equal to ${expected}`);
    },
    toContain(expected) {
      if (typeof actual === 'string') {
        assert.ok(
          actual.includes(expected),
          `Expected string to contain ${JSON.stringify(expected)}, but received:\n${actual.slice(0, 300)}...`
        );
      } else if (Array.isArray(actual)) {
        assert.ok(
          actual.includes(expected) || actual.some(item => JSON.stringify(item) === JSON.stringify(expected)),
          `Expected array to contain ${JSON.stringify(expected)}`
        );
      } else if (actual && typeof actual === 'object') {
        assert.ok(expected in actual, `Expected object to contain property ${JSON.stringify(expected)}`);
      } else {
        throw new Error(`Cannot call toContain on type ${typeof actual}`);
      }
    },
    toMatch(regex) {
      const reg = typeof regex === 'string' ? new RegExp(regex) : regex;
      assert.ok(reg.test(String(actual)), `Expected string to match pattern ${regex}`);
    },
    toThrow(expectedErrorPattern) {
      let threw = false;
      let thrownError = null;
      try {
        if (typeof actual === 'function') {
          actual();
        } else {
          throw new Error('actual is not a function');
        }
      } catch (err) {
        threw = true;
        thrownError = err;
      }
      assert.ok(threw, 'Expected function to throw an error, but it did not throw.');
      if (expectedErrorPattern) {
        if (typeof expectedErrorPattern === 'string') {
          assert.ok(
            thrownError.message.includes(expectedErrorPattern),
            `Expected error message to include ${JSON.stringify(expectedErrorPattern)}, got ${JSON.stringify(thrownError.message)}`
          );
        } else if (expectedErrorPattern instanceof RegExp) {
          assert.ok(
            expectedErrorPattern.test(thrownError.message),
            `Expected error message to match ${expectedErrorPattern}, got ${JSON.stringify(thrownError.message)}`
          );
        }
      }
    },
    not: {
      toBe(expected) {
        assert.notStrictEqual(actual, expected, `Expected ${JSON.stringify(actual)} not to be ${JSON.stringify(expected)}`);
      },
      toEqual(expected) {
        assert.notDeepStrictEqual(actual, expected, `Expected ${JSON.stringify(actual)} not to deeply equal ${JSON.stringify(expected)}`);
      },
      toContain(expected) {
        if (typeof actual === 'string') {
          assert.ok(!actual.includes(expected), `Expected string NOT to contain ${JSON.stringify(expected)}`);
        } else if (Array.isArray(actual)) {
          assert.ok(!actual.includes(expected), `Expected array NOT to contain ${JSON.stringify(expected)}`);
        }
      },
      toMatch(regex) {
        const reg = typeof regex === 'string' ? new RegExp(regex) : regex;
        assert.ok(!reg.test(String(actual)), `Expected ${JSON.stringify(actual)} NOT to match ${regex}`);
      },
    },
  };
}

// --------------------------------------------------------------------------
// File & Source Helpers
// --------------------------------------------------------------------------

function getProjectRoot() {
  return PROJECT_ROOT;
}

function resolveProjectPath(relPath) {
  return path.resolve(PROJECT_ROOT, relPath);
}

function projectFileExists(relPath) {
  return fs.existsSync(resolveProjectPath(relPath));
}

function readProjectFile(relPath) {
  const fullPath = resolveProjectPath(relPath);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  return fs.readFileSync(fullPath, 'utf8');
}

function getAggregatedSource(componentRelPath) {
  const parts = [];
  if (componentRelPath) {
    const comp = readProjectFile(componentRelPath);
    if (comp) parts.push(comp);
  }
  
  // Aggregate all components in src/components if present
  const compDir = resolveProjectPath('src/components');
  if (fs.existsSync(compDir)) {
    const files = fs.readdirSync(compDir).filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'));
    for (const f of files) {
      const c = readProjectFile(`src/components/${f}`);
      if (c && (!componentRelPath || !componentRelPath.includes(f))) {
        parts.push(c);
      }
    }
  }

  const page = readProjectFile('src/app/page.tsx');
  if (page) parts.push(page);
  const layout = readProjectFile('src/app/layout.tsx');
  if (layout) parts.push(layout);
  const content = readProjectFile('src/data/content.ts');
  if (content) parts.push(content);

  return parts.join('\n');
}

function requireSourceFile(relPath) {
  const fullPath = resolveProjectPath(relPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File does not exist: ${relPath} (expected at ${fullPath})`);
  }
  return fs.readFileSync(fullPath, 'utf8');
}

// --------------------------------------------------------------------------
// Business Logic & State Simulation Helpers
// --------------------------------------------------------------------------

function generateWhatsAppUrl({
  fullName = '',
  whatsappNumber = '',
  businessName = '',
  quantity = 1,
  category = 'Review Solutions',
  selectedVariant = 'Smart Review Stand · Cloud White',
  additionalRequirements = '',
  targetPhone = '919876543210',
} = {}) {
  const cleanPhone = String(targetPhone).replace(/\D/g, '');
  
  const lines = [
    `*New RevoDigital Enquiry*`,
    `----------------------------------`,
    `*Product Category:* ${category || 'Review Solutions'}`,
    `*Selected Variant:* ${selectedVariant || 'Smart Review Stand · Cloud White'}`,
    `*Quantity:* ${quantity}`,
    `*Full Name:* ${fullName.trim()}`,
    `*Business Name:* ${businessName.trim()}`,
    `*WhatsApp:* ${whatsappNumber.trim()}`,
  ];

  if (additionalRequirements && additionalRequirements.trim()) {
    lines.push(`*Requirements:* ${additionalRequirements.trim()}`);
  }

  const messageText = lines.join('\n');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;
}

function parseAndValidateWhatsAppUrl(url) {
  try {
    const parsed = new URL(url);
    const isHttps = parsed.protocol === 'https:';
    const isWaHost = parsed.hostname === 'wa.me';
    const cleanPhone = parsed.pathname.replace(/^\//, '');
    const hasValidPhone = /^\d{10,15}$/.test(cleanPhone);
    const textParam = parsed.searchParams.get('text') || '';
    
    return {
      isValid: isHttps && isWaHost && hasValidPhone && textParam.length > 0,
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      phone: cleanPhone,
      text: textParam,
      hasParam: (p) => textParam.includes(p),
    };
  } catch {
    return {
      isValid: false,
      protocol: '',
      hostname: '',
      phone: '',
      text: '',
      hasParam: () => false,
    };
  }
}

function createEnquiryStateMachine(initialVariant = 'Smart Review Stand · Cloud White', initialCategory = 'Review Solutions') {
  let selectedVariant = initialVariant;
  let selectedCategory = initialCategory;
  const history = [{ selectedVariant, selectedCategory }];

  return {
    get selectedVariant() {
      return selectedVariant;
    },
    get selectedCategory() {
      return selectedCategory;
    },
    get history() {
      return [...history];
    },
    setSelectedVariant(variant, category) {
      selectedVariant = variant;
      if (category) {
        selectedCategory = category;
      }
      history.push({ selectedVariant, selectedCategory });
    },
    setSelectedCategory(category) {
      selectedCategory = category;
      history.push({ selectedVariant, selectedCategory });
    },
    reset() {
      selectedVariant = initialVariant;
      selectedCategory = initialCategory;
      history.push({ selectedVariant, selectedCategory });
    },
  };
}

function createFaqAccordionStateMachine(faqIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'], defaultOpenId = 'q1') {
  let openId = defaultOpenId;
  const history = [openId];

  return {
    get openId() {
      return openId;
    },
    isOpen(id) {
      return openId === id;
    },
    toggle(id) {
      openId = openId === id ? null : id;
      history.push(openId);
      return openId;
    },
    get history() {
      return [...history];
    },
  };
}

function createHeroTimelineStateMachine(initialScene = 2) {
  const scenes = [
    { index: 0, label: '01 · Card floats', name: 'Card floats', progress: 16 },
    { index: 1, label: '02 · Phone enters', name: 'Phone enters', progress: 33 },
    { index: 2, label: '03 · Tap', name: 'Tap interaction', progress: 55 },
    { index: 3, label: '04 · Blue pulse', name: 'Blue pulse', progress: 70 },
    { index: 4, label: '05 · Review UI', name: 'Review UI', progress: 85 },
    { index: 5, label: '06 · Pull back', name: 'Pull back', progress: 100 },
  ];

  let currentScene = Math.max(0, Math.min(scenes.length - 1, initialScene));
  let isPlaying = true;

  return {
    get currentScene() {
      return currentScene;
    },
    get activeSceneData() {
      return scenes[currentScene];
    },
    get isPlaying() {
      return isPlaying;
    },
    selectScene(index) {
      if (index >= 0 && index < scenes.length) {
        currentScene = index;
      }
      return scenes[currentScene];
    },
    togglePlay() {
      isPlaying = !isPlaying;
      return isPlaying;
    },
    nextScene() {
      currentScene = (currentScene + 1) % scenes.length;
      return scenes[currentScene];
    },
  };
}

function createAiReviewAssistStateMachine({
  initialRating = 5,
  initialNote = 'Great oat latte, fast wifi, friendly staff…',
  businessName = 'Brew & Bean',
} = {}) {
  let rating = Math.max(1, Math.min(5, initialRating));
  let note = initialNote;
  let isEditing = false;
  let draft = `Loved the oat latte and quick service at ${businessName}. Perfect spot to work — will be back!`;

  return {
    get rating() {
      return rating;
    },
    get note() {
      return note;
    },
    get draft() {
      return draft;
    },
    get isEditing() {
      return isEditing;
    },
    setRating(newRating) {
      rating = Math.max(1, Math.min(5, Math.round(newRating)));
    },
    setNote(newNote) {
      note = newNote;
      draft = `Loved the visit to ${businessName}. ${newNote.trim()}`;
    },
    toggleEdit() {
      isEditing = !isEditing;
      return isEditing;
    },
    updateDraft(newDraft) {
      draft = newDraft;
    },
    continueToGoogle() {
      return {
        rating,
        reviewText: draft,
        destination: `https://search.google.com/local/writereview?placeid=${encodeURIComponent(businessName)}`,
      };
    },
  };
}

module.exports = {
  describe,
  it,
  test,
  expect,
  assert,
  testRegistry,
  PROJECT_ROOT,
  getProjectRoot,
  resolveProjectPath,
  projectFileExists,
  readProjectFile,
  getAggregatedSource,
  requireSourceFile,
  generateWhatsAppUrl,
  parseAndValidateWhatsAppUrl,
  createEnquiryStateMachine,
  createFaqAccordionStateMachine,
  createHeroTimelineStateMachine,
  createAiReviewAssistStateMachine,
};
