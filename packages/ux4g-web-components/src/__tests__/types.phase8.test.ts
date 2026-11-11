import {
  buildAccessibilityBarClasses,
  buildAccordionClasses,
  buildStepperClasses,
  buildSliderFieldClasses,
  buildDrawerClasses,
} from '../../src/types';

// ── buildAccessibilityBarClasses ──────────────────────────────────────────────
// Requirements: 4.1

describe('buildAccessibilityBarClasses', () => {
  it('no args → ux4g-topbar', () => {
    expect(buildAccessibilityBarClasses()).toBe('ux4g-topbar');
  });

  it("extra='my-topbar' → ux4g-topbar my-topbar", () => {
    expect(buildAccessibilityBarClasses('my-topbar')).toBe('ux4g-topbar my-topbar');
  });
});

// ── buildAccordionClasses ─────────────────────────────────────────────────────
// Requirements: 4.4

describe('buildAccordionClasses', () => {
  it('no args → ux4g-accordion', () => {
    expect(buildAccordionClasses()).toBe('ux4g-accordion');
  });

  it("arrowPosition='right' → ux4g-accordion ux4g-accordion-arrow-right", () => {
    expect(buildAccordionClasses('right')).toBe('ux4g-accordion ux4g-accordion-arrow-right');
  });

  it("arrowPosition='left' → ux4g-accordion ux4g-accordion-arrow-left", () => {
    expect(buildAccordionClasses('left')).toBe('ux4g-accordion ux4g-accordion-arrow-left');
  });

  it("arrowPosition='right' variant='bordered' → ux4g-accordion ux4g-accordion-arrow-right ux4g-accordion-bordered", () => {
    expect(buildAccordionClasses('right', 'bordered')).toBe('ux4g-accordion ux4g-accordion-arrow-right ux4g-accordion-bordered');
  });

  it("arrowPosition='left' variant='bordered' → ux4g-accordion ux4g-accordion-arrow-left ux4g-accordion-bordered", () => {
    expect(buildAccordionClasses('left', 'bordered')).toBe('ux4g-accordion ux4g-accordion-arrow-left ux4g-accordion-bordered');
  });

  it("arrowPosition='left' variant='bordered' extra='my-acc' → full class string", () => {
    expect(buildAccordionClasses('left', 'bordered', 'my-acc')).toBe('ux4g-accordion ux4g-accordion-arrow-left ux4g-accordion-bordered my-acc');
  });
});

// ── buildStepperClasses ───────────────────────────────────────────────────────
// Requirements: 4.9

describe('buildStepperClasses', () => {
  it('no args → ux4g-stepper', () => {
    expect(buildStepperClasses()).toBe('ux4g-stepper');
  });

  it("orientation='horizontal' → ux4g-stepper (no modifier for default alignment)", () => {
    expect(buildStepperClasses('horizontal')).toBe('ux4g-stepper');
  });

  it("orientation='horizontal' alignment='center' → ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center", () => {
    expect(buildStepperClasses('horizontal', 'center')).toBe('ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center');
  });

  it("orientation='horizontal' alignment='left' → ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-left", () => {
    expect(buildStepperClasses('horizontal', 'left')).toBe('ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-left');
  });

  it("orientation='vertical' → ux4g-stepper ux4g-stepper-vertical", () => {
    expect(buildStepperClasses('vertical')).toBe('ux4g-stepper ux4g-stepper-vertical');
  });

  it("orientation='vertical' alignment='center' → ux4g-stepper ux4g-stepper-vertical (alignment ignored when vertical)", () => {
    expect(buildStepperClasses('vertical', 'center')).toBe('ux4g-stepper ux4g-stepper-vertical');
  });

  it("orientation='vertical' alignment='left' → ux4g-stepper ux4g-stepper-vertical (alignment ignored when vertical)", () => {
    expect(buildStepperClasses('vertical', 'left')).toBe('ux4g-stepper ux4g-stepper-vertical');
  });

  it("orientation='horizontal' alignment='default' variant='bottom-line' → ux4g-stepper ux4g-stepper-bottom-line", () => {
    expect(buildStepperClasses('horizontal', 'default', 'bottom-line')).toBe('ux4g-stepper ux4g-stepper-bottom-line');
  });

  it("orientation='horizontal' alignment='default' variant='mobile' → ux4g-stepper ux4g-stepper-mobile", () => {
    expect(buildStepperClasses('horizontal', 'default', 'mobile')).toBe('ux4g-stepper ux4g-stepper-mobile');
  });

  it("orientation='horizontal' alignment='default' variant='progress' → ux4g-stepper ux4g-stepper-progress", () => {
    expect(buildStepperClasses('horizontal', 'default', 'progress')).toBe('ux4g-stepper ux4g-stepper-progress');
  });

  it("orientation='horizontal' alignment='default' variant='default' size='s' → ux4g-stepper ux4g-stepper-s", () => {
    expect(buildStepperClasses('horizontal', 'default', 'default', 's')).toBe('ux4g-stepper ux4g-stepper-s');
  });

  it("orientation='horizontal' alignment='center' variant='progress' size='s' → full class string", () => {
    expect(buildStepperClasses('horizontal', 'center', 'progress', 's')).toBe(
      'ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center ux4g-stepper-progress ux4g-stepper-s'
    );
  });
});

