import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '80vh', padding: '1rem 2rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
