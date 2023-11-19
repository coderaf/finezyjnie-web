const appPathConstants = {
  HOME: '/',
  SHOP: '/sklep',
  PRODUCT: '/produkt',
  BLOG: '/blog',
  CONTACT: '/kontakt',
};

type PathConstantsType = Record<keyof typeof appPathConstants, string>;

export const PATHS: PathConstantsType = appPathConstants;
