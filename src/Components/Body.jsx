import React from "react";
import bodyImage from "../assets/andra-fuller-wkgv7i2vtzm-unsplash-1.svg";

function Body() {
  return (
    <section className="">
      <div className="relative">
        <img className="w-full h-auto" src={bodyImage} alt="" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-6 md:space-x-12">
          <button
            href="#"
            className="py-2 px-4 hover:bg-green-400 rounded text-white bg-[#78BDB8] md:text-lg md:uppercase md:px-11 md:py-3"
          >
            Watch Now
          </button>
          <button className="rounded hover:bg-gray-300 bg-white text-sm px-4 py-2 md:text-lg md:uppercase md:px-8 md:py-3">
            Today's Offer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Body;
