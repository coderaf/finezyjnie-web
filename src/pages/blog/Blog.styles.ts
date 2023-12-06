import { css, Theme } from '@emotion/react';

export const posts = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    justify-content: flex-start;
  }
`;

export const postCardWrapper = () => css`
  width: 100%;
  max-width: 350px;
`;
