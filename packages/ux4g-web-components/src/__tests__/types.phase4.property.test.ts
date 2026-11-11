/**
 * Property-based tests for Phase 4 build functions
 *
 * Property 1: Chip class contains chipType and size substrings
 * Property 2: Chip active class appended when active=true
 * Property 3: Chip xs size clamped to sm for filter/choice types
 * Property 4: Tag class contains variant and color substrings
 * Property 5: Tag small class appended when small=true
 * Property 6: Divider class matches orientation
 * Property 7: Breadcrumb class contains separator substring
 */
import * as fc from 'fast-check';
import {
  buildChipClasses,
  buildTagClasses,
  buildDividerClasses,
  buildBreadcrumbClasses,
  ChipType,
  ChipSize,
  TagVariant,
  TagColor,
  DividerOrientation,
  BreadcrumbSeparator,
} from '../../src/types';

const allChipTypes: ChipType[] = ['filter', 'choice', 'input'];
const allChipSizes: ChipSize[] = ['md', 'sm', 'xs'];
const allTagVariants: TagVariant[] = ['tonal', 'filled', 'outline', 'text'];
const allTagColors: TagColor[] = ['neutral', 'brand', 'success', 'warning', 'error', 'info'];

/**
 * Property 1: Chip class contains chipType and size substrings
 * Tag: Feature: ux4g-phase4-components, Property 1
 * Validates: Requirements 3.6, 4.3
 */
describe('Property 1: Chip class contains chipType and size substrings', () => {
  it('Feature: ux4g-phase4-components, Property 1', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allChipTypes),
        fc.constantFrom(...allChipSizes),
        (chipType: ChipType, size: ChipSize) => {
          const result = buildChipClasses(chipType, size);
          const normSize = (chipType !== 'input' && size === 'xs') ? 's' : (size === 'sm' ? 's' : (size === 'md' ? 'm' : size));
          return result.includes(chipType) && result.includes(`-${normSize}`);
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 2: Chip active class appended when active=true
 * Tag: Feature: ux4g-phase4-components, Property 2
 * Validates: Requirements 3.7, 5.5
 */
describe('Property 2: Chip active class appended when active=true', () => {
  it('Feature: ux4g-phase4-components, Property 2', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allChipTypes),
        fc.constantFrom(...allChipSizes),
        fc.boolean(),
        (chipType: ChipType, size: ChipSize, active: boolean) => {
          const result = buildChipClasses(chipType, size, active);
          if (active) {
            return result.includes('active');
          } else {
            return !result.includes('active');
          }
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 3: Chip xs size clamped to sm for filter/choice types
 * Tag: Feature: ux4g-phase4-components, Property 3
 * Validates: Requirements 4.3, 10.8
 */
describe('Property 3: Chip xs size clamped to sm for filter/choice types', () => {
  it('Feature: ux4g-phase4-components, Property 3', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('filter' as ChipType, 'choice' as ChipType),
        (chipType: ChipType) => {
          const result = buildChipClasses(chipType, 'xs');
          return result.includes('chip-s') && !result.includes('chip-xs');
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 4: Tag class contains variant and color substrings
 * Tag: Feature: ux4g-phase4-components, Property 4
 * Validates: Requirements 3.8, 4.6
 */
describe('Property 4: Tag class contains variant and color substrings', () => {
  it('Feature: ux4g-phase4-components, Property 4', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allTagVariants),
        fc.constantFrom(...allTagColors),
        (variant: TagVariant, color: TagColor) => {
          const result = buildTagClasses(variant, color);
          return result.includes(variant) && result.includes(color);
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 5: Tag small class appended when small=true
 * Tag: Feature: ux4g-phase4-components, Property 5
 * Validates: Requirements 3.9, 6.5
 */
describe('Property 5: Tag small class appended when small=true', () => {
  it('Feature: ux4g-phase4-components, Property 5', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allTagVariants),
        fc.constantFrom(...allTagColors),
        fc.boolean(),
        (variant: TagVariant, color: TagColor, small: boolean) => {
          const result = buildTagClasses(variant, color, small);
          if (small) {
            return result.includes('ux4g-tag-s');
          } else {
            return !result.includes('ux4g-tag-s');
          }
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 6: Divider class matches orientation
 * Tag: Feature: ux4g-phase4-components, Property 6
 * Validates: Requirements 3.10, 4.8
 */
describe('Property 6: Divider class matches orientation', () => {
  it('Feature: ux4g-phase4-components, Property 6', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('horizontal' as DividerOrientation, 'vertical' as DividerOrientation),
        (orientation: DividerOrientation) => {
          const result = buildDividerClasses(orientation);
          return result === `ux4g-divider-${orientation}`;
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 7: Breadcrumb class contains separator substring
 * Tag: Feature: ux4g-phase4-components, Property 7
 * Validates: Requirements 3.11, 4.10
 */
describe('Property 7: Breadcrumb class contains separator substring', () => {
  it('Feature: ux4g-phase4-components, Property 7', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('divider' as BreadcrumbSeparator, 'icon' as BreadcrumbSeparator),
        (separator: BreadcrumbSeparator) => {
          const result = buildBreadcrumbClasses(separator);
          return result.includes('ux4g-breadcrumb') && result.includes(`ux4g-breadcrumb-${separator}`);
        }
      ),
      { numRuns: 20 }
    );
  });
});
