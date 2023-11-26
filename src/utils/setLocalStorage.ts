import { Product } from '../types/common';

export const setLocalStorage = (name: string, products: Product[]) =>
  localStorage.setItem(name, JSON.stringify(products));
