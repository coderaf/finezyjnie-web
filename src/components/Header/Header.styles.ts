import { css, Theme } from '@emotion/react';

export const header = (theme: Theme) => css`
  background-color: ${theme.colors.white};
`;

export const headerImage = () => css`
  width: 100%;
  height: 180px;
  background-color: gray;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
