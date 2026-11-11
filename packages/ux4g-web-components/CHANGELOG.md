# Changelog

All notable changes to ux4g-web-components are documented in this file.

## [3.0.3] — 2026-11-10

> **Patch release.** This release corresponds to CDN `UX4G@3.3.2` — the CDN assets were already redeployed under the same CDN version, so only the npm package version advances here. No public class, token-name, or runtime API removals.

### Added

- "How to Use MCP" Storybook guide documenting Model Context Protocol integration for AI coding agents, with a matching sidebar icon

### Fixed

- Combobox control markup corrected to use `role="combobox"`, `aria-haspopup="listbox"`, and `aria-expanded` instead of a non-interactive button wrapper, with matching updates to the search/filter runtime behaviour
- Accessibility pass across Card, Combobox, Dropdown, List, Modal, Navbar, Tab, Table, Toggle, Sidebar, Sidebar Profile, Floating Action Menu, and Voice Recorder — corrected ARIA attributes and semantic markup
- Accessibility issues fixed across all 66 patterns (Application Submission, Consent & Declaration, Dashboard, Feedback & Communication, Identity & Access, Notifications, Payment & Transactions, Search & Discovery, Status Tracker) in their card, column, and fullscreen variants
- Payment table rendering and current-location detection issues in the Entry & Event Permit service pattern
- Markup and downloadable ZIP package fixes across the Adventure Activity, Entry & Event Permit, Homestay Registration, Hotel Registration, Tour Operator, Tourism Event Sponsorship, Tourism Project Approval, and Tourist Guide Registration service patterns
- Half-arc progress indicator now validates `data-ux-size` against the supported size set before using it in its configuration lookup

### Security

- Replaced unsafe `innerHTML` construction of Select/Combobox dropdown list rows with safe DOM node creation (`textContent`/attribute setters), preventing HTML/script injection via option text or value

### Changed

- Regenerated AI/LLM context docs (`public/llms/**`, `catalog.json`, `ai.txt`, `llms.txt`, `llms-full.txt`), the offline skill bundle (`.ux4g-skill-bundle`), and `src/stories/skills-data.js` to reflect the fixes above; corrected a stale CDN `3.1.0` URL pattern in `public/ux4g-prompt.md` to `3.3.2`
- Bumped the npm package version to `3.0.3` to publish the fixes above; CDN stays at `UX4G@3.3.2` (already redeployed with this code, unchanged version tag)

## [3.0.2] — 2026-10-05

> **Patch release.** This release corresponds to CDN `UX4G@3.3.2`. CSS/token refinements and accessibility updates with no public class, token-name, or runtime API removals; all documentation and generated LLM/AI/SEO artifacts resynced to the new versions.

### Changed

- Accessibility and component CSS refreshed across accessibility bar, OTP, progress indicator, SLA progress indicator, spinner, table, time slot, and upload
- Size token, semantic, and utility updates (`size-tokens.css`, `size-semantic.css`, `size-utilities.css`) and typescale utility refinements
- Dark theme adjustments (`themes/dark.css`)
- Pattern HTML, navbar story variants, and HTML templates updated
- Updated documented CDN and npm release versions to `3.3.2` and `3.0.2`, and regenerated catalog, llms, ai.txt, migration, and skill artifacts to match

## [3.0.1] — 2026-10-05

> **Patch release.** This release corresponds to CDN `UX4G@3.3.1`. CSS/token refinements with no public class, token-name, or runtime API removals; all documentation and generated LLM/AI/SEO artifacts resynced to the new versions.

### Changed

- Colors semantic layer: `--ux4g-text-neutral-disabled` now derived via `color-mix` on the neutral palette instead of a hardcoded `rgba`; removed the standalone RGB triplet tokens (`--ux4g-rgb-white`, `--ux4g-rgb-black`)
- Border tokens: `--ux4g-icon-border-disabled` now references `--ux4g-color-neutral-200` instead of a raw `rgba` value
- Radius tokens: added component radius defaults (`--ux4g-btn-radius`, `--ux4g-navbar-radius`)
- Navbar: mobile breakpoint corrected to `991.98px`
- Updated documented CDN and npm release versions to `3.3.1` and `3.0.1`, and regenerated catalog, llms, ai.txt, migration, and skill artifacts to match

## [3.0.0] — 2026-09-26

> **Version bump.** This release corresponds to CDN `UX4G@3.3.0`.
> _TODO: document the specific Added/Changed/Removed entries and the reason for the major version bump._

## [2.1.0] — 2026-09-05

> **This release changes the shipped CSS bundle and runtime** (unlike 2.0.2, which was documentation-only). It corresponds to CDN `UX4G@3.2.0`. No public class names, tokens, or runtime APIs were removed or renamed, so it is a minor release.

### Added

