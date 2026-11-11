// src/types.ts
export type ButtonVariant =
  | 'primary'
  | 'outline-primary'
  | 'text-primary'
  | 'tonal-primary'
  | 'danger'
  | 'outline-danger'
  | 'text-danger'
  | 'tonal-danger'
  | 'outline-neutral'
  | 'text-neutral';

export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type ButtonShape = 'rectangle' | 'pill';

// Maps variant → CSS class
export const VARIANT_CLASS_MAP: Record<ButtonVariant, string> = {
  'primary':         'ux4g-btn-primary',
  'outline-primary': 'ux4g-btn-outline-primary',
  'text-primary':    'ux4g-btn-text-primary',
  'tonal-primary':   'ux4g-btn-tonal-primary',
  'danger':          'ux4g-btn-danger',
  'outline-danger':  'ux4g-btn-outline-danger',
  'text-danger':     'ux4g-btn-text-danger',
  'tonal-danger':    'ux4g-btn-tonal-danger',
  'outline-neutral': 'ux4g-btn-outline-neutral',
  'text-neutral':    'ux4g-btn-text-neutral',
};

// Maps size → CSS class
export const SIZE_CLASS_MAP: Record<ButtonSize, string | null> = {
  'xl': 'ux4g-btn-xl',
  'lg': 'ux4g-btn-l',
  'md': 'ux4g-btn-m',
  'sm': 'ux4g-btn-s',
  'xs': 'ux4g-btn-xs',
};

// Pure utility — maps button props to UX4G class strings for any consumer (HTML, React, Angular).
export function buildButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  loading: boolean,
  shape?: ButtonShape,
  extra?: string
): string {
  const classes: string[] = [VARIANT_CLASS_MAP[variant]];
  const sizeClass = SIZE_CLASS_MAP[size];
  if (sizeClass) classes.push(sizeClass);
  if (shape === 'pill') classes.push('ux4g-btn-pill');
  if (disabled) classes.push('ux4g-btn-disabled');
  if (loading) classes.push('ux4g-btn-loading');
  if (extra) classes.push(extra);
  return classes.join(' ');
}

// ── Spinner ──────────────────────────────────────────────────────────────────

export type SpinnerVariant = 'primary' | 'inverse' | 'danger';
export type SpinnerSize    = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'l' | 'm' | 's';
export type SpinnerType    = 'full' | 'split' | 'partial';

export const SPINNER_VARIANT_CLASS_PART: Record<SpinnerVariant, string> = {
  primary: 'primary',
  inverse: 'inverse',
  danger:  'danger',
};

export const SPINNER_SIZE_CLASS_PART: Record<SpinnerSize, string> = {
  xl: 'xl',
  lg: 'l',
  md: 'm',
  sm: 's',
  xs: 'xs',
  l:  'l',
  m:  'm',
  s:  's',
};

export const SPINNER_TYPE_CLASS_PART: Record<SpinnerType, string> = {
  full:    'full',
  split:   'split',
  partial: 'partial',
};

/** Returns the CSS class(es) for a spinner.
 *  Base class: `ux4g-spinner-{variant}-{type}` (always present)
 *  Size class:  `ux4g-spinner-{size}` (omitted when size is 'md' or 'm' — the default)
 *  e.g. `ux4g-spinner-primary-full` (md/m default)
 *       `ux4g-spinner-primary-full ux4g-spinner-xl` (xl size)
 */
