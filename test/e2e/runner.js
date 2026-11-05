#!/usr/bin/env node

/**
 * test/e2e/runner.js
 * Central test harness executing all 4 tiers of E2E tests for RevoDigital.
 * Usage:
 *   node test/e2e/runner.js
 *   node test/e2e/runner.js --tier=1
 *   node test/e2e/runner.js --bail
 */

const fs = require('node:fs');
const path = require('node:path');
const { performance } = require('node:perf_hooks');
const { testRegistry } = require('./test-helpers');

const TIERS = [
  { id: 1, name: 'Tier 1: Feature Inventory (18 Features)', dir: 'tier1-features', minTests: 90 },
  { id: 2, name: 'Tier 2: Boundary & Corner Cases', dir: 'tier2-boundaries', minTests: 90 },
  { id: 3, name: 'Tier 3: Pairwise Combinatorial Interactions', dir: 'tier3-pairwise', minTests: 18 },
  { id: 4, name: 'Tier 4: End-to-End User Scenarios', dir: 'tier4-scenarios', minTests: 9 },
  { id: 5, name: 'Tier 5: Adversarial Stress & Integrity Hardening', dir: 'tier5-adversarial', minTests: 10 },
];

// Parse command line arguments
const args = process.argv.slice(2);
let tierFilter = null;
let bailOnError = false;
let verbose = false;

for (const arg of args) {
  if (arg.startsWith('--tier=')) {
    tierFilter = parseInt(arg.split('=')[1], 10);
  } else if (arg === '--bail') {
    bailOnError = true;
  } else if (arg === '--verbose' || arg === '-v') {
    verbose = true;
  }
}