// ── buildSliderFieldClasses ───────────────────────────────────────────────────
// Requirements: 4.11

describe('buildSliderFieldClasses', () => {
  it('no args → ux4g-slider-field', () => {
    expect(buildSliderFieldClasses()).toBe('ux4g-slider-field');
  });

  it("size='sm' → ux4g-slider-field (no size modifier or s modifier)", () => {
    expect(buildSliderFieldClasses('sm')).toBe('ux4g-slider-field ux4g-slider-s');
  });

  it("size='md' → ux4g-slider-field ux4g-slider-m", () => {
    expect(buildSliderFieldClasses('md')).toBe('ux4g-slider-field ux4g-slider-m');
  });

  it("size='md' extra='x' → ux4g-slider-field ux4g-slider-m x", () => {
    expect(buildSliderFieldClasses('md', 'x')).toBe('ux4g-slider-field ux4g-slider-m x');
  });
});

// ── buildDrawerClasses ────────────────────────────────────────────────────────
// Requirements: 4.13

describe('buildDrawerClasses', () => {
  it("placement='right' → ux4g-drawer ux4g-drawer-right", () => {
    expect(buildDrawerClasses('right')).toBe('ux4g-drawer ux4g-drawer-right');
  });

  it("placement='left' → ux4g-drawer ux4g-drawer-left", () => {
    expect(buildDrawerClasses('left')).toBe('ux4g-drawer ux4g-drawer-left');
  });

  it("placement='top' → ux4g-drawer ux4g-drawer-top", () => {
    expect(buildDrawerClasses('top')).toBe('ux4g-drawer ux4g-drawer-top');
  });

  it("placement='bottom' → ux4g-drawer ux4g-drawer-bottom", () => {
    expect(buildDrawerClasses('bottom')).toBe('ux4g-drawer ux4g-drawer-bottom');
  });

  it("placement='right' open=true → ux4g-drawer ux4g-drawer-right ux4g-drawer-open", () => {
    expect(buildDrawerClasses('right', true)).toBe('ux4g-drawer ux4g-drawer-right ux4g-drawer-open');
  });

  it("placement='left' open=false → ux4g-drawer ux4g-drawer-left (no open modifier)", () => {
    expect(buildDrawerClasses('left', false)).toBe('ux4g-drawer ux4g-drawer-left');
  });

  it("placement='right' open=true extra='my' → ux4g-drawer ux4g-drawer-right ux4g-drawer-open my", () => {
    expect(buildDrawerClasses('right', true, 'my')).toBe('ux4g-drawer ux4g-drawer-right ux4g-drawer-open my');
  });
});
