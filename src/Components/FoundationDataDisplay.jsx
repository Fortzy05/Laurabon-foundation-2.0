import React from "react";
import { foundationData } from "./FoudationData";

export default function FoundationDataDisplay() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-2 gap-y-4 md:px-[70px] mb-2">
      {foundationData.map((data, index) => {
        const { img, title, subtitle, text, button } = data;
        return (
          <div
            key={index}
            className=" max-w-2xl overflow-hidden shadow-md m-4 mx-auto px-6 md:shadow-inner"
          >
            <h2 className="py-4 px-1 text-gray-400">{title}</h2>
            <img className="w-full" src={img} alt="image" />
            <div className="px-1 py-4">
              <h3 className="text-[#072F54] text-2xl mb-2 py-2">
                {subtitle}
              </h3>
              <p className="text-gray-600 text-xl font-serif">{text}</p>
              <button className="py-4 px-12 mt-8 text-white bg-[#1F5FBFC2]">
                {button}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
