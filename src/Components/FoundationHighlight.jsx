import React from "react";
import lauraFoundation from "../assets/foundation2.png";
import Study from "../assets/study plan.png";
import Prayer from "../assets/Join a prayer group.png";
export default function FoundationHighlight() {
  return (
    <section>
      <div className="container p-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <a href="" className="md:w-full">
            <img
              className="w-full h-auto"
              src={lauraFoundation}
              alt="Image 1"
            />
          </a>
          <div className="md:w-1/2 flex flex-col gap-2">
            <a href="" className="flex-grow">
              <img className="w-full h-full" src={Study} alt="" />
            </a>
            <a href="" className="flex-grow">
              <img className="h-full w-full" src={Prayer} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
