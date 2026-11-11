# ux4g-components-react

React wrapper components for the **UX4G Design System**.

Thin, typed React components that map props to UX4G CSS classes. Each component is tree-shakeable via sub-path imports.

---

## Component Index

> **For LLMs and AI tools:** Complete list of all available components with their import paths and primary props. Every component uses sub-path imports: `import { ComponentName } from 'ux4g-components-react/{path}'`

| Component | Import | Primary Props |
|---|---|---|
| **UX4GButton** | `ux4g-components-react/button` | `variant` `size` `shape` `disabled` `loading` |
| **UX4GIconButton** | `ux4g-components-react/icon-button` | `variant` `size` `pill` |
| **UX4GSpinner** | `ux4g-components-react/spinner` | `variant` `size` `type` `label` |
| **UX4GLink** | `ux4g-components-react/link` | `variant` `size` `href` |
| **UX4GBadge** | `ux4g-components-react/badge` | `type` `color` `size` |
| **UX4GAvatar** | `ux4g-components-react/avatar` | `avatarType` `size` |
| **UX4GImage** | `ux4g-components-react/image` | `ratio` `rounded` `overlay` `overlayPosition` |
| **UX4GChip** | `ux4g-components-react/chip` | `chipType` `size` `active` |
| **UX4GTag** | `ux4g-components-react/tag` | `variant` `color` `small` |
| **UX4GDivider** | `ux4g-components-react/divider` | `orientation` |
| **UX4GBreadcrumb** | `ux4g-components-react/breadcrumb` | `separator` |
| **UX4GInput** | `ux4g-components-react/input` | `size` `state` `disabled` |
| **UX4GCheckbox** | `ux4g-components-react/checkbox` | `size` `checked` `indeterminate` `error` |
| **UX4GRadio** | `ux4g-components-react/radio` | `size` `checked` `name` `value` `error` |
| **UX4GSwitch** | `ux4g-components-react/switch` | `size` `checked` `disabled` |
| **UX4GCard** | `ux4g-components-react/card` | `variant` `layout` |
| **UX4GDropdown** | `ux4g-components-react/dropdown` | `type` `mode` `size` `state` `open` |
| **UX4GCombobox** | `ux4g-components-react/combobox` | `type` `size` `state` `open` |
| **UX4GModal** | `ux4g-components-react/modal` | `size` `opacity` `blur` `open` |
| **UX4GAlert** | `ux4g-components-react/alert` | `variant` `toast` `layout` |
| **UX4GAlertContainer** | `ux4g-components-react/alert` | `position` |
| **UX4GAccordion** | `ux4g-components-react/accordion` | `arrowPosition` `variant` |
| **UX4GTab** | `ux4g-components-react/tab` | `variant` `size` `vertical` |
| **UX4GDrawer** | `ux4g-components-react/drawer` | `placement` `open` |
| **UX4GTooltipWrapper + UX4GTooltip** | `ux4g-components-react/tooltip` | `placement` `size` |
| **UX4GPopover** | `ux4g-components-react/popover` | `placement` `show` |
| **UX4GTable** | `ux4g-components-react/table` | `size` `divider` `zebra` `interactive` `sortable` |
| **UX4GPagination** | `ux4g-components-react/pagination` | `variant` `paginationStyle` |
| **UX4GStepper** | `ux4g-components-react/stepper` | `orientation` `alignment` `variant` `size` |
| **UX4GSliderField** | `ux4g-components-react/slider` | `size` |
| **UX4GSearchContainer** | `ux4g-components-react/search` | `size` |
| **UX4GDateTimePicker** | `ux4g-components-react/date-time-picker` | `mode` |
| **UX4GFileUpload** | `ux4g-components-react/file-upload` | `state` |
| **UX4GOtpInput** | `ux4g-components-react/otp-input` | `state` |
| **UX4GProgressIndicator** | `ux4g-components-react/progress-indicator` | `type` `size` `shape` |
| **UX4GStatusPipeline** | `ux4g-components-react/status-pipeline` | `orientation` `alignment` `variant` |
| **UX4GJourneyTimeline** | `ux4g-components-react/journey-timeline` | `orientation` |
| **UX4GFeedback** | `ux4g-components-react/feedback` | — |
| **UX4GFormFieldGroup** | `ux4g-components-react/form-field-group` | — |
| **UX4GList** | `ux4g-components-react/list` | `variant` `size` |
| **UX4GNavbar** | `ux4g-components-react/navbar` | — |
| **UX4GCarousel** | `ux4g-components-react/carousel` | — |
| **UX4GFooter** | `ux4g-components-react/footer` | — |
| **UX4GAccessibilityBar** | `ux4g-components-react/accessibility-bar` | — |
| **UX4GEmptyState** | `ux4g-components-react/empty-state` | — |
| **UX4GChipGroup** | `ux4g-components-react/chip-group` | — |
| **UX4GMegaMenu** | `ux4g-components-react/mega-menu` | — |
| **UX4GDraftStatusBanner** | `ux4g-components-react/draft-status-banner` | — |
| **UX4GSocialLinks** | `ux4g-components-react/social-links` | — |
| **UX4GSlotGrid** | `ux4g-components-react/slot-grid` | — |
| **UX4GResultListRow** | `ux4g-components-react/result-list-row` | — |
| **UX4GSlaProgressIndicator** | `ux4g-components-react/sla-progress-indicator` | — |

