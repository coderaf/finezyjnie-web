import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/common';
import { setLocalStorage } from '../../utils/setLocalStorage';

interface ProductInStore extends Product {
  quantity: number;
}

export interface CartStore {
  productsInCart: ProductInStore[];
}

const initialProductsInCart = localStorage.getItem('cart');

const initialState: CartStore = {
  productsInCart: initialProductsInCart ? JSON.parse(initialProductsInCart) : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.productsInCart.push({ ...action.payload, quantity: 1 });
      setLocalStorage('cart', state.productsInCart);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );
      setLocalStorage('cart', state.productsInCart);
    },
    incrementProduct: (state, action: PayloadAction<string>) => {
      const product = state.productsInCart.find((product) => product.id === action.payload);

      if (product) {
        product.quantity = product.quantity + 1;
      }
      setLocalStorage('cart', state.productsInCart);
    },
    decrementProduct: (state, action: PayloadAction<string>) => {
      const product = state.productsInCart.find((product) => product.id === action.payload);

      if (product) {
        product.quantity = product.quantity - 1;
      }
      setLocalStorage('cart', state.productsInCart);
    },
    setProductQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const product = state.productsInCart.find((product) => product.id === action.payload.id);

      if (product) {
        product.quantity = action.payload.quantity;
      }
      setLocalStorage('cart', state.productsInCart);
    },
    clearCart: (state) => {
      sessionStorage.clear();
      localStorage.clear();
      state.productsInCart = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementProduct, setProductQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
