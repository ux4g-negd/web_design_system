/**
 * Property-based tests for UX4G Package Restructure
 * Properties 1-2
 * Tag: Feature: ux4g-package-restructure
 *
 * Validates: Requirements 7.1, 7.2, 7.3
 */
import * as fc from 'fast-check';
import {
  buildButtonClasses,
  VARIANT_CLASS_MAP,
  SIZE_CLASS_MAP,
  ButtonVariant,
  ButtonSize,
  ButtonShape,
} from '../../src/types';

const allButtonVariants: ButtonVariant[] = [
  'primary',
  'outline-primary',
  'text-primary',
  'tonal-primary',
  'danger',
  'outline-danger',
  'text-danger',
  'tonal-danger',
];

const allButtonSizes: ButtonSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];

const allButtonShapes: ButtonShape[] = ['rectangle', 'pill'];

/**
 * Property 1: Class_Builder output is preserved after restructure
 *
 * For any valid input combination to buildButtonClasses(), the output from
 * ux4g-web-components/types SHALL be identical to the expected pre-restructure output.
 * The returned class string must be non-empty and contain the expected variant/size
 * class substrings.
 *
 * Tag: Feature: ux4g-package-restructure, Property 1
 * Validates: Requirements 7.1, 7.2
 */
describe('Property 1: Class_Builder output is preserved after restructure', () => {
  it('Feature: ux4g-package-restructure, Property 1 — buildButtonClasses output is non-empty and contains expected variant and size substrings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allButtonVariants),
        fc.constantFrom(...allButtonSizes),
        fc.boolean(),
        fc.boolean(),
        fc.option(fc.constantFrom(...allButtonShapes), { nil: undefined }),
        fc.option(fc.string(), { nil: undefined }),
        (
          variant: ButtonVariant,
          size: ButtonSize,
          disabled: boolean,
          loading: boolean,
          shape: ButtonShape | undefined,
          extra: string | undefined
        ) => {
          const result = buildButtonClasses(variant, size, disabled, loading, shape, extra);

          // Output must be non-empty
          if (!result || result.trim().length === 0) return false;

          // Must contain the expected variant class
          const expectedVariantClass = VARIANT_CLASS_MAP[variant];
          if (!result.includes(expectedVariantClass)) return false;

          // Must contain the expected size class
          const expectedSizeClass = SIZE_CLASS_MAP[size];
          if (!expectedSizeClass) return false;
          if (!result.includes(expectedSizeClass)) return false;

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 2: SIZE_CLASS_MAP maps every size to a non-null, non-empty class string
 *
 * For any size value in the Button SIZE_CLASS_MAP (xl, lg, md, sm, xs), the mapped
 * CSS class string SHALL be non-null and non-empty.
 *
 * Tag: Feature: ux4g-package-restructure, Property 2
 * Validates: Requirements 7.3
 */
describe('Property 2: SIZE_CLASS_MAP maps every size to a non-null, non-empty class string', () => {
  it('Feature: ux4g-package-restructure, Property 2 — every size maps to a non-null, non-empty string', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('xl', 'lg', 'md', 'sm', 'xs'),
        (size: string) => {
          const mapped = SIZE_CLASS_MAP[size as ButtonSize];
          // Must be non-null
          if (mapped === null || mapped === undefined) return false;
          // Must be non-empty
          if (mapped.trim().length === 0) return false;
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
