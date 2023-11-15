import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { webTheme } from './theme';
import { globalCss } from './styles/globalCss';
import Layout from './components/Layout/Layout';
import routes from './routes';
import ErrorPage from './pages/error-page/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);

  return (
    <ThemeProvider theme={webTheme}>
      <Global styles={globalCss} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
