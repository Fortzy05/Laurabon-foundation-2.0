import React from "react";

function BodySection() {
  return (
    <section className="">
      <div className="relative bg-[#072f54] h-[400px]">
        <div className="absolute border-l-0 h-72 w-64 top-[60px] md:right-[200px] right-16 border-white border-2 border-solid">
          <div className="relative">
            <p className="absolute top-5 text-white font-extrabold text-4xl">
              Be Inspired! Get Motivation From Our Books
            </p>
            <button className="absolute top-[240px] px-4 py-[2px] bg-white text-gray-900">Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodySection;
