/**
 * Integration tests for CSS bundle
 * Validates: Requirements 2.7, 2.9
 *
 * These tests verify that the built styles/ux4g.css contains the expected
 * selectors for dark theme support and button disabled states.
 *
 * NOTE: The CSS bundle is currently built from placeholder files, so these
 * tests will fail until real CSS is in place — that is expected.
 */

import * as fs from 'fs';
import * as path from 'path';

const CSS_BUNDLE_PATH = path.resolve(__dirname, '../../styles/ux4g.css');

describe('CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  /**
   * Validates: Requirements 2.7, 2.9
   */
  it('styles/ux4g.css file exists after build', () => {
    expect(fileExists).toBe(true);
  });

  /**
   * Validates: Requirements 2.7
   * Dark theme support via [data-theme="dark"] attribute selector
   * Note: minified CSS may omit quotes: [data-theme=dark]
   */
  it('[data-theme="dark"] selector is present in the CSS bundle', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    // Minified CSS may use unquoted attribute values: [data-theme=dark]
    const hasQuoted = cssContent.includes('[data-theme="dark"]');
    const hasUnquoted = cssContent.includes('[data-theme=dark]');
    expect(hasQuoted || hasUnquoted).toBe(true);
  });

  /**
   * Validates: Requirements 2.9
   * Disabled state via native :disabled pseudo-class
   */
  it(':disabled selector is present in button rules', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    expect(cssContent).toContain(':disabled');
  });

  /**
   * Validates: Requirements 2.9
   * Disabled state via [aria-disabled="true"] for accessibility
   * Note: minified CSS may omit quotes: [aria-disabled=true]
   */
  it('[aria-disabled="true"] selector is present in button rules', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    // Minified CSS may use unquoted attribute values: [aria-disabled=true]
    const hasQuoted = cssContent.includes('[aria-disabled="true"]');
    const hasUnquoted = cssContent.includes('[aria-disabled=true]');
    expect(hasQuoted || hasUnquoted).toBe(true);
  });

  /**
   * Validates: Requirements 2.2
   * Spinner base selector [class^="ux4g-spinner-"] is present in the CSS bundle
   * Note: minified CSS omits quotes: [class^=ux4g-spinner-]
   */
  it('[class^="ux4g-spinner-"] base selector is present in the CSS bundle', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    const hasQuoted = cssContent.includes('[class^="ux4g-spinner-"]');
    const hasUnquoted = cssContent.includes('[class^=ux4g-spinner-]');
    expect(hasQuoted || hasUnquoted).toBe(true);
  });

  /**
   * Validates: Requirements 2.5
   * Spinner rotation keyframe animation is present in the CSS bundle
   */
  it('@keyframes ux4g-spinner-rotate is present in the CSS bundle', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    expect(cssContent).toContain('@keyframes ux4g-spinner-rotate');
  });

  /**
   * Validates: Requirements 2.5
   * prefers-reduced-motion media query disables spinner animation
   */
  it('prefers-reduced-motion media query with animation: none is present in the CSS bundle', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    expect(cssContent).toContain('prefers-reduced-motion');
    expect(cssContent).toContain('animation:none');
  });

  /**
   * Validates: Requirements 2.6
   * Spinner semantic color tokens are present in the CSS bundle
   */
  it('spinner semantic color tokens are present in the CSS bundle', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    expect(cssContent).toContain('--ux4g-spinner-primary-color-1');
    expect(cssContent).toContain('--ux4g-spinner-light-color-1');
    expect(cssContent).toContain('--ux4g-spinner-danger-color-1');
  });

  /**
   * Validates: Requirements 6.1
   * Focus ring outline color token is present in the CSS bundle
   */
  it('--ux4g-ring-width-1 token is present in the CSS bundle', () => {
    if (!fileExists) {
      throw new Error('styles/ux4g.css does not exist — run npm run build:css first');
    }

    if (!cssContent || cssContent.trim().length === 0) {
      throw new Error('styles/ux4g.css is empty — the CSS bundle has not been built with real CSS yet');
    }

    expect(cssContent).toContain('--ux4g-ring-width-1');
  });
});

