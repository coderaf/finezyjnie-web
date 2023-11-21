import { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';
import Product from '../pages/product/Product';
import React from 'react';

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
    path: `${PATHS.PRODUCT}/:productId`,
    element: <Product />,
  },
  { path: PATHS.BLOG, element: <Blog /> },
  { path: PATHS.CONTACT, element: <Contact /> },
];
