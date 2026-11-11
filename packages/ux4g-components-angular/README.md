# ux4g-components-angular

Angular wrapper components for the **UX4G Design System**.

Thin, typed Angular components that map inputs to UX4G CSS classes. Each component is tree-shakeable via sub-path imports and NgModule.

---

## Component Index

> **For LLMs and AI tools:** Complete list of all available components with their import paths, NgModule names, and selectors. Every component uses sub-path imports: `import { ModuleName } from 'ux4g-components-angular/{path}'`

| Component | Import | Module | Selector | Primary Inputs |
|---|---|---|---|---|
| **Button** | `ux4g-components-angular/button` | `UX4GButtonModule` | `ux4g-button` | `variant` `size` `shape` `disabled` `loading` |
| **Icon Button** | `ux4g-components-angular/icon-button` | `UX4GIconButtonModule` | `ux4g-icon-button` | `variant` `size` `pill` |
| **Spinner** | `ux4g-components-angular/spinner` | `UX4GSpinnerModule` | `ux4g-spinner` | `variant` `size` `type` `label` |
| **Link** | `ux4g-components-angular/link` | `UX4GLinkModule` | `ux4g-link` | `variant` `size` `href` |
| **Badge** | `ux4g-components-angular/badge` | `UX4GBadgeModule` | `ux4g-badge` | `type` `color` `size` |
| **Avatar** | `ux4g-components-angular/avatar` | `UX4GAvatarModule` | `ux4g-avatar` | `avatarType` `size` |
| **Image** | `ux4g-components-angular/image` | `UX4GImageModule` | `ux4g-image` | `ratio` `rounded` `overlay` `overlayPosition` |
| **Chip** | `ux4g-components-angular/chip` | `UX4GChipModule` | `ux4g-chip` | `chipType` `size` `active` |
| **Tag** | `ux4g-components-angular/tag` | `UX4GTagModule` | `ux4g-tag` | `variant` `color` `small` |
| **Divider** | `ux4g-components-angular/divider` | `UX4GDividerModule` | `ux4g-divider` | `orientation` |
| **Breadcrumb** | `ux4g-components-angular/breadcrumb` | `UX4GBreadcrumbModule` | `ux4g-breadcrumb` | `separator` |
| **Input** | `ux4g-components-angular/input` | `UX4GInputModule` | `ux4g-input` | `size` `state` `disabled` |
| **Checkbox** | `ux4g-components-angular/checkbox` | `UX4GCheckboxModule` | `ux4g-checkbox` | `size` `checked` `indeterminate` `error` |
| **Radio** | `ux4g-components-angular/radio` | `UX4GRadioModule` | `ux4g-radio` | `size` `checked` `name` `value` `error` |
| **Switch** | `ux4g-components-angular/switch` | `UX4GSwitchModule` | `ux4g-switch` | `size` `checked` `disabled` |
| **Card** | `ux4g-components-angular/card` | `UX4GCardModule` | `ux4g-card` | `variant` `layout` |
| **Dropdown** | `ux4g-components-angular/dropdown` | `UX4GDropdownModule` | `ux4g-dropdown` | `type` `mode` `size` `state` `open` |
| **Combobox** | `ux4g-components-angular/combobox` | `UX4GComboboxModule` | `ux4g-combobox` | `type` `size` `state` `open` |
| **Modal** | `ux4g-components-angular/modal` | `UX4GModalModule` | `ux4g-modal` | `size` `opacity` `blur` `open` |
| **Alert** | `ux4g-components-angular/alert` | `UX4GAlertModule` | `ux4g-alert` | `variant` `toast` `layout` |
| **Accordion** | `ux4g-components-angular/accordion` | `UX4GAccordionModule` | `ux4g-accordion` | `arrowPosition` `variant` |
| **Tab** | `ux4g-components-angular/tab` | `UX4GTabModule` | `ux4g-tab` | `variant` `size` `vertical` |
| **Drawer** | `ux4g-components-angular/drawer` | `UX4GDrawerModule` | `ux4g-drawer` | `placement` `open` |
| **Tooltip** | `ux4g-components-angular/tooltip` | `UX4GTooltipModule` | `ux4g-tooltip` | `placement` `size` |
| **Popover** | `ux4g-components-angular/popover` | `UX4GPopoverModule` | `ux4g-popover` | `placement` `show` |
| **Table** | `ux4g-components-angular/table` | `UX4GTableModule` | `ux4g-table` | `size` `divider` `zebra` `interactive` `sortable` |
| **Pagination** | `ux4g-components-angular/pagination` | `UX4GPaginationModule` | `ux4g-pagination` | `variant` `paginationStyle` |
| **Stepper** | `ux4g-components-angular/stepper` | `UX4GStepperModule` | `ux4g-stepper` | `orientation` `alignment` `variant` `size` |
| **Slider** | `ux4g-components-angular/slider` | `UX4GSliderFieldModule` | `ux4g-slider-field` | `size` |
| **Search** | `ux4g-components-angular/search` | `UX4GSearchModule` | `ux4g-search-container` | `size` |
| **Date-Time Picker** | `ux4g-components-angular/date-time-picker` | `UX4GDateTimePickerModule` | `ux4g-date-time-picker` | `mode` |
| **File Upload** | `ux4g-components-angular/file-upload` | `UX4GFileUploadModule` | `ux4g-file-upload` | `state` |
| **OTP Input** | `ux4g-components-angular/otp-input` | `UX4GOtpInputModule` | `ux4g-otp-input` | `state` |
| **Progress Indicator** | `ux4g-components-angular/progress-indicator` | `UX4GProgressIndicatorModule` | `ux4g-progress-indicator` | `type` `size` `shape` |
| **Status Pipeline** | `ux4g-components-angular/status-pipeline` | `UX4GStatusPipelineModule` | `ux4g-status-pipeline` | `orientation` `alignment` `variant` |
| **Journey Timeline** | `ux4g-components-angular/journey-timeline` | `UX4GJourneyTimelineModule` | `ux4g-journey-timeline` | `orientation` |
| **Feedback** | `ux4g-components-angular/feedback` | `UX4GFeedbackModule` | `ux4g-feedback` | — |
| **Form Field Group** | `ux4g-components-angular/form-field-group` | `UX4GFormFieldGroupModule` | `ux4g-form-field-group` | — |
| **List** | `ux4g-components-angular/list` | `UX4GListModule` | `ux4g-list` | `variant` `size` |
| **Navbar** | `ux4g-components-angular/navbar` | `UX4GNavbarModule` | `ux4g-navbar` | — |
| **Carousel** | `ux4g-components-angular/carousel` | `UX4GCarouselModule` | `ux4g-carousel` | — |
| **Footer** | `ux4g-components-angular/footer` | `UX4GFooterModule` | `ux4g-footer` | — |
| **Accessibility Bar** | `ux4g-components-angular/accessibility-bar` | `UX4GAccessibilityBarModule` | `ux4g-accessibility-bar` | — |
| **Empty State** | `ux4g-components-angular/empty-state` | `UX4GEmptyStateModule` | `ux4g-empty-state` | — |
| **Chip Group** | `ux4g-components-angular/chip-group` | `UX4GChipGroupModule` | `ux4g-chip-group` | — |
| **Mega Menu** | `ux4g-components-angular/mega-menu` | `UX4GMegaMenuModule` | `ux4g-mega-menu` | — |
| **Draft Status Banner** | `ux4g-components-angular/draft-status-banner` | `UX4GDraftStatusBannerModule` | `ux4g-draft-status-banner` | — |
| **Social Links** | `ux4g-components-angular/social-links` | `UX4GSocialLinksModule` | `ux4g-social-links` | — |
| **Slot Grid** | `ux4g-components-angular/slot-grid` | `UX4GSlotGridModule` | `ux4g-slot-grid` | — |
| **Result List Row** | `ux4g-components-angular/result-list-row` | `UX4GResultListRowModule` | `ux4g-result-list-row` | — |
| **SLA Progress Indicator** | `ux4g-components-angular/sla-progress-indicator` | `UX4GSlaProgressIndicatorModule` | `ux4g-sla-progress-indicator` | — |

