import React, { useEffect, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getallFavorite } from '../Utilities/LocalStorage';

const Navbar = () => {
  const [number, setNumber] = useState(0);
  const { pathname } = useLocation();
  const allData = getallFavorite() || [];

  useEffect(() => {
    setNumber(allData.length);
  }, [allData]);

  return (
    <div className="text-black px-2 lg:px-1">
      <div
        className={`navbar gap-6 rounded-t-xl ${
          pathname !== '/' ? 'bg-white text-black' : 'bg-Color text-white'
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-4xl font-bold text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold ${isActive ? 'text-Color' : 'hover:text-Color'}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold ${isActive ? 'text-Color' : 'hover:text-Color'}`
                  }
                  to="/Statistics"
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold ${isActive ? 'text-Color' : 'hover:text-Color'}`
                  }
                  to="/Dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink
                  className={({ isActive }) =>
                    `font-bold text-black ${
                      isActive ? 'text-Color' : 'hover:text-Color'
                    }`
                  }
                  to="/Login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold px-12">
            Gadget-Heaven
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold text-black ${
                    isActive ? 'text-Color' : 'hover:text-Color'
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? 'text-Color' : 'hover:text-Color'}`
                }
                to="/Statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? 'text-Color' : 'hover:text-Color'}`
                }
                to="/Dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-4 text-black">
            <div className="hidden lg:block">
              <NavLink
                className={({ isActive }) =>
                  `font-bold text-black ${
                    isActive ? 'text-Color' : 'hover:text-Color'
                  }`
                }
                to="/Login"
              >
                Login
              </NavLink>
            </div>

            <div className="relative inline-block">
              <div className="p-4 bg-white rounded-full">
                <BsCart4 className="text-Color" size={20} />
              </div>
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
                {number}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
