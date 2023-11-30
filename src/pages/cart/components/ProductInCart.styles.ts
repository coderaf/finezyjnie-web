import { css, Theme } from '@emotion/react';

export const productInCart = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.borderSection};

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-height: 170px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    min-height: 200px;
    font-size: 20px;
  }
`;

export const productInCartInfo = (theme: Theme) => css`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 16px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: 32px;
  }
`;

export const productInCartThumbnail = (image: string) => (theme: Theme) => css`
  width: 35%;
  height: 100%;
  max-height: 150px;
  background-image: url(${image});
  background-size: cover;
  background-position: center center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-height: 200px;
  }
`;

export const productInCartName = () => css`
  width: 65%;
`;

export const productInCartQuantity = () => css`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const productInCartPrice = () => css`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const productInCartRemove = (theme: Theme) => css`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding-left: 16px;

    svg {
      width: 20px;
      height: auto;
    }
  }
`;
