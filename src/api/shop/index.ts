import apiService from '../apiService';
import { FetchProductsParams, ShipmentMethod } from './types';
import { Product, ProductCollection, Category } from '../../types/common';

const SHOP_API_URL = 'api/shop';

export const fetchProducts = async (params?: FetchProductsParams): Promise<ProductCollection> => {
  const response = await apiService.get(`${SHOP_API_URL}/product`, { params });
  return response.data;
};

export const fetchProductById = async (productId: string): Promise<Product> => {
  const response = await apiService.get(`${SHOP_API_URL}/product/${productId}`);
  return response.data;
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await apiService.get(`${`${SHOP_API_URL}`}/category`);
  return response.data;
};

export const fetchShipmentMethods = async (): Promise<ShipmentMethod[]> => {
  const response = await apiService.get(`${SHOP_API_URL}/shipment-method`);
  return response.data;
};