### Quick Start

```tsx
import 'ux4g-web-components/styles.css';       // CSS bundle (once in entry point)
import 'ux4g-web-components/design-system';     // Runtime behaviors (auto-init)
import { UX4GButton } from 'ux4g-components-react/button';

function App() {
  return <UX4GButton variant="primary" size="md">Save</UX4GButton>;
}
```

---

## Installation

```bash
npm install ux4g-components-react ux4g-web-components
```

> **Note:** `ux4g-web-components` is required — it provides the CSS bundle that styles all components.

## Setup

Import the CSS bundle once in your application entry point (e.g., `main.tsx`, `App.tsx`, or `index.tsx`):

```tsx
import 'ux4g-web-components/styles.css';
```

That's it. Runtime behaviors (dropdowns, modals, tooltips, etc.) are auto-initialized under the hood when you import any component (via `ux4g-web-components/design-system`) — no manual setup needed.

## Peer Dependencies

- `react >= 17.0.0`
- `react-dom >= 17.0.0`

---

## Components

### Button

```tsx
import { UX4GButton } from 'ux4g-components-react/button';

function App() {
  return (
    <>
      <UX4GButton variant="primary" size="md" onClick={() => console.log('clicked')}>
        Save
      </UX4GButton>

      <UX4GButton variant="outline-danger" size="lg">
        Delete
      </UX4GButton>

      <UX4GButton variant="tonal-primary" size="sm" shape="pill">
        Tag
      </UX4GButton>

      <UX4GButton variant="primary" size="md" loading>
        Saving...
      </UX4GButton>

      <UX4GButton variant="primary" size="md" disabled>
        Disabled
      </UX4GButton>
    </>
  );
}
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'outline-primary' \| 'text-primary' \| 'tonal-primary' \| 'danger' \| 'outline-danger' \| 'text-danger' \| 'tonal-danger'` | `'primary'` | Visual style |
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` | Button size |
| `shape` | `'rectangle' \| 'pill'` | `'rectangle'` | Border shape |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state (shows spinner) |
| `className` | `string` | — | Additional CSS classes |

Also accepts all native `<button>` HTML attributes (`onClick`, `type`, `aria-*`, etc.).

### Spinner

```tsx
import { UX4GSpinner } from 'ux4g-components-react/spinner';

<UX4GSpinner variant="primary" size="md" type="full" />
<UX4GSpinner variant="danger" size="lg" type="split" />
<UX4GSpinner variant="inverse" size="xs" type="partial" label="Processing" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'inverse' \| 'danger'` | `'primary'` | Color variant |
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` | Spinner size |
| `type` | `'full' \| 'split' \| 'partial'` | `'full'` | Spinner style |
| `label` | `string` | `'Loading'` | Accessible label |
| `className` | `string` | — | Additional CSS classes |

### Link

```tsx
import { UX4GLink } from 'ux4g-components-react/link';

<UX4GLink href="/docs" variant="default" size="md">Documentation</UX4GLink>
<UX4GLink href="/terms" variant="neutral" size="sm">Terms of Service</UX4GLink>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'neutral'` | `'default'` | Link color style |
| `size` | `'sm' \| 'md'` | `'md'` | Link size |
| `className` | `string` | — | Additional CSS classes |

Also accepts all native `<a>` HTML attributes.

### Badge

```tsx
import { UX4GBadge } from 'ux4g-components-react/badge';

<UX4GBadge type="dot" color="primary" />
<UX4GBadge type="digit" color="danger" size="m">5</UX4GBadge>
<UX4GBadge type="icon" color="success" size="l">✓</UX4GBadge>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'dot' \| 'icon' \| 'digit'` | `'dot'` | Badge type |
| `color` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'secondary' \| 'tertiary' \| 'neutral'` | `'primary'` | Badge color |
| `size` | `'s' \| 'm' \| 'l' \| 'profile-l' \| 'profile-xl' \| 'profile-2xl' \| 'profile-3xl'` | — | Badge size |
| `className` | `string` | — | Additional CSS classes |

### Avatar

```tsx
import { UX4GAvatar } from 'ux4g-components-react/avatar';

<UX4GAvatar avatarType="status" size="m">
  <img src="user.jpg" alt="User" />
</UX4GAvatar>

<UX4GAvatar avatarType="profile" size="xl">
  <img src="profile.jpg" alt="Profile" />
</UX4GAvatar>

<UX4GAvatar avatarType="group">
  <img src="u1.jpg" alt="" />
  <img src="u2.jpg" alt="" />
</UX4GAvatar>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `avatarType` | `'status' \| 'profile' \| 'group'` | `'status'` | Avatar type |
| `size` | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| '2xl' \| '3xl'` | — | Avatar size |
| `className` | `string` | — | Additional CSS classes |

### Image

```tsx
import { UX4GImage } from 'ux4g-components-react/image';

