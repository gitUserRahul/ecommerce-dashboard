import { Metadata } from "next";
import { Product } from "@/types";
import { BASE_URL, SITE_TITLE } from "@/constant/constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description:
    "A dashboard for managing your e-commerce store and for shoping.",
  keywords: ["shoping", "e-commerce", "dashboard", "products", "cart"],
  authors: [{ name: "E-commerce Dashboard Team" }],
  openGraph: {
    type: "website",
    siteName: SITE_TITLE,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const getAllProductMetadata = (): Metadata => ({
  title: "All Product",
  description: "Shop now and find the best deals!",
  openGraph: {
    title: `All Product | ${SITE_TITLE}`,
    description: "get the best deals on our wide selection of products. ",
    url: `${BASE_URL}/products`,
  },
});

export const getProductMetadata = (product: Product): Metadata => ({
  title: product.title,
  description: product.description,
  keywords: [product.category, product.title],
  openGraph: {
    title: `${product.title} | ${SITE_TITLE}`,
    description: product.description,
    url: `${BASE_URL}/products/${product.id}`,
    images: {
      url: product.image,
      width: 500,
      height: 500,
      alt: product.title,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${product.title} | ${SITE_TITLE}`,
    description: product.description,
    images: [product.image],
  },
});
