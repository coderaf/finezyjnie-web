import { css, Theme } from '@emotion/react';

export const cartPayments = (theme: Theme) => css`
  margin: 0 auto;
  max-width: 400px;
  padding: 16px 16px 32px 16px;
  background-color: ${theme.colors.secondary};
  border-radius: 12px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 32px 32px 64px 32px;
  }

  span {
    font-weight: bold;
    display: inline-block;
    margin-bottom: 8px;
  }
`;
