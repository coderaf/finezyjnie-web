import { css, Theme } from '@emotion/react';

export const productDetails = (theme: Theme) => css`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 45%;
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 35%;
  }
`;

export const buttonWrapper = (theme: Theme) => css`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 8px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    text-align: left;
    max-width: 300px;
  }
`;
