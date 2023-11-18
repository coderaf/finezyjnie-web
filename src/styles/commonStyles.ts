import { css, Theme } from '@emotion/react';

export const container = (theme: Theme) => css`
  width: 100%;
  max-width: ${theme.webDimensions.maxPageWidth}px;
  margin: 0 auto 32px auto;
`;

export const hideDesktop = (theme: Theme) => css`
  display: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const hideMobile = (theme: Theme) => css`
  display: block;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
