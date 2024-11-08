import React, { useEffect } from 'react';

import { Outlet, useLoaderData } from 'react-router-dom';
import CategoryList from '../Components/CategoryList ';

const Home = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = 'Gadget-Heaven';
  }, []);
  return (
    <div className="lg:flex lg:justify-evenly mx-w-[1440px] mx-auto sm:mx-auto ">
      <CategoryList data={data} />
      <Outlet />
    </div>
  );
};

export default Home;
