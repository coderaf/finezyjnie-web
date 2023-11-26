import { useAppDispatch, useAppSelector } from '../hooks';
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  incrementProduct,
} from './cartSlice';
import { Product } from '../../types/common';

export function useCart() {
  const totalProducts = useAppSelector((state) =>
    state.cart.productsInCart.reduce((acc, product) => acc + product.quantity, 0)
  );
  const productsInCart = useAppSelector((state) => state.cart.productsInCart);
  const totalAmount = useAppSelector((state) =>
    state.cart.productsInCart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  );

  const dispatch = useAppDispatch();

  const addToCart = (product: Product) => {
    if (productsInCart.find((p) => p.id === product.id)) {
      dispatch(incrementProduct(product.id));
    } else {
      dispatch(addToCartAction(product));
    }
  };

  const removeFromCart = (id: string) => {
    dispatch(removeFromCartAction(id));
  };

  return {
    totalProducts,
    productsInCart,
    addToCart,
    removeFromCart,
    totalAmount: (totalAmount / 100).toFixed(2),
  };
}
