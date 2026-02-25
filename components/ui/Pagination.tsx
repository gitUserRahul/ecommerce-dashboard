"use client";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface IpaginationProps {
  totalPages: number;
  currentPage: number;
  paramName?: string;
}

const Pagination = ({
  totalPages,
  currentPage,
  paramName = "page",
}: IpaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePageChage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramName, page.toString());
    router.push(`${pathName}?${params.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex gap-3 justify-center ">
      <button
        onClick={() => handlePageChage(currentPage - 1)}
        disabled={isFirstPage}
        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      {pages.map((page) => {
        const isActivePage = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => handlePageChage(page)}
            className={`px-4 py-2 border rounded ${
              isActivePage ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => handlePageChage(currentPage + 1)}
        disabled={isLastPage}
        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