export function buildSpinnerClasses(
  variant: SpinnerVariant,
  size: SpinnerSize,
  type: SpinnerType,
  extra?: string
): string {
  const normSize = size === 'lg' ? 'l' : (size === 'md' ? 'm' : (size === 'sm' ? 's' : size));
  const base = `ux4g-spinner-${variant}-${type}`;
  const sizeClass = normSize !== 'm' ? `ux4g-spinner-${normSize}` : null;
  const parts = [base];
  if (sizeClass) parts.push(sizeClass);
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Link ─────────────────────────────────────────────────────────────────────
export type LinkVariant = 'default' | 'neutral';
export type LinkSize    = 's' | 'm' | 'sm' | 'md';

export function buildLinkClasses(variant: LinkVariant, size: LinkSize, extra?: string): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : size);
  const base = variant === 'neutral'
    ? `ux4g-text-link-neutral-${normSize}`
    : `ux4g-text-link-${normSize}`;
  return extra ? `${base} ${extra}` : base;
}

// ── Badge ─────────────────────────────────────────────────────────────────────
export type BadgeType  = 'dot' | 'icon' | 'digit';
export type BadgeColor = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary' | 'tertiary' | 'neutral';
export type BadgeSize  = 's' | 'm' | 'l' | 'profile-l' | 'profile-xl' | 'profile-2xl' | 'profile-3xl';

export function buildBadgeClasses(type: BadgeType, color: BadgeColor, size?: BadgeSize, extra?: string): string {
  const parts = [`ux4g-badge-${type}-${color}`];
  if (size)  parts.push(`ux4g-badge-${size}`);
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Avatar ────────────────────────────────────────────────────────────────────
export type AvatarType = 'status' | 'profile' | 'group';
export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';

export function buildAvatarClasses(avatarType: AvatarType, size?: AvatarSize, extra?: string): string {
  if (avatarType === 'group') {
    return extra ? `ux4g-avatar-group ${extra}` : 'ux4g-avatar-group';
  }
  const parts = ['ux4g-avatar', `ux4g-avatar-${avatarType}`];
  if (size)  parts.push(`ux4g-avatar-${size}`);
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Image ─────────────────────────────────────────────────────────────────────
export type ImageRatio           = '1-1' | '4-3' | '3-2' | '16-10' | '16-9' | '2-1' | '5-2' | '3-1' | '1-16' | '2-3' | '3-4';
export type ImageOverlayPosition = 'bottom' | 'top';

export function buildImageContainerClasses(ratio?: ImageRatio, rounded?: boolean, overlay?: boolean, extra?: string): string {
  const parts: string[] = [];
  if (overlay) parts.push('ux4g-img-overlay');
  if (rounded) parts.push('ux4g-img-rounded');
  if (ratio)   parts.push(`ux4g-ratio-${ratio}`);
  if (extra)   parts.push(extra);
  return parts.join(' ');
}

// ── Chip ──────────────────────────────────────────────────────────────────────
export type ChipType = 'filter' | 'choice' | 'input';
export type ChipSize = 'm' | 's' | 'xs' | 'md' | 'sm';

export function buildChipClasses(
  chipType: ChipType,
  size: ChipSize,
  active?: boolean,
  extra?: string
): string {
  const normalizedSize = size === 'md' ? 'm' : (size === 'sm' ? 's' : size);
  // xs is only valid for input chips; filter and choice clamp to s
  const effectiveSize = (chipType !== 'input' && normalizedSize === 'xs') ? 's' : normalizedSize;
  const parts = [`ux4g-${chipType}-chip-${effectiveSize}`];
  if (active) parts.push('active');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Tag ───────────────────────────────────────────────────────────────────────
export type TagVariant = 'tonal' | 'filled' | 'outline' | 'text';
export type TagColor   = 'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info';

export function buildTagClasses(
  variant: TagVariant,
  color: TagColor,
  small?: boolean,
  extra?: string
): string {
  const parts = [`ux4g-tag-${variant}-${color}`];
  if (small) parts.push('ux4g-tag-s');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Divider ───────────────────────────────────────────────────────────────────
export type DividerOrientation = 'horizontal' | 'vertical';

export function buildDividerClasses(
  orientation: DividerOrientation,
  extra?: string
): string {
  const base = `ux4g-divider-${orientation}`;
  return extra ? `${base} ${extra}` : base;
}

// ── Breadcrumb ────────────────────────────────────────────────────────────────
export type BreadcrumbSeparator = 'divider' | 'icon';

export function buildBreadcrumbClasses(
  separator: BreadcrumbSeparator,
  extra?: string
): string {
  const base = `ux4g-breadcrumb ux4g-breadcrumb-${separator}`;
  return extra ? `${base} ${extra}` : base;
}

// ── Checkbox ──────────────────────────────────────────────────────────────────
export type CheckboxSize = 's' | 'm' | 'l' | 'sm' | 'md' | 'lg';

export function buildCheckboxClasses(size: CheckboxSize, error?: boolean, extra?: string): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : (size === 'lg' ? 'l' : size));
  const parts = ['ux4g-checkbox', `ux4g-checkbox-${normSize}`];
  if (error) parts.push('ux4g-checkbox-error');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Radio ─────────────────────────────────────────────────────────────────────
export type RadioSize = 's' | 'm' | 'l' | 'sm' | 'md' | 'lg';

export function buildRadioClasses(size: RadioSize, error?: boolean, extra?: string): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : (size === 'lg' ? 'l' : size));
  const parts = ['ux4g-radio', `ux4g-radio-${normSize}`];
  if (error) parts.push('ux4g-radio-error');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Switch ────────────────────────────────────────────────────────────────────
export type SwitchSize = 's' | 'm' | 'l' | 'sm' | 'md' | 'lg';

export function buildSwitchClasses(size: SwitchSize, extra?: string): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : (size === 'lg' ? 'l' : size));
  const base = `ux4g-switch ux4g-switch-${normSize}`;
  return extra ? `${base} ${extra}` : base;
}

