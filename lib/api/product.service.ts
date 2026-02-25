import { fetchClient } from "./interceptor";
import { Product } from "@/types";

export const ProductService = {
  getAllProduct: (sort: "asc" | "desc" = "asc"): Promise<Product[]> =>
    fetchClient<Product[]>(`/products?sort=${sort}`),

  getProductById: (id: string | number): Promise<Product> =>
    fetchClient<Product>(`/products/${id}`),

  getProductByCategory: (): Promise<string[]> =>
    fetchClient<string[]>(`/products/categories`),
};
