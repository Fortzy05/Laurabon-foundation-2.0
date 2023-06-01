import logo from "../assets/main-logo.svg";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import HeaderBottom from "./HeaderBottom";
export default function Header() {
  return (
    <nav className=" overflow-hidden">
      <div className="flex text-white relative items-center justify-between space-x-3 w-full h-[42px]  bg-[rgb(7,47,84)]">
        <img
          className="mt-3 h-0 absolute top-0 lg:left-[50px]"
          src={logo}
          alt="laurabon logo"
        />
        <div className="flex absolute left-[90px]  items-center">
          <ul className="flex gap-5 space-x-2 items-center">
            <li className="ml-[50px] py-4 px-3">
              <a href="" className="text-sm font-medium py-4 px-3">
                PRAYER
              </a>
            </li>
            <div className="h-4 md:inline-flex border-white border-l-2 hidden"></div>
            <li>
              <a href="" className="text-sm font-medium py-4 px-3">
                DONATE
              </a>
            </li>
            <div className="h-4 md:inline-flex border-white border-l-2 hidden "></div>

            <li className="flex gap-2">
              <a href="" className="items-center flex gap-2">
                <ShoppingCartIcon className="h-6 flex" />
                <span className="hidden md:flex py-4 px-3 text-sm font-medium uppercase">View Cart</span>
              </a>
            </li>
            <div className="h-4 md:inline-flex border-white border-l-2 hidden "></div>
            <li className="hidden md:inline-flex">
              <a href="" className="py-4 px-3 text-sm font-medium uppercase">Sign In</a>
            </li>

            <li className="md:flex hidden ml-2 items-center bg-gray-200 rounded-full p-1">
              <MagnifyingGlassIcon className="h-4 text-gray-600 ml-2" />
              <input
                type="text"
                placeholder="Search"
                className="hidden md:inline-flex ml-3 flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex shadow-md bg-white h-[50px] ml-1 top-[75px] items-center">
        <div className="flex md:hidden ml-2 items-center bg-gray-100 rounded-full p-2 px-12">
          <MagnifyingGlassIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="md:hidden ml-3 flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
          />
        </div>
        <p className="flex md:hidden"><a href="">Sign In</a></p>
        <div className="md:flex hidden mx-auto w-screen justify-center p-[10px] space-x-4 py-5 items-center">
          <p className="text-[20px] font-medium text-[rgb(3,41,61)]">
            WATCH + LISTEN
          </p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] font-medium text-[rgb(3,41,61)]">
            LAURABON FOUNDATION
          </p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] font-medium text-[rgb(3,41,61)]">STUDY</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] font-medium text-[rgb(3,41,61)] flex gap-2 items-center">
            <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
            SHOP
          </p>
        </div>
      </div>
      {/* <HeaderBottom className="" /> */}
    </nav>
  );
}
