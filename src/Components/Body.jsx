import React from "react";
import bodyImage from "../assets/andra-fuller-wkgv7i2vtzm-unsplash-1.svg";

function Body() {
  return (
    <section className="">
      <div className="md:flex w-full md:gap-1 md:p-1 ">
        <img className="md:w-2/3 pb-2" src={bodyImage} alt="" />
        <div className="absolute flex px-[250px] my-[-80px] md:my-[600px] md:px-[380px] gap-2">
          <button className="p-1 rounded  text-white bg-green-300">
            Watch Now
          </button>
          <button className="p-1 rounded bg-white">Today's Offer</button>
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
