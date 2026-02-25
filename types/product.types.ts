export interface RatingProps {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating: RatingProps;
  quantity?: number;
}

export interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export interface AllProductsProps {
  products: Product[];
}

export interface ProductFilterProps {
  categories: string[];
}

export interface ProductCardProps {
  productItem: Product;
}

export interface ProductDetailProps {
  product: Product;
}
