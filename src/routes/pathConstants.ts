const appPathConstants = {
  HOME: '/',
  SHOP: '/sklep',
  BLOG: '/blog',
  CONTACT: '/kontakt',
};

type PathConstantsType = Record<keyof typeof appPathConstants, string>;

export const PathConstants: PathConstantsType = appPathConstants;
