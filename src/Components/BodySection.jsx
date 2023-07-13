import React from "react";
import book from "../assets/books.png"

function BodySection() {
  return (
    <section className="bg-[#072f54]">
      <div className="flex p-8 md:gap-8 gap-5 items-center justify-center space-x-11 mx-auto">
          <img src={book} className="hidden h-[320px] md:flex" alt="book" />
        
        <div className="border-l-0 h-[20rem] md:h-[18rem] w-[19rem] border-white border-2 border-solid">
          <div className="">
            <p className=" text-white mt-4 px-4 font-extrabold text-4xl mx-auto">
              Be Inspired! Get Motivation From Our Books
            </p>
            <button className="px-4 mx-6 py-1 my-4 bg-white text-gray-900">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodySection;
