import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const ProductCard = () => {
  const [product, setProducts] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const filterByproducts = data.filter(
        (item) => item.category === category,
      );
      setProducts(filterByproducts);
    } else {
      setProducts(data);
    }
  }, [data, category]);

  return (
    <div className="lg:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:gap-6 mx-auto lg:mt-[30%]">
      {product.length > 0 ? (
        product.map((item) => <Card key={item.product_id} data={item} />)
      ) : (
        <div className="text-center text-3xl text-gray-500 font-semibold ">
          OOPS! Data not Found
        </div>
      )}
    </div>
  );
};

export default ProductCard;
