import React, { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = 'Gadget-Heaven';
  }, []);

  return (
    <div className="font-sora">
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Navbar />
        <div className={`${pathname === '/' ? 'block' : 'hidden'}`}>
          <Banner />
        </div>
      </div>
      <div
        className="  min-h-[calc(100vh-232px)] py-12 container lg:max-w-[1440px] 
          w-full sm:w-full mx-auto sm:mx-auto scroll-smooth px-10"
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