- New and expanded utility modules: effects (backdrop blur/saturate/brightness), ring, outline, divide, scroll, line-clamp, visibility, and z-index utilities
- Additional transform and size utility classes

### Changed

- Component CSS refreshed across Modal, Popover, Alert, Footer, Input, List, Carousel, Checkbox, Stepper, Spinner, Status Pipeline, Card, Drawer, Dropdown, Chip, Chips Group, Combobox, OTP, Radio, Slider, Accordion, Progress Indicator, and Journey Timeline
- Token value updates across spacing, padding, margin, radius, position, shadow, opacity, outline, ring, scroll, transform, transition, typography, vertical-align, visibility, z-index, blur, border, object-fit, overflow, interaction, and line-clamp families
- Semantic layer updates (container, divide, effects, line-clamp, outline, overflow, ring, scroll, shadow, spacing, z-index); internal `inset-semantic.css` indirection removed with no change to the public inset class contract
- Layout refinements to container and flex-grid
- Runtime: the Tooltip/Popover floating engine was relocated into `ux4g.js` (now with richer popover header/title/subtitle/arrow rendering); `ux4g-custom.js` streamlined and extended with combobox and search filtering behaviour

### Fixed

- Toast/alert mobile responsiveness, carousel controls, slider wrapper container, and checkbox group interaction

## [2.0.2] — 2026-08-29

### Changed

- Aligned all documentation and CDN references to `UX4G@3.1.0` and npm `2.0.1`+ across migration guides, LLM docs, `ai.txt`, `catalog.json`, and skill files
- Updated package description to reflect the current surface: 53 components, 57 patterns, 36 utility modules (3,689 mapped classes)
- Documented the new utility categories (ring, outline, divide, effects, scroll, line-clamp) and the Select component in migration references and the design-system contract
- Migration stories hero copy updated to 65 components and 3,689 utility classes

### Fixed

- Corrected invalid class names in migration documentation (`ux4g-flex-column`, `ux4g-flex-grow-1`, `ux4g-relative`/`ux4g-absolute`, `ux4g-shadow-l0`/`l4`, `ux4g-line-clamp-1`, `ux4g-pointer-events-none`) and removed non-existent classes (`ux4g-ff-mono`, `ux4g-max-w-prose`, `ux4g-not-sr-only`, `ux4g-hover-*`, `ux4g-transition-*`, `ux4g-duration-*`)
- Resolved unexpanded `${CDN_BASE}` placeholder in the generated `ux4g-prompt.md` so published CDN URLs are concrete
- Removed dead npm scripts (`changelog:release`, `changes-logs:data`) referencing scripts that were never committed

> **Note:** 2.0.2 is a documentation and metadata release. The shipped CSS bundle and runtime are unchanged from 2.0.1.

---

## [2.0.1] — 2026-08-26

### Fixed

- **Button cascade conflict resolved architecturally** — Moved default `min-height` and `padding` into a `:where()` wrapper (zero specificity) so explicit size classes (`.ux4g-btn-s`, `.ux4g-btn-xs`, etc.) always win regardless of CSS source order or minifier reordering
- Removed `cascade-fixes.css` workaround file — no longer needed with the `:where()` approach
- Removed `cascade-fixes.css` from build pipeline (`build-css.mjs`) and package `files` array

### Why This Matters

Previously, `cssnano` could reorder the minified output such that variant color classes (`.ux4g-btn-primary`) appeared after size classes (`.ux4g-btn-s`). Since both had equal specificity (0,1,0), the last rule won — causing all buttons to render at 40px regardless of size class. The `cascade-fixes.css` file patched this with doubled selectors (`0,2,0`). Now the root cause is fixed: default dimensions live at `(0,0,0)` via `:where()`, so any size class at `(0,1,0)` always takes precedence.

---

## [2.0.0] — 2026-08-27

> **Major version bump.** This release contains the same changes that were briefly published as 1.1.0.
> Version 1.1.0 has been **deprecated** because it introduced breaking changes under a minor semver bump,
> which caused unintended upgrades for consumers using `^1.x` ranges. All 1.1.0 changes are now published
> here as 2.0.0 so that `^1.0.13` users remain unaffected.

### Added

