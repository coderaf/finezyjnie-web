import { css, Theme } from '@emotion/react';

export const post = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const postWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 65%;
  }
`;

export const postImageWrapper = () => css`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 16px;
    border-radius: 4px;
  }
`;

export const postContent = (theme: Theme) => css`
  padding: 16px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 24px;
  }
`;

export const postCardList = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 35%;
  }
`;

export const postCardWrapper = () => css`
  width: 100%;
  margin-bottom: 24px;
`;
