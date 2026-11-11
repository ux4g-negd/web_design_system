/**
 * UX4G Runtime Module
 *
 * Injects the vendor JS (ux4g.js + ux4g-custom.js) into the page as inline scripts.
 * These files handle all interactive behaviors: dropdowns, modals, tooltips,
 * accordions, carousels, drawers, tabs, popovers, toasts, scrollspy, etc.
 *
 * The vendor JS is inlined at build time by the Rollup virtual plugin.
 * At runtime, initRuntime() creates <script> elements with the inlined code.
 *
 * Uses a singleton guard (window.__UX4G_RUNTIME_INITIALIZED__) to ensure
 * the scripts are injected exactly once.
 */

declare global {
  interface Window {
    __UX4G_RUNTIME_INITIALIZED__?: boolean;
    ux4g?: Record<string, unknown>;
  }
}

// These will be replaced at build time by the Rollup plugin with the actual JS content
declare const __UX4G_VENDOR_MAIN__: string;
declare const __UX4G_VENDOR_CUSTOM__: string;

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Initialize the UX4G runtime by injecting the vendor JS scripts into the page.
 *
 * - Safe for SSR — no-ops when window/document are unavailable.
 * - Singleton guard prevents double-injection.
 * - The vendor JS handles its own DOMContentLoaded timing internally.
 * - MutationObserver in the vendor JS auto-initializes dynamically added elements.
 */
export function initRuntime(): void {
  if (!isBrowser) return;
  if (window.__UX4G_RUNTIME_INITIALIZED__) return;
  window.__UX4G_RUNTIME_INITIALIZED__ = true;

  // Inject ux4g.js (sets up window.ux4g with all core components)
  const script1 = document.createElement('script');
  script1.setAttribute('data-ux4g-runtime', 'main');
  script1.textContent = __UX4G_VENDOR_MAIN__;
  document.head.appendChild(script1);

  // Inject ux4g-custom.js (extends window.ux4g with custom behaviors)
  const script2 = document.createElement('script');
  script2.setAttribute('data-ux4g-runtime', 'custom');
  script2.textContent = __UX4G_VENDOR_CUSTOM__;
  document.head.appendChild(script2);
}

/**
 * Destroy the UX4G runtime.
 * Removes injected scripts and resets the singleton guard.
 */
export function destroyRuntime(): void {
  if (!isBrowser) return;
  // Remove injected scripts
  document.querySelectorAll('script[data-ux4g-runtime]').forEach(el => el.remove());
  // Reset singleton guard
  window.__UX4G_RUNTIME_INITIALIZED__ = undefined;
  // Clear the global ux4g object
  if (window.ux4g) {
    delete window.ux4g;
  }
}