<UX4GImage src="photo.jpg" alt="Photo" ratio="16-9" />
<UX4GImage src="photo.jpg" alt="Photo" ratio="4-3" rounded />
<UX4GImage
  src="photo.jpg"
  alt="Photo"
  ratio="16-9"
  overlay
  overlayPosition="bottom"
  overlayContent={<p className="ux4g-body-m-default">Caption text</p>}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `ratio` | `'1-1' \| '4-3' \| '3-2' \| '16-10' \| '16-9' \| '2-1' \| '5-2' \| '3-1' \| '1-16' \| '2-3' \| '3-4'` | — | Aspect ratio |
| `rounded` | `boolean` | `false` | Rounded corners |
| `overlay` | `boolean` | `false` | Enable overlay container |
| `overlayPosition` | `'top' \| 'bottom' \| 'center' \| 'full'` | `'bottom'` | Overlay position |
| `overlayContent` | `ReactNode` | — | Content rendered inside the overlay |
| `className` | `string` | — | Additional CSS classes |

Also accepts all native `<img>` HTML attributes (`src`, `alt`, `loading`, etc.).

### Chip

```tsx
import { UX4GChip } from 'ux4g-components-react/chip';

<UX4GChip chipType="filter" size="md">Category</UX4GChip>
<UX4GChip chipType="choice" size="sm" active>Selected</UX4GChip>
<UX4GChip chipType="input" size="xs">Tag</UX4GChip>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `chipType` | `'filter' \| 'choice' \| 'input'` | `'filter'` | Chip type |
| `size` | `'md' \| 'sm' \| 'xs'` | `'md'` | Chip size (xs only for input) |
| `active` | `boolean` | `false` | Active/selected state |
| `className` | `string` | — | Additional CSS classes |

### Tag

```tsx
import { UX4GTag } from 'ux4g-components-react/tag';

<UX4GTag variant="tonal" color="neutral">Default</UX4GTag>
<UX4GTag variant="filled" color="success" small>Active</UX4GTag>
<UX4GTag variant="outline" color="error">Error</UX4GTag>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'tonal' \| 'filled' \| 'outline' \| 'text'` | `'tonal'` | Tag style |
| `color` | `'neutral' \| 'brand' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'neutral'` | Tag color |
| `small` | `boolean` | `false` | Small size |
| `className` | `string` | — | Additional CSS classes |

### Divider

```tsx
import { UX4GDivider } from 'ux4g-components-react/divider';

<UX4GDivider orientation="horizontal" />
<UX4GDivider orientation="vertical" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider direction |
| `className` | `string` | — | Additional CSS classes |

### Breadcrumb

```tsx
import { UX4GBreadcrumb } from 'ux4g-components-react/breadcrumb';

<UX4GBreadcrumb separator="divider">
  <a href="#">Home</a>
  <a href="#">Products</a>
  <span>Current</span>
</UX4GBreadcrumb>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `separator` | `'divider' \| 'icon'` | `'divider'` | Separator style |
| `className` | `string` | — | Additional CSS classes |

### Checkbox

```tsx
import { UX4GCheckbox } from 'ux4g-components-react/checkbox';

<label>
  <UX4GCheckbox size="md" checked={isChecked} onChange={(e) => setChecked(e.target.checked)} />
  Accept terms
</label>

<label>
  <UX4GCheckbox size="sm" error />
  Required field
</label>

<label>
  <UX4GCheckbox size="md" indeterminate />
  Select all
</label>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Checkbox size |
| `checked` | `boolean` | `false` | Checked state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | Change handler |
| `className` | `string` | — | Additional CSS classes |

> **Note:** This is a control-only wrapper. Wrap with `<label>` to associate visible text.

### Radio

```tsx
import { UX4GRadio } from 'ux4g-components-react/radio';

<label>
  <UX4GRadio size="md" name="option" value="a" checked={selected === 'a'} onChange={() => setSelected('a')} />
  Option A
</label>
<label>
  <UX4GRadio size="lg" name="option" value="b" error />
  Option B
</label>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Radio size |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state |
| `name` | `string` | — | Radio group name |
| `value` | `string` | — | Radio value |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | Change handler |
| `className` | `string` | — | Additional CSS classes |

> **Note:** This is a control-only wrapper. Wrap with `<label>` to associate visible text.

### Switch

```tsx
import { UX4GSwitch } from 'ux4g-components-react/switch';

<label>
  <UX4GSwitch size="md" checked={isOn} onChange={(e) => setIsOn(e.target.checked)} />
  Enable notifications
</label>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Switch size |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | Change handler |
| `className` | `string` | — | Additional CSS classes |

> **Note:** This is a control-only wrapper. Wrap with `<label>` to associate visible text.

### Card

```tsx
import { UX4GCard } from 'ux4g-components-react/card';

<UX4GCard variant="solid" layout="vertical">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</UX4GCard>

<UX4GCard variant="outline" layout="horizontal">
  <img src="thumb.jpg" alt="" />
  <p>Horizontal card</p>
</UX4GCard>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'solid' \| 'outline' \| 'no-fill'` | `'solid'` | Card style |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Card layout |
| `className` | `string` | — | Additional CSS classes |

### Input

