import logo from "../assets/main-logo.svg";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import HeaderBottom from "./HeaderBottom";
import HeaderCenter from "./HeaderCenter";
export default function Header() {
  return (
    <nav className=" overflow-hidden">
      <div className="flex text-white relative items-center justify-between space-x-3 w-full h-[42px]  bg-[rgb(7,47,84)]">
        <img
          className="mt-3 h-0 absolute top-0 lg:left-[50px]"
          src={logo}
          alt="laurabon logo"
        />
        <div className="flex absolute left-9  items-center">
          <ul className="flex gap-5 flex-grow items-center">
            <li className="ml-[40px]">
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
                <span className="hidden md:flex py-4 px-3 text-sm font-medium uppercase">
                  View Cart
                </span>
              </a>
            </li>
            <div className="h-4 md:inline-flex border-white border-l-2 hidden "></div>
            <li className="hidden md:inline-flex">
              <a href="" className="py-4 px-3 text-sm font-medium uppercase">
                Sign In
              </a>
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
      <HeaderCenter/>
    </nav>
  );
}