- Select component: custom single/multi-select and native `<select>` styling (`ux4g-select`, `ux4g-form-select`)
- Focus ring foundation: global `:focus-visible` outline using brand primary color
- Position utilities expanded: full inset scale (0/25/50/75/100/auto) for top, bottom, start, end
- Inset shorthand classes: `ux4g-inset-0/25/50/100/auto`, `ux4g-inset-x-0/auto`, `ux4g-inset-y-0`
- Responsive position utilities: `ux4g-{sm/md/lg}-static/relative/absolute/fixed/sticky` + responsive inset + helpers
- Fixed pixel inset classes: `ux4g-{direction}-px-{4/8/12/16/24/32/48}` for precise positioning
- Negative inset classes: `ux4g-{direction}-n-{4/8/12}` for overlapping elements (badges, etc.)
- Dark mode theme (`data-theme="dark"`) with full semantic token overrides
- 15 component CSS files added to bundle: Carousel, Chips Group, Draft Status Bar, Empty State, Feedback, Footer, Form Field Group, Navbar, OTP, Progress Indicator, Result List, SLA Progress Indicator, Social Link, Time Slot, File Upload
- 15 citizen journey pattern CSS files added to bundle
- Dedicated `margin.utilities.css` and `padding.utilities.css` modules with responsive support
- iPad/tablet responsive fixes for Footer, Mega Menu, Card, Alert, Draft Status, Modal, OTP, Pagination, Time Slot

### Changed

- **Breaking:** `spacing.utilities.css` removed — split into separate `margin.utilities.css` and `padding.utilities.css`
- **Breaking:** `extensions.utilities.css` removed — all extension classes absorbed into core utility modules
- Renamed responsive display utility prefix from `xl` to `lg` in stories
- Gap utilities restructured with semantic section/stack/inline tokens

### Removed

- Removed local `lg` breakpoint override — package now provides all `lg` utilities natively

### Fixed

- Added `aria-label` to custom checkbox demo for accessibility compliance
- Dark mode theme was missing from CSS bundle — now included
- `prepublishOnly` script failed due to missing `compile-changelog.mjs` — script created and changelog config path corrected

### Migration from 1.x

To upgrade to 2.0.0, update your package.json:
```json
"ux4g-web-components": "^2.0.0"
```

If you want to stay on 1.x (no breaking changes), pin to:
```json
"ux4g-web-components": "1.0.13"
```

---

## [1.1.0] — DEPRECATED

> ⚠️ **This version is deprecated.** It contained breaking changes published under a minor version bump.
> Users with `"ux4g-web-components": "^1.0.13"` were unintentionally upgraded to this version, causing breakage.
> All changes from 1.1.0 have been republished as **2.0.0**. Please use `1.0.13` (for stability) or `^2.0.0` (for latest).

---

## [1.0.13] — 2026-08-19

### Added

- Position utilities expanded: full inset scale (0/25/50/75/100/auto) for top, bottom, start, end
- Inset shorthand classes: `ux4g-inset-0/25/50/100/auto`, `ux4g-inset-x-0/auto`, `ux4g-inset-y-0`
- Responsive position utilities: `ux4g-{sm/md/lg}-static/relative/absolute/fixed/sticky` + responsive inset + helpers
- Fixed pixel inset classes: `ux4g-{direction}-px-{4/8/12/16/24/32/48}` for precise positioning
- Negative inset classes: `ux4g-{direction}-n-{4/8/12}` for overlapping elements (badges, etc.)
- New `position-responsive.utilities.css` module (28 utility modules total, up from 27)
- Select component: custom single/multi-select and native `<select>` styling (`ux4g-select`, `ux4g-form-select`)
- Focus ring foundation: global `:focus-visible` outline using brand primary color

### Fixed

- Dark mode theme (`data-theme="dark"`) was missing from the CSS bundle — now included with full semantic token overrides for text, backgrounds, borders, shadows, opacity, spinner, and component-specific styles
- 15 component CSS files were missing from bundle — now included: Carousel, Chips Group, Draft Status Bar, Empty State, Feedback, Footer, Form Field Group, Navbar, OTP, Progress Indicator, Result List, SLA Progress Indicator, Social Link, Time Slot, File Upload
- 15 citizen journey pattern CSS files were missing from bundle — now included: Identity Access, Consent Capture, Notifications, Notification Channel, Application Submission, SMS/Email Notifications, Payment, Dashboard Application, Pending Task, Profile, Status Tracker, Search Browse, Global Service Discovery, Consultation Slot Booking, Feedback Communication
- `prepublishOnly` script failed due to missing `compile-changelog.mjs` — script created and changelog config path corrected

## [1.0.11] — 2026-08-14

### Added

