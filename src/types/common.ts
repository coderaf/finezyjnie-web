export interface Image {
  small: string[];
  large: string[];
}

interface Category {
  id: string;
  name: string;
}

interface Tag extends Category {}

export interface Product {
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
  category: Category;
  tags: Tag[];
}
