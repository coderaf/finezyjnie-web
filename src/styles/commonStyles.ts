import { css, Theme } from '@emotion/react';

const sectionMargins = 64;

export const container = (theme: Theme) => css`
  width: 100%;
  max-width: ${theme.webDimensions.maxPageWidth}px;
  margin: 0 auto 32px auto;
`;

export const section = (theme: Theme) => css`
  padding: 16px;
  min-height: calc(
    100vh - ${sectionMargins}px - ${theme.webDimensions.navHeight}px -
      ${theme.webDimensions.footerHeight}px
  );

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 32px;
  }
`;

export const homeSection = (theme: Theme) => css`
  padding: 16px;
  min-height: calc(
    100vh - ${sectionMargins}px - ${theme.webDimensions.navHeight}px -
      ${theme.webDimensions.footerHeight}px - ${theme.webDimensions.headerHeight}px
  );

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 32px;
  }
`;
