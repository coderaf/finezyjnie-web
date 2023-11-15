import { css, Theme } from '@emotion/react';

export const header = (theme: Theme) => css`
  height: ${theme.webDimensions.navHeight}px;
  background-color: ${theme.colors.white};
`;

export const headerImage = () => css`
  width: 100%;
  height: 80%;
  background-color: gray;
`;

// todo: extract to a separate menu component if needed
export const headerMenu = (theme: Theme) => css`
  width: 100%;
  height: 20%;
  background-color: ${theme.colors.bgSection};
`;

export const headerMenuList = (theme: Theme) => css`
  max-width: ${theme.webDimensions.menuWidth}px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const headerMenuLink = (theme: Theme) => css`
  color: ${theme.colors.white};
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;

  a {
    display: inline-block;
    height: 100%;
  }
`;