describe('Phase 3 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  it('styles/ux4g.css contains .ux4g-text-link-s selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-text-link-s');
  });

  it('styles/ux4g.css contains .ux4g-text-link-neutral-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-text-link-neutral');
  });

  it('styles/ux4g.css contains ux4g-badge-dot- attribute selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    const hasQuoted = cssContent.includes('[class*="ux4g-badge-dot-"]');
    const hasUnquoted = cssContent.includes('[class*=ux4g-badge-dot-]');
    const hasClass = cssContent.includes('.ux4g-badge-dot-');
    expect(hasQuoted || hasUnquoted || hasClass).toBe(true);
  });

  it('styles/ux4g.css contains ux4g-badge-icon- selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    const hasQuoted = cssContent.includes('[class*="ux4g-badge-icon-"]');
    const hasUnquoted = cssContent.includes('[class*=ux4g-badge-icon-]');
    const hasClass = cssContent.includes('.ux4g-badge-icon-');
    expect(hasQuoted || hasUnquoted || hasClass).toBe(true);
  });

  it('styles/ux4g.css contains .ux4g-avatar selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-avatar');
  });

  it('styles/ux4g.css contains .ux4g-avatar-status selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-avatar-status');
  });

  it('styles/ux4g.css contains .ux4g-img selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-img');
  });

  it('styles/ux4g.css contains .ux4g-img-rounded selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-img-rounded');
  });

  it('styles/ux4g.css contains ux4g-img-overlay selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('ux4g-img-overlay');
  });

  it('styles/ux4g.css contains ux4g-img-overlay-bottom selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('ux4g-img-overlay-bottom');
  });
});

describe('Phase 4 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  it('styles/ux4g.css contains .ux4g-filter-chip-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-filter-chip-m');
  });

  it('styles/ux4g.css contains .ux4g-filter-chip-s selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-filter-chip-s');
  });

  it('styles/ux4g.css contains .ux4g-choice-chip-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-choice-chip-m');
  });

  it('styles/ux4g.css contains .ux4g-choice-chip-s selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-choice-chip-s');
  });

  it('styles/ux4g.css contains .ux4g-input-chip-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-chip-m');
  });

  it('styles/ux4g.css contains .ux4g-input-chip-s selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-chip-s');
  });

  it('styles/ux4g.css contains .ux4g-input-chip-xs selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-chip-xs');
  });

  it('styles/ux4g.css contains .ux4g-tag-tonal-neutral selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tag-tonal-neutral');
  });

  it('styles/ux4g.css contains .ux4g-tag-filled-primary selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    // Note: vendor CSS uses 'primary' for the brand/primary color in filled variant
    expect(cssContent).toContain('.ux4g-tag-filled-primary');
  });

  it('styles/ux4g.css contains .ux4g-tag-outline-error selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tag-outline-error');
  });

  it('styles/ux4g.css contains .ux4g-tag-text-info selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tag-text-info');
  });

  it('styles/ux4g.css contains .ux4g-tag-s selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tag-s');
  });

  it('styles/ux4g.css contains .ux4g-divider-horizontal selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-divider-horizontal');
  });

  it('styles/ux4g.css contains .ux4g-divider-vertical selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-divider-vertical');
  });

  it('styles/ux4g.css contains .ux4g-breadcrumb selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-breadcrumb');
  });

  it('styles/ux4g.css contains .ux4g-breadcrumb-divider selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-breadcrumb-divider');
  });

  it('styles/ux4g.css contains .ux4g-breadcrumb-icon selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-breadcrumb-icon');
  });
});

