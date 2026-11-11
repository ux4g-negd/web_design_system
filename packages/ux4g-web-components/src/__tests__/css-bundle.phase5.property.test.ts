/**
 * Property 10: CSS bundle contains all new Phase 5 component selectors
 * Tag: Feature: ux4g-phase5-components, Property 10
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5
 *
 * For each Phase 5 component, generate a representative selector from that
 * component's set and assert it is present in the CSS bundle.
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

// Resolve path to styles/ux4g.css relative to this test file
const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

// Representative selectors for each Phase 5 component
const CHECKBOX_SELECTORS = [
  '.ux4g-checkbox',
  '.ux4g-checkbox-s',
  '.ux4g-checkbox-m',
  '.ux4g-checkbox-l',
  '.ux4g-checkbox-error',
] as const;

const RADIO_SELECTORS = [
  '.ux4g-radio',
  '.ux4g-radio-s',
  '.ux4g-radio-m',
  '.ux4g-radio-l',
  '.ux4g-radio-error',
] as const;

const SWITCH_SELECTORS = [
  '.ux4g-switch',
  '.ux4g-switch-s',
  '.ux4g-switch-m',
  '.ux4g-switch-l',
] as const;

const CARD_SELECTORS = [
  '.ux4g-card',
  '.ux4g-card-solid',
  '.ux4g-card-outline',
  '.ux4g-card-vertical',
  '.ux4g-card-horizontal',
] as const;

const INPUT_SELECTORS = [
  '.ux4g-input-container',
  '.ux4g-input-s',
  '.ux4g-input-m',
  '.ux4g-input-l',
  '.ux4g-input-xl',
  '.ux4g-input-default',
  '.ux4g-input-error',
  '.ux4g-input-success',
  '.ux4g-input-warning',
] as const;

/**
 * Property 10: CSS bundle contains all new Phase 5 component selectors
 * Tag: Feature: ux4g-phase5-components, Property 10
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5
 */
describe('Property 10: CSS bundle contains all new Phase 5 component selectors', () => {
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
   * For any selector from the Checkbox selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**
   */
  it('Feature: ux4g-phase5-components, Property 10 — CSS bundle contains Checkbox selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...CHECKBOX_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });

  /**
   * For any selector from the Radio selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**
   */
  it('Feature: ux4g-phase5-components, Property 10 — CSS bundle contains Radio selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...RADIO_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });

  /**
   * For any selector from the Switch selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**
   */
  it('Feature: ux4g-phase5-components, Property 10 — CSS bundle contains Switch selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...SWITCH_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });

  /**
   * For any selector from the Card selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**
   */
  it('Feature: ux4g-phase5-components, Property 10 — CSS bundle contains Card selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...CARD_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });

  /**
   * For any selector from the Input selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**
   */
  it('Feature: ux4g-phase5-components, Property 10 — CSS bundle contains Input selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...INPUT_SELECTORS),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });
});
