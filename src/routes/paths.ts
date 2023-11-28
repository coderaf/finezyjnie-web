const appPathConstants = {
  HOME: '/',
  SHOP: '/sklep',
  SHOP_PRODUCT: '/sklep/produkt',
  BLOG: '/blog',
  CONTACT: '/kontakt',
  CART: '/koszyk',
  CART_USER_INFO: '/koszyk/twoje-dane',
  CART_SUMMARY: '/koszyk/podsumowanie',
};

export type PathConstantsType = Record<keyof typeof appPathConstants, string>;

export const PATHS: PathConstantsType = appPathConstants;
