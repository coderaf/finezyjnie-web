import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { globalCss } from './styles/globalCss';
import Layout from './components/Layout/Layout';
import { routes } from './routes';
import ErrorPage from './pages/error-page/ErrorPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalCss} />
        <ToastContainer limit={1} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