### Quick Start

```ts
// app.module.ts
import { UX4GButtonModule } from 'ux4g-components-angular/button';

@NgModule({ imports: [UX4GButtonModule] })
export class AppModule {}
```

```html
<!-- template -->
<ux4g-button variant="primary" size="md">Save</ux4g-button>
```

```json
// angular.json — add CSS to styles array
"styles": ["node_modules/ux4g-web-components/styles/ux4g.css"]
```

---

## Installation

```bash
npm install ux4g-components-angular ux4g-web-components
```

> **Note:** `ux4g-web-components` is required — it provides the CSS bundle that styles all components.

## Setup

Add the CSS bundle to your `angular.json` styles array:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/ux4g-web-components/styles/ux4g.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

That's it. Runtime behaviors (dropdowns, modals, tooltips, etc.) are auto-initialized under the hood when you import any component module (via `ux4g-web-components/design-system`) — no manual setup needed.

## Peer Dependencies

- `@angular/core >= 15.0.0`
- `@angular/common >= 15.0.0`

---

## Components

### Button

```ts
// app.module.ts
import { UX4GButtonModule } from 'ux4g-components-angular/button';

@NgModule({
  imports: [UX4GButtonModule],
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<ux4g-button variant="primary" size="md" (clicked)="onSave()">
  Save
</ux4g-button>

<ux4g-button variant="outline-danger" size="lg">
  Delete
</ux4g-button>

<ux4g-button variant="tonal-primary" size="sm" shape="pill">
  Tag
</ux4g-button>

<ux4g-button variant="primary" size="md" [loading]="true">
  Saving...
</ux4g-button>

<ux4g-button variant="primary" size="md" [disabled]="true">
  Disabled
</ux4g-button>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'outline-primary' \| 'text-primary' \| 'tonal-primary' \| 'danger' \| 'outline-danger' \| 'text-danger' \| 'tonal-danger'` | `'primary'` | Visual style |
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` | Button size |
| `shape` | `'rectangle' \| 'pill'` | `'rectangle'` | Border shape |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state (shows spinner) |

| Output | Type | Description |
|---|---|---|
| `clicked` | `EventEmitter<MouseEvent>` | Emitted on click (suppressed when disabled) |

### Spinner

```ts
import { UX4GSpinnerModule } from 'ux4g-components-angular/spinner';

@NgModule({ imports: [UX4GSpinnerModule] })
export class AppModule {}
```

```html
<ux4g-spinner variant="primary" size="md" type="full"></ux4g-spinner>
<ux4g-spinner variant="danger" size="lg" type="split"></ux4g-spinner>
<ux4g-spinner variant="inverse" size="xs" type="partial" label="Processing"></ux4g-spinner>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'inverse' \| 'danger'` | `'primary'` | Color variant |
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` | Spinner size |
| `type` | `'full' \| 'split' \| 'partial'` | `'full'` | Spinner style |
| `label` | `string` | `'Loading'` | Accessible label |

### Link

```ts
import { UX4GLinkModule } from 'ux4g-components-angular/link';

@NgModule({ imports: [UX4GLinkModule] })
export class AppModule {}
```

```html
<ux4g-link href="/docs" variant="default" size="md">Documentation</ux4g-link>
<ux4g-link href="/terms" variant="neutral" size="sm">Terms of Service</ux4g-link>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'neutral'` | `'default'` | Link color style |
| `size` | `'sm' \| 'md'` | `'md'` | Link size |
| `href` | `string` | — | Link URL |

### Badge

```ts
import { UX4GBadgeModule } from 'ux4g-components-angular/badge';

@NgModule({ imports: [UX4GBadgeModule] })
export class AppModule {}
```

