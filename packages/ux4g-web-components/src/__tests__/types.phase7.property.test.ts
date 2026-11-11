/**
 * Property-based tests for Phase 7 build functions
 *
 * Property 1: Pagination class correctly toggles dotted variant and style modifiers
 * Property 2: Table class contains all required tokens and correctly toggles divider, zebra, and boolean flags
 * Property 3: Popover class contains required tokens and correctly toggles show
 * Property 4: Tooltip class contains all required tokens for all placement and size combinations
 * Property 5: Tab class contains all required tokens and correctly toggles vertical
 * Property 6: Icon button class contains all required tokens and correctly toggles pill
 * Property 7: Extra param is always appended and never duplicated across all build functions
 */
import * as fc from 'fast-check';
import {
  buildPaginationClasses,
  buildTableClasses,
  buildPopoverClasses,
  buildTooltipClasses,
  buildTabClasses,
  buildIconButtonClasses,
  PaginationVariant,
  PaginationStyle,
  TableSize,
  TableDivider,
  TableZebra,
  PopoverPlacement,
  TooltipPlacement,
  TooltipSize,
  TabVariant,
  TabSize,
  IconButtonVariant,
  IconButtonSize,
} from '../../src/types';

/**
 * Property 1: Pagination class string contains required tokens and correctly applies dotted variant and style modifiers
 * Tag: Feature: ux4g-phase7-components, Property 1
 * Validates: Requirements 12.1, 12.2, 12.3, 12.4, 12.5
 */
describe('Property 1: Pagination class correctly toggles dotted variant and style modifiers', () => {
  it('Feature: ux4g-phase7-components, Property 1', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('default' as PaginationVariant, 'dotted' as PaginationVariant),
        fc.constantFrom('default' as PaginationStyle, 'solid' as PaginationStyle, 'translucent' as PaginationStyle),
        (variant: PaginationVariant, paginationStyle: PaginationStyle) => {
          const result = buildPaginationClasses(variant, paginationStyle);
          const tokens = result.split(' ');

          // Always contains base class
          const hasBase = tokens.includes('ux4g-pagination');

          // Dotted variant toggles correctly
          const dottedCorrect = variant === 'dotted'
            ? tokens.includes('ux4g-pagination-dotted')
            : !tokens.includes('ux4g-pagination-dotted');

          // Style modifiers only apply when dotted; mutually exclusive
          let styleCorrect: boolean;
          if (variant === 'dotted' && paginationStyle === 'solid') {
            styleCorrect = tokens.includes('ux4g-pagination-solid') && !tokens.includes('ux4g-pagination-translucent');
          } else if (variant === 'dotted' && paginationStyle === 'translucent') {
            styleCorrect = tokens.includes('ux4g-pagination-translucent') && !tokens.includes('ux4g-pagination-solid');
          } else {
            // variant='default' (any style) or variant='dotted' paginationStyle='default' — no style modifier
            styleCorrect = !tokens.includes('ux4g-pagination-solid') && !tokens.includes('ux4g-pagination-translucent');
          }

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && dottedCorrect && styleCorrect && noDuplicates;
        }
      ),
      { numRuns: 25 }
    );
  });
});

const toShort = (s: string) => (s === 'sm' ? 's' : s === 'md' ? 'm' : s === 'lg' ? 'l' : s);

/**
 * Property 2: Table class string contains all required tokens and correctly toggles divider, zebra, and boolean modifier flags
 * Tag: Feature: ux4g-phase7-components, Property 2
 * Validates: Requirements 12.6, 12.7, 12.8, 12.9, 12.10, 12.11, 12.12, 12.13
 */
