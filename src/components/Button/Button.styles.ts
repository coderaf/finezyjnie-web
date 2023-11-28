import { css, Theme } from '@emotion/react';

export const button = (secondary?: boolean) => (theme: Theme) => css`
  width: 100%;
  border: 0;
  color: ${theme.colors.white};
  padding: 16px 32px;
  background-color: ${!secondary ? theme.colors.primary : theme.colors.secondary};
  cursor: pointer;
  border-radius: 10px;
  transition:
    background-color 200ms ease-in-out,
    transform 200ms ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${!secondary ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
