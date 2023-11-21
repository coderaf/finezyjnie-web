import { css, Theme } from '@emotion/react';

export const productImageWrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 600px;
  background-size: cover;
  background-position: center center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 55%;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 65%;
    max-width: unset;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }
`;