describe('Property 2: Table class contains all required tokens and correctly toggles divider, zebra, and boolean flags', () => {
  it('Feature: ux4g-phase7-components, Property 2', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('s' as TableSize, 'm' as TableSize, 'lg' as TableSize),
        fc.constantFrom('row' as TableDivider, 'column' as TableDivider, 'none' as TableDivider),
        fc.constantFrom('none' as TableZebra, 'rows' as TableZebra, 'cols' as TableZebra),
        fc.boolean(),
        fc.boolean(),
        fc.boolean(),
        fc.boolean(),
        (size: TableSize, divider: TableDivider, zebra: TableZebra, interactive: boolean, sortable: boolean, resizable: boolean, headerBrand: boolean) => {
          const result = buildTableClasses(size, divider, zebra, interactive, sortable, resizable, headerBrand);
          const tokens = result.split(' ');

          // Always contains base and size
          const hasBase = tokens.includes('ux4g-table');
          const hasSize = tokens.includes(`ux4g-table-${toShort(size)}`);

          // Divider modifiers are mutually exclusive
          let dividerCorrect: boolean;
          if (divider === 'column') {
            dividerCorrect = tokens.includes('ux4g-table-column-dividers') && !tokens.includes('ux4g-table-no-row-dividers');
          } else if (divider === 'none') {
            dividerCorrect = tokens.includes('ux4g-table-no-row-dividers') && !tokens.includes('ux4g-table-column-dividers');
          } else {
            // divider === 'row' — no modifier
            dividerCorrect = !tokens.includes('ux4g-table-column-dividers') && !tokens.includes('ux4g-table-no-row-dividers');
          }

          // Zebra modifiers are mutually exclusive
          let zebraCorrect: boolean;
          if (zebra === 'rows') {
            zebraCorrect = tokens.includes('ux4g-table-zebra-rows') && !tokens.includes('ux4g-table-zebra-cols');
          } else if (zebra === 'cols') {
            zebraCorrect = tokens.includes('ux4g-table-zebra-cols') && !tokens.includes('ux4g-table-zebra-rows');
          } else {
            // zebra === 'none' — no modifier
            zebraCorrect = !tokens.includes('ux4g-table-zebra-rows') && !tokens.includes('ux4g-table-zebra-cols');
          }

          // Boolean flags toggle independently
          const interactiveCorrect = interactive ? tokens.includes('ux4g-table-interactive') : !tokens.includes('ux4g-table-interactive');
          const sortableCorrect = sortable ? tokens.includes('ux4g-table-sortable') : !tokens.includes('ux4g-table-sortable');
          const resizableCorrect = resizable ? tokens.includes('ux4g-table-resizable') : !tokens.includes('ux4g-table-resizable');
          const headerBrandCorrect = headerBrand ? tokens.includes('ux4g-table-header-brand') : !tokens.includes('ux4g-table-header-brand');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && hasSize && dividerCorrect && zebraCorrect
            && interactiveCorrect && sortableCorrect && resizableCorrect && headerBrandCorrect
            && noDuplicates;
        }
      ),
      { numRuns: 25 }
    );
  });
});

/**
 * Property 3: Popover class string contains required tokens and correctly toggles show
 * Tag: Feature: ux4g-phase7-components, Property 3
 * Validates: Requirements 12.14, 12.15, 12.16
 */
describe('Property 3: Popover class contains required tokens and correctly toggles show', () => {
  it('Feature: ux4g-phase7-components, Property 3', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          'top' as PopoverPlacement,
          'top-start' as PopoverPlacement,
          'top-end' as PopoverPlacement,
          'bottom' as PopoverPlacement,
          'bottom-start' as PopoverPlacement,
          'bottom-end' as PopoverPlacement,
          'left' as PopoverPlacement,
          'left-start' as PopoverPlacement,
          'left-end' as PopoverPlacement,
          'right' as PopoverPlacement,
          'right-start' as PopoverPlacement,
          'right-end' as PopoverPlacement
        ),
        fc.boolean(),
        (placement: PopoverPlacement, show: boolean) => {
          const result = buildPopoverClasses(placement, show);
          const tokens = result.split(' ');

          // Always contains base and placement
          const hasBase = tokens.includes('ux4g-popover');
          const hasPlacement = tokens.includes(`ux4g-popover-${placement}`);

          // show toggles correctly
          const showCorrect = show ? tokens.includes('show') : !tokens.includes('show');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && hasPlacement && showCorrect && noDuplicates;
        }
      ),
      { numRuns: 25 }
    );
  });
});

/**
 * Property 4: Tooltip class string contains all required tokens for all valid placement and size combinations
 * Tag: Feature: ux4g-phase7-components, Property 4
 * Validates: Requirements 12.17, 12.18
 */
describe('Property 4: Tooltip class contains all required tokens for all placement and size combinations', () => {
  it('Feature: ux4g-phase7-components, Property 4', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          'top-left' as TooltipPlacement,
          'top-center' as TooltipPlacement,
          'top-right' as TooltipPlacement,
          'bottom-left' as TooltipPlacement,
          'bottom-center' as TooltipPlacement,
          'bottom-right' as TooltipPlacement,
          'left-center' as TooltipPlacement,
          'right-center' as TooltipPlacement
        ),
        fc.constantFrom('s' as TooltipSize, 'xs' as TooltipSize),
        (placement: TooltipPlacement, size: TooltipSize) => {
          const result = buildTooltipClasses(placement, size);
          const tokens = result.split(' ');

          // Always contains base, placement, and size
          const hasBase = tokens.includes('ux4g-tooltip');
          const hasPlacement = tokens.includes(`ux4g-tooltip-${placement}`);
          const hasSize = tokens.includes(`ux4g-tooltip-${toShort(size)}`);

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && hasPlacement && hasSize && noDuplicates;
        }
      ),
      { numRuns: 25 }
    );
  });
});

