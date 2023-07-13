import React from "react";
import logo from "../assets/laurabon logo.png";
import {Link} from "react-router-dom"
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
export default function HeaderTop() {
  return (
    <div className="flex text-white items-center justify-between bg-[#072f54] md:h-[42px] mx-auto">
      <Link className="md:mx-auto" to="/">
        <img className="md:mx-auto px-2 h-7" src={logo} alt="laurabon logo" />
      </Link>
      <div className="uppercase flex text-white md:flex md:space-x-11 space-x-4 font-medium">
        <Link to="prayer" className="text-sm py-4 px-2">
          PRAYER
        </Link>

        <Link to="/" className="text-sm py-4 px-2">
          DONATE
        </Link>

        <Link to="/" className="flex items-center space-x-2">
          <ShoppingCartIcon className="h-6" />
          <span className="hidden md:flex text-sm">View Cart</span>
        </Link>

        <Link to="/" className="py-4 px-3 text-sm hidden md:inline-flex">
          Sign In
        </Link>
      </div>
      <form className="md:mx-auto">
        <div className="md:flex hidden items-center bg-white rounded-full p-1">
          <MagnifyingGlassIcon className="h-4 text-gray-600 ml-2" />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex ml-3 flex-shrink items-center bg-transparent outline-none placeholder-gray-500 focus:outline-none text-gray-500"
          />
        </div>
      </form>
    </div>
  );
}
