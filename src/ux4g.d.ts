export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface PopoverDataAttributes {
  'data-ux-toggle': 'popover';
  'data-ux-content-id'?: string;
  'data-ux-content'?: string;
  'data-ux-title'?: string;
  'data-ux-subtitle'?: string;
  'data-ux-label'?: string;
  'data-ux-icon'?: string;
  'data-ux-placement'?: PopoverPlacement;
  'data-ux-trigger'?: string;
  'data-ux-offset'?: string | number;
  'data-ux-arrow'?: 'true' | 'false';
  /** @deprecated Put rich actions inside the element referenced by data-ux-content-id. */
  'data-ux-action-html'?: string;
  /** @deprecated Not required when data-ux-content-id is used. */
  'data-ux-html'?: 'true' | 'false';
}

export interface PopoverContentMountedDetail {
  floating: HTMLElement;
}

export interface UX4GPopover {
  show(): void;
  hide(): void;
  toggle(): void;
}

export interface UX4GApi {
  init(root?: Document | Element): void;
  Popover: {
    getOrCreate(element: HTMLElement): UX4GPopover;
  };
}

declare global {
  interface Window {
    ux4g: UX4GApi;
  }

  interface HTMLElementEventMap {
    'ux4g.popover.contentmounted': CustomEvent<PopoverContentMountedDetail>;
    'ux4g.popover.shown': CustomEvent<Record<string, never>>;
    'ux4g.popover.hidden': CustomEvent<Record<string, never>>;
  }
}
