export interface FetchProductsParams {
  tag?: string;
  page?: number;
  pageSize?: number;
}

export interface ProductResponseDto {
  id: string;
  name: string;
  description: string;
  images: {
    small: string[];
    large: string[];
  };
  price: number;
  price_display: string;
  stock: number;
  reserved: number;
  category: {
    id: string;
    name: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
}

export interface ProductsResponseDto {
  page: number;
  pagesTotal: number;
  products: ProductResponseDto[];
}
