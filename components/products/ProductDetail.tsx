"use client";
import Image from "next/image";
import useAddToCart from "@/hook/useAddToCart";
import Rating from "../shared/Rating";
import { ProductDetailProps } from "@/types";
import Link from "next/link";

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { image, rating, price, title, quantity, category, description } =
    product;
  const { handleAddToCart } = useAddToCart();

  return (
    <>
    <Link href="/products" className="flex items-center justify-center mt-8 text-blue-500 hover:underline">
        Back to Products
      </Link>
    <section className="container mx-auto py-14">
      <div className="flex flex-col items-center w-full h-full">
        <div className="h-78 w-full relative mb-8">
          <Image className="object-scale-down" fill src={image} alt={title} />
        </div>
        <div className="flex flex-col items-center gap-6 ">
          <span className="flex felx-row justify-center">
            <Rating rate={rating.rate} count={rating.count} />
          </span>
          <p className="capitalize text-lg rounded-sm border inline px-2.5 ">
            {category}
          </p>

          <h2 className="text-[26px]">{title}</h2>
          <p className="tracking-[0.5px] text-2xl text-center">{description}</p>
          <p className="tracking-[0.5px] font-bold text-2xl">${price}</p>

          <button
            className="items-center px-3 text-sm font-medium text-center text-white bg-[#2DA884] py-2 font-rose  uppercase"
            type="button"
            onClick={() => handleAddToCart(product, quantity)}
          >
            Add To Cart
          </button>
        </div>
      </div>

      
    </section>
    </>
  );
};

export default ProductDetail;
