import { fetchClient } from "./interceptor";
import { Product } from "@/types";

const SERVICE_NAME = "ProductService";

export const ProductService = {
  getAllProduct: (sort: "asc" | "desc" = "asc"): Promise<Product[]> =>
    fetchClient<Product[]>(`/products?sort=${sort}`, {
      serviceName: SERVICE_NAME,
      next: { revalidate: 3600, tags: ["products"] },
    }),

  getProductById: (id: string | number): Promise<Product> =>
    fetchClient<Product>(`/products/${id}`, {
      serviceName: SERVICE_NAME,
      next: { revalidate: 3600, tags: [`product-${id}`] },
    }),

  getCategories: (): Promise<string[]> =>
    fetchClient<string[]>(`/products/categories`, {
      serviceName: SERVICE_NAME,
      next: { revalidate: 86400, tags: ["categories"] },
    }),
};
