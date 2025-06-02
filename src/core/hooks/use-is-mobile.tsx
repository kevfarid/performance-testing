import { useState } from 'react';
import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';
import AppConstants from '../constants/app-constants';

export function useIsMobile(): boolean {
  const { MOBILE_MAX_WIDTH } = AppConstants;

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches
      : false
  );

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [MOBILE_MAX_WIDTH]);

  return isMobile;
}
