"use client";

import Link from "next/link";
import { SHIPPING_CHARGE } from "@/constant/constants";
import useCartStore from "@/store/cartStore";

const CartTotal = () => {
  const { totalPrice, clearCart } = useCartStore();
  const subTotal = totalPrice();
  const total = subTotal + SHIPPING_CHARGE;

  return (
    <div className="flex justify-center py-12 container mx-auto">
      <table className="w-full max-w-sm border-collapse border border-slate-400">
        <thead>
          <tr className="border border-slate px-2 py-3 boder-[#FBFBFB]">
            <th colSpan={2} className="text-left px-4 py-3 font-bold text-lg">
              Cart Totals
            </th>
          </tr>
        </thead>
        <tbody className="p-6">
          <tr className="border-b border-slate-300 ">
            <td className="px-4 py-3 font-light">Subtotal</td>
            <td className="px-4 py-3 ">${Number(subTotal).toFixed(2)}</td>
          </tr>
          <tr className="border-b border-slate-300 ">
            <td className="px-4 py-3 font-light">Shipping Charge</td>
            <td className="px-4 py-3 ">${SHIPPING_CHARGE.toFixed(2)}</td>
          </tr>
          <tr className="border-b border-slate-300 ">
            <td className="px-4 py-3 font-light">Total</td>
            <td className="px-4 py-3 ">${Number(total).toFixed(2)}</td>
          </tr>

          <tr>
            <td colSpan={2} className="px-4 py-4 flex flex-col gap-2">
              <Link
                href="/checkout"
                className="block text-center border p-3 bg-[#2DA884] hover:bg-[#127b5d] text-white"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={clearCart}
                className="text-center border p-3 text-red-500 hover:bg-red-50 text-sm"
              >
                Clear Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTotal;
