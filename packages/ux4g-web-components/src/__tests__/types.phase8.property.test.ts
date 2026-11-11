/**
 * Property-based tests for Phase 8 build functions
 *
 * Property 1: AccessibilityBar class string always contains ux4g-topbar as the sole base token
 * Property 2: Accordion class string contains required tokens and correctly applies arrow position and variant modifiers
 * Property 3: Stepper class string contains required tokens and correctly applies orientation, alignment, variant, and size modifiers
 * Property 4: SliderField class string contains ux4g-slider-field and correctly toggles ux4g-slider-md for md size
 * Property 5: Drawer class string always contains ux4g-drawer and a placement class, and correctly toggles ux4g-drawer-open
 * Property 6: Extra param is always appended as a space-separated token and never duplicates existing tokens for all Phase 8 build functions
 */
import * as fc from 'fast-check';
import {
  buildAccessibilityBarClasses,
  buildAccordionClasses,
  buildStepperClasses,
  buildSliderFieldClasses,
  buildDrawerClasses,
  AccordionArrowPosition,
  AccordionVariant,
  StepperOrientation,
  StepperAlignment,
  StepperVariant,
  StepperSize,
  SliderSize,
  DrawerPlacement,
} from '../../src/types';

/**
 * Property 1: AccessibilityBar class string always contains ux4g-topbar as the sole base token
 * Tag: Feature: ux4g-phase8-components, Property 1
 * Validates: Requirements 4.1
 */
