import apiService from '../apiService';
import { FetchProductsParams, ProductsResponseDto } from './types';

const SHOP_API_URL = 'api/shop/product';

export const fetchProducts = async (params?: FetchProductsParams): Promise<ProductsResponseDto> => {
  const response = await apiService.get(SHOP_API_URL, { params });
  return response.data;
};
