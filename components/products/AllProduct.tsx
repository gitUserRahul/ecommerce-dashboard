"use client";

import Pagination from "@/components/ui/Pagination";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { AllProductsProps } from "@/types";
import { ITEMS_PER_PAGES } from "@/constant/constants";
import EmptyState from "@/components/shared/EmptyState";
import { toSlug } from "@/lib/utils/slug";

const AllProduct = ({ products }: AllProductsProps) => {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentSort = searchParams.get("sort") || "asc";
  const currentCategory = searchParams.get("category") || "";
  const currentSearch = searchParams.get("search") || "";

  const filteredProduct = [...products]
    .filter((product) =>
      currentSearch
        ? product.title.toLowerCase().includes(currentSearch.toLowerCase())
        : true,
    )
    .filter((product) =>
      currentCategory ? toSlug(product.category) === currentCategory : true,
    )
    .sort((a, b) =>
      currentSort === "asc" ? a.price - b.price : b.price - a.price,
    );

  const totalPages = Math.ceil(filteredProduct.length / ITEMS_PER_PAGES);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGES;
  const currentProduct = filteredProduct.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGES,
  );

  if (currentProduct.length === 0)
    return (
      <EmptyState
        message="No Product Found"
        description="Try adjusting your search or filter criteria."
      />
    );

  return (
    <section className="container mx-auto py-14">
      <span>
        Showing {startIndex + 1}-
        {Math.min(startIndex + ITEMS_PER_PAGES, filteredProduct.length)} of{" "}
        {filteredProduct.length} results
      </span>
      <div>
        <div className="grid grid-cols grid-cols-2  lg:grid-cols-4 gap-6">
          {currentProduct.map((productItem) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}
        </div>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        paramName="page"
      />
    </section>
  );
};

export default AllProduct;
