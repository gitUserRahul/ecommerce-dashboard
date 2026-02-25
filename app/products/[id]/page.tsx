import { ProductService } from "@/lib/api/product.service";
import ProductDetail from "@/components/products/ProductDetail";
import { notFound } from "next/navigation";
import { ProductDetailPageProps } from "@/types";
import { getProductMetadata } from "@/lib/metadata/metadata";
import { Metadata } from "next";
import { getProductJSonLd } from "@/lib/metadata/jsonld";
import JsonLd from "@/components/shared/JsonLd";
import { cache } from "react";

const getProductById = cache(async (id: string) => {
  const product = await ProductService.getProductById(id);
  if (!product) notFound();
  return product;
});

export const generateMetadata = async ({
  params,
}: ProductDetailPageProps): Promise<Metadata> => {
  const { id } = await params;
  const product = await getProductById(id);
  return getProductMetadata(product);
};

const page = async ({ params }: ProductDetailPageProps) => {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <>
      <JsonLd data={getProductJSonLd(product)} />
      <ProductDetail product={product} />
    </>
  );
};

export default page;
