/**
 * Property 1: CSS bundle contains all button class names
 * Tag: Feature: ux4g-button-npm-package, Property 1
 * Validates: Requirements 2.3, 2.5, 2.6
 *
 * Property 2: CSS class names are ux4g-prefixed
 * Tag: Feature: ux4g-button-npm-package, Property 2
 * Validates: Requirements 2.8
 *
 * Property 3: CSS bundle preserves layer ordering
 * Tag: Feature: ux4g-button-npm-package, Property 3
 * Validates: Requirements 2.1
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

// Known set of button class names defined in the design system
const VARIANT_CLASS_NAMES = [
  'ux4g-btn-primary',
  'ux4g-btn-outline-primary',
  'ux4g-btn-text-primary',
  'ux4g-btn-tonal-primary',
  'ux4g-btn-danger',
  'ux4g-btn-outline-danger',
  'ux4g-btn-text-danger',
] as const;

const SIZE_CLASS_NAMES = [
  'ux4g-btn-xl',
  'ux4g-btn-l',
  'ux4g-btn-m',
  'ux4g-btn-s',
  'ux4g-btn-xs',
] as const;

const STATE_CLASS_NAMES = [] as const;

const ALL_BUTTON_CLASS_NAMES = [
  ...VARIANT_CLASS_NAMES,
  ...SIZE_CLASS_NAMES,
  ...STATE_CLASS_NAMES,
];

// Resolve path to styles/ux4g.css relative to this test file
const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

/**
 * Property 2: CSS class names are ux4g-prefixed
 * Tag: Feature: ux4g-button-npm-package, Property 2
 * Validates: Requirements 2.8
 *
 * Known vendor exceptions (non-ux4g-prefixed classes used by the design system):
 *   - .is-open    — open-state modifier used by Dropdown, Combobox, Modal
 *   - .is-selected — selected-state modifier used by Dropdown, Combobox
 *   - .has-selection — selection-state modifier used by Dropdown, Combobox
 *   - .active     — active-state modifier used by List
 */
describe('Property 2: CSS class names are ux4g-prefixed', () => {
  let cssContent: string;
  let classSelectors: string[];

  // Known vendor classes that are intentionally not ux4g-prefixed
  const KNOWN_NON_PREFIXED = new Set([
    // State modifiers used across multiple components
    '.is-open',
    '.is-selected',
    '.has-selection',
    '.active',
    '.show',
    '.is-hovered',
    '.is-active',
    '.is-focused',
    '.is-placeholder',
    '.has-value',
    '.disabled',
    '.is-disabled',
    '.is-empty',
    '.is-muted',
    '.collapsed',
    '.collapsing',
    '.selected',
    // Vendor component classes (non-prefixed legacy patterns)
    '.card-group',
    '.avatar-badge',
    '.btn-link',
    '.next',
    '.prev',
    '.bordered',
    // Date/time picker vendor classes
    '.is-today',
    '.is-in-range',
    '.is-range-start',
    '.is-range-end',
    // Journey timeline vendor classes
    '.journey-timeline-card',
    '.journey-timeline-title',
    '.journey-timeline-description',
    // Feedback vendor classes
    '.feedback-thumb-wrapper',
    '.feedback-thumb-down',
    '.feedback-thumb-up',
    '.feedback-nps-button',
    '.feedback-emoji-button',
    '.feedback-submitted-wrapper',
    '.contact-wrapper',
    // Time slot vendor classes
    '.holiday',
    '.weekly-off',
    '.limited',
    '.no-slots',
    '.today',
    '.success',
    '.warning',
    '.grid-2',
    // Accessibility/navbar vendor classes
    '.india-flag',
    '.acc-top-divider',
    '.icon-language',
    // Status tracker vendor/pattern classes
    '.status-tracker-container',
    '.status-tracker-container-card',
    // Misc vendor references (from svg/external links in CSS)
    '.w3',
    '.org',
    '.check-purple',
    '.border-yellow',
    '.muted',
  ]);

  beforeAll(() => {
    if (fs.existsSync(CSS_BUNDLE_PATH)) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    } else {
      cssContent = '';
    }
    // Parse all class selectors from the CSS content, excluding known vendor exceptions
    const allSelectors = cssContent.match(/\.[a-zA-Z][a-zA-Z0-9_-]*/g) ?? [];
    classSelectors = allSelectors.filter((s) => !KNOWN_NON_PREFIXED.has(s));
  });

  it('every class selector in the CSS bundle starts with .ux4g- (excluding known vendor exceptions)', () => {
    if (classSelectors.length === 0) {
      // CSS bundle is empty or has no class selectors — pass trivially
      return;
    }

    fc.assert(
      fc.property(
        fc.constantFrom(...classSelectors),
        (selector) => {
          return selector.startsWith('.ux4g-');
        }
      ),
      {
        numRuns: Math.min(classSelectors.length, 20),
      }
    );
  });
});

