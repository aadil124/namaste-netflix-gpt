import React from "react";

const VideoTitle = ({ movieTitle, movieOverview }) => {
  return (
    <div className="pt-36 px-10">
      <h1 className="text-4xl font-bold">{movieTitle}</h1>
      <p className="w-1/4 py-2">{movieOverview}</p>
      <button className="px-5 py-2 bg-slate-500 text-white rounded-md">
        Play
      </button>
      <button className="mx-3 px-5 py-2 bg-slate-500 text-white rounded-md opacity-50">
        Help
      </button>
    </div>
  );
};

export default VideoTitle;
