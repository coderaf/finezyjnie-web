import { css, Theme } from '@emotion/react';

export const header = (theme: Theme) => css`
  background-color: ${theme.colors.white};
`;

export const headerImage = (desktopImg: string, mobileImg: string) => (theme: Theme) => css`
  width: 100%;
  height: 200px;
  background-color: gray;
  background-image: url(${desktopImg});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    background-image: url(${mobileImg});
  }
`;
