import { css, Theme } from '@emotion/react';

export const cartHeaderTitle = (theme: Theme) => css`
  text-align: center;
  margin-bottom: 32px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

export const cartHeaderRow = (theme: Theme) => css`
  width: 100%;
  padding-bottom: 8px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.borderSection};
`;

export const cartHeaderProductTitle = (theme: Theme) => css`
  width: 55%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const cartHeaderQuantityTitle = () => css`
  width: 20%;
`;

export const cartHeaderPriceTitle = () => css`
  width: 20%;
`;

export const cartHeaderRemoveTitle = () => css`
  width: 5%;
`;
