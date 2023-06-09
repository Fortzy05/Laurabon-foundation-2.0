import React from "react";
import bodyImage from "../assets/andra-fuller-wkgv7i2vtzm-unsplash-1.svg";

function Body() {
  return (
    <section className="">
      <div className="md:flex w-full md:gap-1 md:p-1 ">
        
          <img className="md:w-2/3 pb-2" src={bodyImage} alt="" />
          <div className="absolute px-[500px] gap-2 p-5 bg-[#0c060630] ">
            <a href="#" className="absolute rounded p-1  left-32 text-white bg-green-300">
              Watch Now
            </a>
            <a className="p-1 absolute rounded bg-white">Today's Offer</a>
          </div>

          <div className="md:flex gap-1 w-full flex-col pb-2">
            <img className="pb-2 md:p-0" src={bodyImage} alt="" />
            <img className="" src={bodyImage} alt="" />
          </div>
      </div>
    </section>
  );
}

export default Body;
