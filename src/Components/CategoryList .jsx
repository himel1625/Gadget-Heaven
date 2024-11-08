import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const CategoryList = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={` ${pathname.includes('/CardDetails') ? 'hidden' : 'block'} lg:mt-[30%] mt-[29%]`}
    >
      <div className="flex flex-col items-center gap-4 rounded-md shadow-md p-4 w-52 mx-auto pt-4">
        <Link
          to="/"
          className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
        >
          All Products
        </Link>

        {data.map(({ id, category }) => (
          <NavLink
            key={id}
            to={`/ProductCard/${category}`}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded"
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
