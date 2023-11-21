import apiService from '../apiService';
import { FetchProductsParams } from './types';
import { Product, ProductCollection } from '../../types/common';

const SHOP_API_URL = 'api/shop/product';

export const fetchProducts = async (params?: FetchProductsParams): Promise<ProductCollection> => {
  const response = await apiService.get(SHOP_API_URL, { params });
  return response.data;
};

export const fetchProductById = async (productId: string): Promise<Product> => {
  const response = await apiService.get(`${SHOP_API_URL}/${productId}`);
  return response.data;
};
