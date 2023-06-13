import React from "react";
import bodyImage from "../assets/andra-fuller-wkgv7i2vtzm-unsplash-1.svg";

function Body() {
  return (
    <section className="">
      <div className="">
        <div className="relative">
          <img className="w-full h-auto pb-2" src={bodyImage} alt="" />
          <button
            href="#"
            className="absolute md:uppercase md:right-[500px] right-[250px] bottom-8 md:px-12 md:py-3 rounded md:text-lg text-sm py-2 px-4 text-white bg-[#78BDB8]"
          >
            Watch Now
          </button>
          <button className="absolute md:uppercase md:left-[500px] left-[250px] bottom-8 rounded bg-white md:text-lg text-sm px-4 md:px-12 md:py-3 py-2">
            Today's Offer
          </button>
        </div>

        <div className="gap-1 w-full flex-col pb-2">
          <img className="pb-2 md:p-0" src={bodyImage} alt="" />
          <img className="" src={bodyImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Body;