- Dark mode theme (`data-theme="dark"`) — full semantic token overrides for text, backgrounds, borders, shadows, opacity, spinner, table select, and navbar logo
- 15 missing component CSS files now included in bundle: Carousel, Chips Group, Draft Status Bar, Empty State, Feedback, Footer, Form Field Group, Navbar, OTP, Progress Indicator, Result List, SLA Progress Indicator, Social Link, Time Slot, File Upload
- 15 citizen journey pattern CSS files now included: Identity Access, Consent Capture, Notifications, Notification Channel, Application Submission, SMS/Email Notifications, Payment, Dashboard Application, Pending Task, Profile, Status Tracker, Search Browse, Global Service Discovery, Consultation Slot Booking, Feedback Communication
- New `margin.utilities.css` — dedicated margin utility module with full responsive support (sm/md/lg breakpoints)
- New `padding.utilities.css` — dedicated padding utility module with full responsive support (sm/md/lg breakpoints)
- New semantic token files: `gap.semantic.css`, `margin.semantic.css`, `padding.semantic.css`
- Gap now includes fine-grained section tokens: `--ux4g-section-2xs` through `--ux4g-section-7xs`
- Z-index extended scale: `ux4g-z-10` through `ux4g-z-50` (now in core z-index utilities)
- Radius expanded: `ux4g-radius-xs`, `ux4g-radius-xl`, `ux4g-radius-2xl` + per-side/per-corner variants
- Position: added `ux4g-sr-only` (screen-reader-only) to core position utilities
- iPad/tablet responsive fixes (768px–1024px) for: Footer, Mega Menu, Card, Alert, Draft Status, Modal, OTP, Pagination, Time Slot
- New typography stories for Storybook

### Changed

- **Breaking:** `spacing.utilities.css` removed — split into separate `margin.utilities.css` and `padding.utilities.css`
- **Breaking:** `extensions.utilities.css` removed — all extension classes absorbed into core utility modules (gap, z-index, radius, position)
- Gap utilities restructured with semantic section/stack/inline tokens
- Pagination dotted style reworked (active dot now pill-shaped, background colors updated)
- Result List: button size changed from `ux4g-btn-s ` to `ux4g-btn-xs`
- Footer responsive breakpoint changed from `max-width: 768px` to `max-width: 767px`
- Typography semantic tokens reorganized (font-weight/family moved to top of file)
- Text-transform semantics split out: text-align and wrap tokens moved to `text-transform.semantic.css`

### Fixed

- Footer responsive padding and grid layout on mobile and iPad
- Mega Menu 2-column grid on iPad for all variants (content, promo, five, six)
- Card image height: fixed value (192px vertical, 20vh on tablet) instead of `38vh`
- Modal: added `box-sizing: border-box` and `min-width: 0` to prevent overflow
- Stepper vertical line alignment on mobile
- Status Pipeline vertical connector positioning
- Time Slot compact container border and spacing fixes
- OTP input container width on iPad
- Draft Status Bar flex layout on iPad
- Accessibility Bar select button gap
- Feedback component removed max-width constraint
- File Upload showcase layout simplified

## [1.0.10] — 2026-08-13

### Added

- `extensions.utilities.css` — application-level utility extensions (subsequently absorbed into core in 1.0.11)
- Updated LLM documentation files with extensions utility reference

### Changed

- Utility module count updated in documentation
- README and CHANGELOG updated for npm visibility

## [1.0.9] — 2026-08-11

### Added

- LLM documentation updates
- CHANGELOG improvements for npm package page

## [1.0.8] — 2026-08-10

### Added

- Popover `data-ux-content-id` API for template-backed rich and interactive content
- Per-popover ID namespacing, nested UX4G component initialization, source validation warnings, and the `ux4g.popover.contentmounted` event
- Popover TypeScript definitions, migration guidance, and behavioral tests

### Changed

- Rich Popover Storybook examples now use normal HTML inside `<template>` elements
- Renamed responsive display utility prefix from `xl` to `lg` in stories
- All `lg` responsive utilities now use `min-width: 1440px` breakpoint (aligned with package)

## [1.0.7] — 2026-08-09

### Fixed

- Grid/flex/display/gap/justify/order/object-fit responsive utilities refactored
- Layout container and spacing tokens updated
- Typescale breakpoints and scaling
- Layout stories mobile responsive

## [1.0.6] — 2026-08-08

### Fixed

- Alert component sizing and responsive layout per Figma specs
- Feedback component mobile responsive issue
- Dropdown sizes updated per Figma for web and mobile
- Combobox intro mobile responsive issue
- Popover rich-content hamburger menu position
- Chip icon sizes for filtered variant (20×20 m/s, 16×16 xs)
- Checkbox unlabeled variant rendering

## [1.0.5] — 2026-08-07

### Fixed

- CSS syntax error (trailing comma in tag component `:is()` selector)
- Carousel intro page mobile responsive and playground mobile
- Button intro-page mobile responsive in Storybook
- Badge intro page Storybook mobile responsive
- Accordion scroll-blocking when opened
- Accessibility bar mobile responsive
- Table select-all not working and rendering behind checkbox
- Drawer render issues in playground
- Added aria-label to custom checkbox demo for accessibility compliance

## [1.0.4] — 2026-08-06

### Fixed

- Initial batch of responsive fixes and refactoring (consolidated in 1.0.5+)

## [1.0.3] — 2026-07-20

### Added

- Initial public release of `ux4g-web-components` sub-package
- Complete CSS bundle with 30+ components
- 27 utility modules, design tokens, and runtime
- TypeScript type definitions for component props
- Runtime auto-bootstrap via `design-system` export
