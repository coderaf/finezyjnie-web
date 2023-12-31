import { css, Theme } from '@emotion/react';

export const cartPaymentsWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 64px;
    margin-bottom: 128px;
  }
`;

export const cartPaymentsSummary = (theme: Theme) => css`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    align-items: flex-end;
  }
`;

export const cartButtons = () => css`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  height: 100%;
  max-height: 50px;
  white-space: nowrap;
`;

export const buttonWrapper = () => css`
  width: 100%;
  max-width: 200px;
`;
