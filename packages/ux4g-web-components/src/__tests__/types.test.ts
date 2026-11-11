import {
  buildButtonClasses,
  VARIANT_CLASS_MAP,
  SIZE_CLASS_MAP,
  ButtonVariant,
  ButtonSize,
} from '../../src/types';

describe('buildButtonClasses', () => {
  const variants: ButtonVariant[] = [
    'primary',
    'outline-primary',
    'text-primary',
    'tonal-primary',
    'danger',
    'outline-danger',
    'text-danger',
    'tonal-danger',
  ];

  const sizes: ButtonSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];

  describe('variant class mapping', () => {
    variants.forEach((variant) => {
      it(`variant "${variant}" produces class "${VARIANT_CLASS_MAP[variant]}"`, () => {
        const result = buildButtonClasses(variant, 'md', false, false);
        expect(result).toContain(VARIANT_CLASS_MAP[variant]);
      });
    });
  });

  describe('size class mapping', () => {
    sizes.forEach((size) => {
      if (size === 'md') {
        it('size "md" produces no size class', () => {
          const result = buildButtonClasses('primary', 'md', false, false);
          expect(result).not.toMatch(/ux4g-btn-(xl|lg|sm|xs)/);
        });
      } else {
        it(`size "${size}" produces class "${SIZE_CLASS_MAP[size]}"`, () => {
          const result = buildButtonClasses('primary', size, false, false);
          expect(result).toContain(SIZE_CLASS_MAP[size] as string);
        });
      }
    });
  });

  describe('disabled state', () => {
    it('disabled=true adds ux4g-btn-disabled', () => {
      const result = buildButtonClasses('primary', 'md', true, false);
      expect(result).toContain('ux4g-btn-disabled');
    });

    it('disabled=false does not add ux4g-btn-disabled', () => {
      const result = buildButtonClasses('primary', 'md', false, false);
      expect(result).not.toContain('ux4g-btn-disabled');
    });
  });

  describe('loading state', () => {
    it('loading=true adds ux4g-btn-loading', () => {
      const result = buildButtonClasses('primary', 'md', false, true);
      expect(result).toContain('ux4g-btn-loading');
    });

    it('loading=false does not add ux4g-btn-loading', () => {
      const result = buildButtonClasses('primary', 'md', false, false);
      expect(result).not.toContain('ux4g-btn-loading');
    });
  });

  describe('combined disabled + loading state', () => {
    it('disabled=true and loading=true adds both classes', () => {
      const result = buildButtonClasses('primary', 'md', true, true);
      expect(result).toContain('ux4g-btn-disabled');
      expect(result).toContain('ux4g-btn-loading');
    });
  });

  describe('extra class', () => {
    it('appends extra class when provided', () => {
      const result = buildButtonClasses('primary', 'md', false, false, 'rectangle', 'my-custom-class');
      expect(result).toContain('my-custom-class');
    });

    it('does not append extra class when undefined', () => {
      const result = buildButtonClasses('primary', 'md', false, false);
      const classes = result.split(' ');
      expect(classes).toHaveLength(2); // variant class + md size class (Rule 10: md always emits a class)
    });
  });

  describe('class ordering', () => {
    it('variant class is always first', () => {
      const result = buildButtonClasses('danger', 'xl', true, true);
      const classes = result.split(' ');
      expect(classes[0]).toBe('ux4g-btn-danger');
    });

    it('returns space-separated string', () => {
      const result = buildButtonClasses('primary', 'lg', false, false);
      expect(result).toBe('ux4g-btn-primary ux4g-btn-l');
    });
  });

  describe('shape', () => {
    it('pill shape adds ux4g-btn-pill', () => {
      const result = buildButtonClasses('primary', 'md', false, false, 'pill');
      expect(result).toContain('ux4g-btn-pill');
    });

    it('rectangle shape does not add ux4g-btn-pill', () => {
      const result = buildButtonClasses('primary', 'md', false, false, 'rectangle');
      expect(result).not.toContain('ux4g-btn-pill');
    });

    it('undefined shape does not add ux4g-btn-pill', () => {
      const result = buildButtonClasses('primary', 'md', false, false);
      expect(result).not.toContain('ux4g-btn-pill');
    });
  });
});

