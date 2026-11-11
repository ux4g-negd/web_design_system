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
} from '../../src/types';

// ── buildListClasses ──────────────────────────────────────────────────────────
// Requirements: 4.3

describe('buildListClasses', () => {
  it("variant='default' size='m' → base + variant + size", () => {
    expect(buildListClasses('default', 'm')).toBe('ux4g-list ux4g-list-default ux4g-list-m');
  });

  it("variant='error' size='s' → base + variant + size", () => {
    expect(buildListClasses('error', 's')).toBe('ux4g-list ux4g-list-error ux4g-list-s');
  });

  it("variant='success' size='xl' with extra → appends extra class", () => {
    expect(buildListClasses('success', 'xl', 'my-list')).toBe('ux4g-list ux4g-list-success ux4g-list-xl my-list');
  });
});

// ── buildDropdownClasses ──────────────────────────────────────────────────────
// Requirements: 4.8

describe('buildDropdownClasses', () => {
  it("type='selection' mode='single' size='md' state='default' → all five tokens", () => {
    expect(buildDropdownClasses('selection', 'single', 'md', 'default')).toBe(
      'ux4g-dropdown ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-m ux4g-dropdown-default'
    );
  });

  it("type='button' mode='multi' size='lg' state='error' open=true → includes is-open", () => {
    expect(buildDropdownClasses('button', 'multi', 'lg', 'error', true)).toBe(
      'ux4g-dropdown ux4g-dropdown-button ux4g-dropdown-multi ux4g-dropdown-l ux4g-dropdown-error is-open'
    );
  });

  it("type='overflow' mode='single' size='sm' state='default' open=false → no is-open", () => {
    const result = buildDropdownClasses('overflow', 'single', 'sm', 'default', false);
    expect(result).not.toContain('is-open');
    expect(result).toBe(
      'ux4g-dropdown ux4g-dropdown-overflow ux4g-dropdown-single ux4g-dropdown-s ux4g-dropdown-default'
    );
  });
});

// ── buildComboboxClasses ──────────────────────────────────────────────────────
// Requirements: 4.12

describe('buildComboboxClasses', () => {
  it("type='single' size='md' state='default' → all four tokens", () => {
    expect(buildComboboxClasses('single', 'md', 'default')).toBe(
      'ux4g-combobox ux4g-combobox-single ux4g-combobox-m ux4g-combobox-default'
    );
  });

  it("type='multi' size='lg' state='error' open=true → includes is-open", () => {
    expect(buildComboboxClasses('multi', 'lg', 'error', true)).toBe(
      'ux4g-combobox ux4g-combobox-multi ux4g-combobox-l ux4g-combobox-error is-open'
    );
  });
});

// ── buildModalBackdropClasses ─────────────────────────────────────────────────
// Requirements: 4.15

describe('buildModalBackdropClasses', () => {
  it("opacity='50' → base + opacity only", () => {
    expect(buildModalBackdropClasses('50')).toBe('ux4g-modal-backdrop ux4g-modal-backdrop-50');
  });

  it("opacity='75' blur=true open=true → includes blur and is-open", () => {
    expect(buildModalBackdropClasses('75', true, true)).toBe(
      'ux4g-modal-backdrop ux4g-modal-backdrop-75 ux4g-modal-backdrop-blur is-open'
    );
  });

  it("opacity='25' blur=false open=false → no blur, no is-open", () => {
    const result = buildModalBackdropClasses('25', false, false);
    expect(result).not.toContain('ux4g-modal-backdrop-blur');
    expect(result).not.toContain('is-open');
    expect(result).toBe('ux4g-modal-backdrop ux4g-modal-backdrop-25');
  });
});

// ── buildModalBoxClasses ──────────────────────────────────────────────────────
// Requirements: 4.16

describe('buildModalBoxClasses', () => {
  it("size='m' → base + size", () => {
    expect(buildModalBoxClasses('m')).toBe('ux4g-modal-box ux4g-modal-m');
  });

  it("size='l' centerContent=true → includes center-content", () => {
    expect(buildModalBoxClasses('l', true)).toBe('ux4g-modal-box ux4g-modal-l ux4g-modal-center-content');
  });

  it("size='s' centerContent=false → no center-content", () => {
    const result = buildModalBoxClasses('s', false);
    expect(result).not.toContain('ux4g-modal-center-content');
    expect(result).toBe('ux4g-modal-box ux4g-modal-s');
  });
});

// ── buildAlertClasses ─────────────────────────────────────────────────────────
// Requirements: 4.19

describe('buildAlertClasses', () => {
  it("variant='info' → base + variant only", () => {
    expect(buildAlertClasses('info')).toBe('ux4g-alert ux4g-alert-info');
  });

  it("variant='warning' layout='center' → includes center modifier", () => {
    expect(buildAlertClasses('warning', 'center')).toBe('ux4g-alert ux4g-alert-warning ux4g-alert-center');
  });

  it("variant='error' layout='wide' → includes wide modifier", () => {
    expect(buildAlertClasses('error', 'wide')).toBe('ux4g-alert ux4g-alert-error ux4g-alert-wide');
  });

  it("variant='success' layout='fluid' → no layout modifier", () => {
    const result = buildAlertClasses('success', 'fluid');
    expect(result).not.toContain('ux4g-alert-fluid');
    expect(result).toBe('ux4g-alert ux4g-alert-success');
  });
});

// ── buildContextAlertClasses ──────────────────────────────────────────────────
// Requirements: 4.20

describe('buildContextAlertClasses', () => {
  it("variant='info' → ux4g-context-alert + variant modifier", () => {
    expect(buildContextAlertClasses('info')).toBe('ux4g-context-alert ux4g-alert-info');
  });

  it("variant='error' → ux4g-context-alert + variant modifier", () => {
    expect(buildContextAlertClasses('error')).toBe('ux4g-context-alert ux4g-alert-error');
  });
});

// ── buildAlertContainerClasses ────────────────────────────────────────────────
// Requirements: 4.22

describe('buildAlertContainerClasses', () => {
  it("position='top-right' → base + position", () => {
    expect(buildAlertContainerClasses('top-right')).toBe('ux4g-alert-container ux4g-alert-top-right');
  });

  it("position='bottom-left' → base + position", () => {
    expect(buildAlertContainerClasses('bottom-left')).toBe('ux4g-alert-container ux4g-alert-bottom-left');
  });
});

// ── buildSearchContainerClasses ───────────────────────────────────────────────
// Requirements: 4.24

describe('buildSearchContainerClasses', () => {
  it("size='m' → base + size", () => {
    expect(buildSearchContainerClasses('m')).toBe('ux4g-search-container ux4g-search-m');
  });

  it("size='s' → base + size", () => {
    expect(buildSearchContainerClasses('s')).toBe('ux4g-search-container ux4g-search-s');
  });

  it("size='lg' → base + size", () => {
    expect(buildSearchContainerClasses('lg')).toBe('ux4g-search-container ux4g-search-l');
  });
});
