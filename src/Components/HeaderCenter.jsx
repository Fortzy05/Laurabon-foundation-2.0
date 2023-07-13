import React, { useState, useRef } from "react";

import HeaderCenterMenu from "./HeaderCenterMenu";
import { Link } from "react-router-dom";

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
    <div className="relative">
      <div className="flex p-2 md:h-[42px] items-center bg-white relative">
        <button
          id="menu-btn"
          ref={btnRef}
          onClick={toggleMenu}
          className="block hamburger md:hidden focus:outline-none ml-1"
        >
          <div className="hamburger-top"></div>
          <div className="hamburger-middle"></div>
          <div className="hamburger-bottom"></div>
        </button>
        <HeaderCenterMenu />
      </div>
      <div
        className={`fixed top-25 left-0 w-full h-1/2 flex-col transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute flex  flex-col px-5 uppercase text-[#072F54] py-8 mt-3 space-y-4 font-normal bg-slate-50 sm:w-auto sm:self-center right-6 left-6 drop-shadow-md">
          <Link to="prayer">Prayer</Link>
          <Link to="/">Watch + Listen</Link>
          <Link to="Foundation">Laura Bon Foundation</Link>
          <Link to="#">Donate</Link>
          <Link to="#">Shop</Link>
          <Link to="#">View Cart</Link>
        </div>
        <div
          className={`top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-10 ${
            isOpen ? "flex" : "hidden"
          }`}
          onClick={toggleMenu}
        ></div>
      </div>
    </div>
  );
}

export default HeaderCenter;