```tsx
import { UX4GInput } from 'ux4g-components-react/input';

<UX4GInput size="md" state="default">
  <label className="ux4g-input-label">Email</label>
  <input className="ux4g-input" type="email" placeholder="Enter email" />
</UX4GInput>

<UX4GInput size="lg" state="error">
  <label className="ux4g-input-label">Password</label>
  <input className="ux4g-input" type="password" />
  <span className="ux4g-input-helper">Password is required</span>
</UX4GInput>

<UX4GInput size="md" state="default" disabled>
  <label className="ux4g-input-label">Disabled</label>
  <input className="ux4g-input" type="text" disabled />
</UX4GInput>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Input container size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `disabled` | `boolean` | `false` | Disabled state (adds class to children) |
| `className` | `string` | — | Additional CSS classes |

> **Note:** This is a container shell. Label, input element, and helper text are projected as children using UX4G CSS classes.

### List

```tsx
import { UX4GList } from 'ux4g-components-react/list';

<UX4GList variant="default" size="m">
  <li>Item one</li>
  <li>Item two</li>
</UX4GList>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | List style |
| `size` | `'s' \| 'm' \| 'l' \| 'xl'` | `'m'` | List size |
| `className` | `string` | — | Additional CSS classes |

### Dropdown

```tsx
import { UX4GDropdown } from 'ux4g-components-react/dropdown';

<UX4GDropdown type="selection" mode="single" size="md" state="default">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</UX4GDropdown>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'selection' \| 'button' \| 'overflow'` | `'selection'` | Dropdown type |
| `mode` | `'single' \| 'multi'` | `'single'` | Selection mode |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dropdown size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `open` | `boolean` | `false` | Open state |
| `className` | `string` | — | Additional CSS classes |

### Combobox

```tsx
import { UX4GCombobox } from 'ux4g-components-react/combobox';

<UX4GCombobox type="single" size="md" state="default" placeholder="Search..." />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'single' \| 'multi'` | `'single'` | Combobox type |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Combobox size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `open` | `boolean` | `false` | Open state |
| `className` | `string` | — | Additional CSS classes |

### Modal

```tsx
import { UX4GModal } from 'ux4g-components-react/modal';

<UX4GModal size="m" opacity="50" open={isOpen}>
  <h2>Modal Title</h2>
  <p>Modal content here.</p>
  <button onClick={() => setIsOpen(false)}>Close</button>
</UX4GModal>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | Modal size |
| `opacity` | `'25' \| '50' \| '75'` | `'50'` | Backdrop opacity |
| `blur` | `boolean` | `false` | Backdrop blur |
| `open` | `boolean` | `false` | Open state |
| `centerContent` | `boolean` | `false` | Center modal content |
| `className` | `string` | — | Additional CSS classes |

> **Note:** Close handling is external — toggle the `open` prop from your state. There is no `onClose` callback.

### Alert / Toast

```tsx
import { UX4GAlert, UX4GAlertContainer } from 'ux4g-components-react/alert';

<UX4GAlert variant="info">This is an informational message.</UX4GAlert>
<UX4GAlert variant="success" layout="wide">Saved successfully!</UX4GAlert>

{/* Toast variant (contextual notification styling) */}
<UX4GAlert variant="success" toast>Toast notification</UX4GAlert>

{/* Toast container for positioning */}
<UX4GAlertContainer position="top-right">
  <UX4GAlert variant="success" toast>Toast notification</UX4GAlert>
</UX4GAlertContainer>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert type |
| `toast` | `boolean` | `false` | Use contextual toast styling instead of inline alert |
| `layout` | `'fluid' \| 'center' \| 'wide'` | `'fluid'` | Alert layout (when toast=false) |
| `className` | `string` | — | Additional CSS classes |

**AlertContainer Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top-right'` | Container position |

### Search

```tsx
import { UX4GSearchContainer } from 'ux4g-components-react/search';

<UX4GSearchContainer size="m">
  <input className="ux4g-search-input" type="search" placeholder="Search..." />
  <button className="ux4g-search-btn">
    <span className="ux4g-icon-outlined">search</span>
  </button>
</UX4GSearchContainer>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'s' \| 'm' \| 'lg'` | `'m'` | Search container size |
| `className` | `string` | — | Additional CSS classes |

This is a container shell — the search input, button, and event handling are projected as children.

### Pagination

```tsx
import { UX4GPagination } from 'ux4g-components-react/pagination';

<UX4GPagination variant="default">
  <button className="ux4g-pagination-prev" aria-label="Previous">‹</button>
  <button className="ux4g-pagination-item ux4g-pagination-active">1</button>
  <button className="ux4g-pagination-item">2</button>
  <button className="ux4g-pagination-item">3</button>
  <button className="ux4g-pagination-next" aria-label="Next">›</button>
</UX4GPagination>

<UX4GPagination variant="dotted" paginationStyle="solid">
  <span className="ux4g-pagination-dot ux4g-pagination-active"></span>
  <span className="ux4g-pagination-dot"></span>
  <span className="ux4g-pagination-dot"></span>
</UX4GPagination>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'dotted'` | `'default'` | Pagination style |
| `paginationStyle` | `'default' \| 'solid' \| 'translucent'` | `'default'` | Dotted variant style |
| `className` | `string` | — | Additional CSS classes |

This is a container shell — page items, navigation buttons, and active state management are handled externally via children.

### Table

