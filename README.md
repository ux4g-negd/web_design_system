# ux4g-web-components

[![npm version](https://img.shields.io/npm/v/ux4g-web-components.svg)](https://www.npmjs.com/package/ux4g-web-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

CSS bundle, design tokens, utilities, and runtime module for the **UX4G Design System**.

This is the single package you need - it provides the complete CSS system, interactive behaviors, and all component classes. Use directly in HTML, Angular, or React via standard CSS classes.

---

## What's New (v3.3.2 / npm 3.0.3)

- **Dark mode theme included:** Full `:root[data-theme="dark"]` overrides for text, backgrounds, borders, shadows, and component-specific styles
- **57 components bundled:** Carousel, Chips Group, Draft Status Bar, Empty State, Feedback, Footer, Form Field Group, Navbar, OTP, Progress Indicator, Result List, SLA Progress Indicator, Social Link, Time Slot, File Upload, Combobox, Select — all in the CSS bundle
- **66 citizen journey patterns included:** Identity Access, Payment, Dashboard, Notifications, Search & Discovery, Application & Submission, Consent & Declaration, Status Tracker, and more
- **8 end-to-end service patterns:** Downloadable tourism/hospitality service flows (Homestay Registration, Hotel Registration, Tour Operator, Tourist Guide Registration, Adventure Activity, Entry & Event Permit, Tourism Event Sponsorship, Tourism Project Approval)
- **37 utility families:** Including new scroll, child-spacing, divide, float, line-clamp, outline, effects, transforms, transitions, and ring utilities
- **px-to-rem conversion:** All component and utility values now use rem for better accessibility scaling
- **Button cascade fix (npm 2.0.1+):** Default button dimensions use `:where()` at zero specificity — size classes always win regardless of CSS source order
- **Position utilities streamlined:** Responsive position utilities now percentage-only for smaller bundle size; pixel-based position utilities remain in base file
- **Semantic radius tokens added:** Named aliases (`--ux4g-radius-xs` through `--ux4g-radius-full`) for the numeric scale
- **594 primitive + 554 semantic design tokens** available as CSS custom properties
- **iPad/tablet responsive fixes** across Footer, Mega Menu, Card, Alert, Modal, Pagination, OTP

See [CHANGELOG.md](./packages/ux4g-web-components/CHANGELOG.md) for full details.

---
## Installation

```bash
npm install ux4g-web-components
```

---

## Setup

### Option 1: CDN (No build tools needed)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My UX4G Page</title>
  <link rel="stylesheet" href="https://cdn.ux4g.gov.in/UX4G@3.3.2/index.css" />
</head>
<body>
  <button class="ux4g-btn-primary ux4g-btn-m ">Get Started</button>

  <script src="https://cdn.ux4g.gov.in/UX4G@3.3.2/ux4g.js"></script>
  <script src="https://cdn.ux4g.gov.in/UX4G@3.3.2/ux4g-custom.js"></script>
</body>
</html>
```

### Option 2: Plain HTML (Local)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="node_modules/ux4g-web-components/styles/ux4g.css" />
</head>
<body>
  <button class="ux4g-btn-primary ux4g-btn-m ">Save</button>

  <script src="node_modules/ux4g-web-components/dist/runtime/design-system.js"></script>
</body>
</html>
```

### Option 3: Angular

In `angular.json`:

```json
{
  "styles": [
    "node_modules/ux4g-web-components/styles/ux4g.css"
  ],
  "scripts": [
    "node_modules/ux4g-web-components/dist/runtime/design-system.js"
  ]
}
```

### Option 4: React

In your entry file (`src/main.tsx`):

```tsx
import 'ux4g-web-components/styles.css';
import 'ux4g-web-components/design-system';
```

---

## Available Exports

| Export Path | Description |
|---|---|
| `ux4g-web-components/styles.css` | Pre-built CSS bundle (~8 MB, fonts embedded as base64) |
| `ux4g-web-components/design-system` | Side-effect import — auto-initializes runtime (recommended) |
| `ux4g-web-components/runtime` | `initRuntime()` / `destroyRuntime()` — explicit control |

---

## CSS Bundle

Layer order (strict — do NOT reorder):

1. **Tokens** — CSS custom properties (primitive values)
2. **Semantics** — semantic aliases and dark theme
3. **Reset** — browser normalization
4. **Foundations** — fonts and icons (base64-embedded)
5. **Layout** — container, flex-grid, grid utilities
6. **Components** — all component CSS
7. **Patterns** — citizen journey pattern CSS
8. **Utilities** — 36 single-purpose helper class modules (highest specificity layer)

---

## Components

### Button

#### HTML

```html
<button class="ux4g-btn-primary ux4g-btn-m ">Filled</button>
<button class="ux4g-btn-outline-primary ux4g-btn-m ">Outline</button>
<button class="ux4g-btn-tonal-primary ux4g-btn-m ">Tonal</button>
<button class="ux4g-btn-text-primary ux4g-btn-m ">Text</button>
<button class="ux4g-btn-primary ux4g-btn-m " disabled>Disabled</button>
<button class="ux4g-btn-primary ux4g-btn-m  ux4g-radius-full">Pill</button>
```

#### Angular

```html
<button class="ux4g-btn-primary ux4g-btn-m ">Filled</button>
<button class="ux4g-btn-outline-primary ux4g-btn-m ">Outline</button>
<button class="ux4g-btn-tonal-primary ux4g-btn-m ">Tonal</button>
<button class="ux4g-btn-text-primary ux4g-btn-m ">Text</button>
<button class="ux4g-btn-primary ux4g-btn-m " disabled>Disabled</button>
<button class="ux4g-btn-primary ux4g-btn-m  ux4g-radius-full">Pill</button>
```

#### React

```tsx
<button className="ux4g-btn-primary ux4g-btn-m ">Filled</button>
<button className="ux4g-btn-outline-primary ux4g-btn-m ">Outline</button>
<button className="ux4g-btn-tonal-primary ux4g-btn-m ">Tonal</button>
<button className="ux4g-btn-text-primary ux4g-btn-m ">Text</button>
<button className="ux4g-btn-primary ux4g-btn-m " disabled>Disabled</button>
<button className="ux4g-btn-primary ux4g-btn-m  ux4g-radius-full">Pill</button>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variants | `ux4g-btn-primary`, `ux4g-btn-outline-primary`, `ux4g-btn-tonal-primary`, `ux4g-btn-text-primary`, `ux4g-btn-danger`, `ux4g-btn-outline-danger`, `ux4g-btn-text-danger`, `ux4g-btn-outline-neutral`, `ux4g-btn-text-neutral` |
| Sizes | `ux4g-btn-xl`, `ux4g-btn-l `, `ux4g-btn-m ` (default), `ux4g-btn-s `, `ux4g-btn-xs` |
| Shape | `ux4g-radius-full` (pill) |

---

### Icon Button

#### HTML

```html
<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">home</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">search</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-tonal-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">edit</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">settings</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-m ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">add</i></button>
```

#### Angular

```html
<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">home</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">search</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-tonal-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">edit</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-m"><i class="ux4g-icon-outlined">settings</i></button>
<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-m ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">add</i></button>
```

#### React

```tsx
<button className="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-m"><i className="ux4g-icon-outlined">home</i></button>
<button className="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-m"><i className="ux4g-icon-outlined">search</i></button>
<button className="ux4g-icon-btn ux4g-icon-btn-tonal-primary ux4g-icon-btn-m"><i className="ux4g-icon-outlined">edit</i></button>
<button className="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-m"><i className="ux4g-icon-outlined">settings</i></button>
<button className="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-m ux4g-icon-btn-pill"><i className="ux4g-icon-outlined">add</i></button>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variants | `ux4g-icon-btn-primary`, `ux4g-icon-btn-outline-primary`, `ux4g-icon-btn-tonal-primary`, `ux4g-icon-btn-text-primary` |
| Sizes | `ux4g-icon-btn-xl`, `ux4g-icon-btn-l`, `ux4g-icon-btn-m` (default), `ux4g-icon-btn-s`, `ux4g-icon-btn-xs` |
| Shape | `ux4g-icon-btn-pill` |

---

### Spinner

#### HTML

```html
<span class="ux4g-spinner-primary-full" role="status" aria-label="Loading"></span>
<span class="ux4g-spinner-danger-split ux4g-spinner-l" role="status" aria-label="Loading"></span>
<span class="ux4g-spinner-inverse-partial ux4g-spinner-xs" role="status" aria-label="Loading"></span>
```

#### Angular

```html
<span class="ux4g-spinner-primary-full" role="status" aria-label="Loading"></span>
<span class="ux4g-spinner-danger-split ux4g-spinner-l" role="status" aria-label="Loading"></span>
<span class="ux4g-spinner-inverse-partial ux4g-spinner-xs" role="status" aria-label="Loading"></span>
```

#### React

```tsx
<span className="ux4g-spinner-primary-full" role="status" aria-label="Loading" />
<span className="ux4g-spinner-danger-split ux4g-spinner-l" role="status" aria-label="Loading" />
<span className="ux4g-spinner-inverse-partial ux4g-spinner-xs" role="status" aria-label="Loading" />
```

#### Available Classes

| Category | Classes |
|---|---|
| Pattern | `ux4g-spinner-{variant}-{type}` |
| Variants | `primary`, `inverse`, `danger` |
| Types | `full`, `split`, `partial` |
| Sizes | `ux4g-spinner-xl`, `ux4g-spinner-l`, (md default), `ux4g-spinner-s`, `ux4g-spinner-xs` |

---

### Link

#### HTML

```html
<a href="#" class="ux4g-text-link-m">Learn more</a>
<a href="#" class="ux4g-text-link-neutral-s">View details</a>
<a class="ux4g-text-link-m" disabled>Disabled link</a>
```

#### Angular

```html
<a href="#" class="ux4g-text-link-m">Learn more</a>
<a href="#" class="ux4g-text-link-neutral-s">View details</a>
<a class="ux4g-text-link-m" disabled>Disabled link</a>
```

#### React

```tsx
<a href="#" className="ux4g-text-link-m">Learn more</a>
<a href="#" className="ux4g-text-link-neutral-s">View details</a>
<a className="ux4g-text-link-m" disabled>Disabled link</a>
```

#### Available Classes

| Category | Classes |
|---|---|
| Default | `ux4g-text-link-s`, `ux4g-text-link-m` |
| Neutral | `ux4g-text-link-neutral-s`, `ux4g-text-link-neutral-m` |

---

### Badge

#### HTML

```html
<span class="ux4g-badge-dot-primary"></span>
<span class="ux4g-badge-digit-danger ux4g-badge-m">5</span>
<span class="ux4g-badge-icon-success ux4g-badge-l"><i class="ux4g-icon-outlined">check</i></span>
```

#### Angular

```html
<span class="ux4g-badge-dot-primary"></span>
<span class="ux4g-badge-digit-danger ux4g-badge-m">5</span>
<span class="ux4g-badge-icon-success ux4g-badge-l"><i class="ux4g-icon-outlined">check</i></span>
```

#### React

```tsx
<span className="ux4g-badge-dot-primary"></span>
<span className="ux4g-badge-digit-danger ux4g-badge-m">5</span>
<span className="ux4g-badge-icon-success ux4g-badge-l"><i className="ux4g-icon-outlined">check</i></span>
```

#### Available Classes

| Category | Classes |
|---|---|
| Pattern | `ux4g-badge-{type}-{color}` |
| Types | `dot`, `icon`, `digit` |
| Colors | `primary`, `success`, `warning`, `danger`, `info`, `secondary`, `tertiary`, `neutral` |
| Sizes | `ux4g-badge-s`, `ux4g-badge-m`, `ux4g-badge-l` |

---

### Avatar

#### HTML

```html
<div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-m"><img src="user.jpg" alt="User" /></div>
<div class="ux4g-avatar ux4g-avatar-profile ux4g-avatar-l"><img src="profile.jpg" alt="Profile" /></div>
<div class="ux4g-avatar-group">
  <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s"><img src="u1.jpg" alt="" /></div>
  <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s"><img src="u2.jpg" alt="" /></div>
</div>
```

#### Angular

```html
<div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-m"><img src="user.jpg" alt="User" /></div>
<div class="ux4g-avatar ux4g-avatar-profile ux4g-avatar-l"><img src="profile.jpg" alt="Profile" /></div>
<div class="ux4g-avatar-group">
  <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s"><img src="u1.jpg" alt="" /></div>
  <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s"><img src="u2.jpg" alt="" /></div>
</div>
```

#### React

```tsx
<div className="ux4g-avatar ux4g-avatar-status ux4g-avatar-m"><img src="user.jpg" alt="User" /></div>
<div className="ux4g-avatar ux4g-avatar-profile ux4g-avatar-l"><img src="profile.jpg" alt="Profile" /></div>
<div className="ux4g-avatar-group">
  <div className="ux4g-avatar ux4g-avatar-status ux4g-avatar-s"><img src="u1.jpg" alt="" /></div>
  <div className="ux4g-avatar ux4g-avatar-status ux4g-avatar-s"><img src="u2.jpg" alt="" /></div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Pattern | `ux4g-avatar ux4g-avatar-{type} ux4g-avatar-{size}` |
| Types | `status`, `profile` |
| Sizes | `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl` |
| Group | `ux4g-avatar-group` |
#### React

```tsx
<img className="ux4g-img ux4g-ratio-16-9" src="photo.jpg" alt="Photo" />
<img className="ux4g-img ux4g-img-rounded ux4g-ratio-1-1" src="photo.jpg" alt="Photo" />
<div className="ux4g-img-overlay ux4g-ratio-4-3">
  <img className="ux4g-img" src="photo.jpg" alt="Photo" />
  <div className="ux4g-img-overlay-bottom">
    <div className="ux4g-img-overlay-content">
      <div className="ux4g-heading-xs-default">Title</div>
      <div className="ux4g-body-xs-default">Description text</div>
    </div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Modifiers | `ux4g-img`, `ux4g-img-overlay`, `ux4g-img-rounded` |
| Overlay Position | `ux4g-img-overlay-top`, `ux4g-img-overlay-bottom` |
| Full Height | Add `ux4g-h-100` to overlay position element |
| Ratios | `ux4g-ratio-1-1`, `ux4g-ratio-4-3`, `ux4g-ratio-3-2`, `ux4g-ratio-16-10`, `ux4g-ratio-16-9`, `ux4g-ratio-2-1`, `ux4g-ratio-5-2`, `ux4g-ratio-3-1`, `ux4g-ratio-2-3`, `ux4g-ratio-3-4` |

---

### Image

#### HTML

```html
<div class="ux4g-ratio-16-9"><img src="photo.jpg" alt="Photo" /></div>
<div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-4-3">
  <img src="photo.jpg" alt="Photo" />
  <div class="ux4g-img-overlay-bottom">
    <div class="ux4g-img-overlay-content">Caption</div>
  </div>
</div>
```

#### Angular

```html
<div class="ux4g-ratio-16-9"><img src="photo.jpg" alt="Photo" /></div>
<div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-4-3">
  <img src="photo.jpg" alt="Photo" />
  <div class="ux4g-img-overlay-bottom">
    <div class="ux4g-img-overlay-content">Caption</div>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-ratio-16-9"><img src="photo.jpg" alt="Photo" /></div>
<div className="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-4-3">
  <img src="photo.jpg" alt="Photo" />
  <div className="ux4g-img-overlay-bottom">
    <div className="ux4g-img-overlay-content">Caption</div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Modifiers | `ux4g-img-overlay`, `ux4g-img-rounded` |
| Overlays | `ux4g-img-overlay-top`, `ux4g-img-overlay-bottom`, `ux4g-img-overlay-content` |
| Ratios | `ux4g-ratio-1-1`, `ux4g-ratio-4-3`, `ux4g-ratio-3-2`, `ux4g-ratio-16-10`, `ux4g-ratio-16-9`, `ux4g-ratio-2-1`, `ux4g-ratio-5-2`, `ux4g-ratio-3-1`, `ux4g-ratio-2-3`, `ux4g-ratio-3-4` |

---

### Chip

#### HTML

```html
<button class="ux4g-filter-chip-m">Category</button>
<button class="ux4g-filter-chip-m active">Active</button>
<button class="ux4g-choice-chip-s">Choice</button>
<span class="ux4g-input-chip-xs">Tag <button class="ux4g-chip-close">&times;</button></span>
```

#### Angular

```html
<button class="ux4g-filter-chip-m">Category</button>
<button class="ux4g-filter-chip-m active">Active</button>
<button class="ux4g-choice-chip-s">Choice</button>
<span class="ux4g-input-chip-xs">Tag <button class="ux4g-chip-close">&times;</button></span>
```

#### React

```tsx
<button className="ux4g-filter-chip-m">Category</button>
<button className="ux4g-filter-chip-m active">Active</button>
<button className="ux4g-choice-chip-s">Choice</button>
<span className="ux4g-input-chip-xs">Tag <button className="ux4g-chip-close">&times;</button></span>
```

#### Available Classes

| Category | Classes |
|---|---|
| Pattern | `ux4g-{type}-chip-{size}` |
| Types | `filter`, `choice`, `input` |
| Sizes | `md`, `sm`, `xs` (xs only for input) |
| State | `active` |

---

### Chips Group

#### HTML

```html
<div class="ux4g-filter-chip-group">
  <button class="ux4g-filter-chip-m active">All</button>
  <button class="ux4g-filter-chip-m">Category A</button>
  <button class="ux4g-filter-chip-m">Category B</button>
</div>
<div class="ux4g-choice-chip-group">
  <button class="ux4g-choice-chip-m active">Option 1</button>
  <button class="ux4g-choice-chip-m">Option 2</button>
</div>
```

#### Angular

```html
<div class="ux4g-filter-chip-group">
  <button class="ux4g-filter-chip-m active">All</button>
  <button class="ux4g-filter-chip-m">Category A</button>
  <button class="ux4g-filter-chip-m">Category B</button>
</div>
```

#### React

```tsx
<div className="ux4g-filter-chip-group">
  <button className="ux4g-filter-chip-m active">All</button>
  <button className="ux4g-filter-chip-m">Category A</button>
  <button className="ux4g-filter-chip-m">Category B</button>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Group Types | `ux4g-filter-chip-group`, `ux4g-choice-chip-group` |

---

### Tag

#### HTML

```html
<span class="ux4g-tag-tonal-neutral">Default</span>
<span class="ux4g-tag-filled-success ux4g-tag-s">Active</span>
<span class="ux4g-tag-outline-error">Error</span>
<span class="ux4g-tag-text-info">Info</span>
```

#### Angular

```html
<span class="ux4g-tag-tonal-neutral">Default</span>
<span class="ux4g-tag-filled-success ux4g-tag-s">Active</span>
<span class="ux4g-tag-outline-error">Error</span>
<span class="ux4g-tag-text-info">Info</span>
```

#### React

```tsx
<span className="ux4g-tag-tonal-neutral">Default</span>
<span className="ux4g-tag-filled-success ux4g-tag-s">Active</span>
<span className="ux4g-tag-outline-error">Error</span>
<span className="ux4g-tag-text-info">Info</span>
```

#### Available Classes

| Category | Classes |
|---|---|
| Pattern | `ux4g-tag-{variant}-{color}` |
| Variants | `tonal`, `filled`, `outline`, `text` |
| Colors | `neutral`, `brand`, `success`, `warning`, `error`, `info` |
| Size | `ux4g-tag-s` |

---

### Divider

#### HTML

```html
<hr class="ux4g-divider-horizontal" />
<div class="ux4g-divider-vertical"></div>
```

#### Angular

```html
<hr class="ux4g-divider-horizontal" />
<div class="ux4g-divider-vertical"></div>
```

#### React

```tsx
<hr className="ux4g-divider-horizontal" />
<div className="ux4g-divider-vertical"></div>
```

---

### Breadcrumb

#### HTML

```html
<nav class="ux4g-breadcrumb ux4g-breadcrumb-divider">
  <a href="#">Home</a>
  <a href="#">Products</a>
  <span>Current Page</span>
</nav>
```

#### Angular

```html
<nav class="ux4g-breadcrumb ux4g-breadcrumb-divider">
  <a href="#">Home</a>
  <a href="#">Products</a>
  <span>Current Page</span>
</nav>
```

#### React

```tsx
<nav className="ux4g-breadcrumb ux4g-breadcrumb-divider">
  <a href="#">Home</a>
  <a href="#">Products</a>
  <span>Current Page</span>
</nav>
```

#### Available Classes

| Category | Classes |
|---|---|
| Separators | `ux4g-breadcrumb-divider`, `ux4g-breadcrumb-icon` |

---

### Checkbox

#### HTML

```html
<label class="ux4g-checkbox ux4g-checkbox-m">
  <input type="checkbox" class="ux4g-checkbox-input" />
  <span class="ux4g-radio-control"><span class="ux4g-checkmark"></span></span>
  <span class="ux4g-checkbox-content">Accept terms</span>
</label>
```

#### Angular

```html
<label class="ux4g-checkbox ux4g-checkbox-m">
  <input type="checkbox" class="ux4g-checkbox-input" />
  <span class="ux4g-radio-control"><span class="ux4g-checkmark"></span></span>
  <span class="ux4g-checkbox-content">Accept terms</span>
</label>
```

#### React

```tsx
<label className="ux4g-checkbox ux4g-checkbox-m">
  <input type="checkbox" className="ux4g-checkbox-input" />
  <span className="ux4g-radio-control"><span className="ux4g-checkmark"></span></span>
  <span className="ux4g-checkbox-content">Accept terms</span>
</label>
```

#### Available Classes

| Category | Classes |
|---|---|
| Sizes | `ux4g-checkbox-s`, `ux4g-checkbox-m`, `ux4g-checkbox-l` |
| States | `ux4g-checkbox-error` |

---

### Radio

#### HTML

```html
<label class="ux4g-radio ux4g-radio-m">
  <input type="radio" name="option" class="ux4g-radio-input" />
  <span class="ux4g-radio-control"><span class="ux4g-radiomark"></span></span>
  <span class="ux4g-radio-content">Option A</span>
</label>
```

#### Angular

```html
<label class="ux4g-radio ux4g-radio-m">
  <input type="radio" name="option" class="ux4g-radio-input" />
  <span class="ux4g-radio-control"><span class="ux4g-radiomark"></span></span>
  <span class="ux4g-radio-content">Option A</span>
</label>
```

#### React

```tsx
<label className="ux4g-radio ux4g-radio-m">
  <input type="radio" name="option" className="ux4g-radio-input" />
  <span className="ux4g-radio-control"><span className="ux4g-radiomark"></span></span>
  <span className="ux4g-radio-content">Option A</span>
</label>
```

#### Available Classes

| Category | Classes |
|---|---|
| Sizes | `ux4g-radio-s`, `ux4g-radio-m`, `ux4g-radio-l` |
| States | `ux4g-radio-error` |

---

### Switch

#### HTML

```html
<label class="ux4g-switch ux4g-switch-m">
  <input type="checkbox" class="ux4g-switch-input" role="switch" />
  <span class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></span>
  <span class="ux4g-switch-content">Enable notifications</span>
</label>
```

#### Angular

```html
<label class="ux4g-switch ux4g-switch-m">
  <input type="checkbox" class="ux4g-switch-input" role="switch" />
  <span class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></span>
  <span class="ux4g-switch-content">Enable notifications</span>
</label>
```

#### React

```tsx
<label className="ux4g-switch ux4g-switch-m">
  <input type="checkbox" className="ux4g-switch-input" role="switch" />
  <span className="ux4g-switch-control"><span className="ux4g-switch-track"><span className="ux4g-switch-thumb"></span></span></span>
  <span className="ux4g-switch-content">Enable notifications</span>
</label>
```

#### Available Classes

| Category | Classes |
|---|---|
| Sizes | `ux4g-switch-s`, `ux4g-switch-m`, `ux4g-switch-l` |

---

### Card

#### HTML

```html
<div class="ux4g-card ux4g-card-solid ux4g-card-vertical">
  <div class="ux4g-card-header">Title</div>
  <div class="ux4g-card-body">Content goes here.</div>
  <div class="ux4g-card-footer">Footer</div>
</div>
```

#### Angular

```html
<div class="ux4g-card ux4g-card-solid ux4g-card-vertical">
  <div class="ux4g-card-header">Title</div>
  <div class="ux4g-card-body">Content goes here.</div>
  <div class="ux4g-card-footer">Footer</div>
</div>
```

#### React

```tsx
<div className="ux4g-card ux4g-card-solid ux4g-card-vertical">
  <div className="ux4g-card-header">Title</div>
  <div className="ux4g-card-body">Content goes here.</div>
  <div className="ux4g-card-footer">Footer</div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variants | `ux4g-card-solid`, `ux4g-card-outline`, `ux4g-card-no-fill` |
| Layouts | `ux4g-card-vertical`, `ux4g-card-horizontal` |

---

### Input

#### HTML

```html
<div class="ux4g-input-container ux4g-input-m ux4g-input-default">
  <label>Email</label>
  <input type="email" placeholder="Enter email" />
</div>
<div class="ux4g-input-container ux4g-input-l ux4g-input-error">
  <label>Password</label>
  <input type="password" />
  <span class="ux4g-input-helper">Password is required</span>
</div>
```

#### Angular

```html
<div class="ux4g-input-container ux4g-input-m ux4g-input-default">
  <label>Email</label>
  <input type="email" placeholder="Enter email" />
</div>
```

#### React

```tsx
<div className="ux4g-input-container ux4g-input-m ux4g-input-default">
  <label>Email</label>
  <input type="email" placeholder="Enter email" />
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Sizes | `ux4g-input-s`, `ux4g-input-m`, `ux4g-input-l`, `ux4g-input-xl` |
| States | `ux4g-input-default`, `ux4g-input-error`, `ux4g-input-success`, `ux4g-input-warning` |
#### Angular

```html
<button data-modal-target="#myModal">Open Modal</button>
<div id="myModal" class="ux4g-modal" role="dialog" aria-modal="true">
  <div class="ux4g-modal-box ux4g-modal-m">
    <header class="ux4g-modal-header">
      <div class="ux4g-modal-header-title-content">
        <h2 class="ux4g-modal-header-title">Title</h2>
      </div>
      <button class="ux4g-modal-close" data-close-modal>
        <span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span>
      </button>
    </header>
    <div class="ux4g-modal-body">Content here</div>
    <footer class="ux4g-modal-actions">
      <button class="ux4g-btn-outline-primary">Cancel</button>
      <button class="ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </footer>
  </div>
</div>
```

#### React

```tsx
<button data-modal-target="#myModal">Open Modal</button>
<div id="myModal" className="ux4g-modal" role="dialog" aria-modal="true">
  <div className="ux4g-modal-box ux4g-modal-m">
    <header className="ux4g-modal-header">
      <div className="ux4g-modal-header-title-content">
        <h2 className="ux4g-modal-header-title">Title</h2>
      </div>
      <button className="ux4g-modal-close" data-close-modal>
        <span className="ux4g-icon-outlined ux4g-modal-close-icon">close</span>
      </button>
    </header>
    <div className="ux4g-modal-body">Content here</div>
    <footer className="ux4g-modal-actions">
      <button className="ux4g-btn-outline-primary">Cancel</button>
      <button className="ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </footer>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Sizes | `ux4g-modal-s`, `ux4g-modal-m`, `ux4g-modal-l` |
| Layout | `ux4g-modal-center-content` |
| Danger | Add `ux4g-border-error ux4g-border` to modal-box |
| Image | Add `ux4g-modal-image` div before header |

---

### Textarea

#### HTML

```html
<div class="ux4g-textarea">
  <label class="ux4g-textarea-label">Description</label>
  <textarea class="ux4g-textarea-input" maxlength="200" placeholder="Enter description"></textarea>
  <span class="ux4g-textarea-counter">0 / 200</span>
</div>
```

#### React

```tsx
<div className="ux4g-textarea">
  <label className="ux4g-textarea-label">Description</label>
  <textarea className="ux4g-textarea-input" maxLength={200} placeholder="Enter description"></textarea>
  <span className="ux4g-textarea-counter">0 / 200</span>
</div>
```

---

### Dropdown

#### HTML

```html
<div class="ux4g-dropdown ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-m ux4g-dropdown-default">
  <button class="ux4g-dropdown-control" aria-expanded="false">Select option</button>
  <ul class="ux4g-dropdown-menu">
    <li class="ux4g-dropdown-item">Option 1</li>
    <li class="ux4g-dropdown-item">Option 2</li>
  </ul>
</div>
```

#### Angular

```html
<div class="ux4g-dropdown ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-m ux4g-dropdown-default">
  <button class="ux4g-dropdown-control" aria-expanded="false">Select option</button>
  <ul class="ux4g-dropdown-menu">
    <li class="ux4g-dropdown-item">Option 1</li>
    <li class="ux4g-dropdown-item">Option 2</li>
  </ul>
</div>
```

#### React

```tsx
<div className="ux4g-dropdown ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-m ux4g-dropdown-default">
  <button className="ux4g-dropdown-control" aria-expanded="false">Select option</button>
  <ul className="ux4g-dropdown-menu">
    <li className="ux4g-dropdown-item">Option 1</li>
    <li className="ux4g-dropdown-item">Option 2</li>
  </ul>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Types | `ux4g-dropdown-selection`, `ux4g-dropdown-button`, `ux4g-dropdown-overflow` |
| Modes | `ux4g-dropdown-single`, `ux4g-dropdown-multi` |
| Sizes | `ux4g-dropdown-s`, `ux4g-dropdown-m`, `ux4g-dropdown-l` |
| States | `ux4g-dropdown-default`, `ux4g-dropdown-error`, `ux4g-dropdown-success`, `ux4g-dropdown-warning` |

---

### Combobox

#### HTML

```html
<div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-m ux4g-combobox-default">
  <input type="text" role="combobox" aria-expanded="false" placeholder="Search..." />
  <ul class="ux4g-combobox-menu" role="listbox">
    <li class="ux4g-combobox-option" role="option">Result 1</li>
    <li class="ux4g-combobox-option" role="option">Result 2</li>
  </ul>
</div>
```

#### Angular

```html
<div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-m ux4g-combobox-default">
  <input type="text" role="combobox" aria-expanded="false" placeholder="Search..." />
  <ul class="ux4g-combobox-menu" role="listbox">
    <li class="ux4g-combobox-option" role="option">Result 1</li>
    <li class="ux4g-combobox-option" role="option">Result 2</li>
  </ul>
</div>
```

#### React

```tsx
<div className="ux4g-combobox ux4g-combobox-single ux4g-combobox-m ux4g-combobox-default">
  <input type="text" role="combobox" aria-expanded="false" placeholder="Search..." />
  <ul className="ux4g-combobox-menu" role="listbox">
    <li className="ux4g-combobox-option" role="option">Result 1</li>
    <li className="ux4g-combobox-option" role="option">Result 2</li>
  </ul>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Types | `ux4g-combobox-single`, `ux4g-combobox-multi` |
| Sizes | `ux4g-combobox-s`, `ux4g-combobox-m`, `ux4g-combobox-l` |
| States | `ux4g-combobox-default`, `ux4g-combobox-error`, `ux4g-combobox-success`, `ux4g-combobox-warning` |

---

### Date Picker

#### HTML

```html
<div class="ux4g-date-picker-container">
  <input type="text" class="ux4g-date-picker-input" placeholder="Select date" readonly />
</div>
<div class="ux4g-time-picker-container">
  <input type="text" class="ux4g-time-picker-input" placeholder="Select time" readonly />
</div>
```

#### Angular

```html
<div class="ux4g-date-picker-container">
  <input type="text" class="ux4g-date-picker-input" placeholder="Select date" readonly />
</div>
```

#### React

```tsx
<div className="ux4g-date-picker-container">
  <input type="text" className="ux4g-date-picker-input" placeholder="Select date" readOnly />
</div>
```

---

### OTP

#### HTML

```html
<div class="ux4g-otp">
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
</div>
```

#### React

```tsx
<div className="ux4g-otp">
  <input type="text" maxLength={1} />
  <input type="text" maxLength={1} />
  <input type="text" maxLength={1} />
  <input type="text" maxLength={1} />
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| States | default, `ux4g-otp-success`, `ux4g-otp-error`, `ux4g-otp-locked` |

---

### Input Aadhaar

#### HTML

```html
<div class="ux4g-input-container ux4g-input-m ux4g-input-default">
  <label>Aadhaar Number</label>
  <input type="text" maxlength="14" placeholder="XXXX XXXX XXXX" />
</div>
```

#### React

```tsx
<div className="ux4g-input-container ux4g-input-m ux4g-input-default">
  <label>Aadhaar Number</label>
  <input type="text" maxLength={14} placeholder="XXXX XXXX XXXX" />
</div>
```

---

### Input PAN Card

#### HTML

```html
<div class="ux4g-input-container ux4g-input-m ux4g-input-default">
  <label>PAN Number</label>
  <input type="text" maxlength="10" placeholder="ABCDE1234F" />
</div>
```

#### React

```tsx
<div className="ux4g-input-container ux4g-input-m ux4g-input-default">
  <label>PAN Number</label>
  <input type="text" maxLength={10} placeholder="ABCDE1234F" />
</div>
```

---

### Form Field

#### HTML

```html
<div class="ux4g-form-group">
  <label>Full Name</label>
  <input type="text" class="ux4g-input-m" placeholder="Enter name" />
  <span class="ux4g-form-helper">Enter your full legal name</span>
</div>
```

#### Angular

```html
<div class="ux4g-form-group">
  <label>Full Name</label>
  <input type="text" class="ux4g-input-m" placeholder="Enter name" />
  <span class="ux4g-form-helper">Enter your full legal name</span>
</div>
```

#### React

```tsx
<div className="ux4g-form-group">
  <label>Full Name</label>
  <input type="text" className="ux4g-input-m" placeholder="Enter name" />
  <span className="ux4g-form-helper">Enter your full legal name</span>
</div>
```

---

### File Upload

#### HTML

```html
<div class="ux4g-upload ux4g-upload-state-default">
  <input type="file" />
  <span>Drag & drop or click to upload</span>
</div>
<div class="ux4g-upload ux4g-upload-state-uploaded">
  <span>document.pdf</span>
  <button class="ux4g-upload-remove">&times;</button>
</div>
```

#### Angular

```html
<div class="ux4g-upload ux4g-upload-state-default">
  <input type="file" />
  <span>Drag & drop or click to upload</span>
</div>
```

#### React

```tsx
<div className="ux4g-upload ux4g-upload-state-default">
  <input type="file" />
  <span>Drag & drop or click to upload</span>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| States | `ux4g-upload-state-default`, `ux4g-upload-state-selecting`, `ux4g-upload-state-scanning`, `ux4g-upload-state-uploaded`, `ux4g-upload-state-error` |

---

### Slider

#### HTML

```html
<div class="ux4g-slider-field ux4g-slider-m">
  <input type="range" min="0" max="100" value="50" />
</div>
```

#### Angular

```html
<div class="ux4g-slider-field ux4g-slider-m">
  <input type="range" min="0" max="100" value="50" />
</div>
```

#### React

```tsx
<div className="ux4g-slider-field ux4g-slider-m">
  <input type="range" min="0" max="100" defaultValue="50" />
</div>
```

---

### Search

#### HTML

```html
<div class="ux4g-search-container ux4g-search-m">
  <input type="search" class="ux4g-search-input" placeholder="Search..." />
  <button class="ux4g-search-clear" aria-label="Clear">&times;</button>
</div>
```

#### Angular

```html
<div class="ux4g-search-container ux4g-search-m">
  <input type="search" class="ux4g-search-input" placeholder="Search..." />
  <button class="ux4g-search-clear" aria-label="Clear">&times;</button>
</div>
```

#### React

```tsx
<div className="ux4g-search-container ux4g-search-m">
  <input type="search" className="ux4g-search-input" placeholder="Search..." />
  <button className="ux4g-search-clear" aria-label="Clear">&times;</button>
</div>
```

---

### Table

#### HTML

```html
<table class="ux4g-table ux4g-table-m ux4g-table-zebra-rows">
  <thead><tr><th>Name</th><th>Email</th></tr></thead>
  <tbody>
    <tr><td>Alice</td><td>alice@example.com</td></tr>
    <tr><td>Bob</td><td>bob@example.com</td></tr>
  </tbody>
</table>
```

#### Angular

```html
<table class="ux4g-table ux4g-table-m ux4g-table-zebra-rows">
  <thead><tr><th>Name</th><th>Email</th></tr></thead>
  <tbody>
    <tr><td>Alice</td><td>alice@example.com</td></tr>
    <tr><td>Bob</td><td>bob@example.com</td></tr>
  </tbody>
</table>
```

#### React

```tsx
<table className="ux4g-table ux4g-table-m ux4g-table-zebra-rows">
  <thead><tr><th>Name</th><th>Email</th></tr></thead>
  <tbody>
    <tr><td>Alice</td><td>alice@example.com</td></tr>
    <tr><td>Bob</td><td>bob@example.com</td></tr>
  </tbody>
</table>
```

#### Available Classes

| Category | Classes |
|---|---|
| Sizes | `ux4g-table-s`, `ux4g-table-m`, `ux4g-table-l` |
| Dividers | `ux4g-table-column-dividers`, `ux4g-table-no-row-dividers` |
| Zebra | `ux4g-table-zebra-rows`, `ux4g-table-zebra-cols` |
| Modifiers | `ux4g-table-interactive`, `ux4g-table-sortable`, `ux4g-table-header-brand` |

---

### Pagination

#### HTML

```html
<nav class="ux4g-pagination">
  <button class="ux4g-pagination-prev">&laquo;</button>
  <button class="active">1</button>
  <button>2</button>
  <button>3</button>
  <button class="ux4g-pagination-next">&raquo;</button>
</nav>
```

#### Angular

```html
<nav class="ux4g-pagination">
  <button class="ux4g-pagination-prev">&laquo;</button>
  <button class="active">1</button>
  <button>2</button>
  <button>3</button>
  <button class="ux4g-pagination-next">&raquo;</button>
</nav>
```

#### React

```tsx
<nav className="ux4g-pagination">
  <button className="ux4g-pagination-prev">&laquo;</button>
  <button className="active">1</button>
  <button>2</button>
  <button>3</button>
  <button className="ux4g-pagination-next">&raquo;</button>
</nav>
```

---

### List

#### HTML

```html
<ul class="ux4g-list ux4g-list-default ux4g-list-m">
  <li class="ux4g-list-item"><div class="ux4g-list-item-row"><span class="ux4g-list-item-start">Item one</span></div></li>
  <li class="ux4g-list-item"><div class="ux4g-list-item-row"><span class="ux4g-list-item-start">Item two</span></div></li>
</ul>
```

#### React

```tsx
<ul className="ux4g-list ux4g-list-default ux4g-list-m">
  <li className="ux4g-list-item"><div className="ux4g-list-item-row"><span className="ux4g-list-item-start">Item one</span></div></li>
  <li className="ux4g-list-item"><div className="ux4g-list-item-row"><span className="ux4g-list-item-start">Item two</span></div></li>
</ul>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variants | `ux4g-list-default`, `ux4g-list-error`, `ux4g-list-success`, `ux4g-list-warning` |
| Sizes | `ux4g-list-s`, `ux4g-list-m`, `ux4g-list-l`, `ux4g-list-xl` |

---

### Result List

#### HTML

```html
<div class="ux4g-result-list">
  <div class="ux4g-result-list-item"><h4>Result Title</h4><p>Description text</p></div>
</div>
```

#### React

```tsx
<div className="ux4g-result-list">
  <div className="ux4g-result-list-item"><h4>Result Title</h4><p>Description text</p></div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variations | default, `ux4g-result-list-v1`, `ux4g-result-list-v2`, `ux4g-result-list-v3`, `ux4g-result-list-v4`, `ux4g-result-list-v5` |

---

### Accordion

#### HTML

```html
<div class="ux4g-accordion ux4g-accordion-arrow-right">
  <div class="ux4g-accordion__item">
    <button class="ux4g-accordion__header" data-ux4g-accordion-toggle>Section 1</button>
    <div class="ux4g-accordion__body">Content for section 1</div>
  </div>
</div>
```

#### Angular

```html
<div class="ux4g-accordion ux4g-accordion-arrow-right">
  <div class="ux4g-accordion__item">
    <button class="ux4g-accordion__header" data-ux4g-accordion-toggle>Section 1</button>
    <div class="ux4g-accordion__body">Content for section 1</div>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-accordion ux4g-accordion-arrow-right">
  <div className="ux4g-accordion__item">
    <button className="ux4g-accordion__header" data-ux4g-accordion-toggle>Section 1</button>
    <div className="ux4g-accordion__body">Content for section 1</div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Arrow | `ux4g-accordion-arrow-right`, `ux4g-accordion-arrow-left` |
| Variant | `ux4g-accordion-bordered` |

---

### Tab

#### HTML

```html
<div class="ux4g-tab ux4g-tab-underline ux4g-tab-m">
  <ul class="ux4g-tab-list">
    <li class="ux4g-tab-item is-active">Tab 1</li>
    <li class="ux4g-tab-item">Tab 2</li>
    <li class="ux4g-tab-item">Tab 3</li>
  </ul>
</div>
```

#### Angular

```html
<div class="ux4g-tab ux4g-tab-underline ux4g-tab-m">
  <ul class="ux4g-tab-list">
    <li class="ux4g-tab-item is-active">Tab 1</li>
    <li class="ux4g-tab-item">Tab 2</li>
    <li class="ux4g-tab-item">Tab 3</li>
  </ul>
</div>
```

#### React

```tsx
<div className="ux4g-tab ux4g-tab-underline ux4g-tab-m">
  <ul className="ux4g-tab-list">
    <li className="ux4g-tab-item is-active">Tab 1</li>
    <li className="ux4g-tab-item">Tab 2</li>
    <li className="ux4g-tab-item">Tab 3</li>
  </ul>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variants | `ux4g-tab-underline`, `ux4g-tab-pill` |
| Sizes | `ux4g-tab-s`, `ux4g-tab-m`, `ux4g-tab-l` |
| Vertical | `ux4g-tab-vertical` |

---

### Stepper

#### HTML

```html
<div class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center">
  <div class="ux4g-stepper-step completed">Step 1</div>
  <div class="ux4g-stepper-step active">Step 2</div>
  <div class="ux4g-stepper-step">Step 3</div>
</div>
```

#### Angular

```html
<div class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center">
  <div class="ux4g-stepper-step completed">Step 1</div>
  <div class="ux4g-stepper-step active">Step 2</div>
  <div class="ux4g-stepper-step">Step 3</div>
</div>
```

#### React

```tsx
<div className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center">
  <div className="ux4g-stepper-step completed">Step 1</div>
  <div className="ux4g-stepper-step active">Step 2</div>
  <div className="ux4g-stepper-step">Step 3</div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Orientation | `ux4g-stepper-vertical`, `ux4g-stepper-horizontal` |
| Alignment | `ux4g-stepper-center`, `ux4g-stepper-left` |
| Variants | `ux4g-stepper-bottom-line`, `ux4g-stepper-progress`, `ux4g-stepper-mobile` |

---

### Progress Indicator

#### HTML

```html
<div class="ux4g-progress-bar">
  <div class="ux4g-progress-bar-fill" style="width: 60%"></div>
</div>
```

#### React

```tsx
<div className="ux4g-progress-bar">
  <div className="ux4g-progress-bar-fill" style={{ width: '60%' }}></div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Types | `ux4g-progress-bar`, `ux4g-progress-circle` |

---

### SLA Progress Indicator

#### HTML

```html
<div class="ux4g-sla-circle"><span>75%</span></div>
<div class="ux4g-sla-linear"><div class="ux4g-sla-fill" style="width: 75%"></div></div>
<span class="ux4g-sla-badge">On Track</span>
```

#### React

```tsx
<div className="ux4g-sla-circle"><span>75%</span></div>
<div className="ux4g-sla-linear"><div className="ux4g-sla-fill" style={{ width: '75%' }}></div></div>
<span className="ux4g-sla-badge">On Track</span>
```

#### Available Classes

| Category | Classes |
|---|---|
| Types | `ux4g-sla-circle`, `ux4g-sla-linear`, `ux4g-sla-badge` |

---

### Status Pipeline

#### HTML

```html
<div class="ux4g-status-pipeline-stepper">
  <div class="ux4g-status-pipeline-step completed">Submitted</div>
  <div class="ux4g-status-pipeline-step active">In Review</div>
  <div class="ux4g-status-pipeline-step">Approved</div>
</div>
```

#### React

```tsx
<div className="ux4g-status-pipeline-stepper">
  <div className="ux4g-status-pipeline-step completed">Submitted</div>
  <div className="ux4g-status-pipeline-step active">In Review</div>
  <div className="ux4g-status-pipeline-step">Approved</div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Orientation | `ux4g-status-pipeline-vertical`, `ux4g-status-pipeline-horizontal` |

---

### Journey Timeline

#### HTML

```html
<div class="ux4g-journey-timeline ux4g-journey-timeline--vertical">
  <div class="ux4g-journey-timeline-item">
    <div class="ux4g-journey-timeline-marker"></div>
    <div class="ux4g-journey-timeline-content">Event 1</div>
  </div>
  <div class="ux4g-journey-timeline-item">
    <div class="ux4g-journey-timeline-marker"></div>
    <div class="ux4g-journey-timeline-content">Event 2</div>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-journey-timeline ux4g-journey-timeline--vertical">
  <div className="ux4g-journey-timeline-item">
    <div className="ux4g-journey-timeline-marker"></div>
    <div className="ux4g-journey-timeline-content">Event 1</div>
  </div>
  <div className="ux4g-journey-timeline-item">
    <div className="ux4g-journey-timeline-marker"></div>
    <div className="ux4g-journey-timeline-content">Event 2</div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Orientation | `ux4g-journey-timeline--vertical`, `ux4g-journey-timeline--horizontal` |

---

### Time Slot

#### HTML

```html
<div class="ux4g-time-slot-weekly-container">
  <div class="ux4g-time-slot">9:00 AM</div>
  <div class="ux4g-time-slot">10:00 AM</div>
  <div class="ux4g-time-slot selected">11:00 AM</div>
</div>
```

#### React

```tsx
<div className="ux4g-time-slot-weekly-container">
  <div className="ux4g-time-slot">9:00 AM</div>
  <div className="ux4g-time-slot">10:00 AM</div>
  <div className="ux4g-time-slot selected">11:00 AM</div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Containers | `ux4g-time-slot-weekly-container`, `ux4g-time-slot-compact-container` |
| State | `selected` |

---

### Draft Status

#### HTML

```html
<div class="ux4g-daft-staus-bar">Draft saved</div>
<div class="ux4g-auto-daft-staus-bar">Auto-saving...</div>
<div class="ux4g-success-daft-staus-bar">Published successfully</div>
```

#### Angular

```html
<div class="ux4g-daft-staus-bar">Draft saved</div>
<div class="ux4g-auto-daft-staus-bar">Auto-saving...</div>
<div class="ux4g-success-daft-staus-bar">Published successfully</div>
```

#### React

```tsx
<div className="ux4g-daft-staus-bar">Draft saved</div>
<div className="ux4g-auto-daft-staus-bar">Auto-saving...</div>
<div className="ux4g-success-daft-staus-bar">Published successfully</div>
```

---

### Empty State

#### HTML

```html
<div class="ux4g-empty-state">
  <img src="empty-illustration.svg" alt="" />
  <h3>No results found</h3>
  <p>Try adjusting your search or filters.</p>
  <button class="ux4g-btn-primary ux4g-btn-m ">Reset Filters</button>
</div>
```

#### Angular

```html
<div class="ux4g-empty-state">
  <img src="empty-illustration.svg" alt="" />
  <h3>No results found</h3>
  <p>Try adjusting your search or filters.</p>
  <button class="ux4g-btn-primary ux4g-btn-m ">Reset Filters</button>
</div>
```

#### React

```tsx
<div className="ux4g-empty-state">
  <img src="empty-illustration.svg" alt="" />
  <h3>No results found</h3>
  <p>Try adjusting your search or filters.</p>
  <button className="ux4g-btn-primary ux4g-btn-m ">Reset Filters</button>
</div>
```

---

### Feedback

#### HTML

```html
<div class="ux4g-feedback">
  <p>Was this helpful?</p>
  <div class="ux4g-feedback-chip-wrapper">
    <button class="ux4g-filter-chip-m">Yes</button>
    <button class="ux4g-filter-chip-m">No</button>
  </div>
</div>
```

#### Angular

```html
<div class="ux4g-feedback">
  <p>Was this helpful?</p>
  <div class="ux4g-feedback-chip-wrapper">
    <button class="ux4g-filter-chip-m">Yes</button>
    <button class="ux4g-filter-chip-m">No</button>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-feedback">
  <p>Was this helpful?</p>
  <div className="ux4g-feedback-chip-wrapper">
    <button className="ux4g-filter-chip-m">Yes</button>
    <button className="ux4g-filter-chip-m">No</button>
  </div>
</div>
```

---

### Alert

#### HTML

```html
<div class="ux4g-alert ux4g-alert-info">
  <span>Informational message.</span>
  <button class="ux4g-alert-close">&times;</button>
</div>
<div class="ux4g-context-alert ux4g-alert-warning">
  <span>Warning: Check your input.</span>
</div>
```

#### Angular

```html
<div class="ux4g-alert ux4g-alert-info">
  <span>Informational message.</span>
  <button class="ux4g-alert-close">&times;</button>
</div>
```

#### React

```tsx
<div className="ux4g-alert ux4g-alert-info">
  <span>Informational message.</span>
  <button className="ux4g-alert-close">&times;</button>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variants | `ux4g-alert-info`, `ux4g-alert-success`, `ux4g-alert-warning`, `ux4g-alert-error` |
| Types | `ux4g-alert`, `ux4g-context-alert` |
| Positions | `ux4g-alert-top-left`, `ux4g-alert-top-right`, `ux4g-alert-bottom-left`, `ux4g-alert-bottom-right` |

---

### Tooltip

#### HTML

```html
<div class="ux4g-tooltip-wrapper">
  <button>Hover me</button>
  <span class="ux4g-tooltip ux4g-tooltip-top-center-m">Tooltip text</span>
</div>
```

#### Angular

```html
<div class="ux4g-tooltip-wrapper">
  <button>Hover me</button>
  <span class="ux4g-tooltip ux4g-tooltip-top-center-m">Tooltip text</span>
</div>
```

#### React

```tsx
<div className="ux4g-tooltip-wrapper">
  <button>Hover me</button>
  <span className="ux4g-tooltip ux4g-tooltip-top-center-m">Tooltip text</span>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Placements | `ux4g-tooltip-top-left-m`, `ux4g-tooltip-top-center-m`, `ux4g-tooltip-top-right-m`, `ux4g-tooltip-bottom-left-m`, `ux4g-tooltip-bottom-center-m`, `ux4g-tooltip-bottom-right-m`, `ux4g-tooltip-left-center-m`, `ux4g-tooltip-right-center-m` |
| Sizes | Replace `-m` with `-s` or `-xs` |

---

### Popover

#### HTML

```html
<button data-ux-toggle="popover" data-ux-content="Popover body" data-ux-title="Title" data-ux-placement="right">Show Popover</button>
```

#### Angular

```html
<button data-ux-toggle="popover" data-ux-content="Popover body" data-ux-title="Title" data-ux-placement="right">Show Popover</button>
```

#### React

```tsx
<button data-ux-toggle="popover" data-ux-content="Popover body" data-ux-title="Title" data-ux-placement="right">Show Popover</button>
```

#### Available Classes

| Category | Classes |
|---|---|
| Placements | `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` |
| Options | `data-ux-arrow="false"` (disable arrow), `data-ux-html="true"` (HTML content) |

---

### Backdrop

#### HTML

```html
<div class="ux4g-modal-backdrop ux4g-modal-backdrop-50">
  <!-- Modal or Drawer content goes here -->
</div>
```

#### Angular

```html
<div class="ux4g-modal-backdrop ux4g-modal-backdrop-50">
  <!-- Modal or Drawer content goes here -->
</div>
```

#### React

```tsx
<div className="ux4g-modal-backdrop ux4g-modal-backdrop-50">
  {/* Modal or Drawer content goes here */}
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Opacity | `ux4g-modal-backdrop-25`, `ux4g-modal-backdrop-50`, `ux4g-modal-backdrop-75` |
| Blur | `ux4g-modal-backdrop-blur` |
#### React

```tsx
<button className="ux4g-btn ux4g-btn-primary ux4g-btn-m " data-drawer="ux4g-drawerRight">Open Drawer</button>
<div className="ux4g-drawer-overlay">
  <div className="ux4g-drawer ux4g-drawer-right" id="ux4g-drawerRight">
    <div className="ux4g-drawer-header">
      <div className="ux4g-drawer-title-group">
        <div className="ux4g-drawer-title-wrapper">
          <i className="ux4g-icon">token</i>
          <span className="ux4g-drawer-title">Drawer Title</span>
        </div>
        <span className="ux4g-drawer-subtitle">Subtitle text</span>
      </div>
      <button className="ux4g-drawer-close" data-drawer-close>
        <i className="ux4g-icon-outlined">close</i>
      </button>
    </div>
    <div className="ux4g-drawer-body">Drawer content</div>
    <div className="ux4g-drawer-footer">
      <button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-m " data-drawer-close>Cancel</button>
      <button className="ux4g-btn ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Placements | `ux4g-drawer-right`, `ux4g-drawer-left`, `ux4g-drawer-top`, `ux4g-drawer-bottom` |
| Structure | `ux4g-drawer-overlay`, `ux4g-drawer-header`, `ux4g-drawer-body`, `ux4g-drawer-footer` |
| Trigger | `data-drawer="{id}"` on button, `data-drawer-close` on close button |

---

### Modal

#### HTML

```html
<button data-modal-target="#myModal">Open Modal</button>
<div id="myModal" class="ux4g-modal-backdrop ux4g-modal-backdrop-50" role="dialog" aria-modal="true">
  <div class="ux4g-modal-box ux4g-modal-m">
    <div class="ux4g-modal-header">
      <h2>Title</h2>
      <button data-close-modal>&times;</button>
    </div>
    <div class="ux4g-modal-body">Content here</div>
    <div class="ux4g-modal-footer">
      <button class="ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </div>
  </div>
</div>
```

#### Angular

```html
<button data-modal-target="#myModal">Open Modal</button>
<div id="myModal" class="ux4g-modal-backdrop ux4g-modal-backdrop-50" role="dialog" aria-modal="true">
  <div class="ux4g-modal-box ux4g-modal-m">
    <div class="ux4g-modal-header">
      <h2>Title</h2>
      <button data-close-modal>&times;</button>
    </div>
    <div class="ux4g-modal-body">Content here</div>
    <div class="ux4g-modal-footer">
      <button class="ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </div>
  </div>
</div>
```

#### React

```tsx
<button data-modal-target="#myModal">Open Modal</button>
<div id="myModal" className="ux4g-modal-backdrop ux4g-modal-backdrop-50" role="dialog" aria-modal="true">
  <div className="ux4g-modal-box ux4g-modal-m">
    <div className="ux4g-modal-header">
      <h2>Title</h2>
      <button data-close-modal>&times;</button>
    </div>
    <div className="ux4g-modal-body">Content here</div>
    <div className="ux4g-modal-footer">
      <button className="ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Backdrop | `ux4g-modal-backdrop-25`, `ux4g-modal-backdrop-50`, `ux4g-modal-backdrop-75`, `ux4g-modal-backdrop-blur` |
| Sizes | `ux4g-modal-s`, `ux4g-modal-m`, `ux4g-modal-l` |
| Variants | `ux4g-modal-center-content`, `ux4g-border-error` (danger) |
#### Angular

```html
<div class="ux4g-carousel ux4g-bg-primary" aria-label="Carousel" aria-roledescription="carousel">
  <div class="ux4g-carousel-viewport">
    <div class="ux4g-carousel-slides">
      <div class="ux4g-carousel-slide is-active">
        <h2 class="ux4g-heading-l-strong">Slide 1</h2>
        <p class="ux4g-title-s-default">Banner content</p>
      </div>
      <div class="ux4g-carousel-slide">
        <h2 class="ux4g-heading-l-strong">Slide 2</h2>
        <p class="ux4g-title-s-default">Banner content</p>
      </div>
    </div>
  </div>
  <div class="ux4g-carousel-controls">
    <button type="button" class="ux4g-carousel-arrow ux4g-carousel-arrow-prev" aria-label="Previous slide">
      <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_left</span>
    </button>
    <div class="ux4g-carousel-pagination" aria-label="Carousel pagination">
      <div class="ux4g-carousel-dot is-active" aria-label="Go to slide 1"></div>
      <div class="ux4g-carousel-dot" aria-label="Go to slide 2"></div>
    </div>
    <button type="button" class="ux4g-carousel-arrow ux4g-carousel-arrow-next" aria-label="Next slide">
      <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_right</span>
    </button>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-carousel ux4g-bg-primary" aria-label="Carousel" aria-roledescription="carousel">
  <div className="ux4g-carousel-viewport">
    <div className="ux4g-carousel-slides">
      <div className="ux4g-carousel-slide is-active">
        <h2 className="ux4g-heading-l-strong">Slide 1</h2>
        <p className="ux4g-title-s-default">Banner content</p>
      </div>
      <div className="ux4g-carousel-slide">
        <h2 className="ux4g-heading-l-strong">Slide 2</h2>
        <p className="ux4g-title-s-default">Banner content</p>
      </div>
    </div>
  </div>
  <div className="ux4g-carousel-controls">
    <button type="button" className="ux4g-carousel-arrow ux4g-carousel-arrow-prev" aria-label="Previous slide">
      <span className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_left</span>
    </button>
    <div className="ux4g-carousel-pagination" aria-label="Carousel pagination">
      <div className="ux4g-carousel-dot is-active" aria-label="Go to slide 1"></div>
      <div className="ux4g-carousel-dot" aria-label="Go to slide 2"></div>
    </div>
    <button type="button" className="ux4g-carousel-arrow ux4g-carousel-arrow-next" aria-label="Next slide">
      <span className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_right</span>
    </button>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Structure | `ux4g-carousel`, `ux4g-carousel-viewport`, `ux4g-carousel-slides`, `ux4g-carousel-slide` |
| Controls | `ux4g-carousel-controls`, `ux4g-carousel-arrow`, `ux4g-carousel-arrow-prev`, `ux4g-carousel-arrow-next` |
| Pagination | `ux4g-carousel-pagination`, `ux4g-carousel-dot` |
| Filled Controls | `ux4g-carousel-filled` (on controls wrapper for mobile) |
| State | `is-active` on slide and dot |

---

### Drawer

#### HTML

```html
<button data-drawer="drawer1">Open Drawer</button>
<div class="ux4g-drawer-overlay">
  <div id="drawer1" class="ux4g-drawer ux4g-drawer-right">
    <div class="ux4g-drawer-header">
      <div class="ux4g-drawer-title-group">
        <div class="ux4g-drawer-title-wrapper">
          <i class="ux4g-icon">token</i>
          <span class="ux4g-drawer-title">Drawer Title</span>
        </div>
        <span class="ux4g-drawer-subtitle">Subtitle text</span>
      </div>
      <button class="ux4g-drawer-close" data-drawer-close>
        <i class="ux4g-icon-outlined">close</i>
      </button>
    </div>
    <div class="ux4g-drawer-body">Drawer content</div>
    <div class="ux4g-drawer-footer">
      <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-m " data-drawer-close>Cancel</button>
      <button class="ux4g-btn ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </div>
  </div>
</div>
```

#### Angular

```html
<button data-drawer="drawer1">Open Drawer</button>
<div class="ux4g-drawer-overlay">
  <div id="drawer1" class="ux4g-drawer ux4g-drawer-right">
    <div class="ux4g-drawer-header">
      <div class="ux4g-drawer-title-group">
        <div class="ux4g-drawer-title-wrapper">
          <i class="ux4g-icon">token</i>
          <span class="ux4g-drawer-title">Drawer Title</span>
        </div>
        <span class="ux4g-drawer-subtitle">Subtitle text</span>
      </div>
      <button class="ux4g-drawer-close" data-drawer-close>
        <i class="ux4g-icon-outlined">close</i>
      </button>
    </div>
    <div class="ux4g-drawer-body">Drawer content</div>
    <div class="ux4g-drawer-footer">
      <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-m " data-drawer-close>Cancel</button>
      <button class="ux4g-btn ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </div>
  </div>
</div>
```

#### React

```tsx
<button data-drawer="drawer1">Open Drawer</button>
<div className="ux4g-drawer-overlay">
  <div id="drawer1" className="ux4g-drawer ux4g-drawer-right">
    <div className="ux4g-drawer-header">
      <div className="ux4g-drawer-title-group">
        <div className="ux4g-drawer-title-wrapper">
          <i className="ux4g-icon">token</i>
          <span className="ux4g-drawer-title">Drawer Title</span>
        </div>
        <span className="ux4g-drawer-subtitle">Subtitle text</span>
      </div>
      <button className="ux4g-drawer-close" data-drawer-close>
        <i className="ux4g-icon-outlined">close</i>
      </button>
    </div>
    <div className="ux4g-drawer-body">Drawer content</div>
    <div className="ux4g-drawer-footer">
      <button className="ux4g-btn ux4g-btn-outline-primary ux4g-btn-m " data-drawer-close>Cancel</button>
      <button className="ux4g-btn ux4g-btn-primary ux4g-btn-m ">Confirm</button>
    </div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Placements | `ux4g-drawer-right`, `ux4g-drawer-left`, `ux4g-drawer-top`, `ux4g-drawer-bottom` |
| Structure | `ux4g-drawer-overlay`, `ux4g-drawer-header`, `ux4g-drawer-body`, `ux4g-drawer-footer` |

---

### Carousel

#### HTML

```html
<div class="ux4g-carousel ux4g-bg-primary" aria-roledescription="carousel">
  <div class="ux4g-carousel-viewport">
    <div class="ux4g-carousel-slides">
      <div class="ux4g-carousel-slide is-active">
        <h2 class="ux4g-heading-l-strong">Slide 1</h2>
        <p class="ux4g-title-s-default">Banner content</p>
      </div>
      <div class="ux4g-carousel-slide">
        <h2 class="ux4g-heading-l-strong">Slide 2</h2>
        <p class="ux4g-title-s-default">Banner content</p>
      </div>
    </div>
  </div>
  <div class="ux4g-carousel-controls">
    <button class="ux4g-carousel-arrow ux4g-carousel-arrow-prev" aria-label="Previous slide">
      <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_left</span>
    </button>
    <div class="ux4g-carousel-pagination">
      <div class="ux4g-carousel-dot is-active" aria-label="Go to slide 1"></div>
      <div class="ux4g-carousel-dot" aria-label="Go to slide 2"></div>
    </div>
    <button class="ux4g-carousel-arrow ux4g-carousel-arrow-next" aria-label="Next slide">
      <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_right</span>
    </button>
  </div>
</div>
```

#### Angular

```html
<div class="ux4g-carousel ux4g-bg-primary" aria-roledescription="carousel">
  <div class="ux4g-carousel-viewport">
    <div class="ux4g-carousel-slides">
      <div class="ux4g-carousel-slide is-active">
        <h2 class="ux4g-heading-l-strong">Slide 1</h2>
        <p class="ux4g-title-s-default">Banner content</p>
      </div>
      <div class="ux4g-carousel-slide">
        <h2 class="ux4g-heading-l-strong">Slide 2</h2>
        <p class="ux4g-title-s-default">Banner content</p>
      </div>
    </div>
  </div>
  <div class="ux4g-carousel-controls">
    <button class="ux4g-carousel-arrow ux4g-carousel-arrow-prev" aria-label="Previous slide">
      <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_left</span>
    </button>
    <div class="ux4g-carousel-pagination">
      <div class="ux4g-carousel-dot is-active" aria-label="Go to slide 1"></div>
      <div class="ux4g-carousel-dot" aria-label="Go to slide 2"></div>
    </div>
    <button class="ux4g-carousel-arrow ux4g-carousel-arrow-next" aria-label="Next slide">
      <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_right</span>
    </button>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-carousel ux4g-bg-primary" aria-roledescription="carousel">
  <div className="ux4g-carousel-viewport">
    <div className="ux4g-carousel-slides">
      <div className="ux4g-carousel-slide is-active">
        <h2 className="ux4g-heading-l-strong">Slide 1</h2>
        <p className="ux4g-title-s-default">Banner content</p>
      </div>
      <div className="ux4g-carousel-slide">
        <h2 className="ux4g-heading-l-strong">Slide 2</h2>
        <p className="ux4g-title-s-default">Banner content</p>
      </div>
    </div>
  </div>
  <div className="ux4g-carousel-controls">
    <button className="ux4g-carousel-arrow ux4g-carousel-arrow-prev" aria-label="Previous slide">
      <span className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_left</span>
    </button>
    <div className="ux4g-carousel-pagination">
      <div className="ux4g-carousel-dot is-active" aria-label="Go to slide 1"></div>
      <div className="ux4g-carousel-dot" aria-label="Go to slide 2"></div>
    </div>
    <button className="ux4g-carousel-arrow ux4g-carousel-arrow-next" aria-label="Next slide">
      <span className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_right</span>
    </button>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Structure | `ux4g-carousel`, `ux4g-carousel-viewport`, `ux4g-carousel-slides`, `ux4g-carousel-slide` |
| Controls | `ux4g-carousel-controls`, `ux4g-carousel-arrow`, `ux4g-carousel-arrow-prev`, `ux4g-carousel-arrow-next`, `ux4g-carousel-pagination`, `ux4g-carousel-dot` |
| Modifiers | `ux4g-carousel-filled`, `is-active` |

---

### Header (Navbar)

#### HTML

```html
<nav class="ux4g-navbar">
  <div class="ux4g-container">
    <div class="ux4g-navbar-wrap">
      <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <img src="logo.svg" alt="Logo" class="ux4g-navbar-logo">
        <span class="ux4g-label-m-strong">Title</span>
      </div>
      <div class="ux4g-navbar-desktop">
        <ul class="ux4g-navbar-links">
          <li><a href="#" class="ux4g-text-link-s">Home</a></li>
          <li><a href="#" class="ux4g-text-link-s">About</a></li>
          <li><a href="#" class="ux4g-text-link-s">Contact</a></li>
        </ul>
      </div>
      <div class="ux4g-navbar-mobile">
        <button class="ux4g-dropdown-control ux4g-btn-outline-primary" data-ux-toggle="dropdown">
          <span class="ux4g-icon-outlined">menu</span>
        </button>
      </div>
    </div>
  </div>
</nav>
```

#### Angular

```html
<nav class="ux4g-navbar">
  <div class="ux4g-container">
    <div class="ux4g-navbar-wrap">
      <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <img src="logo.svg" alt="Logo" class="ux4g-navbar-logo">
        <span class="ux4g-label-m-strong">Title</span>
      </div>
      <div class="ux4g-navbar-desktop">
        <ul class="ux4g-navbar-links">
          <li><a href="#" class="ux4g-text-link-s">Home</a></li>
          <li><a href="#" class="ux4g-text-link-s">About</a></li>
          <li><a href="#" class="ux4g-text-link-s">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
```

#### React

```tsx
<nav className="ux4g-navbar">
  <div className="ux4g-container">
    <div className="ux4g-navbar-wrap">
      <div className="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <img src="logo.svg" alt="Logo" className="ux4g-navbar-logo" />
        <span className="ux4g-label-m-strong">Title</span>
      </div>
      <div className="ux4g-navbar-desktop">
        <ul className="ux4g-navbar-links">
          <li><a href="#" className="ux4g-text-link-s">Home</a></li>
          <li><a href="#" className="ux4g-text-link-s">About</a></li>
          <li><a href="#" className="ux4g-text-link-s">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
```

#### Available Classes

| Category | Classes |
|---|---|
| Structure | `ux4g-navbar`, `ux4g-navbar-wrap`, `ux4g-navbar-desktop`, `ux4g-navbar-mobile`, `ux4g-navbar-links`, `ux4g-navbar-logo`, `ux4g-navbar-brand` |
| Shape | `ux4g-radius-full` (pill navbar) |
#### Angular

```html
<header class="ux4g-topbar ux4g-topbar-wide" role="banner">
  <div class="ux4g-container">
    <div class="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
      <div>
        <a class="ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
          <span class="india-flag"></span>
          <span class="ux4g-label-m-default">Government of India</span>
        </a>
      </div>
      <nav aria-label="Top utilities" class="ux4g-d-flex ux4g-ai-center">
        <a class="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">Skip to Main Content</a>
      </nav>
    </div>
  </div>
</header>
```

#### React

```tsx
<header className="ux4g-topbar ux4g-topbar-wide" role="banner">
  <div className="ux4g-container">
    <div className="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
      <div>
        <a className="ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
          <span className="india-flag"></span>
          <span className="ux4g-label-m-default">Government of India</span>
        </a>
      </div>
      <nav aria-label="Top utilities" className="ux4g-d-flex ux4g-ai-center">
        <a className="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">Skip to Main Content</a>
      </nav>
    </div>
  </div>
</header>
```

#### Available Classes

| Category | Classes |
|---|---|
| Structure | `ux4g-topbar`, `ux4g-topbar-wide`, `ux4g-topbar__wrap`, `ux4g-topbar__group` |
| Elements | `ux4g-topbar__iconbtn`, `ux4g-topbar__skip`, `ux4g-topbar__select`, `ux4g-topbar__selectbtn` |
| Layout | Use `ux4g-container` for wide, `ux4g-container-fluid` for fluid |

---

### Mobile App Header

#### HTML

```html
<nav class="ux4g-navbar">
  <div class="ux4g-container">
    <div class="ux4g-navbar-wrap">
      <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <img src="logo.svg" alt="Logo" class="ux4g-navbar-logo">
        <span class="ux4g-label-m-strong">App Title</span>
      </div>
      <div class="ux4g-navbar-mobile">
        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
          <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
          <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">notifications</i>
          <button class="ux4g-dropdown-control ux4g-btn-outline-primary" data-ux-toggle="dropdown">
            <span class="ux4g-icon-outlined">menu</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
```

#### Angular

```html
<nav class="ux4g-navbar">
  <div class="ux4g-container">
    <div class="ux4g-navbar-wrap">
      <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <img src="logo.svg" alt="Logo" class="ux4g-navbar-logo">
        <span class="ux4g-label-m-strong">App Title</span>
      </div>
      <div class="ux4g-navbar-mobile">
        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
          <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
          <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">notifications</i>
          <button class="ux4g-dropdown-control ux4g-btn-outline-primary" data-ux-toggle="dropdown">
            <span class="ux4g-icon-outlined">menu</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
```

#### React

```tsx
<nav className="ux4g-navbar">
  <div className="ux4g-container">
    <div className="ux4g-navbar-wrap">
      <div className="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <img src="logo.svg" alt="Logo" className="ux4g-navbar-logo" />
        <span className="ux4g-label-m-strong">App Title</span>
      </div>
      <div className="ux4g-navbar-mobile">
        <div className="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
          <i className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
          <i className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">notifications</i>
          <button className="ux4g-dropdown-control ux4g-btn-outline-primary" data-ux-toggle="dropdown">
            <span className="ux4g-icon-outlined">menu</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
```

#### Available Classes

| Category | Classes |
|---|---|
| Structure | Uses `ux4g-navbar` with `ux4g-navbar-mobile` for compact mobile-first layout |

---

### Mega Menu

#### HTML

```html
<div class="ux4g-mega-menu">
  <div class="ux4g-mega-menu-container">
    <div class="ux4g-mega-menu-sidebar">
      <ul class="ux4g-mega-menu-category-list">
        <li class="ux4g-mega-menu-category-item ux4g-mega-menu-category-item--active">
          <a href="#" class="ux4g-mega-menu-category-link ux4g-body-s-default">Category 1</a>
        </li>
        <li class="ux4g-mega-menu-category-item">
          <a href="#" class="ux4g-mega-menu-category-link ux4g-body-s-default">Category 2</a>
        </li>
      </ul>
    </div>
    <div class="ux4g-mega-menu-content ux4g-mega-menu-content--active" id="category-1">
      <div class="ux4g-mega-menu-column">
        <h3 class="ux4g-mega-menu-title ux4g-heading-xs-strong">Title</h3>
        <ul class="ux4g-mega-menu-item-list">
          <li class="ux4g-mega-menu-item"><a href="#">Item 1</a></li>
          <li class="ux4g-mega-menu-item"><a href="#">Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

#### Angular

```html
<div class="ux4g-mega-menu">
  <div class="ux4g-mega-menu-container">
    <div class="ux4g-mega-menu-sidebar">
      <ul class="ux4g-mega-menu-category-list">
        <li class="ux4g-mega-menu-category-item ux4g-mega-menu-category-item--active">
          <a href="#" class="ux4g-mega-menu-category-link ux4g-body-s-default">Category 1</a>
        </li>
        <li class="ux4g-mega-menu-category-item">
          <a href="#" class="ux4g-mega-menu-category-link ux4g-body-s-default">Category 2</a>
        </li>
      </ul>
    </div>
    <div class="ux4g-mega-menu-content ux4g-mega-menu-content--active" id="category-1">
      <div class="ux4g-mega-menu-column">
        <h3 class="ux4g-mega-menu-title ux4g-heading-xs-strong">Title</h3>
        <ul class="ux4g-mega-menu-item-list">
          <li class="ux4g-mega-menu-item"><a href="#">Item 1</a></li>
          <li class="ux4g-mega-menu-item"><a href="#">Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-mega-menu">
  <div className="ux4g-mega-menu-container">
    <div className="ux4g-mega-menu-sidebar">
      <ul className="ux4g-mega-menu-category-list">
        <li className="ux4g-mega-menu-category-item ux4g-mega-menu-category-item--active">
          <a href="#" className="ux4g-mega-menu-category-link ux4g-body-s-default">Category 1</a>
        </li>
        <li className="ux4g-mega-menu-category-item">
          <a href="#" className="ux4g-mega-menu-category-link ux4g-body-s-default">Category 2</a>
        </li>
      </ul>
    </div>
    <div className="ux4g-mega-menu-content ux4g-mega-menu-content--active" id="category-1">
      <div className="ux4g-mega-menu-column">
        <h3 className="ux4g-mega-menu-title ux4g-heading-xs-strong">Title</h3>
        <ul className="ux4g-mega-menu-item-list">
          <li className="ux4g-mega-menu-item"><a href="#">Item 1</a></li>
          <li className="ux4g-mega-menu-item"><a href="#">Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Structure | `ux4g-mega-menu`, `ux4g-mega-menu-container`, `ux4g-mega-menu-sidebar`, `ux4g-mega-menu-category-list`, `ux4g-mega-menu-category-item`, `ux4g-mega-menu-category-link`, `ux4g-mega-menu-content`, `ux4g-mega-menu-column`, `ux4g-mega-menu-title`, `ux4g-mega-menu-item-list`, `ux4g-mega-menu-item` |
| Modifiers | `ux4g-mega-menu--dropdown`, `ux4g-mega-menu--dropdown-right`, `ux4g-mega-menu-category-item--active`, `ux4g-mega-menu-content--active` |

---

### Footer

#### HTML

```html
<footer class="ux4g-footer-primary">
  <div class="ux4g-footer-content">
    <div class="ux4g-d-flex ux4g-jc-between ux4g-flex-wrap">
      <div>
        <h4 class="ux4g-heading-xs-strong">About Us</h4>
        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
          <li class="ux4g-list-item"><a href="#">About</a></li>
          <li class="ux4g-list-item"><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="ux4g-heading-xs-strong">Resources</h4>
        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
          <li class="ux4g-list-item"><a href="#">Documentation</a></li>
          <li class="ux4g-list-item"><a href="#">FAQs</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ux4g-fbs-t1">
    <p class="ux4g-body-xs-default ux4g-text-white">&copy; 2024 Company Name. All rights reserved.</p>
    <div class="ux4g-fbs-links ux4g-d-flex ux4g-inline-gap-l">
      <a class="ux4g-text-link-neutral-s" href="#">Privacy Policy</a>
      <a class="ux4g-text-link-neutral-s" href="#">Terms</a>
    </div>
  </div>
</footer>
```

#### Angular

```html
<footer class="ux4g-footer-primary">
  <div class="ux4g-footer-content">
    <div class="ux4g-d-flex ux4g-jc-between ux4g-flex-wrap">
      <div>
        <h4 class="ux4g-heading-xs-strong">About Us</h4>
        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
          <li class="ux4g-list-item"><a href="#">About</a></li>
          <li class="ux4g-list-item"><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ux4g-fbs-t1">
    <p class="ux4g-body-xs-default ux4g-text-white">&copy; 2024 Company Name. All rights reserved.</p>
  </div>
</footer>
```

#### React

```tsx
<footer className="ux4g-footer-primary">
  <div className="ux4g-footer-content">
    <div className="ux4g-d-flex ux4g-jc-between ux4g-flex-wrap">
      <div>
        <h4 className="ux4g-heading-xs-strong">About Us</h4>
        <ul className="ux4g-list ux4g-list-default ux4g-list-s">
          <li className="ux4g-list-item"><a href="#">About</a></li>
          <li className="ux4g-list-item"><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="ux4g-fbs-t1">
    <p className="ux4g-body-xs-default ux4g-text-white">&copy; 2024 Company Name. All rights reserved.</p>
  </div>
</footer>
```

#### Available Classes

| Category | Classes |
|---|---|
| Themes | default, `ux4g-footer-primary`, `ux4g-footer-dark` |
| Bottom Strip | `ux4g-fbs-t1`, `ux4g-fbs-t2`, `ux4g-fbs-t3`, `ux4g-fbs-t4` |
| Structure | `ux4g-footer-content`, `ux4g-fbs-links`, `ux4g-fbs-logo-wrapper`, `ux4g-fbs-social-list` |

---

### Social Links

#### HTML

```html
<ul class="ux4g-d-flex ux4g-inline-gap-s ux4g-social-link-light">
  <li><a href="#" class="ux4g-social-link" aria-label="Facebook"><svg>...</svg></a></li>
  <li><a href="#" class="ux4g-social-link" aria-label="Twitter"><svg>...</svg></a></li>
  <li><a href="#" class="ux4g-social-link" aria-label="LinkedIn"><svg>...</svg></a></li>
</ul>
```

#### Angular

```html
<ul class="ux4g-d-flex ux4g-inline-gap-s ux4g-social-link-light">
  <li><a href="#" class="ux4g-social-link" aria-label="Facebook"><svg>...</svg></a></li>
  <li><a href="#" class="ux4g-social-link" aria-label="Twitter"><svg>...</svg></a></li>
  <li><a href="#" class="ux4g-social-link" aria-label="LinkedIn"><svg>...</svg></a></li>
</ul>
```

#### React

```tsx
<ul className="ux4g-d-flex ux4g-inline-gap-s ux4g-social-link-light">
  <li><a href="#" className="ux4g-social-link" aria-label="Facebook"><svg>...</svg></a></li>
  <li><a href="#" className="ux4g-social-link" aria-label="Twitter"><svg>...</svg></a></li>
  <li><a href="#" className="ux4g-social-link" aria-label="LinkedIn"><svg>...</svg></a></li>
</ul>
```

#### Available Classes

| Category | Classes |
|---|---|
| Variants | `ux4g-social-link-light`, `ux4g-social-link-dark`, default |
| Item | `ux4g-social-link` |

---

### Accessibility Bar

#### HTML

```html
<header class="ux4g-topbar ux4g-topbar-wide" role="banner">
  <div class="ux4g-container">
    <div class="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
      <div>
        <a class="ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
          <span class="india-flag"></span>
          <span class="ux4g-label-m-default">Government of India</span>
          <sup class="ux4g-icon-outlined">open_in_new</sup>
        </a>
      </div>
      <nav aria-label="Top utilities" class="ux4g-d-flex ux4g-ai-center">
        <a class="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">Skip to Main Content</a>
        <span class="ux4g-bl acc-top-divider"></span>
        <div class="ux4g-topbar__group ux4g-d-flex ux4g-ai-center" role="group">
          <button class="ux4g-topbar__iconbtn" aria-label="Decrease text size">
            <span class="ux4g-icon-outlined ux4g-top-bar-icon">text_decrease</span>
          </button>
          <button class="ux4g-topbar__iconbtn" aria-label="Reset text size">
            <span class="ux4g-icon-outlined ux4g-top-bar-icon">font_download</span>
          </button>
          <button class="ux4g-topbar__iconbtn" aria-label="Increase text size">
            <span class="ux4g-icon-outlined ux4g-top-bar-icon">text_increase</span>
          </button>
        </div>
        <span class="ux4g-bl acc-top-divider"></span>
        <div class="ux4g-topbar__select">
          <button class="ux4g-topbar__selectbtn ux4g-d-inline-flex ux4g-ai-center" aria-expanded="false">
            <span class="ux4g-icon-outlined ux4g-top-bar-icon">language</span>
            <span class="ux4g-label-m-default">English</span>
            <span class="ux4g-icon-outlined">arrow_drop_down</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</header>
```

#### Angular

```html
<header class="ux4g-topbar ux4g-topbar-wide" role="banner">
  <div class="ux4g-container">
    <div class="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
      <div>
        <a class="ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
          <span class="india-flag"></span>
          <span class="ux4g-label-m-default">Government of India</span>
        </a>
      </div>
      <nav aria-label="Top utilities" class="ux4g-d-flex ux4g-ai-center">
        <a class="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">Skip to Main Content</a>
        <div class="ux4g-topbar__group ux4g-d-flex ux4g-ai-center" role="group">
          <button class="ux4g-topbar__iconbtn" aria-label="Decrease text size">
            <span class="ux4g-icon-outlined ux4g-top-bar-icon">text_decrease</span>
          </button>
          <button class="ux4g-topbar__iconbtn" aria-label="Increase text size">
            <span class="ux4g-icon-outlined ux4g-top-bar-icon">text_increase</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</header>
```

#### React

```tsx
<header className="ux4g-topbar ux4g-topbar-wide" role="banner">
  <div className="ux4g-container">
    <div className="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
      <div>
        <a className="ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
          <span className="india-flag"></span>
          <span className="ux4g-label-m-default">Government of India</span>
        </a>
      </div>
      <nav aria-label="Top utilities" className="ux4g-d-flex ux4g-ai-center">
        <a className="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">Skip to Main Content</a>
        <div className="ux4g-topbar__group ux4g-d-flex ux4g-ai-center" role="group">
          <button className="ux4g-topbar__iconbtn" aria-label="Decrease text size">
            <span className="ux4g-icon-outlined ux4g-top-bar-icon">text_decrease</span>
          </button>
          <button className="ux4g-topbar__iconbtn" aria-label="Increase text size">
            <span className="ux4g-icon-outlined ux4g-top-bar-icon">text_increase</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</header>
```

#### Available Classes

| Category | Classes |
|---|---|
| Structure | `ux4g-topbar`, `ux4g-topbar-wide`, `ux4g-topbar__wrap`, `ux4g-topbar__group`, `ux4g-topbar__iconbtn`, `ux4g-topbar__skip`, `ux4g-topbar__select`, `ux4g-topbar__selectbtn` |
| Container | `ux4g-container` (fixed width), `ux4g-container-fluid` (full width) |

---

### Biometric Capture

#### HTML

```html
<div class="ux4g-form-group">
  <label class="ux4g-label-m-strong">Biometric Verification</label>
  <div class="ux4g-d-flex ux4g-gap-l ux4g-ai-center">
    <button class="ux4g-btn-outline-primary ux4g-btn-m ">
      <i class="ux4g-icon-outlined ux4g-mr-xs">fingerprint</i>
      Capture Fingerprint
    </button>
    <button class="ux4g-btn-outline-primary ux4g-btn-m ">
      <i class="ux4g-icon-outlined ux4g-mr-xs">visibility</i>
      Capture Iris
    </button>
  </div>
  <div class="ux4g-feedback">
    <span class="ux4g-tag-filled-success ux4g-tag-s">Captured</span>
  </div>
</div>
```

#### Angular

```html
<div class="ux4g-form-group">
  <label class="ux4g-label-m-strong">Biometric Verification</label>
  <div class="ux4g-d-flex ux4g-gap-l ux4g-ai-center">
    <button class="ux4g-btn-outline-primary ux4g-btn-m ">
      <i class="ux4g-icon-outlined ux4g-mr-xs">fingerprint</i>
      Capture Fingerprint
    </button>
    <button class="ux4g-btn-outline-primary ux4g-btn-m ">
      <i class="ux4g-icon-outlined ux4g-mr-xs">visibility</i>
      Capture Iris
    </button>
  </div>
  <div class="ux4g-feedback">
    <span class="ux4g-tag-filled-success ux4g-tag-s">Captured</span>
  </div>
</div>
```

#### React

```tsx
<div className="ux4g-form-group">
  <label className="ux4g-label-m-strong">Biometric Verification</label>
  <div className="ux4g-d-flex ux4g-gap-l ux4g-ai-center">
    <button className="ux4g-btn-outline-primary ux4g-btn-m ">
      <i className="ux4g-icon-outlined ux4g-mr-xs">fingerprint</i>
      Capture Fingerprint
    </button>
    <button className="ux4g-btn-outline-primary ux4g-btn-m ">
      <i className="ux4g-icon-outlined ux4g-mr-xs">visibility</i>
      Capture Iris
    </button>
  </div>
  <div className="ux4g-feedback">
    <span className="ux4g-tag-filled-success ux4g-tag-s">Captured</span>
  </div>
</div>
```

#### Available Classes

| Category | Classes |
|---|---|
| Composition | Uses `ux4g-form-group`, `ux4g-btn-outline-primary`, `ux4g-feedback`, `ux4g-tag-filled-success` |
| Icons | `fingerprint`, `visibility` (Material Icons via `ux4g-icon-outlined`) |

---

---

## Runtime Module

The runtime provides interactive behaviors via event delegation. No per-element binding needed.

### Auto-Bootstrap (Recommended)

```ts
import 'ux4g-web-components/design-system';
```

### Explicit Control

```ts
import { initRuntime, destroyRuntime } from 'ux4g-web-components/runtime';

initRuntime();
destroyRuntime(); // cleanup
```

### Behaviors Provided

| Behavior | Trigger |
|---|---|
| Dropdown | `.ux4g-dropdown-control` |
| Modal | `data-modal-target`, `data-close-modal` |
| Tooltip | `.ux4g-tooltip-wrapper` hover |
| Popover | `data-ux-toggle="popover"` |
| Accordion | `data-ux4g-accordion-toggle` |
| Tab | `.ux4g-tab-item` click |
| Carousel | `.ux4g-carousel-arrow-prev`, `.ux4g-carousel-arrow-next` |
| Drawer | `data-drawer`, `data-drawer-close` |
| Mega Menu | `.ux4g-mega-menu-category-item` click |
| Alert | `.ux4g-alert-close`, `data-auto-dismiss` |

---

## Utility Classes

36 modules of single-purpose helper classes (3,188 unique classes):

```html
<div class="ux4g-d-flex ux4g-gap-m ux4g-p-l ux4g-bg-primary-soft ux4g-radius-md">
  <span class="ux4g-body-m-default ux4g-text-neutral-primary">Content</span>
</div>
```

| Category | Modules |
|---|---|
| Typography & Text | `text`, `typescale`, `typography`, `colors`, `line-clamp`, `vertical-align` |
| Layout & Spacing | `display`, `padding`, `margin`, `gap`, `child-spacing`, `sizing`, `object-fit`, `overflow`, `position`, `position-responsive`, `float`, `z-index`, `visibility` |
| Flexbox & Alignment | `flex`, `align`, `justify`, `order` |
| Visual Effects & Borders | `background`, `border`, `radius`, `ring`, `outline`, `divide`, `shadow`, `opacity`, `blur`, `effects` |
| Transitions & Transforms | `transition`, `transform` |
| Interaction & Scroll | `interaction`, `scroll` |

---

## Dark Theme

```html
<html data-theme="dark">
  <!-- All components automatically use dark tokens -->
</html>

<!-- Or scope to a section -->
<div data-theme="dark">
  <button class="ux4g-btn-primary ux4g-btn-m ">Dark button</button>
</div>
```

---

## LLM / AI Consumption

This package ships machine-readable documentation for LLMs and AI agents:

- **AI agent instructions:** https://web.ux4g.gov.in/ai.txt
- **LLM route map:** https://web.ux4g.gov.in/llms.txt
- **Full LLM context:** https://web.ux4g.gov.in/llms-full.txt
- **Component catalog (JSON):** https://web.ux4g.gov.in/catalog.json
- **Build prompt:** https://web.ux4g.gov.in/ux4g-prompt.md
- **Skill bundle:** https://web.ux4g.gov.in/skills/

---

## License

MIT