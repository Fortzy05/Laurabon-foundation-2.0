import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

export default function HeaderCenterMenu() {
  return (
    <>
      <div className="flex md:hidden items-center flex-grow flex-shrink ml-8">
        <form className="flex p-[3px] items-center text-[#574e54] bg-[#e8e8ea] text-sm rounded-full focus:outline-none flex-grow">
          <MagnifyingGlassIcon className="ml-2 h-[18px] text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="md:hidden bg-[#e8e8ea] py-[3px] rounded-full focus:outline-none flex-grow flex-shrink"
          />
        </form>

        <button className="text-base flex-shrink-0  text-[#627986] mx-4">
          Sign In
        </button>
      </div>
      <div className=" md:flex group cursor-pointer hidden mx-auto text-[#03293d] w-screen justify-center p-[10px] space-x-4 items-center flex-shrink-0">
        <Link to="#" className="text-md p-2 ease-in-out">
          WATCH + LISTEN
        </Link>
        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <Link to="Foundation" className="text-md p-4 ease-in-out">
          LAURABON FOUNDATION
        </Link>
        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <Link to="#" className="text-md p-4 ease-in-out">
          STUDY
        </Link>

        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <Link to="#" className="text-md p-4 ease-in-out">
          SHOP
        </Link>
      </div>
    </>
  );
}
