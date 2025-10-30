import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const VideoTitle = ({ movieTitle, movieOverview }) => {
  return (
    <div className="pt-72 px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{movieTitle}</h1>
      <p className="w-1/4 py-2">{movieOverview}</p>
      <button className="px-5 py-2 bg-white text-black rounded-md hover:opacity-70">
        <div className="flex align-middle">
          <CiPlay1 className="mt-1 me-1" />
          <span>Play</span>
        </div>
      </button>
      <button className="mx-3 px-5 py-2 bg-gray-500 text-white rounded-md opacity-50 hover:opacity-40">
        <div className="flex align-middle">
          <AiOutlineExclamationCircle className="mt-1 me-1" />
          <span>Help</span>
        </div>
      </button>
    </div>
  );
};

export default VideoTitle;
