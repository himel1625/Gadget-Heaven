import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
    document.title = 'Gadget-Heaven/Login';
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.length > 0 && password.length > 0;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg  ">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Login - GadgetHaven
        </h2>
        <p className="text-center text-gray-600">
          Please login to your account
        </p>
        <form className="space-y-4">
          <div className="relative">
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              Email
            </label>
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={handleEmailChange}
              className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-gray-600"
            >
              Password
            </label>
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={handlePasswordChange}
              className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <NavLink to="/">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 mt-3 ${
                !isFormValid
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:from-blue-600 hover:to-green-600'
              }`}
            >
              Login
            </button>
          </NavLink>
        </form>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            <NavLink className="text-blue-600 hover:underline">
              Forgot Password?
            </NavLink>
          </p>
          <p className="text-sm text-gray-600">
            Don't have an account?
            <NavLink className="text-blue-600 hover:underline">
              Register here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
