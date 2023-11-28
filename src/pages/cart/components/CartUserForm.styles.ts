import { css, Theme } from '@emotion/react';

export const inputWrapper = () => css`
  margin-bottom: 16px;

  label {
    margin-bottom: 4px;
  }
`;

export const formWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
    justify-content: space-between;
  }
`;

export const userDataWrapper = () => css`
  width: 100%;
  max-width: 400px;
`;

export const cartButtons = () => css`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  height: 100%;
  max-height: 50px;
  white-space: nowrap;
  margin-top: 64px;
`;

export const buttonWrapper = () => css`
  width: 100%;
  max-width: 200px;
`;

export const checkboxWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    cursor: pointer;
  }

  label {
    align-items: flex-start;
    gap: 8px;

    a {
      color: ${theme.colors.primary};
    }
  }
`;
