import { css, Theme } from '@emotion/react';

export const postCard = (theme: Theme) => css`
  width: 100%;
  max-width: 450px;
  // this style is related to UpdatesAndBio section min-height
  min-height: 400px;
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

export const postCardHeader = () => css`
  padding: 16px;
`;

export const postCardImage = (mobileImg: string) => () => css`
  background-image: url(${mobileImg});
  background-size: cover;
  background-position: center;
  height: 200px;
`;

export const postCardContent = () => css`
  padding: 16px;
`;
