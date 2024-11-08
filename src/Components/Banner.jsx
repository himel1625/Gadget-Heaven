import React from 'react';
import banner from '../assets/banner.jpg';

import { NavLink } from 'react-router-dom';
import Heading from './HEading';

const Banner = () => {
  return (
    <div className='px-2 lg:px-1'>
      <div className="bg-Color  rounded-b-xl h-[450px] lg:h-[520px] pt-10 mb-10 ">
        <div className="lg:flex lg:w-[80%] lg:justify-center lg:flex-col lg:items-center lg:mx-auto text-center ">
          <p className="font-bold text-white text-3xl lg:text-5xl lg:leading-snug">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </p>
          <p className="lg:w-[85%] text-white text-center pt-6 lg:pt-4 text-sm lg:text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="flex items-center justify-center pt-6">
          <NavLink to="/">
            <button className="bg-white font-bold rounded-xl px-6 py-2 text-[#7F3FBF] shadow-md hover:shadow-lg transition-all duration-300">
              Shop Now
            </button>
          </NavLink>
        </div>

        <div className="pt-6 flex justify-center rounded-lg ">
          <img
            className="border border-white-200 rounded-lg backdrop-blur-xl bg-white/30 p-4   h-auto mx-auto w-[90%] object-contain lg:w-[800px] lg:h-[540px] "
            src={banner}
            alt="Gadget Heaven Banner"
          />
        </div>
        <Heading />
      </div>
    </div>
  );
};

export default Banner;
