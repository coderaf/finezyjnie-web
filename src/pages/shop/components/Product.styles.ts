import { css, Theme } from '@emotion/react';

export const product = (theme: Theme) => css`
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 32px;
  }
`;

export const productWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
