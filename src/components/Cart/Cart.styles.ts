import { css, Theme } from '@emotion/react';

export const cartIcon = () => css`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const shoppingIcon = (theme: Theme) => css`
  width: 20px;
  height: 20px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 25px;
    height: 25px;
  }
`;

export const itemCount = () => css`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
