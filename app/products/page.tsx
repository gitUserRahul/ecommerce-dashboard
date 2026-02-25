import AllProduct from "@/components/products/AllProduct";
import { ProductService } from "@/lib/api/product.service";
import { getAllProductMetadata } from "@/lib/metadata/metadata";
import ProductFilter from "@/components/products/ProductFilter";
import { Metadata } from "next";

interface Isortprops {
  searchParams: Promise<{
    sort?: "asc" | "desc";
    category?: string;
    search?: string;
  }>;
}

export const metadata: Metadata = getAllProductMetadata();

const page = async ({ searchParams }: Isortprops) => {
  const { sort = "asc" } = await searchParams;
  const [products, categories] = await Promise.all([
    ProductService.getAllProduct(sort),
    ProductService.getCategories(),
  ]);

  return (
    <main className="container mx-auto py-14">
      <ProductFilter categories={categories} />
      <AllProduct products={products} />{" "}
    </main>
  );
};

export default page;
