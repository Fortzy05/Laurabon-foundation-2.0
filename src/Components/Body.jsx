import React from "react";
import bodyImage from "../assets/andra-fuller-wkgv7i2vtzm-unsplash-1.svg";
import BodyText from "./BodyText";

function Body() {
  return (
    <section className="">
      <div className="relative md:px-2">
        <img className="w-full h-full" src={bodyImage} alt="" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-6 md:space-x-12">
          <button
            href="#"
            className="pt-[6px] font-serif pb-[5px] px-[9px] uppercase text-[10px] hover:bg-green-400 rounded text-white bg-[#78BDB8] md:text-lg md:uppercase md:px-11 md:py-3"
          >
            Watch Now!
          </button>
          <button className="rounded pt-[6px] font-serif pb-[5px] px-[9px] text-[10px] hover:bg-gray-300 bg-white md:text-lg uppercase md:px-8 md:py-3">
            Today's Offer
          </button>
        </div>
      </div>
      <BodyText />
    </section>
  );
}

export default Body;
