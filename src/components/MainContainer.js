import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log("movies", movies);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];

  return (
    <div>
      <VideoTitle movieTitle={original_title} movieOverview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
