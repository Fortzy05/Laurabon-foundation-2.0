import React from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
function HeaderCenter() {
  return (
    <div className="flex shadow-md h-[50px] items-center">
      <div>
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
          <div className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#">Prayer</a>
            <a href="#">Donate</a>
            <a href="#">Shop</a>
            <a href="#">View Cart</a>
            <a href="#">Community</a>
          </div>
        </div>
      </div>
<div className='flex items-center mx-auto'>
      <form className="flex md:hidden ml-3 items-center bg-gray-100 rounded-full p-[6px] flex-grow">
        <MagnifyingGlassIcon className="ml-2 h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="md:hidden bg-gray-100 flex-1 px-2 rounded-full focus:outline-none"
        />
      </form>

      <p className="flex md:hidden font-bold text-[#072f54]">
        <a href="" className="px-2 flex-shrink-0 mr-[100px]">
          Sign In
        </a>
      </p>
      </div>
      <div className="md:flex hidden mx-auto text-[#03293d] w-screen justify-center p-[10px] space-x-4 items-center flex-shrink-0">
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