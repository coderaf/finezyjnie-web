const appPathConstants = {
  HOME: '/',
  SHOP: '/sklep',
  SHOP_PRODUCT: '/sklep/produkt',
  BLOG: '/blog',
  BLOG_POST: '/blog/post',
  CONTACT: '/kontakt',
  CART: '/koszyk',
  CART_USER_INFO: '/koszyk/twoje-dane',
  CART_SUMMARY: '/koszyk/podsumowanie',
  CART_PAYMENTS: '/koszyk/platnosci',
};

export type PathConstantsType = Record<keyof typeof appPathConstants, string>;

export const PATHS: PathConstantsType = appPathConstants;