// ── Card ──────────────────────────────────────────────────────────────────────
export type CardVariant = 'solid' | 'outline' | 'no-fill';
export type CardLayout  = 'vertical' | 'horizontal';

export function buildCardClasses(variant: CardVariant, layout: CardLayout, extra?: string): string {
  const parts = ['ux4g-card', `ux4g-card-${variant}`, `ux4g-card-${layout}`];
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Input ─────────────────────────────────────────────────────────────────────
export type InputSize  = 's' | 'm' | 'l' | 'xl' | 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success' | 'warning';

export function buildInputContainerClasses(size: InputSize, state: InputState, extra?: string): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : (size === 'lg' ? 'l' : size));
  const parts = ['ux4g-input-container', `ux4g-input-${normSize}`, `ux4g-input-${state}`];
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── List ──────────────────────────────────────────────────────────────────────
export type ListVariant = 'default' | 'error' | 'success' | 'warning';
export type ListSize = 's' | 'm' | 'l' | 'xl';

export function buildListClasses(variant: ListVariant, size: ListSize, extra?: string): string {
  const parts = ['ux4g-list', `ux4g-list-${variant}`, `ux4g-list-${size}`];
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Dropdown ──────────────────────────────────────────────────────────────────
export type DropdownType = 'selection' | 'button' | 'overflow';
export type DropdownMode = 'single' | 'multi';
export type DropdownSize = 's' | 'm' | 'l' | 'xl' | 'sm' | 'md' | 'lg';
export type DropdownState = 'default' | 'error' | 'success' | 'warning';

export function buildDropdownClasses(
  type: DropdownType,
  mode: DropdownMode,
  size: DropdownSize,
  state: DropdownState,
  open?: boolean,
  extra?: string
): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : (size === 'lg' ? 'l' : size));
  const parts = [
    'ux4g-dropdown',
    `ux4g-dropdown-${type}`,
    `ux4g-dropdown-${mode}`,
    `ux4g-dropdown-${normSize}`,
    `ux4g-dropdown-${state}`,
  ];
  if (open) parts.push('is-open');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Combobox ──────────────────────────────────────────────────────────────────
