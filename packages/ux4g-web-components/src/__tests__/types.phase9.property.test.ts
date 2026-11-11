// src/__tests__/types.phase9.property.test.ts
// Property-based tests for all Phase 9 build functions
// Requirements: 38.1-38.45

import * as fc from 'fast-check';
import {
  DateTimePickerMode,
  StatusPipelineOrientation,
  StatusPipelineAlignment,
  StatusPipelineVariant,
  StatusPipelineSize,
  JourneyTimelineOrientation,
  OtpInputState,
  FileUploadState,
  ProgressIndicatorType,
  DraftStatusBannerVariant,
  SlaProgressIndicatorType,
  ChipGroupVariant,
  SocialLinksSize,
  buildDateTimePickerClasses,
  buildStatusPipelineClasses,
  buildJourneyTimelineClasses,
  buildFormFieldGroupClasses,
  buildOtpInputClasses,
  buildFileUploadClasses,
  buildProgressIndicatorClasses,
  buildFeedbackClasses,
  buildDraftStatusBannerClasses,
  buildSlaProgressIndicatorClasses,
  buildCarouselClasses,
  buildEmptyStateClasses,
  buildChipGroupClasses,
  buildNavbarClasses,
  buildSocialLinksClasses,
} from '../../src/types';

// Helper: split result into tokens
const tokens = (s: string) => s.split(' ');
const hasDuplicates = (arr: string[]) => new Set(arr).size !== arr.length;

