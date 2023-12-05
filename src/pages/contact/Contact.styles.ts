import { css, Theme } from '@emotion/react';

export const contact = (theme: Theme) => css`
  margin: 0 auto;
  max-width: 600px;
  padding: 32px 32px 48px 32px;
  background-color: ${theme.colors.secondary};
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 24px;
    margin-right: 12px;
    color: ${theme.colors.primary};
  }
`;

export const contactContent = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
`;

export const contactItem = css`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
