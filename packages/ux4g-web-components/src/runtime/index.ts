/**
 * UX4G Runtime Module
 *
 * The behaviour behind dropdowns, modals, tooltips, accordions, carousels,
 * drawers, tabs, popovers, toasts, scrollspy and the rest.
 *
 * ux4g.js and ux4g-custom.js are bundled into this module as code, so they
 * ship inside the application's own bundle. Nothing is injected as an inline
 * script, and a Content-Security-Policy of `script-src 'self'` is sufficient.
 */
import { runVendor } from 'virtual:ux4g-vendor';

declare global {
  interface Window {
    __UX4G_RUNTIME_INITIALIZED__?: boolean;
    ux4g?: Record<string, unknown> & { init?: (root?: ParentNode) => void };
  }
}

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

let runtime: Window['ux4g'];

/**
 * Initialize the UX4G runtime.
 *
 * - No-ops during SSR, where window and document are unavailable.
 * - Idempotent; later calls do nothing until destroyRuntime().
 * - Does not run a second copy if the page already loaded UX4G from the CDN.
 * - The runtime handles its own DOMContentLoaded timing and initializes
 *   elements added to the DOM later.
 */
export function initRuntime(): void {
  if (!isBrowser || window.__UX4G_RUNTIME_INITIALIZED__) return;

  if (!runtime) {
    if (!window.ux4g) runVendor();
    runtime = window.ux4g;
  } else if (!window.ux4g) {
    // Re-initializing after destroyRuntime(). The document-level listeners
    // from the first run are still attached, so running the code again would
    // bind every handler twice.
    window.ux4g = runtime;
    runtime.init?.(document);
  }

  window.__UX4G_RUNTIME_INITIALIZED__ = true;
}

/**
 * Detach the global `ux4g` object and reset the guard.
 */
export function destroyRuntime(): void {
  if (!isBrowser) return;
  window.__UX4G_RUNTIME_INITIALIZED__ = undefined;
  delete window.ux4g;
}
