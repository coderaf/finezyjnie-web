const fontSizes = {
  xxsmall: 10,
  xsmall: 12,
  xsmall2: 14,
  xsmall3: 10,
  small: 16,
  small2: 18,
  small3: 20,
  medium: 24,
  medium2: 32,
  large: 40,
  large2: 48,
  xlarge: 64,
};

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

const fonts: Record<string, { fontFamily: string; fontWeight: FontWeight }> = {
  light: {
    fontFamily: 'Open Sans',
    fontWeight: '300',
  },
  regular: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
  },
  bold: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
};

const fontVariants = {
  // desktop headings
  dHeadline4large: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.large,
    lineHeight: '48px',
  },
  dHeadline4small: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.medium2,
    lineHeight: '40px',
  },
  dHeadline5: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.medium,
    lineHeight: '32px',
  },
  dHeadline6: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small3,
    lineHeight: '28px',
  },
  // mobile headings
  mHeadline4large: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.medium2,
    lineHeight: '40px',
  },
  mHeadline4small: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.medium,
    lineHeight: '32 px',
  },
  mHeadline5: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small3,
    lineHeight: '28 px',
  },
  mHeadline6: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small2,
    lineHeight: '26 px',
  },
  body10: {
    fontFamily: fonts.regular.fontFamily,
    fontWeight: fonts.regular.fontWeight,
    fontSize: fontSizes.xsmall3,
    lineHeight: '12px',
  },
  body12: {
    fontFamily: fonts.regular.fontFamily,
    fontWeight: fonts.regular.fontWeight,
    fontSize: fontSizes.xsmall,
    lineHeight: '14px',
  },
  body14: {
    fontFamily: fonts.regular.fontFamily,
    fontWeight: fonts.regular.fontWeight,
    fontSize: fontSizes.xsmall2,
    lineHeight: '16px',
  },
  body16: {
    fontFamily: fonts.regular.fontFamily,
    fontWeight: fonts.regular.fontWeight,
    fontSize: fontSizes.small,
    lineHeight: '20px',
  },
  body20: {
    fontFamily: fonts.regular.fontFamily,
    fontWeight: fonts.regular.fontWeight,
    fontSize: fontSizes.small3,
    lineHeight: '24px',
  },
  subtitle12: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.xsmall,
    lineHeight: '16px',
  },
  subtitle14: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.xsmall2,
    lineHeight: '18px',
  },
  subtitle16: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small,
    lineHeight: '20px',
  },
  subtitle20: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small3,
    lineHeight: '24px',
  },
};

export type FontVariant = keyof typeof fontVariants;

export const typography = {
  fontSizes,
  fonts,
  variants: fontVariants,
};
