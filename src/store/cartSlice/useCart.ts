import { useAppDispatch, useAppSelector } from '../hooks';
import { addToCart as addToCartAction, removeFromCart as removeFromCartAction } from './cartSlice';
import { Product } from '../../types/common';

export function useCart() {
  const amount = useAppSelector((state) => state.cart.amount);
  const productsInCart = useAppSelector((state) => state.cart.productsInCart);

  const dispatch = useAppDispatch();

  const addToCart = (product: Product) => {
    dispatch(addToCartAction(product));
  };

  const removeFromCart = (product: Product) => {
    dispatch(removeFromCartAction(product));
  };

  return {
    amount,
    productsInCart,
    addToCart,
    removeFromCart,
  };
}