```tsx
import { UX4GTable } from 'ux4g-components-react/table';

<UX4GTable size="m" divider="row" interactive>
  <thead>
    <tr><th>Name</th><th>Email</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>alice@example.com</td></tr>
  </tbody>
</UX4GTable>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'s' \| 'm' \| 'lg'` | `'m'` | Table size |
| `divider` | `'row' \| 'column' \| 'none'` | `'row'` | Divider style |
| `zebra` | `'none' \| 'rows' \| 'cols'` | `'none'` | Zebra striping |
| `interactive` | `boolean` | `false` | Hover highlight |
| `sortable` | `boolean` | `false` | Sortable columns |
| `resizable` | `boolean` | `false` | Resizable columns |
| `headerBrand` | `boolean` | `false` | Brand-colored header |
| `className` | `string` | — | Additional CSS classes |

### Popover

```tsx
import { UX4GPopover } from 'ux4g-components-react/popover';

<UX4GPopover placement="right" show={showPopover}>
  <div className="ux4g-popover-header">Popover Title</div>
  <div className="ux4g-popover-body">Body text goes here</div>
</UX4GPopover>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'bottom'` | Popover position |
| `show` | `boolean` | `false` | Visibility |
| `className` | `string` | — | Additional CSS classes |

Content (title, body) is projected as children using UX4G popover CSS classes, not via dedicated props.

### Tooltip

```tsx
import { UX4GTooltipWrapper, UX4GTooltip } from 'ux4g-components-react/tooltip';

<UX4GTooltipWrapper>
  <button>Hover me</button>
  <UX4GTooltip placement="top-center" size="s">
    Tooltip text goes here
  </UX4GTooltip>
</UX4GTooltipWrapper>
```

The Tooltip uses a compound pattern: wrap the trigger element and the tooltip bubble together inside `UX4GTooltipWrapper`.

**UX4GTooltipWrapper Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Additional CSS classes |

**UX4GTooltip Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right' \| 'left-center' \| 'right-center'` | `'top-center'` | Tooltip position |
| `size` | `'s' \| 'xs'` | `'s'` | Tooltip size |
| `className` | `string` | — | Additional CSS classes |

Content is projected as children, not via a `content` prop.

### Tab

```tsx
import { UX4GTab } from 'ux4g-components-react/tab';

<UX4GTab variant="underline" size="md">
  <UX4GTab.Item label="Tab 1" active>Content 1</UX4GTab.Item>
  <UX4GTab.Item label="Tab 2">Content 2</UX4GTab.Item>
</UX4GTab>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'underline' \| 'pill'` | `'underline'` | Tab style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tab size |
| `vertical` | `boolean` | `false` | Vertical layout |
| `className` | `string` | — | Additional CSS classes |

### Icon Button

```tsx
import { UX4GIconButton } from 'ux4g-components-react/icon-button';

<UX4GIconButton variant="primary" size="md" aria-label="Edit">
  <i className="ux4g-icon-edit" />
</UX4GIconButton>

<UX4GIconButton variant="tonal-primary" size="lg" pill aria-label="Add">
  <i className="ux4g-icon-plus" />
</UX4GIconButton>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'outline-primary' \| 'tonal-primary' \| 'text-primary'` | `'text-primary'` | Button style |
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` | Button size |
| `pill` | `boolean` | `false` | Pill shape |
| `className` | `string` | — | Additional CSS classes |

### Accessibility Bar

```tsx
import { UX4GAccessibilityBar } from 'ux4g-components-react/accessibility-bar';

<UX4GAccessibilityBar>
  <a href="#main-content">Skip to main content</a>
</UX4GAccessibilityBar>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Additional CSS classes |

### Accordion

```tsx
import { UX4GAccordion } from 'ux4g-components-react/accordion';

<UX4GAccordion arrowPosition="right" variant="default">
  <UX4GAccordion.Item title="Section 1">Content 1</UX4GAccordion.Item>
  <UX4GAccordion.Item title="Section 2">Content 2</UX4GAccordion.Item>
</UX4GAccordion>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `arrowPosition` | `'right' \| 'left'` | `'right'` | Arrow icon position |
| `variant` | `'default' \| 'bordered'` | `'default'` | Accordion style |
| `className` | `string` | — | Additional CSS classes |

### Stepper

```tsx
import { UX4GStepper } from 'ux4g-components-react/stepper';

<UX4GStepper orientation="horizontal" alignment="center">
  <UX4GStepper.Step status="completed">Step 1</UX4GStepper.Step>
  <UX4GStepper.Step status="active">Step 2</UX4GStepper.Step>
  <UX4GStepper.Step>Step 3</UX4GStepper.Step>
</UX4GStepper>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `alignment` | `'default' \| 'center' \| 'left'` | `'default'` | Horizontal alignment |
| `variant` | `'default' \| 'bottom-line' \| 'bottom-line-fill' \| 'mobile' \| 'progress'` | `'default'` | Stepper style |
| `size` | `'default' \| 's'` | `'default'` | Stepper size |
| `className` | `string` | — | Additional CSS classes |

### Slider

```tsx
import { UX4GSliderField } from 'ux4g-components-react/slider';

<UX4GSliderField size="sm">
  <label className="ux4g-slider-label">Volume</label>
  <input className="ux4g-slider-input" type="range" min={0} max={100} defaultValue={50} />
</UX4GSliderField>

<UX4GSliderField size="md">
  <input className="ux4g-slider-input" type="range" min={0} max={100} defaultValue={75} />
</UX4GSliderField>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md'` | `'sm'` | Slider size |
| `className` | `string` | — | Additional CSS classes |

