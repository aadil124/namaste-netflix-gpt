import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerMovie = useSelector((store) => store?.movies?.movieTrailer);

  if (!trailerMovie || trailerMovie.length === 0) return null;

  return (
    <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${trailerMovie[0].key}?autoplay=1&mute=1&loop=1`}
      title="Movie Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
