import { css, Theme } from '@emotion/react';

export const footer = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.secondary};
  height: ${theme.webDimensions.footerHeight}px;
`;

export const footerContent = (theme: Theme) => css`
  max-width: ${theme.webDimensions.maxPageWidth}px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  svg {
    cursor: pointer;
  }

  p {
    margin: 0 auto;
  }

  a {
    font-weight: 600;

    &:hover {
      color: ${theme.colors.black};
    }
  }
`;
