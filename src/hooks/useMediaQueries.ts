import { useMediaQuery } from 'react-responsive';
import { theme } from '../theme';

export function useMediaQueries() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mobile})`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.desktop})`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.desktop})`,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
