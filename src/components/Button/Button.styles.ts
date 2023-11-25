import { css, Theme } from '@emotion/react';

export const button = (theme: Theme) => css`
  width: 100%;
  border: 0;
  color: ${theme.colors.white};
  padding: 16px 32px;
  background-color: ${theme.colors.primary};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.bgSection};
  }
`;
