import { css, Theme } from '@emotion/react';

export const updatesAndBio = (theme: Theme) => css`
  display: flex;
  padding: 32px;
  // adding min height to prevent flickering section after request is done
  // this style is related to Post.styles.ts min-height
  min-height: 512px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 32px;
    padding: 16px;
  }
`;

export const postWrapper = (theme: Theme) => css`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    order: 2;
  }
`;

export const titleWrapper = (theme: Theme) => css`
  text-align: center;

  @media (min-width: ${theme.breakpoints.desktop}) {
    text-align: right;
  }
`;

export const bioWrapper = (theme: Theme) => css`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${theme.colors.secondary};
  border-radius: 4px;
  padding: 24px;
  text-align: right;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    order: 1;
    text-align: center;
    padding: 24px;
  }
`;

export const bio = (theme: Theme) => css`
  text-align: left;

  @media (min-width: ${theme.breakpoints.desktop}) {
    text-align: right;
  }
`;
