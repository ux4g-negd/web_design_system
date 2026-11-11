// src/__tests__/types.phase9.test.ts
// Unit tests for all Phase 9 build functions
// Requirements: 18.1-18.17

import {
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

// ── DateTimePicker ────────────────────────────────────────────────────────────
describe('buildDateTimePickerClasses', () => {
  it("mode='date' -> 'ux4g-date-picker-container'", () => {
    expect(buildDateTimePickerClasses('date')).toBe('ux4g-date-picker-container');
  });
  it("mode='time' -> 'ux4g-time-picker-container'", () => {
    expect(buildDateTimePickerClasses('time')).toBe('ux4g-time-picker-container');
  });
  it("mode='date' with extra -> 'ux4g-date-picker-container my'", () => {
    expect(buildDateTimePickerClasses('date', 'my')).toBe('ux4g-date-picker-container my');
  });
});

// ── StatusPipeline ────────────────────────────────────────────────────────────
describe('buildStatusPipelineClasses', () => {
  it('no args -> base only', () => {
    expect(buildStatusPipelineClasses()).toBe('ux4g-status-pipeline-stepper');
  });
  it("orientation='horizontal' -> base only", () => {
    expect(buildStatusPipelineClasses('horizontal')).toBe('ux4g-status-pipeline-stepper');
  });
  it("orientation='horizontal', alignment='center'", () => {
    expect(buildStatusPipelineClasses('horizontal', 'center')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal ux4g-status-pipeline-center'
    );
  });
  it("orientation='horizontal', alignment='left'", () => {
    expect(buildStatusPipelineClasses('horizontal', 'left')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal ux4g-status-pipeline-left'
    );
  });
  it("orientation='vertical' -> vertical class only", () => {
    expect(buildStatusPipelineClasses('vertical')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical'
    );
  });
  it("orientation='vertical', alignment='center' -> alignment ignored", () => {
    expect(buildStatusPipelineClasses('vertical', 'center')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical'
    );
  });
  it("variant='bottom-line'", () => {
    expect(buildStatusPipelineClasses('horizontal', 'default', 'bottom-line')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-bottom-line'
    );
  });
  it("variant='bottom-line-fill' adds both bottom-line and bottom-line-fill", () => {
    expect(buildStatusPipelineClasses('horizontal', 'default', 'bottom-line-fill')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-bottom-line ux4g-status-pipeline-bottom-line-fill'
    );
  });
  it("variant='mobile'", () => {
    expect(buildStatusPipelineClasses('horizontal', 'default', 'mobile')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-mobile'
    );
  });
  it("variant='progress'", () => {
    expect(buildStatusPipelineClasses('horizontal', 'default', 'progress')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-progress'
    );
  });
  it("size='s'", () => {
    expect(buildStatusPipelineClasses('horizontal', 'default', 'default', 's')).toBe(
      'ux4g-status-pipeline-stepper ux4g-status-pipeline-s'
    );
  });
});

// ── JourneyTimeline ───────────────────────────────────────────────────────────
describe('buildJourneyTimelineClasses', () => {
  it('no args -> vertical default', () => {
    expect(buildJourneyTimelineClasses()).toBe(
      'ux4g-journey-timeline ux4g-journey-timeline--vertical'
    );
  });
  it("orientation='vertical'", () => {
    expect(buildJourneyTimelineClasses('vertical')).toBe(
      'ux4g-journey-timeline ux4g-journey-timeline--vertical'
    );
  });
  it("orientation='horizontal'", () => {
    expect(buildJourneyTimelineClasses('horizontal')).toBe(
      'ux4g-journey-timeline ux4g-journey-timeline--horizontal'
    );
  });
  it("orientation='vertical' with extra", () => {
    expect(buildJourneyTimelineClasses('vertical', 'my')).toBe(
      'ux4g-journey-timeline ux4g-journey-timeline--vertical my'
    );
  });
});

// ── FormFieldGroup ────────────────────────────────────────────────────────────
describe('buildFormFieldGroupClasses', () => {
  it('no args -> ux4g-form-group', () => {
    expect(buildFormFieldGroupClasses()).toBe('ux4g-form-group');
  });
  it('with extra', () => {
    expect(buildFormFieldGroupClasses('my')).toBe('ux4g-form-group my');
  });
});

// ── OtpInput ─────────────────────────────────────────────────────────────────
describe('buildOtpInputClasses', () => {
  it('no args -> ux4g-otp', () => {
    expect(buildOtpInputClasses()).toBe('ux4g-otp');
  });
  it("state='default' -> no modifier", () => {
    expect(buildOtpInputClasses('default')).toBe('ux4g-otp');
  });
  it("state='success'", () => {
    expect(buildOtpInputClasses('success')).toBe('ux4g-otp ux4g-otp-success');
  });
  it("state='error'", () => {
    expect(buildOtpInputClasses('error')).toBe('ux4g-otp ux4g-otp-error');
  });
  it("state='locked'", () => {
    expect(buildOtpInputClasses('locked')).toBe('ux4g-otp ux4g-otp-locked');
  });
});

// ── FileUpload ────────────────────────────────────────────────────────────────
describe('buildFileUploadClasses', () => {
  it('no args -> ux4g-upload', () => {
    expect(buildFileUploadClasses()).toBe('ux4g-upload');
  });
  it("state='default'", () => {
    expect(buildFileUploadClasses('default')).toBe('ux4g-upload ux4g-upload-state-default');
  });
  it("state='selecting'", () => {
    expect(buildFileUploadClasses('selecting')).toBe('ux4g-upload ux4g-upload-state-selecting');
  });
  it("state='error'", () => {
    expect(buildFileUploadClasses('error')).toBe('ux4g-upload ux4g-upload-state-error');
  });
  it("state='uploaded-vle' with extra", () => {
    expect(buildFileUploadClasses('uploaded-vle', 'my')).toBe(
      'ux4g-upload ux4g-upload-state-uploaded-vle my'
    );
  });
});

// ── ProgressIndicator ─────────────────────────────────────────────────────────
describe('buildProgressIndicatorClasses', () => {
  it("type='bar' -> 'ux4g-progress-bar'", () => {
    expect(buildProgressIndicatorClasses('bar')).toBe('ux4g-progress-bar');
  });
  it("type='circle' -> 'ux4g-progress-circle'", () => {
    expect(buildProgressIndicatorClasses('circle')).toBe('ux4g-progress-circle');
  });
  it("type='bar' with extra", () => {
    expect(buildProgressIndicatorClasses('bar', 'my')).toBe('ux4g-progress-bar my');
  });
});

// ── Feedback ─────────────────────────────────────────────────────────────────
describe('buildFeedbackClasses', () => {
  it('no args -> ux4g-feedback', () => {
    expect(buildFeedbackClasses()).toBe('ux4g-feedback');
  });
  it('with extra', () => {
    expect(buildFeedbackClasses('my')).toBe('ux4g-feedback my');
  });
});

// ── DraftStatusBanner ─────────────────────────────────────────────────────────
describe('buildDraftStatusBannerClasses', () => {
  it("no args -> 'ux4g-daft-staus-bar' (vendor typo preserved)", () => {
    expect(buildDraftStatusBannerClasses()).toBe('ux4g-daft-staus-bar');
  });
  it("variant='default' -> 'ux4g-daft-staus-bar'", () => {
    expect(buildDraftStatusBannerClasses('default')).toBe('ux4g-daft-staus-bar');
  });
  it("variant='auto' -> 'ux4g-auto-daft-staus-bar'", () => {
    expect(buildDraftStatusBannerClasses('auto')).toBe('ux4g-auto-daft-staus-bar');
  });
  it("variant='success' -> 'ux4g-success-daft-staus-bar'", () => {
    expect(buildDraftStatusBannerClasses('success')).toBe('ux4g-success-daft-staus-bar');
  });
});

// ── SlaProgressIndicator ──────────────────────────────────────────────────────
describe('buildSlaProgressIndicatorClasses', () => {
  it("type='circle' -> 'ux4g-sla-circle'", () => {
    expect(buildSlaProgressIndicatorClasses('circle')).toBe('ux4g-sla-circle');
  });
  it("type='linear' -> 'ux4g-sla-linear'", () => {
    expect(buildSlaProgressIndicatorClasses('linear')).toBe('ux4g-sla-linear');
  });
  it("type='badge' -> 'ux4g-sla-badge'", () => {
    expect(buildSlaProgressIndicatorClasses('badge')).toBe('ux4g-sla-badge');
  });
});

// ── Carousel ─────────────────────────────────────────────────────────────────
describe('buildCarouselClasses', () => {
  it('no args -> ux4g-carousel', () => {
    expect(buildCarouselClasses()).toBe('ux4g-carousel');
  });
  it('with extra', () => {
    expect(buildCarouselClasses('my')).toBe('ux4g-carousel my');
  });
});

// ── EmptyState ────────────────────────────────────────────────────────────────
describe('buildEmptyStateClasses', () => {
  it('no args -> ux4g-empty-state', () => {
    expect(buildEmptyStateClasses()).toBe('ux4g-empty-state');
  });
  it('with extra', () => {
    expect(buildEmptyStateClasses('my')).toBe('ux4g-empty-state my');
  });
});

// ── ChipGroup ─────────────────────────────────────────────────────────────────
describe('buildChipGroupClasses', () => {
  it('no args -> ux4g-filter-chip-group (default)', () => {
    expect(buildChipGroupClasses()).toBe('ux4g-filter-chip-group');
  });
  it("variant='filter'", () => {
    expect(buildChipGroupClasses('filter')).toBe('ux4g-filter-chip-group');
  });
  it("variant='choice'", () => {
    expect(buildChipGroupClasses('choice')).toBe('ux4g-choice-chip-group');
  });
  it("variant='filter', active=true", () => {
    expect(buildChipGroupClasses('filter', true)).toBe('ux4g-filter-chip-group active');
  });
  it("variant='choice', active=false", () => {
    expect(buildChipGroupClasses('choice', false)).toBe('ux4g-choice-chip-group');
  });
  it("variant='filter', active=true, extra='my'", () => {
    expect(buildChipGroupClasses('filter', true, 'my')).toBe('ux4g-filter-chip-group active my');
  });
});

// ── Navbar ────────────────────────────────────────────────────────────────────
describe('buildNavbarClasses', () => {
  it('no args -> ux4g-navbar', () => {
    expect(buildNavbarClasses()).toBe('ux4g-navbar');
  });
  it('with extra', () => {
    expect(buildNavbarClasses('my')).toBe('ux4g-navbar my');
  });
});

// ── SocialLinks ───────────────────────────────────────────────────────────────
describe('buildSocialLinksClasses', () => {
  it('no args -> ux4g-d-flex ux4g-gap-s (md default)', () => {
    expect(buildSocialLinksClasses()).toBe('ux4g-d-flex ux4g-gap-s');
  });
  it("size='sm' -> ux4g-d-flex ux4g-gap-xs", () => {
    expect(buildSocialLinksClasses('sm')).toBe('ux4g-d-flex ux4g-gap-xs');
  });
  it("size='md' -> ux4g-d-flex ux4g-gap-s", () => {
    expect(buildSocialLinksClasses('md')).toBe('ux4g-d-flex ux4g-gap-s');
  });
  it("size='lg' -> ux4g-d-flex ux4g-gap-m", () => {
    expect(buildSocialLinksClasses('lg')).toBe('ux4g-d-flex ux4g-gap-m');
  });
  it("size='md' with extra", () => {
    expect(buildSocialLinksClasses('md', 'my')).toBe('ux4g-d-flex ux4g-gap-s my');
  });
});
