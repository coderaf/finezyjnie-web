import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/common';

interface ProductInStore extends Product {
  quantity: number;
}

export interface CartStore {
  productsInCart: ProductInStore[];
}

const initialState: CartStore = {
  productsInCart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.productsInCart.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );
    },
    incrementProduct: (state, action: PayloadAction<string>) => {
      const product = state.productsInCart.find((product) => product.id === action.payload);

      if (product) {
        product.quantity = product.quantity + 1;
      }
    },
    decrementProduct: (state, action: PayloadAction<string>) => {
      const product = state.productsInCart.find((product) => product.id === action.payload);

      if (product) {
        product.quantity = product.quantity - 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementProduct, decrementProduct } = cartSlice.actions;

export default cartSlice.reducer;