describe('Phase 5 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  // Checkbox selectors
  it('styles/ux4g.css contains .ux4g-checkbox selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-checkbox');
  });

  it('styles/ux4g.css contains .ux4g-checkbox-sm selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-checkbox-s');
  });

  it('styles/ux4g.css contains .ux4g-checkbox-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-checkbox-m');
  });

  it('styles/ux4g.css contains .ux4g-checkbox-lg selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-checkbox-l');
  });

  it('styles/ux4g.css contains .ux4g-checkbox-error selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-checkbox-error');
  });

  // Radio selectors
  it('styles/ux4g.css contains .ux4g-radio selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-radio');
  });

  it('styles/ux4g.css contains .ux4g-radio-sm selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-radio-s');
  });

  it('styles/ux4g.css contains .ux4g-radio-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-radio-m');
  });

  it('styles/ux4g.css contains .ux4g-radio-lg selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-radio-l');
  });

  it('styles/ux4g.css contains .ux4g-radio-error selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-radio-error');
  });

  // Switch selectors
  it('styles/ux4g.css contains .ux4g-switch selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-switch');
  });

  it('styles/ux4g.css contains .ux4g-switch-sm selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-switch-s');
  });

  it('styles/ux4g.css contains .ux4g-switch-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-switch-m');
  });

  it('styles/ux4g.css contains .ux4g-switch-lg selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-switch-l');
  });

  // Card selectors
  it('styles/ux4g.css contains .ux4g-card selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-card');
  });

  it('styles/ux4g.css contains .ux4g-card-solid selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-card-solid');
  });

  it('styles/ux4g.css contains .ux4g-card-outline selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-card-outline');
  });

  it('styles/ux4g.css contains .ux4g-card-vertical selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-card-vertical');
  });

  it('styles/ux4g.css contains .ux4g-card-horizontal selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-card-horizontal');
  });

  // Input selectors
  it('styles/ux4g.css contains .ux4g-input-container selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-container');
  });

  it('styles/ux4g.css contains .ux4g-input-sm selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-s');
  });

  it('styles/ux4g.css contains .ux4g-input-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-m');
  });

  it('styles/ux4g.css contains .ux4g-input-lg selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-l');
  });

  it('styles/ux4g.css contains .ux4g-input-xl selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-xl');
  });

  it('styles/ux4g.css contains .ux4g-input-default selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-default');
  });

  it('styles/ux4g.css contains .ux4g-input-error selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-error');
  });

  it('styles/ux4g.css contains .ux4g-input-success selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-success');
  });

  it('styles/ux4g.css contains .ux4g-input-warning selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-input-warning');
  });
});

describe('Phase 6 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  // List selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-list selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-list');
  });

  it('styles/ux4g.css contains .ux4g-list-default selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-list-default');
  });

  it('styles/ux4g.css contains .ux4g-list-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-list-m');
  });

  // Dropdown selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-dropdown selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-dropdown');
  });

  it('styles/ux4g.css contains .ux4g-dropdown-button selector (selection type is implicit via :not negation)', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-dropdown-button');
  });

  it('styles/ux4g.css contains .ux4g-dropdown-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-dropdown-m');
  });

  // Combobox selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-combobox selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-combobox');
  });

  it('styles/ux4g.css contains .ux4g-combobox-single selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-combobox-single');
  });

  it('styles/ux4g.css contains .ux4g-combobox-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-combobox-m');
  });

  // Modal selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-modal-backdrop selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-modal-backdrop');
  });

  it('styles/ux4g.css contains .ux4g-modal-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-modal-m');
  });

  it('styles/ux4g.css contains .ux4g-modal-backdrop-50 selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-modal-backdrop-50');
  });

  // Alert selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-alert selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-alert');
  });

  it('styles/ux4g.css contains .ux4g-alert-info selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-alert-info');
  });

  it('styles/ux4g.css contains .ux4g-context-alert selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-context-alert');
  });

  it('styles/ux4g.css contains .ux4g-alert-container selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-alert-container');
  });

  // Search selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-search-container selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-search-container');
  });

  it('styles/ux4g.css contains .ux4g-search-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-search-m');
  });
});

describe('Phase 7 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  // Pagination selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-pagination selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-pagination');
  });

  it('styles/ux4g.css contains .ux4g-pagination-dotted selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-pagination-dotted');
  });

  it('styles/ux4g.css contains .ux4g-pagination-solid selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-pagination-solid');
  });

  // Table selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-table selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-table');
  });

  it('styles/ux4g.css contains .ux4g-table-m selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-table-m');
  });

  it('styles/ux4g.css contains .ux4g-table-column-dividers selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-table-column-dividers');
  });

  // Popover selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-popover selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-popover');
  });

  it('styles/ux4g.css contains .ux4g-popover-bottom selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-popover-bottom');
  });

  it('styles/ux4g.css contains .ux4g-popover-top-start selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-popover-top-start');
  });

  // Tooltip selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-tooltip-wrapper selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tooltip-wrapper');
  });

  it('styles/ux4g.css contains .ux4g-tooltip selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tooltip');
  });

  it('styles/ux4g.css contains .ux4g-tooltip-top-center selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tooltip-top-center');
  });

  // Tab selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-tab selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tab');
  });

  it('styles/ux4g.css contains .ux4g-tab-underline selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tab-underline');
  });

  it('styles/ux4g.css contains .ux4g-tab-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-tab-m');
  });

  // Icon Button selectors
  /**
   * Validates: Requirements 2.9
   */
  it('styles/ux4g.css contains .ux4g-icon-btn selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-icon-btn');
  });

  it('styles/ux4g.css contains .ux4g-icon-btn-primary selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-icon-btn-primary');
  });

  it('styles/ux4g.css contains .ux4g-icon-btn-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-icon-btn-m');
  });
});

