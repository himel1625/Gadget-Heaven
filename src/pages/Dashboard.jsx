import React, { useEffect, useState } from 'react';
import Cart from '../Components/cart';
import Wishlist from '../Components/Wishlist';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Gadget-Heaven/Dashboard';
  }, []);
  const [isExist, setIsExist] = useState(!false);
  return (
    <div>
      <div className="w-full bg-Color h-72">
        <p className="font-bold text-2xl text-white mx-auto text-center pt-6 lg:text-5xl">
          Dashboard
        </p>
        <p className="font-bold text-white pt-4 text-center lg:w-[80%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center justify-center gap-4 pt-8">
          <button
            className={`${
              isExist
                ? ' bg-white px-6 py-2 rounded-xl font-bold text-2xl'
                : ' text-white border border-white  px-6 py-2 rounded-xl font-bold text-2xl'
            }`}
            onClick={() => setIsExist(true)}
          >
            Cart
          </button>
          <button
            className={`${
              !isExist
                ? ' bg-white px-6 py-2 rounded-xl font-bold text-2xl'
                : '  text-white border border-white  px-6 py-2 rounded-xl font-bold text-2xl'
            }`}
            onClick={() => setIsExist(false)}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div>{!isExist ? <Wishlist /> : <Cart />}</div>
    </div>
  );
};

export default Dashboard;
