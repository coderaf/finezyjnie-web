import { css, Theme } from '@emotion/react';

export const checkboxError = (theme: Theme) => css`
  border: 2px solid ${theme.colors.error} !important;
`;
