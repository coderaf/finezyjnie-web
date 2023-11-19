import { css, Theme } from '@emotion/react';

export const navbar = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.bgSection};
  height: ${theme.webDimensions.navHeight}px;
`;

// todo: use for sticky navbar logic or remove
// export const stickyNavbar = (theme: Theme) => css`
//   width: 100%;
//   position: fixed;
//   top: 200px;
//   left: 0;
//   right: 0;
//   z-index: 1;
//   animation: popDown 0.5s;
//   border-bottom: 1px solid #000;
//
//   @keyframes popDown {
//     0% {
//       transform: translateY(-100px);
//     }
//   }
// `;

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
