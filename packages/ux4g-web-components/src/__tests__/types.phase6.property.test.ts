/**
 * Property-based tests for Phase 6 build functions
 *
 * Property 1: List class string contains all required tokens and has no duplicates
 * Property 2: Dropdown class string contains all required tokens and correctly toggles is-open
 * Property 3: Combobox class string contains all required tokens and correctly toggles is-open
 * Property 4: Modal backdrop class string contains required tokens and correctly toggles blur and is-open
 * Property 5: Modal box class string contains required tokens and correctly toggles center-content
 * Property 6: Inline alert class string contains required tokens and applies mutually exclusive layout modifiers
 * Property 7: Context-alert class string uses ux4g-context-alert as base and does not include standalone ux4g-alert
 * Property 8: Alert container class string contains required tokens for all positions
 * Property 9: Search container class string contains required tokens for all sizes, and extra param is always appended
 */
import * as fc from 'fast-check';
import {
  buildListClasses,
  buildDropdownClasses,
  buildComboboxClasses,
  buildModalBackdropClasses,
  buildModalBoxClasses,
  buildAlertClasses,
  buildContextAlertClasses,
  buildAlertContainerClasses,
  buildSearchContainerClasses,
  ListVariant,
  ListSize,
  DropdownType,
  DropdownMode,
  DropdownSize,
  DropdownState,
  ComboboxType,
  ComboboxSize,
  ComboboxState,
  ModalOpacity,
  ModalSize,
  AlertVariant,
} from '../../src/types';

/**
 * Property 1: List class string contains all required tokens and has no duplicates
 * Tag: Feature: ux4g-phase6-components, Property 1
 * Validates: Requirements 12.1, 12.2
 */
describe('Property 1: List class string contains all required tokens and has no duplicates', () => {
  it('Feature: ux4g-phase6-components, Property 1', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('default' as ListVariant, 'error' as ListVariant, 'success' as ListVariant, 'warning' as ListVariant),
        fc.constantFrom('s' as ListSize, 'm' as ListSize, 'l' as ListSize, 'xl' as ListSize),
        (variant: ListVariant, size: ListSize) => {
          const result = buildListClasses(variant, size);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-list');
          const hasVariant = tokens.includes(`ux4g-list-${variant}`);
          const hasSize = tokens.includes(`ux4g-list-${size}`);
          const noDuplicates = tokens.length === new Set(tokens).size;
          return hasBase && hasVariant && hasSize && noDuplicates;
        }
      ),
      { numRuns: 100 }
    );
  });
});

const toShort = (s: string) => (s === 'sm' ? 's' : s === 'md' ? 'm' : s === 'lg' ? 'l' : s);

/**
 * Property 2: Dropdown class string contains all required tokens and correctly toggles is-open
 * Tag: Feature: ux4g-phase6-components, Property 2
 * Validates: Requirements 12.4, 12.5
 */
