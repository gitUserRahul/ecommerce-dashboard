import { BASE_URL, SITE_TITLE } from "@/constant/constants";
import { Product } from "@/types";

export const getProductJSonLd = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.title,
  image: product.image,
  description: product.description,
  category: product.category,
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: product.price,
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/products/${product.id}`,
  },
});

export const getWebsiteJsonLd = () => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: SITE_TITLE,
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/products?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});
