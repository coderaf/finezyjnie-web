import { css, Theme } from '@emotion/react';

export const container = (theme: Theme) => css`
  width: 100%;
  max-width: ${theme.webDimensions.maxPageWidth}px;
  margin: 0 auto 32px auto;
`;
