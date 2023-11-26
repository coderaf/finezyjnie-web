const appColors = {
  white: '#FFFFFF',
  black: '#000000',
  error: '#FF4E4E',
  alert: '#FDB62F',
  success: '#2FFD8E',
  link: '#2522BA',
  transparent: 'transparent',
  primary: '#498468',
  primaryHover: '#3e765c',
  secondary: '#8eceae',
  secondaryHover: '#74c59d',
  bgSection: '#3e765c',
  borderProductOpacityHigh: '#00000033',
  borderProductOpacityLow: '#000000B3',
  borderProductActive: '#000000',
  borderSection: 'darkgrey',
};

type ColorsType = Record<keyof typeof appColors, string>;

export const colors: ColorsType = appColors;
