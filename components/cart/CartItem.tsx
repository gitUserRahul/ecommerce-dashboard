"use client";

import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store/cartStore";
import { CartItemProps } from "@/types";

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  const { id, title, price, image, quantity } = item;
  return (
    <tr className="grid grid-cols-8 border-b py-6 items-center ">
      <td className="flex gap-2 text-red-500 text-lg font-bold ps-4">
        <button onClick={() => removeFromCart(id)}>x</button>
        <div className="h-20 w-20 relative bg-white rounded">
          <Image
            className="object-contain mix-blend-multiply"
            src={image}
            alt={title}
            fill
          />
        </div>
      </td>
      <td className="col-span-3">
        <Link className="text-sm font-medium " href={`/product/${id}`}>
          {title}
        </Link>
      </td>
      <td className="col-span-1 text-sm text-center">
        {Number(price).toFixed(2)}
      </td>
      <td className="col-span-1 text-sm text-center ">
        <div className="flex items-center justify-center gap-2">
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1) {
                updateQuantity(id, value);
              }
            }}
            min="1"
            className="basis-1/3 border text-center inline-block "
          />
        </div>
      </td>
      <td className="col-span-1 text-sm font-bold text-center">
        {(price * quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;
