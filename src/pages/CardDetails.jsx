import React, { useEffect, useState } from 'react';
import { GiSelfLove } from 'react-icons/gi';
import ReactStars from 'react-rating-stars-component';
import { useLoaderData, useParams } from 'react-router-dom';
import { addData, AddedWishlist } from '../Utilities/LocalStorage';
const CardDetails = () => {
  useEffect(() => {
    document.title = 'Gadget-Heaven/CardDetails';
  }, []);
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const { product_id } = useParams();
  const data = useLoaderData();
  const productNumber = parseInt(product_id);
  useEffect(() => {
    const foundProduct = data.find((item) => item.product_id === productNumber);
    setProduct(foundProduct);
    if (foundProduct && foundProduct.rating) {
      setRating(foundProduct.rating);
    }
  }, [product_id, data]);

  const {
    availability,
    product_image,
    product_title,
    price,
    specification,
    description,
  } = product || {};

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handelButton = (id) => {
    addData(id);
  };

  const handleWishlistButton = (item) => {
    AddedWishlist(item);
  };

  return (
    <div>
      <div className="bg-Color w-full  lg:w-[1200px]  h-96 mx-auto text-center pt-6">
        <p className="text-white font-bold text-2xl lg:text-5xl ">
          Product Details
        </p>
        <p className="text-white pt-4 lg:w-[80%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="-mt-52 flex flex-col items-center py-10 p-8 lg:px-20">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center p-8">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                {product_image ? (
                  <img
                    src={product_image}
                    alt={product_title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                {product_title}
              </h2>
              <p className="text-xl text-gray-600 mt-2">
                Price: <span className="font-bold">{price}</span>
              </p>

              <div className="mt-2">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">
                  {`${availability == true ? 'In Stock ' : 'Out Of Stock'}`}
                </span>
              </div>
              <p className="text-gray-700 mt-4">{description}</p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Specification:
                </h3>
                <ol className="list-decimal list-inside text-gray-700 mt-2">
                  {specification &&
                    specification.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ol>
              </div>

              <div className="flex items-center mt-6 font-bold text-xl">
                <ReactStars
                  count={5}
                  value={rating}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <span className="ml-2 text-gray-700 text-sm">({rating})</span>
              </div>
              <div className="flex items-center ">
                <button
                  onClick={() => handelButton(product)}
                  className={`mt-6 px-6 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    availability
                      ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                  disabled={!availability}
                >
                  {availability ? 'Add To Cart' : 'Unavailable'}
                </button>
                <button
                  onClick={() => handleWishlistButton(product)}
                  className=" px-5 pt-5 text-Color"
                >
                  <GiSelfLove size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