describe('Property 2: Dropdown class string contains all required tokens and correctly toggles is-open', () => {
  it('Feature: ux4g-phase6-components, Property 2', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('selection' as DropdownType, 'button' as DropdownType, 'overflow' as DropdownType),
        fc.constantFrom('single' as DropdownMode, 'multi' as DropdownMode),
        fc.constantFrom('sm' as DropdownSize, 'md' as DropdownSize, 'lg' as DropdownSize),
        fc.constantFrom('default' as DropdownState, 'error' as DropdownState, 'success' as DropdownState, 'warning' as DropdownState),
        fc.boolean(),
        (type: DropdownType, mode: DropdownMode, size: DropdownSize, state: DropdownState, open: boolean) => {
          const result = buildDropdownClasses(type, mode, size, state, open);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-dropdown');
          const hasType = tokens.includes(`ux4g-dropdown-${type}`);
          const hasMode = tokens.includes(`ux4g-dropdown-${mode}`);
          const hasSize = tokens.includes(`ux4g-dropdown-${toShort(size)}`);
          const hasState = tokens.includes(`ux4g-dropdown-${state}`);
          const openCorrect = open ? tokens.includes('is-open') : !tokens.includes('is-open');
          return hasBase && hasType && hasMode && hasSize && hasState && openCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 3: Combobox class string contains all required tokens and correctly toggles is-open
 * Tag: Feature: ux4g-phase6-components, Property 3
 * Validates: Requirements 12.6, 12.7
 */
describe('Property 3: Combobox class string contains all required tokens and correctly toggles is-open', () => {
  it('Feature: ux4g-phase6-components, Property 3', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('single' as ComboboxType, 'multi' as ComboboxType),
        fc.constantFrom('sm' as ComboboxSize, 'md' as ComboboxSize, 'lg' as ComboboxSize),
        fc.constantFrom('default' as ComboboxState, 'error' as ComboboxState, 'success' as ComboboxState, 'warning' as ComboboxState),
        fc.boolean(),
        (type: ComboboxType, size: ComboboxSize, state: ComboboxState, open: boolean) => {
          const result = buildComboboxClasses(type, size, state, open);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-combobox');
          const hasType = tokens.includes(`ux4g-combobox-${type}`);
          const hasSize = tokens.includes(`ux4g-combobox-${toShort(size)}`);
          const hasState = tokens.includes(`ux4g-combobox-${state}`);
          const openCorrect = open ? tokens.includes('is-open') : !tokens.includes('is-open');
          return hasBase && hasType && hasSize && hasState && openCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 4: Modal backdrop class string contains required tokens and correctly toggles blur and is-open
 * Tag: Feature: ux4g-phase6-components, Property 4
 * Validates: Requirements 12.8, 12.9, 12.10
 */
describe('Property 4: Modal backdrop class string contains required tokens and correctly toggles blur and is-open', () => {
  it('Feature: ux4g-phase6-components, Property 4', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('25' as ModalOpacity, '50' as ModalOpacity, '75' as ModalOpacity),
        fc.boolean(),
        fc.boolean(),
        (opacity: ModalOpacity, blur: boolean, open: boolean) => {
          const result = buildModalBackdropClasses(opacity, blur, open);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-modal-backdrop');
          const hasOpacity = tokens.includes(`ux4g-modal-backdrop-${opacity}`);
          const blurCorrect = blur ? tokens.includes('ux4g-modal-backdrop-blur') : !tokens.includes('ux4g-modal-backdrop-blur');
          const openCorrect = open ? tokens.includes('is-open') : !tokens.includes('is-open');
          return hasBase && hasOpacity && blurCorrect && openCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 5: Modal box class string contains required tokens and correctly toggles center-content
 * Tag: Feature: ux4g-phase6-components, Property 5
 * Validates: Requirements 12.11, 12.12
 */
describe('Property 5: Modal box class string contains required tokens and correctly toggles center-content', () => {
  it('Feature: ux4g-phase6-components, Property 5', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('s' as ModalSize, 'm' as ModalSize, 'l' as ModalSize),
        fc.boolean(),
        (size: ModalSize, centerContent: boolean) => {
          const result = buildModalBoxClasses(size, centerContent);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-modal-box');
          const hasSize = tokens.includes(`ux4g-modal-${size}`);
          const centerCorrect = centerContent
            ? tokens.includes('ux4g-modal-center-content')
            : !tokens.includes('ux4g-modal-center-content');
          return hasBase && hasSize && centerCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 6: Inline alert class string contains required tokens and applies mutually exclusive layout modifiers
 * Tag: Feature: ux4g-phase6-components, Property 6
 * Validates: Requirements 12.13, 12.14
 */
describe('Property 6: Inline alert class string contains required tokens and applies mutually exclusive layout modifiers', () => {
  it('Feature: ux4g-phase6-components, Property 6', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('info' as AlertVariant, 'success' as AlertVariant, 'warning' as AlertVariant, 'error' as AlertVariant),
        fc.constantFrom('fluid' as const, 'center' as const, 'wide' as const),
        (variant: AlertVariant, layout: 'fluid' | 'center' | 'wide') => {
          const result = buildAlertClasses(variant, layout);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-alert');
          const hasVariant = tokens.includes(`ux4g-alert-${variant}`);
          let layoutCorrect: boolean;
          if (layout === 'center') {
            layoutCorrect = tokens.includes('ux4g-alert-center') && !tokens.includes('ux4g-alert-wide');
          } else if (layout === 'wide') {
            layoutCorrect = tokens.includes('ux4g-alert-wide') && !tokens.includes('ux4g-alert-center');
          } else {
            // fluid — neither modifier present
            layoutCorrect = !tokens.includes('ux4g-alert-center') && !tokens.includes('ux4g-alert-wide');
          }
          return hasBase && hasVariant && layoutCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 7: Context-alert class string uses ux4g-context-alert as base and does not include standalone ux4g-alert
 * Tag: Feature: ux4g-phase6-components, Property 7
 * Validates: Requirements 12.15
 */
describe('Property 7: Context-alert class string uses ux4g-context-alert as base and does not include standalone ux4g-alert', () => {
  it('Feature: ux4g-phase6-components, Property 7', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('info' as AlertVariant, 'success' as AlertVariant, 'warning' as AlertVariant, 'error' as AlertVariant),
        (variant: AlertVariant) => {
          const result = buildContextAlertClasses(variant);
          const tokens = result.split(' ');
          const hasContextBase = tokens.includes('ux4g-context-alert');
          const hasVariant = tokens.includes(`ux4g-alert-${variant}`);
          // 'ux4g-alert' must NOT appear as a standalone token (exact match)
          const noStandaloneAlert = !tokens.includes('ux4g-alert');
          return hasContextBase && hasVariant && noStandaloneAlert;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 8: Alert container class string contains required tokens for all positions
 * Tag: Feature: ux4g-phase6-components, Property 8
 * Validates: Requirements 12.16
 */
describe('Property 8: Alert container class string contains required tokens for all positions', () => {
  it('Feature: ux4g-phase6-components, Property 8', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('top-left' as const, 'top-right' as const, 'bottom-left' as const, 'bottom-right' as const),
        (position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
          const result = buildAlertContainerClasses(position);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-alert-container');
          const hasPosition = tokens.includes(`ux4g-alert-${position}`);
          return hasBase && hasPosition;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 9: Search container class string contains required tokens for all sizes, and extra param is always appended
 * Tag: Feature: ux4g-phase6-components, Property 9
 * Validates: Requirements 12.17, 12.18
 */
describe('Property 9: Search container class string contains required tokens for all sizes, and extra param is always appended', () => {
  it('Feature: ux4g-phase6-components, Property 9', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('s' as const, 'm' as const, 'lg' as const),
        fc.option(fc.stringMatching(/^[a-z][a-z0-9-]*$/), { nil: undefined }),
        (size: 's' | 'm' | 'lg', extra: string | undefined) => {
          const result = buildSearchContainerClasses(size, extra);
          const tokens = result.split(' ');
          const hasBase = tokens.includes('ux4g-search-container');
          const hasSize = tokens.includes(`ux4g-search-${toShort(size)}`);
          const extraCorrect = extra !== undefined
            ? tokens.includes(extra) && tokens.length === new Set(tokens).size
            : true;
          return hasBase && hasSize && extraCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});
