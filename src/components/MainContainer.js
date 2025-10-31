import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const { original_title, overview, id } = movies[0];

  return (
    <div className="relative">
      <VideoBackground movieId={id} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      <VideoTitle movieTitle={original_title} movieOverview={overview} />
    </div>
  );
};

export default MainContainer;