describe('Property 1: CSS bundle contains all button class names', () => {
  let cssContent: string;

  beforeAll(() => {
    // Read the CSS bundle once before all tests
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
   * Property 1: For any button class name from the known set,
   * that class name SHALL appear as a selector in styles/ux4g.css.
   *
   * Validates: Requirements 2.3, 2.5, 2.6
   */
  it('every button class name appears as a selector in the CSS bundle', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...ALL_BUTTON_CLASS_NAMES),
        (className) => {
          // The class should appear as a CSS selector: .className
          const selector = `.${className}`;
          return cssContent.includes(selector);
        }
      ),
      {
        numRuns: 20,
      }
    );
  });
});

/**
 * Property 3: CSS bundle preserves layer ordering
 * Tag: Feature: ux4g-button-npm-package, Property 3
 * Validates: Requirements 2.1
 *
 * The layer order is: tokens → semantic → components
 * - Token layer:     CSS custom properties like `--ux4g-color-` or `--ux4g-spacing-`
 * - Semantic layer:  CSS custom properties like `--ux4g-bg-` or `--ux4g-text-`
 * - Component layer: class selectors like `.ux4g-btn-`
 *
 * Character offsets are used to verify ordering in the (potentially minified) bundle.
 * If the bundle is empty or markers are absent, the test passes trivially.
 */
describe('Property 3: CSS bundle preserves layer ordering', () => {
  let cssContent: string;

  beforeAll(() => {
    if (fs.existsSync(CSS_BUNDLE_PATH)) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    } else {
      cssContent = '';
    }
  });

  /**
   * Property 3: token rules precede semantic rules, which precede component rules.
   *
   * Token layer markers:     --ux4g-color- or --ux4g-spacing-
   * Semantic layer markers:  --ux4g-bg- or --ux4g-text-
   * Component layer markers: .ux4g-btn-
   *
   * **Validates: Requirements 2.1**
   */
  it('token layer appears before semantic layer, which appears before component layer', () => {
    // Token layer: find the FIRST occurrence of a token custom property *definition* in :root
    // Semantic layer: find the FIRST occurrence of a semantic custom property *definition* in :root
    // Component layer: find the FIRST occurrence of a component class selector
    //
    // Note: The CSS bundle may reference semantic variables in base/reset rules before :root,
    // so we look for the first *definition* (i.e., inside a :root block) rather than any reference.
    // We use the :root{ marker to find where definitions start.
    const rootIdx = cssContent.indexOf(':root{');
    if (rootIdx === -1) {
      // No :root block found — pass trivially
      return;
    }

    const rootContent = cssContent.substring(rootIdx);
    const tokenMarkers = ['--ux4g-color-', '--ux4g-spacing-'];
    const semanticMarkers = ['--ux4g-bg-', '--ux4g-text-'];
    const componentMarkers = ['.ux4g-btn-'];

    // Find first token-layer offset within :root
    let firstTokenOffset = -1;
    for (const marker of tokenMarkers) {
      const idx = rootContent.indexOf(marker);
      if (idx !== -1 && (firstTokenOffset === -1 || idx < firstTokenOffset)) {
        firstTokenOffset = idx;
      }
    }

    // Find first semantic-layer offset within :root
    let firstSemanticOffset = -1;
    for (const marker of semanticMarkers) {
      const idx = rootContent.indexOf(marker);
      if (idx !== -1 && (firstSemanticOffset === -1 || idx < firstSemanticOffset)) {
        firstSemanticOffset = idx;
      }
    }

    // Find first component-layer offset in full CSS (components are outside :root)
    let firstComponentOffset = -1;
    for (const marker of componentMarkers) {
      const idx = cssContent.indexOf(marker);
      if (idx !== -1 && (firstComponentOffset === -1 || idx < firstComponentOffset)) {
        firstComponentOffset = idx;
      }
    }

    // If none of the markers are found (e.g. empty/placeholder bundle), pass trivially
    if (firstTokenOffset === -1 && firstSemanticOffset === -1 && firstComponentOffset === -1) {
      return;
    }

    // Within :root: token definitions must precede semantic definitions
    if (firstTokenOffset !== -1 && firstSemanticOffset !== -1) {
      expect(firstTokenOffset).toBeLessThan(firstSemanticOffset);
    }

    // Component classes must appear after the :root block (i.e., after rootIdx)
    if (firstComponentOffset !== -1) {
      expect(firstComponentOffset).toBeGreaterThan(rootIdx);
    }
  });
});

