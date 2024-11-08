import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  useEffect(() => {
    document.title = 'Gadget-Heaven/Statistics';
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../products.json')
      .then((res) => res.json())
      .then((data) => {
        const baseColor = { r: 149, g: 56, b: 226 };
        const coloredData = data.map((item) => {
          // Scale red intensity by price
          const red = Math.min(255, baseColor.r + item.price * 2);
          const green = Math.max(0, baseColor.g - item.price);
          const blue = baseColor.b;
          const fillColor = `rgb(${red}, ${green}, ${blue})`;
          return { ...item, fill: fillColor };
        });
        setData(coloredData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="bg-Color w-full h-44">
        <div className="mx-auto text-center pt-6">
          <p className="font-bold text-2xl text-white lg:text-4xl">
            Statistics
          </p>
          <p className="font-thin text-white lg:w-[70%] lg:mx-auto pt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div>
        <p className="font-bold text-xl pt-6 lg:text-4xl">Statistics</p>
      </div>
      <div className="flex items-center justify-center">
        <BarChart width={800} height={400} data={data}>
          <XAxis dataKey="brand" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="price" barSize={30}>
            {data.map((entry, index) => (
              <Bar key={`bar-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default Statistics;
