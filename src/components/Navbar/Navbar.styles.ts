import { css, Theme } from '@emotion/react';

export const navbar = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.bgSection};
  height: ${theme.webDimensions.navHeight}px;
`;

export const navbarList = (theme: Theme) => css`
  max-width: ${theme.webDimensions.menuWidth}px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 16px;
  }
`;

export const navbarLink = (theme: Theme) => css`
  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  text-transform: uppercase;
  height: 100%;
  padding: 0 16px;
`;
