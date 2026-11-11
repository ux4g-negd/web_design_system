/**
 * UX4G Runtime Auto-Bootstrap
 *
 * Side-effect-only module that triggers runtime initialization on import.
 * Framework packages use this as:
 *   import 'ux4g-web-components/runtime/bootstrap';
 *
 * Safe to import multiple times — initRuntime() uses a singleton guard
 * (window.__UX4G_RUNTIME_INITIALIZED__) to ensure initialization happens
 * exactly once.
 *
 * Also sets up a MutationObserver that automatically re-runs ux4g.init()
 * when new elements are added to the DOM. This handles frameworks like
 * React and Angular that render components AFTER DOMContentLoaded.
 */
import { initRuntime } from './index.js';

initRuntime();

// Auto-reinit: watch for new DOM elements and re-run ux4g.init()
// This fixes the timing issue where Angular/React render after DOMContentLoaded
if (typeof window !== 'undefined' && typeof MutationObserver !== 'undefined') {
  let reinitTimer: ReturnType<typeof setTimeout> | null = null;

  const observer = new MutationObserver((mutations) => {
    // Check if any added nodes contain UX4G-relevant elements
    let hasNewElements = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        hasNewElements = true;
        break;
      }
    }

    if (!hasNewElements) return;

    // Debounce: wait 50ms after the last mutation before re-initializing
    // This batches rapid DOM changes (e.g., Angular rendering a full template)
    if (reinitTimer) clearTimeout(reinitTimer);
    reinitTimer = setTimeout(() => {
      if ((window as any).ux4g?.init) {
        (window as any).ux4g.init(document);
      }
    }, 50);
  });

  // Start observing once the body is available
  const startObserving = () => {
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      // Body not ready yet — wait for it
      setTimeout(startObserving, 10);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserving);
  } else {
    startObserving();
  }
}
