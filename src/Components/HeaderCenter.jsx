import React from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
function HeaderCenter() {
  return (
    <div className="flex shadow-md bg-white h-[40px] mt-4 top-[90px] items-center">
        <button
        id="menu-btn"
        className="flex hamburger md:hidden focus:outline-none"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
        </div>
        <div className="flex md:hidden ml-2 items-center bg-gray-100 rounded-full p-4 px-9">
          <MagnifyingGlassIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="md:hidden ml-3 flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
          />
        </div>
        <p className="flex md:hidden">
          <a href="" className="px-4">
            Sign In
          </a>
        </p>
        <div className="md:flex hidden mx-auto w-screen justify-center p-[10px] space-x-4 py-5 items-center">
          <p className="text-[20px] p-4 text-[rgb(3,41,61)]">WATCH + LISTEN</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] p-4 text-[rgb(3,41,61)]">
            LAURABON FOUNDATION
          </p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] p-4 text-[rgb(3,41,61)]">STUDY</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] font-medium text-[rgb(3,41,61)] flex gap-2 items-center">
            <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
            SHOP
          </p>
        </div>
        </div>
  )
}

export default HeaderCenter