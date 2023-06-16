import React from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
function HeaderCenter() {
  return (
    <div className="flex shadow-md h-[50px] mx-auto items-center bg-white">
      <div className="">
        <button className="flex ml-2 md:hidden focus:outline-none">
          <svg
            class="fill-current h-7 w-7"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
        <div className="md:hidden">
          <div className="absolute flex-col items-center self-end hidden  py-8 mt-10 space-y-6 font-bold bg-gray-900 sm:w-auto left-6 right-6 drop-shadow-md">
            <a href="#">Prayer</a>
            <a href="#">Donate</a>
            <a href="#">Shop</a>
            <a href="#">View Cart</a>
            <a href="#">Community</a>
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center flex-grow flex-shrink">
        <form className="flex p-[2px] ml-2 items-center text-[#574e54] bg-[#e8e8ea] text-base  w-full rounded-full md:max-w-md">
          <MagnifyingGlassIcon className="ml-1 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="md:hidden bg-[#e8e8ea] px-2 py-[2px] rounded-full focus:outline-none flex-grow flex-shrink"
          />
        </form>

        <button className="flex-shrink-0 text-base">
          <span className="p-[5px] text-[#627986] font-semibold">Sign In</span>
        </button>
      </div>
      <div className=" md:flex group hover:text-blue-300 cursor-pointer hidden mx-auto text-[#03293d] w-screen justify-center p-[10px] space-x-4 items-center flex-shrink-0">
        <a
          href=""
          className="text-md p-2 group-hover:text-gray-400 ease-in-out"
        >
          WATCH + LISTEN
        </a>
        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <a
          href=""
          className="text-md p-4 group-hover:text-gray-400 ease-in-out"
        >
          LAURABON FOUNDATION
        </a>
        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <a
          href=""
          className="group-hover:text-gray-400 text-md p-4 ease-in-out hover:text-blue-900"
        >
          STUDY
        </a>

        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <a
          href=""
          className="text-md group-hover:text-gray-400 font-medium flex gap-2 items-center ease-in-out"
        >
          SHOP
        </a>
      </div>
    </div>
  );
}

export default HeaderCenter;
