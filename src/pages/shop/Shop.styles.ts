import { css, Theme } from '@emotion/react';

export const shop = (theme: Theme) => css`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    padding-right: 16px;
  }
`;

export const categoriesWrapper = () => css`
  width: 100%;
  max-width: 230px;
`;

export const productsWrapper = (theme: Theme) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  // it's a hack for the flexbox gap in last row
  &::after {
    content: '';
    width: 44%;
    margin: 1em;

    @media (max-width: ${theme.breakpoints.tablet}) {
      width: calc(100% - 2em);
      min-width: 230px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: calc(33% - 2em);
      min-width: 230px;
    }
  }
`;