/**
 * Property 5: Tab class string contains all required tokens and correctly toggles vertical modifier
 * Tag: Feature: ux4g-phase7-components, Property 5
 * Validates: Requirements 12.19, 12.20, 12.21
 */
describe('Property 5: Tab class contains all required tokens and correctly toggles vertical', () => {
  it('Feature: ux4g-phase7-components, Property 5', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('underline' as TabVariant, 'pill' as TabVariant),
        fc.constantFrom('sm' as TabSize, 'md' as TabSize, 'lg' as TabSize),
        fc.boolean(),
        (variant: TabVariant, size: TabSize, vertical: boolean) => {
          const result = buildTabClasses(variant, size, vertical);
          const tokens = result.split(' ');

          // Always contains base, variant, and size
          const hasBase = tokens.includes('ux4g-tab');
          const hasVariant = tokens.includes(`ux4g-tab-${variant}`);
          const hasSize = tokens.includes(`ux4g-tab-${toShort(size)}`);

          // vertical toggles correctly
          const verticalCorrect = vertical
            ? tokens.includes('ux4g-tab-vertical')
            : !tokens.includes('ux4g-tab-vertical');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && hasVariant && hasSize && verticalCorrect && noDuplicates;
        }
      ),
      { numRuns: 25 }
    );
  });
});

/**
 * Property 6: Icon button class string contains all required tokens and correctly toggles pill modifier
 * Tag: Feature: ux4g-phase7-components, Property 6
 * Validates: Requirements 12.22, 12.23, 12.24
 */
describe('Property 6: Icon button class contains all required tokens and correctly toggles pill', () => {
  it('Feature: ux4g-phase7-components, Property 6', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          'primary' as IconButtonVariant,
          'outline-primary' as IconButtonVariant,
          'tonal-primary' as IconButtonVariant,
          'text-primary' as IconButtonVariant
        ),
        fc.constantFrom(
          'xl' as IconButtonSize,
          'lg' as IconButtonSize,
          'md' as IconButtonSize,
          'sm' as IconButtonSize,
          'xs' as IconButtonSize
        ),
        fc.boolean(),
        (variant: IconButtonVariant, size: IconButtonSize, pill: boolean) => {
          const result = buildIconButtonClasses(variant, size, pill);
          const tokens = result.split(' ');

          // Always contains base, variant, and size
          const hasBase = tokens.includes('ux4g-icon-btn');
          const hasVariant = tokens.includes(`ux4g-icon-btn-${variant}`);
          const hasSize = tokens.includes(`ux4g-icon-btn-${toShort(size)}`);

          // pill toggles correctly
          const pillCorrect = pill
            ? tokens.includes('ux4g-icon-btn-pill')
            : !tokens.includes('ux4g-icon-btn-pill');

          // No duplicates
          const noDuplicates = tokens.length === new Set(tokens).size;

          return hasBase && hasVariant && hasSize && pillCorrect && noDuplicates;
        }
      ),
      { numRuns: 25 }
    );
  });
});

/**
 * Property 7: Extra param is always appended as a space-separated token and never duplicates existing tokens
 * Tag: Feature: ux4g-phase7-components, Property 7
 * Validates: Requirements 12.25
 */
describe('Property 7: Extra param is always appended and never duplicated across all build functions', () => {
  it('Feature: ux4g-phase7-components, Property 7', () => {
    // Generator for a non-empty extra token with no spaces (valid CSS class name)
    const extraArb = fc.stringMatching(/^[a-z][a-z0-9-]*$/);

    fc.assert(
      fc.property(
        extraArb,
        (extra: string) => {
          const results = [
            buildPaginationClasses('dotted', 'solid', extra),
            buildTableClasses('m', 'column', 'cols', true, true, true, true, extra),
            buildPopoverClasses('bottom', true, extra),
            buildTooltipClasses('top-center', 's', extra),
            buildTabClasses('underline', 'md', true, extra),
            buildIconButtonClasses('primary', 'md', true, extra),
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
      { numRuns: 25 }
    );
  });
});