// ── Property 1: DateTimePicker ────────────────────────────────────────────────
// **Validates: Requirements 38.1-38.3**
describe('Property 1: DateTimePicker class is exactly the correct base class for each mode', () => {
  it('mode determines class exactly, mutually exclusive, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<DateTimePickerMode>('date', 'time'),
        (mode) => {
          const result = buildDateTimePickerClasses(mode);
          const toks = tokens(result);
          if (mode === 'date') {
            expect(result).toBe('ux4g-date-picker-container');
          } else {
            expect(result).toBe('ux4g-time-picker-container');
          }
          // never contains both
          expect(toks).not.toContain(
            mode === 'date' ? 'ux4g-time-picker-container' : 'ux4g-date-picker-container'
          );
          // no duplicates
          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 2: StatusPipeline ────────────────────────────────────────────────
// **Validates: Requirements 38.4-38.12**
describe('Property 2: StatusPipeline class string contains required tokens and correctly applies all modifiers', () => {
  it('base token always present, orientation/alignment/variant/size toggle correctly, alignment ignored when vertical, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<StatusPipelineOrientation>('horizontal', 'vertical'),
        fc.constantFrom<StatusPipelineAlignment>('default', 'center', 'left'),
        fc.constantFrom<StatusPipelineVariant>('default', 'bottom-line', 'bottom-line-fill', 'mobile', 'progress'),
        fc.constantFrom<StatusPipelineSize>('default', 's'),
        (orientation, alignment, variant, size) => {
          const result = buildStatusPipelineClasses(orientation, alignment, variant, size);
          const toks = tokens(result);

          // always contains base
          expect(toks).toContain('ux4g-status-pipeline-stepper');

          if (orientation === 'vertical') {
            expect(toks).toContain('ux4g-status-pipeline-vertical');
            // alignment ignored — no horizontal, center, or left classes
            expect(toks).not.toContain('ux4g-status-pipeline-horizontal');
            expect(toks).not.toContain('ux4g-status-pipeline-center');
            expect(toks).not.toContain('ux4g-status-pipeline-left');
          } else {
            // horizontal
            expect(toks).not.toContain('ux4g-status-pipeline-vertical');
            if (alignment === 'center') {
              expect(toks).toContain('ux4g-status-pipeline-horizontal');
              expect(toks).toContain('ux4g-status-pipeline-center');
            } else if (alignment === 'left') {
              expect(toks).toContain('ux4g-status-pipeline-horizontal');
              expect(toks).toContain('ux4g-status-pipeline-left');
            }
          }

          if (variant === 'bottom-line-fill') {
            expect(toks).toContain('ux4g-status-pipeline-bottom-line');
            expect(toks).toContain('ux4g-status-pipeline-bottom-line-fill');
          } else if (variant === 'bottom-line') {
            expect(toks).toContain('ux4g-status-pipeline-bottom-line');
            expect(toks).not.toContain('ux4g-status-pipeline-bottom-line-fill');
          } else if (variant === 'mobile') {
            expect(toks).toContain('ux4g-status-pipeline-mobile');
          } else if (variant === 'progress') {
            expect(toks).toContain('ux4g-status-pipeline-progress');
          }

          if (size === 's') {
            expect(toks).toContain('ux4g-status-pipeline-s');
          }

          // no duplicates
          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 3: JourneyTimeline ───────────────────────────────────────────────
// **Validates: Requirements 38.13-38.15**
describe('Property 3: JourneyTimeline class string always contains base token and exactly one orientation modifier', () => {
  it('base always present, exactly one orientation modifier, mutually exclusive, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<JourneyTimelineOrientation>('vertical', 'horizontal'),
        (orientation) => {
          const result = buildJourneyTimelineClasses(orientation);
          const toks = tokens(result);

          expect(toks).toContain('ux4g-journey-timeline');

          if (orientation === 'vertical') {
            expect(toks).toContain('ux4g-journey-timeline--vertical');
            expect(toks).not.toContain('ux4g-journey-timeline--horizontal');
          } else {
            expect(toks).toContain('ux4g-journey-timeline--horizontal');
            expect(toks).not.toContain('ux4g-journey-timeline--vertical');
          }

          // no duplicates
          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 4: Single-class wrappers ─────────────────────────────────────────
// **Validates: Requirements 38.16-38.17, 38.28-38.29, 38.34-38.35, 38.39**
describe('Property 4: Single-class wrappers always return exactly their base class', () => {
  it('each single-class wrapper returns exactly its base class, extra appended, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.option(fc.string({ minLength: 1 }).filter(s => !s.includes(' '))),
        (extra) => {
          const extraArg = extra ?? undefined;

          // buildFormFieldGroupClasses
          const formResult = buildFormFieldGroupClasses(extraArg);
          const formToks = tokens(formResult);
          expect(formToks).toContain('ux4g-form-group');
          if (extraArg) expect(formToks).toContain(extraArg);
          expect(hasDuplicates(formToks)).toBe(false);

          // buildFeedbackClasses
          const feedbackResult = buildFeedbackClasses(extraArg);
          const feedbackToks = tokens(feedbackResult);
          expect(feedbackToks).toContain('ux4g-feedback');
          if (extraArg) expect(feedbackToks).toContain(extraArg);
          expect(hasDuplicates(feedbackToks)).toBe(false);

          // buildCarouselClasses
          const carouselResult = buildCarouselClasses(extraArg);
          const carouselToks = tokens(carouselResult);
          expect(carouselToks).toContain('ux4g-carousel');
          if (extraArg) expect(carouselToks).toContain(extraArg);
          expect(hasDuplicates(carouselToks)).toBe(false);

          // buildEmptyStateClasses
          const emptyResult = buildEmptyStateClasses(extraArg);
          const emptyToks = tokens(emptyResult);
          expect(emptyToks).toContain('ux4g-empty-state');
          if (extraArg) expect(emptyToks).toContain(extraArg);
          expect(hasDuplicates(emptyToks)).toBe(false);

          // buildNavbarClasses
          const navbarResult = buildNavbarClasses(extraArg);
          const navbarToks = tokens(navbarResult);
          expect(navbarToks).toContain('ux4g-navbar');
          if (extraArg) expect(navbarToks).toContain(extraArg);
          expect(hasDuplicates(navbarToks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 5: OTP Input ─────────────────────────────────────────────────────
// **Validates: Requirements 38.18-38.22**
describe('Property 5: OTP Input class string contains base token and correctly toggles state modifiers', () => {
  it('base always present, state modifiers mutually exclusive, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<OtpInputState>('default', 'success', 'error', 'locked'),
        (state) => {
          const result = buildOtpInputClasses(state);
          const toks = tokens(result);

          expect(toks).toContain('ux4g-otp');

          if (state === 'default') {
            expect(toks).not.toContain('ux4g-otp-success');
            expect(toks).not.toContain('ux4g-otp-error');
            expect(toks).not.toContain('ux4g-otp-locked');
          } else if (state === 'success') {
            expect(toks).toContain('ux4g-otp-success');
            expect(toks).not.toContain('ux4g-otp-error');
            expect(toks).not.toContain('ux4g-otp-locked');
          } else if (state === 'error') {
            expect(toks).toContain('ux4g-otp-error');
            expect(toks).not.toContain('ux4g-otp-success');
            expect(toks).not.toContain('ux4g-otp-locked');
          } else if (state === 'locked') {
            expect(toks).toContain('ux4g-otp-locked');
            expect(toks).not.toContain('ux4g-otp-success');
            expect(toks).not.toContain('ux4g-otp-error');
          }

          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 6: File Upload ───────────────────────────────────────────────────
// **Validates: Requirements 38.23-38.25**
describe('Property 6: File Upload class string contains base token and correctly appends state modifier', () => {
  it('base always present, state modifier appended when provided, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.option(
          fc.constantFrom<FileUploadState>(
            'default', 'default-vle', 'selecting', 'scanning', 'uploaded', 'uploaded-vle', 'error'
          )
        ),
        (state) => {
          const stateArg = state ?? undefined;
          const result = buildFileUploadClasses(stateArg);
          const toks = tokens(result);

          expect(toks).toContain('ux4g-upload');

          if (stateArg) {
            expect(toks).toContain(`ux4g-upload-state-${stateArg}`);
          } else {
            expect(result).toBe('ux4g-upload');
          }

          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 7: Progress Indicator ───────────────────────────────────────────
// **Validates: Requirements 38.26-38.27**
describe('Property 7: Progress Indicator class is exactly the correct base class for each type', () => {
  it('type determines class exactly, mutually exclusive, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ProgressIndicatorType>('bar', 'circle'),
        (type) => {
          const result = buildProgressIndicatorClasses(type);
          const toks = tokens(result);

          if (type === 'bar') {
            expect(result).toBe('ux4g-progress-bar');
            expect(toks).not.toContain('ux4g-progress-circle');
          } else {
            expect(result).toBe('ux4g-progress-circle');
            expect(toks).not.toContain('ux4g-progress-bar');
          }

          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 8: Draft Status Banner ──────────────────────────────────────────
// **Validates: Requirements 38.30-38.32**
describe('Property 8: Draft Status Banner class is exactly the correct variant class with vendor typo preserved', () => {
  it('variant determines class exactly, vendor typo preserved, mutually exclusive, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<DraftStatusBannerVariant>('default', 'auto', 'success'),
        (variant) => {
          const result = buildDraftStatusBannerClasses(variant);
          const toks = tokens(result);

          if (variant === 'default') {
            expect(result).toBe('ux4g-daft-staus-bar');
          } else if (variant === 'auto') {
            expect(result).toBe('ux4g-auto-daft-staus-bar');
          } else {
            expect(result).toBe('ux4g-success-daft-staus-bar');
          }

          // never contains more than one variant class
          const variantClasses = toks.filter(t =>
            t === 'ux4g-daft-staus-bar' ||
            t === 'ux4g-auto-daft-staus-bar' ||
            t === 'ux4g-success-daft-staus-bar'
          );
          expect(variantClasses.length).toBe(1);

          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 9: SLA Progress Indicator ───────────────────────────────────────
// **Validates: Requirements 38.33**
describe('Property 9: SLA Progress Indicator class is exactly ux4g-sla-{type}', () => {
  it('result is exactly ux4g-sla-{type}, mutually exclusive, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<SlaProgressIndicatorType>('circle', 'linear', 'badge'),
        (type) => {
          const result = buildSlaProgressIndicatorClasses(type);
          const toks = tokens(result);

          expect(result).toBe(`ux4g-sla-${type}`);

          // never contains more than one type class
          const typeClasses = toks.filter(t =>
            t === 'ux4g-sla-circle' || t === 'ux4g-sla-linear' || t === 'ux4g-sla-badge'
          );
          expect(typeClasses.length).toBe(1);

          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 10: Chip Group ───────────────────────────────────────────────────
// **Validates: Requirements 38.36-38.38**
describe('Property 10: Chip Group class string contains correct variant class and correctly toggles active', () => {
  it('variant classes mutually exclusive, active toggles correctly, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ChipGroupVariant>('filter', 'choice'),
        fc.boolean(),
        (variant, active) => {
          const result = buildChipGroupClasses(variant, active);
          const toks = tokens(result);

          if (variant === 'filter') {
            expect(toks).toContain('ux4g-filter-chip-group');
            expect(toks).not.toContain('ux4g-choice-chip-group');
          } else {
            expect(toks).toContain('ux4g-choice-chip-group');
            expect(toks).not.toContain('ux4g-filter-chip-group');
          }

          if (active) {
            expect(toks).toContain('active');
          } else {
            expect(toks).not.toContain('active');
          }

          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 11: Social Links ─────────────────────────────────────────────────
// **Validates: Requirements 38.40-38.43**
describe('Property 11: Social Links class always contains ux4g-d-flex and exactly one gap class', () => {
  it('ux4g-d-flex always present, exactly one gap class, mutually exclusive, no duplicates', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<SocialLinksSize>('sm', 'md', 'lg'),
        (size) => {
          const result = buildSocialLinksClasses(size);
          const toks = tokens(result);

          expect(toks).toContain('ux4g-d-flex');

          if (size === 'sm') {
            expect(toks).toContain('ux4g-gap-xs');
            expect(toks).not.toContain('ux4g-gap-s');
            expect(toks).not.toContain('ux4g-gap-m');
          } else if (size === 'md') {
            expect(toks).toContain('ux4g-gap-s');
            expect(toks).not.toContain('ux4g-gap-xs');
            expect(toks).not.toContain('ux4g-gap-m');
          } else {
            expect(toks).toContain('ux4g-gap-m');
            expect(toks).not.toContain('ux4g-gap-xs');
            expect(toks).not.toContain('ux4g-gap-s');
          }

          // exactly two tokens when no extra
          expect(toks.length).toBe(2);

          expect(hasDuplicates(toks)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ── Property 12: Extra param ──────────────────────────────────────────────────
// **Validates: Requirements 38.44-38.45**
describe('Property 12: Extra param is always appended as a space-separated token and never duplicates existing tokens for all Phase 9 build functions', () => {
  it('extra token appended exactly once, no duplicates, across all 15 build functions', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter(s => !s.includes(' ')),
        (extra) => {
          const cases: string[] = [
            buildDateTimePickerClasses('date', extra),
            buildDateTimePickerClasses('time', extra),
            buildStatusPipelineClasses('horizontal', 'default', 'default', 'default', extra),
            buildStatusPipelineClasses('vertical', 'default', 'default', 'default', extra),
            buildJourneyTimelineClasses('vertical', extra),
            buildJourneyTimelineClasses('horizontal', extra),
            buildFormFieldGroupClasses(extra),
            buildOtpInputClasses('success', extra),
            buildFileUploadClasses('error', extra),
            buildProgressIndicatorClasses('bar', extra),
            buildProgressIndicatorClasses('circle', extra),
            buildFeedbackClasses(extra),
            buildDraftStatusBannerClasses('default', extra),
            buildDraftStatusBannerClasses('auto', extra),
            buildDraftStatusBannerClasses('success', extra),
            buildSlaProgressIndicatorClasses('circle', extra),
            buildCarouselClasses(extra),
            buildEmptyStateClasses(extra),
            buildChipGroupClasses('filter', false, extra),
            buildNavbarClasses(extra),
            buildSocialLinksClasses('md', extra),
          ];

          for (const result of cases) {
            const toks = tokens(result);
            // extra token is present
            expect(toks).toContain(extra);
            // extra token appears exactly once
            expect(toks.filter(t => t === extra).length).toBe(1);
            // no duplicates overall
            expect(hasDuplicates(toks)).toBe(false);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
