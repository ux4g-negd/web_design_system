/**
 * Property-based tests for Phase 3 build functions
 * Properties 1-6
 * Tag: Feature: ux4g-phase3-components
 */
import * as fc from 'fast-check';
import {
  buildLinkClasses,
  buildBadgeClasses,
  buildAvatarClasses,
  buildImageContainerClasses,
  LinkVariant,
  LinkSize,
  BadgeType,
  BadgeColor,
  BadgeSize,
  AvatarType,
  AvatarSize,
  ImageRatio,
} from '../../src/types';

const allLinkVariants: LinkVariant[] = ['default', 'neutral'];
const allLinkSizes: LinkSize[] = ['sm', 'md'];
const allBadgeTypes: BadgeType[] = ['dot', 'icon', 'digit'];
const allBadgeColors: BadgeColor[] = ['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'tertiary', 'neutral'];
const allBadgeSizes: BadgeSize[] = ['s', 'm', 'l', 'profile-l', 'profile-xl', 'profile-2xl', 'profile-3xl'];
const allAvatarTypes: AvatarType[] = ['status', 'profile', 'group'];
const allAvatarSizes: AvatarSize[] = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl'];
const allImageRatios: ImageRatio[] = ['1-1', '4-3', '3-2', '16-10', '16-9', '2-1', '5-2', '3-1', '1-16', '2-3', '3-4'];

/**
 * Property 1: Link class matches variant × size
 * Tag: Feature: ux4g-phase3-components, Property 1
 */
describe('Property 1: Link class matches variant × size', () => {
  it('Feature: ux4g-phase3-components, Property 1', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allLinkVariants),
        fc.constantFrom(...allLinkSizes),
        (variant: LinkVariant, size: LinkSize) => {
          const result = buildLinkClasses(variant, size);
          if (variant === 'neutral') {
            return result.includes('neutral');
          } else {
            return !result.includes('neutral');
          }
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 2: Badge class contains type and color substrings
 * Property 3: Badge size class appended when provided
 * Tag: Feature: ux4g-phase3-components, Property 2 & 3
 */
describe('Property 2: Badge class contains type and color substrings', () => {
  it('Feature: ux4g-phase3-components, Property 2', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allBadgeTypes),
        fc.constantFrom(...allBadgeColors),
        (type: BadgeType, color: BadgeColor) => {
          const result = buildBadgeClasses(type, color);
          return result.includes(`ux4g-badge-${type}-${color}`);
        }
      ),
      { numRuns: 20 }
    );
  });
});

describe('Property 3: Badge size class appended when provided', () => {
  it('Feature: ux4g-phase3-components, Property 3', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allBadgeTypes),
        fc.constantFrom(...allBadgeColors),
        fc.constantFrom(...allBadgeSizes),
        (type: BadgeType, color: BadgeColor, size: BadgeSize) => {
          const result = buildBadgeClasses(type, color, size);
          return result.includes(`ux4g-badge-${size}`);
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 4: Avatar group class is standalone
 * Property 5: Avatar status/profile always includes base class
 * Tag: Feature: ux4g-phase3-components, Property 4 & 5
 */
describe('Property 4: Avatar group class is standalone', () => {
  it('Feature: ux4g-phase3-components, Property 4', () => {
    expect(buildAvatarClasses('group')).toBe('ux4g-avatar-group');
  });
});

describe('Property 5: Avatar status/profile always includes base class', () => {
  it('Feature: ux4g-phase3-components, Property 5', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('status' as AvatarType, 'profile' as AvatarType),
        fc.option(fc.constantFrom(...allAvatarSizes), { nil: undefined }),
        (avatarType: AvatarType, size: AvatarSize | undefined) => {
          const result = buildAvatarClasses(avatarType, size);
          return result.startsWith('ux4g-avatar ');
        }
      ),
      { numRuns: 20 }
    );
  });
});

/**
 * Property 6: Image container class contains ratio when provided
 * Tag: Feature: ux4g-phase3-components, Property 6
 */
describe('Property 6: Image container class contains ratio when provided', () => {
  it('Feature: ux4g-phase3-components, Property 6', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allImageRatios),
        (ratio: ImageRatio) => {
          const result = buildImageContainerClasses(ratio);
          return result.includes(`ux4g-ratio-${ratio}`);
        }
      ),
      { numRuns: 20 }
    );
  });
});
