// src/__tests__/megamenu.classbuilder.property.test.ts
// Property-based tests for Mega Menu class builder functions
// Feature: ux4g-megamenu-component

import * as fc from 'fast-check';
import {
  buildMegaMenuClasses,
  buildMegaMenuWrapperClasses,
} from '../../src/types';

// Helper: split result into tokens
const tokens = (s: string) => s.split(' ');

// Arbitrary for extra class string: lowercase alphanumeric with hyphens, non-empty, no spaces
const extraArb = fc.stringMatching(/^[a-z][a-z0-9-]*$/).filter(s => s.length > 0 && s.length <= 30);

// ── Property 1: buildMegaMenuClasses produces correct class string for all input combinations ──
// **Validates: Requirements 1.2, 1.3, 1.4, 1.5, 1.6**
describe('Feature: ux4g-megamenu-component, Property 1: buildMegaMenuClasses produces correct class string for all input combinations', () => {
  it('always starts with ux4g-mega-menu, contains --dropdown iff dropdown=true, contains --dropdown-right iff both dropdown AND dropdownRight are true, ends with extra if non-empty', () => {
    fc.assert(
      fc.property(
        fc.boolean(),
        fc.boolean(),
        fc.oneof(fc.constant(undefined), extraArb),
        (dropdown, dropdownRight, extra) => {
          const result = buildMegaMenuClasses(dropdown, dropdownRight, extra);
          const toks = tokens(result);

          // Always starts with 'ux4g-mega-menu' as the first class
          expect(toks[0]).toBe('ux4g-mega-menu');

          // Contains 'ux4g-mega-menu--dropdown' if and only if dropdown is true
          if (dropdown) {
            expect(toks).toContain('ux4g-mega-menu--dropdown');
          } else {
            expect(toks).not.toContain('ux4g-mega-menu--dropdown');
          }

          // Contains 'ux4g-mega-menu--dropdown-right' if and only if both dropdown AND dropdownRight are true
          if (dropdown && dropdownRight) {
            expect(toks).toContain('ux4g-mega-menu--dropdown-right');
          } else {
            expect(toks).not.toContain('ux4g-mega-menu--dropdown-right');
          }

          // Ends with extra string if provided and non-empty
          if (extra !== undefined) {
            expect(toks[toks.length - 1]).toBe(extra);
          }

          // No duplicate tokens
          expect(new Set(toks).size).toBe(toks.length);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 2: buildMegaMenuWrapperClasses produces correct class string for all input combinations ──
// **Validates: Requirements 1.7, 1.8, 1.9**
describe('Feature: ux4g-megamenu-component, Property 2: buildMegaMenuWrapperClasses produces correct class string for all input combinations', () => {
  it('always starts with ux4g-mega-menu-wrapper, contains --active iff active=true, ends with extra if non-empty', () => {
    fc.assert(
      fc.property(
        fc.boolean(),
        fc.oneof(fc.constant(undefined), extraArb),
        (active, extra) => {
          const result = buildMegaMenuWrapperClasses(active, extra);
          const toks = tokens(result);

          // Always starts with 'ux4g-mega-menu-wrapper' as the first class
          expect(toks[0]).toBe('ux4g-mega-menu-wrapper');

          // Contains 'ux4g-mega-menu-wrapper--active' if and only if active is true
          if (active) {
            expect(toks).toContain('ux4g-mega-menu-wrapper--active');
          } else {
            expect(toks).not.toContain('ux4g-mega-menu-wrapper--active');
          }

          // Ends with extra string if provided and non-empty
          if (extra !== undefined) {
            expect(toks[toks.length - 1]).toBe(extra);
          }

          // No duplicate tokens
          expect(new Set(toks).size).toBe(toks.length);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 3: Class builder functions are pure (deterministic) ──────────────
// **Validates: Requirements 8.4**
describe('Feature: ux4g-megamenu-component, Property 3: Class builder functions are pure (deterministic)', () => {
  it('buildMegaMenuClasses returns identical output for identical inputs across multiple calls', () => {
    fc.assert(
      fc.property(
        fc.boolean(),
        fc.boolean(),
        fc.oneof(fc.constant(undefined), extraArb),
        (dropdown, dropdownRight, extra) => {
          const result1 = buildMegaMenuClasses(dropdown, dropdownRight, extra);
          const result2 = buildMegaMenuClasses(dropdown, dropdownRight, extra);
          const result3 = buildMegaMenuClasses(dropdown, dropdownRight, extra);

          expect(result1).toBe(result2);
          expect(result2).toBe(result3);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('buildMegaMenuWrapperClasses returns identical output for identical inputs across multiple calls', () => {
    fc.assert(
      fc.property(
        fc.boolean(),
        fc.oneof(fc.constant(undefined), extraArb),
        (active, extra) => {
          const result1 = buildMegaMenuWrapperClasses(active, extra);
          const result2 = buildMegaMenuWrapperClasses(active, extra);
          const result3 = buildMegaMenuWrapperClasses(active, extra);

          expect(result1).toBe(result2);
          expect(result2).toBe(result3);
        }
      ),
      { numRuns: 100 }
    );
  });
});
