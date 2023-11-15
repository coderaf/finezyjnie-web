import { RouteObject } from 'react-router-dom';
import { PathConstants } from './pathConstants';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';

const routes: RouteObject[] = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.SHOP, element: <Shop /> },
  { path: PathConstants.BLOG, element: <Blog /> },
  { path: PathConstants.CONTACT, element: <Contact /> },
];

export default routes;
