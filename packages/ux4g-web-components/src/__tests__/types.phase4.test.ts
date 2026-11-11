/**
 * Unit tests for Phase 4 build functions
 * Validates: Requirements 4.3, 4.6, 4.8, 4.10
 */
import {
  buildChipClasses,
  buildTagClasses,
  buildDividerClasses,
  buildBreadcrumbClasses,
} from '../../src/types';

describe('buildChipClasses', () => {
  it('filter xs clamped to sm', () => {
    expect(buildChipClasses('filter', 'xs')).toBe('ux4g-filter-chip-s');
  });

  it('choice xs clamped to sm with active', () => {
    expect(buildChipClasses('choice', 'xs', true)).toBe('ux4g-choice-chip-s active');
  });

  it('input xs is valid (not clamped)', () => {
    expect(buildChipClasses('input', 'xs')).toBe('ux4g-input-chip-xs');
  });

  it('filter md', () => {
    expect(buildChipClasses('filter', 'md')).toBe('ux4g-filter-chip-m');
  });

  it('choice sm with active', () => {
    expect(buildChipClasses('choice', 'sm', true)).toBe('ux4g-choice-chip-s active');
  });

  it('active=false does not append active', () => {
    expect(buildChipClasses('filter', 'md', false)).toBe('ux4g-filter-chip-m');
  });

  it('extra class appended', () => {
    expect(buildChipClasses('input', 'sm', false, 'my-class')).toBe('ux4g-input-chip-s my-class');
  });
});

describe('buildTagClasses', () => {
  it('tonal brand', () => {
    expect(buildTagClasses('tonal', 'brand')).toBe('ux4g-tag-tonal-brand');
  });

  it('filled error with small', () => {
    expect(buildTagClasses('filled', 'error', true)).toBe('ux4g-tag-filled-error ux4g-tag-s');
  });

  it('outline success with small', () => {
    expect(buildTagClasses('outline', 'success', true)).toBe('ux4g-tag-outline-success ux4g-tag-s');
  });

  it('text neutral', () => {
    expect(buildTagClasses('text', 'neutral')).toBe('ux4g-tag-text-neutral');
  });

  it('small=false does not append ux4g-tag-s', () => {
    expect(buildTagClasses('tonal', 'brand', false)).toBe('ux4g-tag-tonal-brand');
  });

  it('extra class appended', () => {
    expect(buildTagClasses('filled', 'info', false, 'my-class')).toBe('ux4g-tag-filled-info my-class');
  });
});

describe('buildDividerClasses', () => {
  it('horizontal', () => {
    expect(buildDividerClasses('horizontal')).toBe('ux4g-divider-horizontal');
  });

  it('vertical', () => {
    expect(buildDividerClasses('vertical')).toBe('ux4g-divider-vertical');
  });

  it('extra class appended', () => {
    expect(buildDividerClasses('horizontal', 'my-class')).toBe('ux4g-divider-horizontal my-class');
  });
});

describe('buildBreadcrumbClasses', () => {
  it('divider separator', () => {
    expect(buildBreadcrumbClasses('divider')).toBe('ux4g-breadcrumb ux4g-breadcrumb-divider');
  });

  it('icon separator', () => {
    expect(buildBreadcrumbClasses('icon')).toBe('ux4g-breadcrumb ux4g-breadcrumb-icon');
  });

  it('extra class appended', () => {
    expect(buildBreadcrumbClasses('divider', 'my-class')).toBe('ux4g-breadcrumb ux4g-breadcrumb-divider my-class');
  });
});
