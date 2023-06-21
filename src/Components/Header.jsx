import logo from "../assets/logo11.png";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import HeaderCenter from "./HeaderCenter";
export default function Header() {
  return (
    <nav className="sticky top-0 z-50 mx-auto overflow-hidden">
      <div className="flex p-2 text-white items-center justify-between space-x-2 w-full h-[42px]  bg-[#072f54]">
        <img className="md:pl-[100px]  h-7 " src={logo} alt="laurabon logo" />
        <div className="md:flex space-x-7 uppercase text-white font-medium md:space-x-11 flex-shrink-0">
          <ul className="flex gap-1 text-white items-center space-x-2 ">
            <li>
              <a href="" className="text-sm py-4 px-2">
                PRAYER
              </a>
            </li>
            <div className="h-3 md:inline-flex border-gray-300 border-l-[1px] hidden"></div>
            <li>
              <a href="" className="text-sm  py-4 px-2">
                DONATE
              </a>
            </li>
            <div className="h-3 md:inline-flex border-gray-300 border-l-[1px] hidden "></div>

            <li className="flex gap-2">
              <a href="" className="items-center flex gap-2">
                <ShoppingCartIcon className="h-6 flex" />
                <span className="hidden md:flex py-4 px-3 text-sm">
                  View Cart
                </span>
              </a>
            </li>
            <div className="h-3 md:inline-flex border-gray-300 border-l-[1px] hidden "></div>
            <li className="hidden md:inline-flex">
              <a href="" className="py-4 px-3 text-sm">
                Sign In
              </a>
            </li>
          </ul>
        </div>
        <form className="md:pr-[100px]">
          <div className="md:flex hidden ml-2 items-center bg-white rounded-full p-1">
            <MagnifyingGlassIcon className="h-4 text-gray-600 ml-2" />
            <input
              type="text"
              placeholder="Search"
              className="hidden md:inline-flex ml-3 flex-shrink items-center bg-transparent outline-none placeholder-gray-500 focus:outline-none text-gray-500"
            />
          </div>
        </form>
      </div>
      <HeaderCenter />
    </nav>
  );
}
