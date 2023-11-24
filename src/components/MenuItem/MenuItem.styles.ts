import { css, Theme } from '@emotion/react';

export const menuItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  color: ${theme.colors.black};
  text-transform: uppercase;
  height: 100%;
  padding: 0 16px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const homeMenuItem = (theme: Theme) => css`
  color: ${theme.colors.white};
`;
