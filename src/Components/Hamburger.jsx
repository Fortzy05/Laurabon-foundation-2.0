import React from "react";

 function Hamburger({hamburgerOpen}) {
  return (
    <div className="">
      <button
        id="menu-btn"
        className="block hamburger md:hidden focus:outline-none"
      >
        <div className="hamburger-top"></div>
        <div className="hamburger-middle"></div>
        <div className="hamburger-bottom"></div>
      </button>
      <div className="md:hidden">
        <div className="absolute flex-col items-center self-end hidden  py-8 mt-10 space-y-6 font-bold bg-gray-900 sm:w-auto left-6 right-6 drop-shadow-md">
          <a href="#">Prayer</a>
          <a href="#">Donate</a>
          <a href="#">Shop</a>
          <a href="#">View Cart</a>
          <a href="#">Community</a>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