describe('Phase 8 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  // Accessibility Bar selectors
  /**
   * Validates: Requirements 2.8
   */
  it('styles/ux4g.css contains .ux4g-topbar selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-topbar');
  });

  it('styles/ux4g.css contains .ux4g-topbar__wrap selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-topbar__wrap');
  });

  it('styles/ux4g.css contains .ux4g-topbar__skip selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-topbar__skip');
  });

  // Accordion selectors
  /**
   * Validates: Requirements 2.8
   */
  it('styles/ux4g.css contains .ux4g-accordion selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-accordion');
  });

  it('styles/ux4g.css contains .ux4g-accordion-arrow-left selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-accordion-arrow-left');
  });

  it('styles/ux4g.css contains .ux4g-accordion-bordered selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-accordion-bordered');
  });

  // Stepper selectors
  /**
   * Validates: Requirements 2.8
   */
  it('styles/ux4g.css contains .ux4g-stepper selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-stepper');
  });

  it('styles/ux4g.css contains .ux4g-stepper-vertical selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-stepper-vertical');
  });

  it('styles/ux4g.css contains .ux4g-stepper-horizontal selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-stepper-horizontal');
  });

  it('styles/ux4g.css contains .ux4g-stepper-center selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-stepper-center');
  });

  it('styles/ux4g.css contains .ux4g-stepper-bottom-line selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-stepper-bottom-line');
  });

  // Slider selectors
  /**
   * Validates: Requirements 2.8
   */
  it('styles/ux4g.css contains .ux4g-slider-field selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-slider-field');
  });

  it('styles/ux4g.css contains .ux4g-slider-md selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-slider-m');
  });

  // Drawer selectors
  /**
   * Validates: Requirements 2.8
   */
  it('styles/ux4g.css contains .ux4g-drawer selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-drawer');
  });

  it('styles/ux4g.css contains .ux4g-drawer-right selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-drawer-right');
  });

  it('styles/ux4g.css contains .ux4g-drawer-open selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-drawer-open');
  });
});

