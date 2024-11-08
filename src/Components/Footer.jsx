import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-white  border-t h-40 border-gray-200 py-6">
        <div className="container mx-auto px-4 text-center">
     
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Gadget Heaven</h2>
            <p className="text-gray-600 pt-4">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
          <hr className="pb-6" />
          <div className="flex  justify-center gap-6 md:gap-10 lg:gap-44 text-gray-800">
            <div className="mb-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Product Support</li>
                <li>Order Tracking</li>
                <li>Shipping & Delivery</li>
                <li>Returns</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
