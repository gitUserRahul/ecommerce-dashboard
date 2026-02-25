import React from "react";
import CartList from "@/components/cart/CartList";
import CartTotal from "@/components/cart/CartTotal";

const page = () => {
  return (
    <>
      <CartList />
      <CartTotal />
    </>
  );
};

export default page;