describe('Phase 9 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  // Date-Time Picker selectors
  /**
   * Validates: Requirements 16.5
   */
  it('styles/ux4g.css contains .ux4g-date-picker-container selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-date-picker-container');
  });

  it('styles/ux4g.css contains .ux4g-time-picker-container selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-time-picker-container');
  });

  // Status Pipeline selectors
  /**
   * Validates: Requirements 16.6
   */
  it('styles/ux4g.css contains .ux4g-status-pipeline-stepper selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-status-pipeline-stepper');
  });

  it('styles/ux4g.css contains .ux4g-status-pipeline-vertical selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-status-pipeline-vertical');
  });

  it('styles/ux4g.css contains .ux4g-status-pipeline-horizontal selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-status-pipeline-horizontal');
  });

  it('styles/ux4g.css contains .ux4g-status-pipeline-bottom-line selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-status-pipeline-bottom-line');
  });

  // Journey Timeline selectors
  /**
   * Validates: Requirements 16.7
   */
  it('styles/ux4g.css contains .ux4g-journey-timeline selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-journey-timeline');
  });

  it('styles/ux4g.css contains .ux4g-journey-timeline--vertical selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-journey-timeline--vertical');
  });

  it('styles/ux4g.css contains .ux4g-journey-timeline--horizontal selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-journey-timeline--horizontal');
  });

  // Form Field Group selectors
  /**
   * Validates: Requirements 16.8
   */
  it('styles/ux4g.css contains .ux4g-form-group selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-form-group');
  });

  // OTP Input selectors
  /**
   * Validates: Requirements 16.9
   */
  it('styles/ux4g.css contains .ux4g-otp selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-otp');
  });

  it('styles/ux4g.css contains .ux4g-otp-success selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-otp-success');
  });

  it('styles/ux4g.css contains .ux4g-otp-error selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-otp-error');
  });

  it('styles/ux4g.css contains .ux4g-otp-locked selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-otp-locked');
  });

  // File Upload selectors
  /**
   * Validates: Requirements 16.10
   */
  it('styles/ux4g.css contains .ux4g-upload selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-upload');
  });

  it('styles/ux4g.css contains .ux4g-upload-state-error selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-upload-state-error');
  });

  // Progress Indicator selectors
  /**
   * Validates: Requirements 16.11
   */
  it('styles/ux4g.css contains .ux4g-progress-bar selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-progress-bar');
  });

  it('styles/ux4g.css contains .ux4g-progress-circle selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-progress-circle');
  });

  // Feedback selectors
  /**
   * Validates: Requirements 16.12
   */
  it('styles/ux4g.css contains .ux4g-feedback selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-feedback');
  });

  // Draft Status Banner selectors
  /**
   * Validates: Requirements 16.13
   */
  it('styles/ux4g.css contains .ux4g-draft-status-bar selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-draft-status-bar');
  });

  it('styles/ux4g.css contains .ux4g-auto-draft-status-bar selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-auto-draft-status-bar');
  });

  it('styles/ux4g.css contains .ux4g-success-draft-status-bar selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-success-draft-status-bar');
  });

  // SLA Progress Indicator selectors
  /**
   * Validates: Requirements 16.14
   */
  it('styles/ux4g.css contains .ux4g-sla-circle selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-sla-circle');
  });

  it('styles/ux4g.css contains .ux4g-sla-linear selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-sla-linear');
  });

  it('styles/ux4g.css contains .ux4g-sla-badge selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-sla-badge');
  });

  // Carousel selectors
  /**
   * Validates: Requirements 16.15
   */
  it('styles/ux4g.css contains .ux4g-carousel selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-carousel');
  });

  // Empty State selectors
  /**
   * Validates: Requirements 16.16
   */
  it('styles/ux4g.css contains .ux4g-empty-state selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-empty-state');
  });

  // Chip Group selectors
  /**
   * Validates: Requirements 16.17
   */
  it('styles/ux4g.css contains .ux4g-filter-chip-group selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-filter-chip-group');
  });

  it('styles/ux4g.css contains .ux4g-choice-chip-group selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-choice-chip-group');
  });

  // Navbar selectors
  /**
   * Validates: Requirements 16.18
   */
  it('styles/ux4g.css contains .ux4g-navbar selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-navbar');
  });
});

describe('Phase 10 CSS bundle integration tests', () => {
  let cssContent: string | null = null;
  let fileExists: boolean;

  beforeAll(() => {
    fileExists = fs.existsSync(CSS_BUNDLE_PATH);
    if (fileExists) {
      cssContent = fs.readFileSync(CSS_BUNDLE_PATH, 'utf8');
    }
  });

  // Slot Grid selectors
  /**
   * Validates: Requirements 6.1
   */
  it('styles/ux4g.css contains .ux4g-time-slot-weekly-container selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-time-slot-weekly-container');
  });

  /**
   * Validates: Requirements 6.2
   */
  it('styles/ux4g.css contains .ux4g-time-slot-compact-container selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-time-slot-compact-container');
  });

  // Footer selectors
  /**
   * Validates: Requirements 6.3
   */
  it('styles/ux4g.css contains .ux4g-footer-primary selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-footer-primary');
  });

  /**
   * Validates: Requirements 6.4
   */
  it('styles/ux4g.css contains .ux4g-footer-dark selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-footer-dark');
  });

  // Result List Row selectors
  /**
   * Validates: Requirements 6.5
   */
  it('styles/ux4g.css contains .ux4g-result-list selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-result-list');
  });

  /**
   * Validates: Requirements 6.6
   */
  it('styles/ux4g.css contains .ux4g-result-list-v1 selector', () => {
    if (!fileExists || !cssContent) throw new Error('styles/ux4g.css does not exist or is empty');
    expect(cssContent).toContain('.ux4g-result-list-v1');
  });
});
