import React from "react";
import FoundationDataDisplay from "./FoundationDataDisplay";
import logo from "../assets/laurabon logo.png"

export default function Foundation() {
  return (
    <section>
      <div className="bg-[#072F54]">
        <img src={logo} className="h-18 py-4 mx-auto" />
      </div>

      <div className="flex justify-center">
        <div className="py-5 px-4 md:px-52 flex-col text-center text-gray-600 md:text-xl text-xl font-serif">
          <span>
            "One of the greatest gifts we have as humans is the ability to love
            and care for one another. As compassionate beings, we have a
            responsibility to extend that love and care to those who are in
            need."
          </span>
          <p className="py-5 ">
            Laura Bon foundation is a mission arm of Laura Bon Ministries. Our
            goal is simply to help as many hurting people as we possibly can, to
            alleviate human suffering and to help Christians grow in their
            faith.
          </p>
        </div>
      </div>
      <div className="p-6 ">
        <iframe
          className="mx-auto"
          width="500"
          height="350"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      <FoundationDataDisplay />
    </section>
  );
}
