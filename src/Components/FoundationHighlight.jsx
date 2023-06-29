import React from "react";
import lauraFoundation from "../assets/foundation2.png";
import Study from "../assets/study plan.png";
import Prayer from "../assets/Join a prayer group.png";
import {Link} from "react-router-dom"
export default function FoundationHighlight() {
  return (
    <section>
      <div className="container p-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <Link to="#" className="md:w-full">
            <img
              className="w-full h-auto"
              src={lauraFoundation}
              alt="Image 1"
            />
          </Link>
          <div className="md:w-1/2 flex flex-col gap-2">
            <Link to="#" className="flex-grow">
              <img className="w-full h-full" src={Study} alt="#" />
            </Link>
            <Link to="#" className="flex-grow">
              <img className="h-full w-full" src={Prayer} alt="#" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