import {
  buildSpinnerClasses,
  SpinnerVariant,
  SpinnerSize,
  SpinnerType,
} from '../../src/types';

describe('buildSpinnerClasses', () => {
  const variants: SpinnerVariant[] = ['primary', 'inverse', 'danger'];
  const sizes: SpinnerSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];
  const types: SpinnerType[] = ['full', 'split', 'partial'];

  describe('all 45 combinations produce correct class pattern', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        types.forEach((type) => {
          const base = `ux4g-spinner-${variant}-${type}`;
          const normSize = size === 'sm' ? 's' : size === 'lg' ? 'l' : size === 'md' ? 'm' : size;
          const expected = normSize !== 'm' ? `${base} ux4g-spinner-${normSize}` : base;
          it(`buildSpinnerClasses('${variant}', '${size}', '${type}') → '${expected}'`, () => {
            expect(buildSpinnerClasses(variant, size, type)).toBe(expected);
          });
        });
      });
    });
  });

  describe('default combination', () => {
    it("buildSpinnerClasses('primary', 'md', 'full') → 'ux4g-spinner-primary-full' (no size class for md)", () => {
      expect(buildSpinnerClasses('primary', 'md', 'full')).toBe('ux4g-spinner-primary-full');
    });
  });

  describe('non-md sizes add a separate size class', () => {
    it("buildSpinnerClasses('primary', 'xl', 'full') → 'ux4g-spinner-primary-full ux4g-spinner-xl'", () => {
      expect(buildSpinnerClasses('primary', 'xl', 'full')).toBe('ux4g-spinner-primary-full ux4g-spinner-xl');
    });
    it("buildSpinnerClasses('danger', 'sm', 'split') → 'ux4g-spinner-danger-split ux4g-spinner-s'", () => {
      expect(buildSpinnerClasses('danger', 'sm', 'split')).toBe('ux4g-spinner-danger-split ux4g-spinner-s');
    });
  });

  describe('extra class parameter', () => {
    it('appends extra class when provided (md — no size class)', () => {
      const result = buildSpinnerClasses('primary', 'md', 'full', 'my-extra');
      expect(result).toBe('ux4g-spinner-primary-full my-extra');
    });

    it('appends extra class when provided (non-md — size class present)', () => {
      const result = buildSpinnerClasses('primary', 'xl', 'full', 'my-extra');
      expect(result).toBe('ux4g-spinner-primary-full ux4g-spinner-xl my-extra');
    });

    it('does not append extra class when not provided', () => {
      const result = buildSpinnerClasses('primary', 'md', 'full');
      expect(result).toBe('ux4g-spinner-primary-full');
      expect(result).not.toMatch(/ $/); // no trailing space
    });

    it('does not append extra class when undefined', () => {
      const result = buildSpinnerClasses('danger', 'xs', 'partial', undefined);
      expect(result).toBe('ux4g-spinner-danger-partial ux4g-spinner-xs');
    });
  });
});

import * as fc from 'fast-check';

/**
 * Property 1: Spinner class string matches correct pattern
 * Validates: Requirements 2a.5, 3.5
 * Tag: Feature: ux4g-spinner-focus-ring, Property 1
 */
describe('Property 1: Spinner class string matches compound pattern', () => {
  it('buildSpinnerClasses(variant, size, type) returns ux4g-spinner-${variant}-${type} with optional ux4g-spinner-${size} for non-md', () => {
    const variantArb = fc.constantFrom<SpinnerVariant>('primary', 'inverse', 'danger');
    const sizeArb    = fc.constantFrom<SpinnerSize>('xl', 'lg', 'md', 'sm', 'xs');
    const typeArb    = fc.constantFrom<SpinnerType>('full', 'split', 'partial');

    fc.assert(
      fc.property(variantArb, sizeArb, typeArb, (variant, size, type) => {
        const result = buildSpinnerClasses(variant, size, type);
        const base = `ux4g-spinner-${variant}-${type}`;
        const normSize = size === 'sm' ? 's' : size === 'lg' ? 'l' : size === 'md' ? 'm' : size;
        if (normSize === 'm') {
          return result === base;
        } else {
          return result === `${base} ux4g-spinner-${normSize}`;
        }
      }),
      { numRuns: 20 }
    );
  });
});
