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
        <div className="flex absolute lg:left-[600px] items-center">
          <ul className="flex gap-5 space-x-2 items-center">
            <li className="ml-[50px] py-4 px-3">
              <a href="" className="text-xl">PRAYER</a>
            </li>
            <div className="h-4 border-white border-l-2 hidden"></div>
            <li>
              <a href="" className="text-xl">DONATE</a>
            </li>
            <div className="h-4 border-white border-l-2 hidden "></div>

            <li className="flex gap-2 sm:hidden">
              <a href="" className="items-center flex gap-2">
                <ShoppingCartIcon className="h-9 flex" /> <span className="hidden md:inline-flex">View Cart</span>
              </a>
            </li>
            <div className="h-4 border-white border-l-2 hidden "></div>
            <li className="hidden md:inline-flex">
              <a href="">Sign In</a>
            </li>
            <div className="h-4 hidden md:inline-flex border-white border-l-2"></div>
            <li className="flex ml-2 items-center bg-gray-100 rounded-full p-2">
              <MagnifyingGlassIcon className="h-6 text-gray-600" />
              <input
                type="text"
                placeholder="Search"
                className="hidden md:inline-flex ml-3 flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex shadow-md bg-white h-[50px] mx-auto top-[75px] items-center">
        <div className="flex mx-auto w-screen justify-center p-[10px] space-x-4 py-5 items-center">
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
