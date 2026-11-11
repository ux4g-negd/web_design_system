/**
 * Property 0: CSS bundle contains all Phase 10 component selectors
 * Tag: Feature: ux4g-phase10-components, Property 0
 * Validates: Requirements 1.12, 2.14, 3.16, 6.1–6.6
 *
 * For each Phase 10 component, assert a representative selector from that
 * component's CSS file is present in the built styles/ux4g.css bundle.
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

// Resolve path to styles/ux4g.css relative to this test file
const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

// Representative selectors for each of the 3 new Phase 10 CSS files
const PHASE10_SELECTORS = [
  // time-slot.css
  '.ux4g-time-slot-weekly-container',
  '.ux4g-time-slot-compact-container',
  // footer.css
  '.ux4g-footer-primary',
  '.ux4g-footer-dark',
  // result-list.css
  '.ux4g-result-list',
  '.ux4g-result-list-v1',
] as const;

/**
 * Property 0: CSS bundle contains all Phase 10 component selectors
 * Tag: Feature: ux4g-phase10-components, Property 0
 * Validates: Requirements 1.12, 2.14, 3.16, 6.1–6.6
 */
describe('Property 0: CSS bundle contains all Phase 10 component selectors', () => {
  let cssContent: string;

  beforeAll(() => {
    if (fs.existsSync(CSS_BUNDLE_PATH)) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    } else {
      cssContent = '';
    }
  });

  it('styles/ux4g.css exists', () => {
    expect(fs.existsSync(CSS_BUNDLE_PATH)).toBe(true);
  });

  /**
   * For any selector from the Phase 10 selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * Uses fc.constant(true) as the trivial arbitrary since the CSS bundle is a
   * static file read from disk on each run — the property holds unconditionally
   * on every run.
   *
   * **Validates: Requirements 1.12, 2.14, 3.16, 6.1–6.6**
   */
  it('Feature: ux4g-phase10-components, Property 0 — CSS bundle contains all Phase 10 component selectors', () => {
    fc.assert(
      fc.property(
        fc.constant(true),
        (_) => {
          for (const selector of PHASE10_SELECTORS) {
            if (!cssContent.includes(selector)) {
              return false;
            }
          }
          return true;
        }
      ),
      { numRuns: 5 }
    );
  });
});
