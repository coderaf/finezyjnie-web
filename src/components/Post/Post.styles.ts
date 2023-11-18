import { css, Theme } from '@emotion/react';

export const post = (theme: Theme) => css`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    &:hover {
      transform: unset;
    }
  }
`;

export const postHeader = () => css`
  padding: 16px;
`;

export const postImage = (desktopImg: string, mobileImg: string) => (theme: Theme) => css`
  background-image: url(${desktopImg});
  background-size: cover;
  background-position: center;
  height: 200px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    background-image: url(${mobileImg});
  }
`;

export const postContent = () => css`
  padding: 16px;
`;
