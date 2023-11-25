import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/common';

export interface CartStore {
  amount: number;
  productsInCart: Product[];
}

const initialState: CartStore = {
  amount: 0,
  productsInCart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.productsInCart.push(action.payload);
      state.amount = state.productsInCart.length;
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload.id
      );
      state.amount = state.productsInCart.length;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
