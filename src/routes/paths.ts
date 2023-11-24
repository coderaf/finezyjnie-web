const appPathConstants = {
  HOME: '/',
  SHOP: '/sklep',
  SHOP_PRODUCT: '/sklep/produkt',
  BLOG: '/blog',
  CONTACT: '/kontakt',
  CART: '/koszyk',
};

export type PathConstantsType = Record<keyof typeof appPathConstants, string>;

export const PATHS: PathConstantsType = appPathConstants;