describe('Property 1: AccessibilityBar class always returns ux4g-topbar with optional extra', () => {
  it('Feature: ux4g-phase8-components, Property 1', () => {
    fc.assert(
      fc.property(
        fc.option(fc.stringOf(fc.char().filter((c) => c !== ' '), { minLength: 1 })),
        (extra: string | null) => {
          const result = extra !== null
            ? buildAccessibilityBarClasses(extra)
            : buildAccessibilityBarClasses();
          const tokens = result.split(' ');

          // Always contains 'ux4g-topbar'
          const hasBase = tokens.includes('ux4g-topbar');

          // When extra is provided, result contains the extra token
          const extraCorrect = extra !== null
            ? tokens.includes(extra)
            : true;

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && extraCorrect && noDuplicates;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 2: Accordion class string contains required tokens and correctly applies arrow position and variant modifiers
 * Tag: Feature: ux4g-phase8-components, Property 2
 * Validates: Requirements 4.2, 4.3, 4.4
 */
describe('Property 2: Accordion class correctly toggles arrow-left and bordered modifiers', () => {
  it('Feature: ux4g-phase8-components, Property 2', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('right' as AccordionArrowPosition, 'left' as AccordionArrowPosition),
        fc.constantFrom('default' as AccordionVariant, 'bordered' as AccordionVariant),
        (arrowPosition: AccordionArrowPosition, variant: AccordionVariant) => {
          const result = buildAccordionClasses(arrowPosition, variant);
          const tokens = result.split(' ');

          // Always contains base class
          const hasBase = tokens.includes('ux4g-accordion');

          // Arrow position toggles correctly
          const arrowCorrect = arrowPosition === 'left'
            ? tokens.includes('ux4g-accordion-arrow-left')
            : !tokens.includes('ux4g-accordion-arrow-left');

          // Variant toggles correctly
          const variantCorrect = variant === 'bordered'
            ? tokens.includes('ux4g-accordion-bordered')
            : !tokens.includes('ux4g-accordion-bordered');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && arrowCorrect && variantCorrect && noDuplicates;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 3: Stepper class string contains required tokens and correctly applies orientation, alignment, variant, and size modifiers
 * Tag: Feature: ux4g-phase8-components, Property 3
 * Validates: Requirements 4.5, 4.6, 4.7, 4.8, 4.9
 */
describe('Property 3: Stepper class correctly applies orientation, alignment, variant, and size modifiers', () => {
  it('Feature: ux4g-phase8-components, Property 3', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('horizontal' as StepperOrientation, 'vertical' as StepperOrientation),
        fc.constantFrom('default' as StepperAlignment, 'center' as StepperAlignment, 'left' as StepperAlignment),
        fc.constantFrom('default' as StepperVariant, 'bottom-line' as StepperVariant, 'mobile' as StepperVariant, 'progress' as StepperVariant),
        fc.constantFrom('default' as StepperSize, 's' as StepperSize),
        (orientation: StepperOrientation, alignment: StepperAlignment, variant: StepperVariant, size: StepperSize) => {
          const result = buildStepperClasses(orientation, alignment, variant, size);
          const tokens = result.split(' ');

          // Always contains base class
          const hasBase = tokens.includes('ux4g-stepper');

          // Orientation and alignment logic
          let orientationCorrect: boolean;
          if (orientation === 'vertical') {
            // vertical: contains ux4g-stepper-vertical, does NOT contain horizontal/center/left (alignment ignored)
            orientationCorrect =
              tokens.includes('ux4g-stepper-vertical') &&
              !tokens.includes('ux4g-stepper-horizontal') &&
              !tokens.includes('ux4g-stepper-center') &&
              !tokens.includes('ux4g-stepper-left');
          } else {
            // horizontal
            if (alignment === 'center') {
              orientationCorrect =
                tokens.includes('ux4g-stepper-horizontal') &&
                tokens.includes('ux4g-stepper-center') &&
                !tokens.includes('ux4g-stepper-vertical');
            } else if (alignment === 'left') {
              orientationCorrect =
                tokens.includes('ux4g-stepper-horizontal') &&
                tokens.includes('ux4g-stepper-left') &&
                !tokens.includes('ux4g-stepper-vertical');
            } else {
              // alignment === 'default': no horizontal class added
              orientationCorrect =
                !tokens.includes('ux4g-stepper-horizontal') &&
                !tokens.includes('ux4g-stepper-center') &&
                !tokens.includes('ux4g-stepper-left') &&
                !tokens.includes('ux4g-stepper-vertical');
            }
          }

          // Variant modifiers are mutually exclusive
          let variantCorrect: boolean;
          if (variant === 'bottom-line') {
            variantCorrect =
              tokens.includes('ux4g-stepper-bottom-line') &&
              !tokens.includes('ux4g-stepper-mobile') &&
              !tokens.includes('ux4g-stepper-progress');
          } else if (variant === 'mobile') {
            variantCorrect =
              tokens.includes('ux4g-stepper-mobile') &&
              !tokens.includes('ux4g-stepper-bottom-line') &&
              !tokens.includes('ux4g-stepper-progress');
          } else if (variant === 'progress') {
            variantCorrect =
              tokens.includes('ux4g-stepper-progress') &&
              !tokens.includes('ux4g-stepper-bottom-line') &&
              !tokens.includes('ux4g-stepper-mobile');
          } else {
            // variant === 'default': no variant modifier
            variantCorrect =
              !tokens.includes('ux4g-stepper-bottom-line') &&
              !tokens.includes('ux4g-stepper-mobile') &&
              !tokens.includes('ux4g-stepper-progress');
          }

          // Size toggles correctly
          const sizeCorrect = size === 's'
            ? tokens.includes('ux4g-stepper-s')
            : !tokens.includes('ux4g-stepper-s');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && orientationCorrect && variantCorrect && sizeCorrect && noDuplicates;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 4: SliderField class string contains ux4g-slider-field and correctly toggles ux4g-slider-md for md size
 * Tag: Feature: ux4g-phase8-components, Property 4
 * Validates: Requirements 4.10, 4.11
 */
describe('Property 4: SliderField class correctly toggles md size modifier', () => {
  it('Feature: ux4g-phase8-components, Property 4', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm' as SliderSize, 'md' as SliderSize, 's' as SliderSize, 'm' as SliderSize),
        (size: SliderSize) => {
          const result = buildSliderFieldClasses(size);
          const tokens = result.split(' ');

          // Always contains base class
          const hasBase = tokens.includes('ux4g-slider-field');

          // Size toggles correctly
          const isMd = size === 'md' || size === 'm';
          const sizeCorrect = isMd
            ? tokens.includes('ux4g-slider-m')
            : tokens.includes('ux4g-slider-s');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && sizeCorrect && noDuplicates;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 5: Drawer class string always contains ux4g-drawer and a placement class, and correctly toggles ux4g-drawer-open
 * Tag: Feature: ux4g-phase8-components, Property 5
 * Validates: Requirements 4.12, 4.13
 */
describe('Property 5: Drawer class always emits placement class and correctly toggles open', () => {
  it('Feature: ux4g-phase8-components, Property 5', () => {
    const allPlacements: DrawerPlacement[] = ['right', 'left', 'top', 'bottom'];

    fc.assert(
      fc.property(
        fc.constantFrom('right' as DrawerPlacement, 'left' as DrawerPlacement, 'top' as DrawerPlacement, 'bottom' as DrawerPlacement),
        fc.boolean(),
        (placement: DrawerPlacement, open: boolean) => {
          const result = buildDrawerClasses(placement, open);
          const tokens = result.split(' ');

          // Always contains base class
          const hasBase = tokens.includes('ux4g-drawer');

          // Always contains the correct placement class
          const hasPlacement = tokens.includes(`ux4g-drawer-${placement}`);

          // Exactly one placement class is present (no other placement classes)
          const otherPlacements = allPlacements.filter((p) => p !== placement);
          const noOtherPlacements = otherPlacements.every((p) => !tokens.includes(`ux4g-drawer-${p}`));

          // open toggles correctly
          const openCorrect = open
            ? tokens.includes('ux4g-drawer-open')
            : !tokens.includes('ux4g-drawer-open');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && hasPlacement && noOtherPlacements && openCorrect && noDuplicates;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 6: Extra param is always appended as a space-separated token and never duplicates existing tokens for all Phase 8 build functions
 * Tag: Feature: ux4g-phase8-components, Property 6
 * Validates: Requirements 4.1, 4.4, 4.9, 4.11, 4.13
 */
describe('Property 6: Extra param is always appended and never duplicated across all Phase 8 build functions', () => {
  it('Feature: ux4g-phase8-components, Property 6', () => {
    // Generator for a non-empty extra token with no spaces (valid CSS class name)
    const extraArb = fc.stringOf(
      fc.char().filter((c) => c !== ' '),
      { minLength: 1 }
    );

    fc.assert(
      fc.property(
        extraArb,
        (extra: string) => {
          const results = [
            buildAccessibilityBarClasses(extra),
            buildAccordionClasses('left', 'bordered', extra),
            buildStepperClasses('horizontal', 'center', 'progress', 's', extra),
            buildSliderFieldClasses('md', extra),
            buildDrawerClasses('right', true, extra),
          ];

          return results.every((result) => {
            const tokens = result.split(' ');
            // Extra token appears in result
            const hasExtra = tokens.includes(extra);
            // No duplicates
            const noDuplicates = tokens.length === new Set(tokens).size;
            // Extra token appears exactly once
            const exactlyOnce = tokens.filter((t) => t === extra).length === 1;
            return hasExtra && noDuplicates && exactlyOnce;
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
