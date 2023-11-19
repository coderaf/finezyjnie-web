import { css, Theme } from '@emotion/react';

// todo: adjust height per screen size
export const productThumbnail = (desktopImg: string, mobileImg: string) => (theme: Theme) => css`
  width: 44%;
  min-width: 260px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 1em;
  border: 1px solid ${theme.colors.borderProduct};
  border-radius: 4px;
  background-image: url(${desktopImg});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.tablet}) {
    background-image: url(${mobileImg});
    width: calc(100% - 2em);
    min-width: 230px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: calc(33.333% - 2em);
    min-width: 230px;
  }

  &:hover {
    opacity: 0.8;
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
