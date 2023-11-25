import { css, Theme } from '@emotion/react';

export const productImageWrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 600px;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 60%;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    max-width: 800px;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const productImageThumbnails = () => css`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  cursor: pointer;

  //todo: add active class and 3 opacity styles
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;

    &:hover {
      opacity: 0.8;
    }
  }
`;
