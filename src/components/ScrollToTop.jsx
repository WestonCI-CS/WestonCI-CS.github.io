import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component scrolls the window to the top whenever the pathname changes.
 *
 * This component uses the `useLocation` hook from `react-router-dom` to get the current pathname.
 * It then uses the `useEffect` hook to scroll the window to the top (0, 0) whenever the pathname changes.
 *
 * @component
 * @example
 * return (
 *   <ScrollToTop />
 * )
 */
export default function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};