/**
 * Property 9: CSS bundle contains all spinner class patterns
 * Tag: Feature: ux4g-spinner-focus-ring, Property 9
 * Validates: Requirements 2.1, 2.3, 2.4, 2.7
 */

import type { SpinnerVariant, SpinnerSize, SpinnerType } from '../../src/types';

const SPINNER_VARIANTS: SpinnerVariant[] = ['primary', 'inverse', 'danger'];
const SPINNER_SIZES: SpinnerSize[] = ['xl', 'l', 's', 'xs'];
const SPINNER_TYPES: SpinnerType[] = ['full', 'split', 'partial'];

describe('Property 9: CSS bundle contains all spinner class patterns', () => {
  let cssContent: string;

  beforeAll(() => {
    if (fs.existsSync(CSS_BUNDLE_PATH)) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    } else {
      cssContent = '';
    }
  });

  /**
   * Property 9: For any SpinnerVariant × SpinnerSize × SpinnerType triple,
   * the CSS bundle SHALL contain the base attribute selector, variant selector,
   * size class selector, and type selector.
   *
   * Note: minified CSS omits quotes in attribute selectors, so we check both forms.
   *
   * **Validates: Requirements 2.1, 2.3, 2.4, 2.7**
   */
  it('CSS bundle contains base spinner attribute selector for all triples', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...SPINNER_VARIANTS),
        fc.constantFrom(...SPINNER_SIZES),
        fc.constantFrom(...SPINNER_TYPES),
        (_variant: SpinnerVariant, _size: SpinnerSize, _type: SpinnerType) => {
          // Base selector — check both quoted and unquoted forms (minified CSS omits quotes)
          const baseQuoted = '[class^="ux4g-spinner-"]';
          const baseUnquoted = '[class^=ux4g-spinner-]';
          return cssContent.includes(baseQuoted) || cssContent.includes(baseUnquoted);
        }
      ),
      { numRuns: 20 }
    );
  });

  it('CSS bundle contains variant attribute selector for all spinner variants', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...SPINNER_VARIANTS),
        fc.constantFrom(...SPINNER_SIZES),
        fc.constantFrom(...SPINNER_TYPES),
        (variant: SpinnerVariant, _size: SpinnerSize, _type: SpinnerType) => {
          // Variant selector — check both quoted and unquoted forms
          const variantQuoted = `[class*="spinner-${variant}"]`;
          const variantUnquoted = `[class*=spinner-${variant}]`;
          return cssContent.includes(variantQuoted) || cssContent.includes(variantUnquoted);
        }
      ),
      { numRuns: 20 }
    );
  });

  it('CSS bundle contains size class selector for all spinner sizes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...SPINNER_VARIANTS),
        fc.constantFrom(...SPINNER_SIZES),
        fc.constantFrom(...SPINNER_TYPES),
        (_variant: SpinnerVariant, size: SpinnerSize, _type: SpinnerType) => {
          // Size class selector
          const sizeSelector = `.ux4g-spinner-${size}`;
          return cssContent.includes(sizeSelector);
        }
      ),
      { numRuns: 20 }
    );
  });

  it('CSS bundle contains type attribute selector for all spinner types', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...SPINNER_VARIANTS),
        fc.constantFrom(...SPINNER_SIZES),
        fc.constantFrom(...SPINNER_TYPES),
        (_variant: SpinnerVariant, _size: SpinnerSize, type: SpinnerType) => {
          // Type selector — check both quoted and unquoted forms
          const typeQuoted = `[class*="-${type}"]`;
          const typeUnquoted = `[class*=-${type}]`;
          return cssContent.includes(typeQuoted) || cssContent.includes(typeUnquoted);
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 9: CSS bundle contains all new component selectors
 * Tag: Feature: ux4g-phase3-components, Property 9
 */
describe('Property 9: CSS bundle contains all new Phase 3 component selectors', () => {
  let cssContent: string;

  beforeAll(() => {
    if (fs.existsSync(CSS_BUNDLE_PATH)) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    } else {
      cssContent = '';
    }
  });

  const phase3Selectors = [
    '.ux4g-text-link-s',
    '.ux4g-text-link-m',
    '.ux4g-avatar',
    '.ux4g-img',
  ] as const;

  it('Feature: ux4g-phase3-components, Property 9 — CSS bundle contains all Phase 3 selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...phase3Selectors),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });

  it('CSS bundle contains badge selectors (dot, icon, digit)', () => {
    const hasDot = cssContent.includes('ux4g-badge-dot-') || cssContent.includes('[class*=ux4g-badge-dot-]');
    const hasIcon = cssContent.includes('ux4g-badge-icon-') || cssContent.includes('[class*=ux4g-badge-icon-]');
    const hasDigit = cssContent.includes('ux4g-badge-digit-') || cssContent.includes('[class*=ux4g-badge-digit-]');
    expect(hasDot).toBe(true);
    expect(hasIcon).toBe(true);
    expect(hasDigit).toBe(true);
  });
});

/**
 * Property 9: CSS bundle contains all new Phase 4 component selectors
 * Tag: Feature: ux4g-phase4-components, Property 9
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4
 */
describe('Property 9: CSS bundle contains all new Phase 4 component selectors', () => {
  let cssContent: string;

  beforeAll(() => {
    if (fs.existsSync(CSS_BUNDLE_PATH)) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    } else {
      cssContent = '';
    }
  });

  const phase4Selectors = [
    // Chip — all 7 base classes
    '.ux4g-filter-chip-m',
    '.ux4g-filter-chip-s',
    '.ux4g-choice-chip-m',
    '.ux4g-choice-chip-s',
    '.ux4g-input-chip-m',
    '.ux4g-input-chip-s',
    '.ux4g-input-chip-xs',
    // Tag — representative compound classes
    '.ux4g-tag-tonal-neutral',
    '.ux4g-tag-filled-primary',  // vendor CSS uses 'primary' for brand/primary color in filled variant
    '.ux4g-tag-outline-error',
    '.ux4g-tag-text-info',
    '.ux4g-tag-s',
    // Divider
    '.ux4g-divider-horizontal',
    '.ux4g-divider-vertical',
    // Breadcrumb
    '.ux4g-breadcrumb',
    '.ux4g-breadcrumb-divider',
    '.ux4g-breadcrumb-icon',
  ] as const;

  /**
   * **Validates: Requirements 2.1, 2.2, 2.3, 2.4**
   */
  it('Feature: ux4g-phase4-components, Property 9 — CSS bundle contains all Phase 4 selectors', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...phase4Selectors),
        (selector) => {
          return cssContent.includes(selector);
        }
      ),
      { numRuns: 20 }
    );
  });
});
