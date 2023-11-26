export interface Images {
  small: string[];
  large: string[];
}

export interface Category {
  id: string;
  name: string;
}

export interface Tag extends Category {}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: Images;
  price: number;
  displayPrice: string;
  stock: number;
  reserved: number;
  category: Category;
  tags: Tag[];
  quantity?: number;
}

export interface ProductCollection {
  page: number;
  pagesTotal: number;
  products: Product[];
}
