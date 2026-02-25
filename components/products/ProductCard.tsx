"use client";

import Link from "next/link";
import Image from "next/image";
import { ProductCardProps } from "@/types";
import useAddToCart from "@/hook/useAddToCart";
import Rating from "../shared/Rating";

const ProductCard = ({ productItem }: ProductCardProps) => {
  const { image, quantity, rating, category, price, title, id } = productItem;
  const { handleAddToCart, isInCart } = useAddToCart();

  return (
    <div
      className="group flex text-center flex-col font-rose text-qualityContent font-bold relative"
      key={id}
    >
      <Link
        href={`/products/${id}`}
        className="cart_hover block h-64 relative  rounded-t-lg bg-white"
      >
        <Image src={image} alt={title} fill className="object-contain" />
      </Link>
      <div className="grid gap-2 py-3.5">
        <span className="flex felx-row justify-center">
          <Rating rate={rating.rate} count={rating.count} />
        </span>
        <span className="border rounded-sm w-auto">{category}</span>
        <span className="leading-exploreOrder">{title}</span>
        <span>${price}</span>
        <button
          onClick={() => handleAddToCart(productItem, quantity)}
          className="hidden absolute button-full left-1/2 -translate-x-1/2 -translate-y-[150%]
          px-2.5 py-3 uppercase text-[13px] w-[80%] text-center bg-black
          text-white leading-[1.3] group-hover:opacity-75 group-hover:block cursor-pointer"
        >
          {isInCart(id) ? "Item Added To Cart" : "Add to Cart"}
        </button>
      </div>

      {isInCart(id) && (
        <Link href="/cart" className="absolute top-2 right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
          View Cart
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