```html
<ux4g-badge type="dot" color="primary"></ux4g-badge>
<ux4g-badge type="digit" color="danger" size="m">5</ux4g-badge>
<ux4g-badge type="icon" color="success" size="l">✓</ux4g-badge>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `type` | `'dot' \| 'icon' \| 'digit'` | `'dot'` | Badge type |
| `color` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'secondary' \| 'tertiary' \| 'neutral'` | `'primary'` | Badge color |
| `size` | `'s' \| 'm' \| 'l' \| 'profile-l' \| 'profile-xl' \| 'profile-2xl' \| 'profile-3xl'` | — | Badge size |

### Avatar

```ts
import { UX4GAvatarModule } from 'ux4g-components-angular/avatar';

@NgModule({ imports: [UX4GAvatarModule] })
export class AppModule {}
```

```html
<ux4g-avatar avatarType="status" size="m">
  <img src="user.jpg" alt="User" />
</ux4g-avatar>

<ux4g-avatar avatarType="profile" size="xl">
  <img src="profile.jpg" alt="Profile" />
</ux4g-avatar>

<ux4g-avatar avatarType="group">
  <img src="u1.jpg" alt="" />
  <img src="u2.jpg" alt="" />
</ux4g-avatar>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `avatarType` | `'status' \| 'profile' \| 'group'` | `'status'` | Avatar type |
| `size` | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| '2xl' \| '3xl'` | — | Avatar size |

### Image

```ts
import { UX4GImageModule } from 'ux4g-components-angular/image';

@NgModule({ imports: [UX4GImageModule] })
export class AppModule {}
```

```html
<ux4g-image src="photo.jpg" alt="Photo" ratio="16-9"></ux4g-image>
<ux4g-image src="photo.jpg" alt="Photo" ratio="4-3" [rounded]="true"></ux4g-image>
<ux4g-image src="photo.jpg" alt="Photo" ratio="16-9" [overlay]="true" overlayPosition="bottom">
  <ng-template #overlayContent>
    <p class="ux4g-body-m-default">Caption text</p>
  </ng-template>
</ux4g-image>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `ratio` | `'1-1' \| '4-3' \| '3-2' \| '16-10' \| '16-9' \| '2-1' \| '5-2' \| '3-1' \| '1-16' \| '2-3' \| '3-4'` | — | Aspect ratio |
| `rounded` | `boolean` | `false` | Rounded corners |
| `overlay` | `boolean` | `false` | Enable overlay container |
| `overlayPosition` | `'top' \| 'bottom' \| 'center' \| 'full'` | `'bottom'` | Overlay position |

### Chip

```ts
import { UX4GChipModule } from 'ux4g-components-angular/chip';

@NgModule({ imports: [UX4GChipModule] })
export class AppModule {}
```

```html
<ux4g-chip chipType="filter" size="md">Category</ux4g-chip>
<ux4g-chip chipType="choice" size="sm" [active]="true">Selected</ux4g-chip>
<ux4g-chip chipType="input" size="xs">Tag</ux4g-chip>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `chipType` | `'filter' \| 'choice' \| 'input'` | `'filter'` | Chip type |
| `size` | `'md' \| 'sm' \| 'xs'` | `'md'` | Chip size (xs only for input) |
| `active` | `boolean` | `false` | Active/selected state |

### Tag

```ts
import { UX4GTagModule } from 'ux4g-components-angular/tag';

@NgModule({ imports: [UX4GTagModule] })
export class AppModule {}
```

```html
<ux4g-tag variant="tonal" color="neutral">Default</ux4g-tag>
<ux4g-tag variant="filled" color="success" [small]="true">Active</ux4g-tag>
<ux4g-tag variant="outline" color="error">Error</ux4g-tag>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'tonal' \| 'filled' \| 'outline' \| 'text'` | `'tonal'` | Tag style |
| `color` | `'neutral' \| 'brand' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'neutral'` | Tag color |
| `small` | `boolean` | `false` | Small size |

### Divider

```ts
import { UX4GDividerModule } from 'ux4g-components-angular/divider';

@NgModule({ imports: [UX4GDividerModule] })
export class AppModule {}
```

```html
<ux4g-divider orientation="horizontal"></ux4g-divider>
<ux4g-divider orientation="vertical"></ux4g-divider>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider direction |

### Breadcrumb

```ts
import { UX4GBreadcrumbModule } from 'ux4g-components-angular/breadcrumb';

@NgModule({ imports: [UX4GBreadcrumbModule] })
export class AppModule {}
```

```html
<ux4g-breadcrumb separator="divider">
  <a href="#">Home</a>
  <a href="#">Products</a>
  <span>Current</span>
</ux4g-breadcrumb>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `separator` | `'divider' \| 'icon'` | `'divider'` | Separator style |

### Checkbox

```ts
import { UX4GCheckboxModule } from 'ux4g-components-angular/checkbox';

@NgModule({ imports: [UX4GCheckboxModule] })
export class AppModule {}
```

```html
<label>
  <ux4g-checkbox size="md" [checked]="isChecked" (changed)="onCheck($event)"></ux4g-checkbox>
  Accept terms
</label>

<label>
  <ux4g-checkbox size="sm" [error]="true"></ux4g-checkbox>
  Required field
</label>

<label>
  <ux4g-checkbox size="md" [indeterminate]="true"></ux4g-checkbox>
  Select all
</label>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Checkbox size |
| `checked` | `boolean` | `false` | Checked state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state |

| Output | Type | Description |
|---|---|---|
| `changed` | `EventEmitter<Event>` | Emitted on change |

> **Note:** This is a control-only wrapper. Wrap with `<label>` to associate visible text.

### Radio

```ts
import { UX4GRadioModule } from 'ux4g-components-angular/radio';

@NgModule({ imports: [UX4GRadioModule] })
export class AppModule {}
```

```html
<label>
  <ux4g-radio size="md" name="option" value="a" [checked]="selected === 'a'" (changed)="onSelect($event)"></ux4g-radio>
  Option A
</label>
<label>
  <ux4g-radio size="lg" name="option" value="b" [error]="true"></ux4g-radio>
  Option B
</label>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Radio size |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state |
| `name` | `string` | `''` | Radio group name |
| `value` | `string` | `''` | Radio value |

