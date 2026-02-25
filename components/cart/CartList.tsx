"use client";

import useCartStore from "@/store/cartStore";
import CartItem from "./CartItem";
import EmptyState from "@/components/shared/EmptyState";
const CartList = () => {
  const { items } = useCartStore();

  if (items.length === 0)
    return (
      <EmptyState
        message="Your cart is empty."
        description="Start adding some products!"
        actionLabel="Shop Now"
      />
    );
  return (
    <section className="container mx-auto py-8">
      <table className="w-full md:table border-collapse border border-slate-400">
        <thead>
          <tr className="grid grid-cols-8  py-4 bg-[#FBFBFB] dark:text-black">
            <th className=""></th>
            <th className="col-span-3 ">Product</th>
            <th className="col-span-1 text-center">Price</th>
            <th className="col-span-1 text-center">Quantity</th>
            <th className="col-span-1 ">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CartList;
