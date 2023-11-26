import { css, Theme } from '@emotion/react';

export const cartPayments = (theme: Theme) => css`
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 400px;
  }
`;

export const providerWrapper = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const provider = () => css`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const dot = (theme: Theme) => css`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const selected = (theme: Theme) => css`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
`;