| Output | Type | Description |
|---|---|---|
| `changed` | `EventEmitter<Event>` | Emitted on change |

> **Note:** This is a control-only wrapper. Wrap with `<label>` to associate visible text.

### Switch

```ts
import { UX4GSwitchModule } from 'ux4g-components-angular/switch';

@NgModule({ imports: [UX4GSwitchModule] })
export class AppModule {}
```

```html
<label>
  <ux4g-switch size="md" [checked]="isOn" (changed)="onToggle($event)"></ux4g-switch>
  Enable notifications
</label>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Switch size |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |

| Output | Type | Description |
|---|---|---|
| `changed` | `EventEmitter<Event>` | Emitted on change |

> **Note:** This is a control-only wrapper. Wrap with `<label>` to associate visible text.

### Card

```ts
import { UX4GCardModule } from 'ux4g-components-angular/card';

@NgModule({ imports: [UX4GCardModule] })
export class AppModule {}
```

```html
<ux4g-card variant="solid" layout="vertical">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</ux4g-card>

<ux4g-card variant="outline" layout="horizontal">
  <img src="thumb.jpg" alt="" />
  <p>Horizontal card</p>
</ux4g-card>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'solid' \| 'outline' \| 'no-fill'` | `'solid'` | Card style |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Card layout |

### Input

```ts
import { UX4GInputModule } from 'ux4g-components-angular/input';

@NgModule({ imports: [UX4GInputModule] })
export class AppModule {}
```

```html
<ux4g-input size="md" state="default">
  <label class="ux4g-input-label">Email</label>
  <input class="ux4g-input" type="email" placeholder="Enter email" />
</ux4g-input>

<ux4g-input size="lg" state="error">
  <label class="ux4g-input-label">Password</label>
  <input class="ux4g-input" type="password" />
  <span class="ux4g-input-helper">Password is required</span>
</ux4g-input>

<ux4g-input size="md" state="default" [disabled]="true">
  <label class="ux4g-input-label">Disabled</label>
  <input class="ux4g-input" type="text" disabled />
</ux4g-input>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Input container size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `disabled` | `boolean` | `false` | Disabled state |

> **Note:** This is a container shell. Label, input element, and helper text are projected as children using UX4G CSS classes.

### List

```ts
import { UX4GListModule } from 'ux4g-components-angular/list';

@NgModule({ imports: [UX4GListModule] })
export class AppModule {}
```

```html
<ux4g-list variant="default" size="m">
  <li>Item one</li>
  <li>Item two</li>
</ux4g-list>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | List style |
| `size` | `'s' \| 'm' \| 'l' \| 'xl'` | `'m'` | List size |

### Dropdown

```ts
import { UX4GDropdownModule } from 'ux4g-components-angular/dropdown';

@NgModule({ imports: [UX4GDropdownModule] })
export class AppModule {}
```

```html
<ux4g-dropdown type="selection" mode="single" size="md" state="default">
  <ux4g-dropdown-item value="1">Option 1</ux4g-dropdown-item>
  <ux4g-dropdown-item value="2">Option 2</ux4g-dropdown-item>
</ux4g-dropdown>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `type` | `'selection' \| 'button' \| 'overflow'` | `'selection'` | Dropdown type |
| `mode` | `'single' \| 'multi'` | `'single'` | Selection mode |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dropdown size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `open` | `boolean` | `false` | Open state |

### Combobox

```ts
import { UX4GComboboxModule } from 'ux4g-components-angular/combobox';

@NgModule({ imports: [UX4GComboboxModule] })
export class AppModule {}
```

```html
<ux4g-combobox type="single" size="md" state="default" placeholder="Search..."></ux4g-combobox>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `type` | `'single' \| 'multi'` | `'single'` | Combobox type |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Combobox size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `open` | `boolean` | `false` | Open state |

### Modal

```ts
import { UX4GModalModule } from 'ux4g-components-angular/modal';

@NgModule({ imports: [UX4GModalModule] })
export class AppModule {}
```

```html
<ux4g-modal size="m" opacity="50" [open]="isOpen">
  <h2>Modal Title</h2>
  <p>Modal content here.</p>
  <button (click)="isOpen = false">Close</button>
</ux4g-modal>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | Modal size |
| `opacity` | `'25' \| '50' \| '75'` | `'50'` | Backdrop opacity |
| `blur` | `boolean` | `false` | Backdrop blur |
| `open` | `boolean` | `false` | Open state |
| `centerContent` | `boolean` | `false` | Center modal content |

> **Note:** Close handling is external — toggle the `open` input from your component state.

### Alert / Toast

```ts
import { UX4GAlertModule } from 'ux4g-components-angular/alert';

@NgModule({ imports: [UX4GAlertModule] })
export class AppModule {}
```

```html
<ux4g-alert variant="info">This is an informational message.</ux4g-alert>
<ux4g-alert variant="success" layout="wide">Saved successfully!</ux4g-alert>

<!-- Toast variant -->
<ux4g-alert variant="success" [toast]="true">Toast notification</ux4g-alert>

<!-- Toast container for positioning -->
<ux4g-alert-container position="top-right">
  <ux4g-alert variant="success" [toast]="true">Toast notification</ux4g-alert>
</ux4g-alert-container>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert type |
| `toast` | `boolean` | `false` | Use contextual toast styling instead of inline alert |
| `layout` | `'fluid' \| 'center' \| 'wide'` | `'fluid'` | Alert layout (when toast=false) |

**AlertContainer Inputs:**

| Input | Type | Default | Description |
|---|---|---|---|
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top-right'` | Container position |

### Search

```ts
import { UX4GSearchModule } from 'ux4g-components-angular/search';

@NgModule({ imports: [UX4GSearchModule] })
export class AppModule {}
```

```html
<ux4g-search-container size="m">
  <input class="ux4g-search-input" type="search" placeholder="Search..." />
  <button class="ux4g-search-btn">
    <span class="ux4g-icon-outlined">search</span>
  </button>
</ux4g-search-container>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'s' \| 'm' \| 'lg'` | `'m'` | Search container size |

