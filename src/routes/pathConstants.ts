const appPathConstants = {
  HOME: '/',
  SHOP: '/shop',
  BLOG: '/blog',
  CONTACT: '/contact',
};

type PathConstantsType = Record<keyof typeof appPathConstants, string>;

export const PathConstants: PathConstantsType = appPathConstants;
