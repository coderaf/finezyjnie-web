const appColors = {
  white: '#FFFFFF',
  black: '#000000',
  error: '#FF4E4E',
  alert: '#FDB62F',
  success: '#2FFD8E',
  link: '#2522BA',
  transparent: 'transparent',
  main: '#498468',
  secondary: '#8eceae',
  bgSection: '#3e765c',
  borderProduct: '#724e38',
};

type ColorsType = Record<keyof typeof appColors, string>;

export const colors: ColorsType = appColors;
