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
        <div className="flex gap-5 space-x-3 justify-center p-2 py-9">
          <button className="rounded text-white hover:bg-blue-300 bg-blue-500 text-sm px-4 py-2 md:text-base md:uppercase md:px-8 md:py-3">
            send your request
          </button>
          <button className="rounded text-white hover:bg-blue-300 bg-blue-500 text-sm px-8 py-2 md:text-base md:uppercase md:px-16 md:py-3">
            know Jesus
          </button>
        </div>
      </div>
    </article>
  );
}
