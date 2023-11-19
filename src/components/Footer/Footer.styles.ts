import { css, Theme } from '@emotion/react';

export const footer = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.secondary};
  padding: 12px 32px;
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