> **Note:** This is a container shell — the search input, button, and event handling are projected as children. The selector is `ux4g-search-container`.

### Pagination

```ts
import { UX4GPaginationModule } from 'ux4g-components-angular/pagination';

@NgModule({ imports: [UX4GPaginationModule] })
export class AppModule {}
```

```html
<ux4g-pagination variant="default">
  <button class="ux4g-pagination-prev" aria-label="Previous">‹</button>
  <button class="ux4g-pagination-item ux4g-pagination-active">1</button>
  <button class="ux4g-pagination-item">2</button>
  <button class="ux4g-pagination-item">3</button>
  <button class="ux4g-pagination-next" aria-label="Next">›</button>
</ux4g-pagination>

<ux4g-pagination variant="dotted" paginationStyle="solid">
  <span class="ux4g-pagination-dot ux4g-pagination-active"></span>
  <span class="ux4g-pagination-dot"></span>
  <span class="ux4g-pagination-dot"></span>
</ux4g-pagination>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'dotted'` | `'default'` | Pagination style |
| `paginationStyle` | `'default' \| 'solid' \| 'translucent'` | `'default'` | Dotted variant style |

> **Note:** This is a container shell — page items, navigation buttons, and active state management are handled externally via content projection.

### Table

```ts
import { UX4GTableModule } from 'ux4g-components-angular/table';

@NgModule({ imports: [UX4GTableModule] })
export class AppModule {}
```

```html
<ux4g-table size="m" divider="row" [interactive]="true">
  <thead>
    <tr><th>Name</th><th>Email</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>alice@example.com</td></tr>
  </tbody>
</ux4g-table>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'s' \| 'm' \| 'lg'` | `'m'` | Table size |
| `divider` | `'row' \| 'column' \| 'none'` | `'row'` | Divider style |
| `zebra` | `'none' \| 'rows' \| 'cols'` | `'none'` | Zebra striping |
| `interactive` | `boolean` | `false` | Hover highlight |
| `sortable` | `boolean` | `false` | Sortable columns |
| `resizable` | `boolean` | `false` | Resizable columns |
| `headerBrand` | `boolean` | `false` | Brand-colored header |

### Popover

```ts
import { UX4GPopoverModule } from 'ux4g-components-angular/popover';

@NgModule({ imports: [UX4GPopoverModule] })
export class AppModule {}
```

```html
<ux4g-popover placement="right" [show]="showPopover">
  <div class="ux4g-popover-header">Popover Title</div>
  <div class="ux4g-popover-body">Body text goes here</div>
</ux4g-popover>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `placement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'bottom'` | Popover position |
| `show` | `boolean` | `false` | Visibility |

> **Note:** Content (title, body) is projected as children using UX4G popover CSS classes. There are no `title` or `content` inputs.

### Tooltip

```ts
import { UX4GTooltipModule } from 'ux4g-components-angular/tooltip';

@NgModule({ imports: [UX4GTooltipModule] })
export class AppModule {}
```

```html
<ux4g-tooltip placement="top-center" size="s">
  Tooltip text content goes here
</ux4g-tooltip>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `placement` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right' \| 'left-center' \| 'right-center'` | `'top-center'` | Tooltip position |
| `size` | `'s' \| 'xs'` | `'s'` | Tooltip size |

> **Note:** Tooltip text is projected as content. There is no `content` input. Visibility is controlled by the UX4G runtime.

### Tab

```ts
import { UX4GTabModule } from 'ux4g-components-angular/tab';

@NgModule({ imports: [UX4GTabModule] })
export class AppModule {}
```

```html
<ux4g-tab variant="underline" size="md">
  <ux4g-tab-item label="Tab 1" [active]="true">Content 1</ux4g-tab-item>
  <ux4g-tab-item label="Tab 2">Content 2</ux4g-tab-item>
</ux4g-tab>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'underline' \| 'pill'` | `'underline'` | Tab style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tab size |
| `vertical` | `boolean` | `false` | Vertical layout |

### Icon Button

```ts
import { UX4GIconButtonModule } from 'ux4g-components-angular/icon-button';

@NgModule({ imports: [UX4GIconButtonModule] })
export class AppModule {}
```

```html
<ux4g-icon-button variant="primary" size="md" aria-label="Edit">
  <i class="ux4g-icon-edit"></i>
</ux4g-icon-button>

<ux4g-icon-button variant="tonal-primary" size="lg" [pill]="true" aria-label="Add">
  <i class="ux4g-icon-plus"></i>
</ux4g-icon-button>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'outline-primary' \| 'tonal-primary' \| 'text-primary'` | `'text-primary'` | Button style |
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` | Button size |
| `pill` | `boolean` | `false` | Pill shape |

### Accessibility Bar

```ts
import { UX4GAccessibilityBarModule } from 'ux4g-components-angular/accessibility-bar';

@NgModule({ imports: [UX4GAccessibilityBarModule] })
export class AppModule {}
```

```html
<ux4g-accessibility-bar>
  <a href="#main-content">Skip to main content</a>
</ux4g-accessibility-bar>
```

### Accordion

```ts
import { UX4GAccordionModule } from 'ux4g-components-angular/accordion';

@NgModule({ imports: [UX4GAccordionModule] })
export class AppModule {}
```

```html
<ux4g-accordion arrowPosition="right" variant="default">
  <ux4g-accordion-item title="Section 1">Content 1</ux4g-accordion-item>
  <ux4g-accordion-item title="Section 2">Content 2</ux4g-accordion-item>
</ux4g-accordion>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `arrowPosition` | `'right' \| 'left'` | `'right'` | Arrow icon position |
| `variant` | `'default' \| 'bordered'` | `'default'` | Accordion style |

### Stepper

```ts
import { UX4GStepperModule } from 'ux4g-components-angular/stepper';

@NgModule({ imports: [UX4GStepperModule] })
export class AppModule {}
```

