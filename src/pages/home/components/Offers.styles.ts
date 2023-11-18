import { css, Theme } from '@emotion/react';

export const offers = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const offersSection = (theme: Theme) => css`
  width: 100%;
  padding: 16px 0;
  background-color: ${theme.colors.bgSection};
  text-align: center;
  margin-bottom: 64px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 48px;
  }
`;
