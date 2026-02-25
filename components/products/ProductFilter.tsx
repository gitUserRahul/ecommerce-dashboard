"use client";
import { useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ProductFilterProps } from "@/types";
import { toSlug } from "@/lib/utils/slug";

const ProductFilter = ({ categories }: ProductFilterProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentSort = searchParams.get("sort") || "asc";
  const currentCategory = searchParams.get("category") || "";
  const currentSearch = searchParams.get("search") || "";

  const handleSort = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page");
    router.push(`${pathName}?${params.toString()}`);
  };

  const handleSearch = (value: string) => {
    if (searchTimer.current) clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => {
      handleSort("search", value);
    }, 500);
  };

  return (
    <>
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          defaultValue={currentSearch}
          onChange={(e) => handleSearch(e.target.value)}
          className="border rounded px-4 py-2 w-1/2 "
        />
      </div>
      {/* filter according to category */}
      <div className="flex flex-col items-center gap-4 justify-center mb-4">
        <select
          value={currentCategory}
          onChange={(e) => handleSort("category", e.target.value)}
          className="border rounded px-4 py-2 capitalize "
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option
              key={category}
              value={toSlug(category)}
              className="dark:text-black"
            >
              {category}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <span className="font-bold">Sort By Price: </span>

          <button
            onClick={() => handleSort("sort", "asc")}
            className={`px-2 py border rounded ${
              currentSort === "asc"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Low To High
          </button>
          <button
            onClick={() => handleSort("sort", "desc")}
            className={`px-2 border rounded ${
              currentSort === "desc"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            High To Low
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
