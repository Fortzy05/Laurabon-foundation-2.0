import React, { useState, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function HeaderCenter() {
  const btnRef = useRef(null);
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    btnRef.current.classList.toggle("open");
    navRef.current.classList.toggle("flex");
    navRef.current.classList.toggle("hidden");
  };

  return (
    <div className="flex p-2 md:h-[42px] items-center bg-white relative">
      
        <button
          id="menu-btn"
          ref={btnRef}
          onClick={toggleMenu}
          className="block hamburger md:hidden focus:outline-none ml-3"
        >
          <div className="hamburger-top"></div>
          <div className="hamburger-middle"></div>
          <div className="hamburger-bottom"></div>
        </button>

        <div
          id="menu"
          className={`${
            isOpen ? "open" : "hidden"
          } absolute top-full mt-11 bg-gray-50 w-full left-6 right-6 drop-shadow-md z-10`}
          ref={navRef}
        >
          <div className="flex flex-col items-center py-8 space-y-6 font-bold">
            <a href="#">Prayer</a>
            <a href="#">Donate</a>
            <a href="#">Shop</a>
            <a href="#">View Cart</a>
            <a href="#">Community</a>
          </div>
        </div>
    
      <div className="flex md:hidden items-center flex-grow flex-shrink ml-8">
        <form className="flex p-[3px] items-center text-[#574e54] bg-[#e8e8ea] text-sm rounded-full focus:outline-none flex-grow">
          <MagnifyingGlassIcon className="ml-2 h-[18px] text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="md:hidden bg-[#e8e8ea] py-[3px] rounded-full focus:outline-none flex-grow flex-shrink"
          />
        </form>

        <button className="text-base flex-shrink-0 p-[5px] text-[#627986] font-semibold">
          Sign In
        </button>
      </div>
      <div className=" md:flex group cursor-pointer hidden mx-auto text-[#03293d] w-screen justify-center p-[10px] space-x-4 items-center flex-shrink-0">
        <a href="#" className="text-md p-2 ease-in-out">
          WATCH + LISTEN
        </a>
        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <a href="#" className="text-md p-4 ease-in-out">
          LAURABON FOUNDATION
        </a>
        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <a href="#" className="text-md p-4 ease-in-out">
          STUDY
        </a>

        <div className="h-4 border-gray-400 border-l-[1px] "></div>
        <a href="#" className="text-md p-4 ease-in-out">
          SHOP
        </a>
      </div>
    </div>
  );
}

export default HeaderCenter;
