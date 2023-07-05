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
        id="menu"
        className={`${
          isOpen ? "flex" : "hidden"
        }  fixed top-18 flex-col items-center uppercase text-[#072F54]  py-8 mt-5 space-y-4 font-normal bg-slate-50 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-10`}
        ref={navRef}
      >
        <Link to="#">Prayer</Link>

        <Link to="/">Watch + Listen</Link>
        <Link to="Foundation">Laura Bon Foundation</Link>
        <Link to="#">Donate</Link>
        <Link to="#">Shop</Link>
        <Link to="#">View Cart</Link>
      </div>
    </div>
  );
}

export default HeaderCenter;