> **Note:** The exported component is `UX4GSliderField`. The range input and label are projected as children.

### Drawer

```tsx
import { UX4GDrawer } from 'ux4g-components-react/drawer';

<UX4GDrawer placement="right" open={isOpen}>
  <h3>Drawer Title</h3>
  <p>Drawer content</p>
  <button onClick={() => setIsOpen(false)}>Close</button>
</UX4GDrawer>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `'right' \| 'left' \| 'top' \| 'bottom'` | `'right'` | Slide-in direction |
| `open` | `boolean` | `false` | Open state |
| `className` | `string` | — | Additional CSS classes |

> **Note:** Close handling is external — toggle the `open` prop from your state. There is no `onClose` callback.

### Date-Time Picker

```tsx
import { UX4GDateTimePicker } from 'ux4g-components-react/date-time-picker';

<UX4GDateTimePicker mode="date" />
<UX4GDateTimePicker mode="time" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `mode` | `'date' \| 'time'` | `'date'` | Picker mode |
| `className` | `string` | — | Additional CSS classes |

### Status Pipeline

```tsx
import { UX4GStatusPipeline } from 'ux4g-components-react/status-pipeline';

<UX4GStatusPipeline orientation="horizontal" alignment="center">
  <UX4GStatusPipeline.Step status="completed">Submitted</UX4GStatusPipeline.Step>
  <UX4GStatusPipeline.Step status="active">In Review</UX4GStatusPipeline.Step>
  <UX4GStatusPipeline.Step>Approved</UX4GStatusPipeline.Step>
</UX4GStatusPipeline>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `alignment` | `'default' \| 'center' \| 'left'` | `'default'` | Horizontal alignment |
| `variant` | `'default' \| 'bottom-line' \| 'bottom-line-fill' \| 'mobile' \| 'progress'` | `'default'` | Pipeline style |
| `size` | `'default' \| 's'` | `'default'` | Pipeline size |
| `className` | `string` | — | Additional CSS classes |

### Journey Timeline

```tsx
import { UX4GJourneyTimeline } from 'ux4g-components-react/journey-timeline';

<UX4GJourneyTimeline orientation="vertical">
  <UX4GJourneyTimeline.Item>Event 1</UX4GJourneyTimeline.Item>
  <UX4GJourneyTimeline.Item>Event 2</UX4GJourneyTimeline.Item>
</UX4GJourneyTimeline>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Timeline direction |
| `className` | `string` | — | Additional CSS classes |

### Form Field Group

```tsx
import { UX4GFormFieldGroup } from 'ux4g-components-react/form-field-group';

<UX4GFormFieldGroup>
  <label>Full Name</label>
  <input type="text" />
  <span>Enter your full legal name</span>
</UX4GFormFieldGroup>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Additional CSS classes |

### OTP Input

```tsx
import { UX4GOtpInput } from 'ux4g-components-react/otp-input';

<UX4GOtpInput state="default">
  <div className="ux4g-otp-label ux4g-label-l-default">Enter OTP</div>
  <div className="ux4g-otp-group">
    <input className="ux4g-otp-source" type="hidden" value="" data-ux-count="4" placeholder="—" />
  </div>
  <div className="ux4g-otp-meta ux4g-body-s-default">
    <span className="ux4g-otp-helper">Didn't receive OTP?</span>
    <span className="ux4g-otp-resend">Resend</span>
  </div>
</UX4GOtpInput>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `state` | `'default' \| 'success' \| 'error' \| 'locked'` | `'default'` | Input state |
| `className` | `string` | — | Additional CSS classes |

The OTP digit inputs are constructed by the runtime JS (`ux4g-web-components/runtime`). The `data-ux-count` attribute on the hidden input controls how many digit boxes render. Content (label, meta) is projected as children.

### File Upload

```tsx
import { UX4GFileUpload } from 'ux4g-components-react/file-upload';

<UX4GFileUpload state="default" />
<UX4GFileUpload state="uploaded" fileName="document.pdf" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `state` | `'default' \| 'default-vle' \| 'selecting' \| 'scanning' \| 'uploaded' \| 'uploaded-vle' \| 'error'` | `'default'` | Upload state |
| `className` | `string` | — | Additional CSS classes |

### Progress Indicator

```tsx
import { UX4GProgressIndicator } from 'ux4g-components-react/progress-indicator';

{/* Bar variant — value set via CSS variable or children */}
<UX4GProgressIndicator type="bar">
  <div className="ux4g-progress-bar-track">
    <div className="ux4g-progress-bar-fill" style={{ width: '60%' }}></div>
  </div>
  <span className="ux4g-progress-label">60%</span>
</UX4GProgressIndicator>

{/* Circle variant */}
<UX4GProgressIndicator type="circle" size="l" labelPlacement="inside">
  <span className="ux4g-progress-value">75%</span>
</UX4GProgressIndicator>

{/* Rounded shape */}
<UX4GProgressIndicator type="bar" shape="rounded">
  <div className="ux4g-progress-bar-track">
    <div className="ux4g-progress-bar-fill" style={{ width: '45%' }}></div>
  </div>
