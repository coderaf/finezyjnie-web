export function truncateString(str: string, maxLength: number, suffix = '...') {
  return str.length > maxLength ? str.substring(0, maxLength) + suffix : str;
}
