import {
  buildPaginationClasses,
  buildTableClasses,
  buildPopoverClasses,
  buildTooltipClasses,
  buildTabClasses,
  buildIconButtonClasses,
} from '../../src/types';

// ── buildPaginationClasses ────────────────────────────────────────────────────
// Requirements: 4.3

describe('buildPaginationClasses', () => {
  it("variant='default' → base only", () => {
    expect(buildPaginationClasses('default')).toBe('ux4g-pagination');
  });

  it("variant='dotted' → base + dotted", () => {
    expect(buildPaginationClasses('dotted')).toBe('ux4g-pagination ux4g-pagination-dotted');
  });

  it("variant='dotted' paginationStyle='solid' → base + dotted + solid", () => {
    expect(buildPaginationClasses('dotted', 'solid')).toBe('ux4g-pagination ux4g-pagination-dotted ux4g-pagination-solid');
  });

  it("variant='dotted' paginationStyle='translucent' → base + dotted + translucent", () => {
    expect(buildPaginationClasses('dotted', 'translucent')).toBe('ux4g-pagination ux4g-pagination-dotted ux4g-pagination-translucent');
  });

  it("variant='default' paginationStyle='solid' → base only (paginationStyle ignored)", () => {
    expect(buildPaginationClasses('default', 'solid')).toBe('ux4g-pagination');
  });

  it("variant='dotted' paginationStyle='solid' extra='my-pager' → base + dotted + solid + extra", () => {
    expect(buildPaginationClasses('dotted', 'solid', 'my-pager')).toBe('ux4g-pagination ux4g-pagination-dotted ux4g-pagination-solid my-pager');
  });
});

// ── buildTableClasses ─────────────────────────────────────────────────────────
// Requirements: 4.7

describe('buildTableClasses', () => {
  it("size='m' → base + size", () => {
    expect(buildTableClasses('m')).toBe('ux4g-table ux4g-table-m');
  });

  it("size='s' divider='column' → base + size + column-dividers", () => {
    expect(buildTableClasses('s', 'column')).toBe('ux4g-table ux4g-table-s ux4g-table-column-dividers');
  });

  it("size='lg' divider='none' zebra='rows' → base + size + no-row-dividers + zebra-rows", () => {
    expect(buildTableClasses('lg', 'none', 'rows')).toBe('ux4g-table ux4g-table-l ux4g-table-no-row-dividers ux4g-table-zebra-rows');
  });

  it("size='m' divider='row' zebra='none' interactive sortable headerBrand → no divider/zebra modifiers, interactive + sortable + header-brand", () => {
    expect(buildTableClasses('m', 'row', 'none', true, true, false, true)).toBe(
      'ux4g-table ux4g-table-m ux4g-table-interactive ux4g-table-sortable ux4g-table-header-brand'
    );
  });

  it("size='m' divider='column' zebra='cols' all booleans true extra='my-table' → full class string", () => {
    expect(buildTableClasses('m', 'column', 'cols', true, true, true, true, 'my-table')).toBe(
      'ux4g-table ux4g-table-m ux4g-table-column-dividers ux4g-table-zebra-cols ux4g-table-interactive ux4g-table-sortable ux4g-table-resizable ux4g-table-header-brand my-table'
    );
  });
});

// ── buildPopoverClasses ───────────────────────────────────────────────────────
// Requirements: 4.9

describe('buildPopoverClasses', () => {
  it("placement='bottom' → base + placement", () => {
    expect(buildPopoverClasses('bottom')).toBe('ux4g-popover ux4g-popover-bottom');
  });

  it("placement='top-start' → base + placement", () => {
    expect(buildPopoverClasses('top-start')).toBe('ux4g-popover ux4g-popover-top-start');
  });

  it("placement='right-end' show=true → base + placement + show", () => {
    expect(buildPopoverClasses('right-end', true)).toBe('ux4g-popover ux4g-popover-right-end show');
  });

  it("placement='left' show=false → base + placement, no show", () => {
    expect(buildPopoverClasses('left', false)).toBe('ux4g-popover ux4g-popover-left');
  });

  it("placement='bottom' show=true extra='my' → base + placement + show + extra", () => {
    expect(buildPopoverClasses('bottom', true, 'my')).toBe('ux4g-popover ux4g-popover-bottom show my');
  });
});

// ── buildTooltipClasses ───────────────────────────────────────────────────────
// Requirements: 4.12

describe('buildTooltipClasses', () => {
  it("placement='top-center' size='s' → base + placement + size", () => {
    expect(buildTooltipClasses('top-center', 's')).toBe('ux4g-tooltip ux4g-tooltip-top-center ux4g-tooltip-s');
  });

  it("placement='bottom-right' size='xs' → base + placement + size", () => {
    expect(buildTooltipClasses('bottom-right', 'xs')).toBe('ux4g-tooltip ux4g-tooltip-bottom-right ux4g-tooltip-xs');
  });

  it("placement='left-center' size='s' extra='my-tip' → base + placement + size + extra", () => {
    expect(buildTooltipClasses('left-center', 's', 'my-tip')).toBe('ux4g-tooltip ux4g-tooltip-left-center ux4g-tooltip-s my-tip');
  });
});

// ── buildTabClasses ───────────────────────────────────────────────────────────
// Requirements: 4.15

describe('buildTabClasses', () => {
  it("variant='underline' size='md' → base + variant + size", () => {
    expect(buildTabClasses('underline', 'md')).toBe('ux4g-tab ux4g-tab-underline ux4g-tab-m');
  });

  it("variant='pill' size='lg' → base + variant + size", () => {
    expect(buildTabClasses('pill', 'lg')).toBe('ux4g-tab ux4g-tab-pill ux4g-tab-l');
  });

  it("variant='underline' size='sm' vertical=true → base + variant + size + vertical", () => {
    expect(buildTabClasses('underline', 'sm', true)).toBe('ux4g-tab ux4g-tab-underline ux4g-tab-s ux4g-tab-vertical');
  });

  it("variant='pill' size='md' vertical=false extra='my-tabs' → base + variant + size + extra, no vertical", () => {
    expect(buildTabClasses('pill', 'md', false, 'my-tabs')).toBe('ux4g-tab ux4g-tab-pill ux4g-tab-m my-tabs');
  });
});

// ── buildIconButtonClasses ────────────────────────────────────────────────────
// Requirements: 4.18

describe('buildIconButtonClasses', () => {
  it("variant='primary' size='md' → base + variant + size", () => {
    expect(buildIconButtonClasses('primary', 'md')).toBe('ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-m');
  });

  it("variant='outline-primary' size='sm' → base + variant + size", () => {
    expect(buildIconButtonClasses('outline-primary', 'sm')).toBe('ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-s');
  });

  it("variant='text-primary' size='lg' pill=true → base + variant + size + pill", () => {
    expect(buildIconButtonClasses('text-primary', 'lg', true)).toBe('ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-l ux4g-icon-btn-pill');
  });

  it("variant='tonal-primary' size='xs' pill=false extra='my' → base + variant + size + extra, no pill", () => {
    expect(buildIconButtonClasses('tonal-primary', 'xs', false, 'my')).toBe('ux4g-icon-btn ux4g-icon-btn-tonal-primary ux4g-icon-btn-xs my');
  });
});
