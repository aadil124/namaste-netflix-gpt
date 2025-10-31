import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const VideoTitle = ({ movieTitle, movieOverview }) => {
  return (
    <div className="absolute top-1/3 left-10 z-20 text-white max-w-xl">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 drop-shadow-lg">
        {movieTitle}
      </h1>
      <p className="text-sm sm:text-base mb-4 line-clamp-3 opacity-90">
        {movieOverview}
      </p>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-md font-semibold hover:opacity-80 transition">
          <CiPlay1 className="text-lg" /> Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500/70 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-600/70 transition">
          <AiOutlineExclamationCircle className="text-lg" /> Help
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