</UX4GProgressIndicator>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'bar' \| 'circle'` | — (required) | Indicator type |
| `labelPlacement` | `'outside' \| 'inside'` | — | Label position |
| `shape` | `'default' \| 'rounded'` | — | Bar shape |
| `size` | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| '2xl' \| '3xl'` | — | Circle size (ignored for bar) |
| `className` | `string` | — | Additional CSS classes |

> **Note:** This is a container shell. The progress track, fill, and value label are projected as children. There is no `value` prop — progress visualization is handled via CSS/markup.

### Feedback

```tsx
import { UX4GFeedback } from 'ux4g-components-react/feedback';

<UX4GFeedback>
  <p>Was this helpful?</p>
  <button>Yes</button>
  <button>No</button>
</UX4GFeedback>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Additional CSS classes |

### Draft Status Banner

```tsx
import { UX4GDraftStatusBanner } from 'ux4g-components-react/draft-status-banner';

<UX4GDraftStatusBanner variant="default">Draft saved</UX4GDraftStatusBanner>
<UX4GDraftStatusBanner variant="auto">Auto-saving...</UX4GDraftStatusBanner>
<UX4GDraftStatusBanner variant="success">Published</UX4GDraftStatusBanner>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'auto' \| 'success'` | `'default'` | Banner style |
| `className` | `string` | — | Additional CSS classes |

### SLA Progress Indicator

```tsx
import { UX4GSlaProgressIndicator } from 'ux4g-components-react/sla-progress-indicator';

<UX4GSlaProgressIndicator type="circle">
  <div className="ux4g-sla-circle-track">
    <span className="ux4g-sla-value">75%</span>
  </div>
</UX4GSlaProgressIndicator>

<UX4GSlaProgressIndicator type="linear">
  <div className="ux4g-sla-linear-track">
    <div className="ux4g-sla-linear-fill" style={{ width: '50%' }}></div>
  </div>
</UX4GSlaProgressIndicator>

<UX4GSlaProgressIndicator type="badge">On Track</UX4GSlaProgressIndicator>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'circle' \| 'linear' \| 'badge'` | — (required) | Indicator type |
| `className` | `string` | — | Additional CSS classes |

> **Note:** This is a container shell. Progress value and track are projected as children. There is no `value` prop.

### Carousel

```tsx
import { UX4GCarousel } from 'ux4g-components-react/carousel';

<UX4GCarousel>
  <UX4GCarousel.Item>Slide 1</UX4GCarousel.Item>
  <UX4GCarousel.Item>Slide 2</UX4GCarousel.Item>
  <UX4GCarousel.Item>Slide 3</UX4GCarousel.Item>
</UX4GCarousel>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Additional CSS classes |

### Empty State

```tsx
import { UX4GEmptyState } from 'ux4g-components-react/empty-state';

<UX4GEmptyState>
  <img src="empty.svg" alt="" />
  <h3>No results found</h3>
  <p>Try adjusting your search.</p>
</UX4GEmptyState>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Additional CSS classes |

### Chip Group

```tsx
import { UX4GChipGroup } from 'ux4g-components-react/chip-group';

<UX4GChipGroup variant="filter">
  <UX4GChip chipType="filter" size="md" active>All</UX4GChip>
  <UX4GChip chipType="filter" size="md">Category A</UX4GChip>
</UX4GChipGroup>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'filter' \| 'choice'` | `'filter'` | Group type |
| `className` | `string` | — | Additional CSS classes |

### Navbar

```tsx
import { UX4GNavbar } from 'ux4g-components-react/navbar';

<UX4GNavbar>
  <a href="/">Logo</a>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</UX4GNavbar>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Additional CSS classes |

### Social Links

```tsx
import { UX4GSocialLinks } from 'ux4g-components-react/social-links';

<UX4GSocialLinks size="md">
  <a href="#" aria-label="Twitter"><i className="ux4g-icon-twitter" /></a>
  <a href="#" aria-label="LinkedIn"><i className="ux4g-icon-linkedin" /></a>
</UX4GSocialLinks>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Icon spacing size |
| `className` | `string` | — | Additional CSS classes |

### Slot Grid

```tsx
import { UX4GSlotGrid } from 'ux4g-components-react/slot-grid';

<UX4GSlotGrid variant="weekly">
  <div>9:00 AM</div>
  <div>10:00 AM</div>
</UX4GSlotGrid>

<UX4GSlotGrid variant="compact">
  <div>9:00</div>
  <div>9:30</div>
</UX4GSlotGrid>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'weekly' \| 'compact'` | `'weekly'` | Grid layout |
| `className` | `string` | — | Additional CSS classes |

### Footer

```tsx
import { UX4GFooter } from 'ux4g-components-react/footer';

<UX4GFooter theme="primary">
  <p>&copy; 2024 Company Name</p>
</UX4GFooter>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `theme` | `'default' \| 'primary' \| 'dark'` | `'default'` | Footer theme |
| `className` | `string` | — | Additional CSS classes |

### Mega Menu

