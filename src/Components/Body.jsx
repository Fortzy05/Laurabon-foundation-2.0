import React from "react";
import bodyImage from "../assets/andra-fuller-wkgv7i2vtzm-unsplash-1.svg";

function Body() {
  return (
    <section className="">
      <div className="grid grid-rows-3 gap-2 p-2">
        <img className="w-2/3" src={bodyImage} alt="" />
        <img className="" src={bodyImage} alt="" />
        <img className="" src={bodyImage} alt="" />
      </div>
    </section>
  );
}

export default Body;
