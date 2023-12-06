export const isPathInHomePaths = (path: string, homePaths: string[]) => {
  return !!homePaths.find((homePath) => path.includes(homePath) || path === '/');
};
