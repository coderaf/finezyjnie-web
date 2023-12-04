import { css, Theme } from '@emotion/react';

export const productThumbnail = (theme: Theme) => css`
  width: 44%;
  min-width: 260px;
  height: 330px;
  display: flex;
  flex-direction: column;
  margin: 1em;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: calc(100% - 2em);
    min-width: 230px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: calc(33.333% - 2em);
    min-width: 230px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const productThumbnailImage =
  (desktopImg: string, mobileImg: string) => (theme: Theme) => css`
    width: 100%;
    height: 95%;
    background-image: url(${desktopImg});
    background-size: cover;
    background-position: center center;
    border: 1px solid ${theme.colors.black};
    margin-bottom: 8px;
    cursor: pointer;

    @media (max-width: ${theme.breakpoints.tablet}) {
      background-image: url(${mobileImg});
    }

    &:hover {
      opacity: 0.8;
    }
  `;

export const productThumbnailDetails = () => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 5%;
`;
