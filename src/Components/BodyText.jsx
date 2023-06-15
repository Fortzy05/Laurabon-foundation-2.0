import React from "react";

export default function BodyText() {
  return (
    <article className="p-6">
      <div className="m-auto">
        <h1 className="text-center text-gray-600 text-xl font-serif">
          How can we pray for you?
        </h1>
        <p className="flex flex-col text-center text-gray-600 text-lg font-serif">
          with everything happening in the world right now, we know you have a
          lot on your mind.
          <span className="text-center">
            Remember, God is always here for you! And whatever you are concerned
            about or need
          </span>
          <span className="text-center">we are here to pray with you!</span>
        </p>
        <div className="flex md:flex-row flex-col gap-5 space-x-3 justify-center p-2 py-9">
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
