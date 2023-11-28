import { css, Theme } from '@emotion/react';

export const input = (theme: Theme) => css`
  width: 100%;
  padding: 0.65rem 0.5rem;
  font-size: 1rem;
  border: 2px solid ${theme.colors.borderInput};
  background-color: ${theme.colors.bgInput};
  color: ${theme.colors.input};
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.primary};
  }

  &:invalid {
    border: 2px solid ${theme.colors.error};
    box-shadow: none;
  }
`;

export const inputError = (theme: Theme) => css`
  border: 2px solid ${theme.colors.error} !important;
`;
