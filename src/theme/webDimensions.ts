import { WebDimensions } from '@emotion/react';

const appDimensions: WebDimensions = {
  maxPageWidth: 1280,
  navHeight: 64,
};

type DimensionsType = Record<keyof typeof appDimensions, number>;

export const webDimensions: DimensionsType = appDimensions;
