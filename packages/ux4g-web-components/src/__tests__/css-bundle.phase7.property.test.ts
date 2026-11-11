/**
 * Property 0: CSS bundle contains all new Phase 7 component selectors
 * Tag: Feature: ux4g-phase7-components, Property 0
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6
 *
 * For each Phase 7 component, generate a representative selector from that
 * component's set and assert it is present in the CSS bundle.
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

// Resolve path to styles/ux4g.css relative to this test file
const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

// Representative selectors for each Phase 7 component
const PHASE7_SELECTORS = [
  // Pagination
  '.ux4g-pagination',
  '.ux4g-pagination-dotted',
  '.ux4g-pagination-solid',
  '.ux4g-pagination-translucent',
  // Table
  '.ux4g-table',
  '.ux4g-table-m',
  '.ux4g-table-column-dividers',
  '.ux4g-table-zebra-rows',
  '.ux4g-table-interactive',
  // Popover
  '.ux4g-popover',
  '.ux4g-popover-bottom',
  '.ux4g-popover-top-start',
  // Tooltip
  '.ux4g-tooltip-wrapper',
  '.ux4g-tooltip',
  '.ux4g-tooltip-top-center',
  '.ux4g-tooltip-s',
  // Tab
  '.ux4g-tab',
  '.ux4g-tab-underline',
  '.ux4g-tab-m',
  '.ux4g-tab-vertical',
  // Icon Button
  '.ux4g-icon-btn',
  '.ux4g-icon-btn-primary',
  '.ux4g-icon-btn-m',
  '.ux4g-icon-btn-pill',
] as const;

/**
 * Property 0: CSS bundle contains all new Phase 7 component selectors
 * Tag: Feature: ux4g-phase7-components, Property 0
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6
 */
describe('Property 0: CSS bundle contains all new Phase 7 component selectors', () => {
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
   * For any selector from the Phase 7 selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**
   */
  it('Feature: ux4g-phase7-components, Property 0 — CSS bundle contains all Phase 7 component selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...PHASE7_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });
});
