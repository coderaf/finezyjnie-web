import React from 'react';
import { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';
import Product from '../pages/shop/components/Product';
import Cart from '../pages/cart/Cart';
import CartUserInfo from '../pages/cart/components/CartUserInfo';
import CartSummary from '../pages/cart/components/CartSummary';

export const routes: RouteObject[] = [
  { path: PATHS.HOME, element: <Home /> },
  {
    path: PATHS.SHOP,
    element: <Shop />,
  },
  {
    path: `${PATHS.SHOP}/:category`,
    element: <Shop />,
  },
  {
    path: `${PATHS.SHOP_PRODUCT}/:productId`,
    element: <Product />,
  },
  {
    path: PATHS.CART,
    element: <Cart />,
  },
  {
    path: PATHS.CART_USER_INFO,
    element: <CartUserInfo />,
  },
  {
    path: PATHS.CART_SUMMARY,
    element: <CartSummary />,
  },
  { path: PATHS.BLOG, element: <Blog /> },
  { path: PATHS.CONTACT, element: <Contact /> },
];
