// src/__tests__/types.phase10.property.test.ts
// Property-based tests for all Phase 10 build functions
// Feature: ux4g-phase10-components

import * as fc from 'fast-check';
import {
  SlotGridVariant,
  buildSlotGridClasses,
  FooterTheme,
  buildFooterClasses,
  ResultListRowVariation,
  buildResultListRowClasses,
} from '../../src/types';

// Helper: split result into tokens
const tokens = (s: string) => s.split(' ');
const hasDuplicates = (arr: string[]) => new Set(arr).size !== arr.length;

// ── Property 1: SlotGrid ──────────────────────────────────────────────────────
// **Validates: Requirements 1.2, 1.3, 1.7, 1.11, 6.7**
describe('Property 1: SlotGrid class is exactly the correct container class for each variant', () => {
  it('variant determines container class exactly, mutually exclusive, no duplicates, extra appended, idempotent', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<SlotGridVariant>('weekly', 'compact'),
        fc.oneof(
          fc.constant(undefined),
          fc.stringMatching(/^[a-z][a-z0-9-]*$/).filter(s => s.length > 0 && s.length <= 20)
        ),
        (variant, extra) => {
          const result = buildSlotGridClasses(variant, extra);
          const toks = tokens(result);

          // variant='weekly' → contains weekly container, NOT compact
          if (variant === 'weekly') {
            expect(toks).toContain('ux4g-time-slot-weekly-container');
            expect(toks).not.toContain('ux4g-time-slot-compact-container');
          }

          // variant='compact' → contains compact container, NOT weekly
          if (variant === 'compact') {
            expect(toks).toContain('ux4g-time-slot-compact-container');
            expect(toks).not.toContain('ux4g-time-slot-weekly-container');
          }

          // result never contains both simultaneously
          const hasWeekly = toks.includes('ux4g-time-slot-weekly-container');
          const hasCompact = toks.includes('ux4g-time-slot-compact-container');
          expect(hasWeekly && hasCompact).toBe(false);

          // when extra provided, result contains extra token
          if (extra !== undefined) {
            expect(toks).toContain(extra);
          }

          // token array has no duplicates
          expect(hasDuplicates(toks)).toBe(false);

          // idempotent: calling twice with same inputs returns same string
          const result2 = buildSlotGridClasses(variant, extra);
          expect(result2).toBe(result);
        }
      ),
      { numRuns: 10 }
    );
  });
});

// ── Property 2: Footer ────────────────────────────────────────────────────────
// **Validates: Requirements 2.2, 2.3, 2.4, 2.9, 2.13, 6.8**
describe('Property 2: Footer class is exactly the correct theme class for each theme value', () => {
  it('theme determines footer class exactly, empty for default, mutually exclusive, no duplicates, extra appended, idempotent', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<FooterTheme>('default', 'primary', 'dark'),
        fc.oneof(
          fc.constant(undefined),
          fc.stringMatching(/^[a-z][a-z0-9-]*$/).filter(s => s.length > 0 && s.length <= 20)
        ),
        (theme, extra) => {
          const result = buildFooterClasses(theme, extra);
          // filter out empty string tokens before checking duplicates
          const toks = result === '' ? [] : result.split(' ');
          const nonEmptyToks = toks.filter(t => t !== '');

          // theme='primary' → result contains 'ux4g-footer-primary'
          if (theme === 'primary') {
            expect(result).toContain('ux4g-footer-primary');
          }

          // theme='dark' → result contains 'ux4g-footer-dark'
          if (theme === 'dark') {
            expect(result).toContain('ux4g-footer-dark');
          }

          // theme='default' with no extra → result is exactly ''
          if (theme === 'default' && extra === undefined) {
            expect(result).toBe('');
          }

          // theme='default' with extra → result is exactly the extra string
          if (theme === 'default' && extra !== undefined) {
            expect(result).toBe(extra);
          }

          // result never contains both 'ux4g-footer-primary' and 'ux4g-footer-dark' simultaneously
          const hasPrimary = result.includes('ux4g-footer-primary');
          const hasDark = result.includes('ux4g-footer-dark');
          expect(hasPrimary && hasDark).toBe(false);

          // when extra provided, result contains extra token
          if (extra !== undefined) {
            expect(nonEmptyToks).toContain(extra);
          }

          // token array has no duplicates (filter out empty string tokens before checking)
          expect(hasDuplicates(nonEmptyToks)).toBe(false);

          // idempotent: calling twice with same inputs returns same string
          const result2 = buildFooterClasses(theme, extra);
          expect(result2).toBe(result);
        }
      ),
      { numRuns: 10 }
    );
  });
});

