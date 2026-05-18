'use client';

/**
 * Minimal toast container — uses a simple fixed-position div.
 * For a production setup, replace with @radix-ui/react-toast or sonner.
 */
export function Toaster() {
  return <div id="toast-root" aria-live="polite" aria-atomic="true" />;
}
