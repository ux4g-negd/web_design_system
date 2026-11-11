/**
 * Property 0: CSS bundle contains all new Phase 6 component selectors
 * Tag: Feature: ux4g-phase6-components, Property 0
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6
 *
 * For each Phase 6 component, generate a representative selector from that
 * component's set and assert it is present in the CSS bundle.
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

// Resolve path to styles/ux4g.css relative to this test file
const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

// Representative selectors for each Phase 6 component
// Note: .ux4g-dropdown-selection does NOT exist as a standalone class in the vendor CSS —
// the selection type is styled implicitly via :not(.ux4g-dropdown-button):not(.ux4g-dropdown-overflow).
// We use .ux4g-dropdown-button as the representative dropdown type selector instead.
const PHASE6_SELECTORS = [
  // List
  '.ux4g-list',
  '.ux4g-list-default',
  '.ux4g-list-m',
  // Dropdown
  '.ux4g-dropdown',
  '.ux4g-dropdown-button',
  '.ux4g-dropdown-m',
  // Combobox
  '.ux4g-combobox',
  '.ux4g-combobox-single',
  '.ux4g-combobox-m',
  // Modal
  '.ux4g-modal-backdrop',
  '.ux4g-modal-m',
  '.ux4g-modal-backdrop-50',
  // Alert / Toast
  '.ux4g-alert',
  '.ux4g-alert-info',
  '.ux4g-context-alert',
  '.ux4g-alert-container',
  // Search
  '.ux4g-search-container',
  '.ux4g-search-m',
] as const;

/**
 * Property 0: CSS bundle contains all new Phase 6 component selectors
 * Tag: Feature: ux4g-phase6-components, Property 0
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6
 */
describe('Property 0: CSS bundle contains all new Phase 6 component selectors', () => {
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
   * For any selector from the Phase 6 selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**
   */
  it('Feature: ux4g-phase6-components, Property 0 — CSS bundle contains all Phase 6 component selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...PHASE6_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });
});
