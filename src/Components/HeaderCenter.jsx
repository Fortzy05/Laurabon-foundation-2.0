import React, {useState} from "react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Hamburger from "./hamburger";

function HeaderCenter() {
  const [hamburgerOpen , setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);}
  return (
    <div className="flex shadow-md h-[50px] mx-auto items-center bg-white">
      <div className="" onClick={toggleHamburger}><Hamburger isOpen={hamburgerOpen} /></div>
      
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
