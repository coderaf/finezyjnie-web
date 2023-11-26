import { css, Theme } from '@emotion/react';

const sectionMargins = 64;

export const cart = (theme: Theme) => css`
  padding: 16px;
  min-height: calc(
    100vh - ${sectionMargins}px - ${theme.webDimensions.navHeight}px -
      ${theme.webDimensions.footerHeight}px
  );
`;

export const cartTotal = () => css`
  text-align: right;
  margin: 8px 0;
`;

export const cartTotalAmount = (theme: Theme) => css`
  color: ${theme.colors.primary};
  font-weight: bold;
`;

export const cartPaymentsWrapper = (theme: Theme) => css``;
