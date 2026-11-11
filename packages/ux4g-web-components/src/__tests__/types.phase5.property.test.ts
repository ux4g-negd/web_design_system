/**
 * Property-based tests for Phase 5 build functions
 *
 * Property 1: Checkbox class contains size substring
 * Property 2: Checkbox error class appended when error=true
 * Property 3: Radio class contains size substring
 * Property 4: Radio error class appended when error=true
 * Property 5: Switch class contains size substring and never contains error class
 * Property 6: Card class contains variant and layout substrings
 * Property 7: Input container class contains size and state substrings
 */
import * as fc from 'fast-check';
import {
  buildCheckboxClasses,
  buildRadioClasses,
  buildSwitchClasses,
  buildCardClasses,
  buildInputContainerClasses,
  CheckboxSize,
  RadioSize,
  SwitchSize,
  CardVariant,
  CardLayout,
  InputSize,
  InputState,
} from '../../src/types';

const toShort = (s: string) => (s === 'sm' ? 's' : s === 'md' ? 'm' : s === 'lg' ? 'l' : s);

/**
 * Property 1: Checkbox class contains size substring
 * Tag: Feature: ux4g-phase5-components, Property 1
 * Validates: Requirements 3.7, 4.2
 */
describe('Property 1: Checkbox class contains size substring', () => {
  it('Feature: ux4g-phase5-components, Property 1', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm' as CheckboxSize, 'md' as CheckboxSize, 'lg' as CheckboxSize),
        (size: CheckboxSize) => {
          const result = buildCheckboxClasses(size);
          return result.includes('ux4g-checkbox') && result.includes(`ux4g-checkbox-${toShort(size)}`);
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 2: Checkbox error class appended when error=true
 * Tag: Feature: ux4g-phase5-components, Property 2
 * Validates: Requirements 3.8, 4.2
 */
describe('Property 2: Checkbox error class appended when error=true', () => {
  it('Feature: ux4g-phase5-components, Property 2', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm' as CheckboxSize, 'md' as CheckboxSize, 'lg' as CheckboxSize),
        fc.boolean(),
        (size: CheckboxSize, error: boolean) => {
          const result = buildCheckboxClasses(size, error);
          if (error) {
            return result.includes('ux4g-checkbox-error');
          } else {
            return !result.includes('ux4g-checkbox-error');
          }
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 3: Radio class contains size substring
 * Tag: Feature: ux4g-phase5-components, Property 3
 * Validates: Requirements 3.9, 4.4
 */
describe('Property 3: Radio class contains size substring', () => {
  it('Feature: ux4g-phase5-components, Property 3', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm' as RadioSize, 'md' as RadioSize, 'lg' as RadioSize),
        (size: RadioSize) => {
          const result = buildRadioClasses(size);
          return result.includes('ux4g-radio') && result.includes(`ux4g-radio-${toShort(size)}`);
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 4: Radio error class appended when error=true
 * Tag: Feature: ux4g-phase5-components, Property 4
 * Validates: Requirements 3.10, 4.4
 */
describe('Property 4: Radio error class appended when error=true', () => {
  it('Feature: ux4g-phase5-components, Property 4', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm' as RadioSize, 'md' as RadioSize, 'lg' as RadioSize),
        fc.boolean(),
        (size: RadioSize, error: boolean) => {
          const result = buildRadioClasses(size, error);
          if (error) {
            return result.includes('ux4g-radio-error');
          } else {
            return !result.includes('ux4g-radio-error');
          }
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 5: Switch class contains size substring and never contains error class
 * Tag: Feature: ux4g-phase5-components, Property 5
 * Validates: Requirements 3.11, 4.6
 */
describe('Property 5: Switch class contains size substring and never contains error class', () => {
  it('Feature: ux4g-phase5-components, Property 5', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm' as SwitchSize, 'md' as SwitchSize, 'lg' as SwitchSize),
        (size: SwitchSize) => {
          const result = buildSwitchClasses(size);
          return (
            result.includes('ux4g-switch') &&
            result.includes(`ux4g-switch-${toShort(size)}`) &&
            !result.includes('ux4g-switch-error')
          );
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 6: Card class contains variant and layout substrings
 * Tag: Feature: ux4g-phase5-components, Property 6
 * Validates: Requirements 3.12, 4.9
 */
describe('Property 6: Card class contains variant and layout substrings', () => {
  it('Feature: ux4g-phase5-components, Property 6', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('solid' as CardVariant, 'outline' as CardVariant, 'no-fill' as CardVariant),
        fc.constantFrom('vertical' as CardLayout, 'horizontal' as CardLayout),
        (variant: CardVariant, layout: CardLayout) => {
          const result = buildCardClasses(variant, layout);
          return (
            result.includes('ux4g-card') &&
            result.includes(`ux4g-card-${variant}`) &&
            result.includes(`ux4g-card-${layout}`)
          );
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 7: Input container class contains size and state substrings
 * Tag: Feature: ux4g-phase5-components, Property 7
 * Validates: Requirements 3.13, 4.12
 */
describe('Property 7: Input container class contains size and state substrings', () => {
  it('Feature: ux4g-phase5-components, Property 7', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm' as InputSize, 'md' as InputSize, 'lg' as InputSize, 'xl' as InputSize),
        fc.constantFrom('default' as InputState, 'error' as InputState, 'success' as InputState, 'warning' as InputState),
        (size: InputSize, state: InputState) => {
          const result = buildInputContainerClasses(size, state);
          return (
            result.includes('ux4g-input-container') &&
            result.includes(`ux4g-input-${toShort(size)}`) &&
            result.includes(`ux4g-input-${state}`)
          );
        }
      ),
      { numRuns: 20 }
    );
  });
});
