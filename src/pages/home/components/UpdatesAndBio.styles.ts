import { css, Theme } from '@emotion/react';

export const updatesAndBio = (theme: Theme) => css`
  display: flex;
  padding: 16px;
  // adding min height to prevent flickering section after request is done
  // this style is related to Post.styles.ts min-height
  min-height: 512px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    padding: 32px;
    align-items: flex-start;
  }
`;

export const postWrapper = (theme: Theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  order: 2;

  p {
    margin-bottom: 32px;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 45%;
    order: -1;

    p {
      margin-bottom: 16px;
      text-align: left;
    }
  }
`;

export const postCardWrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin: 0;
  }
`;

export const titleWrapper = (theme: Theme) => css`
  text-align: center;

  p {
    margin-bottom: 32px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    text-align: right;

    p {
      margin-bottom: 16px;
    }
  }
`;

export const bioWrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 450px;
  order: 1;
  text-align: center;
  padding: 24px;
  background-color: ${theme.colors.secondary};
  border-radius: 4px;

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 55%;
    max-width: 800px;
    padding: 32px;
    text-align: right;
    height: 448px;
    box-shadow:
      0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
  }
`;

export const bio = (theme: Theme) => css`
  text-align: left;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 16px;
    border-radius: 4px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    text-align: right;
    flex-direction: row;
    gap: 32px;

    img {
      max-width: 250px;
    }
  }
`;
