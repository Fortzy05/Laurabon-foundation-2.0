import React from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
function HeaderCenter() {
  return (
    <div className="flex shadow-md h-[50px] items-center">
      <div>
        <button className="flex hamburger md:hidden focus:outline-none bg-red-800">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div className="md:hidden">
          <div className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#">Prayer</a>
            <a href="#">Donate</a>
            <a href="#">Shop</a>
            <a href="#">View Cart</a>
            <a href="#">Community</a>
          </div>
        </div>
      </div>

      <form className="flex md:hidden ml-5 items-center bg-gray-100 rounded-full p-[5px] flex-grow">
        <MagnifyingGlassIcon className="ml-2 h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="md:hidden bg-gray-100 flex-1 px-4 rounded-full focus:outline-none"
        />
      </form>

      <p className="flex md:hidden font-bold text-[#072f54]">
        <a href="" className="px-4">
          Sign In
        </a>
      </p>
      <div className="md:flex hidden mx-auto text-[#03293d] w-screen justify-center p-[10px] space-x-4 items-center">
        <p className="text-[20px] p-4 ">WATCH + LISTEN</p>
        <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
        <p className="text-[20px] p-4">LAURABON FOUNDATION</p>
        <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
        <p className="text-[20px] p-4 ">STUDY</p>
        <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
        <p className="text-[20px] font-medium flex gap-2 items-center">
          <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
          SHOP
        </p>
      </div>
    </div>
  );
}

export default HeaderCenter