import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
