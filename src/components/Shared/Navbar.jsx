import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeLinkStyle = "text-black font-bold flex items-center";
  const normalLinkStyle =
    "text-gray-700 hover:text-black flex items-center transition-colors";

  return (
    <nav className="bg-white px-6 py-4 shadow-sm rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center leading-none">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-sm font-medium text-gray-700">
            <li className="flex items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : normalLinkStyle
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && <span className="text-xs mr-1">•</span>}
                    Home
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : normalLinkStyle
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && <span className="text-xs mr-1">•</span>}
                    About
                  </>
                )}
              </NavLink>
            </li>
          </ul>
          <button className="bg-[#1e1e26] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-black transition-colors">
            Contact
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 animate-fadeIn">
          <ul className="flex flex-col space-y-4 text-center text-sm font-medium text-gray-700">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-center ${isActive ? "font-bold" : ""}`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center justify-center">
                    {isActive && <span className="mr-1">•</span>} Home
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-center ${isActive ? "font-bold" : ""}`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center justify-center">
                    {isActive && <span className="mr-1">•</span>} About
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <button className="w-full bg-[#1e1e26] text-white px-6 py-3 rounded-lg text-sm">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
