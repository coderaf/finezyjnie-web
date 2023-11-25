import { css, Theme } from '@emotion/react';

const sectionMargins = 64;

export const product = (theme: Theme) => css`
  min-height: calc(
    100vh - ${theme.webDimensions.navHeight}px - ${sectionMargins}px -
      ${theme.webDimensions.footerHeight}px
  );

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 16px;
  }
`;

export const productWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }
`;
