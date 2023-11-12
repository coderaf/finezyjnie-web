import { colors } from './colors';
import { WebDimensions } from '@emotion/react';

export const webDimensions: WebDimensions = {
  maxPageWidth: 1440,
  navHeight: 64,
};

export const webTheme = {
  colors,
  webDimensions,
  breakpoints: {
    desktop: '1279px',
    tablet: '880px',
    mobile: '425px',
  },
};
