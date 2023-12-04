import { useAppDispatch, useAppSelector } from '../hooks';
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  incrementProduct,
  setProductQuantity as setProductQuantityAction,
  clearCart as clearCartAction,
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
      incrementProductByOne(product.id);
    } else {
      dispatch(addToCartAction(product));
    }
  };

  const incrementProductByOne = (id: string) => {
    dispatch(incrementProduct(id));
  };

  const removeFromCart = (id: string) => {
    dispatch(removeFromCartAction(id));
  };

  const setProductQuantity = ({ id, quantity }: { id: string; quantity: number }) => {
    dispatch(setProductQuantityAction({ id, quantity }));
  };

  const clearCart = () => {
    dispatch(clearCartAction());
  };

  return {
    totalProducts,
    productsInCart,
    addToCart,
    removeFromCart,
    totalAmount: Number((totalAmount / 100).toFixed(2)),
    setProductQuantity,
    clearCart,
  };
}
