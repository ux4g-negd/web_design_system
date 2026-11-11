/**
 * Property 0: CSS bundle contains all new Phase 8 component selectors
 * Tag: Feature: ux4g-phase8-components, Property 0
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5
 *
 * For each Phase 8 component, generate a representative selector from that
 * component's set and assert it is present in the CSS bundle.
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

// Resolve path to styles/ux4g.css relative to this test file
const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

// Representative selectors for each Phase 8 component
const PHASE8_SELECTORS = [
  // Accessibility Bar
  '.ux4g-topbar',
  '.ux4g-topbar__wrap',
  '.ux4g-topbar__skip',
  // Accordion
  '.ux4g-accordion',
  '.ux4g-accordion-arrow-left',
  '.ux4g-accordion-bordered',
  // Stepper
  '.ux4g-stepper',
  '.ux4g-stepper-vertical',
  '.ux4g-stepper-horizontal',
  '.ux4g-stepper-center',
  '.ux4g-stepper-bottom-line',
  // Slider
  '.ux4g-slider-field',
  '.ux4g-slider-m',
  // Drawer
  '.ux4g-drawer',
  '.ux4g-drawer-right',
  '.ux4g-drawer-open',
] as const;

/**
 * Property 0: CSS bundle contains all new Phase 8 component selectors
 * Tag: Feature: ux4g-phase8-components, Property 0
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5
 */
describe('Property 0: CSS bundle contains all new Phase 8 component selectors', () => {
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
   * For any selector from the Phase 8 selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**
   */
  it('Feature: ux4g-phase8-components, Property 0 — CSS bundle contains all Phase 8 component selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...PHASE8_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });
});
