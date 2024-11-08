import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { product_id, price, product_title, product_image } = data;

  if (data === 'Phones') {
    return (
      <div className="card card-compact bg-base-100 w-72 h-[400px] shadow-xl mx-auto mt-4">
        <div className="card-body">
          <h2 className="font-bold text-2xl">Data Not Found</h2>
          <p className="font-bold">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-compact bg-base-100 w-72 h-[400px] shadow-xl mx-auto mt-4">
      <figure>
        <img
          className="w-full object-cover h-auto"
          src={product_image}
          alt="product_image"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-2xl">{product_title}</h2>
        <p className="font-bold">Price: {price}</p>
        <div className="card-actions justify-start">
          <Link to={`/CardDetails/${product_id}`}>
            <button className="hover:text-purple-700 text-Color border border-purple-600 font-bold py-2 px-4 rounded-full mt-4">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
