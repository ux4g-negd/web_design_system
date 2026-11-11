/**
 * Unit tests for Phase 3 build functions
 * Validates: Requirements 4.3, 4.7, 4.10, 4.12
 */
import {
  buildLinkClasses,
  buildBadgeClasses,
  buildAvatarClasses,
  buildImageContainerClasses,
} from '../../src/types';

describe('buildLinkClasses', () => {
  it('default variant + sm → ux4g-text-link-s', () => {
    expect(buildLinkClasses('default', 'sm')).toBe('ux4g-text-link-s');
  });

  it('default variant + md → ux4g-text-link-m', () => {
    expect(buildLinkClasses('default', 'md')).toBe('ux4g-text-link-m');
  });

  it('neutral variant + sm → ux4g-text-link-neutral-s', () => {
    expect(buildLinkClasses('neutral', 'sm')).toBe('ux4g-text-link-neutral-s');
  });

  it('neutral variant + md → ux4g-text-link-neutral-m', () => {
    expect(buildLinkClasses('neutral', 'md')).toBe('ux4g-text-link-neutral-m');
  });

  it('appends extra class when provided', () => {
    expect(buildLinkClasses('default', 'sm', 'my-class')).toBe('ux4g-text-link-s my-class');
  });
});

describe('buildBadgeClasses', () => {
  it('dot + primary → ux4g-badge-dot-primary', () => {
    expect(buildBadgeClasses('dot', 'primary')).toBe('ux4g-badge-dot-primary');
  });

  it('icon + success + m → ux4g-badge-icon-success ux4g-badge-m', () => {
    expect(buildBadgeClasses('icon', 'success', 'm')).toBe('ux4g-badge-icon-success ux4g-badge-m');
  });

  it('digit + danger + profile-xl → ux4g-badge-digit-danger ux4g-badge-profile-xl', () => {
    expect(buildBadgeClasses('digit', 'danger', 'profile-xl')).toBe('ux4g-badge-digit-danger ux4g-badge-profile-xl');
  });

  it('no size → no size class appended', () => {
    expect(buildBadgeClasses('dot', 'neutral')).toBe('ux4g-badge-dot-neutral');
  });

  it('appends extra class when provided', () => {
    expect(buildBadgeClasses('dot', 'primary', undefined, 'extra')).toBe('ux4g-badge-dot-primary extra');
  });
});

describe('buildAvatarClasses', () => {
  it('group → ux4g-avatar-group (no base class)', () => {
    expect(buildAvatarClasses('group')).toBe('ux4g-avatar-group');
  });

  it('status + s → ux4g-avatar ux4g-avatar-status ux4g-avatar-s', () => {
    expect(buildAvatarClasses('status', 's')).toBe('ux4g-avatar ux4g-avatar-status ux4g-avatar-s');
  });

  it('profile + xl → ux4g-avatar ux4g-avatar-profile ux4g-avatar-xl', () => {
    expect(buildAvatarClasses('profile', 'xl')).toBe('ux4g-avatar ux4g-avatar-profile ux4g-avatar-xl');
  });

  it('status without size → ux4g-avatar ux4g-avatar-status', () => {
    expect(buildAvatarClasses('status')).toBe('ux4g-avatar ux4g-avatar-status');
  });

  it('group with extra → ux4g-avatar-group extra', () => {
    expect(buildAvatarClasses('group', undefined, 'extra')).toBe('ux4g-avatar-group extra');
  });
});

describe('buildImageContainerClasses', () => {
  it('no args → empty string', () => {
    expect(buildImageContainerClasses()).toBe('');
  });

  it('ratio only → ux4g-ratio-16-9', () => {
    expect(buildImageContainerClasses('16-9')).toBe('ux4g-ratio-16-9');
  });

  it('ratio + rounded + overlay → ux4g-img-overlay ux4g-img-rounded ux4g-ratio-16-9', () => {
    expect(buildImageContainerClasses('16-9', true, true)).toBe('ux4g-img-overlay ux4g-img-rounded ux4g-ratio-16-9');
  });

  it('rounded only → ux4g-img-rounded', () => {
    expect(buildImageContainerClasses(undefined, true)).toBe('ux4g-img-rounded');
  });

  it('overlay only → ux4g-img-overlay', () => {
    expect(buildImageContainerClasses(undefined, false, true)).toBe('ux4g-img-overlay');
  });

  it('appends extra class when provided', () => {
    expect(buildImageContainerClasses('4-3', false, false, 'extra')).toBe('ux4g-ratio-4-3 extra');
  });
});
