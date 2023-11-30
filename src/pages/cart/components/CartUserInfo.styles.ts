import { css, Theme } from '@emotion/react';

export const cartUserInfo = (theme: Theme) => css`
  padding: 16px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 32px;
    max-width: 1000px;
  }
`;
