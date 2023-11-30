import { css, Theme } from '@emotion/react';

export const userFormsSummary = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const userAddress = (theme: Theme) => css`
  width: 100%;
  margin-bottom: 32px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const shipmentMethods = (theme: Theme) => css`
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

export const addressSpacing = () => css`
  margin-bottom: 4px;
`;

export const changeAddress = () => css`
  cursor: pointer;
  width: 60px;
`;

export const infoValue = () => css`
  font-weight: bold;
`;

export const cartTotal = () => css`
  text-align: right;
  margin-top: 16px;
`;

export const cartPaymentsSummary = (theme: Theme) => css`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;

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
  margin-top: 64px;
`;

export const buttonWrapper = () => css`
  width: 100%;
  max-width: 200px;
`;
