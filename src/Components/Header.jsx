import logo from "../assets/main-logo.svg";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import HeaderBottom from "./HeaderBottom";
import HeaderCenter from "./HeaderCenter";
export default function Header() {
  return (
    <nav className="relative container mx-auto overflow-hidden">
      <div className="flex p-2 text-white items-center justify-between space-x-3 w-full h-[42px]  bg-[rgb(7,47,84)]">
        <img className="mt-3 h-7 " src={logo} alt="laurabon logo" />
        <div className="md:flex space-x-6 uppercase text-white font-medium">
          <ul className="flex gap-5 text-white items-center space-x-3">
            <li>
              <a href="" className="text-sm  py-4 px-3">
                PRAYER
              </a>
            </li>
            <div className="h-4 md:inline-flex border-white border-l-2 hidden"></div>
            <li>
              <a href="" className="text-sm  py-4 px-3">
                DONATE
              </a>
            </li>
            <div className="h-4 md:inline-flex border-white border-l-2 hidden "></div>

            <li className="flex gap-2">
              <a href="" className="items-center flex gap-2">
                <ShoppingCartIcon className="h-6 flex" />
                <span className="hidden md:flex py-4 px-3 text-sm">
                  View Cart
                </span>
              </a>
            </li>
            <div className="h-4 md:inline-flex border-white border-l-2 hidden "></div>
            <li className="hidden md:inline-flex">
              <a href="" className="py-4 px-3 text-sm">
                Sign In
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden ml-2 items-center bg-gray-200 rounded-full p-1">
          <MagnifyingGlassIcon className="h-4 text-gray-600 ml-2" />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex ml-3 flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>
      <HeaderCenter />
    </nav>
  );
}
