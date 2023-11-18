import { css, Theme } from '@emotion/react';

export const productThumbnail = (desktopImg: string, mobileImg: string) => (theme: Theme) => css`
  width: 230px;
  height: 280px;
  border: 1 px solid ${theme.colors.black};
  border-radius: 4px;

  background-image: url(${desktopImg});
  background-size: cover;
  background-position: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    background-image: url(${mobileImg});
  }
`;
