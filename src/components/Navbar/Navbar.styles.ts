import { css, Theme } from '@emotion/react';

// wrapper for sticky navbar to prevent flickering
export const navbarWrapper = (theme: Theme) => css`
  width: 100%;
  height: ${theme.webDimensions.navHeight}px;
  position: relative;
`;

export const homeNavbarWrapper = (theme: Theme) => css`
  background-color: ${theme.colors.bgSection};
`;

export const navbarLogoWrapper = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const navbarSticky = (theme: Theme) => css`
  width: 100%;
  height: ${theme.webDimensions.navHeight}px;
  border-bottom: 1px solid ${theme.colors.black};

  @media (min-width: ${theme.breakpoints.desktop}) {
    border: 0;
  }

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    animation: popDown 0.5s;
    border-bottom: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};

    @keyframes popDown {
      0% {
        transform: translateY(-100px);
      }
    }
  }
`;

export const navbar = (theme: Theme) => css`
  max-width: ${theme.webDimensions.maxPageWidth}px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const homeNavbar = (theme: Theme) => css`
  max-width: 800px;
  margin: 0 auto;
`;

export const navbarList = (theme: Theme) => css`
  max-width: ${theme.webDimensions.maxPageWidth}px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

export const navbarShopList = () => css`
  justify-content: flex-end;
`;

export const cartLink = (theme: Theme) => css`
  padding: 0;
`;
