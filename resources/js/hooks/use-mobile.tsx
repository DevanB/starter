import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 768;

const noop = () => {
  /* unsubscribe not needed during SSR */
};

const mql =
  typeof window === "undefined"
    ? undefined
    : window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

function mediaQueryListener(onChange: (event: MediaQueryListEvent) => void) {
  if (!mql) {
    return noop;
  }

  mql.addEventListener("change", onChange);

  return () => {
    mql.removeEventListener("change", onChange);
  };
}

function isSmallerThanBreakpoint(): boolean {
  return mql?.matches ?? false;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useIsMobile(): boolean {
  return useSyncExternalStore(mediaQueryListener, isSmallerThanBreakpoint, getServerSnapshot);
}