```html
<ux4g-stepper orientation="horizontal" alignment="center">
  <ux4g-stepper-step status="completed">Step 1</ux4g-stepper-step>
  <ux4g-stepper-step status="active">Step 2</ux4g-stepper-step>
  <ux4g-stepper-step>Step 3</ux4g-stepper-step>
</ux4g-stepper>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `alignment` | `'default' \| 'center' \| 'left'` | `'default'` | Horizontal alignment |
| `variant` | `'default' \| 'bottom-line' \| 'bottom-line-fill' \| 'mobile' \| 'progress'` | `'default'` | Stepper style |
| `size` | `'default' \| 's'` | `'default'` | Stepper size |

### Slider

```ts
import { UX4GSliderFieldModule } from 'ux4g-components-angular/slider';

@NgModule({ imports: [UX4GSliderFieldModule] })
export class AppModule {}
```

```html
<ux4g-slider-field size="sm">
  <label class="ux4g-slider-label">Volume</label>
  <input class="ux4g-slider-input" type="range" min="0" max="100" value="50" />
</ux4g-slider-field>

<ux4g-slider-field size="md">
  <input class="ux4g-slider-input" type="range" min="0" max="100" value="75" />
</ux4g-slider-field>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md'` | `'sm'` | Slider size |

> **Note:** The module is `UX4GSliderFieldModule` and the selector is `ux4g-slider-field`. The range input and label are projected as children.

### Drawer

```ts
import { UX4GDrawerModule } from 'ux4g-components-angular/drawer';

@NgModule({ imports: [UX4GDrawerModule] })
export class AppModule {}
```

```html
<ux4g-drawer placement="right" [open]="isOpen">
  <h3>Drawer Title</h3>
  <p>Drawer content</p>
  <button (click)="isOpen = false">Close</button>
</ux4g-drawer>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `placement` | `'right' \| 'left' \| 'top' \| 'bottom'` | `'right'` | Slide-in direction |
| `open` | `boolean` | `false` | Open state |

> **Note:** Close handling is external — toggle the `open` input from your component state.

### Date-Time Picker

```ts
import { UX4GDateTimePickerModule } from 'ux4g-components-angular/date-time-picker';

@NgModule({ imports: [UX4GDateTimePickerModule] })
export class AppModule {}
```

```html
<ux4g-date-time-picker mode="date"></ux4g-date-time-picker>
<ux4g-date-time-picker mode="time"></ux4g-date-time-picker>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `mode` | `'date' \| 'time'` | `'date'` | Picker mode |

### Status Pipeline

```ts
import { UX4GStatusPipelineModule } from 'ux4g-components-angular/status-pipeline';

@NgModule({ imports: [UX4GStatusPipelineModule] })
export class AppModule {}
```

```html
<ux4g-status-pipeline orientation="horizontal" alignment="center">
  <ux4g-status-pipeline-step status="completed">Submitted</ux4g-status-pipeline-step>
  <ux4g-status-pipeline-step status="active">In Review</ux4g-status-pipeline-step>
  <ux4g-status-pipeline-step>Approved</ux4g-status-pipeline-step>
</ux4g-status-pipeline>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `alignment` | `'default' \| 'center' \| 'left'` | `'default'` | Horizontal alignment |
| `variant` | `'default' \| 'bottom-line' \| 'bottom-line-fill' \| 'mobile' \| 'progress'` | `'default'` | Pipeline style |
| `size` | `'default' \| 's'` | `'default'` | Pipeline size |

### Journey Timeline

```ts
import { UX4GJourneyTimelineModule } from 'ux4g-components-angular/journey-timeline';

@NgModule({ imports: [UX4GJourneyTimelineModule] })
export class AppModule {}
```

```html
<ux4g-journey-timeline orientation="vertical">
  <ux4g-journey-timeline-item>Event 1</ux4g-journey-timeline-item>
  <ux4g-journey-timeline-item>Event 2</ux4g-journey-timeline-item>
</ux4g-journey-timeline>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Timeline direction |

### Form Field Group

```ts
import { UX4GFormFieldGroupModule } from 'ux4g-components-angular/form-field-group';

@NgModule({ imports: [UX4GFormFieldGroupModule] })
export class AppModule {}
```

```html
<ux4g-form-field-group>
  <label>Full Name</label>
  <input type="text" />
  <span>Enter your full legal name</span>
</ux4g-form-field-group>
```

### OTP Input

```ts
import { UX4GOtpInputModule } from 'ux4g-components-angular/otp-input';

@NgModule({ imports: [UX4GOtpInputModule] })
export class AppModule {}
```

```html
<ux4g-otp-input state="default">
  <div class="ux4g-otp-label ux4g-label-l-default">Enter OTP</div>
  <div class="ux4g-otp-group">
    <input class="ux4g-otp-source" type="hidden" value="" data-ux-count="4" placeholder="—" />
  </div>
  <div class="ux4g-otp-meta ux4g-body-s-default">
    <span class="ux4g-otp-helper">Didn't receive OTP?</span>
    <span class="ux4g-otp-resend">Resend</span>
  </div>
</ux4g-otp-input>

<ux4g-otp-input state="error">
  <div class="ux4g-otp-label ux4g-label-l-default">Enter OTP</div>
  <div class="ux4g-otp-group">
    <input class="ux4g-otp-source" type="hidden" value="" data-ux-count="6" placeholder="—" />
  </div>
</ux4g-otp-input>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `state` | `'default' \| 'success' \| 'error' \| 'locked'` | `'default'` | Input state |

> **Note:** The OTP digit inputs are constructed by the runtime JS. The `data-ux-count` attribute on the hidden input controls how many digit boxes render. There is no `length` input — content is projected as children.

### File Upload

```ts
import { UX4GFileUploadModule } from 'ux4g-components-angular/file-upload';

@NgModule({ imports: [UX4GFileUploadModule] })
export class AppModule {}
```

```html
<ux4g-file-upload state="default"></ux4g-file-upload>
<ux4g-file-upload state="uploaded" fileName="document.pdf"></ux4g-file-upload>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `state` | `'default' \| 'default-vle' \| 'selecting' \| 'scanning' \| 'uploaded' \| 'uploaded-vle' \| 'error'` | `'default'` | Upload state |

