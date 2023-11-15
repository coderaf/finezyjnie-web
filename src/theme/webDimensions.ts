import { WebDimensions } from '@emotion/react';

const appDimensions: WebDimensions = {
  maxPageWidth: 1440,
  navHeight: 64,
  menuWidth: 800,
};

type DimensionsType = Record<keyof typeof appDimensions, number>;

export const webDimensions: DimensionsType = appDimensions;
