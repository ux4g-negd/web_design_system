import {
  buildCheckboxClasses,
  buildRadioClasses,
  buildSwitchClasses,
  buildCardClasses,
  buildInputContainerClasses,
} from '../../src/types';

// ── buildCheckboxClasses ──────────────────────────────────────────────────────

describe('buildCheckboxClasses', () => {
  it('md with no error → base + size classes only', () => {
    expect(buildCheckboxClasses('md')).toBe('ux4g-checkbox ux4g-checkbox-m');
  });

  it('sm with error=true → includes error class', () => {
    expect(buildCheckboxClasses('sm', true)).toBe('ux4g-checkbox ux4g-checkbox-s ux4g-checkbox-error');
  });

  it('lg with error=false → no error class', () => {
    expect(buildCheckboxClasses('lg', false)).toBe('ux4g-checkbox ux4g-checkbox-l');
  });
});

// ── buildRadioClasses ─────────────────────────────────────────────────────────

describe('buildRadioClasses', () => {
  it('md with no error → base + size classes only', () => {
    expect(buildRadioClasses('md')).toBe('ux4g-radio ux4g-radio-m');
  });

  it('lg with error=true → includes error class', () => {
    expect(buildRadioClasses('lg', true)).toBe('ux4g-radio ux4g-radio-l ux4g-radio-error');
  });

  it('sm with error=false → no error class', () => {
    expect(buildRadioClasses('sm', false)).toBe('ux4g-radio ux4g-radio-s');
  });
});

// ── buildSwitchClasses ────────────────────────────────────────────────────────

describe('buildSwitchClasses', () => {
  it('md → ux4g-switch ux4g-switch-m', () => {
    expect(buildSwitchClasses('md')).toBe('ux4g-switch ux4g-switch-m');
  });

  it('sm → ux4g-switch ux4g-switch-s', () => {
    expect(buildSwitchClasses('sm')).toBe('ux4g-switch ux4g-switch-s');
  });

  it('lg → ux4g-switch ux4g-switch-l', () => {
    expect(buildSwitchClasses('lg')).toBe('ux4g-switch ux4g-switch-l');
  });
});

// ── buildCardClasses ──────────────────────────────────────────────────────────

describe('buildCardClasses', () => {
  it('solid + vertical → base + variant + layout classes', () => {
    expect(buildCardClasses('solid', 'vertical')).toBe('ux4g-card ux4g-card-solid ux4g-card-vertical');
  });

  it('outline + horizontal → base + variant + layout classes', () => {
    expect(buildCardClasses('outline', 'horizontal')).toBe('ux4g-card ux4g-card-outline ux4g-card-horizontal');
  });

  it('no-fill + vertical → base + variant + layout classes', () => {
    expect(buildCardClasses('no-fill', 'vertical')).toBe('ux4g-card ux4g-card-no-fill ux4g-card-vertical');
  });
});

// ── buildInputContainerClasses ────────────────────────────────────────────────

describe('buildInputContainerClasses', () => {
  it('md + default → base + size + state classes', () => {
    expect(buildInputContainerClasses('md', 'default')).toBe('ux4g-input-container ux4g-input-m ux4g-input-default');
  });

  it('lg + error → base + size + state classes', () => {
    expect(buildInputContainerClasses('lg', 'error')).toBe('ux4g-input-container ux4g-input-l ux4g-input-error');
  });

  it('sm + success → base + size + state classes', () => {
    expect(buildInputContainerClasses('sm', 'success')).toBe('ux4g-input-container ux4g-input-s ux4g-input-success');
  });

  it('xl + warning → base + size + state classes', () => {
    expect(buildInputContainerClasses('xl', 'warning')).toBe('ux4g-input-container ux4g-input-xl ux4g-input-warning');
  });
});