async function run() {
  console.log('======================================================================');
  console.log('         RevoDigital E2E Test Suite — Opaque-Box Test Harness         ');
  console.log('======================================================================');
  console.log(`Node Runtime: ${process.version} on ${process.platform}`);
  console.log(`Working Directory: ${process.cwd()}`);
  if (tierFilter) {
    console.log(`Running Filter: Tier ${tierFilter} only`);
  }
  console.log('----------------------------------------------------------------------\n');

  const startTime = performance.now();
  const resultsByTier = [];
  let totalPassed = 0;
  let totalFailed = 0;
  let totalTests = 0;
  const failureDetails = [];

  for (const tier of TIERS) {
    if (tierFilter && tier.id !== tierFilter) {
      continue;
    }

    const tierDir = path.join(__dirname, tier.dir);
    if (!fs.existsSync(tierDir)) {
      console.log(`[!] Notice: Tier directory not yet created: ${tier.dir}`);
      resultsByTier.push({
        ...tier,
        found: 0,
        passed: 0,
        failed: 0,
        files: 0,
      });
      continue;
    }

    const testFiles = fs
      .readdirSync(tierDir)
      .filter(f => f.endsWith('.test.js'))
      .sort();

    console.log(`\n>>> [TIER ${tier.id}] ${tier.name} (${testFiles.length} test files)`);
    console.log(''.padEnd(70, '-'));

    let tierPassed = 0;
    let tierFailed = 0;
    let tierTotal = 0;

    for (const file of testFiles) {
      const filePath = path.join(tierDir, file);
      
      // Clear registry before loading file
      testRegistry.suites = [];
      testRegistry.currentSuite = null;

      try {
        // Delete from require cache to allow fresh execution
        delete require.cache[require.resolve(filePath)];
        require(filePath);
      } catch (err) {
        console.log(`  ✖ [SYNTAX / LOAD ERROR] ${file}: ${err.message}`);
        tierFailed++;
        totalFailed++;
        failureDetails.push({
          tier: tier.id,
          file,
          test: 'File Load',
          error: err,
        });
        if (bailOnError) break;
        continue;
      }

      // Execute registered suites and tests
      const suites = [...testRegistry.suites];
      for (const suite of suites) {
        for (const t of suite.tests) {
          tierTotal++;
          totalTests++;

          try {
            if (typeof t.fn === 'function') {
              const res = t.fn();
              if (res && typeof res.then === 'function') {
                await res;
              }
            }
            tierPassed++;
            totalPassed++;
            if (verbose) {
              console.log(`  ✔ [PASS] ${file} :: ${t.name}`);
            }
          } catch (err) {
            tierFailed++;
            totalFailed++;
            console.log(`  ✖ [FAIL] ${file} :: ${t.name}`);
            console.log(`     Error: ${err.message}`);
            failureDetails.push({
              tier: tier.id,
              file,
              suite: suite.name,
              test: t.name,
              error: err,
            });
            if (bailOnError) break;
          }
        }
        if (bailOnError && tierFailed > 0) break;
      }

      if (!verbose && tierTotal > 0) {
        const fileStatus = tierFailed === 0 ? '✔' : '✖';
        console.log(`  ${fileStatus} ${file.padEnd(38, ' ')} (${tierPassed} pass, ${tierFailed} fail)`);
      }

      if (bailOnError && tierFailed > 0) break;
    }

    resultsByTier.push({
      ...tier,
      files: testFiles.length,
      found: tierTotal,
      passed: tierPassed,
      failed: tierFailed,
    });

    if (bailOnError && totalFailed > 0) break;
  }

  const durationMs = (performance.now() - startTime).toFixed(1);

  // Print Summary Table
  console.log('\n======================================================================');
  console.log('                          TEST RUN SUMMARY                            ');
  console.log('======================================================================');
  console.log(
    'Tier'.padEnd(10) +
    'Description'.padEnd(42) +
    'Files'.padEnd(8) +
    'Passed'.padEnd(10) +
    'Failed'.padEnd(8)
  );
  console.log(''.padEnd(78, '-'));

  for (const r of resultsByTier) {
    const tierTag = `Tier ${r.id}`;
    const desc = r.name.length > 40 ? r.name.substring(0, 39) + '…' : r.name;
    const fileCount = String(r.files || 0);
    const passCount = `${r.passed}/${r.found}`;
    const failCount = String(r.failed);
    console.log(
      tierTag.padEnd(10) +
      desc.padEnd(42) +
      fileCount.padEnd(8) +
      passCount.padEnd(10) +
      failCount.padEnd(8)
    );
  }

  console.log(''.padEnd(78, '-'));
  console.log(
    `TOTAL: ${totalTests} tests run across ${resultsByTier.reduce((acc, r) => acc + (r.files || 0), 0)} files in ${durationMs}ms`
  );
  console.log(`PASSED: ${totalPassed} | FAILED: ${totalFailed}`);

  // Print detailed failure traces if any
  if (failureDetails.length > 0) {
    console.log('\n======================================================================');
    console.log(`                       FAILURES (${failureDetails.length})                              `);
    console.log('======================================================================');
    failureDetails.forEach((f, idx) => {
      console.log(`\n[${idx + 1}] Tier ${f.tier} > ${f.file} > ${f.test}`);
      console.log(`    Message: ${f.error.message}`);
      if (f.error.stack && verbose) {
        console.log(`    Stack:\n${f.error.stack.split('\n').slice(1, 5).map(l => '      ' + l).join('\n')}`);
      }
    });
  }

  console.log('\n======================================================================');
  if (totalFailed === 0 && totalTests >= 207) {
    console.log('  STATUS: [ALL 207+ E2E TESTS PASSED - PRODUCTION READY]              ');
  } else if (totalFailed === 0) {
    console.log(`  STATUS: [PASSED - ${totalTests} tests executed]                         `);
  } else {
    console.log(`  STATUS: [FAILURES DETECTED - ${totalFailed} tests failed]                 `);
  }
  console.log('======================================================================\n');

  process.exit(totalFailed > 0 ? 1 : 0);
}

run().catch(err => {
  console.error('Fatal Runner Error:', err);
  process.exit(1);
});
