import React from "react";

const VideoTitle = ({ movieTitle, movieOverview }) => {
  return (
    <div className="pt-72 px-10 absolute text-white">
      <h1 className="text-4xl font-bold">{movieTitle}</h1>
      <p className="w-1/4 py-2">{movieOverview}</p>
      <button className="px-5 py-2 bg-white text-black rounded-md hover:opacity-70">
        Play
      </button>
      <button className="mx-3 px-5 py-2 bg-white text-black rounded-md opacity-50 hover:opacity-40">
        Help
      </button>
    </div>
  );
};

export default VideoTitle;