### Progress Indicator

```ts
import { UX4GProgressIndicatorModule } from 'ux4g-components-angular/progress-indicator';

@NgModule({ imports: [UX4GProgressIndicatorModule] })
export class AppModule {}
```

```html
<!-- Bar variant -->
<ux4g-progress-indicator type="bar">
  <div class="ux4g-progress-bar-track">
    <div class="ux4g-progress-bar-fill" style="width: 60%"></div>
  </div>
  <span class="ux4g-progress-label">60%</span>
</ux4g-progress-indicator>

<!-- Circle variant -->
<ux4g-progress-indicator type="circle" size="l" labelPlacement="inside">
  <span class="ux4g-progress-value">75%</span>
</ux4g-progress-indicator>

<!-- Rounded shape -->
<ux4g-progress-indicator type="bar" shape="rounded">
  <div class="ux4g-progress-bar-track">
    <div class="ux4g-progress-bar-fill" style="width: 45%"></div>
  </div>
</ux4g-progress-indicator>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `type` | `'bar' \| 'circle'` | — (required) | Indicator type |
| `labelPlacement` | `'outside' \| 'inside'` | — | Label position |
| `shape` | `'default' \| 'rounded'` | — | Bar shape |
| `size` | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| '2xl' \| '3xl'` | — | Circle size (ignored for bar) |

> **Note:** This is a container shell. Progress track, fill, and value label are projected as children. There is no `value` input.

### Feedback

```ts
import { UX4GFeedbackModule } from 'ux4g-components-angular/feedback';

@NgModule({ imports: [UX4GFeedbackModule] })
export class AppModule {}
```

```html
<ux4g-feedback>
  <p>Was this helpful?</p>
  <button>Yes</button>
  <button>No</button>
</ux4g-feedback>
```

### Draft Status Banner

```ts
import { UX4GDraftStatusBannerModule } from 'ux4g-components-angular/draft-status-banner';

@NgModule({ imports: [UX4GDraftStatusBannerModule] })
export class AppModule {}
```

```html
<ux4g-draft-status-banner variant="default">Draft saved</ux4g-draft-status-banner>
<ux4g-draft-status-banner variant="auto">Auto-saving...</ux4g-draft-status-banner>
<ux4g-draft-status-banner variant="success">Published</ux4g-draft-status-banner>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'auto' \| 'success'` | `'default'` | Banner style |

### SLA Progress Indicator

```ts
import { UX4GSlaProgressIndicatorModule } from 'ux4g-components-angular/sla-progress-indicator';

@NgModule({ imports: [UX4GSlaProgressIndicatorModule] })
export class AppModule {}
```

```html
<ux4g-sla-progress-indicator type="circle">
  <div class="ux4g-sla-circle-track">
    <span class="ux4g-sla-value">75%</span>
  </div>
</ux4g-sla-progress-indicator>

<ux4g-sla-progress-indicator type="linear">
  <div class="ux4g-sla-linear-track">
    <div class="ux4g-sla-linear-fill" style="width: 50%"></div>
  </div>
</ux4g-sla-progress-indicator>

<ux4g-sla-progress-indicator type="badge">On Track</ux4g-sla-progress-indicator>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `type` | `'circle' \| 'linear' \| 'badge'` | — (required) | Indicator type |

> **Note:** This is a container shell. Progress value and track are projected as children. There is no `value` input.

### Carousel

```ts
import { UX4GCarouselModule } from 'ux4g-components-angular/carousel';

@NgModule({ imports: [UX4GCarouselModule] })
export class AppModule {}
```

```html
<ux4g-carousel>
  <ux4g-carousel-item>Slide 1</ux4g-carousel-item>
  <ux4g-carousel-item>Slide 2</ux4g-carousel-item>
  <ux4g-carousel-item>Slide 3</ux4g-carousel-item>
</ux4g-carousel>
```

### Empty State

```ts
import { UX4GEmptyStateModule } from 'ux4g-components-angular/empty-state';

@NgModule({ imports: [UX4GEmptyStateModule] })
export class AppModule {}
```

```html
<ux4g-empty-state>
  <img src="empty.svg" alt="" />
  <h3>No results found</h3>
  <p>Try adjusting your search.</p>
</ux4g-empty-state>
```

### Chip Group

```ts
import { UX4GChipGroupModule } from 'ux4g-components-angular/chip-group';

@NgModule({ imports: [UX4GChipGroupModule] })
export class AppModule {}
```

```html
<ux4g-chip-group variant="filter">
  <ux4g-chip chipType="filter" size="md" [active]="true">All</ux4g-chip>
  <ux4g-chip chipType="filter" size="md">Category A</ux4g-chip>
</ux4g-chip-group>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'filter' \| 'choice'` | `'filter'` | Group type |

### Navbar

```ts
import { UX4GNavbarModule } from 'ux4g-components-angular/navbar';

@NgModule({ imports: [UX4GNavbarModule] })
export class AppModule {}
```

```html
<ux4g-navbar>
  <a href="/">Logo</a>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</ux4g-navbar>
```

### Social Links

```ts
import { UX4GSocialLinksModule } from 'ux4g-components-angular/social-links';

@NgModule({ imports: [UX4GSocialLinksModule] })
export class AppModule {}
```

```html
<ux4g-social-links size="md">
  <a href="#" aria-label="Twitter"><i class="ux4g-icon-twitter"></i></a>
  <a href="#" aria-label="LinkedIn"><i class="ux4g-icon-linkedin"></i></a>
</ux4g-social-links>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Icon spacing size |

### Slot Grid

```ts
import { UX4GSlotGridModule } from 'ux4g-components-angular/slot-grid';

@NgModule({ imports: [UX4GSlotGridModule] })
export class AppModule {}
```

```html
<ux4g-slot-grid variant="weekly">
  <div>9:00 AM</div>
  <div>10:00 AM</div>
</ux4g-slot-grid>

<ux4g-slot-grid variant="compact">
  <div>9:00</div>
  <div>9:30</div>
</ux4g-slot-grid>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'weekly' \| 'compact'` | `'weekly'` | Grid layout |

