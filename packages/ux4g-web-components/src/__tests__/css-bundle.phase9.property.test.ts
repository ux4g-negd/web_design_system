/**
 * Property 0: CSS bundle contains all new Phase 9 component selectors
 * Tag: Feature: ux4g-phase9-components, Property 0
 * Validates: Requirements 16.5-16.18
 *
 * For each Phase 9 component, assert a representative selector from that
 * component's CSS file is present in the built styles/ux4g.css bundle.
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

// Resolve path to styles/ux4g.css relative to this test file
const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

// Representative selectors for each of the 14 new Phase 9 CSS files
const PHASE9_SELECTORS = [
  // date-time.css
  '.ux4g-date-picker-container',
  '.ux4g-time-picker-container',
  // status-pipeline.css
  '.ux4g-status-pipeline-stepper',
  '.ux4g-status-pipeline-vertical',
  // journey-timeline.css
  '.ux4g-journey-timeline',
  '.ux4g-journey-timeline--vertical',
  // form-field-group.css
  '.ux4g-form-group',
  // otp.css
  '.ux4g-otp',
  '.ux4g-otp-success',
  // upload.css
  '.ux4g-upload',
  '.ux4g-upload-state-error',
  // progress-indicator.css
  '.ux4g-progress-bar',
  '.ux4g-progress-circle',
  // feedback.css
  '.ux4g-feedback',
  // draft-status-bar.css
  '.ux4g-draft-status-bar',
  '.ux4g-auto-draft-status-bar',
  '.ux4g-success-draft-status-bar',
  // sla-progress-indicator.css
  '.ux4g-sla-circle',
  '.ux4g-sla-linear',
  '.ux4g-sla-badge',
  // carousel.css
  '.ux4g-carousel',
  // empty-state.css
  '.ux4g-empty-state',
  // chips-group.css
  '.ux4g-filter-chip-group',
  '.ux4g-choice-chip-group',
  // navbar.css
  '.ux4g-navbar',
] as const;

/**
 * Property 0: CSS bundle contains all new Phase 9 component selectors
 * Tag: Feature: ux4g-phase9-components, Property 0
 * Validates: Requirements 16.5-16.18
 */
describe('Property 0: CSS bundle contains all new Phase 9 component selectors', () => {
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
   * For any selector from the Phase 9 selector set,
   * that selector SHALL appear in styles/ux4g.css.
   *
   * Uses fc.constant(null) as the trivial arbitrary since the CSS bundle is a
   * static file — the property holds unconditionally on every run.
   *
   * **Validates: Requirements 16.5-16.18**
   */
  it('Feature: ux4g-phase9-components, Property 0 — CSS bundle contains all Phase 9 component selectors', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        (_) => {
          for (const selector of PHASE9_SELECTORS) {
            if (!cssContent.includes(selector)) {
              return false;
            }
          }
          return true;
        }
      ),
      { numRuns: 20 }
    );
  });
});
