import useCartStore from "@/store/cartStore";
import { CartItem, Product } from "@/types";

const useAddToCart = () => {
  const { addToCart, items } = useCartStore();

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    const cartItems: CartItem = {
      ...product,
      quantity: quantity ?? product.quantity ?? 1,
    };
    addToCart(cartItems);
  };

  const isInCart = (productId: number): boolean =>
    items.some((item) => item.id === productId);
  return {
    handleAddToCart,
    isInCart,
  };
};

export default useAddToCart;