### Footer

```ts
import { UX4GFooterModule } from 'ux4g-components-angular/footer';

@NgModule({ imports: [UX4GFooterModule] })
export class AppModule {}
```

```html
<ux4g-footer theme="primary">
  <p>&copy; 2024 Company Name</p>
</ux4g-footer>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `theme` | `'default' \| 'primary' \| 'dark'` | `'default'` | Footer theme |

### Mega Menu

```ts
import { UX4GMegaMenuModule } from 'ux4g-components-angular/mega-menu';

@NgModule({ imports: [UX4GMegaMenuModule] })
export class AppModule {}
```

```html
<ux4g-mega-menu>
  <ux4g-mega-menu-sidebar>
    <ux4g-mega-menu-category-item [active]="true">Category 1</ux4g-mega-menu-category-item>
    <ux4g-mega-menu-category-item>Category 2</ux4g-mega-menu-category-item>
  </ux4g-mega-menu-sidebar>
  <ux4g-mega-menu-content [active]="true">
    <ux4g-mega-menu-column>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
    </ux4g-mega-menu-column>
  </ux4g-mega-menu-content>
</ux4g-mega-menu>

<!-- Dropdown variant -->
<ux4g-mega-menu [dropdown]="true">
  <ux4g-mega-menu-sidebar>
    <ux4g-mega-menu-category-item [active]="true">Services</ux4g-mega-menu-category-item>
  </ux4g-mega-menu-sidebar>
  <ux4g-mega-menu-content [active]="true">
    <ux4g-mega-menu-column>
      <a href="#">Service A</a>
    </ux4g-mega-menu-column>
  </ux4g-mega-menu-content>
</ux4g-mega-menu>
```

**UX4GMegaMenu Inputs:**

| Input | Type | Default | Description |
|---|---|---|---|
| `dropdown` | `boolean` | `false` | Render as dropdown (wraps in positioning container) |
| `dropdownRight` | `boolean` | `false` | Align dropdown to the right |

**UX4GMegaMenuCategoryItem Inputs:**

| Input | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Active/selected state |

**UX4GMegaMenuContent Inputs:**

| Input | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Active/visible state |

### Result List Row

```ts
import { UX4GResultListRowModule } from 'ux4g-components-angular/result-list-row';

@NgModule({ imports: [UX4GResultListRowModule] })
export class AppModule {}
```

```html
<ux4g-result-list-row variation="v1">
  <!-- Header -->
  <div class="ux4g-result-list-header">
    <div class="ux4g-result-list-info">
      <div class="ux4g-result-list-icon"></div>
      <div class="ux4g-result-list-title-group">
        <h2 class="ux4g-title-s-default ux4g-result-list-title">Certificate Name</h2>
      </div>
    </div>
    <div class="ux4g-result-list-actions-container">
      <div class="ux4g-result-list-actions">
        <button class="ux4g-btn-outline-neutral ux4g-btn-s ux4g-btn">Track</button>
      </div>
    </div>
  </div>
  <!-- Expanded Content -->
  <div class="ux4g-result-list-content">
    <div class="ux4g-result-list-details">
      <div class="ux4g-result-list-detail-item">
        <span class="ux4g-label-m-default ux4g-text-neutral-tertiary">Submitted Date</span>
        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">1 Apr 2026</span>
      </div>
    </div>
  </div>
</ux4g-result-list-row>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `variation` | `'default' \| 'v1' \| 'v2' \| 'v3' \| 'v4' \| 'v5'` | `'default'` | Row layout variation |

---

## Dark Theme

Apply the dark theme by adding `data-theme="dark"` to any container or the `<html>` element:

```html
<!-- In index.html -->
<html data-theme="dark">

<!-- Or scoped to a section in a template -->
<div data-theme="dark">
  <ux4g-button variant="primary" size="md">Dark themed</ux4g-button>
</div>
```

Design tokens automatically switch values — no additional imports needed.

---

## Architecture

This package follows a CSS-first architecture:

- **CSS is the source of truth** — all visual decisions live in CSS from `ux4g-web-components`
- **Wrappers are thin** — they map typed inputs to CSS class strings via `buildXxxClasses()` functions
- **No inline styles, no CSS-in-JS** — only `[class]` bindings
- **Class_Builder functions** are imported from `ux4g-web-components/types`
- **Runtime auto-bootstrap** — interactive behaviors initialize automatically

---

## Compatibility

- Angular >= 15.0.0
- Built with Ivy partial compilation (compatible with Angular 15–19+)
- `typesVersions` included for `moduleResolution: node` compatibility

---

## Available Components (51)

All components are available as sub-path imports:

```ts
import { UX4GButtonModule } from 'ux4g-components-angular/button';
import { UX4GSpinnerModule } from 'ux4g-components-angular/spinner';
import { UX4GBadgeModule } from 'ux4g-components-angular/badge';
// ... etc.
```

Full list: `accessibility-bar`, `accordion`, `alert`, `avatar`, `badge`, `breadcrumb`, `button`, `card`, `carousel`, `checkbox`, `chip`, `chip-group`, `combobox`, `date-time-picker`, `divider`, `draft-status-banner`, `drawer`, `dropdown`, `empty-state`, `feedback`, `file-upload`, `footer`, `form-field-group`, `icon-button`, `image`, `input`, `journey-timeline`, `link`, `list`, `mega-menu`, `modal`, `navbar`, `otp-input`, `pagination`, `popover`, `progress-indicator`, `radio`, `result-list-row`, `search`, `sla-progress-indicator`, `slider`, `slot-grid`, `social-links`, `spinner`, `status-pipeline`, `stepper`, `switch`, `tab`, `table`, `tag`, `tooltip`

---

## Related Packages

- [`ux4g-web-components`](https://www.npmjs.com/package/ux4g-web-components) — CSS bundle and shared types (required)
- [`ux4g-components-react`](https://www.npmjs.com/package/ux4g-components-react) — React wrapper components

## License

MIT
