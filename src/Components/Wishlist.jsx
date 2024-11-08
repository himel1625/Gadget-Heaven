
import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { getAddedWishlist, removeWishlist } from '../Utilities/LocalStorage';

const Wishlist = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(getAddedWishlist());
  }, []);

  const handleButton = (productId) => {
    removeWishlist(productId);
    setAllData((prevData) =>
      prevData.filter((item) => item.product_id !== productId),
    );
  };

  return (
    <div className="mt-5 flex flex-col gap-4 px-5">
      {allData.map((item) => (
        <div
          key={item.product_id}
          className="border rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="flex-shrink-0">
            <img
              src={item.product_image}
              alt={item.product_title}
              className="h-40 w-auto object-cover mb-2 sm:mb-0 sm:w-60"
            />
          </div>

          <div className="flex-grow flex flex-col sm:gap-4">
            <h3 className="font-bold text-lg">{item.product_title}</h3>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-2xl">Description: </span>
              {item.description}
            </p>
            <p className="font-bold text-xl text-Color">${item.price}</p>
          </div>

          <div className="flex-shrink-0 text-red-600">
            <FaRegTrashAlt
              onClick={() => handleButton(item.product_id)}
              size={30}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
