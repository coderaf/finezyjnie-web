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
    fontFamily: 'Georgia',
    fontWeight: '300',
  },
  regular: {
    fontFamily: 'Georgia',
    fontWeight: '400',
  },
  bold: {
    fontFamily: 'Georgia',
    fontWeight: '600',
  },
};

const fontVariants = {
  // desktop headings
  dHeadline1: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.medium2,
    lineHeight: '40px',
  },
  dHeadline2: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.medium,
    lineHeight: '32px',
  },
  dHeadline3: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small3,
    lineHeight: '28px',
  },
  // mobile headings
  mHeadline1: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.medium,
    lineHeight: '32px',
  },
  mHeadline2: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small3,
    lineHeight: '28 px',
  },
  mHeadline3: {
    fontFamily: fonts.bold.fontFamily,
    fontWeight: fonts.bold.fontWeight,
    fontSize: fontSizes.small2,
    lineHeight: '24 px',
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
