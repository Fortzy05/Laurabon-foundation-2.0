import React, { useState, useRef } from "react";

import HeaderCenterMenu from "./HeaderCenterMenu";

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
      <div className="relative">
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

        <div
          id="menu"
          className={`${
            isOpen ? "open" : "hidden"
          } absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          ref={navRef}
        >
          <div className=" flex flex-col items-center py-8 space-y-6 font-bold">
            <a href="#">Prayer</a>
            <a href="#">Donate</a>
            <a href="#">Shop</a>
            <a href="#">View Cart</a>
            <a href="#">Community</a>
          </div>
        </div>
      </div>
      <HeaderCenterMenu />
    </div>
  );
}

export default HeaderCenter;