export type ComboboxType = 'single' | 'multi';
export type ComboboxSize = 's' | 'm' | 'l' | 'xl' | 'sm' | 'md' | 'lg';
export type ComboboxState = 'default' | 'error' | 'success' | 'warning';

export function buildComboboxClasses(
  type: ComboboxType,
  size: ComboboxSize,
  state: ComboboxState,
  open?: boolean,
  extra?: string
): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : (size === 'lg' ? 'l' : size));
  const parts = [
    'ux4g-combobox',
    `ux4g-combobox-${type}`,
    `ux4g-combobox-${normSize}`,
    `ux4g-combobox-${state}`,
  ];
  if (open) parts.push('is-open');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Modal ─────────────────────────────────────────────────────────────────────
export type ModalSize = 's' | 'm' | 'l';
export type ModalOpacity = '25' | '50' | '75';

export function buildModalBackdropClasses(
  opacity: ModalOpacity,
  blur?: boolean,
  open?: boolean,
  extra?: string
): string {
  const parts = ['ux4g-modal-backdrop', `ux4g-modal-backdrop-${opacity}`];
  if (blur) parts.push('ux4g-modal-backdrop-blur');
  if (open) parts.push('is-open');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

export function buildModalBoxClasses(
  size: ModalSize,
  centerContent?: boolean,
  extra?: string
): string {
  const parts = ['ux4g-modal-box', `ux4g-modal-${size}`];
  if (centerContent) parts.push('ux4g-modal-center-content');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Alert ─────────────────────────────────────────────────────────────────────
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';
export type AlertLayout = 'fluid' | 'center' | 'wide';
export type AlertPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export function buildAlertClasses(variant: AlertVariant, layout?: AlertLayout, extra?: string): string {
  const parts = ['ux4g-alert', `ux4g-alert-${variant}`];
  if (layout === 'center') parts.push('ux4g-alert-center');
  else if (layout === 'wide') parts.push('ux4g-alert-wide');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

export function buildContextAlertClasses(variant: AlertVariant, extra?: string): string {
  const parts = ['ux4g-context-alert', `ux4g-alert-${variant}`];
  if (extra) parts.push(extra);
  return parts.join(' ');
}

export function buildAlertContainerClasses(position: AlertPosition, extra?: string): string {
  const parts = ['ux4g-alert-container', `ux4g-alert-${position}`];
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Search ────────────────────────────────────────────────────────────────────
export type SearchSize = 's' | 'm' | 'lg' | 'l';

export function buildSearchContainerClasses(size: SearchSize, extra?: string): string {
  const normSize = size === 'lg' ? 'l' : size;
  const base = `ux4g-search-container ux4g-search-${normSize}`;
  return extra ? `${base} ${extra}` : base;
}

// -- Pagination ---------------------------------------------------------------
export type PaginationVariant = 'default' | 'dotted';
export type PaginationStyle = 'default' | 'solid' | 'translucent';

export function buildPaginationClasses(
  variant: PaginationVariant,
  paginationStyle?: PaginationStyle,
  extra?: string
): string {
  const parts = ['ux4g-pagination'];
  if (variant === 'dotted') {
    parts.push('ux4g-pagination-dotted');
    if (paginationStyle === 'solid') parts.push('ux4g-pagination-solid');
    else if (paginationStyle === 'translucent') parts.push('ux4g-pagination-translucent');
  }
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Table --------------------------------------------------------------------
export type TableSize = 's' | 'm' | 'lg' | 'l';
export type TableDivider = 'row' | 'column' | 'none';
export type TableZebra = 'none' | 'rows' | 'cols';

export function buildTableClasses(
  size: TableSize,
  divider?: TableDivider,
  zebra?: TableZebra,
  interactive?: boolean,
  sortable?: boolean,
  resizable?: boolean,
  headerBrand?: boolean,
  extra?: string
): string {
  const normSize = size === 'lg' ? 'l' : size;
  const parts = ['ux4g-table', `ux4g-table-${normSize}`];
  if (divider === 'column') parts.push('ux4g-table-column-dividers');
  else if (divider === 'none') parts.push('ux4g-table-no-row-dividers');
  if (zebra === 'rows') parts.push('ux4g-table-zebra-rows');
  else if (zebra === 'cols') parts.push('ux4g-table-zebra-cols');
  if (interactive) parts.push('ux4g-table-interactive');
  if (sortable) parts.push('ux4g-table-sortable');
  if (resizable) parts.push('ux4g-table-resizable');
  if (headerBrand) parts.push('ux4g-table-header-brand');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Popover ------------------------------------------------------------------
export type PopoverPlacement =
  | 'top' | 'top-start' | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left' | 'left-start' | 'left-end'
  | 'right' | 'right-start' | 'right-end';

export function buildPopoverClasses(
  placement: PopoverPlacement,
  show?: boolean,
  extra?: string
): string {
  const parts = ['ux4g-popover', `ux4g-popover-${placement}`];
  if (show) parts.push('show');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Tooltip ------------------------------------------------------------------
export type TooltipPlacement =
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'
  | 'left-center' | 'right-center';
export type TooltipSize = 's' | 'xs';

export function buildTooltipClasses(
  placement: TooltipPlacement,
  size: TooltipSize,
  extra?: string
): string {
  const parts = ['ux4g-tooltip', `ux4g-tooltip-${placement}`, `ux4g-tooltip-${size}`];
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Tab ----------------------------------------------------------------------
export type TabVariant = 'underline' | 'pill';
export type TabSize = 's' | 'm' | 'l' | 'sm' | 'md' | 'lg';

export function buildTabClasses(
  variant: TabVariant,
  size: TabSize,
  vertical?: boolean,
  extra?: string
): string {
  const normSize = size === 'sm' ? 's' : (size === 'md' ? 'm' : (size === 'lg' ? 'l' : size));
  const parts = ['ux4g-tab', `ux4g-tab-${variant}`, `ux4g-tab-${normSize}`];
  if (vertical) parts.push('ux4g-tab-vertical');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Icon Button --------------------------------------------------------------
export type IconButtonVariant = 'primary' | 'outline-primary' | 'tonal-primary' | 'text-primary';
export type IconButtonSize = 'xl' | 'l' | 'm' | 's' | 'xs' | 'lg' | 'md' | 'sm';

export function buildIconButtonClasses(
  variant: IconButtonVariant,
  size: IconButtonSize,
  pill?: boolean,
  extra?: string
): string {
  const normSize = size === 'lg' ? 'l' : (size === 'md' ? 'm' : (size === 'sm' ? 's' : size));
  const parts = ['ux4g-icon-btn', `ux4g-icon-btn-${variant}`, `ux4g-icon-btn-${normSize}`];
  if (pill) parts.push('ux4g-icon-btn-pill');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Accessibility Bar --------------------------------------------------------
export function buildAccessibilityBarClasses(extra?: string): string {
  return extra ? `ux4g-topbar ${extra}` : 'ux4g-topbar';
}

// -- Accordion ----------------------------------------------------------------
export type AccordionArrowPosition = 'right' | 'left';
export type AccordionVariant = 'default' | 'bordered';

export function buildAccordionClasses(
  arrowPosition?: AccordionArrowPosition,
  variant?: AccordionVariant,
  extra?: string
): string {
  const parts = ['ux4g-accordion'];
  if (arrowPosition === 'right') parts.push('ux4g-accordion-arrow-right');
  else if (arrowPosition === 'left') parts.push('ux4g-accordion-arrow-left');
  if (variant === 'bordered') parts.push('ux4g-accordion-bordered');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Stepper ------------------------------------------------------------------
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperAlignment = 'default' | 'center' | 'left';
export type StepperVariant = 'default' | 'bottom-line' | 'bottom-line-fill' | 'mobile' | 'progress';
export type StepperSize = 'default' | 's';

export function buildStepperClasses(
  orientation?: StepperOrientation,
  alignment?: StepperAlignment,
  variant?: StepperVariant,
  size?: StepperSize,
  extra?: string
): string {
  const parts = ['ux4g-stepper'];
  if (orientation === 'vertical') {
    parts.push('ux4g-stepper-vertical');
  } else {
    // horizontal (default) — only add classes if alignment is non-default
    if (alignment === 'center') {
      parts.push('ux4g-stepper-horizontal');
      parts.push('ux4g-stepper-center');
    } else if (alignment === 'left') {
      parts.push('ux4g-stepper-horizontal');
      parts.push('ux4g-stepper-left');
    }
  }
  if (variant === 'bottom-line') parts.push('ux4g-stepper-bottom-line');
  else if (variant === 'bottom-line-fill') {
    parts.push('ux4g-stepper-bottom-line');
    parts.push('ux4g-stepper-bottom-line-fill');
  }
  else if (variant === 'mobile') parts.push('ux4g-stepper-mobile');
  else if (variant === 'progress') parts.push('ux4g-stepper-progress');
  if (size === 's') parts.push('ux4g-stepper-s');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Slider -------------------------------------------------------------------
export type SliderSize = 's' | 'm' | 'sm' | 'md';

export function buildSliderFieldClasses(size?: SliderSize, extra?: string): string {
  const parts = ['ux4g-slider-field'];
  if (size === 'md' || size === 'm') parts.push('ux4g-slider-m');
  else if (size === 'sm' || size === 's') parts.push('ux4g-slider-s');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Drawer -------------------------------------------------------------------
export type DrawerPlacement = 'right' | 'left' | 'top' | 'bottom';

export function buildDrawerClasses(
  placement: DrawerPlacement,
  open?: boolean,
  extra?: string
): string {
  const parts = ['ux4g-drawer', `ux4g-drawer-${placement}`];
  if (open) parts.push('ux4g-drawer-open');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Phase 9 ───────────────────────────────────────────────────────────────────

// -- Date-Time Picker ---------------------------------------------------------
export type DateTimePickerMode = 'date' | 'time';

export function buildDateTimePickerClasses(mode: DateTimePickerMode, extra?: string): string {
  const base = mode === 'date' ? 'ux4g-date-picker-container' : 'ux4g-time-picker-container';
  return extra ? `${base} ${extra}` : base;
}

// -- Status Pipeline ----------------------------------------------------------
export type StatusPipelineOrientation = 'horizontal' | 'vertical';
export type StatusPipelineAlignment   = 'default' | 'center' | 'left';
export type StatusPipelineVariant     = 'default' | 'bottom-line' | 'bottom-line-fill' | 'mobile' | 'progress';
export type StatusPipelineSize        = 'default' | 's';

export function buildStatusPipelineClasses(
  orientation?: StatusPipelineOrientation,
  alignment?: StatusPipelineAlignment,
  variant?: StatusPipelineVariant,
  size?: StatusPipelineSize,
  extra?: string
): string {
  const parts = ['ux4g-status-pipeline-stepper'];
  if (orientation === 'vertical') {
    parts.push('ux4g-status-pipeline-vertical');
    // alignment is IGNORED when orientation='vertical'
  } else {
    // horizontal (default) — only add classes if alignment is non-default
    if (alignment === 'center') {
      parts.push('ux4g-status-pipeline-horizontal');
      parts.push('ux4g-status-pipeline-center');
    } else if (alignment === 'left') {
      parts.push('ux4g-status-pipeline-horizontal');
      parts.push('ux4g-status-pipeline-left');
    }
  }
  if (variant === 'bottom-line') {
    parts.push('ux4g-status-pipeline-bottom-line');
  } else if (variant === 'bottom-line-fill') {
    parts.push('ux4g-status-pipeline-bottom-line');
    parts.push('ux4g-status-pipeline-bottom-line-fill');
  } else if (variant === 'mobile') {
    parts.push('ux4g-status-pipeline-mobile');
  } else if (variant === 'progress') {
    parts.push('ux4g-status-pipeline-progress');
  }
  if (size === 's') parts.push('ux4g-status-pipeline-s');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Journey Timeline ---------------------------------------------------------
export type JourneyTimelineOrientation = 'vertical' | 'horizontal';

export function buildJourneyTimelineClasses(
  orientation?: JourneyTimelineOrientation,
  extra?: string
): string {
  const effectiveOrientation = orientation ?? 'vertical';
  const base = `ux4g-journey-timeline ux4g-journey-timeline--${effectiveOrientation}`;
  return extra ? `${base} ${extra}` : base;
}

// -- Form Field Group ---------------------------------------------------------
export function buildFormFieldGroupClasses(extra?: string): string {
  return extra ? `ux4g-form-group ${extra}` : 'ux4g-form-group';
}

// -- OTP Input ----------------------------------------------------------------
export type OtpInputState = 'default' | 'success' | 'error' | 'locked';

export function buildOtpInputClasses(state?: OtpInputState, extra?: string): string {
  const parts = ['ux4g-otp'];
  if (state && state !== 'default') parts.push(`ux4g-otp-${state}`);
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- File Upload --------------------------------------------------------------
export type FileUploadState =
  | 'default'
  | 'default-vle'
  | 'selecting'
  | 'scanning'
  | 'uploaded'
  | 'uploaded-vle'
  | 'error';

export function buildFileUploadClasses(state?: FileUploadState, extra?: string): string {
  const parts = ['ux4g-upload'];
  if (state) parts.push(`ux4g-upload-state-${state}`);
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Progress Indicator -------------------------------------------------------
export type ProgressIndicatorType = 'bar' | 'circle';
export type ProgressIndicatorSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';

export function buildProgressIndicatorClasses(type: ProgressIndicatorType, extra?: string): string {
  const base = type === 'bar' ? 'ux4g-progress-bar' : 'ux4g-progress-circle';
  return extra ? `${base} ${extra}` : base;
}

// -- Feedback -----------------------------------------------------------------
export function buildFeedbackClasses(extra?: string): string {
  return extra ? `ux4g-feedback ${extra}` : 'ux4g-feedback';
}

// -- Draft Status Banner ------------------------------------------------------
// NOTE: vendor typo 'daft-staus-bar' MUST be preserved exactly
export type DraftStatusBannerVariant = 'default' | 'auto' | 'success';

export function buildDraftStatusBannerClasses(
  variant?: DraftStatusBannerVariant,
  extra?: string
): string {
  let base: string;
  if (variant === 'auto') {
    base = 'ux4g-auto-daft-staus-bar';
  } else if (variant === 'success') {
    base = 'ux4g-success-daft-staus-bar';
  } else {
    // 'default' or undefined
    base = 'ux4g-daft-staus-bar';
  }
  return extra ? `${base} ${extra}` : base;
}

// -- SLA Progress Indicator ---------------------------------------------------
export type SlaProgressIndicatorType = 'circle' | 'linear' | 'badge';

export function buildSlaProgressIndicatorClasses(
  type: SlaProgressIndicatorType,
  extra?: string
): string {
  const base = `ux4g-sla-${type}`;
  return extra ? `${base} ${extra}` : base;
}

// -- Carousel -----------------------------------------------------------------
export function buildCarouselClasses(extra?: string): string {
  return extra ? `ux4g-carousel ${extra}` : 'ux4g-carousel';
}

// -- Empty State --------------------------------------------------------------
export function buildEmptyStateClasses(extra?: string): string {
  return extra ? `ux4g-empty-state ${extra}` : 'ux4g-empty-state';
}

// -- Chip Group ---------------------------------------------------------------
export type ChipGroupVariant = 'filter' | 'choice';

export function buildChipGroupClasses(
  variant?: ChipGroupVariant,
  active?: boolean,
  extra?: string
): string {
  const base = variant === 'choice' ? 'ux4g-choice-chip-group' : 'ux4g-filter-chip-group';
  const parts = [base];
  if (active) parts.push('active');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// -- Navbar -------------------------------------------------------------------
export function buildNavbarClasses(extra?: string): string {
  return extra ? `ux4g-navbar ${extra}` : 'ux4g-navbar';
}

// -- Social Links -------------------------------------------------------------
export type SocialLinksSize = 'sm' | 'md' | 'lg';

export function buildSocialLinksClasses(size?: SocialLinksSize, extra?: string): string {
  let gapClass: string;
  if (size === 'sm') {
    gapClass = 'ux4g-gap-xs';
  } else if (size === 'lg') {
    gapClass = 'ux4g-gap-m';
  } else {
    // 'md' or undefined (default)
    gapClass = 'ux4g-gap-s';
  }
  const base = `ux4g-d-flex ${gapClass}`;
  return extra ? `${base} ${extra}` : base;
}

// ── Phase 10 ──────────────────────────────────────────────────────────────────

// -- Slot Grid ----------------------------------------------------------------
export type SlotGridVariant = 'weekly' | 'compact';

export function buildSlotGridClasses(variant?: SlotGridVariant, extra?: string): string {
  const base = variant === 'compact'
    ? 'ux4g-time-slot-compact-container'
    : 'ux4g-time-slot-weekly-container';
  return extra ? `${base} ${extra}` : base;
}

// -- Footer -------------------------------------------------------------------
export type FooterTheme = 'default' | 'primary' | 'dark';

export function buildFooterClasses(theme?: FooterTheme, extra?: string): string {
  let base: string;
  if (theme === 'primary') base = 'ux4g-footer-primary';
  else if (theme === 'dark') base = 'ux4g-footer-dark';
  else base = '';
  if (extra) return base ? `${base} ${extra}` : extra;
  return base;
}

// -- Result List Row ----------------------------------------------------------
export type ResultListRowVariation = 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';

export function buildResultListRowClasses(variation?: ResultListRowVariation, extra?: string): string {
  const parts = ['ux4g-result-list'];
  if (variation && variation !== 'default') parts.push(`ux4g-result-list-${variation}`);
  if (extra) parts.push(extra);
  return parts.join(' ');
}

// ── Mega Menu ─────────────────────────────────────────────────────────────────

/** Returns the CSS class string for the mega-menu root element.
 *  Base class: `ux4g-mega-menu` (always present)
 *  Dropdown:   `ux4g-mega-menu--dropdown` (when dropdown is true)
 *  Right:      `ux4g-mega-menu--dropdown-right` (only when BOTH dropdown AND dropdownRight are true)
 */
export function buildMegaMenuClasses(
  dropdown?: boolean,
  dropdownRight?: boolean,
  extra?: string
): string {
  const parts = ['ux4g-mega-menu'];
  if (dropdown) parts.push('ux4g-mega-menu--dropdown');
  if (dropdown && dropdownRight) parts.push('ux4g-mega-menu--dropdown-right');
  if (extra) parts.push(extra);
  return parts.join(' ');
}

/** Returns the CSS class string for the mega-menu wrapper element (dropdown positioning context).
 *  Base class: `ux4g-mega-menu-wrapper` (always present)
 *  Active:     `ux4g-mega-menu-wrapper--active` (when active is true)
 */
export function buildMegaMenuWrapperClasses(
  active?: boolean,
  extra?: string
): string {
  const parts = ['ux4g-mega-menu-wrapper'];
  if (active) parts.push('ux4g-mega-menu-wrapper--active');
  if (extra) parts.push(extra);
  return parts.join(' ');
}