```tsx
import {
  UX4GMegaMenu,
  UX4GMegaMenuSidebar,
  UX4GMegaMenuCategoryItem,
  UX4GMegaMenuContent,
  UX4GMegaMenuColumn,
} from 'ux4g-components-react/mega-menu';

<UX4GMegaMenu>
  <UX4GMegaMenuSidebar>
    <UX4GMegaMenuCategoryItem active>Category 1</UX4GMegaMenuCategoryItem>
    <UX4GMegaMenuCategoryItem>Category 2</UX4GMegaMenuCategoryItem>
  </UX4GMegaMenuSidebar>
  <UX4GMegaMenuContent active>
    <UX4GMegaMenuColumn>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
    </UX4GMegaMenuColumn>
  </UX4GMegaMenuContent>
</UX4GMegaMenu>

{/* Dropdown variant */}
<UX4GMegaMenu dropdown>
  <UX4GMegaMenuSidebar>
    <UX4GMegaMenuCategoryItem active>Services</UX4GMegaMenuCategoryItem>
  </UX4GMegaMenuSidebar>
  <UX4GMegaMenuContent active>
    <UX4GMegaMenuColumn>
      <a href="#">Service A</a>
    </UX4GMegaMenuColumn>
  </UX4GMegaMenuContent>
</UX4GMegaMenu>
```

**UX4GMegaMenu Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `dropdown` | `boolean` | `false` | Render as dropdown (wraps in positioning container) |
| `dropdownRight` | `boolean` | `false` | Align dropdown to the right |
| `className` | `string` | — | Additional CSS classes |

**UX4GMegaMenuCategoryItem Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Active/selected state |
| `className` | `string` | — | Additional CSS classes |

**UX4GMegaMenuContent Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Active/visible state |
| `className` | `string` | — | Additional CSS classes |

### Result List Row

```tsx
import { UX4GResultListRow } from 'ux4g-components-react/result-list-row';

<UX4GResultListRow variation="v1">
  {/* Header */}
  <div className="ux4g-result-list-header">
    <div className="ux4g-result-list-info">
      <div className="ux4g-result-list-icon"></div>
      <div className="ux4g-result-list-title-group">
        <h2 className="ux4g-title-s-default ux4g-result-list-title">Certificate Name</h2>
      </div>
    </div>
    <div className="ux4g-result-list-actions-container">
      <div className="ux4g-result-list-actions">
        <button className="ux4g-btn-outline-neutral ux4g-btn-s ux4g-btn">Track</button>
      </div>
    </div>
  </div>
  {/* Expanded Content */}
  <div className="ux4g-result-list-content">
    <div className="ux4g-result-list-details">
      <div className="ux4g-result-list-detail-item">
        <span className="ux4g-label-m-default ux4g-text-neutral-tertiary">Submitted Date</span>
        <span className="ux4g-body-s-default ux4g-text-neutral-secondary">1 Apr 2026</span>
      </div>
    </div>
  </div>
</UX4GResultListRow>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variation` | `'default' \| 'v1' \| 'v2' \| 'v3' \| 'v4' \| 'v5'` | `'default'` | Row layout variation |
| `className` | `string` | — | Additional CSS classes |

Also accepts all native `<div>` HTML attributes.

---

## Dark Theme

Apply the dark theme by adding `data-theme="dark"` to any container or the `<html>` element:

```tsx
// Global dark theme
<html data-theme="dark">

// Scoped dark theme
<div data-theme="dark">
  <UX4GButton variant="primary" size="md">Dark themed</UX4GButton>
</div>
```

Design tokens automatically switch values — no additional imports needed.

---

## Architecture

This package follows a CSS-first architecture:

- **CSS is the source of truth** — all visual decisions live in CSS from `ux4g-web-components`
- **Wrappers are thin** — they map typed props to CSS class strings via `buildXxxClasses()` functions
- **No inline styles, no CSS-in-JS** — only `className` bindings
- **Class_Builder functions** are imported from `ux4g-web-components/types`
- **Runtime auto-bootstrap** — interactive behaviors initialize automatically

---

## Available Components (51)

All components are available as sub-path imports:

```ts
import { UX4GButton } from 'ux4g-components-react/button';
import { UX4GSpinner } from 'ux4g-components-react/spinner';
import { UX4GBadge } from 'ux4g-components-react/badge';
// ... etc.
```

Full list: `accessibility-bar`, `accordion`, `alert`, `avatar`, `badge`, `breadcrumb`, `button`, `card`, `carousel`, `checkbox`, `chip`, `chip-group`, `combobox`, `date-time-picker`, `divider`, `draft-status-banner`, `drawer`, `dropdown`, `empty-state`, `feedback`, `file-upload`, `footer`, `form-field-group`, `icon-button`, `image`, `input`, `journey-timeline`, `link`, `list`, `mega-menu`, `modal`, `navbar`, `otp-input`, `pagination`, `popover`, `progress-indicator`, `radio`, `result-list-row`, `search`, `sla-progress-indicator`, `slider`, `slot-grid`, `social-links`, `spinner`, `status-pipeline`, `stepper`, `switch`, `tab`, `table`, `tag`, `tooltip`

---

## Related Packages

- [`ux4g-web-components`](https://www.npmjs.com/package/ux4g-web-components) — CSS bundle and shared types (required)
- [`ux4g-components-angular`](https://www.npmjs.com/package/ux4g-components-angular) — Angular wrapper components

## License

MIT
