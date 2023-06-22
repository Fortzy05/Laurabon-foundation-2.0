import React from "react";

export default function BodyText() {
  return (
    <article className="p-4">
      <div className="">
        <h1 className="text-center text-gray-600 text-2xl pb-4 font-serif">
          How can we pray for you?
        </h1>
        <p className="flex flex-col text-center text-gray-600 md:text-lg text-base font-serif">
          "In the midst of all that's unfolding in the world,
          <span>
            we understand that your mind may be filled with countless thoughts
            and concerns.
          </span>
          But let us remind you that amidst it all, God is ever-present and
          ready to embrace you.
          <span className="text-center">
            No matter what burdens or worries you carry, we stand by your side,
            offering prayers and support.
          </span>
          <span>
            Together, we can navigate through any challenge that comes our way."
          </span>
          <span className="text-center">we are here to pray with you!</span>
        </p>
        <div className="flex md:flex-row flex-col gap-5 space-x-3 justify-center py-6">
          <button className="rounded text-white hover:bg-blue-300 bg-[#7CA4BF] font-serif text-base uppercase px-[30px] py-[13px] min-w-[300px] m-3">
            send your request
          </button>
          <button className="rounded text-white hover:bg-blue-300 bg-[#7CA4BF] font-serif uppercase text-base  px-[30px] py-[13px] min-w-[300px] m-3">
            know Jesus
          </button>
        </div>
      </div>
    </article>
  );
}