// ── Property 3: ResultListRow ─────────────────────────────────────────────────
// **Validates: Requirements 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.11, 3.15, 6.9**
describe('Property 3: ResultListRow class always contains base token and correctly toggles variation modifier', () => {
  it('base token always present, variation modifier toggles correctly, mutually exclusive, no duplicates, extra appended, idempotent', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ResultListRowVariation>('default', 'v1', 'v2', 'v3', 'v4', 'v5'),
        fc.oneof(
          fc.constant(undefined),
          fc.stringMatching(/^[a-z][a-z0-9-]*$/).filter(s => s.length > 0 && s.length <= 20)
        ),
        (variation, extra) => {
          const result = buildResultListRowClasses(variation, extra);
          const toks = tokens(result);

          // result always contains 'ux4g-result-list' (base token)
          expect(toks).toContain('ux4g-result-list');

          // when variation='v1'–'v5' result contains 'ux4g-result-list-v{N}'
          if (variation !== 'default') {
            expect(toks).toContain(`ux4g-result-list-${variation}`);
          }

          // when variation='default' result contains no variation modifier class (none of v1-v5)
          if (variation === 'default') {
            expect(toks).not.toContain('ux4g-result-list-v1');
            expect(toks).not.toContain('ux4g-result-list-v2');
            expect(toks).not.toContain('ux4g-result-list-v3');
            expect(toks).not.toContain('ux4g-result-list-v4');
            expect(toks).not.toContain('ux4g-result-list-v5');
          }

          // result never contains more than one variation modifier class simultaneously
          const variationModifiers = ['v1', 'v2', 'v3', 'v4', 'v5']
            .map(v => `ux4g-result-list-${v}`)
            .filter(cls => toks.includes(cls));
          expect(variationModifiers.length).toBeLessThanOrEqual(1);

          // when extra provided, result contains extra token
          if (extra !== undefined) {
            expect(toks).toContain(extra);
          }

          // token array has no duplicates
          expect(hasDuplicates(toks)).toBe(false);

          // idempotent: calling twice with same inputs returns same string
          const result2 = buildResultListRowClasses(variation, extra);
          expect(result2).toBe(result);
        }
      ),
      { numRuns: 10 }
    );
  });
});

// ── Property 4: Extra param across all Phase 10 build functions ───────────────
// **Validates: Requirements 1.4, 2.5, 3.8**
describe('Property 4: Extra param is always appended as a space-separated token and never duplicates existing tokens for all Phase 10 build functions', () => {
  // Non-empty extra string with no spaces
  const extraArb = fc.string({ minLength: 1 }).filter(s => !s.includes(' '));

  it('buildSlotGridClasses: extra token is present exactly once and no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<SlotGridVariant>('weekly', 'compact'),
        extraArb,
        (variant, extra) => {
          const result = buildSlotGridClasses(variant, extra);
          const toks = result.split(' ');

          // extra token is present as a space-separated token
          expect(toks).toContain(extra);

          // extra token appears exactly once
          const count = toks.filter(t => t === extra).length;
          expect(count).toBe(1);

          // token array has no duplicates
          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 10 }
    );
  });

  it('buildFooterClasses: extra token is present exactly once and no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<FooterTheme>('default', 'primary', 'dark'),
        extraArb,
        (theme, extra) => {
          const result = buildFooterClasses(theme, extra);
          // result is never empty when extra is provided
          const toks = result.split(' ').filter(t => t !== '');

          // extra token is present as a space-separated token
          expect(toks).toContain(extra);

          // extra token appears exactly once
          const count = toks.filter(t => t === extra).length;
          expect(count).toBe(1);

          // token array has no duplicates
          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 10 }
    );
  });

  it('buildResultListRowClasses: extra token is present exactly once and no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ResultListRowVariation>('default', 'v1', 'v2', 'v3', 'v4', 'v5'),
        extraArb,
        (variation, extra) => {
          const result = buildResultListRowClasses(variation, extra);
          const toks = result.split(' ');

          // extra token is present as a space-separated token
          expect(toks).toContain(extra);

          // extra token appears exactly once
          const count = toks.filter(t => t === extra).length;
          expect(count).toBe(1);

          // token array has no duplicates
          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 10 }
    );
  });
});
