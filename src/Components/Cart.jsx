import React, { useState } from 'react';
import { FaRegTrashAlt, FaSortNumericUpAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Group from '../assets/Group.png';
import { getallFavorite, removeAddToCart } from '../Utilities/LocalStorage';

const Cart = () => {
  const initialData = getallFavorite();
  const [allData, setAllData] = useState(initialData);
  const [totalPrice, setTotalPrice] = useState(0);

  const sortByPrice = () => {
    const sortedData = [...allData].sort((b, a) => a.price - b.price);
    setAllData(sortedData);
  };

  const calculateTotalPrice = () => {
    const total = allData.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handlePurchaseClick = () => {
    calculateTotalPrice();
    document.getElementById('my_modal_4').showModal();
  };

  const handelButton = (id) => {
    removeAddToCart(id);
    const updatedData = allData.filter((item) => item.product_id !== id);
    setAllData(updatedData);
    calculateTotalPrice();
  };

  

  return (
    <>
      <div className="flex items-center justify-between mx-auto pt-10 lg:px-10 cursor-pointer ">
        <div>
          <h2 className="font-bold text-xl">Cart</h2>
        </div>

        <div className="flex items-center justify-center lg:gap-6">
          <div className="hidden lg:block font-bold text-xl">
            Total cost: ${totalPrice.toFixed(2)}
          </div>
          <div
            onClick={sortByPrice}
            className="text-Color font-bold border border-Color w-40 h-10 flex items-center justify-center rounded-xl cursor-pointer"
          >
            Sort By Price
            <FaSortNumericUpAlt size={20} />
          </div>

          <div
            onClick={handlePurchaseClick}
            className="w-24 h-10 text-white font-bold flex items-center justify-center rounded-xl bg-Color"
          >
            Purchase
          </div>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box max-w-[400px]">
          <div className="font-bold text-lg flex items-center justify-center">
            <img src={Group} alt="" />
          </div>
          <p className="text-center font-bold pt-6">
            Thank you for your purchase!
          </p>
          <p className="text-center font-bold pt-6">
            Total: ${totalPrice.toFixed(3)}
          </p>
          <div className="modal-action flex items-center justify-center">
            <NavLink to="/">
              <button
                className="py-2 px-6 border border-Color font-bold text-xl text-Color rounded-xl"
                onClick={() => document.getElementById('my_modal_4').close()}
              >
                Close
              </button>
            </NavLink>
          </div>
        </div>
      </dialog>

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
              <div className="w-10 pt-3">
              </div>
            </div>
            <div className="flex-shrink-0 text-red-600">
              <FaRegTrashAlt
                onClick={() => handelButton(item.product_id)}
                size={30}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
