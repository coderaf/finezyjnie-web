import { css, Theme } from '@emotion/react';

export const button = (secondary?: boolean) => (theme: Theme) => css`
  width: 100%;
  border: 0;
  color: ${theme.colors.white};
  padding: 16px 32px;
  background-color: ${!secondary ? theme.colors.primary : theme.colors.secondary};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    background-color: ${!secondary ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
